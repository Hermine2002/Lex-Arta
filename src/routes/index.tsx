import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: ({ matches }) => pageHead("/", matches),
  component: () => <SitePage path="/" />,
});
