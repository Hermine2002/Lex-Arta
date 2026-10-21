import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { registry } from "@/pages";
import { resolveImageUrl } from "@/lib/assets";

export type OriginalPage = {
  title: string;
  heading: string;
  description: string;
  heroImage: string | null;
  /** The page body as an HTML string, rendered from the page's JSX file on first use. */
  readonly html: string;
};

export const pages: Record<string, OriginalPage> = Object.fromEntries(
  Object.entries(registry).map(([path, m]) => {
    let cache: string | undefined;
    const page: OriginalPage = {
      title: m.meta.title,
      heading: m.meta.heading,
      description: m.meta.description,
      heroImage: m.meta.heroImage,
      get html() {
        return (cache ??= renderToStaticMarkup(createElement(m.default)));
      },
    };
    return [path, page];
  }),
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pageHead(path: string, matches?: any[]) {
  const base = pages[path];
  if (!base) return {};
  const override = matches?.find((m) => m.routeId === "__root__")?.loaderData?.overrides?.[path];
  const page = {
    ...base,
    title: override?.title || base.title,
    description: override?.description || base.description,
  };
  const heroImage = page.heroImage ? resolveImageUrl(page.heroImage) : null;
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(heroImage
        ? [
            { property: "og:image", content: heroImage },
            { name: "twitter:image", content: heroImage },
          ]
        : []),
    ],
  };
}
