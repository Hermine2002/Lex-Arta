import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/licensing_/licensing-strategy-jurisdiction-assessment")({
  head: ({ matches }) => pageHead("/services/licensing/licensing-strategy-jurisdiction-assessment/", matches),
  component: () => <SitePage path="/services/licensing/licensing-strategy-jurisdiction-assessment/" />,
});
