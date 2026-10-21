import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/insights")({
  head: ({ matches }) => pageHead("/insights/", matches),
  component: () => <SitePage path="/insights/" />,
});
