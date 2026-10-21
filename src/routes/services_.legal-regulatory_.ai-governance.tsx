import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/legal-regulatory_/ai-governance")({
  head: ({ matches }) => pageHead("/services/legal-regulatory/ai-governance/", matches),
  component: () => <SitePage path="/services/legal-regulatory/ai-governance/" />,
});
