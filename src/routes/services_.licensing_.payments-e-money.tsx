import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/licensing_/payments-e-money")({
  head: ({ matches }) => pageHead("/services/licensing/payments-e-money/", matches),
  component: () => <SitePage path="/services/licensing/payments-e-money/" />,
});
