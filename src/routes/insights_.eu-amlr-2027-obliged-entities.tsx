import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute(
  "/insights_/eu-amlr-2027-obliged-entities",
)({
  head: ({ matches }) =>
    pageHead("/insights/eu-amlr-2027-obliged-entities/", matches),
  component: () => <SitePage path="/insights/eu-amlr-2027-obliged-entities/" />,
});
