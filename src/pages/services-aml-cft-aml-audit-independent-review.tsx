import type { PageMeta } from "./types";

// Page metadata is consumed by the site's page loader, not by React Fast Refresh.
// eslint-disable-next-line react-refresh/only-export-components
export const meta: PageMeta = {
  path: "/services/aml-cft/aml-audit-independent-review/",
  title: "AML Audit & Independent Review | International AML/CFT | LEX ARTA",
  heading: "AML Audit & Independent Review",
  description:
    "Independent AML/CFT audits and reviews of governance, controls, evidence and remediation priorities.",
  heroImage: "/images/8ffecfc4b06d36266dc9.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <img
            alt=""
            aria-hidden="true"
            className="hero-bg"
            loading="lazy"
            src="/images/8ffecfc4b06d36266dc9.webp"
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AML/CFT · Independent Review · Assurance</p>
              <h1>AML Audit &amp; Independent Review</h1>
              <p className="hero-lead">
                {" "}
                Independent AML/CFT review of the framework, controls and governance already in
                place — whether as a full programme audit, a targeted thematic review or a
                validation exercise following remediation.{" "}
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="/book-a-consultation/">
                  Request an AML Audit
                </a>
                <a
                  className="btn btn-secondary"
                  href="/services/aml-cft/aml-audit-independent-review/#scope"
                >
                  Explore Scope
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section overview-section" id="overview">
          <div className="container overview-layout">
            <div className="overview-heading">
              <p className="section-kicker">Independent Review</p>
              <h2>Test whether the AML/CFT framework works in practice.</h2>
            </div>
            <div className="overview-copy">
              <p>
                {" "}
                An AML/CFT audit is an independent review of a compliance programme, assessing
                whether policies, procedures, governance arrangements and controls are appropriately
                designed, implemented and operating effectively against the review criteria agreed
                for the engagement.{" "}
              </p>
              <p>
                {" "}
                The review is tailored to the business model, regulatory framework and risk profile.
                It can support periodic governance, supervisory readiness, licensing and banking due
                diligence, or provide an objective assessment after material changes to the control
                environment.{" "}
              </p>
            </div>
            <div
              aria-label="When organisations commission an AML audit"
              className="overview-triggers"
            >
              <div className="overview-trigger">
                <div className="trigger-num">01</div>
                <p>
                  Periodic independent review of the AML/CFT programme or selected control areas.
                </p>
              </div>
              <div className="overview-trigger">
                <div className="trigger-num">02</div>
                <p>
                  Preparation for supervisory review, licensing, banking or investor diligence.
                </p>
              </div>
              <div className="overview-trigger">
                <div className="trigger-num">03</div>
                <p>
                  Independent validation after material remediation, control changes or previous
                  findings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="formats">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Types of Review</p>
              <h2>Choose the depth of review that matches the objective.</h2>
              <p className="lede">
                {" "}
                AML/CFT reviews can be scoped as a full-programme assessment, a targeted review of
                selected controls or a follow-up review focused on remediation effectiveness.{" "}
              </p>
            </div>
            <div className="formats-grid three">
              <article className="card">
                <span className="num">01</span>
                <h3>Full Programme Audit</h3>
                <p>
                  Independent review of the broader AML/CFT framework, including governance, risk
                  assessment, customer controls, monitoring, reporting, training and record keeping.
                </p>
              </article>
              <article className="card">
                <span className="num">02</span>
                <h3>Targeted / Thematic Review</h3>
                <p>
                  Focused review of a specific component such as CDD and EDD, sanctions screening,
                  transaction monitoring, Travel Rule controls or AML governance.
                </p>
              </article>
              <article className="card">
                <span className="num">03</span>
                <h3>Follow-Up / Remediation Validation</h3>
                <p>
                  Follow-up assessment to test whether previously identified deficiencies were
                  corrected, documented and implemented in practice.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section alt" id="assurance-types">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Types of AML/CFT assurance</p>
              <h2>Understanding different forms of AML/CFT review.</h2>
              <p className="lede">
                The appropriate approach depends on the regulatory framework, the purpose of the
                assessment and the required level of independence.
              </p>
            </div>
            <div className="formats-grid three">
              <article className="card">
                <span className="num">01</span>
                <h3>Internal AML Audit</h3>
                <p>
                  An assessment conducted within an organisation&apos;s internal audit or assurance
                  framework, subject to appropriate organisational independence.
                </p>
              </article>
              <article className="card">
                <span className="num">02</span>
                <h3>External AML Review</h3>
                <p>
                  An assessment performed by an external specialist against agreed regulatory
                  requirements. External status alone does not establish independence.
                </p>
              </article>
              <article className="card">
                <span className="num">03</span>
                <h3>Independent AML/CFT Testing</h3>
                <p>
                  Objective testing by a suitably competent reviewer who meets the applicable
                  independence requirements, whether internal or external.
                </p>
              </article>
            </div>
            <div className="callout">
              <strong>Independence matters.</strong> Before accepting an independent review, LEX
              ARTA assesses potential conflicts arising from previous involvement in AML framework
              development, operational support or remediation. Applicable requirements depend on
              the jurisdiction and regulatory regime.
            </div>
          </div>
        </section>
        <section className="section dark-section" id="scope">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Scope of Review</p>
              <h2>What the audit typically examines.</h2>
              <p className="lede">
                {" "}
                The exact scope depends on the entity, applicable framework and agreed objective,
                but the review usually focuses on the areas below.{" "}
              </p>
            </div>
            <div className="dark-grid">
              <div className="dark-card">
                <span className="num">01</span>
                <h3>Governance &amp; Responsibility</h3>
                <p>
                  Board and senior-management oversight, MLRO arrangements, escalation lines,
                  committee structure and documented accountability.
                </p>
              </div>
              <div className="dark-card">
                <span className="num">02</span>
                <h3>Risk Assessment</h3>
                <p>
                  Whether the EWRA and related methodologies properly reflect customers, products,
                  services, geographies, delivery channels and residual risk.
                </p>
              </div>
              <div className="dark-card">
                <span className="num">03</span>
                <h3>CDD, EDD &amp; Screening</h3>
                <p>
                  Customer onboarding, beneficial-owner checks, higher-risk handling, PEP and
                  sanctions screening, decision rules and evidence quality.
                </p>
              </div>
              <div className="dark-card">
                <span className="num">04</span>
                <h3>Monitoring &amp; Investigation</h3>
                <p>
                  Alert generation, investigation workflows, escalation, internal suspicion
                  processes and supporting records for monitoring outcomes.
                </p>
              </div>
              <div className="dark-card">
                <span className="num">05</span>
                <h3>Policies, Procedures &amp; Records</h3>
                <p>
                  Whether documentation is aligned with practice, sufficiently clear for operational
                  teams and supported by appropriate record keeping.
                </p>
              </div>
              <div className="dark-card">
                <span className="num">06</span>
                <h3>Training &amp; Periodic Review</h3>
                <p>
                  Role-based training, control testing, review cycles and whether the framework
                  supports ongoing compliance improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="process">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Audit Methodology</p>
              <h2>Evidence-led review from scoping to final report.</h2>
              <p className="lede">
                {" "}
                The methodology is proportionate to the engagement. Depending on scope, it combines
                document review, control walkthroughs, interviews, sample testing and review of
                supporting evidence.{" "}
              </p>
            </div>
            <div className="process-grid">
              <article className="process-step">
                <span className="num">01</span>
                <h3>Scope &amp; Review Criteria</h3>
                <p>
                  Define the entities, review period, regulatory criteria, control areas,
                  stakeholders and evidence required for the engagement.
                </p>
              </article>
              <article className="process-step">
                <span className="num">02</span>
                <h3>Document &amp; Control Review</h3>
                <p>
                  Assess policies, risk assessments, governance records, procedures, system outputs
                  and other evidence against the agreed criteria.
                </p>
              </article>
              <article className="process-step">
                <span className="num">03</span>
                <h3>Interviews &amp; Sample Testing</h3>
                <p>
                  Where appropriate, conduct walkthroughs with relevant staff and test selected
                  files, alerts, decisions or control evidence to assess implementation in practice.
                </p>
              </article>
              <article className="process-step">
                <span className="num">04</span>
                <h3>Findings &amp; Final Report</h3>
                <p>
                  Document observations, risk-rated findings and practical recommendations, followed
                  by a management discussion and final written report.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="deliverables">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">What You Receive</p>
              <h2>Clear evidence, findings and priorities for management action.</h2>
            </div>
            <div className="deliverables-grid three">
              <article className="card">
                <span className="num">01</span>
                <h3>Independent Audit Report</h3>
                <p>
                  A structured written assessment of the AML/CFT framework and the control areas
                  covered by the agreed review scope.
                </p>
              </article>
              <article className="card">
                <span className="num">02</span>
                <h3>Risk-Rated Findings</h3>
                <p>
                  Clear findings supported by evidence, with severity or priority indicated so
                  management can distinguish material issues from lower-priority improvements.
                </p>
              </article>
              <article className="card">
                <span className="num">03</span>
                <h3>Prioritised Action Plan</h3>
                <p>
                  Practical recommendations and remediation priorities that can be assigned, tracked
                  and validated through follow-up review where required.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section alt" id="pricing">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Engagement &amp; fees</p>
              <h2>AML Audit &amp; Independent Review — Pricing</h2>
              <p className="lede">
                Select a targeted review, a full-programme audit or follow-up validation. Each
                engagement is scoped in advance and priced according to the business and testing
                required.
              </p>
            </div>
            <div className="price-box">
              <div className="price-label">Full programme</div>
              <h3>Full AML Audit &amp; Independent Review</h3>
              <p>
                One audit service with three starting-price levels depending on operational and
                regulatory complexity.
              </p>
              <div className="price-tiers">
                <div className="price-tier">
                  <h3>Standard AML Audit</h3>
                  <p>Smaller organisations with a standard AML operating model.</p>
                  <div className="price-label">From</div>
                  <div className="price">€6,000</div>
                </div>
                <div className="price-tier">
                  <h3>FinTech / PSP / EMI Audit</h3>
                  <p>Operationally active financial-services and payments businesses.</p>
                  <div className="price-label">From</div>
                  <div className="price">€8,000</div>
                </div>
                <div className="price-tier">
                  <h3>Complex CASP / Custody Audit</h3>
                  <p>Custody, significant transaction volumes or complex monitoring arrangements.</p>
                  <div className="price-label">From</div>
                  <div className="price">€12,500</div>
                </div>
              </div>
              <p style={{ marginBottom: 0 }}>
                Typical scope: governance, risk assessment, CDD/EDD, screening, monitoring,
                policies and procedures, control testing, risk-rated findings and a written action
                plan, as agreed.
              </p>
            </div>
            <div className="comparison-grid" style={{ marginTop: "18px" }}>
              <article className="comparison-card">
                <span className="label">Targeted review</span>
                <h3>Targeted AML Review</h3>
                <p>
                  One defined AML/CFT control area, selected evidence and sample testing, with
                  written findings and recommendations.
                </p>
                <div className="price-label" style={{ marginTop: "14px" }}>
                  From
                </div>
                <div className="price" style={{ fontSize: "2rem" }}>
                  €3,500
                </div>
              </article>
              <article className="comparison-card">
                <span className="label">Follow-up</span>
                <h3>Remediation Validation Review</h3>
                <p>
                  Follow-up testing of previously identified findings, corrective actions,
                  supporting evidence and effectiveness of closure.
                </p>
                <div className="price-label" style={{ marginTop: "14px" }}>
                  From
                </div>
                <div className="price" style={{ fontSize: "2rem" }}>
                  €2,500
                </div>
              </article>
            </div>
            <div className="callout">
              <strong>Scope &amp; fees.</strong> Prices are starting fees per project for a defined
              scope agreed in advance. Final fees depend on the applicable regulatory framework,
              number of entities, business complexity, documentation, customer and transaction
              volumes and required testing depth. The review does not automatically constitute a
              statutory financial audit, regulatory certification or other regulated assurance
              engagement.
            </div>
          </div>
        </section>
        <section className="section" id="regulatory-framework">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Regulatory Framework</p>
              <h2>AML audit requirements across jurisdictions.</h2>
              <p className="lede">
                The review benchmark is agreed for each engagement and mapped to the entity, sector,
                jurisdiction and supervisory context, with FATF standards used as an international
                reference point where relevant.
              </p>
            </div>
            <div className="formats-grid three">
              <article className="card">
                <span className="num">JUR</span>
                <h3>Jurisdiction-Specific Requirements</h3>
                <p>
                  National legislation, sectoral rules and supervisory expectations differ by
                  jurisdiction. The audit scope therefore starts by confirming the legal and
                  regulatory benchmark that applies to the entity and activities.
                </p>
                <p>Applicable national and sectoral AML/CFT framework</p>
              </article>
              <article className="card">
                <span className="num">XBR</span>
                <h3>Cross-Border Framework</h3>
                <p>
                  For groups operating across several markets, the review separates entity-level
                  legal requirements from group standards, governance and shared controls so that
                  findings are attributed to the correct regulatory perimeter.
                </p>
                <p>Entity-level rules · Group standards · Supervisory expectations</p>
              </article>
              <article className="card">
                <span className="num">INT</span>
                <h3>FATF Standards</h3>
                <p>
                  FATF Recommendations provide an international AML/CFT reference framework,
                  including expectations around internal controls, risk-based programmes and
                  independent testing for relevant financial-sector and virtual-asset activities.
                </p>
                <p>FATF Recommendations · Risk-based approach</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="related">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Related AML/CFT Workstreams</p>
              <h2>Move from independent findings to the right next workstream.</h2>
            </div>
            <div className="related-grid">
              <article className="card">
                <span className="num">01</span>
                <h3>AML Gap Analysis</h3>
                <p>
                  Diagnostic assessment of the existing framework against AML/CFT requirements
                  already identified as applicable.
                </p>
                <a className="text-link" href="/services/aml-cft/aml-gap-analysis/">
                  Explore Gap Analysis
                </a>
              </article>
              <article className="card">
                <span className="num">02</span>
                <h3>AML Remediation</h3>
                <p>
                  Corrective work following audit findings, supervisory observations or identified
                  control deficiencies.
                </p>
                <a className="text-link" href="/services/aml-cft/aml-remediation/">
                  Explore Remediation
                </a>
              </article>
              <article className="card">
                <span className="num">03</span>
                <h3>AML Policies &amp; Procedures</h3>
                <p>
                  Design or substantial revision of AML/CFT policies and procedures around the
                  actual operating model and control environment.
                </p>
                <a className="text-link" href="/services/aml-cft/aml-policies-procedures/">
                  Explore Policies &amp; Procedures
                </a>
              </article>
              <article className="card">
                <span className="num">04</span>
                <h3>MLRO &amp; Compliance Officer Support</h3>
                <p>
                  Ongoing senior AML governance, risk oversight and operational compliance support,
                  subject to applicable appointment requirements.
                </p>
                <a className="text-link" href="/services/aml-cft/mlro-compliance-officer-support/">
                  Explore MLRO Support
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="why-artlex">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Why LEX ARTA</p>
              <h2>Independent review with legal, compliance and operational context.</h2>
            </div>
            <div className="why-grid">
              <article className="why-item">
                <span className="num">01</span>
                <h3>Senior-Led Judgement</h3>
                <p>
                  The review is led from a legal and compliance perspective and considers how the
                  framework actually operates in a regulated business.
                </p>
              </article>
              <article className="why-item">
                <span className="num">02</span>
                <h3>Evidence-Focused Review</h3>
                <p>
                  We do not stop at written documentation. The review considers whether governance,
                  controls and records support the business in practice.
                </p>
              </article>
              <article className="why-item">
                <span className="num">03</span>
                <h3>Useful Findings, Not Generic Commentary</h3>
                <p>
                  Findings are framed so that management can act on them, prioritise remediation and
                  explain the outcome to banks, investors or regulators where needed.
                </p>
              </article>
              <article className="why-item">
                <span className="num">04</span>
                <h3>International &amp; Cross-Border Expertise</h3>
                <p>
                  We work across jurisdiction-specific AML/CFT requirements, FATF standards and
                  cross-border regulatory frameworks — with particular experience in FinTech,
                  payments and digital-asset businesses.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Common Questions</p>
              <h2>AML Audit — FAQ</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>What can an AML/CFT audit cover?</summary>
                <p>
                  {" "}
                  A full-programme audit may cover governance, EWRA, policies and procedures,
                  CDD/EDD, sanctions and PEP controls, transaction monitoring, suspicious-activity
                  reporting, MLRO oversight, training, record keeping and previous remediation. A
                  thematic review can focus on a smaller number of control areas.{" "}
                </p>
              </details>
              <details>
                <summary>How is the review tested in practice?</summary>
                <p>
                  {" "}
                  Depending on the agreed scope, the review may combine document analysis,
                  interviews and process walkthroughs with sample-based testing of customer files,
                  alerts, decisions, governance records or other control evidence.{" "}
                </p>
              </details>
              <details>
                <summary>
                  Can the same provider independently audit a framework it helped implement?
                </summary>
                <p>
                  {" "}
                  Independence should be assessed before the engagement begins. Prior involvement
                  does not automatically answer the question; the nature and extent of that
                  involvement, the applicable regulatory requirements and the intended use of the
                  audit must be considered. Where independence cannot be maintained, the independent
                  review should be separated from the implementation work.{" "}
                </p>
              </details>
              <details>
                <summary>Can audit findings be followed by remediation support?</summary>
                <p>
                  {" "}
                  Yes. Findings can move into a separately defined remediation workstream, with
                  actions, owners, evidence and follow-up testing agreed according to the
                  significance of the issues identified.{" "}
                </p>
              </details>
            </div>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech AML/CFT requirements?{" "}
              <a
                href="/services/aml-cft/aml-audit-independent-review/"
                rel="noopener"
                target="_blank"
              >
                See the EU/CZ AML Audit &amp; Compliance Review service →
              </a>
            </p>
          </div>
        </div>
        <section className="lx-aml-menu">
          <div className="lx-aml-menu-shell">
            <p className="lx-aml-kicker">AML/CFT &amp; Financial Crime</p>
            <h2>Explore the AML/CFT service block.</h2>
            <div className="lx-aml-links">
              <a className="" href="/services/aml-cft/">
                Compliance Overview
              </a>
              <a className="" href="/services/aml-cft/enterprise-wide-risk-assessment/">
                Enterprise-Wide Risk Assessment
              </a>
              <a className="is-current" href="/services/aml-cft/aml-audit-independent-review/">
                AML Audit &amp; Independent Review
              </a>
              <a className="" href="/services/aml-cft/aml-gap-analysis/">
                AML Gap Analysis
              </a>
              <a className="" href="/services/aml-cft/aml-remediation/">
                AML Remediation
              </a>
              <a className="" href="/services/aml-cft/mlro-compliance-officer-support/">
                MLRO &amp; Compliance Officer Support
              </a>
              <a className="" href="/services/aml-cft/aml-cft-training/">
                AML/CFT Training
              </a>
              <a className="" href="/services/aml-cft/aml-policies-procedures/">
                AML Policies &amp; Procedures
              </a>
              <a className="" href="/services/aml-cft/fraud-financial-crime-risk/">
                Fraud &amp; Financial Crime Risk
              </a>
            </div>
          </div>
        </section>
        <section className="closing">
          <div className="container closing-grid">
            <div>
              <p className="section-kicker">AML Audit</p>
              <h2>Need an independent AML/CFT review?</h2>
              <p>
                Tell us what entity should be reviewed, what regulatory framework applies and
                whether you need a full programme audit, a thematic review or remediation
                validation.
              </p>
            </div>
            <a className="btn" href="/book-a-consultation/">
              Book a Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
