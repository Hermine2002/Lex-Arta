import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/legal-regulatory/regulatory-perimeter-assessment/",
  title: "Regulatory Perimeter Assessment | LEX ARTA",
  heading: "Regulatory Perimeter Assessment",
  description:
    "Regulatory perimeter assessments to identify whether an activity is regulated, relevant permissions and defensible next steps.",
  heroImage:
    "/images/regulatory-perimeter-hero-1.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">
                  Lex Arta · Legal &amp; Regulatory · Regulatory Perimeter Assessment
                </div>
                <h1>Regulatory Perimeter Assessment</h1>
                <p className="hero-lead">
                  Determine whether your business model, product or service requires regulatory
                  authorisation before you launch, expand or restructure.
                </p>
                <div aria-label="Regulatory perimeter assessment scope" className="hero-points">
                  <span>Activities</span>
                  <span>Regulatory classification</span>
                  <span>Territorial scope</span>
                  <span>Permissions</span>
                  <span>Exclusions &amp; exemptions</span>
                  <span>Regulatory route</span>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/contact/">
                    Discuss Your Business Model
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="/services/legal-regulatory/regulatory-perimeter-assessment/#what-we-assess"
                  >
                    See What We Assess
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="Regulatory perimeter assessment for a cross-border business model"
                  loading="lazy"
                  src="/images/regulatory-perimeter-hero-1.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="problem-section" id="when-needed">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">When this service is needed</div>
              <h2>
                Use a perimeter assessment when the regulatory status of the activity is the problem
                to solve.
              </h2>
              <p>
                This service is designed for situations where the business model, product,
                cross-border activity or operating structure must first be classified before
                management can make a licensing, structuring or launch decision.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Launching a product or service</h3>
                <p>
                  Test whether the proposed activities fall within a regulated framework before
                  committing to launch, licensing or implementation.
                </p>
                <ul className="micro-list">
                  <li>Product scope</li>
                  <li>Regulatory status</li>
                  <li>Launch constraints</li>
                  <li>Required permissions</li>
                </ul>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Entering a new jurisdiction</h3>
                <p>
                  Assess territorial scope, cross-border restrictions and whether local
                  authorisation, registration or local-law analysis may be required.
                </p>
                <ul className="micro-list">
                  <li>Territorial scope</li>
                  <li>Cross-border rules</li>
                  <li>Local authorisation</li>
                  <li>Local-law input</li>
                </ul>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Changing the operating model</h3>
                <p>
                  Review new services, customer types, distribution arrangements, outsourcing or
                  partner structures that may affect the regulatory position.
                </p>
                <ul className="micro-list">
                  <li>New services</li>
                  <li>Customer types</li>
                  <li>Distribution</li>
                  <li>Outsourcing</li>
                </ul>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Documenting the position</h3>
                <p>
                  Establish a structured regulatory basis for management, investors, banks,
                  counterparties or subsequent legal work.
                </p>
                <ul className="micro-list">
                  <li>Management decision</li>
                  <li>Investor review</li>
                  <li>Banking evidence</li>
                  <li>Further legal work</li>
                </ul>
              </article>
            </div>
            <div className="included-strip">
              <strong>Assessment focus</strong>
              <div className="included-items">
                <span>Activities</span>
                <span>Entities</span>
                <span>Customers</span>
                <span>Jurisdictions</span>
                <span>Money &amp; asset flows</span>
                <span>Regulatory definitions</span>
                <span>Permissions</span>
                <span>Exclusions</span>
                <span>Exemptions</span>
                <span>Next steps</span>
              </div>
            </div>
          </div>
        </section>
        <section className="distinction" id="what-we-assess">
          <div className="container">
            <div className="distinction-wrap">
              <div>
                <div className="section-kicker">What we analyse</div>
                <h2>We start from what the business actually does.</h2>
                <p>
                  The analysis follows the activities, entities, customers, jurisdictions and flows
                  in the operating model rather than relying on commercial labels.
                </p>
              </div>
              <div className="journey">
                <div className="journey-step">
                  <b>01</b>
                  <span>Map the business model, activities, entities and operational roles</span>
                </div>
                <div className="journey-step">
                  <b>02</b>
                  <span>
                    Trace money, assets, instructions, data and contractual responsibility
                  </span>
                </div>
                <div className="journey-step">
                  <b>03</b>
                  <span>Classify the activities under the relevant regulatory frameworks</span>
                </div>
                <div className="journey-step">
                  <b>04</b>
                  <span>Assess territorial and cross-border scope</span>
                </div>
                <div className="journey-step">
                  <b>05</b>
                  <span>Identify permissions, exclusions, exemptions and material conditions</span>
                </div>
                <div className="journey-step">
                  <b>06</b>
                  <span>Set the regulatory consequences and route forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="deliverables">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Deliverables</div>
              <h2>What you receive at the end of the assessment.</h2>
              <p>
                The output is a documented regulatory position that management can use to decide
                whether to proceed, restructure, seek authorisation, obtain local-law input or move
                into a different advisory workstream.
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">DELIVERABLE 01</div>
                <h3>Activity &amp; entity map</h3>
                <p>
                  A structured map of the relevant activities, legal entities, customer
                  relationships, counterparties and operational roles.
                </p>
              </div>
              <div className="workstream">
                <div className="n">DELIVERABLE 02</div>
                <h3>Regulatory classification</h3>
                <p>
                  A written analysis of how the activities map to the relevant regulatory
                  definitions, including material fact-dependent or uncertain points.
                </p>
              </div>
              <div className="workstream">
                <div className="n">DELIVERABLE 03</div>
                <h3>Permissions, exclusions &amp; exemptions</h3>
                <p>
                  Identification of potential authorisation, registration or permission requirements
                  together with relevant exclusions, exemptions or conditions where applicable.
                </p>
              </div>
              <div className="workstream">
                <div className="n">DELIVERABLE 04</div>
                <h3>Regulatory route &amp; action points</h3>
                <p>
                  A practical conclusion setting out the regulatory consequences, material
                  assumptions and the next actions required for licensing, restructuring or further
                  specialist input.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">How the assessment works</div>
              <h2>From the operating model to a documented regulatory position.</h2>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Define the question</h3>
                <p>
                  Confirm the business model, proposed activities, entities, jurisdictions and the
                  decision the assessment needs to support.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Map the facts</h3>
                <p>
                  Review the operational, contractual and transaction flows and identify the facts
                  that determine classification.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Analyse the regulatory framework</h3>
                <p>
                  Test the activities against relevant definitions, permissions, territorial rules
                  and material exceptions.
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Set the route forward</h3>
                <p>
                  Document the regulatory position, material assumptions and practical next steps
                  for the business.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Where this service ends</div>
              <h2>What comes next depends on the perimeter conclusion.</h2>
              <p>
                The assessment identifies the next workstream; it does not turn the perimeter
                analysis itself into a licensing application or a broader compliance review.
              </p>
            </div>
            <div className="related-grid">
              <a
                className="related-card"
                href="/services/licensing/licensing-strategy-jurisdiction-assessment/"
              >
                <strong>Licensing Strategy &amp; Jurisdiction Assessment</strong>
                <span>
                  For route viability, jurisdiction comparison and applicant readiness once
                  licensing is known to be relevant.
                </span>
              </a>
              <a className="related-card" href="/services/licensing/international/">
                <strong>International Licensing</strong>
                <span>
                  For country-specific application execution once the jurisdiction and regulatory
                  route are sufficiently defined.
                </span>
              </a>
              <a
                className="related-card"
                href="/services/legal-regulatory/legal-opinions-regulatory-memoranda/"
              >
                <strong>Legal Opinions &amp; Regulatory Memoranda</strong>
                <span>
                  For a formal documented legal or regulatory conclusion for management or another
                  stakeholder.
                </span>
              </a>
              <a className="related-card" href="/services/legal-regulatory/">
                <strong>Legal &amp; Regulatory Services</strong>
                <span>
                  For reviewing an existing regulatory or compliance framework against applicable
                  requirements.
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="faq-section" id="faq">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Common Questions</div>
              <h2>Regulatory Perimeter Assessment — FAQ</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What is the difference between a Perimeter Assessment and Licensing?</h3>
                <p>
                  The perimeter assessment determines whether activities fall within regulation,
                  which permissions may be required and what regulatory route follows. Licensing is
                  the subsequent authorisation or registration work once that route is sufficiently
                  clear.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can the assessment conclude that no licence is required?</h3>
                <p>
                  Yes. A perimeter analysis may identify that an activity is outside a particular
                  regulatory regime or that an exclusion or exemption may be relevant. Any
                  conclusion depends on the facts, jurisdiction and applicable law.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can one assessment cover several jurisdictions?</h3>
                <p>
                  It can be structured as a multi-jurisdictional assessment where the same business
                  model is being tested across several markets. The scope should distinguish common
                  issues from jurisdiction-specific legal requirements.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can an already authorised business use this service?</h3>
                <p>
                  Yes. A perimeter review can be relevant where an authorised business is launching
                  a new product, entering a new market, changing distribution or restructuring its
                  operating model.
                </p>
              </div>
              <div className="faq-item">
                <h3>Does the assessment replace local legal advice?</h3>
                <p>
                  No. Where a conclusion depends on jurisdiction-specific reserved legal advice or
                  local interpretation, appropriate local specialist input may be required.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can the assessment guarantee how a regulator will interpret the model?</h3>
                <p>
                  No. Regulatory analysis is based on the facts and legal framework available at the
                  time. Regulators retain their own interpretative and supervisory powers, and some
                  issues may require regulator engagement or local specialist input.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <div className="final-cta-inner">
              <div>
                <div className="section-kicker">Clarify the perimeter first</div>
                <h2>Clarify the regulatory perimeter before licensing, restructuring or launch.</h2>
                <p>
                  Tell us what the business will do, for whom, through which entities and in which
                  jurisdictions. We will define the regulatory question, identify the facts and
                  evidence required, and scope the assessment accordingly.
                </p>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss Your Business Model
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
