import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/licensing")({
  head: ({ matches }) => pageHead("/services/licensing/", matches),
  component: () => <SitePage path="/services/licensing/" />,
});
