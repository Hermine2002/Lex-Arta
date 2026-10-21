import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/aml-cft_/enterprise-wide-risk-assessment")({
  head: ({ matches }) => pageHead("/services/aml-cft/enterprise-wide-risk-assessment/", matches),
  component: () => <SitePage path="/services/aml-cft/enterprise-wide-risk-assessment/" />,
});
