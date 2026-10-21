import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/data-protection/international-data-transfers/",
  title: "International Data Transfers | LEX ARTA",
  heading: "International Data Transfers",
  description:
    "International data-transfer advisory on transfer mechanisms, documentation and practical cross-border safeguards.",
  heroImage: "/images/af30049a9fa172d14665.webp",
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
                  LEX ARTA · International Data Transfers &amp; Cross-Border Privacy
                </div>
                <h1>International Data Transfers</h1>
                <p className="hero-lead">
                  {" "}
                  Structure international personal-data flows across group entities, cloud
                  providers, vendors and markets using the transfer rules that actually apply to the
                  source jurisdiction and processing chain.{" "}
                </p>
                <div aria-label="International data transfer capabilities" className="hero-points">
                  <span>Transfer mapping</span>
                  <span>SCCs &amp; UK mechanisms</span>
                  <span>Transfer risk assessments</span>
                  <span>Adequacy &amp; exemptions</span>
                  <span>Intra-group transfers</span>
                  <span>Ongoing monitoring</span>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/contact/">
                    Discuss Your Data Flows
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="/services/data-protection/international-data-transfers/#problems"
                  >
                    Where Transfers Go Wrong
                  </a>
                </div>
              </div>
              <div
                aria-label="International data transfers and cross-border privacy visual"
                className="hero-visual"
              >
                <img
                  alt="International data transfer strategy and cross-border privacy advisory"
                  loading="lazy"
                  src="/images/af30049a9fa172d14665.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="problem-section" id="problems">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Start with the actual transfer chain</div>
              <h2>Where does personal data move — and which law governs that movement?</h2>
              <p>
                {" "}
                Cross-border compliance starts with the source regime, exporter, importer,
                recipient, access location and processing chain. A contract cannot fix a transfer
                that has not first been mapped correctly.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Not sure which data flows are legally restricted transfers?</h3>
                <p>
                  {" "}
                  Isolate the cross-border flows that matter and determine whether the applicable
                  source regime treats them as regulated international transfers.{" "}
                </p>
                <ul className="micro-list">
                  <li>Exporter / importer mapping</li>
                  <li>Remote access</li>
                  <li>Cloud locations</li>
                  <li>Source-regime analysis</li>
                </ul>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Need SCCs, an IDTA, Addendum or another safeguard?</h3>
                <p>
                  {" "}
                  Identify the transfer mechanism appropriate to the applicable regime, roles and
                  destination instead of applying one standard contract across every flow.{" "}
                </p>
                <ul className="micro-list">
                  <li>EU SCCs</li>
                  <li>UK IDTA / Addendum</li>
                  <li>Binding rules</li>
                  <li>Other safeguards</li>
                </ul>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Is a transfer risk or impact assessment required?</h3>
                <p>
                  {" "}
                  Assess the legal environment, access risk, contractual protections and
                  supplementary measures relevant to the selected transfer mechanism.{" "}
                </p>
                <ul className="micro-list">
                  <li>TIA / TRA</li>
                  <li>Destination analysis</li>
                  <li>Access risk</li>
                  <li>Supplementary measures</li>
                </ul>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Using cloud, SaaS or global support teams?</h3>
                <p>
                  {" "}
                  Trace hosting, support, sub-processors and remote-access locations so hidden or
                  onward transfers are not missed.{" "}
                </p>
                <ul className="micro-list">
                  <li>Cloud hosting</li>
                  <li>Support access</li>
                  <li>Sub-processors</li>
                  <li>Onward transfers</li>
                </ul>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Moving data within an international group?</h3>
                <p>
                  {" "}
                  Structure intra-group data flows with the right allocation of roles, safeguards,
                  transfer mechanisms and accountability across entities.{" "}
                </p>
                <ul className="micro-list">
                  <li>Group transfers</li>
                  <li>Shared services</li>
                  <li>Role allocation</li>
                  <li>Common governance</li>
                </ul>
              </article>
              <article className="problem-card" data-no="06">
                <h3>Existing transfer documents no longer match reality?</h3>
                <p>
                  {" "}
                  Reconcile old SCCs, schedules, TIAs, vendor lists and transfer inventories with
                  the systems, providers and jurisdictions actually used today.{" "}
                </p>
                <ul className="micro-list">
                  <li>Document refresh</li>
                  <li>Vendor changes</li>
                  <li>Transfer inventory</li>
                  <li>Monitoring updates</li>
                </ul>
              </article>
            </div>
            <div className="included-strip">
              <strong>Typical transfer questions</strong>
              <div className="included-items">
                <span>Is there a restricted transfer?</span>
                <span>Which source law applies?</span>
                <span>Which mechanism fits?</span>
                <span>Is adequacy available?</span>
                <span>Is a TIA / TRA needed?</span>
                <span>What supplementary measures?</span>
                <span>Who monitors changes?</span>
              </div>
            </div>
          </div>
        </section>
        <section className="distinction">
          <div className="container">
            <div className="distinction-wrap">
              <div>
                <div className="section-kicker">
                  Transfer compliance is not only an SCC exercise
                </div>
                <h2>
                  The correct mechanism depends on where the data comes from, where it goes and
                  which regime governs the transfer.
                </h2>
                <p>
                  {" "}
                  EU, UK and other privacy regimes may use different transfer tests, safeguards and
                  terminology. The engagement therefore starts with the legal and factual transfer
                  perimeter before contracts or assessments are selected.{" "}
                </p>
              </div>
              <div aria-label="International data transfer route" className="journey">
                <div className="journey-step">
                  <b>01</b>
                  <span>Map exporters, importers, recipients and access locations</span>
                </div>
                <div className="journey-step">
                  <b>02</b>
                  <span>Determine the source regime and transfer rule</span>
                </div>
                <div className="journey-step">
                  <b>03</b>
                  <span>Select the appropriate transfer mechanism</span>
                </div>
                <div className="journey-step">
                  <b>04</b>
                  <span>Assess transfer risk and supplementary measures</span>
                </div>
                <div className="journey-step">
                  <b>05</b>
                  <span>Document, implement and monitor the transfer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">EU / EEA transfers</div>
              <h2>Choose the transfer route that fits the actual flow.</h2>
              <p>
                {" "}
                Where GDPR transfer rules apply, the analysis may involve adequacy, Standard
                Contractual Clauses, Binding Corporate Rules or another permitted transfer route,
                depending on the facts.{" "}
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01 / ADEQUACY</div>
                <h3>Can the transfer rely on an adequacy decision?</h3>
                <p>
                  {" "}
                  Confirm whether the destination and recipient fall within the scope of an
                  applicable adequacy framework before moving to contractual safeguards.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">02 / SCCs</div>
                <h3>Use the correct SCC module and annexes.</h3>
                <p>
                  {" "}
                  Match controller / processor roles, transfer direction, processing description,
                  security measures and sub-processing arrangements to the actual flow.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">03 / TRANSFER ASSESSMENT</div>
                <h3>Assess whether the safeguard works in practice.</h3>
                <p>
                  {" "}
                  Review destination-country risk, importer circumstances, access exposure and
                  supplementary measures where the selected transfer tool requires additional
                  analysis.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">04 / OTHER ROUTES</div>
                <h3>Consider BCRs and other available mechanisms.</h3>
                <p>
                  {" "}
                  For group or specialised transfer models, assess whether Binding Corporate Rules
                  or another permitted mechanism is more appropriate than transaction-by-transaction
                  contracting.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">UK international transfers</div>
              <h2>Apply the UK transfer framework separately.</h2>
              <p>
                {" "}
                UK-restricted transfers should be assessed under the UK framework rather than being
                treated as automatically covered by EU transfer documentation.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="UK1">
                <h3>UK IDTA &amp; Addendum</h3>
                <p>
                  {" "}
                  Determine whether the UK International Data Transfer Agreement or UK Addendum is
                  the appropriate contractual safeguard for the relevant transfer.{" "}
                </p>
              </article>
              <article className="problem-card" data-no="UK2">
                <h3>UK transfer risk assessment</h3>
                <p>
                  {" "}
                  Assess whether the applicable UK safeguard provides the required protection in the
                  circumstances of the transfer and document the analysis.{" "}
                </p>
              </article>
              <article className="problem-card" data-no="UK3">
                <h3>UK adequacy &amp; exceptions</h3>
                <p>
                  {" "}
                  Test whether the flow can rely on an applicable adequacy route or a narrowly
                  available exception before adding unnecessary contractual mechanisms.{" "}
                </p>
              </article>
              <article className="problem-card" data-no="UK4">
                <h3>EU / UK parallel flows</h3>
                <p>
                  {" "}
                  Separate the EU and UK legal routes where the same provider receives personal data
                  from both EEA and UK entities.{" "}
                </p>
              </article>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">International privacy regimes</div>
              <h2>Cross-border transfer rules differ outside Europe too.</h2>
              <p>
                {" "}
                Some jurisdictions use contractual clauses, localisation rules, consent, regulator
                approval, adequacy-style concepts or other transfer conditions. The applicable route
                must be assessed under the relevant local framework.{" "}
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01 / SOURCE LAW</div>
                <h3>Identify which country's transfer rule is triggered.</h3>
                <p>
                  {" "}
                  Determine which entity exports the data and which privacy law governs that export
                  before selecting a transfer mechanism.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">02 / LOCAL MECHANISM</div>
                <h3>Use the required local transfer route.</h3>
                <p>
                  {" "}
                  Assess contractual, adequacy, consent, localisation, approval or other mechanisms
                  available under the relevant jurisdiction.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">03 / GROUP ALIGNMENT</div>
                <h3>Coordinate common transfer governance.</h3>
                <p>
                  {" "}
                  Use a group-wide transfer inventory and governance model while preserving the
                  specific legal mechanism required for each source jurisdiction.{" "}
                </p>
              </div>
              <div className="workstream">
                <div className="n">04 / LOCAL INPUT</div>
                <h3>Coordinate jurisdiction-specific advice where needed.</h3>
                <p>
                  {" "}
                  Where formal local-law advice, regulator approval or specialist local
                  interpretation is required, appropriately qualified local professionals are
                  involved.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Transfer governance</div>
              <h2>Keep transfer compliance current after the documents are signed.</h2>
              <p>
                {" "}
                Transfer risk changes when vendors, hosting locations, sub-processors, legal
                frameworks or access patterns change. Governance therefore needs ownership,
                monitoring and refresh triggers.{" "}
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="A">
                <h3>Transfer inventory</h3>
                <p>
                  Maintain a practical record of source entity, destination, recipient, purpose,
                  mechanism, assessment and review status.
                </p>
              </article>
              <article className="problem-card" data-no="B">
                <h3>Vendor &amp; sub-processor change controls</h3>
                <p>
                  Define when new providers, locations, support teams or sub-processors trigger a
                  transfer reassessment.
                </p>
              </article>
              <article className="problem-card" data-no="C">
                <h3>Assessment refresh</h3>
                <p>
                  Set review triggers for changes in law, regulator guidance, destination risk,
                  technology or the factual transfer chain.
                </p>
              </article>
              <article className="problem-card" data-no="D">
                <h3>Ownership &amp; evidence</h3>
                <p>
                  Assign responsibility for monitoring, contractual updates, approval and evidence
                  so transfer compliance does not become a one-off legal exercise.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Common Questions</div>
              <h2>International Data Transfers — FAQ</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Do we always need SCCs for an international transfer?</h3>
                <p>
                  {" "}
                  No. The appropriate route depends on the source regime, destination, recipient and
                  available transfer mechanism. Adequacy or another permitted mechanism may apply
                  instead.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>What is the difference between a DPA and a transfer mechanism?</h3>
                <p>
                  {" "}
                  A DPA addresses controller / processor responsibilities and processing
                  obligations. A transfer mechanism addresses the legal basis for transferring
                  personal data across a restricted international boundary. In some arrangements
                  both are needed.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Do remote support teams create international transfers?</h3>
                <p>
                  {" "}
                  Potentially. Remote access from another country can be relevant to transfer
                  analysis even where the primary hosting location has not changed.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Can one transfer assessment cover several vendors or countries?</h3>
                <p>
                  {" "}
                  Sometimes a common methodology can be used, but the factual and legal analysis
                  should remain specific enough to the recipient, destination, processing and
                  transfer mechanism to support the conclusion.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Can EU and UK transfers use the same documents?</h3>
                <p>
                  {" "}
                  Not automatically. EU and UK restricted transfers have separate legal frameworks
                  and transfer tools, although coordinated documentation may be possible where
                  structured correctly.{" "}
                </p>
              </div>
              <div className="faq-item">
                <h3>Do transfer assessments need to be reviewed?</h3>
                <p>
                  {" "}
                  Yes where relevant facts, law, vendors, locations, safeguards or risk conditions
                  change materially. Ongoing monitoring should be part of the transfer-governance
                  model.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Related services</div>
              <h2>When the transfer issue connects with another privacy workstream.</h2>
            </div>
            <div className="related-grid">
              <a
                className="related-card"
                href="/services/data-protection/privacy-documentation-dpas/"
              >
                {" "}
                <strong>Data Processing Agreements &amp; Privacy Documentation</strong>{" "}
                <span>
                  Align processor terms, data-sharing arrangements and transfer schedules with the
                  actual processing and transfer chain.
                </span>{" "}
              </a>
              <a
                className="related-card"
                href="/services/data-protection/privacy-audit-independent-review/"
              >
                {" "}
                <strong>Privacy Audit &amp; Compliance Review</strong>{" "}
                <span>
                  Test whether transfer inventories, safeguards, assessments and monitoring are
                  operating across the wider privacy programme.
                </span>{" "}
              </a>
              <a
                className="related-card"
                href="/services/data-protection/privacy-impact-risk-assessments/"
              >
                {" "}
                <strong>DPIA &amp; Privacy Risk Assessments</strong>{" "}
                <span>
                  Address broader risks to individuals where international access or disclosure
                  forms part of higher-risk processing.
                </span>{" "}
              </a>
              <a className="related-card" href="/services/legal-regulatory/commercial-contracts/">
                {" "}
                <strong>Commercial Contracts</strong>{" "}
                <span>
                  Coordinate transfer obligations with SaaS, outsourcing, technology and other
                  commercial agreements.
                </span>{" "}
              </a>
            </div>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech data-protection requirements?{" "}
              <a
                href="/services/data-protection/international-data-transfers/"
                rel="noopener"
                target="_blank"
              >
                See the EU/CZ-focused LEX ARTA international data-transfer service →
              </a>
            </p>
          </div>
        </div>
        <section className="lx-privacy-menu">
          <div className="lx-privacy-menu-shell">
            <p className="lx-privacy-kicker">Data Protection &amp; Privacy</p>
            <h2>Explore the data protection service block.</h2>
            <div className="lx-privacy-links">
              <a href="/services/data-protection/">Data Protection &amp; Privacy Advisory</a>
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
              <a
                aria-current="page"
                className="is-current"
                href="/services/data-protection/international-data-transfers/"
              >
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
                <div className="section-kicker">Need to regularise international data flows?</div>
                <h2>
                  Start with the source entity, destination, recipient and actual transfer chain.
                </h2>
                <p>
                  {" "}
                  We will identify the applicable transfer framework, appropriate mechanism,
                  required risk assessment and the documentation and governance needed to keep the
                  flow compliant.{" "}
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss International Data Transfers
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
