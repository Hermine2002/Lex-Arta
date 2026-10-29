import type { PageMeta } from "./types";

// This page's routing metadata must be exported alongside its component.
// eslint-disable-next-line react-refresh/only-export-components
export const meta: PageMeta = {
  path: "/services/aml-cft/aml-policies-procedures/",
  title: "AML Policies & Procedures | International AML/CFT | LEX ARTA",
  heading: "AML Policies & Procedures",
  description:
    "Jurisdiction-specific AML/CFT policies and operational procedures for regulated businesses. Build, review and localise AML frameworks for your operating model.",
  heroImage: "/images/aml-policies-hero.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero hero-full">
          <img
            alt="AML/CFT policy documentation on a desk with global compliance references"
            className="hero-bg"
            loading="lazy"
            src="/images/aml-policies-hero.webp"
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AML/CFT &amp; Financial Crime</div>
              <h1>AML Policies &amp; Procedures</h1>
              <p className="hero-lead">
                Risk-based AML/CFT policies and practical procedures designed
                for your regulatory obligations, business model and operating
                environment.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss Your AML Framework
                </a>
                <a
                  className="btn btn-secondary"
                  href="/services/aml-cft/aml-policies-procedures/#scope"
                >
                  Explore Scope
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">The challenge</p>
              <h2>Policies need to work in practice.</h2>
              <p className="lede">
                A written framework must reflect the actual business: customer
                types, products, geographic exposure, decision-making authority,
                monitoring, escalation and the evidence retained.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Business-specific documentation</h3>
                <p>
                  Controls must match real services, customer journeys and
                  operational processes — not generic templates.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Clear procedures</h3>
                <p>
                  Staff need defined steps, responsibilities, approvals and
                  evidence requirements.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Applicable requirements</h3>
                <p>
                  Group standards and local procedures must reflect the rules
                  relevant to each entity.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Services</p>
              <h2>Develop, review or localise your AML framework.</h2>
            </div>
            <div className="problem-grid">
              <article className="problem-card">
                <h3>Policy Development</h3>
                <p>
                  Prepare an AML/CFT policy and procedure suite for a new or
                  expanding regulated or obliged business.
                </p>
              </article>
              <article className="problem-card">
                <h3>Policy Review &amp; Update</h3>
                <p>
                  Revise documentation following regulatory changes, internal
                  findings or changes to products and operations.
                </p>
              </article>
              <article className="problem-card">
                <h3>Group &amp; Local Alignment</h3>
                <p>
                  Coordinate common standards with local supplements and clear
                  entity-level accountability.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="scope">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Scope of support</p>
              <h2>Core documentation and operational controls.</h2>
              <p className="lede">
                The final documentation set is defined by the applicable law,
                risk assessment, sector, systems, outsourcing arrangements and
                agreed scope.
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01</div>
                <h3>AML/CFT Governance</h3>
                <p>
                  Programme oversight, management reporting, MLRO or equivalent
                  responsibilities and escalation.
                </p>
              </div>
              <div className="workstream">
                <div className="n">02</div>
                <h3>CDD, KYC &amp; Beneficial Ownership</h3>
                <p>
                  Customer identification, verification, onboarding records and
                  ongoing due diligence.
                </p>
              </div>
              <div className="workstream">
                <div className="n">03</div>
                <h3>Customer Risk &amp; EDD</h3>
                <p>
                  Risk classification, enhanced due diligence, source of funds
                  and approval triggers.
                </p>
              </div>
              <div className="workstream">
                <div className="n">04</div>
                <h3>Monitoring &amp; Investigations</h3>
                <p>
                  Monitoring rules, alert reviews, escalation and investigation
                  records.
                </p>
              </div>
              <div className="workstream">
                <div className="n">05</div>
                <h3>Suspicious Activity Reporting</h3>
                <p>
                  Internal escalation, reporting workflows, confidentiality and
                  evidence.
                </p>
              </div>
              <div className="workstream">
                <div className="n">06</div>
                <h3>Sanctions &amp; PEP Controls</h3>
                <p>
                  Screening procedures, match handling, escalation and
                  restrictions.
                </p>
              </div>
              <div className="workstream">
                <div className="n">07</div>
                <h3>Records &amp; Information Governance</h3>
                <p>
                  Retention, access controls, evidence and interaction with
                  privacy requirements.
                </p>
              </div>
              <div className="workstream">
                <div className="n">08</div>
                <h3>Outsourcing &amp; Third Parties</h3>
                <p>
                  Provider oversight, permitted reliance and allocation of
                  responsibilities.
                </p>
              </div>
              <div className="workstream">
                <div className="n">09</div>
                <h3>Sector-Specific Modules</h3>
                <p>
                  Additional payment, investment, gaming, MSB or digital-asset
                  controls where relevant.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container intro-grid">
            <div>
              <p className="kicker">Our process</p>
              <h2>From requirements to usable procedures.</h2>
              <p className="lede">
                We map applicable requirements to the actual operating model and
                document controls that can be implemented and maintained.
              </p>
            </div>
            <div className="journey">
              <div className="journey-step">
                <b>01</b>
                <span>
                  <strong>Scope</strong> — Confirm activities, jurisdictions,
                  customer and product risks.
                </span>
              </div>
              <div className="journey-step">
                <b>02</b>
                <span>
                  <strong>Map</strong> — Identify control owners, decisions,
                  workflows and evidence.
                </span>
              </div>
              <div className="journey-step">
                <b>03</b>
                <span>
                  <strong>Draft</strong> — Develop or revise policies and
                  operational procedures.
                </span>
              </div>
              <div className="journey-step">
                <b>04</b>
                <span>
                  <strong>Handover</strong> — Review approval routes and
                  document implementation priorities.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section dark">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Deliverables</p>
              <h2>Defined documents. Clear outcomes.</h2>
              <p className="lede">
                The exact deliverables depend on the agreed mandate; no
                universal policy pack can guarantee compliance across
                jurisdictions.
              </p>
            </div>
            <div className="deliverables-grid">
              <article className="deliverable">
                <h3>AML/CFT Policy Suite</h3>
                <p>Entity-specific governance and policy documentation.</p>
              </article>
              <article className="deliverable">
                <h3>Operational Procedures</h3>
                <p>
                  Step-by-step workflows, approvals and evidence requirements.
                </p>
              </article>
              <article className="deliverable">
                <h3>Responsibilities &amp; Escalation Matrix</h3>
                <p>Control ownership, decision rights and reporting routes.</p>
              </article>
              <article className="deliverable">
                <h3>Implementation Action List</h3>
                <p>
                  Prioritised changes needed to operationalise documentation.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container intro-grid">
            <div>
              <p className="kicker">International scope</p>
              <h2>International standards. Local obligations.</h2>
            </div>
            <div className="intro-copy">
              <p>
                FATF standards provide an international baseline. Local AML/CFT
                legislation, supervisory rules and sector requirements determine
                each entity&apos;s specific obligations.
              </p>
              <p>
                Cross-border frameworks may combine group principles with
                jurisdiction-specific requirements. Preparing documentation is
                not a substitute for implementation, testing or independent
                assurance.
              </p>
              <a
                className="text-link"
                href="https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                FATF Recommendations →
              </a>
            </div>
          </div>
        </section>
        <section className="related-banner">
          <div className="container">
            <div>
              <p className="section-kicker">Related EU specialist services</p>
              <h2>Interested specifically in EU AML/CFT requirements?</h2>
              <p>
                Explore the EU-focused AML/CFT services available under the LEX
                ARTA brand.
              </p>
            </div>
            <a
              className="btn btn-secondary"
              href="https://www.artlexconsult.com/services/aml-cft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore EU AML/CFT Services
            </a>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Related services</p>
              <h2>Explore AML/CFT &amp; Financial Crime.</h2>
              <p className="lede">
                Select the service that addresses your needs. Independent audit,
                diagnostic reviews and remediation are separate workstreams.
              </p>
            </div>
            <div className="related-grid">
              <a
                className="related-card"
                href="/services/aml-cft/enterprise-wide-risk-assessment/"
              >
                <strong>Enterprise-Wide Risk Assessment</strong>
              </a>
              <a
                className="related-card"
                href="/services/aml-cft/aml-audit-independent-review/"
              >
                <strong>AML Audit &amp; Independent Review</strong>
              </a>
              <a
                className="related-card"
                href="/services/aml-cft/aml-gap-analysis/"
              >
                <strong>AML Gap Analysis</strong>
              </a>
              <a
                className="related-card"
                href="/services/aml-cft/aml-remediation/"
              >
                <strong>AML Remediation</strong>
              </a>
              <a
                className="related-card"
                href="/services/aml-cft/mlro-compliance-officer-support/"
              >
                <strong>MLRO &amp; Compliance Officer Support</strong>
              </a>
              <a
                className="related-card"
                href="/services/aml-cft/aml-cft-training/"
              >
                <strong>AML/CFT Training</strong>
              </a>
              <a
                className="related-card"
                href="/services/aml-cft/fraud-financial-crime-risk/"
              >
                <strong>Fraud &amp; Financial Crime Risk</strong>
              </a>
            </div>
          </div>
        </section>
        <section className="section paper faq-section" id="faq">
          <div className="container">
            <div className="section-head">
              <p className="kicker">FAQ</p>
              <h2>AML Policies &amp; Procedures — common questions.</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Do you provide standard AML policy templates?</h3>
                <p>
                  No generic template is presented as a compliant framework.
                  Existing materials can be reviewed and adapted to the
                  business, jurisdiction and operating model.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can you review and update an existing AML/CFT manual?</h3>
                <p>
                  Yes. We can revise an existing policy suite and procedures
                  against the agreed regulatory framework and actual business
                  processes.
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  What is the difference between an AML policy and an AML
                  procedure?
                </h3>
                <p>
                  A policy defines standards, ownership and control
                  expectations. A procedure sets out the steps, decisions,
                  approvals, escalation and evidence needed in practice.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can you prepare a framework for several countries?</h3>
                <p>
                  Yes, with group standards and local supplements. Local legal
                  opinions or reserved work are separately scoped where
                  required.
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  Does having written AML policies mean the business is
                  compliant?
                </h3>
                <p>
                  No. Documentation must be supported by implementation,
                  governance, training, evidence and testing as applicable.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="lx-aml-menu">
          <div className="lx-aml-menu-shell">
            <p className="lx-aml-kicker">AML/CFT &amp; Financial Crime</p>
            <h2>Explore the AML/CFT service block.</h2>
            <div className="lx-aml-links">
              <a className="" href="/services/aml-cft/">
                Compliance Overview
              </a>
              <a
                className=""
                href="/services/aml-cft/enterprise-wide-risk-assessment/"
              >
                Enterprise-Wide Risk Assessment
              </a>
              <a
                className=""
                href="/services/aml-cft/aml-audit-independent-review/"
              >
                AML Audit &amp; Independent Review
              </a>
              <a className="" href="/services/aml-cft/aml-gap-analysis/">
                AML Gap Analysis
              </a>
              <a className="" href="/services/aml-cft/aml-remediation/">
                AML Remediation
              </a>
              <a
                className=""
                href="/services/aml-cft/mlro-compliance-officer-support/"
              >
                MLRO &amp; Compliance Officer Support
              </a>
              <a className="" href="/services/aml-cft/aml-cft-training/">
                AML/CFT Training
              </a>
              <a
                className="is-current"
                href="/services/aml-cft/aml-policies-procedures/"
              >
                AML Policies &amp; Procedures
              </a>
              <a
                className=""
                href="/services/aml-cft/fraud-financial-crime-risk/"
              >
                Fraud &amp; Financial Crime Risk
              </a>
            </div>
          </div>
        </section>
        <section className="final-cta" id="contact">
          <div className="container final-cta-inner">
            <div>
              <div className="section-kicker">
                AML/CFT · Policies &amp; Procedures
              </div>
              <h2>Build an AML framework that works for your business.</h2>
              <p>
                Tell us your jurisdiction, regulated activities and whether you
                need a new framework or a review of existing documentation. We
                will define a focused scope and deliverables.
              </p>
            </div>
            <div className="final-cta-actions">
              <a className="btn btn-primary" href="/contact/">
                Discuss Your AML Framework
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
