import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/licensing/international/mauritius/",
  title: "Mauritius VASP Licensing | FSC & VAITOS | LEX ARTA",
  heading: "Mauritius VASP Licensing",
  description:
    "Mauritius VASP licensing advisory on service classification, regulatory route, evidence and local-provider dependencies.",
  heroImage: "/images/7c8c2cf9510fc3fe1a37.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Lex Arta · Mauritius VASP Licensing</div>
                <h1>Mauritius VASP Licensing</h1>
                <p className="hero-lead">
                  Assess the Mauritius VASP class and regulatory perimeter before committing to a
                  local provider or application workstream. We map the business model, identify the
                  relevant class or classes, and prepare a defined compliance and evidence
                  workstream.
                </p>
                <div aria-label="Key due diligence areas" className="hero-points">
                  <span>VAITOS Act</span>
                  <span>FSC Mauritius</span>
                  <span>Class selection</span>
                  <span>AML/CFT framework</span>
                  <span>Global business structure</span>
                  <span>Market-entry readiness</span>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/contact/">
                    Discuss Mauritius Licensing
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="/services/licensing/international/mauritius/#problems"
                  >
                    See the Scope
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="Mauritius VASP licensing advisory for digital-asset businesses"
                  loading="lazy"
                  src="/images/7c8c2cf9510fc3fe1a37.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="problem-section" id="problems">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Start with the legal perimeter</div>
              <h2>
                In Mauritius, the critical question is not simply whether the business is “crypto” —
                it is which VASP class, structure and operating model actually fit the business.
              </h2>
              <p>
                Mauritius offers a dedicated statutory regime for virtual-asset service providers
                and initial token offerings under the Virtual Asset and Initial Token Offering
                Services Act 2021. The FSC supervises VASPs and ITO issuers in or from Mauritius. A
                credible Mauritius project therefore starts with documented class selection,
                activity mapping and launch assumptions before local establishment or application
                work begins.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Which VASP class fits the model?</h3>
                <p>
                  We identify whether the business points to Class M, O, R, I or S, whether more
                  than one class is needed, and whether a separate ITO workstream should be
                  ring-fenced.
                </p>
                <ul className="micro-list">
                  <li>Class selection</li>
                  <li>Hybrid models</li>
                  <li>ITO overlap</li>
                  <li>Perimeter mapping</li>
                </ul>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Does the structure work in or from Mauritius?</h3>
                <p>
                  We review where management, staffing, onboarding, contracting, custody, marketing
                  and operations will sit so that the Mauritian application story matches the real
                  model.
                </p>
                <ul className="micro-list">
                  <li>Operating footprint</li>
                  <li>Management</li>
                  <li>Substance</li>
                  <li>Cross-border model</li>
                </ul>
              </article>
              <article className="problem-card" data-no="03">
                <h3>How are client assets and keys controlled?</h3>
                <p>
                  Custody, wallet administration and marketplace activity raise different risk and
                  control expectations. We map fiat and virtual-asset flows before the file is
                  built.
                </p>
                <ul className="micro-list">
                  <li>Asset flows</li>
                  <li>Segregation logic</li>
                  <li>Wallet control</li>
                  <li>Client protections</li>
                </ul>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Are governance and key persons application-ready?</h3>
                <p>
                  We test whether the proposed board, local presence, compliance function and
                  staffing plan are mature enough for the selected class and operating model.
                </p>
                <ul className="micro-list">
                  <li>Board</li>
                  <li>Key officers</li>
                  <li>Compliance</li>
                  <li>Staffing plan</li>
                </ul>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Is the AML/CFT framework credible?</h3>
                <p>
                  We design the AML/CFT framework around customer journeys, sanctions exposure,
                  monitoring, reporting lines and the specific risks created by the virtual-asset
                  business model.
                </p>
                <ul className="micro-list">
                  <li>CDD / EDD</li>
                  <li>Risk assessment</li>
                  <li>Monitoring</li>
                  <li>MLRO setup</li>
                </ul>
              </article>
              <article className="problem-card" data-no="06">
                <h3>Does the technology and outsourcing model hold up?</h3>
                <p>
                  The selected FSC licensing criteria determine the documents and evidence required
                  for the application. We prepare the agreed compliance and evidence workstream.
                </p>
                <ul className="micro-list">
                  <li>Platform model</li>
                  <li>Third-party DD</li>
                  <li>Cybersecurity</li>
                  <li>BCP / DRP</li>
                </ul>
              </article>
              <article className="problem-card" data-no="07">
                <h3>Can the application story be supported by evidence?</h3>
                <p>
                  The business-model narrative, governance evidence, compliance documentation and
                  application materials need to align. We help organise the advisory workstream
                  around those dependencies.
                </p>
                <ul className="micro-list">
                  <li>Business-model narrative</li>
                  <li>Governance evidence</li>
                  <li>Compliance documentation</li>
                  <li>Application dependencies</li>
                </ul>
              </article>
              <article className="problem-card" data-no="08">
                <h3>Will banks and counterparties understand the structure?</h3>
                <p>
                  Regulatory preparation is distinct from any independent bank, payment-provider or
                  other third-party onboarding decision.
                </p>
                <ul className="micro-list">
                  <li>Banking pack</li>
                  <li>Counterparties</li>
                  <li>Flow-of-funds</li>
                  <li>Launch file</li>
                </ul>
              </article>
            </div>
            <div className="included-strip">
              <strong>Typical Mauritius workstreams</strong>
              <div className="included-items">
                <span>Class selection</span>
                <span>VAITOS perimeter</span>
                <span>FSC application materials</span>
                <span>Local counsel coordination</span>
                <span>Business-model narrative</span>
                <span>Governance framework</span>
                <span>AML/CFT controls</span>
                <span>Evidence mapping</span>
                <span>Third-party readiness</span>
                <span>Implementation plan</span>
              </div>
            </div>
          </div>
        </section>
        <section className="distinction">
          <div className="container">
            <div className="distinction-wrap">
              <div>
                <div className="section-kicker">Mauritius regulatory context</div>
                <h2>
                  A strong Mauritius route starts with choosing the right licence class — not with
                  filing blindly.
                </h2>
                <p>
                  The FSC Codified List identifies VASP licences under the Virtual Asset and Initial
                  Token Offering Services Act 2021: Class M (Virtual Asset Broker-Dealer), Class O
                  (Virtual Asset Wallet Services), Class R (Virtual Asset Custodian), Class I
                  (Virtual Asset Advisory Services) and Class S (Virtual Asset Market Place). The
                  same list separately identifies an issuer-of-initial-token-offerings category. The
                  class selection and evidence set must be assessed against the actual activity.
                </p>
              </div>
              <div className="journey">
                <div className="journey-step">
                  <b>01</b>
                  <span>Map the products, customers, jurisdictions and flow of funds</span>
                </div>
                <div className="journey-step">
                  <b>02</b>
                  <span>Select the Mauritius licence class and activity scope</span>
                </div>
                <div className="journey-step">
                  <b>03</b>
                  <span>Define the evidence and local-law workstream</span>
                </div>
                <div className="journey-step">
                  <b>04</b>
                  <span>Prepare the licensing file and compliance framework</span>
                </div>
                <div className="journey-step">
                  <b>05</b>
                  <span>Coordinate the agreed next steps with the responsible providers</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Mauritius launch framework</div>
              <h2>
                One project connecting class selection, licensing strategy and operational
                credibility.
              </h2>
              <p>
                A Mauritius regulatory project is strongest when the class selection, activity
                analysis, AML/CFT evidence and local-law workstream are consistent. The engagement
                confirms the precise deliverables and responsible providers.
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01 / LICENSING STRATEGY</div>
                <h3>Choose the right Mauritius class before filing begins.</h3>
                <p>
                  We map the service model against the VAITOS framework and identify which VASP
                  class or combination of classes is implicated, whether an ITO workstream exists,
                  and what evidence is needed to support the application.
                </p>
              </div>
              <div className="workstream">
                <div className="n">02 / APPLICATION &amp; ENTITY BUILD</div>
                <h3>Build the application platform around the intended activity.</h3>
                <p>
                  We prepare a defined instruction for the relevant Mauritian-qualified provider and
                  coordinate the agreed evidence and document workstream.
                </p>
              </div>
              <div className="workstream">
                <div className="n">03 / COMPLIANCE &amp; CONTROLS</div>
                <h3>Turn the licensing route into a defensible regulator-facing file.</h3>
                <p>
                  We prepare the agreed business-model narrative, AML/CFT framework, governance
                  materials, risk documentation and supporting controls.
                </p>
              </div>
              <div className="workstream">
                <div className="n">04 / MARKET ENTRY &amp; OPERATIONAL READINESS</div>
                <h3>Prepare the authorised business for launch.</h3>
                <p>
                  We organise the corporate, regulatory and compliance pack used for bank,
                  payment-provider, counterpart and operational onboarding and coordinate follow-up
                  across the launch workstream.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Service packages</div>
              <h2>Choose the scope that matches the stage of the Mauritius project.</h2>
              <p>
                The engagement can start with a Mauritius VASP Readiness Assessment and extend
                through licensing preparation, compliance implementation and full market-entry
                coordination. Scope is confirmed against the actual business model before execution
                begins.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="A">
                <h3>Mauritius VASP Readiness Assessment</h3>
                <p>
                  For founders and existing businesses that want to test whether Mauritius is the
                  right route for the proposed model before committing to local establishment, local
                  providers, compliance build-out or full application work.
                </p>
                <ul className="micro-list">
                  <li>Business-model review</li>
                  <li>VASP class comparison</li>
                  <li>Activity mapping</li>
                  <li>Regulatory route review</li>
                  <li>Flow-of-funds analysis</li>
                  <li>Governance and evidence dependencies</li>
                  <li>Third-party readiness review</li>
                  <li>Key gaps, risks &amp; recommended next steps</li>
                </ul>
              </article>
              <article className="problem-card" data-no="B">
                <h3>FSC Licensing &amp; AML/Compliance Setup</h3>
                <p>
                  For founders and groups that are ready to move from class selection into licensing
                  preparation, compliance build-out and coordinated application work.
                </p>
                <ul className="micro-list">
                  <li>Mauritius VASP Readiness Assessment scope</li>
                  <li>Local advisory requirements map</li>
                  <li>Supporting documentation</li>
                  <li>Business-model narrative</li>
                  <li>Governance framework</li>
                  <li>AML/CFT framework</li>
                  <li>Risk, policy &amp; control suite</li>
                  <li>Regulator-facing coordination</li>
                </ul>
              </article>
              <article className="problem-card" data-no="C">
                <h3>Full Market Entry &amp; Operational Readiness</h3>
                <p>
                  For a project that needs the Mauritius route taken through licensing preparation,
                  launch planning and coordinated operational readiness as one integrated
                  market-entry project.
                </p>
                <ul className="micro-list">
                  <li>FSC Licensing &amp; AML/Compliance scope</li>
                  <li>Business-model and compliance readiness review</li>
                  <li>Operational-readiness coordination</li>
                  <li>Technology / outsourcing dependencies</li>
                  <li>Local provider coordination</li>
                  <li>Implementation roadmap</li>
                  <li>Launch timetable management</li>
                  <li>Post-authorisation compliance calendar</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Coordinated Mauritian execution</div>
              <h2>
                LEX ARTA leads the regulatory project and coordinates the Mauritian counsel and
                providers involved in the local workstreams.
              </h2>
              <p>
                Where a workstream requires Mauritian counsel, a management company, an
                incorporation provider, a compliance specialist, an auditor, a technology assessor
                or another local professional, we coordinate with the appropriately qualified local
                corporate or professional provider while leading the regulatory analysis, evidence
                set, compliance workstream and overall timetable.
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">MAURITIAN COUNSEL / ENTITY PROVIDERS</div>
                <h3>Local requirements and advisory dependencies.</h3>
                <p>
                  The relevant Mauritian provider handles incorporation, local filings,
                  jurisdiction-specific setup steps and other execution work falling within its
                  professional mandate.
                </p>
              </div>
              <div className="workstream">
                <div className="n">REGULATORY &amp; LOCAL SPECIALISTS</div>
                <h3>Jurisdiction-specific input where the route requires it.</h3>
                <p>
                  Where the project requires specialised Mauritian legal, regulatory, audit,
                  technology or other local input, we prepare the factual and regulatory instruction
                  pack and coordinate the work with the appropriate local specialist.
                </p>
              </div>
              <div className="workstream">
                <div className="n">APPLICATION &amp; GOVERNANCE FILE</div>
                <h3>Keep the licensing file aligned with the route.</h3>
                <p>
                  We coordinate ownership records, corporate resolutions, governance materials,
                  key-person information, policy packs and other supporting materials through the
                  relevant providers and workstreams.
                </p>
              </div>
              <div className="workstream">
                <div className="n">BANKS &amp; PAYMENT PARTNERS</div>
                <h3>Direct institutional onboarding with a prepared file.</h3>
                <p>
                  We prepare the business, regulatory and compliance materials and coordinate the
                  application process; each institution conducts its own onboarding and customer due
                  diligence directly with the applicant.
                </p>
              </div>
            </div>
            <p>
              Where a Mauritian lawyer, management company, incorporation provider or other local
              professional is required for a particular workstream, we coordinate with the relevant
              local corporate or professional provider as part of the overall project. The relevant
              provider performs its own client acceptance and statutory or professional due
              diligence within its mandate, while LEX ARTA coordinates the scope, document set,
              dependencies and timing across the engagement.
            </p>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Common Questions</div>
              <h2>Mauritius VASP Licensing — FAQ</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What classes of Mauritius VASP licence are available?</h3>
                <p>
                  The FSC licensing framework identifies five principal classes: Class M (Virtual
                  Asset Broker-Dealer), Class O (Virtual Asset Wallet Services), Class R (Virtual
                  Asset Custodian), Class I (Virtual Asset Advisory Services) and Class S (Virtual
                  Asset Market Place). The correct class — and whether more than one class is needed
                  — depends on the actual services and how the business operates.
                </p>
              </div>
              <div className="faq-item">
                <h3>Does Mauritius regulate ITO issuers separately from VASPs?</h3>
                <p>
                  Yes. The VAITOS Act regulates both VASPs and issuers of initial token offerings. A
                  token issuance workstream should therefore be assessed separately from the VASP
                  analysis, even where both sit within the same broader project.
                </p>
              </div>
              <div className="faq-item">
                <h3>Why start with a Mauritius readiness assessment?</h3>
                <p>
                  Because class selection, governance, activity mapping and compliance evidence
                  should be tested before the full application begins. A readiness assessment
                  reduces the risk of building the wrong file or structuring the business around the
                  wrong assumptions.
                </p>
              </div>
              <div className="faq-item">
                <h3>What does the FSC typically expect in the application file?</h3>
                <p>
                  The documents and evidence required for an FSC application depend on the selected
                  VASP class and the current FSC licensing criteria. Any local corporate,
                  management-company or other regulated execution work is handled by the appropriate
                  provider under its own mandate.
                </p>
              </div>
              <div className="faq-item">
                <h3>Do local providers need to be involved?</h3>
                <p>
                  Often yes. Depending on the route, incorporation, management-company work, local
                  professional services and certain jurisdiction-specific workstreams may need to be
                  carried out by appropriately qualified Mauritian providers. LEX ARTA coordinates
                  the relevant local corporate or professional providers as part of the overall
                  project.
                </p>
              </div>
              <div className="faq-item">
                <h3>Is Mauritius only relevant for exchanges and custodians?</h3>
                <p>
                  No. The framework covers exchange-style activity, wallet services, custody,
                  advisory activity and virtual-asset marketplaces. The right route depends on what
                  the business will actually do, for whom, and how fiat, custody and technology are
                  organised.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Related services</div>
              <h2>Build the workstreams that make the Mauritius route usable.</h2>
            </div>
            <div className="related-grid">
              <a
                className="related-card"
                href="/services/legal-regulatory/regulatory-perimeter-assessment/"
              >
                <strong>Regulatory Perimeter Assessment</strong>
                <span>
                  Determine whether the planned exchange, custody, payment, token or investment
                  model enters an existing regulated perimeter.
                </span>
              </a>
              <a
                className="related-card"
                href="/services/legal-regulatory/legal-opinions-regulatory-memoranda/"
              >
                <strong>Legal Opinions &amp; Regulatory Memoranda</strong>
                <span>
                  Document the licence class rationale, prepare the FSC-facing position and
                  coordinate any specialist local input required by the selected Mauritian path.
                </span>
              </a>
              <a className="related-card" href="/services/aml-cft/">
                <strong>AML/CFT &amp; Financial Crime</strong>
                <span>
                  Build customer-risk, KYC/KYB, sanctions, transaction-monitoring and governance
                  controls around the actual operating model.
                </span>
              </a>
              <a
                className="related-card"
                href="/services/corporate-governance/banking-emi-readiness/"
              >
                <strong>Banking &amp; EMI Readiness</strong>
                <span>
                  Prepare the corporate, compliance and operational file used for bank,
                  payment-provider and institutional onboarding.
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="final-cta-strip">
            <div className="container final-cta-inner">
              <div>
                <div className="section-kicker">Considering Mauritius?</div>
                <h2>Start with the business model — then build the Mauritius route around it.</h2>
                <p>
                  Tell us what the business will provide, where clients and counterparties will be
                  located, how fiat and digital assets will move and what operational footprint is
                  planned in Mauritius. We will scope the licence class, structure, local
                  workstreams and compliance build around those facts.
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss Mauritius Licensing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
