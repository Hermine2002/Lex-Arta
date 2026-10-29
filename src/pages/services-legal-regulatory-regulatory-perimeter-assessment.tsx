import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/legal-regulatory/regulatory-perimeter-assessment/",
  title: "Regulatory Perimeter Assessment | International FinTech | LEX ARTA",
  heading: "Regulatory Perimeter Assessment",
  description:
    "Regulatory perimeter assessment for international FinTech, payments and digital-asset business models. Understand permissions, partner dependencies and your next regulatory steps.",
  heroImage: "/images/regulatory-perimeter-hero-1.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">LEX ARTA / Legal &amp; Regulatory</div>
                <h1>Regulatory Perimeter Assessment</h1>
                <p className="hero-lead">
                  Understand which regulations and permissions apply to your
                  business before launching, expanding or changing your
                  operating model.
                </p>
                <p className="hero-note">
                  International regulatory analysis for FinTech, payments,
                  digital assets and other regulated business models. We assess
                  actual activities under the laws of agreed jurisdictions and
                  document the regulatory consequences, assumptions and next
                  steps.
                </p>
                <div
                  aria-label="Regulatory perimeter assessment scope"
                  className="hero-points"
                >
                  <span>Business-model classification</span>
                  <span>Permissions &amp; exemptions</span>
                  <span>Partner dependencies</span>
                  <span>International regulatory analysis</span>
                </div>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/contact/">
                    Request a Regulatory Assessment
                  </a>
                  <a
                    className="btn btn-secondary"
                    href="/services/legal-regulatory/regulatory-perimeter-assessment/#scope"
                  >
                    Explore the Scope
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="Regulatory perimeter assessment for a cross-border business model"
                  loading="lazy"
                  src="/images/regulatory-perimeter-hero-1.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="problem-section" id="when-needed">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">When this service helps</div>
              <h2>
                The right regulatory question, before the next business
                decision.
              </h2>
              <p>
                We assess the activity you perform — not just the name you give
                to your product or the licence held by a partner.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Launching a new product</h3>
                <p>
                  Determine whether your payment, crypto-asset, technology or
                  financial service may be regulated before launch.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Entering a new market</h3>
                <p>
                  Understand territorial rules and authorisation or registration
                  requirements in a jurisdiction you have selected.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Using a licensed partner</h3>
                <p>
                  Assess which functions stay with your business and whether the
                  partner&apos;s permissions cover the proposed arrangement.
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Changing the operating model</h3>
                <p>
                  Test regulatory consequences of new features, customer groups,
                  transaction flows or outsourced functions.
                </p>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Clarifying regulatory status</h3>
                <p>
                  Obtain documented analysis for a management decision or a
                  defined commercial question; third-party reliance requires
                  separate agreement.
                </p>
              </article>
              <article className="problem-card">
                <h3>Operating across jurisdictions</h3>
                <p>
                  Separate applicable rules and conclusions for each agreed
                  country without assuming the same licensing outcome
                  everywhere.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="scope">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Scope of assessment</div>
              <h2>Six workstreams. One coherent regulatory conclusion.</h2>
              <p>
                The depth of each workstream is defined in the engagement. A
                multi-jurisdictional or multi-regime assessment is not
                automatically included in every assignment.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Business model &amp; activity mapping</h3>
                <p>
                  Establish how your business actually operates and which entity
                  or partner performs each activity.
                </p>
                <ul className="micro-list">
                  <li>
                    Legal entities, target markets, products and customer groups
                  </li>
                  <li>
                    Customer onboarding, transaction journeys, money and asset
                    flows
                  </li>
                  <li>
                    Contractual roles, control points, technology and
                    outsourcing dependencies
                  </li>
                </ul>
                <p style={{ marginBottom: 0 }}>
                  <strong>Typical output:</strong> Business Activity &amp;
                  Operating Model Map
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Regulatory classification &amp; applicable law</h3>
                <p>
                  Analyse the relevant legal definitions against the agreed
                  business model and jurisdiction.
                </p>
                <ul className="micro-list">
                  <li>
                    Payment services, e-money, digital-asset, financial or
                    investment activities, as applicable
                  </li>
                  <li>Territorial scope and relevant regulatory definitions</li>
                  <li>
                    Legal and factual assumptions, uncertainties and
                    dependencies
                  </li>
                </ul>
                <p style={{ marginBottom: 0 }}>
                  <strong>Typical output:</strong> Regulatory Classification
                  Analysis
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>
                  Authorisation, licensing &amp; registration requirements
                </h3>
                <p>
                  Identify permissions potentially triggered by the activities
                  performed.
                </p>
                <ul className="micro-list">
                  <li>Potential licensing and registration categories</li>
                  <li>Relevant regulator and scope of regulated activities</li>
                  <li>
                    Material restrictions, territorial limits and additional
                    permissions
                  </li>
                </ul>
                <p style={{ marginBottom: 0 }}>
                  <strong>Typical output:</strong> Regulatory Permissions Matrix
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Exemptions, exclusions &amp; restrictions</h3>
                <p>
                  Evaluate whether statutory exemptions or exclusions could
                  affect the classification.
                </p>
                <ul className="micro-list">
                  <li>Conditions for any potentially applicable exemption</li>
                  <li>Contractual, operational and factual requirements</li>
                  <li>
                    Limits, unresolved interpretative questions and evidence
                    gaps
                  </li>
                </ul>
                <p style={{ marginBottom: 0 }}>
                  <strong>Typical output:</strong> Exemptions &amp; Restrictions
                  Assessment
                </p>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Licensed-partner &amp; outsourcing models</h3>
                <p>
                  Test the regulatory consequences of working through another
                  regulated business.
                </p>
                <ul className="micro-list">
                  <li>
                    Activities performed by the client, partner and
                    infrastructure providers
                  </li>
                  <li>
                    Agency, distribution, white-label and outsourcing
                    dependencies
                  </li>
                  <li>
                    Whether the client may retain independent regulatory
                    obligations
                  </li>
                </ul>
                <p style={{ marginBottom: 0 }}>
                  <strong>Typical output:</strong> Regulatory Responsibility
                  &amp; Dependency Matrix
                </p>
              </article>
              <article className="problem-card">
                <h3>Regulatory conclusion &amp; next steps</h3>
                <p>
                  Consolidate the analysis into reasoned findings that
                  management can act on.
                </p>
                <ul className="micro-list">
                  <li>
                    Potential authorisation requirements and relevant
                    constraints
                  </li>
                  <li>
                    Material assumptions, open issues and further evidence
                    required
                  </li>
                  <li>
                    Next steps for licensing, restructuring or specialist legal
                    review
                  </li>
                </ul>
                <p style={{ marginBottom: 0 }}>
                  <strong>Typical output:</strong> Regulatory Conclusions &amp;
                  Action Roadmap
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="distinction">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Jurisdictional coverage</div>
              <h2>
                International assessment, with a defined legal and professional
                scope.
              </h2>
            </div>
            <div className="dark-card">
              <h3>UK &amp; selected international markets</h3>
              <p>
                We undertake substantive regulatory analysis for agreed
                jurisdictions, subject to the applicable rules governing
                professional services and the competence required for the
                assignment. Markets may include the UK, UAE, Singapore,
                Switzerland, Canada, Armenia and other selected jurisdictions.
              </p>
              <p style={{ marginBottom: 0 }}>
                Where local authorisation or formal local-law confirmation is
                necessary, specialist input is identified and separately
                arranged.
              </p>
            </div>
            <p style={{ marginTop: "22px", color: "var(--ink-muted)" }}>
              Interested in EU regulatory compliance assessments? Explore our{" "}
              <a
                href="https://www.artlexconsult.com/services/legal-regulatory/regulatory-gap-assessment/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "var(--gold)", fontWeight: 700 }}
              >
                EU Regulatory Gap Assessment
              </a>
              .
            </p>
          </div>
        </section>
        <section id="deliverables">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Your deliverable</div>
              <h2>A written assessment designed for a real decision.</h2>
              <p>
                The principal deliverable is a Regulatory Perimeter Assessment
                Report, tailored to the agreed activities and legal frameworks.
                Its format and depth are agreed in advance.
              </p>
            </div>
            <div className="workstreams-grid">
              <div className="workstream">
                <div className="n">01</div>
                <h3>Executive summary</h3>
                <p>
                  Key regulatory conclusions, decision points and material
                  assumptions.
                </p>
              </div>
              <div className="workstream">
                <div className="n">02</div>
                <h3>Business activity map</h3>
                <p>
                  Entities, services, customers, partners and relevant money or
                  asset flows.
                </p>
              </div>
              <div className="workstream">
                <div className="n">03</div>
                <h3>Classification analysis</h3>
                <p>
                  Reasoned analysis of the applicable rules and classification
                  of activities.
                </p>
              </div>
              <div className="workstream">
                <div className="n">04</div>
                <h3>Permissions matrix</h3>
                <p>
                  Potential authorisations, registrations and competent
                  authorities.
                </p>
              </div>
              <div className="workstream">
                <div className="n">05</div>
                <h3>Restrictions &amp; dependencies</h3>
                <p>
                  Exemptions, conditions, uncertainties and partner
                  responsibilities.
                </p>
              </div>
              <div className="workstream">
                <div className="n">06</div>
                <h3>Next-step roadmap</h3>
                <p>
                  Recommended actions and issues requiring further verification
                  or separate work.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">How we work</div>
              <h2>From operating model to regulatory conclusion.</h2>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Scope — Define the question</h3>
                <p>
                  Confirm activities, jurisdiction, regulatory question and
                  intended use of the report.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Facts — Review the model</h3>
                <p>
                  Examine relevant operating flows, documents, entities and
                  partner roles.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Law — Analyse the rules</h3>
                <p>
                  Apply the relevant definitions, permissions and exemptions to
                  verified facts.
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Outcome — Deliver the report</h3>
                <p>
                  Document conclusions, assumptions, uncertainties and next
                  steps.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Engagement &amp; fees</div>
              <h2>Defined scope. Agreed fee. Written outcome.</h2>
              <p className="lede">
                Regulatory Perimeter Assessment is normally a fixed-fee project.
                The fee depends on the number of entities, jurisdictions,
                business activities, regimes, partner arrangements and the
                required depth of analysis.
              </p>
            </div>
            <div className="price-box">
              <h3>Fixed fee upon scope assessment</h3>
              <p style={{ marginBottom: 0 }}>
                Following an initial discussion, we issue a proposal defining
                the regulatory questions, included work, deliverables, fees,
                timing and any required local specialist input. Detailed
                reliance, assumptions and change-control provisions belong in
                the Engagement Letter.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Service boundaries</div>
              <h2>
                Perimeter assessment is not the same as licensing or compliance
                implementation.
              </h2>
            </div>
            <div className="problem-grid">
              <article className="problem-card" data-no="01">
                <h3>Regulatory Perimeter Assessment</h3>
                <p>
                  Which rules, permissions and exclusions apply to the
                  activities? This page.
                </p>
              </article>
              <article className="problem-card" data-no="02">
                <h3>Licensing Readiness</h3>
                <p>
                  Is an identified applicant prepared to apply for a particular
                  authorisation? Separately scoped.
                </p>
              </article>
              <article className="problem-card" data-no="03">
                <h3>Licensing Application Support</h3>
                <p>
                  Preparation or support for a specific regulatory application.
                  Separate engagement.
                </p>
              </article>
              <article className="problem-card" data-no="04">
                <h3>Regulatory Gap Assessment</h3>
                <p>
                  Where does an existing compliance framework fall short against
                  known requirements? Separate assessment.
                </p>
              </article>
              <article className="problem-card" data-no="05">
                <h3>Legal Opinions &amp; Memoranda</h3>
                <p>
                  Formal opinions, third-party recipients and reliance are
                  separately specified.
                </p>
              </article>
              <article className="problem-card">
                <h3>Compliance Implementation</h3>
                <p>
                  Policies, procedures, controls, remediation or governance
                  frameworks are separate workstreams.
                </p>
              </article>
            </div>
            <div className="callout">
              <strong>Important:</strong> An assessment does not guarantee a
              licence, regulatory approval or a regulator&apos;s interpretation.
              It is based on agreed facts and applicable law. Any third-party
              reliance or formal jurisdiction-specific legal sign-off requires
              express agreement.
            </div>
          </div>
        </section>
        <section className="faq-section" id="faq">
          <div className="container">
            <div className="section-head">
              <div className="section-kicker">Frequently Asked Questions</div>
              <h2>Questions clients ask before commissioning an assessment.</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do we know whether our business needs a licence?</h3>
                <p>
                  We assess your actual activities against the legal
                  definitions, permissions and exemptions in the jurisdiction
                  agreed for review.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can the assessment cover more than one country?</h3>
                <p>
                  Yes, if the relevant jurisdictions, analytical depth,
                  expertise and professional requirements are agreed in advance.
                  We distinguish conclusions for each jurisdiction.
                </p>
              </div>
              <div className="faq-item">
                <h3>
                  Can we operate through a licensed partner rather than obtain
                  our own licence?
                </h3>
                <p>
                  Sometimes. The answer depends on the actual responsibilities,
                  controls and activities performed by each party. A
                  partner&apos;s authorisation does not automatically cover your
                  business.
                </p>
              </div>
              <div className="faq-item">
                <h3>Can the report conclude that no licence is required?</h3>
                <p>
                  Yes, where the law and verified facts support that conclusion,
                  subject to any material conditions, assumptions and
                  uncertainties.
                </p>
              </div>
              <div className="faq-item">
                <h3>What information do you need?</h3>
                <p>
                  Typically a business-model description, entity structure,
                  target markets, customer and transaction flows, partner
                  arrangements and material contracts or operational
                  documentation.
                </p>
              </div>
              <div className="faq-item">
                <h3>What happens after the report?</h3>
                <p>
                  The next step may be licensing readiness, operating-model
                  changes, partner-contract work or a separately commissioned
                  compliance assessment.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container">
            <div className="final-cta-inner">
              <div>
                <div className="section-kicker">
                  Let&apos;s define your regulatory question
                </div>
                <h2>
                  Know where your business stands before choosing the next step.
                </h2>
                <p>
                  Tell us what your business does, where it operates and which
                  regulatory question you need answered. We will define an
                  appropriate scope and next step.
                </p>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact/">
                  Request a Regulatory Perimeter Assessment
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
