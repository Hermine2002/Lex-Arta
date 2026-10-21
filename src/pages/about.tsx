import type { PageMeta } from "./types";

// Route metadata is intentionally exported alongside the page component.
// eslint-disable-next-line react-refresh/only-export-components
export const meta: PageMeta = {
  path: "/about/",
  title: "About LEX ARTA | Artlex Global LTD",
  heading: "International Legal, Regulatory & Compliance Advisory",
  description:
    "Meet LEX ARTA, an international legal, regulatory and compliance advisory brand for regulated and cross-border businesses.",
  heroImage: "/images/570e45abcc938d8bb4f6.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero hero-full">
          <img
            alt="LEX ARTA advisory team in London"
            className="hero-bg"
            loading="lazy"
            src="/images/570e45abcc938d8bb4f6.webp"
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">About LEX ARTA</div>
              <h1>International Legal, Regulatory &amp; Compliance Advisory</h1>
              <p>
                Supporting regulated, technology-driven and cross-border
                businesses with legal, regulatory, compliance and
                data-protection matters across multiple jurisdictions.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="/contact/">
                  Discuss Your Matter
                </a>
                <a className="btn secondary" href="/about/#expertise">
                  Our Expertise
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Who we are</div>
              <h2>About LEX ARTA</h2>
            </div>
            <div className="about-grid">
              <div className="about-copy">
                <p>
                  <strong>
                    LEX ARTA is an international legal, regulatory and
                    compliance advisory brand operated by Artlex Global LTD in
                    the United Kingdom.
                  </strong>
                </p>
                <p>
                  We advise fintech, crypto-asset, financial-services,
                  technology and internationally active businesses on
                  regulatory, compliance, corporate and data-protection matters.
                </p>
                <p>
                  Our work covers licensing and regulatory readiness, AML/CFT,
                  financial-services compliance, governance, data protection,
                  corporate matters and cross-border business issues.
                </p>
                <p>
                  We combine legal analysis with practical understanding of how
                  regulated businesses operate. Our focus is not simply on
                  producing documents, but on ensuring that legal and regulatory
                  requirements are reflected in the business model, governance
                  structure, internal controls, allocation of responsibilities
                  and day-to-day operations.
                </p>
                <p>
                  LEX ARTA is deliberately senior-led. We focus on complex
                  matters where professional judgement, confidentiality, direct
                  involvement and quality of execution make a material
                  difference.
                </p>
              </div>
              <aside className="about-aside">
                <h3>Built for complex regulated business</h3>
                <ul>
                  <li>Senior-led advisory</li>
                  <li>Cross-border regulatory perspective</li>
                  <li>Financial-crime and AML/CFT focus</li>
                  <li>Data protection and privacy expertise</li>
                  <li>FinTech and digital-asset experience</li>
                  <li>Practical implementation, not paperwork alone</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
        <section className="section alt">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What defines us</div>
              <h2>Professional judgement. Confidentiality. Quality.</h2>
            </div>
            <div className="cards">
              <article className="card">
                <h3>Confidentiality</h3>
                <p>
                  Clients entrust us with sensitive commercial, ownership,
                  financial, regulatory and personal-data information.
                  Confidentiality is treated as a core professional obligation
                  throughout every engagement.
                </p>
              </article>
              <article className="card">
                <h3>Independent judgement</h3>
                <p>
                  Our advice is based on applicable law, regulatory expectations
                  and the actual facts of the business — not on the answer that
                  is commercially easiest.
                </p>
              </article>
              <article className="card">
                <h3>Quality over volume</h3>
                <p>
                  We do not operate as a high-volume document provider. We focus
                  on matters where experienced legal and regulatory involvement
                  adds real value.
                </p>
              </article>
              <article className="card">
                <h3>Practical implementation</h3>
                <p>
                  Legal and regulatory requirements must work in practice
                  through governance, controls, responsibilities, records and
                  decision-making processes.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="expertise">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Our expertise</div>
              <h2>Where legal analysis meets regulated business</h2>
            </div>
            <div className="expertise">
              <div>Regulatory &amp; Licensing</div>
              <div>AML/CFT &amp; Financial Crime Compliance</div>
              <div>Financial Services Compliance</div>
              <div>Data Protection &amp; Privacy</div>
              <div>Governance &amp; Internal Controls</div>
              <div>Corporate &amp; Cross-Border Advisory</div>
              <div>FinTech &amp; Digital Assets</div>
              <div>Technology &amp; Emerging Regulation</div>
            </div>
          </div>
        </section>
        <section className="section alt">
          <div className="wrap founder">
            <div className="founder-photo">
              <img
                alt="Hovsep Kocharyan, Founder and CEO of Artlex Global LTD"
                loading="lazy"
                src="/images/0496f2e349ad1e3fae94.webp"
              />
            </div>
            <div className="founder-copy">
              <div className="eyebrow">Founder &amp; CEO</div>
              <h2 id="team">Hovsep Kocharyan, PhD</h2>
              <div className="role">Founder &amp; CEO, Artlex Global LTD</div>
              <p>
                Hovsep Kocharyan is the Founder and CEO of Artlex Global LTD and
                the founder behind the LEX ARTA brand.
              </p>
              <p>
                His professional work focuses on legal, regulatory and
                compliance matters affecting fintech, crypto-assets, financial
                services, technology companies and internationally active
                businesses.
              </p>
              <p>
                His experience includes legal, compliance and executive roles
                within crypto and virtual-asset businesses, as well as work
                involving AML/CFT frameworks, regulatory governance, data
                protection, corporate matters and cross-border regulatory
                projects.
              </p>
              <p>
                Alongside his professional practice, Hovsep is engaged in
                academic work in EU law, public international law, data
                protection and emerging technologies.
              </p>
              <div className="credential">ACAMS Certified</div>
            </div>
          </div>
        </section>
        <section className="quote-section">
          <div className="wrap quote">
            <blockquote>
              “Good regulatory advice should do more than explain the rules. It
              should help a business understand what is viable, what creates
              risk and what must be built correctly from the beginning.”
            </blockquote>
            <cite>
              Hovsep Kocharyan, PhD · Founder &amp; CEO · Artlex Global LTD
            </cite>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Experience behind LEX ARTA</div>
              <h2>Depth across law, compliance and regulated business</h2>
            </div>
            <div className="exp-grid">
              <div className="exp">
                <h3>Legal &amp; Regulatory Advisory</h3>
                <p>
                  Experience across regulated and cross-border business models.
                </p>
              </div>
              <div className="exp">
                <h3>AML/CFT &amp; Financial Crime</h3>
                <p>
                  Practical work with AML frameworks, governance and
                  financial-crime risk.
                </p>
              </div>
              <div className="exp">
                <h3>Data Protection &amp; Privacy</h3>
                <p>
                  Experience with privacy governance, data-protection
                  requirements and regulatory implementation.
                </p>
              </div>
              <div className="exp">
                <h3>FinTech &amp; Digital Assets</h3>
                <p>
                  Regulatory work involving crypto-assets, virtual-asset
                  businesses, payments and technology-driven financial models.
                </p>
              </div>
              <div className="exp">
                <h3>Corporate &amp; Cross-Border Matters</h3>
                <p>
                  Support for internationally active businesses, corporate
                  structures and multi-jurisdictional projects.
                </p>
              </div>
              <div className="exp">
                <h3>Academic Expertise</h3>
                <p>
                  Research and academic work in EU law, data protection and
                  emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section aria-labelledby="practice-title" className="carousel-section">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">LEX ARTA in practice</div>
              <h2 id="practice-title">People, expertise, real work.</h2>
            </div>
            <div className="carousel-shell">
              <div className="carousel-viewport">
                <div className="carousel-track">
                  <article className="carousel-slide">
                    <img
                      alt="Professional training session"
                      loading="lazy"
                      src="/images/8ffecfc4b06d36266dc9.webp"
                    />
                    <div className="carousel-caption">
                      Training &amp; Knowledge Sharing
                    </div>
                  </article>
                  <article className="carousel-slide">
                    <img
                      alt="AML and regulatory risk assessment presentation"
                      loading="lazy"
                      src="/images/7d2757b7171a23ab52b3.webp"
                    />
                    <div className="carousel-caption">Regulatory Advisory</div>
                  </article>
                  <article className="carousel-slide">
                    <img
                      alt="Advisor supporting a client by phone"
                      loading="lazy"
                      src="/images/55e7d76d1b6387631491.webp"
                    />
                    <div className="carousel-caption">Client Support</div>
                  </article>
                  <article className="carousel-slide">
                    <img
                      alt="Advisory team collaborating around a table"
                      loading="lazy"
                      src="/images/045f929db7206c7fd687.webp"
                    />
                    <div className="carousel-caption">Collaborative Work</div>
                  </article>
                  <article className="carousel-slide">
                    <img
                      alt="Compliance professional working at a desk"
                      loading="lazy"
                      src="/images/293c8cf7af8e26b0aa8f.webp"
                    />
                    <div className="carousel-caption">Focused Solutions</div>
                  </article>
                </div>
              </div>
              <div className="carousel-controls">
                <div aria-label="Carousel pagination" className="carousel-dots">
                  <button
                    aria-label="Go to slide 1"
                    className="carousel-dot active"
                    data-slide="0"
                  ></button>
                  <button
                    aria-label="Go to slide 2"
                    className="carousel-dot"
                    data-slide="1"
                  ></button>
                  <button
                    aria-label="Go to slide 3"
                    className="carousel-dot"
                    data-slide="2"
                  ></button>
                  <button
                    aria-label="Go to slide 4"
                    className="carousel-dot"
                    data-slide="3"
                  ></button>
                  <button
                    aria-label="Go to slide 5"
                    className="carousel-dot"
                    data-slide="4"
                  ></button>
                </div>
                <div className="carousel-buttons">
                  <button
                    aria-label="Previous slide"
                    className="carousel-btn prev"
                  >
                    ←
                  </button>
                  <button aria-label="Next slide" className="carousel-btn next">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta" id="contact">
          <div className="wrap">
            <div className="eyebrow">Start a conversation</div>
            <h2>
              Complex matter. Multiple jurisdictions. One coordinated approach.
            </h2>
            <p>
              Tell us what you are planning, changing or trying to solve. We
              will help identify the principal legal and regulatory issues and
              define the appropriate scope of support.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="/contact/">
                Discuss Your Matter
              </a>
              <a className="btn secondary" href="/contact/">
                Request an Assessment
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
