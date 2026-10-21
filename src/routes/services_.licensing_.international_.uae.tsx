import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/licensing_/international_/uae")({
  head: ({ matches }) => pageHead("/services/licensing/international/uae/", matches),
  component: () => <SitePage path="/services/licensing/international/uae/" />,
});
