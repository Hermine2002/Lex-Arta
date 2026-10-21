import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/cookies/",
  title: "Cookie Policy | LEX ARTA",
  heading: "Cookie Policy",
  description: "How lexarta.co uses necessary browser storage and optional analytics choices.",
  heroImage: "/images/cookies-hero-2026.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Privacy and technology</div>
                <h1>Cookie Policy</h1>
                <p className="hero-lead">How lexarta.co uses cookies and similar technologies.</p>
                <div className="hero-meta">
                  <span>Effective date: 29 September 2026</span>
                  <span>Website operator: Artlex Global LTD</span>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="LEX ARTA professional services"
                  loading="lazy"
                  src="/images/cookies-hero-2026.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="legal-intro">
          <div className="container inner">
            <strong>You control optional analytics.</strong>
            <p>
              Analytics remains off unless you make a positive choice and a provider has been
              configured. You can change your choice at any time through Cookie Settings.
            </p>
          </div>
        </section>
        <section className="legal-main">
          <div className="container legal-layout">
            <aside className="toc">
              <h2>On this page</h2>
              <a href="/cookies/#s-scope">4.1 Scope</a>
              <a href="/cookies/#s-necessary-storage">4.2 Necessary storage</a>
              <a href="/cookies/#s-analytics">4.3 Analytics</a>
              <a href="/cookies/#s-advertising">4.4 Advertising</a>
              <a href="/cookies/#s-consent-choices">4.5 Consent choices</a>
              <a href="/cookies/#s-current-inventory">4.6 Current inventory</a>
              <a href="/cookies/#s-changes-and-contact">4.7 Changes and contact</a>
            </aside>
            <article>
              <section id="s-scope">
                <div className="caps">4.1</div>
                <h2>Scope</h2>
                <p>
                  This Policy explains how lexarta.co uses cookies and similar storage or access
                  technologies under PECR and the UK GDPR. It should be read with the{" "}
                  <a href="/privacy/">Privacy Policy</a>.
                </p>
              </section>
              <section id="s-necessary-storage">
                <div className="caps">4.2</div>
                <h2>Necessary storage</h2>
                <p>
                  Strictly necessary technologies may operate without consent where the applicable
                  PECR exception applies. The Website currently uses browser storage to record the
                  visitor’s consent choice.
                </p>
              </section>
              <section id="s-analytics">
                <div className="caps">4.3</div>
                <h2>Analytics</h2>
                <p>
                  Analytics is optional and remains disabled by default. No analytics provider is
                  currently activated on lexarta.co. The consent interface is designed to prevent an
                  optional analytics provider from loading until the visitor gives a positive
                  choice.
                </p>
                <p>
                  Before Plausible Analytics or another provider is enabled, this Policy will be
                  updated with the provider, technology names, purposes, retention information and
                  any relevant transfer details.
                </p>
              </section>
              <section id="s-advertising">
                <div className="caps">4.4</div>
                <h2>Advertising</h2>
                <p>
                  Advertising, remarketing and cross-site tracking technologies are not activated on
                  this Website. If they are introduced, the Cookie Policy and consent interface will
                  be updated before activation.
                </p>
              </section>
              <section id="s-consent-choices">
                <div className="caps">4.5</div>
                <h2>Consent choices</h2>
                <p>
                  The consent interface gives an equal choice to accept optional analytics, reject
                  it or manage settings. Refusing analytics does not prevent access to ordinary
                  Website content. A visitor may revisit the choice through the Cookie settings
                  button.
                </p>
              </section>
              <section id="s-current-inventory">
                <div className="caps">4.6</div>
                <h2>Current inventory</h2>
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Technology</th>
                      <th>Provider</th>
                      <th>Purpose</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>lexarta_cookie_consent_v1</td>
                      <td>Artlex Global LTD</td>
                      <td>
                        Browser-storage record of the visitor’s cookie choice. It remains until
                        changed or browser storage is cleared.
                      </td>
                      <td>Necessary</td>
                    </tr>
                  </tbody>
                </table>
                <p>No analytics or advertising cookie is currently activated.</p>
              </section>
              <section id="s-changes-and-contact">
                <div className="caps">4.7</div>
                <h2>Changes and contact</h2>
                <p>
                  This Policy is reviewed when the Website’s hosting, analytics, embedded content,
                  forms, CRM, marketing or consent technology materially changes. Questions may be
                  sent to{" "}
                  <a href="mailto:info@lexarta.co?subject=Cookie%20Policy">info@lexarta.co</a>.
                </p>
              </section>
            </article>
          </div>
        </section>
        <section className="final-cta">
          <div className="final-cta-strip">
            <div className="container final-cta-inner">
              <div>
                <h2>Questions about this page?</h2>
                <p>
                  Contact Artlex Global LTD at <a href="mailto:info@lexarta.co">info@lexarta.co</a>.
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href="/contact/">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
