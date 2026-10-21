/** Turns page HTML into a flat list of editable text blocks and links, and applies edits back. Browser-only (DOMParser). */

const TEXT_SEL =
  "h1,h2,h3,h4,h5,h6,p,li,summary,blockquote,td,th,figcaption,dt,dd,legend,button,label";
const CONTAINER_SEL =
  "h1,h2,h3,h4,h5,h6,p,li,ul,ol,table,blockquote,div,section,article,details,form,fieldset";

export type TextBlock = { index: number; tag: string; html: string; hasMarkup: boolean };
export type LinkItem = { index: number; text: string; href: string; blank: boolean };

function parse(html: string): Document {
  return new DOMParser().parseFromString(`<body>${html}</body>`, "text/html");
}

function textElements(doc: Document): HTMLElement[] {
  return Array.from(doc.body.querySelectorAll<HTMLElement>(TEXT_SEL)).filter(
    (el) =>
      !el.querySelector(CONTAINER_SEL) &&
      !el.closest("script,style") &&
      (el.textContent ?? "").trim() !== "",
  );
}

export function listBlocks(html: string): TextBlock[] {
  return textElements(parse(html)).map((el, index) => ({
    index,
    tag: el.tagName.toLowerCase(),
    html: el.innerHTML.trim(),
    hasMarkup: el.children.length > 0,
  }));
}

export function listLinks(html: string): LinkItem[] {
  return Array.from(parse(html).body.querySelectorAll("a")).map((a, index) => ({
    index,
    text: (a.textContent ?? "").trim().replace(/\s+/g, " "),
    href: a.getAttribute("href") ?? "",
    blank: a.getAttribute("target") === "_blank",
  }));
}

export function setBlock(html: string, index: number, value: string): string {
  const doc = parse(html);
  const el = textElements(doc)[index];
  if (!el) return html;
  el.innerHTML = value;
  return doc.body.innerHTML;
}

export function setLink(
  html: string,
  index: number,
  patch: Partial<Pick<LinkItem, "href" | "blank">>,
): string {
  const doc = parse(html);
  const a = doc.body.querySelectorAll("a")[index];
  if (!a) return html;
  if (patch.href !== undefined) a.setAttribute("href", patch.href.trim());
  if (patch.blank !== undefined) {
    if (patch.blank) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    } else {
      a.removeAttribute("target");
      a.removeAttribute("rel");
    }
  }
  return doc.body.innerHTML;
}

export type LinkStatus = "ok" | "external" | "mail" | "broken" | "empty";

/** Classifies an href against the set of known internal page paths. */
export function linkStatus(href: string, known: Set<string>): LinkStatus {
  const h = href.trim();
  if (!h || h === "#" || h.toLowerCase().startsWith("javascript:")) return "empty";
  if (/^(mailto:|tel:)/i.test(h)) return "mail";
  if (/^https?:\/\//i.test(h)) return "external";
  if (h.startsWith("#")) return "ok";
  if (h.startsWith("/")) {
    if (h.startsWith("/__l5e")) return "ok";
    let p = h.split("#")[0]!.split("?")[0]!;
    if (!p.endsWith("/")) p += "/";
    return known.has(p) ? "ok" : "broken";
  }
  return "broken";
}
