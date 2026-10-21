import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/data-protection_/international-data-transfers")({
  head: ({ matches }) => pageHead("/services/data-protection/international-data-transfers/", matches),
  component: () => <SitePage path="/services/data-protection/international-data-transfers/" />,
});
