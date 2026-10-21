import type { PageMeta } from "./types";

// This page's routing metadata must be exported alongside its component.
// eslint-disable-next-line react-refresh/only-export-components
export const meta: PageMeta = {
  path: "/services/aml-cft/aml-policies-procedures/",
  title: "AML Policies & Procedures | International AML/CFT | LEX ARTA",
  heading: "AML Policies & Procedures",
  description:
    "AML/CFT policies and procedures built around the business model, risks, governance and operational controls.",
  heroImage: null,
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <div className="eyebrow">
                AML/CFT · Policies, Procedures &amp; Controls
              </div>
              <h1>AML Policies &amp; Procedures</h1>
              <p>
                Risk-based AML/CFT policies and operational procedures designed
                around your business model, regulatory perimeter, customer
                journey and control environment — mapped to the jurisdictional
                requirements that actually apply.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="/book-a-consultation/">
                  Discuss your AML framework →
                </a>
                <a
                  className="btn-secondary"
                  href="/services/aml-cft/aml-policies-procedures/#scope"
                >
                  View scope
                </a>
              </div>
              <div className="hero-proof">
                <span>Jurisdiction-specific</span>
                <span>Operational, not template-led</span>
                <span>Cross-border ready</span>
              </div>
            </div>
          </div>
        </section>
        <section className="problem">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">The client problem</div>
                <h2>
                  A policy can look complete and still fail operationally.
                </h2>
              </div>
              <p>
                The real test is whether the document reflects the business that
                actually exists: who the customers are, what products and
                services are offered, where risk enters the customer journey,
                who makes decisions, how exceptions are escalated and what
                evidence is retained.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card">
                <div className="n">01</div>
                <h3>Generic documentation</h3>
                <p>
                  Templates often describe controls the business does not
                  operate or omit processes that exist in practice.
                </p>
              </article>
              <article className="problem-card">
                <div className="n">02</div>
                <h3>Policy–procedure disconnect</h3>
                <p>
                  The policy may state the standard, while staff lack clear
                  decision steps, ownership, escalation routes or evidence
                  requirements.
                </p>
              </article>
              <article className="problem-card">
                <div className="n">03</div>
                <h3>Jurisdiction mismatch</h3>
                <p>
                  A framework copied from another market can use the wrong
                  terminology, thresholds, reporting route or supervisory
                  assumptions.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="formats" id="services">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">How we help</div>
                <h2>
                  Build, update or localise the AML/CFT operating framework.
                </h2>
              </div>
              <p>
                This service is deliberately focused on documentation
                architecture and operational procedures. It does not duplicate
                independent audit, gap-assessment or remediation work.
              </p>
            </div>
            <div className="format-grid">
              <article className="format-card">
                <div className="tag">New framework</div>
                <h3>AML/CFT Policy Development</h3>
                <p>
                  Design a policy and procedure suite for a new or expanding
                  regulated or obliged business, aligned to its risk profile,
                  governance and operating model.
                </p>
              </article>
              <article className="format-card">
                <div className="tag">Existing framework</div>
                <h3>Policy Review &amp; Update</h3>
                <p>
                  Refresh existing documentation after regulatory change,
                  business-model change, internal findings or operational
                  growth, removing outdated or non-operational provisions.
                </p>
              </article>
              <article className="format-card">
                <div className="tag">Cross-border</div>
                <h3>Group &amp; Local Framework Alignment</h3>
                <p>
                  Structure group standards and local supplements so that common
                  principles are preserved while entity-level legal and
                  supervisory requirements remain clear.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="scope" id="scope">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Scope of support</div>
                <h2>Core AML/CFT documentation and operational procedures.</h2>
              </div>
              <p>
                The exact documentation set depends on the jurisdiction, legal
                status, sector, products, customers, delivery channels,
                geographic exposure, outsourcing model and systems used by the
                business.
              </p>
            </div>
            <div className="scope-grid">
              <article className="scope-card">
                <div className="num">01</div>
                <h3>AML/CFT Governance</h3>
                <p>
                  Programme structure, compliance responsibilities, MLRO or
                  equivalent oversight, management reporting, escalation and
                  control ownership.
                </p>
              </article>
              <article className="scope-card">
                <div className="num">02</div>
                <h3>CDD, KYC &amp; Beneficial Ownership</h3>
                <p>
                  Identification and verification, purpose and nature of the
                  relationship, beneficial ownership, onboarding evidence and
                  ongoing due diligence.
                </p>
              </article>
              <article className="scope-card">
                <div className="num">03</div>
                <h3>Customer Risk &amp; EDD</h3>
                <p>
                  Risk classification, higher-risk triggers, PEP handling,
                  enhanced due diligence, source-of-funds/source-of-wealth
                  measures and approval requirements.
                </p>
              </article>
              <article className="scope-card">
                <div className="num">04</div>
                <h3>Monitoring &amp; Investigation Procedures</h3>
                <p>
                  Monitoring governance, alert handling, investigation
                  standards, escalation criteria, decision records and control
                  ownership.
                </p>
              </article>
              <article className="scope-card">
                <div className="num">05</div>
                <h3>Suspicious Activity Reporting</h3>
                <p>
                  Internal escalation, MLRO review, external reporting workflow,
                  confidentiality and record-keeping adapted to the applicable
                  reporting regime.
                </p>
              </article>
              <article className="scope-card">
                <div className="num">06</div>
                <h3>Sanctions &amp; PEP Controls</h3>
                <p>
                  Screening governance, potential-match handling, escalation,
                  restrictions, approvals, records and legally required actions
                  where applicable.
                </p>
              </article>
              <article className="scope-card">
                <div className="num">07</div>
                <h3>Records &amp; Information Governance</h3>
                <p>
                  Retention responsibilities, evidence standards, access
                  controls, documentation ownership and interaction with
                  applicable privacy requirements.
                </p>
              </article>
              <article className="scope-card">
                <div className="num">08</div>
                <h3>Outsourcing &amp; Third Parties</h3>
                <p>
                  Responsibilities and oversight where CDD, screening,
                  monitoring, technology or other AML/CFT processes involve
                  external providers or permitted reliance.
                </p>
              </article>
              <article className="scope-card">
                <div className="num">09</div>
                <h3>Sector-Specific Modules</h3>
                <p>
                  Additional procedures are added where the business model
                  requires them — including payment, investment, gaming,
                  money-services or digital-asset controls where relevant.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="process">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Our process</div>
                <h2>From legal requirements to procedures staff can follow.</h2>
              </div>
              <p>
                We keep the process compact: first establish what rules and
                risks apply, then design documentation around the actual
                operating model, validate the workflows and hand over a
                maintainable framework.
              </p>
            </div>
            <div className="process-row">
              <article className="step">
                <div className="step-num">01 · SCOPE</div>
                <h3>Regulatory perimeter</h3>
                <p>
                  Confirm activities, jurisdictions, customer types, products,
                  risk profile, systems, outsourcing and existing documentation.
                </p>
              </article>
              <article className="step">
                <div className="step-num">02 · MAP</div>
                <h3>Risk &amp; control mapping</h3>
                <p>
                  Connect applicable requirements to customer journeys, control
                  owners, decision points and required evidence.
                </p>
              </article>
              <article className="step">
                <div className="step-num">03 · BUILD</div>
                <h3>Draft or revise</h3>
                <p>
                  Prepare the policy architecture and operational procedures
                  without importing controls that do not fit the business.
                </p>
              </article>
              <article className="step">
                <div className="step-num">04 · VALIDATE</div>
                <h3>Operational handover</h3>
                <p>
                  Check responsibilities, approvals and escalation routes, then
                  identify the actions needed to put the documents into
                  operation.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="deliverables">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Typical deliverables</div>
                <h2>A documentation set designed to be used.</h2>
              </div>
              <p>
                Not every engagement requires every document. The deliverable
                set is defined by the applicable obligations and the client’s
                operating model rather than by a fixed template pack.
              </p>
            </div>
            <div className="deliver-grid">
              <article className="deliver">
                <h3>AML/CFT Policy Suite</h3>
                <p>
                  Governance and policy documents tailored to the agreed
                  regulatory perimeter and risk profile.
                </p>
              </article>
              <article className="deliver">
                <h3>Operational Procedures</h3>
                <p>
                  Clear workflows, decision points, approvals, escalation routes
                  and evidence requirements.
                </p>
              </article>
              <article className="deliver">
                <h3>Roles &amp; Responsibilities</h3>
                <p>
                  Allocation of responsibilities across management, compliance,
                  first-line teams and relevant providers.
                </p>
              </article>
              <article className="deliver">
                <h3>Control &amp; Escalation Matrix</h3>
                <p>
                  Key control points, triggers, ownership, escalation thresholds
                  and review responsibilities where required by scope.
                </p>
              </article>
              <article className="deliver">
                <h3>Implementation Action List</h3>
                <p>
                  Actions required where documentation changes depend on
                  process, governance, system or training updates.
                </p>
              </article>
              <article className="deliver">
                <h3>Review &amp; Change Framework</h3>
                <p>
                  Document ownership, review triggers and version-control
                  principles so the framework can remain current.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="worldwide" id="worldwide">
          <div className="wrap world-layout">
            <div>
              <div className="eyebrow">International scope</div>
              <h2>Global standards. Local legal requirements.</h2>
              <p>
                AML/CFT documentation cannot be made “worldwide compliant”
                through one universal manual. FATF Recommendations provide the
                international standards, while national legislation, sector
                rules and supervisory expectations determine the requirements
                that apply to a particular entity.
              </p>
            </div>
            <aside className="world-box">
              <h3>International baseline</h3>
              <p>
                FATF Recommendation 18 and its Interpretive Note require
                financial institutions’ AML/CFT programmes to include internal
                policies, procedures and controls, ongoing employee training and
                an independent audit function, with measures proportionate to
                ML/TF risk and business size.
              </p>
              <ul>
                <li>FATF standards as the international baseline;</li>
                <li>applicable national AML/CFT legislation;</li>
                <li>sector-specific regulatory requirements;</li>
                <li>supervisory guidance and reporting rules; and</li>
                <li>the client’s own risk profile and operating model.</li>
              </ul>
              <a
                className="source"
                href="https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html"
                rel="noopener"
                target="_blank"
              >
                FATF Recommendations →
              </a>
            </aside>
          </div>
        </section>
        <section className="boundaries">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Clear service boundaries</div>
                <h2>Documentation is one part of the AML/CFT lifecycle.</h2>
              </div>
              <p> </p>
            </div>
            <div className="boundary-grid">
              <article className="boundary-card">
                <h3>Need to identify what is missing?</h3>
                <p>
                  Use an AML Gap Analysis to compare the existing framework with
                  the applicable requirements and identify deficiencies.
                </p>
              </article>
              <article className="boundary-card">
                <h3>Need independent assurance?</h3>
                <p>
                  Use an AML Audit &amp; Independent Review to test whether
                  controls are designed, implemented and operating effectively.
                </p>
              </article>
              <article className="boundary-card">
                <h3>Already have findings?</h3>
                <p>
                  Use AML Remediation to convert identified deficiencies into
                  corrective actions, implementation work and closure evidence.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="clients">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Who we support</div>
                <h2>
                  For regulated and AML-obliged businesses across sectors.
                </h2>
              </div>
              <p>
                The service is not built around one industry. Scope is
                calibrated to the entity’s legal obligations, risk exposure and
                operating model.
              </p>
            </div>
            <div className="client-grid">
              <div className="client-card">
                <h3>Banks &amp; Financial Institutions</h3>
                <p>
                  Policy and procedure frameworks for customer risk, monitoring,
                  sanctions, reporting and governance.
                </p>
              </div>
              <div className="client-card">
                <h3>Payments &amp; E-Money</h3>
                <p>
                  Controls aligned to onboarding, payment flows, customer-risk
                  decisions, monitoring and outsourced infrastructure.
                </p>
              </div>
              <div className="client-card">
                <h3>Investment &amp; Financial Services</h3>
                <p>
                  AML/CFT documentation aligned to client types, products,
                  distribution channels and relevant sector requirements.
                </p>
              </div>
              <div className="client-card">
                <h3>Money Services Businesses</h3>
                <p>
                  Operational frameworks for customer due diligence, transfers,
                  monitoring, reporting and agent or network oversight where
                  relevant.
                </p>
              </div>
              <div className="client-card">
                <h3>Professional &amp; Other Obliged Entities</h3>
                <p>
                  Documentation adapted to the sector, customer relationships
                  and the applicable statutory obligations.
                </p>
              </div>
              <div className="client-card">
                <h3>Gaming &amp; Other Regulated Businesses</h3>
                <p>
                  Risk-based procedures for customer risk, source-of-funds
                  considerations, monitoring and escalation.
                </p>
              </div>
              <div className="client-card">
                <h3>International Groups</h3>
                <p>
                  Group standards with jurisdiction-specific supplements, entity
                  ownership and local escalation requirements.
                </p>
              </div>
              <div className="client-card">
                <h3>Technology-Enabled &amp; Digital-Asset Businesses</h3>
                <p>
                  Sector-specific modules can be added where digital delivery,
                  automated controls or digital-asset activity materially
                  changes the risk framework.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="why">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Why LEX ARTA</div>
                <h2>Documentation built around the control environment.</h2>
              </div>
              <p>
                Our focus is not on producing more pages. It is on creating a
                framework that management can explain, staff can operate and the
                business can maintain as its risks, products and regulatory
                obligations change.
              </p>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>Legal &amp; Compliance Perspective</h3>
                <p>
                  Applicable requirements are translated into governance
                  standards and practical operating rules.
                </p>
              </div>
              <div className="why-card">
                <h3>Operational, Not Template-Led</h3>
                <p>
                  Documentation is built around real customer journeys, decision
                  rights, systems and control owners.
                </p>
              </div>
              <div className="why-card">
                <h3>Risk-Based</h3>
                <p>
                  The depth of the framework is calibrated to the nature, scale,
                  complexity and risk profile of the business.
                </p>
              </div>
              <div className="why-card">
                <h3>International</h3>
                <p>
                  Cross-border frameworks distinguish group standards from
                  jurisdiction-specific legal and supervisory requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="faq" id="faq">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">FAQ</div>
                <h2>AML Policies &amp; Procedures — common questions.</h2>
              </div>
              <p> </p>
            </div>
            <details open>
              <summary>Do you provide standard AML policy templates?</summary>
              <p>
                Our service is designed around the client’s jurisdiction, legal
                status, business model, risk profile and operating processes.
                Existing templates can be reviewed, but they should not replace
                entity-specific analysis and implementation.
              </p>
            </details>
            <details>
              <summary>
                Can you review and update an existing AML/CFT manual?
              </summary>
              <p>
                Yes. We can review an existing policy suite and operational
                procedures against the current business model and the
                requirements applicable to the agreed jurisdiction, then revise
                the documentation within the defined scope.
              </p>
            </details>
            <details>
              <summary>
                What is the difference between an AML policy and an AML
                procedure?
              </summary>
              <p>
                A policy sets the organisation’s governance principles,
                responsibilities and control standards. A procedure explains how
                those requirements are performed in practice, including steps,
                decisions, approvals, escalation and evidence.
              </p>
            </details>
            <details>
              <summary>
                Can you prepare a framework for several countries?
              </summary>
              <p>
                Yes. A cross-border engagement can establish group-wide
                standards and then map local requirements for individual
                entities or jurisdictions. Local legal opinions or reserved
                services are separately scoped where required.
              </p>
            </details>
            <details>
              <summary>Can sector-specific controls be included?</summary>
              <p>
                Yes. The documentation set can include additional modules
                required by the sector or business model, including payments,
                money-services, gaming, investment-services or digital-asset
                controls where relevant.
              </p>
            </details>
            <details>
              <summary>
                Does having written AML policies mean the business is compliant?
              </summary>
              <p>
                No. Written documentation is only one component of an AML/CFT
                framework. The business must also implement the relevant
                controls, allocate responsibility, retain evidence, train staff
                where required and maintain appropriate oversight and testing.
              </p>
            </details>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech AML/CFT requirements?{" "}
              <a href="/services/aml-cft/">
                See the EU/CZ-focused LEX ARTA AML/CFT services →
              </a>
            </p>
          </div>
        </div>
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
        <section className="cta" id="contact">
          <div className="wrap cta-inner">
            <div>
              <div className="eyebrow">AML/CFT · Policies &amp; Procedures</div>
              <h2>
                Build an AML/CFT framework that reflects how your business
                actually operates.
              </h2>
              <p>
                Tell us the jurisdiction, regulated or obliged activity,
                business model and whether you need a new framework or an update
                to existing documents. We can define the appropriate
                documentation scope.
              </p>
            </div>
            <a className="btn-primary" href="/book-a-consultation/">
              Discuss your framework →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
