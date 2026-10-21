import { getRouteApi, useRouter } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { listBlocks, setBlock } from "@/lib/html-blocks";
import { deleteOverride, saveOverride } from "@/lib/page-overrides";
import { pages } from "@/lib/site-content";
import { PageTitle, Panel, field, useNotice } from "./ui-bits";

export function ContentAdmin() {
  const router = useRouter();
  const overrides = getRouteApi("__root__").useLoaderData()?.overrides ?? {};
  const paths = useMemo(() => Object.keys(pages).sort(), []);
  const [path, setPath] = useState("");
  const [edits, setEdits] = useState<Record<number, string>>({});
  const [busy, setBusy] = useState(false);
  const n = useNotice();

  const currentHtml = path ? overrides[path]?.html || pages[path]!.html : "";
  const blocks = useMemo(() => (currentHtml ? listBlocks(currentHtml) : []), [currentHtml]);
  const dirty = Object.keys(edits).length;

  async function save() {
    let html = currentHtml;
    // Apply from the end so an edit can never shift the index of an earlier block.
    for (const i of Object.keys(edits).map(Number).sort((a, b) => b - a)) html = setBlock(html, i, edits[i]!);
    setBusy(true);
    const err = await saveOverride(path, { html });
    setBusy(false);
    if (err) return n.fail(err);
    await router.invalidate();
    setEdits({});
    n.ok(`${dirty} block${dirty === 1 ? "" : "s"} saved.`);
  }
  async function reset() {
    if (!window.confirm("Discard all text edits for this page?")) return;
    const err = await deleteOverride(path);
    if (err) return n.fail(err);
    await router.invalidate();
    setEdits({});
    n.ok("Restored to the bundled text.");
  }

  return (
    <>
      <PageTitle
        title="Text editor"
        hint="Edit every heading, paragraph, list item and button label of a page without touching HTML. Inline tags such as <strong> and <a> are kept in the text."
      />
      <Panel className="mb-5">
        <select
          className={`${field} max-w-xl`}
          value={path}
          onChange={(e) => {
            setPath(e.target.value);
            setEdits({});
            n.clear();
          }}
          aria-label="Page"
        >
          <option value="">Choose a page…</option>
          {paths.map((p) => (
            <option key={p} value={p}>
              {p} — {pages[p]!.title}
            </option>
          ))}
        </select>
      </Panel>
      {path && (
        <>
          <div className="sticky top-0 z-10 mb-4 flex flex-wrap items-center gap-3 rounded-md border bg-card p-3">
            <Button onClick={() => void save()} disabled={!dirty || busy}>
              {busy ? "Saving…" : `Save ${dirty || ""} change${dirty === 1 ? "" : "s"}`.trim()}
            </Button>
            <Button variant="outline" onClick={() => setEdits({})} disabled={!dirty}>
              Undo unsaved
            </Button>
            <Button variant="outline" onClick={() => void reset()} disabled={!overrides[path]?.html}>
              Reset page
            </Button>
            <a className="text-sm text-primary underline" href={path} target="_blank" rel="noreferrer">
              Preview ↗
            </a>
            {n.node}
          </div>
          <div className="space-y-3">
            {blocks.map((b) => {
              const value = edits[b.index] ?? b.html;
              return (
                <Panel key={b.index} className="p-3">
                  <div className="mb-1 flex items-center justify-between text-[11px] uppercase tracking-wide text-muted-foreground">
                    <span>
                      {b.tag}
                      {b.hasMarkup && " · contains markup"}
                    </span>
                    {edits[b.index] !== undefined && <span className="text-primary">edited</span>}
                  </div>
                  <textarea
                    className={`${field} ${b.tag.startsWith("h") ? "font-semibold" : ""}`}
                    rows={Math.min(8, Math.max(1, Math.ceil(value.length / 110)))}
                    value={value}
                    onChange={(e) => {
                      const v = e.target.value;
                      setEdits((m) => {
                        const next = { ...m };
                        if (v === b.html) delete next[b.index];
                        else next[b.index] = v;
                        return next;
                      });
                    }}
                  />
                </Panel>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
