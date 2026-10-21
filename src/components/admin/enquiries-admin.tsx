import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  deleteEnquiry,
  listEnquiries,
  updateEnquiry,
  type Enquiry,
  type EnquiryStatus,
} from "@/lib/enquiries";
import { PageTitle, Panel, field, useNotice } from "./ui-bits";

const STATUS: { value: EnquiryStatus; label: string }[] = [
  { value: "new", label: "New" },
  { value: "in_progress", label: "In progress" },
  { value: "done", label: "Done" },
];

function csvCell(v: string) {
  return `"${v.replace(/"/g, '""')}"`;
}

export function EnquiriesAdmin() {
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | EnquiryStatus>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const n = useNotice();

  const load = useCallback(async () => {
    setLoading(true);
    const res = await listEnquiries();
    setRows(res.rows);
    setNotes(Object.fromEntries(res.rows.map((r) => [r.id, r.notes ?? ""])));
    if (res.error) n.fail(res.error);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => void load(), [load]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter(
      (r) =>
        (filter === "all" || r.status === filter) &&
        (!q ||
          [r.first_name, r.last_name, r.email, r.company_name, r.country, r.description]
            .join(" ")
            .toLowerCase()
            .includes(q)),
    );
  }, [rows, filter, query]);

  const counts = useMemo(
    () => ({
      all: rows.length,
      new: rows.filter((r) => r.status === "new").length,
      in_progress: rows.filter((r) => r.status === "in_progress").length,
      done: rows.filter((r) => r.status === "done").length,
    }),
    [rows],
  );

  async function setStatus(r: Enquiry, status: EnquiryStatus) {
    const err = await updateEnquiry(r.id, { status });
    if (err) return n.fail(err);
    setRows((all) => all.map((x) => (x.id === r.id ? { ...x, status } : x)));
  }
  async function saveNotes(r: Enquiry) {
    const err = await updateEnquiry(r.id, { notes: notes[r.id] || null });
    if (err) return n.fail(err);
    n.ok("Notes saved.");
    setRows((all) => all.map((x) => (x.id === r.id ? { ...x, notes: notes[r.id] || null } : x)));
  }
  async function remove(r: Enquiry) {
    if (!window.confirm(`Delete the enquiry from ${r.first_name} ${r.last_name}?`)) return;
    const err = await deleteEnquiry(r.id);
    if (err) return n.fail(err);
    setRows((all) => all.filter((x) => x.id !== r.id));
  }
  function exportCsv() {
    const head = ["Date", "First name", "Last name", "Email", "Phone", "Country", "As", "Company", "Services", "Request", "Source", "Status", "Notes"];
    const lines = shown.map((r) =>
      [
        r.created_at,
        r.first_name,
        r.last_name,
        r.email,
        r.phone,
        r.country,
        r.contacting_as,
        r.company_name,
        r.services.join("; "),
        r.description,
        r.source,
        r.status,
        r.notes ?? "",
      ]
        .map(csvCell)
        .join(","),
    );
    const blob = new Blob(["\ufeff" + [head.map(csvCell).join(","), ...lines].join("\n")], {
      type: "text/csv;charset=utf-8",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <>
      <PageTitle
        title="Enquiries"
        hint="Every consultation request is stored here. Email and SMS alerts are sent by the notify-enquiry function (see ADMIN.md)."
      />
      <div className="mb-4 grid gap-3 sm:grid-cols-4">
        {(["all", "new", "in_progress", "done"] as const).map((k) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={`rounded-md border bg-card p-4 text-left ${filter === k ? "border-primary" : ""}`}
          >
            <div className="text-2xl font-medium">{counts[k]}</div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">
              {k === "all" ? "All" : STATUS.find((s) => s.value === k)!.label}
            </div>
          </button>
        ))}
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input
          className={`${field} max-w-xs`}
          placeholder="Search name, email, company…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline" size="sm" onClick={() => void load()}>
          Refresh
        </Button>
        <Button variant="outline" size="sm" onClick={exportCsv} disabled={!shown.length}>
          Export CSV
        </Button>
        {n.node}
      </div>
      {loading ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : !shown.length ? (
        <Panel>
          <p className="text-sm text-muted-foreground">No enquiries match.</p>
        </Panel>
      ) : (
        <div className="space-y-3">
          {shown.map((r) => (
            <Panel key={r.id} className="p-0">
              <button
                className="flex w-full items-center justify-between gap-4 p-4 text-left"
                onClick={() => setOpen(open === r.id ? null : r.id)}
                aria-expanded={open === r.id}
              >
                <span>
                  <strong>
                    {r.first_name} {r.last_name}
                  </strong>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {r.company_name || r.contacting_as} · {r.country}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {new Date(r.created_at).toLocaleString()} · {r.services.join(", ")}
                  </span>
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs ${r.status === "new" ? "bg-primary text-primary-foreground" : "bg-accent"}`}
                >
                  {STATUS.find((s) => s.value === r.status)!.label}
                </span>
              </button>
              {open === r.id && (
                <div className="space-y-4 border-t p-4 text-sm">
                  <dl className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    <dt className="text-muted-foreground">Email</dt>
                    <dd>
                      <a className="text-primary underline" href={`mailto:${r.email}`}>
                        {r.email}
                      </a>
                    </dd>
                    <dt className="text-muted-foreground">Phone</dt>
                    <dd>{r.phone || "—"}</dd>
                    <dt className="text-muted-foreground">Contacting as</dt>
                    <dd>{r.contacting_as || "—"}</dd>
                    <dt className="text-muted-foreground">Heard about us</dt>
                    <dd>{r.source || "—"}</dd>
                  </dl>
                  <p className="whitespace-pre-wrap rounded bg-muted p-3">{r.description}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <select
                      className={`${field} w-auto`}
                      value={r.status}
                      onChange={(e) => void setStatus(r, e.target.value as EnquiryStatus)}
                      aria-label="Status"
                    >
                      {STATUS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <Button variant="outline" size="sm" onClick={() => void remove(r)}>
                      Delete
                    </Button>
                  </div>
                  <div>
                    <textarea
                      className={field}
                      rows={3}
                      placeholder="Internal notes"
                      value={notes[r.id] ?? ""}
                      onChange={(e) => setNotes((m) => ({ ...m, [r.id]: e.target.value }))}
                    />
                    <Button size="sm" className="mt-2" onClick={() => void saveNotes(r)}>
                      Save notes
                    </Button>
                  </div>
                </div>
              )}
            </Panel>
          ))}
        </div>
      )}
    </>
  );
}
