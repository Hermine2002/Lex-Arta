import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/aml-cft_/aml-audit-independent-review")({
  head: ({ matches }) => pageHead("/services/aml-cft/aml-audit-independent-review/", matches),
  component: () => <SitePage path="/services/aml-cft/aml-audit-independent-review/" />,
});
