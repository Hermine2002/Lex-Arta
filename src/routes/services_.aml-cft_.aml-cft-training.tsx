import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/aml-cft_/aml-cft-training")({
  head: ({ matches }) => pageHead("/services/aml-cft/aml-cft-training/", matches),
  component: () => <SitePage path="/services/aml-cft/aml-cft-training/" />,
});
