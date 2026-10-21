import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/legal-regulatory/ai-governance/",
  title: "AI Governance & AI Regulatory Compliance | International | LEX ARTA",
  heading: "AI Governance",
  description:
    "AI governance advisory on accountability, risk controls, documentation and applicable regulatory expectations.",
  heroImage: "/images/7d2757b7171a23ab52b3.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">LEX ARTA · AI Governance · Regulatory Compliance</div>
                <h1>AI Governance</h1>
                <p className="hero-lead">
                  International AI governance and regulatory advisory for organisations developing,
                  procuring or deploying AI — covering applicability, role and risk classification,
                  governance, transparency, documentation, vendor controls and implementation,
                  including EU AI Act requirements where applicable.
                </p>
                <div aria-label="AI Act capabilities" className="hero-points">
                  <span>AI regulatory applicability</span>
                  <span>Role &amp; risk classification</span>
                  <span>Governance &amp; accountability</span>
                  <span>Transparency &amp; documentation</span>
                  <span>Vendor &amp; procurement controls</span>
                  <span>Cross-border AI compliance</span>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/contact/">
                    Discuss Your AI Use Case
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="/services/legal-regulatory/ai-governance/#problems"
                  >
                    Where to Start
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="AI governance and regulatory compliance advisory with a cross-border business perspective"
                  loading="lazy"
                  src="/images/7d2757b7171a23ab52b3.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="problem-section" id="problems">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Start with the real AI use case</div>
              <h2>What AI compliance question does your business need to solve?</h2>
              <p>
                {" "}
                The first question is not simply whether the organisation uses AI. The relevant
                obligations depend on the system, intended purpose, role, deployment context and the
                business process in which the AI is used.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Do we fall within the EU AI Act?</h3>
                <p>
                  {" "}
                  Determine whether the organisation, system or use case is within scope, including
                  where the business is established outside the EU.{" "}
                </p>
                <ul className="micro-list">
                  <li>Territorial scope</li>
                  <li>AI system inventory</li>
                  <li>EU connection</li>
                  <li>Applicable exclusions</li>
                </ul>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Are we a provider, deployer or another operator?</h3>
                <p>
                  {" "}
                  Map the organisation's role against the actual development, branding,
                  modification, procurement and use of the AI system.{" "}
                </p>
                <ul className="micro-list">
                  <li>Provider</li>
                  <li>Deployer</li>
                  <li>Importer / distributor</li>
                  <li>Downstream responsibilities</li>
                </ul>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Is the AI use prohibited, high-risk or subject to transparency rules?</h3>
                <p>
                  {" "}
                  Classify the actual use case rather than applying a generic label to the
                  underlying technology.{" "}
                </p>
                <ul className="micro-list">
                  <li>Prohibited practices</li>
                  <li>High-risk AI</li>
                  <li>Transparency risk</li>
                  <li>Minimal / other AI</li>
                </ul>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Do our AI-facing disclosures and transparency controls work?</h3>
                <p>
                  {" "}
                  Assess whether the system triggers Article 50 transparency requirements and
                  whether the relevant disclosure, labelling or machine-readable marking obligations
                  are implemented.{" "}
                </p>
                <ul className="micro-list">
                  <li>AI interaction disclosure</li>
                  <li>Deepfakes</li>
                  <li>Synthetic content</li>
                  <li>Transparency notices</li>
                </ul>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Do we need an AI governance framework?</h3>
                <p>
                  {" "}
                  Build ownership, approval, escalation, human oversight, documentation and
                  monitoring around the real AI use cases rather than creating a generic AI
                  policy.{" "}
                </p>
                <ul className="micro-list">
                  <li>Roles &amp; ownership</li>
                  <li>Use-case approval</li>
                  <li>Human oversight</li>
                  <li>Incident &amp; change controls</li>
                </ul>
              </article>
              <article className="problem-card" data-no="06">
                <h3>We use ChatGPT, Copilot or another third-party AI tool. What should we do?</h3>
                <p>
                  {" "}
                  Inventory the use cases, data entered, vendor role, internal ownership and
                  applicable restrictions, then align procurement and internal-use controls with
                  privacy, security and AI governance requirements.{" "}
                </p>
                <ul className="micro-list">
                  <li>Third-party AI</li>
                  <li>Vendor role</li>
                  <li>Data handling</li>
                  <li>Approved-use rules</li>
                </ul>
              </article>
              <article className="problem-card" data-no="07">
                <h3>Do we need a DPIA, Fundamental Rights Impact Assessment, or both?</h3>
                <p>
                  {" "}
                  Determine which assessment duties apply to the specific system and organisation
                  and align overlapping assessments to avoid unnecessary duplication.{" "}
                </p>
                <ul className="micro-list">
                  <li>DPIA</li>
                  <li>FRIA</li>
                  <li>Rights analysis</li>
                  <li>Assessment alignment</li>
                </ul>
              </article>
              <article className="problem-card" data-no="08">
                <h3>Are we ready for the next implementation deadlines?</h3>
                <p>
                  {" "}
                  Maintain a dated implementation plan based on the system category and applicable
                  obligation rather than relying on one general AI Act deadline.{" "}
                </p>
                <ul className="micro-list">
                  <li>2026 transparency</li>
                  <li>2027 Annex III</li>
                  <li>2028 Annex I</li>
                  <li>Implementation roadmap</li>
                </ul>
              </article>
            </div>
            <div className="included-strip">
              <strong>Typical AI Act work areas</strong>
              <div className="included-items">
                <span>AI inventory</span>
                <span>Role mapping</span>
                <span>Risk classification</span>
                <span>AI Act gap assessment</span>
                <span>Transparency</span>
                <span>AI governance</span>
                <span>Impact assessments</span>
                <span>Documentation</span>
                <span>Vendor due diligence</span>
                <span>Contract controls</span>
              </div>
            </div>
          </div>
        </section>
        <section className="distinction">
          <div className="container">
            <div className="distinction-wrap">
              <div>
                <div className="section-kicker">Classification drives the compliance route</div>
                <h2>
                  The same technology can create very different obligations depending on how it is
                  used.
                </h2>
                <p>
                  {" "}
                  AI Act classification should be tied to the actual intended purpose, users,
                  deployment environment and the organisation's legal role. The compliance route
                  then follows from that analysis.{" "}
                </p>
              </div>
              <div className="journey">
                <div className="journey-step">
                  <b>01</b>
                  <span>Inventory systems and use cases</span>
                </div>
                <div className="journey-step">
                  <b>02</b>
                  <span>Map provider, deployer and other roles</span>
                </div>
                <div className="journey-step">
                  <b>03</b>
                  <span>Classify risk and transparency obligations</span>
                </div>
                <div className="journey-step">
                  <b>04</b>
                  <span>Identify governance, evidence and documentation gaps</span>
                </div>
                <div className="journey-step">
                  <b>05</b>
                  <span>Implement controls and maintain the compliance record</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">AI Act risk classification</div>
              <h2>Four different compliance routes.</h2>
              <p>
                {" "}
                Classification should be use-case specific and followed by a cross-regulatory check
                where privacy, employment, consumer, cybersecurity or sector rules also apply.{" "}
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01 / PROHIBITED AI</div>
                <h3>Is the proposed use permitted at all?</h3>
                <p>
                  {" "}
                  Test the use case against the prohibited-practices framework and any applicable
                  statutory exceptions before implementation.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">02 / HIGH-RISK AI</div>
                <h3>Does the use fall within a high-risk category?</h3>
                <p>
                  {" "}
                  Assess Article 6 and the relevant annexes, including sensitive uses in employment,
                  essential services, biometrics and other listed areas.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">03 / TRANSPARENCY RISK</div>
                <h3>Does Article 50 apply?</h3>
                <p>
                  {" "}
                  Review disclosure, labelling and synthetic-content transparency requirements for
                  the relevant provider or deployer use case.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">04 / MINIMAL / OTHER AI</div>
                <h3>Does the system sit outside the high-risk regime?</h3>
                <p>
                  {" "}
                  Even where the AI Act imposes limited direct obligations, privacy, consumer,
                  employment, cybersecurity and sector-specific requirements may still matter.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Current implementation timeline</div>
              <h2>AI Act obligations apply in stages.</h2>
              <p>
                {" "}
                The implementation plan should be tied to the actual system category and
                obligation.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="2025">
                <h3>AI literacy and selected prohibitions</h3>
                <p>
                  {" "}
                  Certain early AI Act provisions, including AI literacy and core
                  prohibited-practice rules, have applied since 2025.{" "}
                </p>
              </article>
              <article className="problem-card" data-no="2026">
                <h3>Transparency &amp; enforcement</h3>
                <p>
                  {" "}
                  Article 50 transparency obligations apply from 2 August 2026, subject to the
                  limited transitional rule for certain systems placed on the market before that
                  date.{" "}
                </p>
              </article>
              <article className="problem-card" data-no="2027">
                <h3>Annex III high-risk systems</h3>
                <p>
                  {" "}
                  The core high-risk requirements for systems classified under Article 6(2) and
                  Annex III apply from 2 December 2027.{" "}
                </p>
              </article>
              <article className="problem-card" data-no="2028">
                <h3>Product-embedded high-risk systems</h3>
                <p>
                  {" "}
                  The corresponding high-risk requirements for systems classified under Article 6(1)
                  and Annex I apply from 2 August 2028.{" "}
                </p>
              </article>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">AI governance &amp; implementation</div>
              <h2>Turn legal requirements into ownership, controls and evidence.</h2>
              <p>
                {" "}
                The objective is not another standalone AI policy. It is a governance model that
                fits the organisation's existing risk, privacy, procurement and compliance
                architecture.{" "}
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01 / GOVERNANCE</div>
                <h3>Ownership &amp; approval</h3>
                <p>
                  {" "}
                  Define who approves AI use cases, who owns compliance, when escalation is required
                  and how material changes are controlled.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">02 / DOCUMENTATION</div>
                <h3>Evidence &amp; record keeping</h3>
                <p>
                  {" "}
                  Establish the records, policies, classifications, assessments and implementation
                  evidence required for the applicable role and risk class.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">03 / HUMAN OVERSIGHT</div>
                <h3>Decision controls</h3>
                <p>
                  {" "}
                  Translate human-oversight requirements into real responsibilities, intervention
                  rights, escalation and monitoring processes.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">04 / CHANGE &amp; INCIDENTS</div>
                <h3>Ongoing lifecycle controls</h3>
                <p>
                  {" "}
                  Address new use cases, material changes, vendor updates, incidents and continuing
                  monitoring rather than treating compliance as a one-off exercise.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Third-party AI &amp; vendor controls</div>
              <h2>Using vendor AI does not remove governance responsibility.</h2>
              <p>
                {" "}
                Businesses procuring or deploying AI should understand the vendor's role,
                documentation, intended purpose, monitoring arrangements and the contractual
                allocation of responsibility.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="A">
                <h3>Vendor &amp; role due diligence</h3>
                <p>
                  Confirm the vendor role, intended purpose, system classification and available
                  compliance documentation.
                </p>
              </article>
              <article className="problem-card" data-no="B">
                <h3>Information &amp; audit rights</h3>
                <p>
                  Ensure the organisation receives the information needed to operate, monitor and
                  evidence its own compliance responsibilities.
                </p>
              </article>
              <article className="problem-card" data-no="C">
                <h3>Incident, change &amp; monitoring clauses</h3>
                <p>
                  Allocate responsibilities for material changes, incidents, monitoring, regulatory
                  cooperation and ongoing information.
                </p>
              </article>
              <article className="problem-card" data-no="D">
                <h3>Exit &amp; dependency controls</h3>
                <p>
                  Identify material vendor dependency and define termination, transition,
                  data-access and continuity arrangements where appropriate.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Cross-regulatory interfaces</div>
              <h2>AI compliance does not sit in isolation.</h2>
              <p>
                {" "}
                The same AI use case may trigger requirements under several legal and regulatory
                frameworks.{" "}
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">GDPR</div>
                <h3>Data protection</h3>
                <p>
                  {" "}
                  Training and inference data, profiling, automated decisions, transparency, DPIAs
                  and privacy-by-design may need to be aligned with the AI governance model.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">EMPLOYMENT</div>
                <h3>HR &amp; workforce use</h3>
                <p>
                  {" "}
                  Recruitment, worker management, evaluation and monitoring can create high-risk,
                  privacy and fundamental-rights issues.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">CYBER / RESILIENCE</div>
                <h3>Security &amp; operational resilience</h3>
                <p>
                  {" "}
                  AI dependencies may need to be integrated into cybersecurity, supplier risk, ICT
                  governance and operational-resilience controls.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">SECTOR RULES</div>
                <h3>Consumer &amp; regulated industries</h3>
                <p>
                  {" "}
                  Financial services, consumer protection and other sector-specific rules can affect
                  AI disclosures, decision-making and control requirements.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">International AI governance</div>
              <h2>
                AI compliance should follow the markets in which the system is developed, offered
                and used.
              </h2>
              <p>
                {" "}
                Outside the EU, AI regulation and supervisory expectations differ significantly by
                jurisdiction. We assess the relevant local framework against the actual AI use case
                and coordinate jurisdiction-specific legal input where required.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="INT1">
                <h3>Cross-border AI regulatory mapping</h3>
                <p>
                  {" "}
                  Identify which AI, data, consumer, employment, financial-services or
                  sector-specific rules may apply when a system is developed in one jurisdiction and
                  deployed in another.{" "}
                </p>
                <ul className="micro-list">
                  <li>Territorial scope</li>
                  <li>Local AI rules</li>
                  <li>Sector requirements</li>
                  <li>Cross-border dependencies</li>
                </ul>
              </article>
              <article className="problem-card" data-no="INT2">
                <h3>Internal AI governance</h3>
                <p>
                  {" "}
                  Build a governance model that can operate across jurisdictions while keeping local
                  regulatory requirements, approval processes and accountability clearly
                  separated.{" "}
                </p>
                <ul className="micro-list">
                  <li>AI policies</li>
                  <li>Approval framework</li>
                  <li>Ownership &amp; escalation</li>
                  <li>Monitoring</li>
                </ul>
              </article>
              <article className="problem-card" data-no="INT3">
                <h3>Third-party and vendor AI</h3>
                <p>
                  {" "}
                  Assess vendor role, documentation, data use, responsibility allocation, audit
                  rights, incident processes and contractual dependencies across markets.{" "}
                </p>
                <ul className="micro-list">
                  <li>Vendor due diligence</li>
                  <li>Information rights</li>
                  <li>Data use</li>
                  <li>Exit controls</li>
                </ul>
              </article>
              <article className="problem-card" data-no="INT4">
                <h3>Automated decisions &amp; customer impact</h3>
                <p>
                  {" "}
                  Review how AI-supported decisions interact with privacy, consumer protection,
                  employment, financial-services and other jurisdiction-specific rights and
                  restrictions.{" "}
                </p>
                <ul className="micro-list">
                  <li>Automated decisions</li>
                  <li>Transparency</li>
                  <li>Human review</li>
                  <li>Customer rights</li>
                </ul>
              </article>
            </div>
            <div className="included-strip">
              <strong>International scope may include</strong>
              <div className="included-items">
                <span>Jurisdiction mapping</span>
                <span>AI governance</span>
                <span>Internal AI policies</span>
                <span>Vendor controls</span>
                <span>Automated decisions</span>
                <span>Transparency</span>
                <span>Data protection</span>
                <span>Sector rules</span>
                <span>Local counsel coordination</span>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Common Questions</div>
              <h2>AI Governance &amp; Regulatory Compliance — FAQ</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>
                  We use ChatGPT, Copilot or other third-party AI internally. Where should we start?
                </h3>
                <p>
                  {" "}
                  Start with an inventory of tools, use cases, data entered, ownership and vendor
                  roles. Then define the organisation's role, applicable risk and transparency
                  rules, internal-use restrictions and vendor controls.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>How do we know whether we are a provider or deployer?</h3>
                <p>
                  {" "}
                  It depends on the actual use of the system. Using third-party AI as intended may
                  indicate a deployer role, while material changes to the system, intended purpose
                  or branding can affect role allocation.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>When can an AI system be high-risk?</h3>
                <p>
                  {" "}
                  High-risk status depends on the Article 6 criteria and relevant annexes, applied
                  to the actual intended purpose and use case.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Do we need a DPIA, a Fundamental Rights Impact Assessment, or both?</h3>
                <p>
                  {" "}
                  It depends on the system, processing and role. Where both GDPR and AI Act
                  assessment duties apply, they should be aligned so the organisation does not build
                  two disconnected assessment processes.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>What should an internal AI policy cover?</h3>
                <p>
                  {" "}
                  Approved and restricted uses, ownership and escalation, generative-AI use, data
                  handling, procurement and vendor checks, human oversight, documentation, incidents
                  and approval of new use cases.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Does the EU AI Act apply to businesses outside the EU?</h3>
                <p>
                  {" "}
                  Potentially. The territorial rules can capture non-EU businesses where the
                  statutory conditions are met. The assessment should be based on the actual
                  offering, use and EU connection.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Do you advise on AI governance outside the EU?</h3>
                <p>
                  {" "}
                  Yes. International engagements are scoped jurisdiction by jurisdiction. We can
                  assess the applicable local AI, data, consumer, employment or sector-specific
                  framework and coordinate appropriately qualified local legal input where
                  jurisdiction-specific advice or formal sign-off is required.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Related services</div>
              <h2>When the AI use case connects with another legal or compliance workstream.</h2>
            </div>
            <div className="related-grid">
              <a className="related-card" href="/services/data-protection/">
                {" "}
                <strong>Data Protection</strong>{" "}
                <span>
                  GDPR, DPIAs, automated decision-making, transparency and data-governance
                  requirements for AI use cases.
                </span>{" "}
              </a>
              <a className="related-card" href="/services/legal-regulatory/commercial-contracts/">
                {" "}
                <strong>Commercial Contracts</strong>{" "}
                <span>
                  AI procurement, vendor agreements, information rights, monitoring, responsibility
                  allocation and exit provisions.
                </span>{" "}
              </a>
              <a
                className="related-card"
                href="/services/legal-regulatory/legal-opinions-regulatory-memoranda/"
              >
                {" "}
                <strong>Legal Opinions &amp; Regulatory Memoranda</strong>{" "}
                <span>
                  Document a defined AI Act classification, role or regulatory conclusion where a
                  formal written position is required.
                </span>{" "}
              </a>
              <a
                className="related-card"
                href="/services/legal-regulatory/legal-regulatory-due-diligence/"
              >
                {" "}
                <strong>Legal &amp; Regulatory Due Diligence</strong>{" "}
                <span>
                  Assess material AI, vendor, data and governance dependencies as part of a broader
                  legal and regulatory risk review.
                </span>{" "}
              </a>
            </div>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech requirements?{" "}
              <a href="/services/legal-regulatory/ai-governance/" rel="noopener" target="_blank">
                See the EU/CZ-focused AI Governance service →
              </a>
            </p>
          </div>
        </div>
        <section className="lx-legal-menu">
          <div className="lx-legal-menu-shell">
            <p className="lx-legal-kicker">Legal &amp; Regulatory</p>
            <h2>Explore the legal and regulatory service block.</h2>
            <div className="lx-legal-links">
              <a href="/services/legal-regulatory/">International Legal &amp; Regulatory</a>
              <a href="/services/legal-regulatory/commercial-contracts/">Commercial Contracts</a>
              <a href="/services/legal-regulatory/legal-opinions-regulatory-memoranda/">
                Legal Opinions &amp; Regulatory Memoranda
              </a>
              <a href="/services/legal-regulatory/legal-regulatory-due-diligence/">
                Legal &amp; Regulatory Due Diligence
              </a>
              <a href="/services/legal-regulatory/regulatory-perimeter-assessment/">
                Regulatory Perimeter Assessment
              </a>
              <a href="/services/legal-regulatory/payments-financial-services-regulatory/">
                Payments &amp; Financial Services Regulatory
              </a>
              <a className="is-current" href="/services/legal-regulatory/ai-governance/">
                AI Governance
              </a>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="final-cta-strip">
            <div className="container final-cta-inner">
              <div>
                <div className="section-kicker">
                  Need to turn AI Act requirements into a workable compliance plan?
                </div>
                <h2>Start with the use case, jurisdictions, role and current governance model.</h2>
                <p>
                  Tell us what AI systems the business develops, procures or deploys, where they are
                  offered or used and which processes they affect. We will define the appropriate EU
                  AI Act and cross-border AI governance workstream.
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss AI Act Compliance
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
