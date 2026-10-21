import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/cookies")({
  head: ({ matches }) => pageHead("/cookies/", matches),
  component: () => <SitePage path="/cookies/" />,
});
