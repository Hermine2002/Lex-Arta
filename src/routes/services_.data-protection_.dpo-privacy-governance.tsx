import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/data-protection_/dpo-privacy-governance")({
  head: ({ matches }) => pageHead("/services/data-protection/dpo-privacy-governance/", matches),
  component: () => <SitePage path="/services/data-protection/dpo-privacy-governance/" />,
});
