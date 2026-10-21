import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/data-protection_/data-breach-incident-response")({
  head: ({ matches }) => pageHead("/services/data-protection/data-breach-incident-response/", matches),
  component: () => <SitePage path="/services/data-protection/data-breach-incident-response/" />,
});
