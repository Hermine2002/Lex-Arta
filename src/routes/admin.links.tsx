import { createFileRoute } from "@tanstack/react-router";
import { LinksAdmin } from "@/components/admin/links-admin";

export const Route = createFileRoute("/admin/links")({
  component: LinksAdmin,
});
