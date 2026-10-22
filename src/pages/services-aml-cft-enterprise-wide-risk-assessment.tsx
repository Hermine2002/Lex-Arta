import type { PageMeta } from "./types";
import { resolveImageUrl } from "@/lib/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: PageMeta = {
  path: "/services/aml-cft/enterprise-wide-risk-assessment/",
  title: "Enterprise-Wide Risk Assessment (EWRA) | AML/CFT | LEX ARTA",
  heading: "Enterprise-Wide Risk Assessment (EWRA)",
  description:
    "Enterprise-wide AML/CFT risk assessments with documented methodology, risk evidence and prioritised remediation actions.",
  heroImage: "/images/dc3b43a68cc66eadde3a.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section
          aria-labelledby="page-title"
          className="hero"
          style={{
            backgroundImage: meta.heroImage
              ? `linear-gradient(90deg, var(--hero-wash) 0%, var(--hero-wash) 34%, var(--transparent) 88%), url("${resolveImageUrl(meta.heroImage)}")`
              : undefined,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AML/CFT · BWRA / EWRA</p>
              <h1 id="page-title">Enterprise-Wide Risk Assessment (EWRA)</h1>
              <p className="hero-lead">
                Identify where your business is exposed to money laundering,
                terrorist financing and targeted financial sanctions risk — and
                whether your controls reduce that exposure to an acceptable
                level.
              </p>
              <p className="hero-note">
                We develop and review{" "}
                <strong>Enterprise-Wide Risk Assessments (EWRA)</strong>, also
                commonly called{" "}
                <strong>Business-Wide Risk Assessments (BWRA)</strong>, for
                FinTech, payments, crypto-asset and other regulated businesses.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="/contact/">
                  Discuss Your Risk Assessment
                </a>
                <a
                  className="btn btn-secondary"
                  href="/services/aml-cft/enterprise-wide-risk-assessment/#deliverables"
                >
                  See What You Receive
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Purpose</p>
              <h2>A business-wide view of financial-crime risk.</h2>
            </div>
            <div className="intro-copy">
              <p>
                An EWRA looks at the business as a whole rather than the risk of
                an individual customer. It connects the business model, customer
                base, products and services, transactions, delivery channels and
                geographic exposure to the controls used to manage those risks.
              </p>
              <p>
                The result is a documented view of where risk is concentrated,
                how effectively it is mitigated and what residual risk remains
                for management to accept, reduce or investigate further.
              </p>
              <div
                aria-label="What the assessment tells you"
                className="outcome-panel"
              >
                <div className="outcome-row">
                  <span>01</span>
                  <p>Where the highest financial-crime exposure sits.</p>
                </div>
                <div className="outcome-row">
                  <span>02</span>
                  <p>Which controls materially reduce that exposure.</p>
                </div>
                <div className="outcome-row">
                  <span>03</span>
                  <p>Where weaknesses or disproportionate risk remain.</p>
                </div>
                <div className="outcome-row">
                  <span>04</span>
                  <p>Which issues should be addressed first.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="methodology">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Methodology</p>
              <h2>From inherent risk to residual risk.</h2>
              <p className="lede">
                The assessment follows one clear logic. Each stage builds on the
                previous one, so the final rating can be understood, challenged
                and updated.
              </p>
            </div>
            <div className="process-strip">
              <article className="process-step">
                <span className="num">01</span>
                <h3>Identify Inherent Risk</h3>
                <p>
                  Assess the exposure created by the business before mitigating
                  controls are taken into account.
                </p>
              </article>
              <article className="process-step">
                <span className="num">02</span>
                <h3>Assess Controls</h3>
                <p>
                  Evaluate the relevant policies, procedures, systems and
                  governance measures used to manage the identified risks.
                </p>
              </article>
              <article className="process-step">
                <span className="num">03</span>
                <h3>Determine Residual Risk</h3>
                <p>
                  Determine the level of risk remaining after the effectiveness
                  of relevant controls has been considered.
                </p>
              </article>
              <article className="process-step">
                <span className="num">04</span>
                <h3>Set Priorities</h3>
                <p>
                  Identify where risk acceptance, stronger controls, remediation
                  or further analysis is required.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section components">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Risk Universe</p>
              <h2>What we assess.</h2>
              <p className="lede">
                The risk universe is tailored to the operating model. The
                categories below form the core assessment rather than a fixed
                template.
              </p>
            </div>
            <div className="component-list">
              <article className="component">
                <span className="num">01</span>
                <h3>Customer Risk</h3>
                <p>
                  Customer segments, ownership structures, PEP exposure,
                  customer activity and other characteristics relevant to
                  financial-crime risk.
                </p>
              </article>
              <article className="component">
                <span className="num">02</span>
                <h3>Products &amp; Services</h3>
                <p>
                  Risk created by the products, services and permissions used in
                  the business model, including regulated or higher-risk
                  activities where applicable.
                </p>
              </article>
              <article className="component">
                <span className="num">03</span>
                <h3>Geographic Exposure</h3>
                <p>
                  Customer, counterparty, transaction and operational exposure
                  to jurisdictions presenting different levels or types of risk.
                </p>
              </article>
              <article className="component">
                <span className="num">04</span>
                <h3>Transactions</h3>
                <p>
                  Transaction types, values, volumes, payment flows,
                  cross-border activity and other characteristics relevant to
                  the operating model.
                </p>
              </article>
              <article className="component">
                <span className="num">05</span>
                <h3>Delivery Channels</h3>
                <p>
                  Remote onboarding, digital channels, intermediaries, agents
                  and other ways through which products or services are
                  delivered.
                </p>
              </article>
              <article className="component">
                <span className="num">06</span>
                <h3>Targeted Financial Sanctions</h3>
                <p>
                  Exposure to non-implementation or evasion of targeted
                  financial sanctions, where relevant to the applicable
                  regulatory framework.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="deliverables">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">What You Receive</p>
              <h2>A documented assessment you can actually use.</h2>
              <p className="lede">
                The engagement produces the analysis, methodology and management
                outputs needed to understand the risk position and act on it. It
                is not simply a high-level review or generic risk template.
              </p>
            </div>
            <div className="deliverables-grid">
              <article className="deliverable">
                <span className="num">01</span>
                <h3>BWRA / EWRA Report</h3>
                <p>
                  A documented assessment of the financial-crime risks arising
                  from the business model and operating environment, with clear
                  conclusions.
                </p>
              </article>
              <article className="deliverable">
                <span className="num">02</span>
                <h3>Risk Assessment Methodology</h3>
                <p>
                  Defined risk factors, rating criteria, scoring logic and
                  weighting approach appropriate to the nature and complexity of
                  the business.
                </p>
              </article>
              <article className="deliverable">
                <span className="num">03</span>
                <h3>Inherent Risk Assessment</h3>
                <p>
                  A structured view of exposure before mitigating controls are
                  considered, supported by the relevant risk factors and
                  evidence.
                </p>
              </article>
              <article className="deliverable">
                <span className="num">04</span>
                <h3>Control Effectiveness Assessment</h3>
                <p>
                  An assessment of the controls relied upon to mitigate the
                  identified risks. This is not a substitute for independent
                  audit testing.
                </p>
              </article>
              <article className="deliverable">
                <span className="num">05</span>
                <h3>Residual Risk Profile</h3>
                <p>
                  Documented residual-risk ratings after controls are taken into
                  account, showing where material exposure remains.
                </p>
              </article>
              <article className="deliverable">
                <span className="num">06</span>
                <h3>Risk Matrix</h3>
                <p>
                  A consolidated working matrix linking risk areas, ratings,
                  controls and assessment logic for future review and update.
                </p>
              </article>
              <article className="deliverable">
                <span className="num">07</span>
                <h3>Management Summary</h3>
                <p>
                  A concise summary of principal exposures, residual-risk
                  position and matters requiring management attention.
                </p>
              </article>
              <article className="deliverable">
                <span className="num">08</span>
                <h3>Prioritised Action Plan</h3>
                <p>
                  Where gaps or disproportionate exposures are identified,
                  practical recommendations ranked by materiality and urgency.
                </p>
              </article>
            </div>
            <div className="scope-note">
              <strong>Separate scope:</strong> implementation and remediation
              can be provided as a follow-on engagement where required. The EWRA
              itself does not automatically include redesign of the full AML/CFT
              framework.
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Clear Scope</p>
              <h2>What an EWRA is — and what it is not.</h2>
            </div>
            <div className="comparison-grid">
              <article className="comparison-card">
                <span className="label">Not a customer risk rating</span>
                <h3>Business-wide vs customer-level risk</h3>
                <p>
                  A customer risk assessment evaluates the risk presented by a
                  particular customer or relationship. An EWRA evaluates the
                  financial-crime exposure of the business as a whole and
                  informs the wider control framework.
                </p>
              </article>
              <article className="comparison-card">
                <span className="label">Not an independent AML audit</span>
                <h3>Risk assessment vs control assurance</h3>
                <p>
                  An EWRA identifies and evaluates risk and the effect of
                  mitigating controls. An AML audit independently reviews
                  whether the broader AML/CFT framework is appropriately
                  designed and implemented.
                </p>
                <a
                  className="text-link"
                  href="/services/aml-cft/aml-audit-independent-review/"
                >
                  Explore AML Audit
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container crypto-grid">
            <div>
              <p className="section-kicker">Crypto &amp; Digital Assets</p>
              <h2>EWRA for CASPs and crypto-asset businesses.</h2>
              <p className="lede">
                Crypto-asset business models can create risk factors that
                require additional analysis beyond a conventional
                financial-services assessment.
              </p>
              <p className="hero-note">
                The scope is adapted to the services actually provided, the
                asset and transaction model, customer base, jurisdictions and
                applicable regulatory perimeter.
              </p>
            </div>
            <div className="crypto-panel">
              <div className="crypto-line">
                <span>01</span>
                <p>Hosted and self-hosted wallet exposure</p>
              </div>
              <div className="crypto-line">
                <span>02</span>
                <p>Crypto-asset types, services and transaction flows</p>
              </div>
              <div className="crypto-line">
                <span>03</span>
                <p>Blockchain and counterparty exposure</p>
              </div>
              <div className="crypto-line">
                <span>04</span>
                <p>Cross-border activity and geographic risk</p>
              </div>
              <div className="crypto-line">
                <span>05</span>
                <p>Travel Rule-related processes where relevant</p>
              </div>
              <div className="crypto-line">
                <span>06</span>
                <p>Sanctions and other illicit-finance exposure</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Review Triggers</p>
              <h2>When the assessment should be revisited.</h2>
              <p className="lede">
                The appropriate review cycle depends on the applicable regime
                and the business. Material changes should trigger reassessment
                even where no fixed review date has been reached.
              </p>
            </div>
            <div className="review-grid">
              <article className="review-item">
                <h3>New products or services</h3>
                <p>
                  Including materially different payment, crypto-asset,
                  investment or delivery models.
                </p>
              </article>
              <article className="review-item">
                <h3>New customer segments</h3>
                <p>
                  Where the customer profile or expected activity changes the
                  risk exposure.
                </p>
              </article>
              <article className="review-item">
                <h3>New jurisdictions</h3>
                <p>
                  Expansion into new markets or material changes in geographic
                  exposure.
                </p>
              </article>
              <article className="review-item">
                <h3>New technologies or channels</h3>
                <p>
                  Including significant changes to onboarding, delivery or
                  transaction architecture.
                </p>
              </article>
              <article className="review-item">
                <h3>Material regulatory change</h3>
                <p>
                  Where applicable AML/CFT or sanctions requirements alter the
                  risk framework.
                </p>
              </article>
              <article className="review-item">
                <h3>Material change in risk profile</h3>
                <p>
                  Including acquisitions, restructuring, incidents or changes in
                  transaction patterns.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="regulatory-context">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Regulatory Context</p>
              <h2>Risk-assessment terminology varies by jurisdiction.</h2>
              <p className="lede">
                Enterprise-Wide Risk Assessment (EWRA) is used here as the
                global service name. Some legal and supervisory frameworks use
                terms such as business-wide, institutional or enterprise risk
                assessment; the methodology is mapped to the terminology and
                requirements applicable to the engagement.
              </p>
            </div>
            <div className="regulatory-grid two">
              <article className="regulatory-item">
                <h3>European Union — jurisdiction-specific example</h3>
                <p>
                  For EU-focused engagements, the assessment is mapped to the
                  applicable EU and national AML/CFT framework. The EU-specific
                  service page provides the detailed regulatory treatment and
                  terminology used for EU/Czech work.
                </p>
                <a
                  className="regulatory-ref"
                  href="/services/aml-cft/enterprise-wide-risk-assessment/"
                  rel="noopener"
                  target="_blank"
                >
                  View EU-focused EWRA service
                </a>
              </article>
              <article className="regulatory-item">
                <h3>AMLA — Draft EWRA Guidelines</h3>
                <p>
                  AMLA's 2026 draft Guidelines describe EWRA as a central
                  element of the risk-based approach and focus on risks arising
                  from the business model, customers, products, services and
                  transactions, delivery channels and geographical exposure.
                </p>
                <a
                  className="regulatory-ref"
                  href="https://www.amla.europa.eu/policy/public-consultations/consultation-draft-guidelines-business-wide-risk-assessment_en"
                  rel="noopener"
                  target="_blank"
                >
                  AMLA consultation
                </a>
              </article>
            </div>
            <p className="citation-note">
              Regulation (EU) 2024/1624 applies generally from 10 July 2027. As
              of 15 September 2026, AMLA lists the Article 10(4) EWRA Guidelines
              as draft with the consultation closed; the final Guidelines have
              not yet been published.
            </p>
          </div>
        </section>
        <section className="section components">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Why LEX ARTA</p>
              <h2>Risk assessment built around the operating model.</h2>
              <p className="lede">
                The objective is not to fit the business into a generic matrix.
                The methodology is built around the regulatory perimeter,
                products, customer base and actual transaction model.
              </p>
            </div>
            <div className="component-list">
              <article className="component">
                <span className="num">01</span>
                <h3>Senior-Led Analysis</h3>
                <p>
                  Assessment led by experienced legal and AML/CFT professionals
                  rather than delegated to a template-only process.
                </p>
              </article>
              <article className="component">
                <span className="num">02</span>
                <h3>Regulatory &amp; Operational View</h3>
                <p>
                  Risk factors are connected to governance, onboarding,
                  monitoring, sanctions controls and management decision-making.
                </p>
              </article>
              <article className="component">
                <span className="num">03</span>
                <h3>FinTech &amp; Digital-Asset Focus</h3>
                <p>
                  Experience with cross-border, payments and crypto-asset
                  business models where risk exposure is often multi-layered.
                </p>
              </article>
              <article className="component">
                <span className="num">04</span>
                <h3>Usable Documentation</h3>
                <p>
                  Outputs are structured for internal governance, future
                  updates, audit readiness and regulatory engagement.
                </p>
              </article>
              <article className="component">
                <span className="num">05</span>
                <h3>Clear Scope Boundaries</h3>
                <p>
                  Risk assessment, audit and remediation are kept distinct so
                  the client knows exactly what is included.
                </p>
              </article>
              <article className="component">
                <span className="num">06</span>
                <h3>Cross-Border Perspective</h3>
                <p>
                  Assessment can incorporate multiple jurisdictions and
                  regulatory environments where the business operates across
                  borders.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container intro-grid">
            <div>
              <p className="section-kicker">Scope &amp; Fees</p>
              <h2>Scoped to the complexity of the business.</h2>
            </div>
            <div className="intro-copy">
              <p>
                Fees are quoted after an initial scoping review. The principal
                drivers are the number of products and services, jurisdictions,
                customer segments, transaction complexity, legal-entity or group
                structure and the quality of existing AML/CFT documentation and
                data.
              </p>
              <p>
                Where an existing EWRA or BWRA already exists, the engagement
                can be scoped as an update or independent methodology review
                rather than a full rebuild.
              </p>
              <a className="text-link" href="/contact/">
                Request a Scope
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">FAQ</p>
              <h2>Enterprise-Wide Risk Assessment — FAQ</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>What is a Enterprise-Wide Risk Assessment?</summary>
                <p>
                  An EWRA is a documented assessment of the financial-crime
                  risks to which a business is exposed across its operations. It
                  considers the relevant risk drivers, the controls used to
                  mitigate them and the residual risk that remains.
                </p>
              </details>
              <details>
                <summary>Is a BWRA the same as an EWRA?</summary>
                <p>
                  The terms are often used for the same type of
                  organisation-wide AML/CFT assessment. “Business-Wide Risk
                  Assessment” is used in Article 10 of Regulation (EU)
                  2024/1624; “Enterprise-Wide Risk Assessment” is also widely
                  used in international practice.
                </p>
              </details>
              <details>
                <summary>
                  What is the difference between an EWRA and an AML audit?
                </summary>
                <p>
                  An EWRA assesses the business's financial-crime risk exposure
                  and the effect of mitigating controls. An AML audit
                  independently reviews the broader control framework and
                  provides assurance over design and implementation.
                </p>
              </details>
              <details>
                <summary>
                  Can LEX ARTA update an existing risk assessment?
                </summary>
                <p>
                  Yes. Where a documented assessment already exists, the scope
                  can focus on methodology, risk factors, scoring, control
                  treatment, residual-risk logic and changes in the business or
                  regulatory environment.
                </p>
              </details>
              <details>
                <summary>How often should an EWRA be reviewed?</summary>
                <p>
                  There is no single review frequency that applies to every
                  business in every jurisdiction. The cycle should reflect the
                  applicable regime and risk profile, with reassessment when
                  material changes affect the business's exposure.
                </p>
              </details>
              <details>
                <summary>
                  Does a CASP need a separate crypto-specific methodology?
                </summary>
                <p>
                  Not necessarily a separate document, but the methodology
                  should capture the risk factors relevant to the actual
                  crypto-asset business model. Generic banking risk factors
                  alone may be insufficient.
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
                href="/services/aml-cft/enterprise-wide-risk-assessment/"
                rel="noopener"
                target="_blank"
              >
                See the EU/CZ Enterprise-Wide Risk Assessment service →
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
              <a
                className="is-current"
                href="/services/aml-cft/enterprise-wide-risk-assessment/"
              >
                Enterprise-Wide Risk Assessment
              </a>
              <a
                className=""
                href="/services/aml-cft/aml-audit-independent-review/"
              >
                AML Audit &amp; Independent Review
              </a>
              <a className="" href="/services/aml-cft/aml-gap-analysis/">
                AML Gap Analysis
              </a>
              <a className="" href="/services/aml-cft/aml-remediation/">
                AML Remediation
              </a>
              <a
                className=""
                href="/services/aml-cft/mlro-compliance-officer-support/"
              >
                MLRO &amp; Compliance Officer Support
              </a>
              <a className="" href="/services/aml-cft/aml-cft-training/">
                AML/CFT Training
              </a>
              <a className="" href="/services/aml-cft/aml-policies-procedures/">
                AML Policies &amp; Procedures
              </a>
              <a
                className=""
                href="/services/aml-cft/fraud-financial-crime-risk/"
              >
                Fraud &amp; Financial Crime Risk
              </a>
            </div>
          </div>
        </section>
        <section className="closing">
          <div className="container closing-grid">
            <div>
              <h2>
                Need an EWRA that reflects the business you actually operate?
              </h2>
              <p>
                We can build a new assessment, review an existing methodology or
                update an EWRA following a material change in the business or
                regulatory environment.
              </p>
            </div>
            <a className="btn" href="/contact/">
              Book a Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
