import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/legal-notice")({
  head: ({ matches }) => pageHead("/legal-notice/", matches),
  component: () => <SitePage path="/legal-notice/" />,
});
