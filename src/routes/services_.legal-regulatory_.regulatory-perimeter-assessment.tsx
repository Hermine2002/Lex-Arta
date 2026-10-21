import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/legal-regulatory_/regulatory-perimeter-assessment")({
  head: ({ matches }) => pageHead("/services/legal-regulatory/regulatory-perimeter-assessment/", matches),
  component: () => <SitePage path="/services/legal-regulatory/regulatory-perimeter-assessment/" />,
});
