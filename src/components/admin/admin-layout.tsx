import { Link, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GateMessage, signOut, useAdminAuth } from "./auth";

const NAV = [
  { to: "/admin", label: "Enquiries", exact: true },
  { to: "/admin/pages", label: "Pages & SEO", exact: false },
  { to: "/admin/content", label: "Text editor", exact: false },
  { to: "/admin/links", label: "Links", exact: false },
  { to: "/admin/settings", label: "Site settings", exact: false },
] as const;

export function AdminLayout() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const auth = useAdminAuth();
  if (!mounted) return null;
  if (auth.status !== "ok")
    return (
      <div className="min-h-screen bg-muted">
        <GateMessage state={auth} />
      </div>
    );
  return (
    <div className="flex min-h-screen bg-muted text-foreground">
      <aside className="hidden w-60 shrink-0 flex-col border-r bg-card p-5 md:flex">
        <a href="/" className="text-lg font-medium">
          LEX ARTA <span className="text-xs text-muted-foreground">admin</span>
        </a>
        <nav className="mt-8 flex flex-1 flex-col gap-1 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.exact }}
              className="rounded px-3 py-2 hover:bg-accent"
              activeProps={{ className: "rounded px-3 py-2 bg-accent font-semibold text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <p className="mb-2 truncate text-xs text-muted-foreground">{auth.email}</p>
        <Button variant="outline" size="sm" onClick={() => void signOut()}>
          Sign out
        </Button>
        <a href="/" className="mt-3 text-xs text-primary underline">
          View site ↗
        </a>
      </aside>
      <div className="min-w-0 flex-1">
        <nav className="flex gap-1 overflow-x-auto border-b bg-card p-2 text-sm md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.exact }}
              className="whitespace-nowrap rounded px-3 py-1.5"
              activeProps={{ className: "whitespace-nowrap rounded px-3 py-1.5 bg-accent font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <main className="mx-auto max-w-6xl p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
