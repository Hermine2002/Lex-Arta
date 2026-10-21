/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OriginalContent } from "./site-content";
import { shared } from "@/data/site-shared";
import type { NavGroup } from "@/lib/site-settings";

export function SiteHeader({
  path,
  groups = shared.groups as NavGroup[],
}: {
  path: string;
  groups?: NavGroup[] | undefined;
}) {
  const [menu, setMenu] = useState(false);
  const [services, setServices] = useState(false);
  useEffect(() => {
    setMenu(false);
    setServices(false);
  }, [path]);
  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="LEX ARTA home">
        <span className="">
          <img
                alt="LEX ARTA logo"
                loading="lazy"
                src="/images/lex-arta-logo.png"
              />
          <span />
        </span>
        <span className="brand-name">
          LEX ARTA<small>LEGAL & COMPLIANCE</small>
        </span>
      </a>
      <nav
        className={menu ? "primary-nav mobile-open" : "primary-nav"}
        aria-label="Main navigation"
      >
        <a href="/" className={path === "/" ? "active" : ""}>
          Home
        </a>
        <div
          className="services-nav"
          onMouseEnter={() => setServices(true)}
          onMouseLeave={() => setServices(false)}
        >
          <div className="services-nav-label">
            <a href="/services/" className={path.startsWith("/services") ? "active" : ""}>
              Services
            </a>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Show services"
              aria-expanded={services}
              onClick={() => setServices(!services)}
            >
              <ChevronDown size={12} />
            </Button>
          </div>
          {services && (
            <div className="mega-menu">
              <a className="all-services" href="/services/">
                All services <ArrowUpRight size={16} />
              </a>
              <div className="mega-grid">
                {groups.map((group) => (
                  <div key={group.href}>
                    <a className="mega-heading" href={group.href}>
                      {group.label}
                    </a>
                    {group.links.map((link) => (
                      <a key={link.href} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <a href="/insights/" className={path === "/insights/" ? "active" : ""}>
          Insights
        </a>
        <a href="/about/" className={path === "/about/" ? "active" : ""}>
          About
        </a>
        <a href="/contact/" className={path === "/contact/" ? "active" : ""}>
          Contact
        </a>
      </nav>
      <Button asChild className="header-cta" size="lg">
        <a href="/book-a-consultation/">
          Book a Consultation <ArrowUpRight />
        </a>
      </Button>
      <Button
        className="mobile-toggle"
        size="icon"
        variant="ghost"
        aria-label={menu ? "Close navigation" : "Open navigation"}
        aria-expanded={menu}
        onClick={() => setMenu(!menu)}
      >
        {menu ? <X /> : <Menu />}
      </Button>
    </header>
  );
}

export function SiteFooter({
  html = shared.footer,
  socials,
}: {
  html?: string | undefined;
  socials?: Record<string, string> | undefined;
}) {
  return <OriginalContent html={html} socials={socials} />;
}

export function CookieChoices() {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lexarta_cookie_consent_v1");
      setVisible(!saved);
      if (saved) setAnalytics(Boolean(JSON.parse(saved).analytics));
    } catch {
      setVisible(true);
    }
  }, []);
  function save(value: boolean) {
    try {
      localStorage.setItem(
        "lexarta_cookie_consent_v1",
        JSON.stringify({ necessary: true, analytics: value, updatedAt: new Date().toISOString() }),
      );
    } catch {
      /* Storage may be disabled. */
    }
    setAnalytics(value);
    setVisible(false);
    setSettings(false);
  }
  return (
    <>
      {visible && !settings && (
        <section className="cookie-banner" aria-label="Cookie choices">
          <div>
            <h2>Your cookie choices</h2>
            <p>
              We use essential storage to remember your choice. Optional analytics is used only if
              you agree. Read our <a href="/cookies/">Cookie Policy</a>.
            </p>
          </div>
          <div className="cookie-actions">
            <Button size="sm" onClick={() => save(true)}>
              Accept analytics
            </Button>
            <Button size="sm" variant="outline" onClick={() => save(false)}>
              Reject analytics
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setSettings(true)}>
              Settings
            </Button>
          </div>
        </section>
      )}
      {!visible && (
        <Button
          className="cookie-trigger"
          size="sm"
          variant="outline"
          onClick={() => setSettings(true)}
        >
          <Globe2 size={13} />
          Cookie settings
        </Button>
      )}
      {settings && (
        <div className="modal-backdrop" onClick={() => setSettings(false)}>
          <section
            className="cookie-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie settings"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Cookie settings</h2>
            <p>
              Essential storage is required to save your choice. Analytics is optional and can be
              changed at any time.
            </p>
            <label>
              <input type="checkbox" checked disabled />
              <span>
                <strong>Essential</strong>Stores your cookie preference and supports the website’s
                basic operation.
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <span>
                <strong>Analytics</strong>Helps us understand aggregate website use. It remains off
                unless you choose it.
              </span>
            </label>
            <div className="cookie-actions">
              <Button onClick={() => save(analytics)}>Save choices</Button>
              <Button variant="outline" onClick={() => setSettings(false)}>
                Cancel
              </Button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
