import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site-page";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute(
  "/insights_/mica-in-the-czech-republic-from-casp-licensing-to-active-supervision",
)({
  head: ({ matches }) =>
    pageHead(
      "/insights/mica-in-the-czech-republic-from-casp-licensing-to-active-supervision/",
      matches,
    ),
  component: () => (
    <SitePage path="/insights/mica-in-the-czech-republic-from-casp-licensing-to-active-supervision/" />
  ),
});
