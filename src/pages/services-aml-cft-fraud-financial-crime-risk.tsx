import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/aml-cft/fraud-financial-crime-risk/",
  title: "Fraud Risk Management & Financial Crime Advisory | LEX ARTA",
  heading: "Fraud & Financial Crime Risk",
  description:
    "Fraud and financial-crime risk assessments, control reviews, investigations governance and remediation support for FinTech, payments and digital assets.",
  heroImage: "/images/fraud-financial-crime-hero.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero hero-full">
          <img
            alt="Advisors reviewing a signed engagement at a conference table"
            className="hero-bg"
            loading="lazy"
            src="/images/fraud-financial-crime-hero.webp"
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                LEX ARTA / AML/CFT &amp; Financial Crime
              </div>
              <h1>Fraud &amp; Financial Crime Risk</h1>
              <p className="hero-lead">
                Identify fraud exposure, evaluate the controls designed to
                prevent and detect it, and prioritise practical improvements.
              </p>
              <p className="hero-note">
                Risk and governance advisory for FinTech, payments, digital
                assets and cross-border businesses.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss Fraud Risk
                </a>
                <a
                  className="btn btn-secondary"
                  href="/services/aml-cft/fraud-financial-crime-risk/#scope"
                >
                  Explore Scope
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <div className="section-head">
              <p className="kicker">The business challenge</p>
              <h2>Fraud risk rarely sits in one team.</h2>
              <p className="lede">
                Identity controls, transaction monitoring, payment security and
                incident handling can all exist without providing a connected
                view of fraud exposure. Our review identifies where
                responsibilities, detection coverage or escalation fail to work
                together.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Increasing fraud losses</h3>
                <p>
                  Chargebacks, scams, account misuse or disputes rise without
                  clear ownership or root-cause analysis.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>New products or markets</h3>
                <p>
                  Payment flows, digital-asset features and customer journeys
                  create exposures not yet reflected in controls.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Fragmented ownership</h3>
                <p>
                  Fraud, AML, cyber and operational teams do not share a clear
                  escalation or evidence trail.
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Repeated incidents</h3>
                <p>
                  Recurring patterns are handled as individual cases instead of
                  driving corrective action.
                </p>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Limited management insight</h3>
                <p>
                  Reports show case counts but not control gaps, risk
                  concentration or remediation priorities.
                </p>
              </article>
              <article className="problem-card">
                <h3>External scrutiny</h3>
                <p>
                  Banks, boards, investors or supervisors need credible evidence
                  of fraud-risk governance.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="scope">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Scope of support</p>
              <h2>Risk assessment, controls and remediation.</h2>
              <p className="lede">
                Select the workstreams that match the actual problem. Each
                engagement is scoped by entity, jurisdiction, activities, data
                available and intended decisions.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Fraud Risk Assessment</h3>
                <p>
                  Assess inherent and residual fraud exposure across products,
                  channels, customer journeys and business processes.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Fraud Governance &amp; Risk Appetite</h3>
                <p>
                  Define accountable owners, escalation, management reporting
                  and coordination across fraud, AML, cyber and operations.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Onboarding &amp; Account Abuse</h3>
                <p>
                  Review identity misuse, synthetic identities, mule-account
                  indicators, account takeover and onboarding weaknesses.
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Payment &amp; Transaction Fraud</h3>
                <p>
                  Assess payment-flow risks, detection coverage, alert
                  escalation, authentication dependencies and case handling.
                </p>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Typology &amp; Detection Coverage</h3>
                <p>
                  Map relevant fraud scenarios to controls and identify
                  detection and escalation gaps.
                </p>
              </article>
              <article className="problem-card">
                <h3>Internal Fraud &amp; Insider Risk</h3>
                <p>
                  Review access, approval, segregation of duties, overrides,
                  conflicts and insider-abuse scenarios.
                </p>
              </article>
              <article className="problem-card">
                <h3>Investigation &amp; Incident Support</h3>
                <p>
                  Structure case triage, evidence mapping, root-cause analysis
                  and escalation; coordinate specialists where needed.
                </p>
              </article>
              <article className="problem-card">
                <h3>Control Remediation</h3>
                <p>
                  Turn findings into risk-rated actions, control owners,
                  implementation evidence and review points.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container intro-grid">
            <div>
              <p className="kicker">Methodology</p>
              <h2>From fraud scenarios to defensible decisions.</h2>
              <p className="lede">
                A structured evidence-led review, adapted to the business model
                and materials available.
              </p>
            </div>
            <div className="journey">
              <div className="journey-step">
                <b>01</b>
                <span>
                  <strong>Define the exposure</strong> — Map products,
                  jurisdictions, channels, transaction flows and known
                  incidents.
                </span>
              </div>
              <div className="journey-step">
                <b>02</b>
                <span>
                  <strong>Assess controls</strong> — Evaluate fraud scenarios,
                  inherent risk, control design and available evidence.
                </span>
              </div>
              <div className="journey-step">
                <b>03</b>
                <span>
                  <strong>Identify residual risk</strong> — Document material
                  gaps, weaknesses, ownership and escalation issues.
                </span>
              </div>
              <div className="journey-step">
                <b>04</b>
                <span>
                  <strong>Prioritise action</strong> — Provide written findings,
                  risk ratings and a practical remediation roadmap.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section dark">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Deliverables</p>
              <h2>Useful outputs for management.</h2>
              <p className="lede">
                Depending on the agreed mandate, deliverables may include:
              </p>
            </div>
            <div className="deliverables-grid">
              <article className="deliverable">
                <h3>Risk &amp; control matrix</h3>
                <p>
                  Inherent and residual exposure mapped against applicable
                  controls.
                </p>
              </article>
              <article className="deliverable">
                <h3>Fraud scenario map</h3>
                <p>
                  Relevant typologies by product, customer journey or
                  transaction flow.
                </p>
              </article>
              <article className="deliverable">
                <h3>Governance findings</h3>
                <p>Control ownership, reporting and escalation gaps.</p>
              </article>
              <article className="deliverable">
                <h3>Remediation roadmap</h3>
                <p>
                  Prioritised actions, accountable owners and evidence
                  requirements.
                </p>
              </article>
              <article className="deliverable">
                <h3>Management summary</h3>
                <p>
                  Clear decisions, risk priorities and implementation steps.
                </p>
              </article>
              <article className="deliverable">
                <h3>Incident observations</h3>
                <p>
                  Root-cause and case-management analysis where included in
                  scope.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container intro-grid">
            <div>
              <p className="kicker">Typical risk areas</p>
              <h2>Where a review can focus.</h2>
              <ul>
                <li>Onboarding, identity and synthetic-identity fraud</li>
                <li>Account takeover and credential misuse</li>
                <li>Authorised and unauthorised payment fraud</li>
                <li>Mule accounts, merchant and platform abuse</li>
                <li>Digital-asset and wallet-related fraud</li>
                <li>Insider misuse, collusion and third-party fraud</li>
              </ul>
            </div>
            <div className="intro-copy">
              <p className="kicker">Scope boundaries</p>
              <h2>Advisory, not technical forensics.</h2>
              <p>
                The service covers fraud-risk assessment, governance, control
                review, incident-support processes and remediation planning.
                Forensic accounting, digital forensics, asset recovery,
                litigation and technical system testing are excluded unless
                separately scoped with appropriately qualified specialists.
              </p>
              <div className="callout">
                Regulatory and reporting obligations differ across
                jurisdictions. Local legal requirements and reserved
                professional work are assessed separately where relevant.
              </div>
            </div>
          </div>
        </section>
        <section className="related-banner">
          <div className="container">
            <div>
              <p className="section-kicker">Related EU service</p>
              <h2>Interested specifically in EU AML/CFT requirements?</h2>
              <p>
                Explore EU regulatory compliance and financial-crime advisory
                services through the LEX ARTA EU practice.
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
        <section className="section paper faq-section" id="faq">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Frequently asked</p>
              <h2>Fraud risk — common questions.</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>
                  How is a fraud risk assessment different from an AML/CFT risk
                  assessment?
                </h3>
                <p>
                  A fraud review focuses on deception, misuse and unlawful gain
                  affecting the business or its customers. AML/CFT assessment
                  addresses money-laundering and terrorist-financing risk under
                  the applicable framework. The risks may overlap, but the
                  assessments have different objectives.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can the review be performed after an incident?</h3>
                <p>
                  Yes. The mandate can focus on control breakdowns, available
                  evidence, incident governance, root causes and remediation.
                  Forensic investigation, recovery and litigation support
                  require separate scoping.
                </p>
              </div>
              <div className="faq-item">
                <h3>Do you test fraud-detection technology?</h3>
                <p>
                  We assess governance, scenario coverage, escalation and
                  documented control evidence within the agreed scope. Technical
                  model validation, penetration testing and system configuration
                  are not included.
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  Can this be combined with AML remediation or independent
                  review?
                </h3>
                <p>
                  Related workstreams can be coordinated. Diagnostic,
                  implementation and independent assurance engagements remain
                  distinct, with independence assessed where relevant.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can you support cross-border groups?</h3>
                <p>
                  Yes, subject to jurisdiction-specific scoping. Group-level
                  controls are assessed separately from local legal requirements
                  and operational processes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">AML/CFT &amp; Financial Crime</p>
              <h2>Related services.</h2>
              <p className="lede">
                Explore connected risk, controls and compliance workstreams.
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
                href="/services/aml-cft/aml-policies-procedures/"
              >
                <strong>AML Policies &amp; Procedures</strong>
              </a>
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
              <a className="" href="/services/aml-cft/aml-policies-procedures/">
                AML Policies &amp; Procedures
              </a>
              <a
                className="is-current"
                href="/services/aml-cft/fraud-financial-crime-risk/"
              >
                Fraud &amp; Financial Crime Risk
              </a>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container final-cta-inner">
            <div>
              <div className="section-kicker">Start with the exposure</div>
              <h2>Understand where fraud risk enters your business.</h2>
              <p>
                Share the relevant jurisdictions, products, transaction flows,
                existing controls and known concerns. We will propose a defined
                assessment or remediation scope.
              </p>
            </div>
            <div className="final-cta-actions">
              <a className="btn btn-primary" href="/contact/">
                Discuss Fraud &amp; Financial Crime Risk
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
