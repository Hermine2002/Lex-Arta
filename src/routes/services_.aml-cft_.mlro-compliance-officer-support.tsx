import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/aml-cft_/mlro-compliance-officer-support")({
  head: ({ matches }) => pageHead("/services/aml-cft/mlro-compliance-officer-support/", matches),
  component: () => <SitePage path="/services/aml-cft/mlro-compliance-officer-support/" />,
});
