import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/aml-cft/",
  title:
    "AML/CFT & Financial Crime Compliance | International Advisory | LEX ARTA",
  heading: "AML/CFT & Financial Crime Compliance",
  description:
    "AML/CFT advisory, audits, risk assessments, remediation and senior compliance support for regulated businesses.",
  heroImage: "/images/c4bb7fa24d7def8af48d.webp",
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
            src="/images/c4bb7fa24d7def8af48d.webp"
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                AML/CFT · Financial Crime · Regulatory Compliance
              </p>
              <h1>AML/CFT &amp; Financial Crime Compliance</h1>
              <p className="hero-lead">
                {" "}
                Risk-based AML/CFT advisory for FinTech, payments, digital
                assets and other regulated or higher-risk businesses — from
                independent review and enterprise-wide risk assessment to
                remediation, MLRO support, Travel Rule and training.{" "}
              </p>
              <p className="hero-note">
                {" "}
                The scope is built around the applicable regulatory framework
                and the way the business actually operates — its customers,
                products, jurisdictions, transaction flows and control
                environment.{" "}
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="/book-a-consultation/">
                  Discuss AML/CFT Support
                </a>
                <a
                  className="btn btn-secondary"
                  href="/services/aml-cft/#services"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="introduction">
          <div className="container intro-grid">
            <div>
              <p className="section-kicker">AML/CFT Compliance</p>
              <h2>
                From regulatory obligations to an operational control framework.
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                {" "}
                Effective AML/CFT compliance goes beyond maintaining policies
                and procedures. Regulated and higher-risk businesses need a
                risk-based framework that reflects their actual customers,
                products, services, delivery channels, geographic exposure and
                financial-crime risks — and that can be demonstrated through
                effective governance, due diligence, monitoring, escalation,
                reporting and oversight.{" "}
              </p>
              <p>
                {" "}
                LEX ARTA supports businesses in designing, strengthening and
                implementing AML/CFT frameworks that are proportionate to their
                regulatory perimeter and operating model. Our approach combines
                legal and regulatory requirements with practical implementation,
                clear accountability and evidence that controls operate
                effectively.{" "}
              </p>
              <div
                aria-label="When AML/CFT support is particularly relevant"
                className="trigger-list"
              >
                <div className="trigger">
                  <div className="trigger-num">01</div>
                  <p>
                    Before licensing, authorisation or a material change to the
                    business model.
                  </p>
                </div>
                <div className="trigger">
                  <div className="trigger-num">02</div>
                  <p>
                    When AML/CFT controls, documentation or governance need to
                    be strengthened or aligned across teams and jurisdictions.
                  </p>
                </div>
                <div className="trigger">
                  <div className="trigger-num">03</div>
                  <p>
                    When management, a bank, investor, auditor or supervisory
                    authority requires clearer evidence that AML/CFT controls
                    are operating effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section services-wrap" id="services">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Our AML/CFT Compliance Services</p>
              <h2>Nine focused workstreams, each with a clear purpose.</h2>
              <p className="lede">
                {" "}
                Use the service that matches the problem you are trying to
                solve. Independent assurance, risk assessment, remediation,
                ongoing AML leadership and implementation support are connected
                — but they are not the same engagement.{" "}
              </p>
            </div>
            <div className="services-grid">
              <article className="service-card">
                <div className="service-num">01</div>
                <h3>Enterprise-Wide Risk Assessment</h3>
                <p>
                  Assess inherent ML/TF and financial-crime risk, controls and
                  residual risk across the operating model.
                </p>
                <a
                  className="text-link"
                  href="/services/aml-cft/enterprise-wide-risk-assessment/"
                >
                  Explore EWRA
                </a>
              </article>
              <article className="service-card">
                <div className="service-num">02</div>
                <h3>AML Audit &amp; Independent Review</h3>
                <p>
                  Independent assessment of AML/CFT governance, control design,
                  implementation, effectiveness and evidence.
                </p>
                <a
                  className="text-link"
                  href="/services/aml-cft/aml-audit-independent-review/"
                >
                  Explore Audit
                </a>
              </article>
              <article className="service-card">
                <div className="service-num">03</div>
                <h3>AML Gap Analysis</h3>
                <p>
                  Compare the current framework with the confirmed requirements
                  applicable to the entity, activities and jurisdiction.
                </p>
                <a
                  className="text-link"
                  href="/services/aml-cft/aml-gap-analysis/"
                >
                  Explore Gap Analysis
                </a>
              </article>
              <article className="service-card">
                <div className="service-num">04</div>
                <h3>AML Remediation</h3>
                <p>
                  Turn identified findings into structured corrective actions,
                  implementation workstreams and closure evidence.
                </p>
                <a
                  className="text-link"
                  href="/services/aml-cft/aml-remediation/"
                >
                  Explore Remediation
                </a>
              </article>
              <article className="service-card">
                <div className="service-num">05</div>
                <h3>MLRO &amp; Compliance Officer Support</h3>
                <p>
                  Senior AML/CFT support for internal teams, fractional
                  oversight and formal roles where permitted.
                </p>
                <a
                  className="text-link"
                  href="/services/aml-cft/mlro-compliance-officer-support/"
                >
                  Explore MLRO Support
                </a>
              </article>
              <article className="service-card">
                <div className="service-num">06</div>
                <h3>AML/CFT Training</h3>
                <p>
                  Role-based training for boards, management, compliance, KYC
                  and operational teams.
                </p>
                <a
                  className="text-link"
                  href="/services/aml-cft/aml-cft-training/"
                >
                  Explore Training
                </a>
              </article>
              <article className="service-card">
                <div className="service-num">07</div>
                <h3>AML Policies &amp; Procedures</h3>
                <p>
                  Jurisdiction-specific policies and operational procedures
                  built around the actual business model and risk profile.
                </p>
                <a
                  className="text-link"
                  href="/services/aml-cft/aml-policies-procedures/"
                >
                  Explore Policies
                </a>
              </article>
              <article className="service-card">
                <div className="service-num">08</div>
                <h3>Fraud &amp; Financial Crime Risk</h3>
                <p>
                  Assessment and control support across fraud, financial-crime
                  typologies, governance and operational risk.
                </p>
                <a
                  className="text-link"
                  href="/services/aml-cft/fraud-financial-crime-risk/"
                >
                  Explore Financial Crime Risk
                </a>
              </article>
              <article className="service-card">
                <div className="service-num">09</div>
                <h3>Compliance Overview</h3>
                <p>
                  A single entry point to scope the AML/CFT and financial-crime
                  workstream appropriate to the business.
                </p>
                <a className="text-link" href="/services/aml-cft/">
                  View Overview
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="who-needs-aml">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Who We Work With</p>
              <h2>
                AML/CFT support for regulated, cross-border and higher-risk
                business models.
              </h2>
              <p className="lede">
                {" "}
                The applicable obligations and control design depend on the
                entity, sector, jurisdictions, activities and risk profile. The
                engagement is scoped around that regulatory and operating
                context.{" "}
              </p>
            </div>
            <div className="who-grid">
              <div className="who-item">
                <h3>CASPs &amp; Digital-Asset Businesses</h3>
                <p>
                  Crypto exchanges, custody and wallet businesses, brokers,
                  transfer providers and other digital-asset businesses subject
                  to AML/CFT obligations.
                </p>
              </div>
              <div className="who-item">
                <h3>FinTech, Payments &amp; E-Money</h3>
                <p>
                  Payment institutions, EMIs, PSPs and FinTech businesses where
                  AML controls interact with customer onboarding, payment flows
                  and financial-crime monitoring.
                </p>
              </div>
              <div className="who-item">
                <h3>Financial &amp; Investment Services</h3>
                <p>
                  Financial institutions, investment firms, brokers and other
                  regulated businesses requiring proportionate AML/CFT
                  governance and control frameworks.
                </p>
              </div>
              <div className="who-item">
                <h3>International &amp; Cross-Border Businesses</h3>
                <p>
                  Groups operating across jurisdictions that need to coordinate
                  entity-level responsibilities, local rules and group-wide
                  AML/CFT governance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section components" id="programme-components">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Core Components</p>
              <h2>What an operational AML/CFT framework needs to connect.</h2>
              <p className="lede">
                {" "}
                The exact control set depends on the business and applicable
                law. In practice, the framework should connect risk assessment,
                governance, customer controls, monitoring, reporting and
                assurance rather than treat them as separate documents.{" "}
              </p>
            </div>
            <div className="component-list">
              <div className="component">
                <span className="num">01</span>
                <h3>Risk Assessment</h3>
                <p>
                  Business-wide and customer-level risk methodologies aligned to
                  the products, customers, jurisdictions and transaction
                  profile.
                </p>
              </div>
              <div className="component">
                <span className="num">02</span>
                <h3>Governance &amp; Accountability</h3>
                <p>
                  Clear ownership, escalation, management oversight, MLRO
                  responsibilities and evidence of key AML decisions.
                </p>
              </div>
              <div className="component">
                <span className="num">03</span>
                <h3>CDD, EDD &amp; Screening</h3>
                <p>
                  Customer and beneficial-owner due diligence, higher-risk
                  handling, PEP and sanctions controls, and documented decision
                  rules.
                </p>
              </div>
              <div className="component">
                <span className="num">04</span>
                <h3>Monitoring &amp; Escalation</h3>
                <p>
                  Transaction and behavioural monitoring, alert governance,
                  investigation workflows and escalation of higher-risk
                  activity.
                </p>
              </div>
              <div className="component">
                <span className="num">05</span>
                <h3>Suspicion Reporting &amp; Records</h3>
                <p>
                  Internal escalation, STR/SAR processes where applicable,
                  record keeping and evidence supporting regulatory decisions.
                </p>
              </div>
              <div className="component">
                <span className="num">06</span>
                <h3>Training, Testing &amp; Improvement</h3>
                <p>
                  Role-based training, control testing, periodic review,
                  remediation and management reporting to keep the framework
                  effective.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="crypto-aml">
          <div className="container crypto-grid">
            <div>
              <p className="section-kicker">Digital Assets</p>
              <h2>AML/CFT compliance for crypto-asset businesses.</h2>
              <p className="lede">
                {" "}
                Digital-asset businesses need AML/CFT controls that reflect the
                actual service model, custody structure, customer journey,
                wallet exposure and transaction flows. The framework should
                integrate blockchain-related risk indicators with the wider
                customer-risk, sanctions, monitoring and escalation
                environment.{" "}
              </p>
              <p className="lede">
                {" "}
                Where a CASP or other digital-asset business is also subject to
                licensing, Travel Rule or other regulatory requirements, those
                workstreams should be coordinated without turning the AML
                framework into a substitute for the relevant licensing or
                specialist compliance engagement.{" "}
              </p>
              <a className="text-link" href="/services/licensing/mica-casp/">
                Explore MiCA / CASP Licensing
              </a>
            </div>
            <div className="crypto-panel">
              <div className="crypto-line">
                <span>01</span>
                <p>
                  Customer, beneficial-owner and wallet-related risk assessment
                  appropriate to the business model.
                </p>
              </div>
              <div className="crypto-line">
                <span>02</span>
                <p>
                  Transaction-monitoring and blockchain-risk controls connected
                  to escalation and suspicious-activity processes.
                </p>
              </div>
              <div className="crypto-line">
                <span>03</span>
                <p>
                  Travel Rule / TFR controls for in-scope crypto-asset
                  transfers, including self-hosted-address procedures where
                  applicable.
                </p>
              </div>
              <div className="crypto-line">
                <span>04</span>
                <p>
                  Governance, policies, evidence and management oversight
                  capable of supporting licensing, banking and supervisory
                  scrutiny.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="regulatory-framework">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Regulatory Framework</p>
              <h2>
                Jurisdiction-specific and international AML/CFT requirements.
              </h2>
              <p className="lede">
                AML/CFT obligations depend on the entity, sector and
                jurisdiction. Cross-border programmes should distinguish local
                legal and supervisory requirements from group-wide standards and
                shared controls.
              </p>
            </div>
            <div className="regulatory-grid">
              <article className="regulatory-item">
                <h3>Jurisdiction-Specific Requirements</h3>
                <p>
                  National AML/CFT legislation, sectoral rules and supervisory
                  expectations form the primary benchmark for each in-scope
                  entity and activity.
                </p>
                <a
                  className="regulatory-ref"
                  href="https://eur-lex.europa.eu/eli/dir/2024/1640/oj/eng"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Directive (EU) 2024/1640
                </a>
              </article>
              <article className="regulatory-item">
                <h3>EU AML Package</h3>
                <p>
                  {" "}
                  Regulation (EU) 2024/1624 applies from 10 July 2027 and
                  introduces a directly applicable EU AML rulebook. AMLA will
                  also reshape EU-level supervision, including direct
                  supervision of selected high-risk cross-border financial
                  entities from 2028.{" "}
                </p>
                <a
                  className="regulatory-ref"
                  href="https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Regulation (EU) 2024/1624
                </a>
              </article>
              <article className="regulatory-item">
                <h3>FATF Standards</h3>
                <p>
                  {" "}
                  FATF provides the international risk-based framework for
                  AML/CFT, including standards relevant to enterprise risk
                  assessment, internal controls and virtual-asset activities.
                  Jurisdiction-specific implementation still determines the
                  legal obligations of the individual business.{" "}
                </p>
                <a
                  className="regulatory-ref"
                  href="https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  FATF Recommendations
                </a>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="why-artlex">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Why LEX ARTA</p>
              <h2>
                AML/CFT compliance built around the operating model — not a
                template library.
              </h2>
              <p className="lede">
                {" "}
                AML/CFT work is led by practitioners with legal, compliance,
                MLRO and financial-crime experience. The focus is on frameworks
                that can be implemented, evidenced and maintained in
                practice.{" "}
              </p>
            </div>
            <div className="why-grid">
              <article className="why-item">
                <div className="why-num">01</div>
                <h3>Senior-Led AML Judgement</h3>
                <p>
                  AML/CFT engagements are led from a legal and compliance
                  perspective, supported by practical experience in MLRO and
                  Compliance Officer responsibilities, financial-crime
                  investigations and regulated-business governance.
                </p>
              </article>
              <article className="why-item">
                <div className="why-num">02</div>
                <h3>Operational, Not Template-Led</h3>
                <p>
                  Policies, risk assessments and controls are developed around
                  the actual customer journey, products, services, systems,
                  geographic exposure and decision-making structure of the
                  business.
                </p>
              </article>
              <article className="why-item">
                <div className="why-num">03</div>
                <h3>Evidence-Ready Delivery</h3>
                <p>
                  Documentation and controls are structured so management can
                  explain and evidence how the AML/CFT framework operates during
                  licensing, banking due diligence, independent review or
                  supervisory scrutiny.
                </p>
              </article>
              <article className="why-item">
                <div className="why-num">04</div>
                <h3>Cross-Border &amp; Digital-Asset Expertise</h3>
                <p>
                  EU AML/CFT requirements are considered together with
                  jurisdiction-specific rules and the operational realities of
                  FinTech, payments, crypto-assets and other cross-border
                  regulated business models.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">Common Questions</p>
              <h2>AML/CFT Compliance — FAQ</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>
                  What is the difference between an AML gap analysis and an AML
                  audit?
                </summary>
                <p>
                  {" "}
                  A gap analysis is diagnostic: it compares the existing
                  framework against requirements already identified as
                  applicable and shows what is missing or insufficient. An
                  independent AML audit is an assurance-focused review of the
                  framework and controls already in place, including whether
                  they are appropriately designed, implemented and operating
                  effectively within the agreed scope.{" "}
                </p>
              </details>
              <details>
                <summary>Can LEX ARTA act as an outsourced MLRO?</summary>
                <p>
                  {" "}
                  The available engagement model depends on the jurisdiction,
                  entity type and regulatory framework. Some regimes permit an
                  external appointment; others require the MLRO or AML officer
                  to meet specific employment, residence, local-presence or
                  approval conditions. We assess those requirements before
                  proposing a formal appointment or another outsourced /
                  fractional support model.{" "}
                </p>
              </details>
              <details>
                <summary>
                  Can AML/CFT work be combined with licensing or regulatory
                  remediation?
                </summary>
                <p>
                  {" "}
                  Yes, where the workstreams are connected. For example, AML
                  readiness may form part of a licensing project, while
                  identified deficiencies may move into a separate remediation
                  engagement. The scope should still distinguish independent
                  review, diagnostic assessment, implementation and ongoing AML
                  support so that responsibilities remain clear.{" "}
                </p>
              </details>
              <details>
                <summary>
                  Do you support AML/CFT compliance outside the EU?
                </summary>
              </details>
            </div>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech AML/CFT requirements?{" "}
              <a href="/services/">
                See the EU/CZ-focused LEX ARTA regulatory and AML/CFT services →
              </a>
            </p>
          </div>
        </div>
        <section className="lx-aml-menu">
          <div className="lx-aml-menu-shell">
            <p className="lx-aml-kicker">AML/CFT &amp; Financial Crime</p>
            <h2>Explore the AML/CFT service block.</h2>
            <div className="lx-aml-links">
              <a className="is-current" href="/services/aml-cft/">
                Compliance Overview
              </a>
              <a
                className=""
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
              <p className="section-kicker">AML/CFT Support</p>
              <h2>Need to strengthen an AML/CFT framework?</h2>
              <p>
                Tell us where the business operates, what regulatory framework
                applies and what problem you need to solve. We will define the
                appropriate AML/CFT workstream and scope.
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
