import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/licensing/international/switzerland/",
  title: "Switzerland Crypto Regulatory Setup | SRO & FINMA | LEX ARTA",
  heading: "Switzerland Crypto Regulatory Setup",
  description:
    "Swiss crypto regulatory advisory on perimeter, SRO or FINMA considerations, AML obligations and next steps.",
  heroImage: "/images/ef02ebb77eed2691af65.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Lex Arta · Switzerland Crypto Regulatory Setup</div>
                <h1>Switzerland Crypto Regulatory Setup</h1>
                <p className="hero-lead">
                  Assess the Swiss regulatory perimeter before selecting a local provider,
                  regulatory route or market-entry workstream. We map the business model, identify
                  AMLA and wider prudential questions, and prepare a defined compliance and evidence
                  workstream.
                </p>
                <div aria-label="Key due diligence areas" className="hero-points">
                  <span>AMLA</span>
                  <span>SRO affiliation</span>
                  <span>FINMA perimeter</span>
                  <span>Travel Rule</span>
                  <span>DLT / FinTech analysis</span>
                  <span>Market-entry readiness</span>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/contact/">
                    Discuss Swiss Setup
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="/services/licensing/international/switzerland/#problems"
                  >
                    See the Scope
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="Switzerland crypto regulatory setup advisory for digital-asset businesses"
                  loading="lazy"
                  src="/images/ef02ebb77eed2691af65.webp"
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
                In Switzerland, the critical question is not simply whether the business is “crypto”
                — it is which AMLA, SRO and FINMA route actually fits the business model.
              </h2>
              <p>
                Switzerland does not operate a single universal “VASP licence”. Crypto businesses
                are assessed through an activity-based regulatory framework. Professional financial
                intermediaries within the AMLA perimeter must join a FINMA-recognised SRO unless
                they are subject to direct FINMA supervision. More complex models may move into the
                territory of a FinTech licence, banking, securities or DLT trading-facility
                authorisation. A credible Swiss project therefore starts with documented perimeter
                analysis, route selection and launch assumptions before local establishment or
                onboarding work begins.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Is the model an AMLA-only financial intermediary?</h3>
                <p>
                  We determine whether the model falls within the AMLA financial-intermediary
                  perimeter and identify whether a wider FINMA authorisation analysis is required.
                </p>
                <ul className="micro-list">
                  <li>AMLA perimeter</li>
                  <li>SRO relevance</li>
                  <li>Commercial activity</li>
                  <li>Regulatory triggers</li>
                </ul>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Does custody or wallet control change the analysis?</h3>
                <p>
                  We map how keys, client assets, withdrawals and settlement actually work, because
                  custody and control logic can materially affect the Swiss regulatory position and
                  onboarding story.
                </p>
                <ul className="micro-list">
                  <li>Key control</li>
                  <li>Asset flows</li>
                  <li>Segregation</li>
                  <li>Client protections</li>
                </ul>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Are fiat rails, payments and brokerage handled correctly?</h3>
                <p>
                  Fiat handling, exchange, transfer and intermediation functions can create
                  additional perimeter questions. We analyse the real flow of funds before the
                  structure is fixed.
                </p>
                <ul className="micro-list">
                  <li>Fiat flows</li>
                  <li>Brokerage logic</li>
                  <li>Third-party funds</li>
                  <li>Payments nexus</li>
                </ul>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Could the model require a wider FINMA analysis?</h3>
                <p>
                  Where the business touches deposit-taking, securities functions, market
                  infrastructure or other prudentially supervised activity, the route may extend
                  beyond an SRO-based setup.
                </p>
                <ul className="micro-list">
                  <li>FinTech</li>
                  <li>Banking</li>
                  <li>Securities</li>
                  <li>DLT facilities</li>
                </ul>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Is the AML/CFT framework Switzerland-ready?</h3>
                <p>
                  We design the AML/CFT framework around customer journeys, sanctions exposure,
                  Travel Rule, transaction monitoring and the risk created by the digital-asset
                  operating model.
                </p>
                <ul className="micro-list">
                  <li>CDD / EDD</li>
                  <li>Travel Rule</li>
                  <li>Monitoring</li>
                  <li>Reporting lines</li>
                </ul>
              </article>
              <article className="problem-card" data-no="06">
                <h3>Are governance and key persons application-ready?</h3>
                <p>
                  We test whether the proposed board, management, compliance function and staffing
                  plan are coherent enough for the selected Swiss route and the expected
                  counterparties.
                </p>
                <ul className="micro-list">
                  <li>Board</li>
                  <li>Key officers</li>
                  <li>Compliance</li>
                  <li>Staffing plan</li>
                </ul>
              </article>
              <article className="problem-card" data-no="07">
                <h3>Will banks and counterparties understand the structure?</h3>
                <p>
                  Authorisation or SRO positioning is only part of the project. We prepare the
                  documentary position the business will need for Swiss and international banking
                  and counterparty onboarding.
                </p>
                <ul className="micro-list">
                  <li>Banking pack</li>
                  <li>Counterparties</li>
                  <li>Flow-of-funds</li>
                  <li>Launch file</li>
                </ul>
              </article>
              <article className="problem-card" data-no="08">
                <h3>Do local workstreams need Swiss specialists?</h3>
                <p>
                  Swiss counsel, fiduciaries, SRO-facing specialists, auditors and other providers
                  often need to be involved. We organise those workstreams around one coherent
                  project file.
                </p>
                <ul className="micro-list">
                  <li>Swiss counsel</li>
                  <li>Fiduciary</li>
                  <li>Audit</li>
                  <li>Local execution</li>
                </ul>
              </article>
            </div>
            <div className="included-strip">
              <strong>Typical Swiss workstreams</strong>
              <div className="included-items">
                <span>AMLA perimeter</span>
                <span>SRO membership analysis</span>
                <span>FINMA perimeter review</span>
                <span>Business-model narrative</span>
                <span>Governance framework</span>
                <span>AML/CFT controls</span>
                <span>Supporting evidence</span>
                <span>Local counsel instruction</span>
              </div>
            </div>
          </div>
        </section>
        <section className="distinction">
          <div className="container">
            <div className="distinction-wrap">
              <div>
                <div className="section-kicker">Swiss regulatory context</div>
                <h2>
                  A strong Swiss route starts with choosing the right regulatory path — not with
                  filing blindly.
                </h2>
                <p>
                  In Switzerland, providers dealing commercially with virtual currencies and
                  comparable digital-asset models often fall within the Anti-Money Laundering Act
                  (AMLA) as financial intermediaries. Professional financial intermediaries under
                  AMLA are supervised by the SRO with which they are affiliated, unless direct FINMA
                  supervision applies. More complex models can move beyond AMLA-only positioning
                  into a FinTech licence, banking or securities perimeter, and DLT trading
                  facilities have their own authorisation framework under the Financial Market
                  Infrastructure Act. The Swiss opportunity is real, but the route, structure and
                  evidence set have to be correct from the start.
                </p>
              </div>
              <div className="journey">
                <div className="journey-step">
                  <b>01</b>
                  <span>Map the products, customers, jurisdictions and flow of funds</span>
                </div>
                <div className="journey-step">
                  <b>02</b>
                  <span>Select the Swiss route and activity scope</span>
                </div>
                <div className="journey-step">
                  <b>03</b>
                  <span>Define the evidence and local-law workstream</span>
                </div>
                <div className="journey-step">
                  <b>04</b>
                  <span>Prepare the regulatory file and compliance framework</span>
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
              <div className="section-kicker">Swiss launch framework</div>
              <h2>
                One project connecting route selection, regulatory strategy and operational
                credibility.
              </h2>
              <p>
                A Swiss regulatory project is strongest when the activity analysis, AML/CFT evidence
                and local-law workstream are consistent. The engagement confirms the precise
                deliverables and responsible providers.
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01 / LICENSING STRATEGY</div>
                <h3>Choose the right Swiss route before execution begins.</h3>
                <p>
                  We map the service model against the Swiss regulatory perimeter and identify the
                  AMLA/SRO membership implications and whether the business points towards a wider
                  FINMA authorisation analysis, and what evidence is needed to support that
                  position.
                </p>
              </div>
              <div className="workstream">
                <div className="n">02 / APPLICATION &amp; ENTITY BUILD</div>
                <h3>Build the application platform around the intended activity.</h3>
                <p>
                  We prepare a defined instruction for the relevant Swiss-qualified provider and
                  coordinate the agreed evidence and document workstream.
                </p>
              </div>
              <div className="workstream">
                <div className="n">03 / COMPLIANCE &amp; CONTROLS</div>
                <h3>Turn the licensing route into a defensible regulator-facing file.</h3>
                <p>
                  We prepare the business-model narrative, AML/CFT framework, governance materials,
                  risk documentation, policy set, Travel Rule logic and supporting controls needed
                  for the Swiss regulatory file and follow-up questions.
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
              <h2>Choose the scope that matches the stage of the Swiss project.</h2>
              <p>
                The engagement can start with a Switzerland Crypto &amp; VASP Readiness Assessment
                and extend through SRO / AML build-out, regulatory preparation and full market-entry
                coordination. Scope is confirmed against the actual business model before execution
                begins.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="A">
                <h3>Switzerland Crypto &amp; VASP Readiness Assessment</h3>
                <p>
                  For founders and existing businesses that want to test whether Switzerland is the
                  right route for the proposed model before committing to local establishment, local
                  providers, compliance build-out or wider regulatory work.
                </p>
                <ul className="micro-list">
                  <li>Business-model review</li>
                  <li>AMLA perimeter review</li>
                  <li>AMLA / SRO membership analysis</li>
                  <li>Regulatory route review</li>
                  <li>Flow-of-funds analysis</li>
                  <li>Custody, Travel Rule &amp; governance dependencies</li>
                  <li>Banking &amp; launch-readiness review</li>
                  <li>Key gaps, risks &amp; recommended next steps</li>
                </ul>
              </article>
              <article className="problem-card" data-no="B">
                <h3>SRO / AML &amp; Regulatory Setup</h3>
                <p>
                  For founders and groups that are ready to move from route selection into AML/CFT
                  implementation, regulatory preparation and coordinated onboarding or authorisation
                  work.
                </p>
                <ul className="micro-list">
                  <li>Switzerland Crypto &amp; VASP Readiness Assessment scope</li>
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
                <h3>Full Swiss Market Entry &amp; Operational Readiness</h3>
                <p>
                  For a project that needs the Swiss route taken through regulatory preparation,
                  launch planning and coordinated operational readiness as one integrated
                  market-entry project.
                </p>
                <ul className="micro-list">
                  <li>SRO / AML &amp; Regulatory Setup scope</li>
                  <li>Business-model and compliance readiness review</li>
                  <li>Operational-readiness coordination</li>
                  <li>Technology / outsourcing dependencies</li>
                  <li>Local provider coordination</li>
                  <li>Implementation roadmap</li>
                  <li>Launch timetable management</li>
                  <li>Post-launch compliance calendar</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Coordinated Swiss execution</div>
              <h2>
                LEX ARTA leads the regulatory project and coordinates the Swiss counsel and
                providers involved in the local workstreams.
              </h2>
              <p>
                Where a workstream requires Swiss counsel, a fiduciary, an incorporation provider,
                an SRO-facing compliance specialist, an auditor, a technology assessor or another
                local professional, we coordinate with the appropriately qualified local corporate
                or professional provider while leading the regulatory analysis, evidence set,
                compliance workstream and overall timetable.
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">SWISS COUNSEL / ENTITY PROVIDERS</div>
                <h3>Local establishment coordination and local legal execution.</h3>
                <p>
                  The relevant Swiss provider handles incorporation, local filings,
                  jurisdiction-specific setup steps and other execution work falling within its
                  professional mandate.
                </p>
              </div>
              <div className="workstream">
                <div className="n">REGULATORY &amp; LOCAL SPECIALISTS</div>
                <h3>Jurisdiction-specific input where the route requires it.</h3>
                <p>
                  Where the project requires specialised Swiss legal, regulatory, audit, technology
                  or other local input, we prepare the factual and regulatory instruction pack and
                  coordinate the work with the appropriate local specialist.
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
              Where a Swiss lawyer, fiduciary, incorporation provider, SRO-facing adviser or other
              local professional is required for a particular workstream, we coordinate with the
              relevant local corporate or professional provider as part of the overall project. The
              relevant provider performs its own client acceptance and statutory or professional due
              diligence within its mandate, while LEX ARTA coordinates the scope, document set,
              dependencies and timing across the engagement.
            </p>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Common Questions</div>
              <h2>Switzerland Crypto Regulatory Setup — FAQ</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Is there one Swiss “VASP licence”?</h3>
                <p>
                  Not in the simple sense. Switzerland applies an activity-based regulatory
                  framework. Many crypto businesses are assessed first through AMLA and the
                  financial-intermediary perimeter. SRO membership is an AML supervisory route for
                  relevant financial intermediaries; it is not a FINMA licence. Other models may
                  require a FinTech, banking, securities or DLT-trading-facility analysis depending
                  on the actual activity.
                </p>
              </div>
              <div className="faq-item">
                <h3>When is an SRO route often relevant?</h3>
                <p>
                  Where a business acts professionally as a financial intermediary under AMLA and is
                  not directly supervised by FINMA, it must join a FINMA-recognised SRO. Whether
                  AMLA applies depends on the actual activity and structure. The model still needs
                  to be analysed carefully against what the business actually does.
                </p>
              </div>
              <div className="faq-item">
                <h3>When might a wider FINMA authorisation analysis be needed?</h3>
                <p>
                  Where the business model moves beyond an AMLA-only position — for example towards
                  deposit-taking, banking-type intermediation, securities activity, tokenised market
                  infrastructure or other prudentially supervised functions. Switzerland is not a
                  one-route jurisdiction.
                </p>
              </div>
              <div className="faq-item">
                <h3>What about DLT trading facilities?</h3>
                <p>
                  DLT trading facilities have a separate authorisation framework in Switzerland
                  under the Financial Market Infrastructure Act. They are relevant for multilateral
                  trading of DLT securities and can, depending on the structure, also involve
                  custody, clearing or settlement functions.
                </p>
              </div>
              <div className="faq-item">
                <h3>Why start with a Swiss readiness assessment?</h3>
                <p>
                  Because route selection drives the entire build. If the business is structured
                  around the wrong SRO or FINMA assumption, the governance file, AML programme,
                  banking story and even the local-establishment workstream can all become
                  misaligned.
                </p>
              </div>
              <div className="faq-item">
                <h3>Do local providers need to be involved?</h3>
                <p>
                  Often yes. Depending on the route, incorporation, Swiss legal work, fiduciary
                  services, SRO-facing workstreams, audit and certain jurisdiction-specific
                  workstreams may need to be carried out by appropriately qualified Swiss providers.
                  LEX ARTA coordinates the relevant local corporate or professional providers as
                  part of the overall project.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Related services</div>
              <h2>Build the workstreams that make the Swiss route usable.</h2>
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
                  Document the chosen Swiss route, prepare the SRO- or FINMA-facing position and
                  coordinate any specialist local input required by the selected path.
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
                <div className="section-kicker">Considering Switzerland?</div>
                <h2>Start with the business model — then build the Swiss route around it.</h2>
                <p>
                  Tell us what the business will provide, where clients and counterparties will be
                  located, how fiat and digital assets will move and what operational footprint is
                  planned in Switzerland. We will scope the regulatory route, local workstreams and
                  compliance build around those facts.
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href="/contact/">
                  Discuss Swiss Setup
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
