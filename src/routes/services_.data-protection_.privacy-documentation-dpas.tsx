import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/data-protection_/privacy-documentation-dpas")({
  head: ({ matches }) => pageHead("/services/data-protection/privacy-documentation-dpas/", matches),
  component: () => <SitePage path="/services/data-protection/privacy-documentation-dpas/" />,
});
