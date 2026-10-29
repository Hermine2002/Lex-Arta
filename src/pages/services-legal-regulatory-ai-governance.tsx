import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/legal-regulatory/ai-governance/",
  title: "AI Governance | Legal Risk & Compliance Advisory | LEX ARTA",
  heading: "AI Governance",
  description:
    "Practical AI governance, legal risk, privacy, vendor contracts and financial-crime compliance advisory for businesses across industries. Explore defined-scope services and fees.",
  heroImage: "/images/ai-governance-hero.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero hero-full">
          <img
            alt="AI governance and oversight represented through a transparent compliance workflow interface"
            className="hero-bg"
            loading="lazy"
            src="/images/ai-governance-hero.webp"
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                Legal &amp; Regulatory / AI Governance
              </div>
              <h1>AI Governance</h1>
              <p className="hero-lead">
                <strong>
                  Legal, regulatory and organisational advisory for businesses
                  using artificial intelligence.
                </strong>
              </p>
              <p className="hero-note">
                LEX ARTA helps organisations manage legal, contractual, privacy
                and financial-crime risks arising from AI use. We develop
                practical policies, establish accountability and human
                oversight, assess AI vendor arrangements and support responsible
                AI-assisted decision-making.
              </p>
              <div
                aria-label="AI governance focus areas"
                className="hero-points"
              >
                <span>Legal risk</span>
                <span>Corporate policies</span>
                <span>Privacy</span>
                <span>Vendor contracts</span>
                <span>Financial crime</span>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss AI Governance
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">What we advise on</p>
              <h2>AI governance that works in practice.</h2>
              <p className="lede">
                Organisations across industries need clear rules for the AI
                tools they procure, deploy and use. Our advice focuses on
                decisions, contractual protections and organisational controls —
                not software development or model testing.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>AI Governance &amp; Corporate Policies</h3>
                <p>
                  Design internal AI governance policies, generative-AI
                  acceptable-use rules, approval workflows, responsibilities,
                  human review and escalation procedures.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>AI Legal &amp; Regulatory Risk</h3>
                <p>
                  Assess the legal and organisational implications of defined AI
                  use cases, including automated decisions, customer impacts,
                  contractual duties and sector-specific restrictions.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>AI Vendor Contracts &amp; Risk</h3>
                <p>
                  Review AI and SaaS terms, confidentiality, data use,
                  intellectual property, liability, subcontracting, information
                  rights and termination provisions.
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>AI &amp; Data Protection Governance</h3>
                <p>
                  Review personal-data use, disclosure, retention, automated
                  decision-making, vendor data flows and privacy assessment
                  needs under applicable law.
                </p>
              </article>
              <article className="problem-card" data-no="05">
                <h3>AI in AML/CFT &amp; Financial Crime</h3>
                <p>
                  Design governance for AI-assisted KYC, transaction monitoring,
                  sanctions screening and fraud processes, including documented
                  human oversight and escalation.
                </p>
              </article>
              <article className="problem-card">
                <h3>AI-Assisted Investigations &amp; Evidence</h3>
                <p>
                  Establish rules for AI use in internal investigations,
                  including source verification, confidentiality, human review,
                  records and evidence integrity.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section dark">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Defined-scope services</p>
              <h2>Clear services. Written outcomes.</h2>
              <p className="lede">
                Every engagement is tied to an agreed entity, AI use cases,
                documents, jurisdictions and deliverables. Only the three
                defined packages below have published fees. Specialist
                engagements are quoted case by case after a scope review.
              </p>
            </div>
            <div className="price-tiers">
              <div className="price-tier">
                <div className="price-label">01 · Entry review</div>
                <h3>AI Governance Legal &amp; Policy Review</h3>
                <div className="price">€1,750</div>
                <p>
                  Fixed fee for one entity in one jurisdiction, up to three
                  identified AI use cases, up to six existing governance or
                  contractual documents and one 60-minute management interview.
                </p>
                <p style={{ marginBottom: 0 }}>
                  <strong>Deliverables:</strong> written legal and governance
                  gap assessment, risk &amp; responsibility matrix, prioritised
                  written action plan, one clarification call after delivery.
                  Full policy drafting and technical validation excluded.
                </p>
              </div>
              <div className="price-tier">
                <div className="price-label">02 · Core framework</div>
                <h3>AI Governance Policies &amp; Framework</h3>
                <div className="price">From €4,950</div>
                <p>
                  A legal and organisational documentation project for one
                  entity, one jurisdiction and up to three identified AI use
                  cases. Includes a 90-minute requirements workshop and one
                  consolidated revision round.
                </p>
                <p style={{ marginBottom: 0 }}>
                  <strong>Deliverables:</strong> AI Governance Policy and
                  Generative AI Acceptable Use Policy, AI use-case approval and
                  responsibility matrix, human oversight and incident escalation
                  procedure, AI-use register and legal risk assessment
                  templates, written implementation guidance. Operational
                  implementation, staff training and certification scoped
                  separately.
                </p>
              </div>
              <div className="price-tier">
                <div className="price-label">03 · Contract review</div>
                <h3>AI Vendor &amp; Contract Risk Review</h3>
                <div className="price">From €1,450</div>
                <p>
                  Legal review of one AI provider and one standard contractual
                  package supplied by the client, covering the provider terms,
                  data-processing terms and relevant published policies; one
                  round of written follow-up questions.
                </p>
                <p style={{ marginBottom: 0 }}>
                  <strong>Deliverables:</strong> vendor contractual risk
                  memorandum, IP, privacy, liability and data-use risk matrix,
                  recommended contractual protections. No technical vendor
                  audit, security testing or certification.
                </p>
              </div>
            </div>
            <p className="lede" style={{ marginTop: "20px" }}>
              Published professional fees are in EUR for the stated scope. Any
              additional work and third-party costs are separately agreed before
              engagement.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Specialist advisory</p>
              <h2>Focused reviews for complex AI use cases.</h2>
              <p className="lede">
                These specialist assignments are priced case by case, because
                the legal frameworks, documents and business processes vary.
                Each proposal specifies the relevant entity, jurisdiction, use
                case, source materials and written deliverables.
              </p>
            </div>
            <div className="deliverables-grid">
              <article className="deliverable">
                <h3>AI &amp; Data Protection Risk Review</h3>
                <p>
                  Legal review of one defined AI-driven processing activity:
                  roles, lawful basis, transparency, retention, automated
                  decision-making and whether a privacy impact assessment is
                  required. Deliverable: written privacy risk memorandum and
                  action list.
                </p>
              </article>
              <article className="deliverable">
                <h3>AI in AML/CFT &amp; Financial Crime Governance</h3>
                <p>
                  Governance review of a defined AI-assisted KYC, monitoring,
                  sanctions or fraud process: decision ownership, human review,
                  alert escalation and evidential records. Deliverable:
                  governance gap report and control recommendations; no
                  model-performance validation.
                </p>
              </article>
              <article className="deliverable">
                <h3>AI-Assisted Investigations &amp; Evidence Governance</h3>
                <p>
                  Review of a defined internal-investigation workflow using AI:
                  confidentiality, source verification, human verification,
                  records, chain of custody and use restrictions. Deliverable:
                  written protocol and risk memorandum; no forensic examination.
                </p>
              </article>
              <article className="deliverable">
                <h3>Ongoing AI Legal &amp; Governance Advisory</h3>
                <p>
                  Monthly advisory on agreed policies, contracts, new AI use
                  cases and governance decisions. Hours, response arrangements,
                  recurring outputs and monthly fee are specified individually
                  in the engagement letter.
                </p>
              </article>
            </div>
            <p className="lede" style={{ marginTop: "20px" }}>
              <strong>Fees: proposal on request.</strong> No standard fee
              applies to these four services. Additional entities, jurisdictions
              or technical work are outside the standard scope unless expressly
              agreed.
            </p>
          </div>
        </section>
        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">How we work</p>
              <h2>From an actual AI use case to usable governance controls.</h2>
              <p className="lede">
                A legal and organisational review that management can act on.
              </p>
            </div>
            <div className="journey">
              <div className="journey-step">
                <b>01</b>
                <span>
                  <strong>Define</strong> — Confirm systems, business uses,
                  jurisdictions, stakeholders and source materials.
                </span>
              </div>
              <div className="journey-step">
                <b>02</b>
                <span>
                  <strong>Review</strong> — Identify legal, contractual, privacy
                  and organisational control gaps.
                </span>
              </div>
              <div className="journey-step">
                <b>03</b>
                <span>
                  <strong>Document</strong> — Deliver written findings, policies
                  or contract recommendations within the agreed scope.
                </span>
              </div>
              <div className="journey-step">
                <b>04</b>
                <span>
                  <strong>Support</strong> — Agree implementation priorities and
                  separately scoped follow-on advisory where needed.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container intro-grid">
            <div>
              <p className="section-kicker">Clear scope boundaries</p>
              <h2>Legal and governance advice — not a technical AI audit.</h2>
              <p>
                LEX ARTA provides legal, contractual, privacy, financial-crime
                and organisational advisory. Our standard AI Governance
                engagement does not include software engineering, model
                development, model-performance validation, algorithm testing,
                technical cybersecurity assessments or certification.
              </p>
              <p>
                Assessment of technical effectiveness, model accuracy or
                discrimination metrics requires appropriate technical
                specialists. Reserved local-law work is separately scoped
                through qualified professionals where necessary.
              </p>
            </div>
            <div className="price-box">
              <div className="price-label">Separate EU specialist service</div>
              <h3>EU AI Act Compliance</h3>
              <p>
                Where a business needs a dedicated EU AI Act analysis —
                including statutory role classification, high-risk obligations,
                Article 50 transparency requirements or AI Act implementation —
                this is available as a separate EU specialist regulatory service
                under the LEX ARTA brand.
              </p>
              <a
                className="btn btn-secondary"
                href="https://www.artlexconsult.com/services/legal-regulatory/ai-act/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore EU AI Act Compliance
              </a>
              <p
                style={{ marginTop: "14px", marginBottom: 0, fontSize: "13px" }}
              >
                The contracting entity and applicable scope are confirmed before
                engagement.
              </p>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Common Questions</div>
              <h2>AI Governance — FAQ</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>
                  Do we need an AI policy if staff use ChatGPT or Copilot?
                </h3>
                <p>
                  Often it is a sensible governance measure. The appropriate
                  rules depend on what staff enter into the tools, the nature of
                  decisions supported, existing contractual duties and the
                  organisation&apos;s risk profile. We can review your use cases
                  and draft proportionate acceptable-use controls.
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  Can you review an AI vendor without access to its model or
                  source code?
                </h3>
                <p>
                  Yes. Contractual and organisational due diligence can assess
                  vendor disclosures, terms, data-use provisions, rights,
                  responsibilities and missing evidence. It does not certify the
                  technical quality or security of the model.
                </p>
              </div>
              <div className="faq-item">
                <h3>Do you advise non-financial businesses?</h3>
                <p>
                  Yes. The core governance, contractual and privacy services are
                  available across industries. AML/CFT and financial-crime
                  governance are additional specialist capabilities where
                  relevant.
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  Can you advise on AI used for AML monitoring or internal
                  investigations?
                </h3>
                <p>
                  Yes, within a defined legal, financial-crime compliance and
                  organisational-governance scope: responsibility for decisions,
                  human review, evidence handling, escalation and policies.
                  Independent performance testing of AI detection models is not
                  included.
                </p>
              </div>
              <div className="faq-item">
                <h3>Do you provide EU AI Act compliance assessments?</h3>
                <p>
                  Dedicated EU AI Act analysis is offered as a separate
                  specialist workstream through Artlex Consult s.r.o. If a
                  proposed AI use case triggers applicable EU obligations, those
                  requirements must be addressed rather than excluded merely
                  because the project is international.
                </p>
              </div>
              <div className="faq-item">
                <h3>Will you obtain ISO/IEC 42001 certification for us?</h3>
                <p>
                  No. We can assist with selected legal and governance
                  documentation informed by relevant recognised frameworks, but
                  we do not provide certification, accredited audits or a
                  guarantee of standards compliance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Related services</div>
              <h2>
                When the AI use case connects with another legal or compliance
                workstream.
              </h2>
            </div>
            <div className="related-grid">
              <a className="related-card" href="/services/data-protection/">
                <strong>Data Protection</strong>
                <span>
                  GDPR, DPIAs, automated decision-making, transparency and
                  data-governance requirements for AI use cases.
                </span>
              </a>
              <a
                className="related-card"
                href="/services/legal-regulatory/commercial-contracts/"
              >
                <strong>Commercial Contracts</strong>
                <span>
                  AI procurement, vendor agreements, information rights,
                  monitoring, responsibility allocation and exit provisions.
                </span>
              </a>
              <a
                className="related-card"
                href="/services/legal-regulatory/legal-opinions-regulatory-memoranda/"
              >
                <strong>Legal Opinions &amp; Regulatory Memoranda</strong>
                <span>
                  Document a defined AI Act classification, role or regulatory
                  conclusion where a formal written position is required.
                </span>
              </a>
              <a
                className="related-card"
                href="/services/legal-regulatory/legal-regulatory-due-diligence/"
              >
                <strong>Legal &amp; Regulatory Due Diligence</strong>
                <span>
                  Assess material AI, vendor, data and governance dependencies
                  as part of a broader legal and regulatory risk review.
                </span>
              </a>
            </div>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech requirements?{" "}
              <a
                href="/services/legal-regulatory/ai-governance/"
                rel="noopener"
                target="_blank"
              >
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
              <a href="/services/legal-regulatory/">
                International Legal &amp; Regulatory
              </a>
              <a href="/services/legal-regulatory/commercial-contracts/">
                Commercial Contracts
              </a>
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
              <a
                className="is-current"
                href="/services/legal-regulatory/ai-governance/"
              >
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
                  Discuss your AI governance needs
                </div>
                <h2>
                  Make AI use accountable, documented and contractually sound.
                </h2>
                <p>
                  Tell us which AI systems your business uses, what decisions
                  they support and which legal, contractual or governance
                  questions you need to resolve. We will propose a defined
                  advisory scope and deliverables.
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href="/contact/">
                  Book an AI Governance Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
