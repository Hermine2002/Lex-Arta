import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/corporate-governance_/post-licensing-compliance")({
  head: ({ matches }) => pageHead("/services/corporate-governance/post-licensing-compliance/", matches),
  component: () => <SitePage path="/services/corporate-governance/post-licensing-compliance/" />,
});
