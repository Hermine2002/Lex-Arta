import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/terms/",
  title: "Terms of Use | LEX ARTA",
  heading: "Terms of Use",
  description: "Terms governing access to and use of lexarta.co.",
  heroImage: "/images/terms-hero-2026.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Website terms</div>
                <h1>Terms of Use</h1>
                <p className="hero-lead">Terms governing access to and use of lexarta.co.</p>
                <div className="hero-meta">
                  <span>Effective date: 29 September 2026</span>
                  <span>Website operator: Artlex Global LTD</span>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="LEX ARTA professional services"
                  loading="lazy"
                  src="/images/terms-hero-2026.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="legal-intro">
          <div className="container inner">
            <strong>Website information is not a client engagement.</strong>
            <p>
              Client services are governed by the relevant engagement documentation and, where
              incorporated, the General Terms of Business.
            </p>
          </div>
        </section>
        <section className="legal-main">
          <div className="container legal-layout">
            <aside className="toc">
              <h2>On this page</h2>
              <a href="/terms/#s-operator-and-purpose">5.1 Operator and purpose</a>
              <a href="/terms/#s-no-engagement">5.2 No engagement</a>
              <a href="/terms/#s-website-use">5.3 Website use</a>
              <a href="/terms/#s-intellectual-property-and-links">
                5.4 Intellectual property and links
              </a>
              <a href="/terms/#s-liability-and-law">5.5 Liability and law</a>
            </aside>
            <article>
              <section id="s-operator-and-purpose">
                <div className="caps">5.1</div>
                <h2>Operator and purpose</h2>
                <p>
                  lexarta.co is operated by Artlex Global LTD, registered in England and Wales under
                  company number 17479929. Website content is general information for business
                  users. It is not legal, regulatory, tax, accounting, investment or other
                  professional advice tailored to a particular matter.
                </p>
              </section>
              <section id="s-no-engagement">
                <div className="caps">5.2</div>
                <h2>No engagement</h2>
                <p>
                  Browsing the Website, submitting a form, sending information or attending an
                  introductory call does not create a client or professional relationship. An
                  engagement begins only when Artlex Global LTD or Artlex Consult s.r.o., as the
                  identified contracting entity, accepts a defined scope in writing.
                </p>
              </section>
              <section id="s-website-use">
                <div className="caps">5.3</div>
                <h2>Website use</h2>
                <p>
                  You may use Website content for lawful internal business information. You must not
                  misuse the Website, attempt unauthorised access, introduce malicious code, submit
                  knowingly false information, impersonate another person or use the Website for
                  unlawful or unsolicited-marketing activity.
                </p>
              </section>
              <section id="s-intellectual-property-and-links">
                <div className="caps">5.4</div>
                <h2>Intellectual property and links</h2>
                <p>
                  Website content is owned by or licensed to Artlex Global LTD. You may not
                  reproduce, commercially exploit, systematically extract, republish or use the LEX
                  ARTA Brand in a manner that suggests affiliation without written permission.
                  Third-party links are provided for convenience only; we do not control or accept
                  responsibility for third-party content or services.
                </p>
              </section>
              <section id="s-liability-and-law">
                <div className="caps">5.5</div>
                <h2>Liability and law</h2>
                <p>
                  To the extent permitted by law, Artlex Global LTD is not liable for loss arising
                  solely from use of, or reliance on, general Website content or from third-party
                  websites. Nothing excludes liability that cannot lawfully be excluded.
                </p>
                <p>
                  These Terms are governed by the law of England and Wales. The courts of England
                  and Wales have exclusive jurisdiction, subject to any mandatory law that applies
                  otherwise.
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
