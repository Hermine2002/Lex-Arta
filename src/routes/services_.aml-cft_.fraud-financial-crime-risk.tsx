import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/aml-cft_/fraud-financial-crime-risk")({
  head: ({ matches }) => pageHead("/services/aml-cft/fraud-financial-crime-risk/", matches),
  component: () => <SitePage path="/services/aml-cft/fraud-financial-crime-risk/" />,
});
