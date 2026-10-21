import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute(
  "/insights_/dora-ict-third-party-register",
)({
  head: ({ matches }) =>
    pageHead("/insights/dora-ict-third-party-register/", matches),
  component: () => <SitePage path="/insights/dora-ict-third-party-register/" />,
});
