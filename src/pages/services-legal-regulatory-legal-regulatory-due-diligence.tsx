import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/legal-regulatory/legal-regulatory-due-diligence/",
  title: "Legal & Regulatory Due Diligence | International | LEX ARTA",
  heading: "Legal & Regulatory Due Diligence",
  description:
    "Legal and regulatory due diligence that identifies material issues, missing evidence, dependencies and conditions to proceed.",
  heroImage: "/images/978a3b87fcb5948e75d8.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">LEX ARTA · Legal &amp; Regulatory Due Diligence</div>
                <h1>Legal &amp; Regulatory Due Diligence</h1>
                <p className="hero-lead">
                  {" "}
                  Understand the legal and regulatory risk before you rely on the business, partner
                  or operating model. We test the stated position against the actual activities,
                  evidence, critical dependencies and regulatory history.{" "}
                </p>
                <div aria-label="Key due diligence areas" className="hero-points">
                  <span>Regulatory status</span>
                  <span>Licence scope</span>
                  <span>Governance</span>
                  <span>AML/CFT &amp; sanctions</span>
                  <span>Banking dependencies</span>
                  <span>Contracts &amp; IP</span>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/book-a-consultation/">
                    Discuss the Review
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="/services/legal-regulatory/legal-regulatory-due-diligence/#problems"
                  >
                    What We Test
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="Legal and regulatory due diligence review in a premium business setting"
                  loading="lazy"
                  src="/images/978a3b87fcb5948e75d8.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="problem-section" id="problems">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Start with the decision</div>
              <h2>What needs to be true before you can rely on the business?</h2>
              <p>
                {" "}
                A regulated business can look sound in formal documentation while material
                weaknesses sit in the licence perimeter, AML function, governance, banking
                infrastructure, contracts, regulatory history or critical third-party
                relationships.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Does the regulatory status support the actual business?</h3>
                <p>
                  {" "}
                  We compare licences, registrations and stated permissions with the real products,
                  customer base, revenue-generating activities, territorial reach and operating
                  model.{" "}
                </p>
                <ul className="micro-list">
                  <li>Licence scope</li>
                  <li>Actual activities</li>
                  <li>Territorial reach</li>
                  <li>Regulatory restrictions</li>
                </ul>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Are ownership, control and governance arrangements reliable?</h3>
                <p>
                  {" "}
                  We review ownership, control rights, management responsibilities, governance
                  arrangements and material accountability gaps.{" "}
                </p>
                <ul className="micro-list">
                  <li>Ownership</li>
                  <li>Control rights</li>
                  <li>Governance</li>
                  <li>Management accountability</li>
                </ul>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Could AML/CFT or sanctions weaknesses create material exposure?</h3>
                <p>
                  {" "}
                  We identify material financial-crime control weaknesses, unresolved remediation
                  and responsibility gaps relevant to the relationship.{" "}
                </p>
                <ul className="micro-list">
                  <li>AML/CFT framework</li>
                  <li>Sanctions controls</li>
                  <li>KYC/KYB allocation</li>
                  <li>Known deficiencies</li>
                </ul>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Are there unresolved supervisory or regulatory matters?</h3>
                <p>
                  {" "}
                  We assess whether past or current regulator enquiries, findings, remediation
                  commitments or restrictions remain relevant to the current risk picture.{" "}
                </p>
                <ul className="micro-list">
                  <li>Regulatory history</li>
                  <li>Supervisory enquiries</li>
                  <li>Findings</li>
                  <li>Remediation commitments</li>
                </ul>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Does the business depend on fragile banking or payment infrastructure?</h3>
                <p>
                  {" "}
                  We identify material dependencies on banks, EMIs, PSPs, safeguarding arrangements,
                  reserves or account-control structures that may affect continuity.{" "}
                </p>
                <ul className="micro-list">
                  <li>Banking relationships</li>
                  <li>PSP / EMI dependencies</li>
                  <li>Safeguarding</li>
                  <li>Account restrictions</li>
                </ul>
              </article>
              <article className="problem-card" data-no="06">
                <h3>Do critical contracts and third parties support the operating model?</h3>
                <p>
                  {" "}
                  We review key outsourcing, distribution, white-label, agent and
                  regulated-counterparty arrangements for continuity, control, audit, termination
                  and responsibility-allocation risk.{" "}
                </p>
                <ul className="micro-list">
                  <li>Critical providers</li>
                  <li>White-label partners</li>
                  <li>Agents &amp; distributors</li>
                  <li>Outsourcing</li>
                </ul>
              </article>
              <article className="problem-card" data-no="07">
                <h3>Does the business control the data, technology and IP it relies on?</h3>
                <p>
                  {" "}
                  We identify ownership, usage rights, third-party restrictions, transfer
                  dependencies and reliance on key individuals or contractors.{" "}
                </p>
                <ul className="micro-list">
                  <li>IP ownership</li>
                  <li>Usage rights</li>
                  <li>Data dependencies</li>
                  <li>Key-person reliance</li>
                </ul>
              </article>
              <article className="problem-card" data-no="08">
                <h3>What must be clarified or fixed before proceeding?</h3>
                <p>
                  {" "}
                  We separate confirmed findings from unresolved questions and identify the issues
                  that require evidence, remediation, contractual protection or specialist
                  input.{" "}
                </p>
                <ul className="micro-list">
                  <li>Red flags</li>
                  <li>Missing evidence</li>
                  <li>Conditions to proceed</li>
                  <li>Priority actions</li>
                </ul>
              </article>
            </div>
            <div className="included-strip">
              <strong>Typical review areas</strong>
              <div className="included-items">
                <span>Regulatory status</span>
                <span>Licensing</span>
                <span>Ownership &amp; governance</span>
                <span>AML/CFT &amp; sanctions</span>
                <span>Regulatory history</span>
                <span>Banking &amp; safeguarding</span>
                <span>Material contracts</span>
                <span>Critical providers</span>
                <span>Data &amp; privacy</span>
                <span>IP &amp; technology</span>
              </div>
            </div>
          </div>
        </section>
        <section className="distinction">
          <div className="container">
            <div className="distinction-wrap">
              <div>
                <div className="section-kicker">Evidence matters</div>
                <h2>
                  Due diligence quality depends on the questions asked — not the volume reviewed.
                </h2>
                <p>
                  {" "}
                  We begin with the decision, develop a tailored information request and test the
                  most material risk areas. Missing evidence is recorded as a limitation or open
                  question rather than treated as reassurance.{" "}
                </p>
              </div>
              <div className="journey">
                <div className="journey-step">
                  <b>01</b>
                  <span>Define purpose, entities, jurisdictions and materiality</span>
                </div>
                <div className="journey-step">
                  <b>02</b>
                  <span>Issue a tailored evidence request</span>
                </div>
                <div className="journey-step">
                  <b>03</b>
                  <span>Compare documents with operating reality</span>
                </div>
                <div className="journey-step">
                  <b>04</b>
                  <span>Test inconsistencies, gaps and remediation status</span>
                </div>
                <div className="journey-step">
                  <b>05</b>
                  <span>Deliver findings, conditions and priority actions</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">How we test the operating reality</div>
              <h2>Formal documentation is only one part of the picture.</h2>
              <p>
                {" "}
                The review connects licences, policies, contracts and governance documents with the
                way the business actually operates.{" "}
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01 / FORMAL POSITION</div>
                <h3>What does the documentation say?</h3>
                <p>
                  {" "}
                  Licences, registrations, policies, governance records, material agreements and
                  other evidence establish the stated position.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">02 / OPERATING MODEL</div>
                <h3>What does the business actually do?</h3>
                <p>
                  {" "}
                  We compare the formal position with actual products, customer journeys,
                  transaction flows, counterparties and operational dependencies.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">03 / DEPENDENCIES</div>
                <h3>What could interrupt continuity?</h3>
                <p>
                  {" "}
                  Banking, safeguarding, key providers, white-label structures, technology, data and
                  contractual dependencies are tested for material risk.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">04 / HISTORY</div>
                <h3>What unresolved issues remain relevant?</h3>
                <p>
                  {" "}
                  We consider known regulatory findings, remediation commitments, restrictions and
                  other matters that may affect the current position.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Deliverables</div>
              <h2>A report written for the decision that needs to be made.</h2>
              <p>
                {" "}
                The report distinguishes confirmed findings from unresolved questions, records scope
                and evidence limitations, and connects each material issue to an action.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="A">
                <h3>Executive conclusion</h3>
                <p>
                  Overall risk picture and the matters requiring management decision or escalation.
                </p>
                <ul className="micro-list">
                  <li>Material risks</li>
                  <li>Decision points</li>
                  <li>Open questions</li>
                  <li>Key dependencies</li>
                </ul>
              </article>
              <article className="problem-card" data-no="B">
                <h3>Risk-rated findings</h3>
                <p>
                  Critical, high, medium and lower-priority findings with evidence references and
                  limitations.
                </p>
                <ul className="micro-list">
                  <li>Risk level</li>
                  <li>Evidence</li>
                  <li>Impact</li>
                  <li>Required follow-up</li>
                </ul>
              </article>
              <article className="problem-card" data-no="C">
                <h3>Conditions to proceed</h3>
                <p>
                  Approvals, notifications, evidence, remediation or contractual protections that
                  should be addressed before reliance or implementation.
                </p>
                <ul className="micro-list">
                  <li>Required evidence</li>
                  <li>Approvals</li>
                  <li>Contractual protections</li>
                  <li>External input</li>
                </ul>
              </article>
              <article className="problem-card" data-no="D">
                <h3>Prioritised remediation</h3>
                <p>
                  A sequenced action plan for material weaknesses that should be addressed after the
                  review.
                </p>
                <ul className="micro-list">
                  <li>Priority actions</li>
                  <li>Ownership</li>
                  <li>Dependencies</li>
                  <li>Follow-up workstreams</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Common Questions</div>
              <h2>Legal &amp; Regulatory Due Diligence — FAQ</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Is this service only for acquisitions or investments?</h3>
                <p>
                  {" "}
                  No. It can be used for counterparties, strategic partnerships, critical providers,
                  white-label relationships, regulated service arrangements, market entry or other
                  situations where management needs an independent risk assessment.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>How is this different from an AML Gap Analysis?</h3>
                <p>
                  {" "}
                  Due diligence supports a defined decision or relationship. An AML Gap Analysis
                  primarily tests an organisation's own AML/CFT framework against identified
                  requirements and develops a remediation roadmap.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>How is this different from an AML Audit?</h3>
                <p>
                  {" "}
                  Due diligence may include AML/CFT as one risk area, but it does not replace a full
                  independent AML effectiveness review unless that deeper audit is separately
                  scoped.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>What happens if information is missing?</h3>
                <p>
                  {" "}
                  Missing evidence is not treated as proof that no issue exists. Material
                  information gaps are recorded as limitations, unresolved questions or conditions
                  requiring further evidence.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Can the review be limited to selected risk areas?</h3>
                <p>
                  {" "}
                  Yes. Materiality thresholds, entities, jurisdictions, document volumes and
                  reporting depth are defined before the engagement begins.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Does the report guarantee that no hidden risk exists?</h3>
                <p>
                  {" "}
                  No. Due diligence identifies and evaluates risk within the agreed scope and
                  available evidence. It does not guarantee regulatory approval, third-party consent
                  or the absence of undisclosed matters.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Related services</div>
              <h2>When due diligence identifies a deeper workstream.</h2>
            </div>
            <div className="related-grid">
              <a
                className="related-card"
                href="/services/legal-regulatory/regulatory-perimeter-assessment/"
              >
                {" "}
                <strong>Regulatory Perimeter Assessment</strong>{" "}
                <span>
                  Analyse whether the underlying activities are regulated and what permissions may
                  be required.
                </span>{" "}
              </a>
              <a
                className="related-card"
                href="/services/legal-regulatory/legal-opinions-regulatory-memoranda/"
              >
                {" "}
                <strong>Legal Opinions &amp; Regulatory Memoranda</strong>{" "}
                <span>
                  Document a specific legal or regulatory conclusion identified during the review.
                </span>{" "}
              </a>
              <a className="related-card" href="/services/legal-regulatory/commercial-contracts/">
                {" "}
                <strong>Commercial Contracts</strong>{" "}
                <span>
                  Address contractual weaknesses, continuity risks or responsibility-allocation
                  issues identified during the review.
                </span>{" "}
              </a>
              <a className="related-card" href="/services/aml-cft/">
                {" "}
                <strong>AML/CFT &amp; Financial Crime</strong>{" "}
                <span>
                  Move into a deeper AML/CFT audit, gap analysis or remediation workstream where
                  material concerns are identified.
                </span>{" "}
              </a>
            </div>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech requirements?{" "}
              <a
                href="/services/legal-regulatory/legal-regulatory-due-diligence/"
                rel="noopener"
                target="_blank"
              >
                See the EU/CZ-focused Legal &amp; Regulatory Due Diligence service →
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
              <a
                className="is-current"
                href="/services/legal-regulatory/legal-regulatory-due-diligence/"
              >
                Legal &amp; Regulatory Due Diligence
              </a>
              <a href="/services/legal-regulatory/regulatory-perimeter-assessment/">
                Regulatory Perimeter Assessment
              </a>
              <a href="/services/legal-regulatory/payments-financial-services-regulatory/">
                Payments &amp; Financial Services Regulatory
              </a>
              <a href="/services/legal-regulatory/ai-governance/">AI Governance</a>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="final-cta-strip">
            <div className="container final-cta-inner">
              <div>
                <div className="section-kicker">Need an independent risk picture?</div>
                <h2>Tell us what is being relied on, appointed or reviewed.</h2>
                <p>
                  {" "}
                  We will scope the engagement around the decision, material risk areas, evidence
                  set, specialist dependencies and the written deliverable you need.{" "}
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss Due Diligence
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
