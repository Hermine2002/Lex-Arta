import { createFileRoute } from "@tanstack/react-router";
import { SettingsAdmin } from "@/components/admin/settings-admin";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsAdmin,
});
