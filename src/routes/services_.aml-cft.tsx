import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/aml-cft")({
  head: ({ matches }) => pageHead("/services/aml-cft/", matches),
  component: () => <SitePage path="/services/aml-cft/" />,
});
