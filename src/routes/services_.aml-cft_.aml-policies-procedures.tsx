import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/aml-cft_/aml-policies-procedures")({
  head: ({ matches }) => pageHead("/services/aml-cft/aml-policies-procedures/", matches),
  component: () => <SitePage path="/services/aml-cft/aml-policies-procedures/" />,
});
