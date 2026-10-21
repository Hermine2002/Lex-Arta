import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute(
  "/insights_/mica-casp-readiness-what-to-check-before-applying",
)({
  head: ({ matches }) =>
    pageHead(
      "/insights/mica-casp-readiness-what-to-check-before-applying/",
      matches,
    ),
  component: () => (
    <SitePage path="/insights/mica-casp-readiness-what-to-check-before-applying/" />
  ),
});
