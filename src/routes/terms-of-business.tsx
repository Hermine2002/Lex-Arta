import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/terms-of-business")({
  head: ({ matches }) => pageHead("/terms-of-business/", matches),
  component: () => <SitePage path="/terms-of-business/" />,
});
