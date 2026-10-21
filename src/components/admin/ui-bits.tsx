import { useState, type ReactNode } from "react";

export function PageTitle({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-medium">{title}</h1>
      {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-md border bg-card p-5 ${className}`}>{children}</section>;
}

export function useNotice() {
  const [notice, setNotice] = useState<{ ok: boolean; text: string } | null>(null);
  const node = notice ? (
    <p className={`text-sm ${notice.ok ? "text-primary" : "text-destructive"}`} role="status">
      {notice.text}
    </p>
  ) : null;
  return {
    node,
    ok: (text: string) => setNotice({ ok: true, text }),
    fail: (text: string) => setNotice({ ok: false, text }),
    clear: () => setNotice(null),
  };
}

export const field =
  "w-full rounded border border-input bg-card px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-primary";
