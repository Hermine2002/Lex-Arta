import { useRouter, getRouteApi } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { pages } from "@/lib/site-content";
import { deleteOverride, saveOverride } from "@/lib/page-overrides";
import { PageTitle, Panel, field, useNotice } from "./ui-bits";

export function PagesAdmin() {
  const router = useRouter();
  const overrides = getRouteApi("__root__").useLoaderData()?.overrides ?? {};
  const paths = useMemo(() => Object.keys(pages).sort(), []);
  const [query, setQuery] = useState("");
  const [path, setPath] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [html, setHtml] = useState("");
  const [busy, setBusy] = useState(false);
  const n = useNotice();

  function select(p: string) {
    const base = pages[p]!;
    const o = overrides[p];
    setPath(p);
    setTitle(o?.title || base.title);
    setDescription(o?.description || base.description);
    setHtml(o?.html || base.html);
    n.clear();
  }

  async function save() {
    if (!path) return;
    const base = pages[path]!;
    setBusy(true);
    const err = await saveOverride(path, {
      title: title === base.title ? null : title,
      description: description === base.description ? null : description,
      html: html === base.html ? null : html,
    });
    setBusy(false);
    if (err) return n.fail(err);
    await router.invalidate();
    n.ok("Saved. The live page now uses these values.");
  }
  async function reset() {
    if (!path || !window.confirm("Discard all admin edits for this page?")) return;
    const err = await deleteOverride(path);
    if (err) return n.fail(err);
    await router.invalidate();
    select(path);
    n.ok("Page restored to the bundled content.");
  }

  const list = paths.filter((p) => !query || p.includes(query.toLowerCase()) || pages[p]!.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <PageTitle
        title="Pages & SEO"
        hint="Edit the browser title, meta description and full HTML of any page. Reset returns a page to the bundled version."
      />
      <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <Panel className="max-h-[75vh] overflow-auto p-3">
          <input className={`${field} mb-3`} placeholder="Search pages…" value={query} onChange={(e) => setQuery(e.target.value)} />
          <ul className="space-y-1 text-sm">
            {list.map((p) => (
              <li key={p}>
                <button
                  onClick={() => select(p)}
                  className={`w-full rounded px-2 py-1.5 text-left hover:bg-accent ${path === p ? "bg-accent font-semibold" : ""}`}
                >
                  {p}
                  {overrides[p] && <span className="ml-2 rounded bg-primary px-1.5 text-[10px] text-primary-foreground">edited</span>}
                </button>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          {!path ? (
            <p className="text-sm text-muted-foreground">Choose a page on the left.</p>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <a className="text-sm text-primary underline" href={path} target="_blank" rel="noreferrer">
                  {path} ↗
                </a>
              </div>
              <label className="block text-sm">
                Title <span className="text-xs text-muted-foreground">({title.length} characters)</span>
                <input className={`${field} mt-1`} value={title} onChange={(e) => setTitle(e.target.value)} />
              </label>
              <label className="block text-sm">
                Meta description <span className="text-xs text-muted-foreground">({description.length} / 160)</span>
                <textarea className={`${field} mt-1`} rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
              </label>
              <label className="block text-sm">
                Page HTML
                <textarea className={`${field} mt-1 font-mono text-xs`} rows={18} value={html} onChange={(e) => setHtml(e.target.value)} spellCheck={false} />
              </label>
              <div className="flex flex-wrap items-center gap-3">
                <Button onClick={() => void save()} disabled={busy}>
                  {busy ? "Saving…" : "Save"}
                </Button>
                <Button variant="outline" onClick={() => void reset()}>
                  Reset to default
                </Button>
                {n.node}
              </div>
            </div>
          )}
        </Panel>
      </div>
    </>
  );
}
