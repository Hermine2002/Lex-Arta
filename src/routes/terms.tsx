import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/terms")({
  head: ({ matches }) => pageHead("/terms/", matches),
  component: () => <SitePage path="/terms/" />,
});
