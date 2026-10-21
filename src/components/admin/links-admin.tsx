import { getRouteApi, useRouter } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { linkStatus, listLinks, setLink, type LinkStatus } from "@/lib/html-blocks";
import { saveOverride } from "@/lib/page-overrides";
import { pages } from "@/lib/site-content";
import { PageTitle, Panel, field, useNotice } from "./ui-bits";

const BADGE: Record<LinkStatus, string> = {
  ok: "bg-accent",
  external: "bg-muted",
  mail: "bg-muted",
  broken: "bg-destructive text-primary-foreground",
  empty: "bg-destructive text-primary-foreground",
};

export function LinksAdmin() {
  const router = useRouter();
  const overrides = getRouteApi("__root__").useLoaderData()?.overrides ?? {};
  const paths = useMemo(() => Object.keys(pages).sort(), []);
  const known = useMemo(() => new Set(paths), [paths]);
  const htmlOf = (p: string) => overrides[p]?.html || pages[p]!.html;
  const [path, setPath] = useState("");
  const [edits, setEdits] = useState<Record<number, { href?: string; blank?: boolean }>>({});
  const [busy, setBusy] = useState(false);
  const n = useNotice();

  // Site-wide scan: every page's links checked against the known routes.
  const scan = useMemo(
    () =>
      paths.map((p) => {
        const links = listLinks(htmlOf(p));
        return { path: p, total: links.length, broken: links.filter((l) => ["broken", "empty"].includes(linkStatus(l.href, known))).length };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [paths, known, overrides],
  );
  const brokenTotal = scan.reduce((s, r) => s + r.broken, 0);
  const links = useMemo(() => (path ? listLinks(htmlOf(path)) : []), [path, overrides]); // eslint-disable-line react-hooks/exhaustive-deps
  const dirty = Object.keys(edits).length;

  async function save() {
    let html = htmlOf(path);
    for (const [i, patch] of Object.entries(edits)) html = setLink(html, Number(i), patch);
    setBusy(true);
    const err = await saveOverride(path, { html });
    setBusy(false);
    if (err) return n.fail(err);
    await router.invalidate();
    setEdits({});
    n.ok("Links saved.");
  }

  return (
    <>
      <PageTitle title="Links" hint="Find and fix broken links. External links open in a new tab; internal links navigate without reloading the header." />
      <Panel className="mb-5">
        <p className="mb-3 text-sm">
          Site scan: <strong>{paths.length}</strong> pages,{" "}
          <strong className={brokenTotal ? "text-destructive" : "text-primary"}>{brokenTotal} broken or empty link{brokenTotal === 1 ? "" : "s"}</strong>
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {scan
            .filter((r) => r.broken)
            .map((r) => (
              <button key={r.path} onClick={() => { setPath(r.path); setEdits({}); }} className="rounded bg-destructive px-2 py-1 text-primary-foreground">
                {r.path} · {r.broken}
              </button>
            ))}
          {!brokenTotal && <span className="text-muted-foreground">All internal links resolve.</span>}
        </div>
      </Panel>
      <Panel className="mb-5">
        <select className={`${field} max-w-xl`} value={path} onChange={(e) => { setPath(e.target.value); setEdits({}); n.clear(); }} aria-label="Page">
          <option value="">Choose a page…</option>
          {paths.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </Panel>
      {path && (
        <Panel>
          <div className="mb-4 flex items-center gap-3">
            <Button onClick={() => void save()} disabled={!dirty || busy}>{busy ? "Saving…" : "Save links"}</Button>
            {n.node}
          </div>
          <ul className="divide-y text-sm">
            {links.map((l) => {
              const href = edits[l.index]?.href ?? l.href;
              const blank = edits[l.index]?.blank ?? l.blank;
              const status = linkStatus(href, known);
              return (
                <li key={l.index} className="grid gap-2 py-3 md:grid-cols-[1fr_2fr_auto_auto] md:items-center">
                  <span className="truncate" title={l.text}>{l.text || "(image / icon)"}</span>
                  <input className={field} value={href} onChange={(e) => setEdits((m) => ({ ...m, [l.index]: { ...m[l.index], href: e.target.value } }))} />
                  <label className="flex items-center gap-1 text-xs">
                    <input type="checkbox" checked={blank} onChange={(e) => setEdits((m) => ({ ...m, [l.index]: { ...m[l.index], blank: e.target.checked } }))} /> new tab
                  </label>
                  <span className={`rounded px-2 py-0.5 text-xs ${BADGE[status]}`}>{status}</span>
                </li>
              );
            })}
          </ul>
        </Panel>
      )}
    </>
  );
}
