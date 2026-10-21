import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/data-protection_/privacy-audit-independent-review")({
  head: ({ matches }) => pageHead("/services/data-protection/privacy-audit-independent-review/", matches),
  component: () => <SitePage path="/services/data-protection/privacy-audit-independent-review/" />,
});
