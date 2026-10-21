import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/data-protection_/privacy-impact-risk-assessments")({
  head: ({ matches }) => pageHead("/services/data-protection/privacy-impact-risk-assessments/", matches),
  component: () => <SitePage path="/services/data-protection/privacy-impact-risk-assessments/" />,
});
