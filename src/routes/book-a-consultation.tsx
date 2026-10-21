import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/book-a-consultation")({
  head: ({ matches }) => pageHead("/book-a-consultation/", matches),
  component: () => <SitePage path="/book-a-consultation/" />,
});
