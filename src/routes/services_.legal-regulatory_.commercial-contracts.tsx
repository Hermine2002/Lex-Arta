import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/legal-regulatory_/commercial-contracts")({
  head: ({ matches }) => pageHead("/services/legal-regulatory/commercial-contracts/", matches),
  component: () => <SitePage path="/services/legal-regulatory/commercial-contracts/" />,
});
