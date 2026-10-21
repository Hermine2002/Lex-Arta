import {
  Outlet,
  getRouteApi,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { themeCss, defaultSettings } from "@/lib/site-settings";
import type { MouseEvent } from "react";
import { CookieChoices, SiteFooter, SiteHeader } from "./site-shell";

/**
 * Persistent shell: header, footer and cookie UI live here ONCE (in the root
 * route) and never remount when navigating. Only <Outlet/> (page content)
 * changes between pages.
 */
export function SiteLayout() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const data = getRouteApi("__root__").useLoaderData();
  const settings = data?.settings ?? defaultSettings;
  const footerHtml = data?.overrides?.["__footer__"]?.html || undefined;
  const css = themeCss(settings.theme);
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");

  // Client-side navigation for every internal link, including links that come
  // from the audited HTML content and the footer (plain <a href> would force a
  // full page reload and re-render the header each time).
  function onClick(e: MouseEvent<HTMLDivElement>) {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    )
      return;
    const target = e.target;
    if (!(target instanceof Element)) return;
    const a = target.closest("a");
    if (!a) return;
    if ((a.target && a.target !== "_self") || a.hasAttribute("download"))
      return;
    const href = a.getAttribute("href");
    if (
      !href ||
      !href.startsWith("/") ||
      href.startsWith("//") ||
      href.startsWith("/__l5e")
    )
      return;
    const url = new URL(href, window.location.origin);
    e.preventDefault();
    const clean =
      url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;
    router.history.push(clean + url.search + url.hash);
  }

  if (isAdmin) return <Outlet />;

  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") + "/";

  return (
    <div className="lex-site" onClick={onClick}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      {css && <style>{css}</style>}
      <SiteHeader path={path} groups={settings.nav ?? undefined} />
      <Outlet />
      <SiteFooter html={footerHtml} socials={settings.socials} />
      <CookieChoices />
    </div>
  );
}
