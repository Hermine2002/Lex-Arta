import { describe, expect, it } from "vitest";
import { listBlocks, listLinks, setBlock, setLink, linkStatus } from "@/lib/html-blocks";
import { pages } from "@/lib/site-content";

describe("html-blocks", () => {
  const html = '<section><h1>Title</h1><p>Hello <a href="/about/">about</a></p></section>';
  it("lists and edits texts and links", () => {
    expect(listBlocks(html).map((b) => b.tag)).toEqual(["h1", "p"]);
    expect(setBlock(html, 0, "New")).toContain("<h1>New</h1>");
    expect(listLinks(html)[0]!.href).toBe("/about/");
    expect(setLink(html, 0, { href: "/contact/", blank: true })).toContain('href="/contact/"');
  });
  it("every internal link in every page resolves to a real page", () => {
    const known = new Set(Object.keys(pages));
    const bad: string[] = [];
    for (const [p, page] of Object.entries(pages))
      for (const l of listLinks(page.html)) {
        const s = linkStatus(l.href, known);
        if (s === "broken" || s === "empty") bad.push(`${p} -> ${l.href}`);
      }
    expect(bad).toEqual([]);
  });
});
