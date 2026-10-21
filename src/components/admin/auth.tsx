import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSupabase } from "@/lib/supabase";

export type AuthState =
  | { status: "loading" }
  | { status: "unconfigured" }
  | { status: "signed-out" }
  | { status: "forbidden"; email: string }
  | { status: "ok"; email: string };

export function useAdminAuth(): AuthState {
  const [state, setState] = useState<AuthState>({ status: "loading" });
  useEffect(() => {
    const sb = getSupabase();
    if (!sb) {
      setState({ status: "unconfigured" });
      return;
    }
    let alive = true;
    async function check(session: Session | null) {
      if (!session) {
        if (alive) setState({ status: "signed-out" });
        return;
      }
      const { data, error } = await sb!.rpc("is_admin");
      if (!alive) return;
      const email = session.user.email ?? "";
      setState(!error && data === true ? { status: "ok", email } : { status: "forbidden", email });
    }
    void sb.auth.getSession().then(({ data }) => check(data.session));
    const { data: sub } = sb.auth.onAuthStateChange((_event, session) => {
      // Defer: supabase calls made synchronously inside this callback can deadlock.
      setTimeout(() => void check(session), 0);
    });
    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, []);
  return state;
}

export async function signOut() {
  await getSupabase()?.auth.signOut();
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mt-24 max-w-md rounded-md border bg-card p-8 shadow-sm">{children}</div>
  );
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error } = await getSupabase()!.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) setError(error.message);
  }
  return (
    <Card>
      <h1 className="text-2xl font-medium">LEX ARTA admin</h1>
      <p className="mt-2 text-sm text-muted-foreground">Sign in with your administrator account.</p>
      <form onSubmit={submit} className="mt-6 space-y-3">
        <Input
          type="email"
          required
          placeholder="Email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" disabled={busy} className="w-full">
          {busy ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </Card>
  );
}

export function GateMessage({ state }: { state: AuthState }) {
  if (state.status === "loading")
    return (
      <Card>
        <p className="text-sm text-muted-foreground">Loading…</p>
      </Card>
    );
  if (state.status === "unconfigured")
    return (
      <Card>
        <h1 className="text-xl font-medium">Backend not configured</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Set <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_PUBLISHABLE_KEY</code>, run the
          SQL files in <code>supabase/migrations</code>, then reload. See ADMIN.md.
        </p>
      </Card>
    );
  if (state.status === "signed-out") return <LoginForm />;
  if (state.status === "forbidden")
    return (
      <Card>
        <h1 className="text-xl font-medium">No access</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {state.email} is not on the administrators list. Add it with{" "}
          <code>insert into public.admins (email) values (...)</code>.
        </p>
        <Button className="mt-5" variant="outline" onClick={() => void signOut()}>
          Sign out
        </Button>
      </Card>
    );
  return null;
}
