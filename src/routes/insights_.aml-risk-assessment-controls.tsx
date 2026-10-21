import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/insights_/aml-risk-assessment-controls")(
  {
    head: ({ matches }) =>
      pageHead("/insights/aml-risk-assessment-controls/", matches),
    component: () => (
      <SitePage path="/insights/aml-risk-assessment-controls/" />
    ),
  },
);
