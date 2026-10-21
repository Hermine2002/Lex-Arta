import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/admin-layout";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin | LEX ARTA" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminLayout,
});
