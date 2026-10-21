import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/disclaimer/",
  title: "Legal and Regulatory Disclaimer | LEX ARTA",
  heading: "Legal and Regulatory Disclaimer",
  description:
    "The scope and limits of Artlex Global LTD advisory services and separate-provider work.",
  heroImage: "/images/disclaimer-hero-2026.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Professional boundaries</div>
                <h1>Legal and Regulatory Disclaimer</h1>
                <p className="hero-lead">
                  The scope and limits of information and advisory services provided through
                  lexarta.co.
                </p>
                <div className="hero-meta">
                  <span>Effective date: 29 September 2026</span>
                  <span>Website operator: Artlex Global LTD</span>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="LEX ARTA professional services"
                  loading="lazy"
                  src="/images/disclaimer-hero-2026.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="legal-intro">
          <div className="container inner">
            <strong>Clear limits for legal, regulatory and professional services.</strong>
            <p>
              This page explains the scope of advisory work offered through lexarta.co and the role
              of separately appointed providers where a service is outside the scope of the company
              identified in the engagement documentation.
            </p>
          </div>
        </section>
        <section className="legal-main">
          <div className="container legal-layout">
            <aside className="toc">
              <h2>On this page</h2>
              <a href="/disclaimer/#s-professional-status">6.1 Professional status</a>
              <a href="/disclaimer/#s-reserved-and-excluded-services">
                6.2 Reserved and excluded services
              </a>
              <a href="/disclaimer/#s-market-entry-and-licensing">6.3 Market entry and licensing</a>
              <a href="/disclaimer/#s-separate-providers">6.4 Separate providers</a>
              <a href="/disclaimer/#s-no-guaranteed-outcomes">6.5 No guaranteed outcomes</a>
              <a href="/disclaimer/#s-general-information-and-privilege">
                6.6 General information and privilege
              </a>
            </aside>
            <article>
              <section id="s-professional-status">
                <div className="caps">6.1</div>
                <h2>Professional status</h2>
                <p>
                  Services available through lexarta.co may be contracted with Artlex Global LTD or
                  Artlex Consult s.r.o., as identified in the applicable written engagement
                  documentation. Artlex Global LTD provides international regulatory, compliance and
                  business advisory services and lawful non-reserved legal services. It is not a
                  firm of solicitors, is not authorised by the Solicitors Regulation Authority and
                  does not carry on reserved legal activities. Artlex Consult s.r.o. is not a Czech
                  law firm (advokátní kancelář). Each company undertakes only work within its lawful
                  professional perimeter.
                </p>
              </section>
              <section id="s-reserved-and-excluded-services">
                <div className="caps">6.2</div>
                <h2>Reserved and excluded services</h2>
                <p>
                  Whether an activity is non-reserved under the Legal Services Act 2007 does not
                  determine whether it falls within another regulated or supervised perimeter. We
                  assess the actual activity before acceptance. Neither Artlex Global LTD nor Artlex
                  Consult s.r.o. provides company formation, off-the-shelf firms, registered-office
                  or address services, director arrangements, nominee or trustee services,
                  client-money handling or other excluded TCSP services under its own engagements.
                </p>
              </section>
              <section id="s-market-entry-and-licensing">
                <div className="caps">6.3</div>
                <h2>Market entry and licensing</h2>
                <p>
                  References to market entry, licensing or launch support mean advisory work only
                  unless a separate written scope expressly states otherwise. We may assess
                  requirements, prepare regulatory materials and coordinate the advisory workstream.
                  We do not supply a company, bank account, payment account, licence, corporate
                  officer, registered address or other excluded service.
                </p>
              </section>
              <section id="s-separate-providers">
                <div className="caps">6.4</div>
                <h2>Separate providers</h2>
                <p>
                  Where a client needs an excluded local execution service, the client appoints the
                  appropriately qualified provider directly. The company identified in the
                  Engagement Documentation may continue a distinct advisory engagement where the
                  scopes are separate and lawful. An introduction does not make either Artlex Global
                  LTD or Artlex Consult s.r.o. responsible for that provider’s advice, performance,
                  fees, timetable, acceptance decision or outcome.
                </p>
              </section>
              <section id="s-no-guaranteed-outcomes">
                <div className="caps">6.5</div>
                <h2>No guaranteed outcomes</h2>
                <p>
                  Regulators, banks, payment providers, licensing authorities and other third
                  parties make their own decisions. We do not guarantee a licence, registration,
                  incorporation, bank or payment account, provider onboarding, approval, timetable
                  or commercial result.
                </p>
              </section>
              <section id="s-general-information-and-privilege">
                <div className="caps">6.6</div>
                <h2>General information and privilege</h2>
                <p>
                  Website content is general information and does not replace advice based on the
                  client’s specific facts. No Website statement expands our lawful service perimeter
                  or overrides written engagement documentation. Communications with Artlex Global
                  LTD should not be assumed to attract legal professional privilege unless expressly
                  confirmed for a particular engagement.
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
