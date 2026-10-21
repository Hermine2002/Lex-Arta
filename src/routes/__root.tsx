import type { QueryClient } from "@tanstack/react-query";
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/site-layout";
import { fetchOverrides } from "@/lib/page-overrides";
import { fetchSettings } from "@/lib/site-settings";

function NotFound() {
  return (
    <main className="lx-basic" id="main-content">
      <p className="kicker">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <p>
        <a href="/">Back to the home page</a> ·{" "}
        <a href="/services/">Browse services</a>
      </p>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    // Admin-edited pages and site settings are public reads; both fall back to bundled defaults.
    loader: async () => {
      const [settings, overrides] = await Promise.all([
        fetchSettings(),
        fetchOverrides(),
      ]);
      return { settings, overrides };
    },
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          title:
            "International Legal, Regulatory & Compliance Advisory | LEX ARTA",
        },
        {
          name: "description",
          content:
            "International legal, regulatory and compliance advisory for regulated and cross-border businesses.",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.ico" },
      ],
    }),
    shellComponent: RootShell,
    component: SiteLayout,
    notFoundComponent: NotFound,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
