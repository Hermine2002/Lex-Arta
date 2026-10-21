import { createFileRoute } from "@tanstack/react-router";
import { ContentAdmin } from "@/components/admin/content-admin";

export const Route = createFileRoute("/admin/content")({
  component: ContentAdmin,
});
