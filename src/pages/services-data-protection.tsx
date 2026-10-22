import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/data-protection/",
  title: "Data Protection & Privacy Advisory | LEX ARTA",
  heading: "Data Protection & Privacy Advisory",
  description:
    "Data-protection and privacy advisory covering governance, risk, documentation and practical implementation.",
  heroImage: "/images/3009e22c30a18e92f39f.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">LEX ARTA · Data Protection &amp; Privacy</div>
                <h1>Data Protection &amp; Privacy Advisory</h1>
                <p className="hero-lead">
                  International data protection and privacy advisory for businesses operating across
                  multiple jurisdictions, products, vendors and data flows — from day-to-day privacy
                  decisions and governance to independent review, impact assessments, DPO support,
                  cross-border transfers, documentation and incident response.
                </p>
                <div aria-label="Key data protection capabilities" className="hero-points">
                  <span>Privacy audits</span>
                  <span>DPIA &amp; risk assessments</span>
                  <span>DPO &amp; privacy officer support</span>
                  <span>International data transfers</span>
                  <span>Privacy documentation</span>
                  <span>Breach response</span>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/contact/">
                    Discuss Data Protection &amp; Privacy
                  </a>
                  <a className="btn btn-secondary" href="/services/data-protection/#problems">
                    Explore Privacy Services
                  </a>
                </div>
              </div>
              <div
                aria-label="International data protection and privacy advisory visual"
                className="hero-visual"
              >
                <img
                  alt="International data protection and privacy advisory workspace"
                  loading="lazy"
                  src="/images/3009e22c30a18e92f39f.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="problem-section" id="problems">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Start with the privacy problem</div>
              <h2>Choose the privacy workstream that matches the problem.</h2>
              <p>
                {" "}
                Privacy work should start with the actual processing, jurisdictions, data flows and
                business objective — not with a generic GDPR checklist.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Not sure whether the privacy programme actually works?</h3>
                <p>
                  {" "}
                  Review governance, records, notices, contracts, data-subject processes, retention,
                  vendors and evidence against the applicable privacy framework.{" "}
                </p>
                <ul className="micro-list">
                  <li>Programme review</li>
                  <li>Control testing</li>
                  <li>Compliance gaps</li>
                  <li>Remediation priorities</li>
                </ul>
                <a
                  className="card-link"
                  href="/services/data-protection/privacy-audit-independent-review/"
                >
                  Privacy Audit &amp; Compliance Review →
                </a>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Launching high-risk processing, AI, monitoring or profiling?</h3>
                <p>
                  {" "}
                  Assess privacy risk before implementation and determine whether a DPIA, PIA or
                  another jurisdiction-specific assessment is required.{" "}
                </p>
                <ul className="micro-list">
                  <li>High-risk processing</li>
                  <li>AI &amp; automated decisions</li>
                  <li>Biometrics &amp; monitoring</li>
                  <li>Privacy by design</li>
                </ul>
                <a
                  className="card-link"
                  href="/services/data-protection/privacy-impact-risk-assessments/"
                >
                  DPIA &amp; Privacy Risk Assessments →
                </a>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Need ongoing privacy oversight without building a full internal function?</h3>
                <p>
                  {" "}
                  Add external DPO or privacy officer capacity for governance, monitoring, advice,
                  escalation and regulatory-facing privacy support where appropriate.{" "}
                </p>
                <ul className="micro-list">
                  <li>DPO support</li>
                  <li>Privacy officer support</li>
                  <li>Governance oversight</li>
                  <li>Ongoing monitoring</li>
                </ul>
                <a className="card-link" href="/services/data-protection/dpo-privacy-governance/">
                  External DPO &amp; Privacy Officer Support →
                </a>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Does personal data move across borders, entities or cloud providers?</h3>
                <p>
                  {" "}
                  Map the transfer chain, identify the source regime, assess available transfer
                  mechanisms and address cross-border privacy dependencies.{" "}
                </p>
                <ul className="micro-list">
                  <li>Transfer mapping</li>
                  <li>Transfer mechanisms</li>
                  <li>Transfer risk</li>
                  <li>Intra-group &amp; vendor flows</li>
                </ul>
                <a
                  className="card-link"
                  href="/services/data-protection/international-data-transfers/"
                >
                  International Data Transfers &amp; Cross-Border Privacy →
                </a>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Are contracts and privacy documents inconsistent with the real processing?</h3>
                <p>
                  {" "}
                  Align controller/processor roles, DPAs, privacy notices, data-sharing terms and
                  related documentation with the actual operating model.{" "}
                </p>
                <ul className="micro-list">
                  <li>DPAs</li>
                  <li>Privacy notices</li>
                  <li>Controller / processor roles</li>
                  <li>Data-sharing documentation</li>
                </ul>
                <a
                  className="card-link"
                  href="/services/data-protection/privacy-documentation-dpas/"
                >
                  Data Processing Agreements &amp; Privacy Documentation →
                </a>
              </article>
              <article className="problem-card" data-no="06">
                <h3>Has a privacy incident or suspected data breach occurred?</h3>
                <p>
                  {" "}
                  Assess the incident, notification obligations, affected jurisdictions, evidence
                  and communications before deadlines are missed.{" "}
                </p>
                <ul className="micro-list">
                  <li>Incident assessment</li>
                  <li>Notification analysis</li>
                  <li>Regulator &amp; individual communications</li>
                  <li>Breach documentation</li>
                </ul>
                <a
                  className="card-link"
                  href="/services/data-protection/data-breach-incident-response/"
                >
                  Data Breach &amp; Privacy Incident Response →
                </a>
              </article>
              <article className="problem-card" data-no="07">
                <h3>Operating across several privacy regimes?</h3>
                <p>
                  {" "}
                  Map which privacy laws apply by entity, market and processing activity, then build
                  a common governance baseline with controlled local variation.{" "}
                </p>
                <ul className="micro-list">
                  <li>Jurisdiction mapping</li>
                  <li>Entity scoping</li>
                  <li>Common baseline</li>
                  <li>Local requirements</li>
                </ul>
                <a className="card-link" href="/contact/">
                  Discuss Cross-Border Privacy →
                </a>
              </article>
            </div>
            <div aria-label="Additional privacy capabilities" className="included-strip">
              <strong>Also covered within Data Protection &amp; Privacy</strong>
              <div className="included-items">
                <span>Privacy governance</span>
                <span>Data mapping</span>
                <span>Records of processing</span>
                <span>Data subject rights</span>
                <span>Retention &amp; deletion</span>
                <span>Privacy by design</span>
                <span>Vendor privacy review</span>
                <span>Cookies &amp; tracking issues</span>
              </div>
            </div>
          </div>
        </section>
        <section className="lx-advisory-section paper" id="advisory-scope">
          <div className="lx-advisory-shell">
            <div className="lx-advisory-head">
              <p className="lx-advisory-kicker">Advisory Scope</p>
              <h2>Privacy advice for decisions that need legal and operational judgement.</h2>
              <p>
                International privacy questions usually arise inside a real business decision:
                launching a product, changing a data use, onboarding a vendor, expanding into a new
                market, responding to an individual or aligning several group entities. We identify
                the applicable regime, clarify the legal and governance issue, and translate it into
                a practical decision and control requirement.
              </p>
            </div>
            <div className="lx-advisory-grid">
              <article className="lx-advisory-card">
                <span>01</span>
                <h3>Regulatory Perimeter &amp; Applicability</h3>
                <p>
                  Determine which privacy and data-protection regimes apply to the relevant entity,
                  processing activity, individuals and data flow, and identify the obligations that
                  matter to the decision.
                </p>
              </article>
              <article className="lx-advisory-card">
                <span>02</span>
                <h3>Controller, Processor &amp; Data-Sharing Roles</h3>
                <p>
                  Analyse controller, processor, joint-controller and data-sharing relationships so
                  accountability, contracts and operational responsibilities follow the real
                  processing model.
                </p>
              </article>
              <article className="lx-advisory-card">
                <span>03</span>
                <h3>Lawful Processing &amp; Transparency</h3>
                <p>
                  Advise on processing grounds, purpose limitation, transparency and consent
                  questions where relevant, including changes to existing products, data uses or
                  customer journeys.
                </p>
              </article>
              <article className="lx-advisory-card">
                <span>04</span>
                <h3>Privacy by Design &amp; Product Support</h3>
                <p>
                  Embed privacy requirements into product, onboarding, monitoring, analytics, AI,
                  identity and other data-intensive workflows before implementation choices become
                  difficult to reverse.
                </p>
              </article>
              <article className="lx-advisory-card">
                <span>05</span>
                <h3>Vendor, Outsourcing &amp; Data Use</h3>
                <p>
                  Assess privacy responsibilities in SaaS, cloud, outsourcing and third-party
                  arrangements, including processor governance, data access, sub-processing and
                  change controls.
                </p>
              </article>
              <article className="lx-advisory-card">
                <span>06</span>
                <h3>Rights, Retention &amp; Operational Decisions</h3>
                <p>
                  Support difficult individual-rights requests, retention questions, deletion
                  constraints, complaints and exceptions where privacy duties interact with
                  contractual, regulatory or evidentiary requirements.
                </p>
              </article>
              <article className="lx-advisory-card">
                <span>07</span>
                <h3>Governance &amp; Management Advice</h3>
                <p>
                  Clarify ownership, escalation, policy interpretation, management reporting and
                  decision records so privacy advice becomes part of the operating model rather than
                  isolated legal commentary.
                </p>
              </article>
              <article className="lx-advisory-card">
                <span>08</span>
                <h3>Cross-Border Privacy Coordination</h3>
                <p>
                  Coordinate a common privacy baseline across jurisdictions while identifying local
                  legal differences, transfer issues and areas requiring jurisdiction-specific
                  input.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="distinction">
          <div className="container">
            <div className="distinction-wrap">
              <div>
                <div className="section-kicker">
                  International privacy without pretending one law applies everywhere
                </div>
                <h2>
                  Build one governance baseline — then account for the differences that matter.
                </h2>
                <p>
                  {" "}
                  GDPR and UK GDPR may be central in some engagements, but international businesses
                  can be subject to several privacy regimes at once. The correct structure starts
                  with entity, jurisdiction and processing scoping before controls and documents are
                  standardised.{" "}
                </p>
              </div>
              <div aria-label="Cross-border privacy programme route" className="journey">
                <div className="journey-step">
                  <b>01</b>
                  <span>Identify entities, markets and processing activities</span>
                </div>
                <div className="journey-step">
                  <b>02</b>
                  <span>Map the applicable privacy regimes</span>
                </div>
                <div className="journey-step">
                  <b>03</b>
                  <span>Build the common governance baseline</span>
                </div>
                <div className="journey-step">
                  <b>04</b>
                  <span>Add jurisdiction-specific controls and documents</span>
                </div>
                <div className="journey-step">
                  <b>05</b>
                  <span>Maintain evidence, monitoring and change control</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">International privacy scope</div>
              <h2>EU, UK and international privacy frameworks.</h2>
              <p>
                {" "}
                Engagements are scoped around the laws that actually apply to the relevant entity
                and processing activity. Where jurisdiction-specific local-law advice or regulated
                professional input is required, it is coordinated separately.{" "}
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01 / EU &amp; EEA</div>
                <h3>GDPR &amp; European privacy compliance</h3>
                <p>
                  {" "}
                  GDPR governance, accountability, data-subject rights, DPIAs, processor
                  arrangements, transfers, privacy-by-design and regulator-facing readiness where
                  the EU framework applies.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">02 / UNITED KINGDOM</div>
                <h3>UK privacy framework</h3>
                <p>
                  {" "}
                  UK GDPR and related privacy requirements, including governance, international
                  transfers, controller/processor arrangements, accountability and ongoing privacy
                  programme support.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">03 / INTERNATIONAL MARKETS</div>
                <h3>Jurisdiction-specific privacy requirements</h3>
                <p>
                  {" "}
                  Cross-border programmes can also be structured around applicable privacy
                  frameworks in markets such as Switzerland, Singapore, Canada, the UAE and other
                  jurisdictions, with local input where required.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">04 / MULTI-ENTITY GROUPS</div>
                <h3>Common governance with local variation</h3>
                <p>
                  {" "}
                  Design group-wide ownership, policies, escalation and evidence while preserving
                  the local controls, documents and transfer mechanisms required in individual
                  markets.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">How we structure privacy work</div>
              <h2>From data flows to operational controls.</h2>
              <p>
                {" "}
                The objective is a privacy framework that reflects how the business actually
                collects, uses, shares, retains and transfers personal data.{" "}
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01 / SCOPE</div>
                <h3>Establish the privacy perimeter.</h3>
                <p>
                  {" "}
                  Identify entities, jurisdictions, controller/processor roles, affected individuals
                  and the processing activities that need to be addressed.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">02 / MAP</div>
                <h3>Understand the data flows.</h3>
                <p>
                  {" "}
                  Map data categories, systems, vendors, recipients, transfers, retention and the
                  operational teams responsible for the processing.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">03 / ASSESS</div>
                <h3>Identify the material privacy risks.</h3>
                <p>
                  {" "}
                  Compare the current framework and actual operations against applicable
                  requirements and prioritise material gaps, dependencies and high-risk
                  processing.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">04 / IMPLEMENT</div>
                <h3>Translate requirements into controls.</h3>
                <p>
                  {" "}
                  Build or remediate governance, documents, assessments, workflows, vendor controls,
                  transfer arrangements and evidence within the agreed scope.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Common Questions</div>
              <h2>Data Protection &amp; Privacy Advisory — FAQ</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Do you only advise on GDPR and UK GDPR?</h3>
                <p>
                  {" "}
                  No. GDPR and UK GDPR are important where they apply, but international engagements
                  can also be scoped around other applicable privacy regimes. The first step is
                  determining which laws apply to each entity and processing activity.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>How do you manage privacy requirements across several countries?</h3>
                <p>
                  {" "}
                  We normally build a common governance baseline, then identify the
                  jurisdiction-specific requirements that need local controls, notices, transfer
                  mechanisms, retention rules or escalation.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Is a DPIA always the right privacy risk assessment?</h3>
                <p>
                  {" "}
                  No. DPIA is a specific concept under GDPR and related frameworks. Other
                  jurisdictions may use different impact-assessment, accountability or
                  risk-management requirements. The applicable standard is identified before the
                  assessment is scoped.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Can a DPO or privacy function be outsourced?</h3>
                <p>
                  {" "}
                  In some regimes and organisational structures, yes. The correct model depends on
                  the applicable law, independence requirements, conflicts and which
                  responsibilities must remain with management.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>How are international data transfers assessed?</h3>
                <p>
                  {" "}
                  The analysis begins with the source regime, exporter, importer, destination,
                  processing chain and roles. The appropriate transfer mechanism and any
                  supplementary assessment then follow from that mapping.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Can you support privacy incidents across several jurisdictions?</h3>
                <p>
                  {" "}
                  Yes. The incident can be assessed jurisdiction by jurisdiction so that
                  notification thresholds, deadlines, communications and documentation are not
                  incorrectly treated as identical across markets.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Related services</div>
              <h2>When privacy connects with another regulatory workstream.</h2>
            </div>
            <div className="related-grid">
              <a className="related-card" href="/services/legal-regulatory/ai-governance/">
                {" "}
                <strong>AI Act &amp; International AI Governance</strong>{" "}
                <span>
                  Align privacy, profiling, automated decisions and AI governance where the same
                  system sits across several regulatory frameworks.
                </span>{" "}
              </a>
              <a className="related-card" href="/services/legal-regulatory/commercial-contracts/">
                {" "}
                <strong>Commercial Contracts</strong>{" "}
                <span>
                  Coordinate wider service, SaaS, outsourcing and technology agreements with
                  privacy-specific contractual requirements.
                </span>{" "}
              </a>
              <a className="related-card" href="/services/aml-cft/">
                {" "}
                <strong>AML/CFT &amp; Financial Crime</strong>{" "}
                <span>
                  Address the interaction between privacy, identity data, KYC, monitoring, retention
                  and financial-crime obligations.
                </span>{" "}
              </a>
              <a className="related-card" href="/services/legal-regulatory/">
                {" "}
                <strong>Legal &amp; Regulatory Advisory</strong>{" "}
                <span>
                  Coordinate wider regulatory, governance, due-diligence and cross-border questions
                  that extend beyond the privacy workstream.
                </span>{" "}
              </a>
            </div>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech data-protection requirements?{" "}
              <a href="/services/data-protection/" rel="noopener" target="_blank">
                See the EU/CZ-focused LEX ARTA data-protection overview →
              </a>
            </p>
          </div>
        </div>
        <section className="lx-privacy-menu">
          <div className="lx-privacy-menu-shell">
            <p className="lx-privacy-kicker">Data Protection &amp; Privacy</p>
            <h2>Explore the data protection service block.</h2>
            <div className="lx-privacy-links">
              <a aria-current="page" className="is-current" href="/services/data-protection/">
                Data Protection &amp; Privacy Advisory
              </a>
              <a href="/services/data-protection/privacy-audit-independent-review/">
                Privacy Audit &amp; Independent Review
              </a>
              <a href="/services/data-protection/privacy-impact-risk-assessments/">
                Privacy Impact &amp; Risk Assessments
              </a>
              <a href="/services/data-protection/dpo-privacy-governance/">
                DPO &amp; Privacy Governance
              </a>
              <a href="/services/data-protection/privacy-documentation-dpas/">
                Privacy Documentation &amp; DPAs
              </a>
              <a href="/services/data-protection/international-data-transfers/">
                International Data Transfers
              </a>
              <a href="/services/data-protection/data-breach-incident-response/">
                Data Breach &amp; Privacy Incident Response
              </a>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="final-cta-strip">
            <div className="container final-cta-inner">
              <div>
                <div className="section-kicker">
                  Need to strengthen a privacy programme or solve a cross-border issue?
                </div>
                <h2>Start with the entities, jurisdictions, processing and business objective.</h2>
                <p>
                  {" "}
                  We will identify the appropriate privacy workstream, define the scope and separate
                  any jurisdiction-specific legal or specialist input required for the
                  engagement.{" "}
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss Data Protection &amp; Privacy
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
