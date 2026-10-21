import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/services_/licensing_/mica-casp")({
  head: ({ matches }) => pageHead("/services/licensing/mica-casp/", matches),
  component: () => <SitePage path="/services/licensing/mica-casp/" />,
});
