import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/corporate-governance_/trademark-brand-protection")({
  head: ({ matches }) => pageHead("/services/corporate-governance/trademark-brand-protection/", matches),
  component: () => <SitePage path="/services/corporate-governance/trademark-brand-protection/" />,
});
