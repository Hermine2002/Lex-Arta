import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/licensing/mica-casp/",
  title: "MiCA CASP Licensing & EU Authorisation | LEX ARTA",
  heading: "MiCA CASP Licensing & EU Authorisation",
  description:
    "MiCA CASP licensing support: jurisdiction selection, readiness assessment and authorisation preparation for EU crypto-asset service providers.",
  heroImage:
    "/images/licensing-strategy-hero-1.webp",
};

const contactLink = "/book-a-consultation/";

export default function Page() {
  return (
    <main className="mica-page">
      <section className="hero mica-hero">
        <img
          alt="Regulatory advisers reviewing a European crypto-asset licensing project"
          aria-hidden="true"
          className="hero-bg"
          loading="lazy"
          src={meta.heroImage ?? ""}
        />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              MiCA · CASP Authorisation · European Union
            </p>
            <h1>MiCA CASP Licensing &amp; EU Authorisation</h1>
            <p className="hero-lead">
              A structured regulatory route for crypto-asset businesses seeking
              authorisation in the European Union — from service classification
              and licensing readiness to preparation of the CASP application
              dossier and supervisory support.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#assessments">
                Explore licensing services
              </a>
              <a className="btn btn-secondary" href={contactLink}>
                Discuss your MiCA project
              </a>
            </div>
            <div className="hero-meta mica-hero-meta">
              <span>Defined scopes</span>
              <span>Senior-led advisory</span>
              <span>EU regulatory focus</span>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="On this page" className="mica-jump">
        <div className="container mica-jump-inner">
          <span className="mica-jump-label">On this page</span>
          <div className="mica-jump-links">
            <a href="#what-is-mica">MiCA</a>
            <a href="#services">10 services</a>
            <a href="#requirements">Requirements</a>
            <a href="#assessments">Entry services</a>
            <a href="#full-authorisation">Full authorisation</a>
            <a href="#czech-mica">Czech Republic</a>
            <a href="#why-lex-arta">Why LEX ARTA</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </nav>

      <section className="section overview-section" id="what-is-mica">
        <div className="container overview-layout">
          <div className="overview-heading">
            <p className="section-kicker">Understanding the framework</p>
            <h2>What is MiCA?</h2>
          </div>
          <div className="overview-copy">
            <p>
              <strong>
                MiCA — Regulation (EU) 2023/1114 on markets in crypto-assets —
                creates a harmonised EU framework for certain crypto-assets and
                regulated crypto-asset services.
              </strong>
            </p>
            <p>
              Businesses providing one or more regulated crypto-asset services
              in the EU generally need authorisation as a{" "}
              <strong>Crypto-Asset Service Provider (CASP)</strong>, unless
              another statutory route applies. Certain already-authorised
              financial entities may use the Article 60 notification route for
              eligible services.
            </p>
            <p>
              A CASP authorisation is granted for specific crypto-asset
              services. Following the applicable cross-border notification
              process, an authorised CASP may provide those authorised services
              in other EU Member States.
            </p>
            <p className="mica-notice">
              MiCA does not automatically apply to every token or crypto-related
              business model. The correct starting point is the actual service,
              asset and operating model.
            </p>
          </div>
          <div aria-label="MiCA authorisation steps" className="mica-step-grid">
            <article className="mica-step-card">
              <span className="num">01</span>
              <h3>Classify the activity</h3>
              <p>
                Identify which proposed activities fall within MiCA&apos;s
                regulated crypto-asset services.
              </p>
            </article>
            <article className="mica-step-card">
              <span className="num">02</span>
              <h3>Define the authorisation perimeter</h3>
              <p>
                Confirm the exact services to be requested and the corresponding
                prudential category.
              </p>
            </article>
            <article className="mica-step-card">
              <span className="num">03</span>
              <h3>Build the applicant framework</h3>
              <p>
                Align governance, AML/CFT, financial resources, ICT and
                operational arrangements with the proposed services.
              </p>
            </article>
            <article className="mica-step-card">
              <span className="num">04</span>
              <h3>Prepare the application dossier</h3>
              <p>
                Develop the evidence and documentation required by the competent
                national authority.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">MiCA service perimeter</p>
            <h2>MiCA recognises 10 regulated crypto-asset services.</h2>
            <p>
              Annex IV groups those services into three prudential classes. The
              class is not a separate licence: it determines the minimum
              permanent capital reference for the relevant service perimeter.
            </p>
          </div>
          <div className="formats-grid three mica-class-grid">
            <article className="card mica-class-card">
              <p className="mica-card-label">Annex IV · Class 1</p>
              <h3>Orders, advice &amp; transfers</h3>
              <div className="mica-capital">
                <strong>€50,000</strong>
                <span>Minimum capital reference</span>
              </div>
              <ul>
                <li>Execution of orders on behalf of clients</li>
                <li>Placing of crypto-assets</li>
                <li>Transfer services on behalf of clients</li>
                <li>Reception and transmission of orders</li>
                <li>Advice on crypto-assets</li>
                <li>Portfolio management on crypto-assets</li>
              </ul>
            </article>
            <article className="card mica-class-card">
              <p className="mica-card-label">Annex IV · Class 2</p>
              <h3>Custody &amp; exchange</h3>
              <div className="mica-capital">
                <strong>€125,000</strong>
                <span>Minimum capital reference</span>
              </div>
              <ul>
                <li>
                  Custody and administration of crypto-assets on behalf of
                  clients
                </li>
                <li>Exchange of crypto-assets for funds</li>
                <li>Exchange of crypto-assets for other crypto-assets</li>
              </ul>
              <p className="mica-class-note">
                For prudential categorisation, Class 2 also covers any
                authorised Class 1 services. Only services expressly authorised
                may be provided.
              </p>
            </article>
            <article className="card mica-class-card">
              <p className="mica-card-label">Annex IV · Class 3</p>
              <h3>Trading platforms</h3>
              <div className="mica-capital">
                <strong>€150,000</strong>
                <span>Minimum capital reference</span>
              </div>
              <ul>
                <li>Operation of a trading platform for crypto-assets</li>
              </ul>
              <p className="mica-class-note">
                For prudential categorisation, Class 3 also covers lower-class
                services. The authorisation itself remains service-specific.
              </p>
            </article>
          </div>
          <p className="mica-fineprint">
            <strong>Prudential safeguards:</strong> under Article 67 MiCA, a
            CASP must maintain safeguards equal to at least the higher of the
            applicable Annex IV amount and one quarter of the preceding
            year&apos;s fixed overheads, subject to the statutory calculation
            rules. These amounts are regulatory capital requirements, not LEX
            ARTA professional fees.
          </p>
        </div>
      </section>

      <section className="section alt mica-alt-section" id="requirements">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Authorisation readiness</p>
            <h2>What does a CASP application need to demonstrate?</h2>
            <p>
              The application must show that the proposed provider can operate
              the requested services within a credible governance, compliance,
              financial and operational framework.
            </p>
          </div>
          <div className="formats-grid mica-requirements-grid">
            <article className="card mica-requirement-card">
              <span>EU establishment</span>
              <h3>Registered office &amp; effective management</h3>
              <p>
                Appropriate EU establishment, effective management and
                management-body arrangements for the chosen authorisation route.
              </p>
            </article>
            <article className="card mica-requirement-card">
              <span>Governance</span>
              <h3>Management &amp; internal controls</h3>
              <p>
                Clear responsibilities, suitable management, risk governance and
                proportionate control functions.
              </p>
            </article>
            <article className="card mica-requirement-card">
              <span>Financial crime</span>
              <h3>AML/CFT &amp; Travel Rule</h3>
              <p>
                Risk assessment, customer due diligence, sanctions and
                financial-crime controls, including applicable transfer-of-funds
                requirements.
              </p>
            </article>
            <article className="card mica-requirement-card">
              <span>Operational resilience</span>
              <h3>ICT, DORA &amp; outsourcing</h3>
              <p>
                Application-level ICT governance, continuity, outsourcing
                oversight and applicable DORA arrangements.
              </p>
            </article>
            <article className="card mica-requirement-card">
              <span>Financial resources</span>
              <h3>Prudential &amp; financial evidence</h3>
              <p>
                Required safeguards, financial projections and evidence
                supporting the viability of the proposed operating model.
              </p>
            </article>
            <article className="card mica-requirement-card">
              <span>Regulatory dossier</span>
              <h3>Programme of Operations &amp; evidence</h3>
              <p>
                Coherent corporate, governance, financial and service-specific
                documentation supporting the application.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="assessments">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Defined entry services</p>
            <h2>Start with the question you need answered.</h2>
            <p>
              Not every project should begin with a full authorisation mandate.
              A defined assessment can establish the right jurisdiction or
              identify material gaps before the larger licensing workstream
              begins.
            </p>
          </div>
          <div className="formats-grid mica-entry-grid">
            <article className="card mica-offer-card">
              <span className="mica-card-label">01 · Jurisdiction</span>
              <h3>MiCA Jurisdiction Selection</h3>
              <strong className="mica-price">From €4,500</strong>
              <p>
                Compare agreed EU jurisdictions against the proposed CASP
                services, business model and key operational considerations.
              </p>
              <p className="mica-outcome">
                <strong>Outcome</strong> A written jurisdiction assessment with
                comparative findings and a recommended authorisation route.
              </p>
              <a className="text-link" href={contactLink}>
                Discuss jurisdiction selection →
              </a>
            </article>
            <article className="card mica-offer-card">
              <span className="mica-card-label">02 · Readiness</span>
              <h3>MiCA CASP Readiness &amp; Gap Assessment</h3>
              <strong className="mica-price">€6,500</strong>
              <p>
                Assess the proposed services, governance, AML/CFT, prudential,
                ICT/DORA and documentation readiness before committing to the
                full application.
              </p>
              <p className="mica-outcome">
                <strong>Outcome</strong> A structured readiness report
                identifying material gaps, priority actions and the next steps
                towards authorisation.
              </p>
              <a className="text-link" href={contactLink}>
                Request readiness assessment →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="full-authorisation">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Full CASP authorisation</p>
            <h2>From regulatory scope to an integrated application dossier.</h2>
            <p>
              LEX ARTA provides defined-scope regulatory advisory, documentation
              preparation and application coordination for businesses seeking
              MiCA CASP authorisation in the EU.
            </p>
          </div>
          <div className="mica-authorisation-grid">
            <aside className="mica-fees-card">
              <p className="mica-card-label">Professional fees</p>
              <h3>
                Starting fees reflect the requested MiCA service perimeter.
              </h3>
              <dl>
                <div>
                  <dt>Class 1</dt>
                  <dd>From €40,000</dd>
                </div>
                <div>
                  <dt>Class 2</dt>
                  <dd>From €55,000</dd>
                </div>
                <div>
                  <dt>Class 3 / Trading Platform</dt>
                  <dd>From €75,000</dd>
                </div>
              </dl>
              <p>
                The final fee depends on the number and type of requested
                crypto-asset services, the applicable prudential class,
                business-model complexity, existing documentation and the agreed
                supervisory-review scope.
              </p>
            </aside>
            <div className="mica-workstreams">
              <article>
                <span>01</span>
                <div>
                  <h3>Regulatory perimeter &amp; Programme of Operations</h3>
                  <p>
                    Requested CASP services, operating model, target markets and
                    the regulatory narrative supporting the application.
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Governance &amp; internal control framework</h3>
                  <p>
                    Management responsibilities, organisational arrangements,
                    risk governance and application-level control documentation.
                  </p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>AML/CFT, sanctions &amp; Travel Rule</h3>
                  <p>
                    Application-level AML/CFT risk framework, customer due
                    diligence, financial-crime controls and applicable Travel
                    Rule governance.
                  </p>
                </div>
              </article>
              <article>
                <span>04</span>
                <div>
                  <h3>Prudential &amp; financial workstream</h3>
                  <p>
                    Regulatory preparation and coordination of required
                    prudential information and supporting financial evidence
                    using agreed applicant and specialist inputs.
                  </p>
                </div>
              </article>
              <article>
                <span>05</span>
                <div>
                  <h3>ICT, DORA &amp; outsourcing documentation</h3>
                  <p>
                    Application-level ICT governance, operational resilience,
                    continuity and outsourcing documentation relevant to the
                    proposed model.
                  </p>
                </div>
              </article>
              <article>
                <span>06</span>
                <div>
                  <h3>
                    Service-specific policies &amp; application consolidation
                  </h3>
                  <p>
                    Documentation required by the requested services,
                    consistency review of the dossier and agreed support during
                    the supervisory clarification process.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <p className="mica-scope-note">
            <strong>Scope control.</strong> Detailed deliverables,
            responsibilities and supervisory-response rounds are defined in the
            Statement of Work. Regulatory capital, authority charges, detailed
            financial modelling, technical ICT implementation or testing,
            translations, staffing and independent third-party services are
            separate unless expressly agreed.
          </p>
          <a className="btn btn-secondary mica-dark-button" href={contactLink}>
            Discuss full authorisation
          </a>
        </div>
      </section>

      <section className="section alt mica-alt-section" id="czech-mica">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">
              Featured jurisdiction · Czech Republic
            </p>
            <h2>MiCA CASP Authorisation in the Czech Republic</h2>
            <p>
              A concise three-stage route: readiness assessment, incorporation
              coordination and the full CASP application with ČNB review.
            </p>
          </div>
          <p className="mica-notice">
            <strong>Czech regulatory context.</strong> The Czech MiCA
            transitional period ended on 1 July 2026. Businesses providing
            regulated crypto-asset services must now operate under the
            applicable MiCA authorisation or notification route. The Czech
            National Bank (ČNB) is the competent authority for Czech CASP
            authorisations.
          </p>
          <div className="formats-grid mica-entry-grid">
            <article className="card mica-offer-card">
              <span className="mica-card-label">01 · Assess</span>
              <h3>MiCA CASP Readiness Assessment</h3>
              <strong className="mica-price">€6,500</strong>
              <p>
                Assess the proposed Czech CASP model, governance, AML/CFT,
                prudential, ICT/DORA and documentation readiness before the full
                authorisation workstream begins.
              </p>
              <p className="mica-outcome">
                <strong>Outcome</strong> Readiness report identifying material
                gaps, priority actions and the recommended next steps.
              </p>
              <p className="mica-outcome">
                <strong>Commercial basis</strong> Fixed-fee assessment. Full
                authorisation work is a separate engagement.
              </p>
              <a className="text-link" href={contactLink}>
                Request readiness assessment →
              </a>
            </article>
            <article className="card mica-offer-card">
              <span className="mica-card-label">02 · Coordinate</span>
              <h3>Czech Company Incorporation Coordination</h3>
              <strong className="mica-price">€1,500</strong>
              <p>
                Coordinate the incorporation of the Czech applicant company for
                the MiCA authorisation project.
              </p>
              <p className="mica-outcome">
                <strong>Outcome</strong> Coordinated establishment workstream
                for the Czech applicant company required for the MiCA project.
              </p>
              <p className="mica-outcome">
                <strong>Commercial basis</strong> LEX ARTA coordination fee
                only. Incorporation and related third-party costs are
                additional.
              </p>
              <a className="text-link" href={contactLink}>
                Discuss incorporation coordination →
              </a>
            </article>
            <article className="card mica-offer-card">
              <span className="mica-card-label">03 · Apply</span>
              <h3>Full CASP Application &amp; ČNB Review</h3>
              <strong className="mica-price">From €40,000</strong>
              <p>
                Prepare and coordinate the Czech MiCA application dossier and
                provide the agreed support during the ČNB supervisory review
                process.
              </p>
              <p className="mica-outcome">
                <strong>Outcome</strong> Filing-ready CASP application dossier
                and agreed support through the contracted ČNB review workstream.
              </p>
              <p className="mica-outcome">
                <strong>Commercial basis</strong> Final fee depends on the
                requested MiCA services, applicable class, project complexity
                and agreed supervisory-review scope.
              </p>
              <a className="text-link" href={contactLink}>
                Discuss Czech CASP authorisation →
              </a>
            </article>
          </div>
          <div className="mica-follow-up-grid">
            <article>
              <p className="section-kicker">During the ČNB review</p>
              <h3>Supervisory Questions &amp; Regulatory Responses</h3>
              <p>
                After submission, LEX ARTA supports the applicant with analysis
                of ČNB requests, preparation and coordination of responses,
                amendments to application documentation and remediation of
                identified gaps.
              </p>
              <p>
                <strong>
                  The number and scope of supervisory-response rounds included
                  in the engagement are defined in the Statement of Work.
                </strong>
              </p>
            </article>
            <article>
              <p className="section-kicker">After authorisation</p>
              <h3>MiCA Post-Authorisation &amp; Ongoing Compliance</h3>
              <p>
                Ongoing support for authorised CASPs across AML/CFT, governance,
                regulatory change, compliance monitoring, EU passporting support
                and supervisory remediation.
              </p>
              <a
                className="text-link"
                href="/services/corporate-governance/post-licensing-compliance/"
              >
                Explore post-authorisation support →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="how-we-work">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">How we work</p>
            <h2>Defined scope. Connected workstreams. Clear responsibility.</h2>
            <p>
              The engagement is structured so that regulatory analysis,
              application documentation and supervisory support remain connected
              without creating open-ended deliverables.
            </p>
          </div>
          <div className="formats-grid three">
            <article className="card mica-process-card">
              <span className="num">01</span>
              <h3>Define</h3>
              <p>
                Confirm the services, jurisdiction, applicant structure,
                existing evidence and exact engagement scope.
              </p>
            </article>
            <article className="card mica-process-card">
              <span className="num">02</span>
              <h3>Prepare</h3>
              <p>
                Develop and align the contracted regulatory documentation and
                organise the required supporting evidence.
              </p>
            </article>
            <article className="card mica-process-card">
              <span className="num">03</span>
              <h3>Support</h3>
              <p>
                Consolidate the dossier and provide the agreed assistance during
                submission and regulatory clarification.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt mica-alt-section" id="why-lex-arta">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Why LEX ARTA</p>
            <h2>Regulatory work built around the actual operating model.</h2>
            <p>
              MiCA authorisation is not a document-production exercise. The
              business model, governance, AML/CFT, financial resources,
              technology arrangements and requested services need to tell one
              consistent regulatory story.
            </p>
          </div>
          <div className="formats-grid three">
            <article className="card">
              <h3>Senior-led regulatory involvement</h3>
              <p>
                Direct involvement of legal and compliance professionals with
                experience in AML/CFT, financial crime, regulatory documentation
                and regulated operations.
              </p>
            </article>
            <article className="card">
              <h3>Integrated application approach</h3>
              <p>
                Business, governance, compliance, prudential and operational
                workstreams are reviewed as connected parts of the same
                applicant framework.
              </p>
            </article>
            <article className="card">
              <h3>Defined commercial boundaries</h3>
              <p>
                LEX ARTA&apos;s deliverables are documented in the Statement of
                Work, while independent corporate, accounting, technology or
                other specialist execution is identified separately.
              </p>
            </article>
          </div>
          <a className="text-link mica-about-link" href="/about/">
            About LEX ARTA and our team →
          </a>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">Key questions</p>
            <h2>MiCA CASP authorisation — before you start.</h2>
            <p>
              The correct route and project scope depend on the actual services,
              applicant and jurisdiction.
            </p>
          </div>
          <div className="mica-faq-list">
            <details>
              <summary>
                Does every crypto business need MiCA CASP authorisation?
              </summary>
              <p>
                No. The answer depends on the actual activities, assets and
                operating model. Businesses providing one or more regulated
                crypto-asset services in the EU generally need CASP
                authorisation unless another statutory route applies, including
                the Article 60 notification route for certain eligible
                already-authorised financial entities.
              </p>
            </details>
            <details>
              <summary>
                Are Class 1, Class 2 and Class 3 different licences?
              </summary>
              <p>
                No. They are prudential categories in Annex IV MiCA. The
                competent authority authorises the specific crypto-asset
                services that the CASP may provide. The class affects the
                minimum capital reference and reflects the highest-risk service
                within the requested perimeter.
              </p>
            </details>
            <details>
              <summary>
                Why does the professional fee depend on the MiCA class?
              </summary>
              <p>
                The class is a useful indicator of the regulatory scope, but it
                is not the only pricing factor. The final fee also depends on
                the number and type of requested services, the operating model,
                the quality of existing documentation and the agreed
                supervisory-review support.
              </p>
            </details>
            <details>
              <summary>
                Is a Readiness Assessment mandatory before a full application?
              </summary>
              <p>
                No. It is an optional entry service. Where the proposed
                services, applicant structure and evidence are sufficiently
                clear, a full authorisation engagement can be scoped directly.
              </p>
            </details>
            <details>
              <summary>Are regulatory and third-party costs included?</summary>
              <p>
                No, unless expressly stated in the agreed scope. LEX ARTA
                professional fees cover the advisory, assessment, documentation
                and coordination services specified in the engagement.
                Regulatory charges, notarial costs, certified translations,
                registered-office costs, incorporation-provider fees,
                recruitment, technical implementation and other independent
                third-party services are paid separately by the client. For
                Czech company incorporation, the €1,500 amount is LEX
                ARTA&apos;s coordination fee; independent provider and
                third-party costs are additional.
              </p>
            </details>
            <details>
              <summary>How are MiCA project fees paid?</summary>
              <p>
                MiCA projects are paid by agreed project stages. The Readiness
                Assessment and Czech Company Incorporation Coordination are
                separate fixed-fee engagements. For a full CASP authorisation
                project, payments are linked to defined milestones such as
                commencement of the engagement, preparation of the application
                documentation, completion of the filing-ready dossier and the
                agreed supervisory-review workstream. Professional fees are not
                contingent on the granting of authorisation. The specific
                payment schedule is confirmed in the engagement letter or
                Statement of Work before the project begins.
              </p>
            </details>
            <details>
              <summary>Does LEX ARTA guarantee authorisation?</summary>
              <p>
                No. Authorisation is granted or refused by the competent
                authority. LEX ARTA provides the agreed regulatory advisory,
                documentation preparation, coordination and supervisory-response
                support.
              </p>
            </details>
          </div>
          <p className="mica-references">
            <strong>Primary regulatory references:</strong>{" "}
            <a
              href="https://eur-lex.europa.eu/eli/reg/2023/1114/oj/eng"
              target="_blank"
              rel="noreferrer"
            >
              Regulation (EU) 2023/1114 (MiCA)
            </a>
            {" · "}
            <a
              href="https://www.cnb.cz/en/supervision-financial-market/the-cnbs-area-of-competence-under-the-regulation-on-markets-in-crypto-assets-mica/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Czech National Bank — MiCA competence
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section final-cta mica-cta">
        <div className="container final-cta-inner">
          <div>
            <p className="section-kicker">Start your MiCA project</p>
            <h2>Ready to structure your CASP application?</h2>
            <p>
              Tell us the crypto-asset services you intend to provide, your
              preferred EU jurisdiction and the current stage of the project. We
              will identify the appropriate advisory scope and next step.
            </p>
          </div>
          <div className="final-cta-actions">
            <a className="btn btn-primary" href={contactLink}>
              Discuss Your MiCA Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
