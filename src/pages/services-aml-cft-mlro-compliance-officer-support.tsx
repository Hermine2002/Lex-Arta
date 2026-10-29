import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/aml-cft/mlro-compliance-officer-support/",
  title: "Outsourced AML Operations & MLRO Advisory | LEX ARTA",
  heading: "MLRO & Compliance Officer Support",
  description:
    "Outsourced AML operations, KYC/KYB support and fractional compliance oversight for FinTech, payment firms and CASPs. Defined mandates and transparent monthly plans.",
  heroImage: "/images/f68f188c39d7287884ef.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <div className="container breadcrumb">
          <a href="/">Home</a>&nbsp; / &nbsp;
          <a href="/services/aml-cft/">AML/CFT</a>&nbsp; / &nbsp;MLRO &amp;
          Compliance Officer Support
        </div>
        <section className="hero">
          <img
            alt=""
            className="hero-bg"
            loading="lazy"
            src="/images/f68f188c39d7287884ef.webp"
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                LEX ARTA / AML/CFT &amp; Financial Crime
              </p>
              <h1>Outsourced AML Operations &amp; MLRO Advisory Support</h1>
              <p className="hero-lead">
                Practical AML capacity for FinTech, payments and digital-asset
                businesses. We support defined compliance workflows, complex
                cases and ongoing oversight — while your organisation retains
                its regulatory responsibilities.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="/book-a-consultation/">
                  Discuss Your AML Needs
                </a>
                <a
                  className="btn btn-secondary"
                  href="/services/aml-cft/mlro-compliance-officer-support/#plans"
                >
                  View Monthly Plans
                </a>
              </div>
              <div
                aria-label="Engagement characteristics"
                className="hero-points"
              >
                <span>Defined scope</span>
                <span>Documented reporting</span>
                <span>No statutory MLRO appointment</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper" id="approach">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Our approach</p>
              <h2>Three ways to strengthen your AML operations.</h2>
              <p className="lede">
                Choose support for decisions, recurring tasks or senior
                oversight. Every engagement starts with a review of the client
                entity, applicable requirements, existing controls, systems and
                capacity needs.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card">
                <h3>01 / Advise — Expert guidance</h3>
                <p>
                  Second opinions on CDD/EDD, escalations, policies and
                  difficult compliance questions.
                </p>
              </article>
              <article className="problem-card">
                <h3>02 / Operate — Operational support</h3>
                <p>
                  Defined KYC/KYB, screening and monitoring-support tasks with
                  documented quality checks and escalation routes.
                </p>
              </article>
              <article className="problem-card">
                <h3>03 / Oversee — Governance support</h3>
                <p>
                  Review of AML activity, open issues, remediation progress and
                  management information alongside internal accountable
                  personnel.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Who it is for</p>
              <h2>Support when internal capacity is stretched.</h2>
            </div>
            <div className="problem-grid">
              <article className="problem-card">
                <h3>FinTech and payment firms</h3>
                <p>
                  Recurring onboarding, periodic reviews, compliance casework
                  and control documentation.
                </p>
              </article>
              <article className="problem-card">
                <h3>Crypto-asset businesses</h3>
                <p>
                  Additional capacity for wallet-risk reviews, monitoring case
                  preparation and Travel Rule workflows, where relevant.
                </p>
              </article>
              <article className="problem-card">
                <h3>Growing compliance teams</h3>
                <p>
                  Specialist input and structured review when internal staff
                  need support without a new full-time role.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section paper" id="plans">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Monthly service plans</p>
              <h2>Clear deliverables. Defined monthly capacity.</h2>
              <p className="lede">
                Indicative starting fees for a documented scope. Final pricing
                depends on jurisdiction, regulated activity, workload, systems
                access, risk and required service levels. Included hours are
                monthly capacity ceilings, not guaranteed case volumes.
              </p>
            </div>
            <div className="price-tiers">
              <div className="price-tier">
                <div className="price-label">01 / Advisory</div>
                <h3>AML Expert Desk</h3>
                <p>
                  Senior second-line support for an existing AML/compliance
                  lead.
                </p>
                <ul>
                  <li>Up to 6 senior advisory hours/month</li>
                  <li>Selected CDD/EDD and risk escalations</li>
                  <li>Regulatory and policy questions</li>
                  <li>Monthly advice and action log</li>
                </ul>
                <div className="price">€950</div>
                <p
                  className="price-label"
                  style={{ textTransform: "none", letterSpacing: 0 }}
                >
                  / month
                </p>
              </div>
              <div className="price-tier">
                <div className="price-label">02 / Operations</div>
                <h3>AML Operations Support</h3>
                <p>
                  Additional hands-on capacity for an established compliance
                  workflow.
                </p>
                <ul>
                  <li>Up to 15 operational hours/month</li>
                  <li>KYC/KYB and periodic-review support</li>
                  <li>Screening and alert triage preparation</li>
                  <li>Case tracker and QA summary</li>
                </ul>
                <div className="price">€1,650</div>
                <p
                  className="price-label"
                  style={{ textTransform: "none", letterSpacing: 0 }}
                >
                  / month
                </p>
              </div>
              <div className="price-tier">
                <div className="price-label">03 / Oversight</div>
                <h3>Fractional AML Oversight</h3>
                <p>
                  Senior governance advice, not a statutory officer appointment.
                </p>
                <ul>
                  <li>Up to 18 senior hours/month</li>
                  <li>Monthly compliance workplan review</li>
                  <li>Material issues and remediation follow-up</li>
                  <li>Governance report to agreed recipients</li>
                </ul>
                <div className="price">€2,750</div>
                <p
                  className="price-label"
                  style={{ textTransform: "none", letterSpacing: 0 }}
                >
                  / month
                </p>
              </div>
              <div className="price-tier">
                <div className="price-label">04 / Managed operations</div>
                <h3>Managed AML Operations</h3>
                <p>
                  A coordinated workstream with agreed task types and decision
                  boundaries.
                </p>
                <ul>
                  <li>Up to 30 operational + 10 senior hours/month</li>
                  <li>Selected KYC, screening and monitoring workflows</li>
                  <li>QA, escalation and exception tracking</li>
                  <li>Monthly operational and governance report</li>
                </ul>
                <div className="price-label">From</div>
                <div className="price">€4,950</div>
                <p
                  className="price-label"
                  style={{ textTransform: "none", letterSpacing: 0 }}
                >
                  / month
                </p>
              </div>
              <div className="price-tier">
                <div className="price-label">05 / Tailored mandate</div>
                <h3>Enhanced CASP AML Support</h3>
                <p>
                  A custom scope for more complex digital-asset compliance
                  operations.
                </p>
                <ul>
                  <li>Risk-based assessment of expected casework</li>
                  <li>Wallet-risk and alert-review support</li>
                  <li>Travel Rule workflow coordination where applicable</li>
                  <li>Tailored reporting and capacity</li>
                </ul>
                <div className="price" style={{ fontSize: "1.6rem" }}>
                  Custom fee
                </div>
              </div>
            </div>
            <p className="price-note">
              Additional approved time: senior advisory €175/hour; operational
              support €125/hour. Each plan requires agreed working hours,
              response targets, task volumes, review responsibilities and change
              control. Third-party tools, licences, major remediation projects
              and technical implementation are not included unless expressly
              agreed. Fees exclude applicable taxes. No 24/7 coverage is
              implied.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Workstreams</p>
              <h2>What the engagement may cover.</h2>
              <p className="lede">
                Specific tasks are selected in the Statement of Work; not every
                workstream is included in every monthly plan.
              </p>
            </div>
            <div className="deliverables-grid">
              <article className="deliverable">
                <h3>CDD / KYC / KYB</h3>
                <p>
                  File completeness, information checks, beneficial-owner
                  documentation and periodic-review preparation.
                </p>
              </article>
              <article className="deliverable">
                <h3>EDD &amp; escalations</h3>
                <p>
                  Case analysis and recommendations for the client&apos;s
                  authorised decision-maker.
                </p>
              </article>
              <article className="deliverable">
                <h3>Sanctions &amp; PEP screening</h3>
                <p>
                  Potential-match review support, record quality and defined
                  escalation steps.
                </p>
              </article>
              <article className="deliverable">
                <h3>Transaction monitoring</h3>
                <p>
                  Alert review support, investigation preparation and
                  quality-control documentation.
                </p>
              </article>
              <article className="deliverable">
                <h3>Governance &amp; reporting</h3>
                <p>
                  Issue registers, operating metrics, remediation tracking and
                  management reporting.
                </p>
              </article>
              <article className="deliverable">
                <h3>CASP workflows</h3>
                <p>
                  Wallet-risk case support, blockchain analytics coordination
                  and relevant transfer-data controls.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Separate project work</p>
              <h2>Build, transition or improve your AML operations.</h2>
            </div>
            <div className="problem-grid">
              <article className="problem-card">
                <h3>AML Operating Model Design</h3>
                <p>
                  Responsibility matrix, case workflow design, control ownership
                  and reporting structure. Detailed procedures and
                  implementation are separately scoped.
                </p>
                <p>
                  <strong>From €5,500 · Project fee</strong>
                </p>
              </article>
              <article className="problem-card">
                <h3>AML Operations Build &amp; Launch</h3>
                <p>
                  Selected operational procedures, implementation planning,
                  handover and initial workflow validation. Software
                  implementation is not included by default.
                </p>
                <p>
                  <strong>From €12,500 · Project fee</strong>
                </p>
              </article>
              <article className="problem-card">
                <h3>MLRO Transition Support</h3>
                <p>
                  Open-case and issue registers, handover plan, reporting
                  calendar and continuity support; no formal appointment is
                  assumed.
                </p>
                <p>
                  <strong>From €2,500 · Project fee</strong>
                </p>
              </article>
              <article className="problem-card">
                <h3>AML Backlog Review</h3>
                <p>
                  Time-limited file review and quality remediation based on an
                  agreed sample or case inventory. Regulatory inspection support
                  is quoted separately.
                </p>
                <p>
                  <strong>From €2,500 · Limited-scope project</strong>
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section dark" id="boundaries">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Regulatory safeguards</p>
              <h2>Operational help, clear accountability.</h2>
              <p className="lede">
                We establish the legal and operational boundaries before
                accepting an outsourced AML mandate.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card">
                <h3>Responsibilities remain with the client</h3>
                <p>
                  The client retains statutory AML/CFT obligations and its
                  required governance and role-holders. We do not offer formal
                  MLRO, MLCO or nominated-officer appointments through Artlex
                  Global LTD.
                </p>
              </article>
              <article className="problem-card">
                <h3>Delegation is jurisdiction-specific</h3>
                <p>
                  Availability of outsourcing depends on local law, supervisory
                  expectations and the function concerned. Reserved strategic
                  and statutory decisions are not transferred to LEX ARTA.
                </p>
              </article>
              <article className="problem-card">
                <h3>Access and data protection</h3>
                <p>
                  Data access, confidentiality, security, any sub-processors and
                  international transfers are assessed before live casework.
                  Appropriate processing terms are agreed where required.
                </p>
              </article>
              <article className="problem-card">
                <h3>Written scope and exit</h3>
                <p>
                  The engagement defines tasks, approvers, escalation, service
                  levels, quality control, reporting, oversight and a workable
                  handover or exit process.
                </p>
              </article>
            </div>
            <p className="lede" style={{ marginTop: "24px" }}>
              Independent AML audits are separate engagements and require an
              independence review. We do not independently audit controls we
              operate where this would compromise independence.
            </p>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Engagement process</p>
              <h2>From needs assessment to delivery.</h2>
            </div>
            <div className="journey">
              <div className="journey-step">
                <b>01</b>
                <span>
                  <strong>Assess</strong> — Review client entity, jurisdiction,
                  regulatory perimeter, volumes and existing AML controls.
                </span>
              </div>
              <div className="journey-step">
                <b>02</b>
                <span>
                  <strong>Agree</strong> — Confirm service hours, deliverables,
                  decision rights, privacy/security terms and price.
                </span>
              </div>
              <div className="journey-step">
                <b>03</b>
                <span>
                  <strong>Deliver</strong> — Perform agreed work, record
                  exceptions, escalate decisions and report against the mandate.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Common questions</p>
              <h2>Before you appoint an external AML provider.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>
                  Will LEX ARTA act as our statutory MLRO or MLCO?
                </summary>
                <p>
                  No. Under this Artlex Global LTD service, we provide advisory,
                  operational and governance support. Formal statutory
                  appointments are excluded.
                </p>
              </details>
              <details>
                <summary>
                  Can we outsource our entire AML responsibility?
                </summary>
                <p>
                  No. Outsourcing does not transfer your statutory
                  accountability. Which operational tasks may be delegated must
                  be assessed for your entity and jurisdiction.
                </p>
              </details>
              <details>
                <summary>How many customer cases are included?</summary>
                <p>
                  There is no universal case-count commitment. Included hours
                  are capacity ceilings; case numbers depend on risk,
                  complexity, data quality, tools and agreed service levels.
                  Expected volumes are documented before engagement.
                </p>
              </details>
              <details>
                <summary>
                  Does the monthly fee include screening or blockchain analytics
                  software?
                </summary>
                <p>
                  No third-party software subscription is included unless
                  specifically agreed. We can work with approved client systems
                  and define any specialist tooling requirements before launch.
                </p>
              </details>
              <details>
                <summary>
                  Can you assist a company operating in several countries?
                </summary>
                <p>
                  Potentially, following a separate assessment of each relevant
                  legal entity and jurisdiction, the applicable outsourcing
                  restrictions, security arrangements and data transfer rules.
                </p>
              </details>
              <details>
                <summary>
                  Can you also provide an independent AML audit?
                </summary>
                <p>
                  Only through a separate assessment of scope and independence.
                  We will not describe a review of our own operational work as
                  independent.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="section dark">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Related AML/CFT services</p>
              <h2>Related AML/CFT services.</h2>
            </div>
            <div className="related-grid">
              <a
                className="related-card"
                href="/services/aml-cft/aml-audit-independent-review/"
              >
                <strong>AML Audit</strong>
                <span>Independent review</span>
              </a>
              <a
                className="related-card"
                href="/services/aml-cft/enterprise-wide-risk-assessment/"
              >
                <strong>Business-Wide Risk Assessment</strong>
                <span>Risk assessment</span>
              </a>
              <a
                className="related-card"
                href="/services/aml-cft/aml-gap-analysis/"
              >
                <strong>Regulatory Gap Analysis</strong>
                <span>Diagnostic</span>
              </a>
              <a
                className="related-card"
                href="/services/aml-cft/aml-policies-procedures/"
              >
                <strong>AML Policies &amp; Procedures</strong>
                <span>Framework build</span>
              </a>
            </div>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech AML/CFT requirements?{" "}
              <a
                href="https://www.artlexconsult.com/services/aml-cft/outsourced-mlro/"
                rel="noopener noreferrer"
                target="_blank"
              >
                AML Compliance &amp; MLRO Support →
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
                className="is-current"
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
                className=""
                href="/services/aml-cft/fraud-financial-crime-risk/"
              >
                Fraud &amp; Financial Crime Risk
              </a>
            </div>
          </div>
        </section>
        <section className="closing">
          <div className="container closing-grid">
            <div>
              <p className="kicker">Discuss an engagement</p>
              <h2>Tell us what your AML team needs to cover.</h2>
              <p>
                Share your jurisdiction, regulated activities, current
                compliance setup and approximate workload. We can identify a
                suitable support model and prepare a scope-based proposal.
              </p>
            </div>
            <a className="btn" href="/book-a-consultation/">
              Request an AML Support Proposal
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
