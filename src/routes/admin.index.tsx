import { createFileRoute } from "@tanstack/react-router";
import { EnquiriesAdmin } from "@/components/admin/enquiries-admin";

export const Route = createFileRoute("/admin/")({
  component: EnquiriesAdmin,
});
