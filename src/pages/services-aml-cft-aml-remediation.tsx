import type { PageMeta } from "./types";

// Route metadata is required as a named export and is not a React component.
// eslint-disable-next-line react-refresh/only-export-components
export const meta: PageMeta = {
  path: "/services/aml-cft/aml-remediation/",
  title: "AML Remediation & Regulatory Findings Support | LEX ARTA",
  heading: "AML Remediation",
  description:
    "AML/CFT remediation support for regulatory findings, audit deficiencies, KYC backlogs and governance gaps. Risk-based action plans and implementation evidence.",
  heroImage: "/images/aml-remediation-hero.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero hero-full">
          <img
            alt="Advisors reviewing a signed remediation action plan"
            className="hero-bg"
            loading="lazy"
            src="/images/aml-remediation-hero.webp"
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                LEX ARTA / AML/CFT &amp; Financial Crime
              </div>
              <h1>AML Remediation</h1>
              <p className="hero-lead">
                Resolve regulatory, audit and internal AML/CFT findings through
                targeted corrective action, implementation support and
                documented evidence.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss AML Remediation
                </a>
                <a
                  className="btn btn-secondary"
                  href="/services/aml-cft/aml-remediation/#scope"
                >
                  Explore the Scope
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <div className="section-head">
              <p className="kicker">When to engage</p>
              <h2>Correct the control weakness, not just the document.</h2>
              <p className="lede">
                A finding can signal a wider issue in governance, due diligence,
                monitoring, sanctions controls or escalation. Remediation should
                identify the cause, assign ownership and demonstrate what
                changed.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Regulatory findings</h3>
                <p>
                  Respond to deficiencies identified by supervisors or licensing
                  authorities within defined deadlines.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Audit and review findings</h3>
                <p>
                  Address weaknesses identified through independent reviews,
                  internal audits or compliance testing.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>KYC and control backlogs</h3>
                <p>
                  Prioritise shortcomings in customer due diligence, risk
                  classification and ongoing reviews.
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Governance and evidence gaps</h3>
                <p>
                  Clarify ownership, approvals and the evidence needed to
                  demonstrate corrective action.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container intro-grid">
            <div>
              <p className="kicker">Our approach</p>
              <h2>From findings to corrective action.</h2>
              <p className="lede">
                We convert findings into a structured plan and support
                implementation within an agreed mandate. Actions are tracked
                against clear responsibilities and evidence requirements.
              </p>
              <div className="callout">
                The engagement does not guarantee acceptance or closure by a
                supervisor. Final approvals and regulatory responsibilities
                remain with the client and its authorised role-holders.
              </div>
            </div>
            <div className="journey">
              <div className="journey-step">
                <b>01</b>
                <span>
                  <strong>Understand</strong> — Review the findings, supporting
                  evidence and applicable regulatory requirements.
                </span>
              </div>
              <div className="journey-step">
                <b>02</b>
                <span>
                  <strong>Prioritise</strong> — Identify material risks,
                  deadlines, dependencies and operational urgency.
                </span>
              </div>
              <div className="journey-step">
                <b>03</b>
                <span>
                  <strong>Plan</strong> — Agree actions, owners, milestones and
                  evidence standards.
                </span>
              </div>
              <div className="journey-step">
                <b>04</b>
                <span>
                  <strong>Implement</strong> — Support changes to policies,
                  processes, methodologies and governance.
                </span>
              </div>
              <div className="journey-step">
                <b>05</b>
                <span>
                  <strong>Document</strong> — Prepare evidence of
                  implementation; closure remains subject to appropriate client
                  or supervisory acceptance.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper" id="scope">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Scope of work</p>
              <h2>Targeted AML remediation services.</h2>
              <p className="lede">
                Projects can address selected deficiencies or a broader AML/CFT
                framework. Scope depends on the business model, jurisdiction,
                regulatory status and findings.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Remediation planning</h3>
                <p>
                  Corrective actions, responsible owners, deadlines,
                  dependencies and closure criteria.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Root-cause analysis</h3>
                <p>
                  Identify failures in governance, methodology, procedures,
                  training, data or execution.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Policies and procedures</h3>
                <p>
                  Update AML/CFT documentation to reflect legal requirements and
                  actual workflows.
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>KYC, CDD and EDD</h3>
                <p>
                  Improve onboarding, beneficial-ownership checks, periodic
                  review and enhanced due diligence.
                </p>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Risk methodology</h3>
                <p>
                  Review customer-risk and business-wide risk-assessment
                  approaches.
                </p>
              </article>
              <article className="problem-card">
                <h3>Transaction monitoring governance</h3>
                <p>
                  Improve alert review, escalation, investigation records and
                  oversight; technical configuration is separately scoped.
                </p>
              </article>
              <article className="problem-card">
                <h3>Sanctions and PEP controls</h3>
                <p>
                  Review screening governance, escalation procedures and
                  decision records.
                </p>
              </article>
              <article className="problem-card">
                <h3>Suspicious activity escalation</h3>
                <p>
                  Clarify internal investigation, escalation and reporting
                  responsibilities.
                </p>
              </article>
              <article className="problem-card">
                <h3>Governance and MLRO oversight</h3>
                <p>
                  Strengthen reporting lines, management information,
                  accountability and control ownership.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section dark">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Outputs</p>
              <h2>Evidence of what has changed.</h2>
              <p className="lede">
                Documents are outputs, not substitutes for effective controls.
                Deliverables are agreed according to the identified
                deficiencies.
              </p>
            </div>
            <div className="deliverables-grid">
              <article className="deliverable">
                <h3>Remediation Action Plan</h3>
                <p>
                  Findings, actions, accountable owners, priorities, milestones
                  and status.
                </p>
              </article>
              <article className="deliverable">
                <h3>Revised AML/CFT documentation</h3>
                <p>
                  Policies, procedures, methodologies and control requirements
                  within the agreed scope.
                </p>
              </article>
              <article className="deliverable">
                <h3>Evidence and closure pack</h3>
                <p>
                  Records of implementation, approval and the supporting
                  evidence for closure.
                </p>
              </article>
              <article className="deliverable">
                <h3>Root-cause assessment</h3>
                <p>
                  Documented analysis of underlying deficiencies where included
                  in the mandate.
                </p>
              </article>
              <article className="deliverable">
                <h3>Management reporting</h3>
                <p>
                  Concise progress updates, unresolved issues and escalation
                  items.
                </p>
              </article>
              <article className="deliverable">
                <h3>Regulatory response support</h3>
                <p>
                  Factual and compliance input to responses, subject to local
                  professional restrictions.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container intro-grid">
            <div>
              <p className="kicker">Cross-border mandates</p>
              <h2>One disciplined process. Local legal requirements.</h2>
              <p>
                For international groups, remediation can be coordinated across
                entities while distinguishing common group standards from local
                AML/CFT requirements and supervisory expectations.
              </p>
              <p className="lede">
                Local-law advice, representation and reserved professional work
                are provided only where lawfully permitted and, where necessary,
                through appropriately qualified local advisers under separate
                arrangements.
              </p>
            </div>
            <div className="intro-copy">
              <p className="kicker">Related but distinct services</p>
              <div className="journey">
                <div className="journey-step">
                  <span>
                    <strong>AML Gap Analysis</strong> — Identifies the
                    difference between current controls and the required
                    standard.
                  </span>
                </div>
                <div className="journey-step">
                  <span>
                    <strong>AML Remediation</strong> — Addresses known
                    deficiencies and supports corrective action.
                  </span>
                </div>
                <div className="journey-step">
                  <span>
                    <strong>Independent AML Review</strong> — Provides
                    independent assurance under a separate mandate and subject
                    to conflict checks.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="related-banner">
          <div className="container">
            <div>
              <p className="section-kicker">Related EU regulatory services</p>
              <h2>EU AML/CFT Compliance &amp; Regulatory Advisory</h2>
              <p>
                Specialist support for businesses operating under EU AML/CFT
                requirements, including risk assessments, compliance frameworks,
                regulatory reviews and remediation.
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
              <h2>AML remediation — common questions.</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Is AML remediation the same as a gap analysis?</h3>
                <p>
                  No. Gap analysis identifies deficiencies. Remediation
                  addresses identified weaknesses through corrective action and
                  implementation support.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can the engagement cover only one area?</h3>
                <p>
                  Yes. The scope may focus on CDD/EDD, customer risk,
                  transaction monitoring governance, sanctions controls,
                  policies, EWRA or governance.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can you support a historical KYC backlog?</h3>
                <p>
                  Yes, subject to the agreed mandate. We can support risk-based
                  prioritisation, review standards, governance and quality
                  assurance. Large-scale file processing is scoped separately.
                </p>
              </div>
              <div className="faq-item">
                <h3>Does LEX ARTA guarantee regulatory closure?</h3>
                <p>
                  No. We support implementation and evidence preparation, but
                  acceptance of remediation findings rests with the relevant
                  authority or accountable client decision-maker.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can you support different jurisdictions?</h3>
                <p>
                  Yes, after evaluating each relevant jurisdiction and the
                  services legally permitted there.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">AML/CFT &amp; Financial Crime</p>
              <h2>Explore related AML/CFT services.</h2>
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
              <a
                className="related-card"
                href="/services/aml-cft/fraud-financial-crime-risk/"
              >
                <strong>Fraud &amp; Financial Crime Risk</strong>
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
              <a
                className="is-current"
                href="/services/aml-cft/aml-remediation/"
              >
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
              <div className="section-kicker">AML/CFT / Remediation</div>
              <h2>Turn AML findings into a practical remediation plan.</h2>
              <p>
                Share the findings, jurisdiction, deadline and remediation
                status. We will assess the appropriate project scope and next
                steps.
              </p>
            </div>
            <div className="final-cta-actions">
              <a className="btn btn-primary" href="/contact/">
                Discuss an AML Remediation Matter
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
