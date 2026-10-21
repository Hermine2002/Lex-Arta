import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/disclaimer")({
  head: ({ matches }) => pageHead("/disclaimer/", matches),
  component: () => <SitePage path="/disclaimer/" />,
});
