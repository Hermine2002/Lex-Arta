import { createFileRoute } from "@tanstack/react-router";
import { PagesAdmin } from "@/components/admin/pages-admin";

export const Route = createFileRoute("/admin/pages")({
  component: PagesAdmin,
});
