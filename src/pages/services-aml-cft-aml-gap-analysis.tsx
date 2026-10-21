import type { PageMeta } from "./types";
import type { ReactElement } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: PageMeta = {
  path: "/services/aml-cft/aml-gap-analysis/",
  title: "AML Gap Analysis | International AML/CFT Compliance | LEX ARTA",
  heading: "AML Gap Analysis",
  description:
    "AML gap analysis to identify control weaknesses, evidence gaps and a practical remediation workplan.",
  heroImage: "/images/aml-gap-analysis-hero.png",
};

type PageComponent = (() => ReactElement) & { meta: PageMeta };

const Page: PageComponent = function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <img
            alt=""
            className="hero-bg"
            loading="lazy"
            src="/images/aml-gap-analysis-hero.png"
          />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AML/CFT · Regulatory Readiness</p>
              <h1>AML Gap Analysis</h1>
              <p className="hero-lead">
                Find out where your AML/CFT framework falls short — before a licence application,
                bank review, audit or regulatory inspection exposes the gaps.
              </p>
              <p className="hero-sub">
                We compare your current framework with the requirements that apply to the agreed
                scope, identify the deficiencies and show you what to fix first.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="/book-a-consultation/">
                  Request a Gap Analysis
                </a>
                <a
                  className="btn btn-secondary"
                  href="/services/aml-cft/aml-gap-analysis/#deliverables"
                >
                  See What You Receive
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container intro-grid">
            <div className="intro-copy">
              <p className="kicker">The problem we solve</p>
              <h2>
                You may have AML policies and still not know whether the framework is complete.
              </h2>
              <p>
                That uncertainty becomes a problem when a regulator, bank, auditor or licensing
                authority asks how your framework meets the rules that apply to your business.
              </p>
              <p>
                LEX ARTA maps the agreed AML/CFT requirements to what you have in place today,
                identifies what is missing or misaligned and turns the result into a prioritised
                remediation plan.
              </p>
            </div>
            <div className="logic">
              <div className="logic-row">
                <span>01</span>
                <div>
                  <strong>Define the benchmark</strong>
                  <p>
                    Confirm the AML/CFT requirements relevant to the entity, activities,
                    jurisdiction and agreed scope.
                  </p>
                </div>
              </div>
              <div className="logic-row">
                <span>02</span>
                <div>
                  <strong>Map the current state</strong>
                  <p>
                    Review the policies, procedures, governance and control arrangements currently
                    in place.
                  </p>
                </div>
              </div>
              <div className="logic-row">
                <span>03</span>
                <div>
                  <strong>Identify the gaps</strong>
                  <p>
                    Record what is missing, incomplete, inconsistent or misaligned with the agreed
                    benchmark.
                  </p>
                </div>
              </div>
              <div className="logic-row">
                <span>04</span>
                <div>
                  <strong>Prioritise action</strong>
                  <p>
                    Show what should be addressed first and what can follow in later implementation
                    stages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section dark">
          <div className="container">
            <div className="section-head">
              <p className="kicker">When it is useful</p>
              <h2>Use it when you need to know where you stand — before someone else tells you.</h2>
              <p className="lede">
                A gap analysis is most valuable before external scrutiny or a material business
                change, when there is still time to fix the issues in a controlled way.
              </p>
            </div>
            <div className="when-grid">
              <div className="when-card">
                <div className="num">01</div>
                <h3>Preparing for licensing or authorisation</h3>
                <p>
                  Check whether the AML/CFT framework covers the agreed requirements before an
                  application, registration or pre-authorisation review.
                </p>
              </div>
              <div className="when-card">
                <div className="num">02</div>
                <h3>Entering a new jurisdiction</h3>
                <p>
                  Identify the differences between your existing framework and the AML/CFT
                  requirements that apply in the new market.
                </p>
              </div>
              <div className="when-card">
                <div className="num">03</div>
                <h3>Rules or your business model changed</h3>
                <p>
                  See which controls and documents need to change after new rules, products,
                  customer segments, transaction flows or outsourcing arrangements.
                </p>
              </div>
              <div className="when-card">
                <div className="num">04</div>
                <h3>An external review is coming</h3>
                <p>
                  Identify material gaps before a bank, investor, auditor or regulator evaluates the
                  framework.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper" id="scope">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Assessment scope</p>
              <h2>Review the areas that matter to your business.</h2>
              <p className="lede">
                The review can cover the full AML/CFT framework or a defined control area. We agree
                the scope first so the assessment stays proportionate and does not drift into audit
                or remediation.
              </p>
            </div>
            <div className="scope-grid">
              <div className="scope-card">
                <h3>Governance &amp; MLRO oversight</h3>
                <p>
                  Responsibilities, escalation, management oversight, reporting lines and ownership
                  of AML/CFT controls.
                </p>
              </div>
              <div className="scope-card">
                <h3>Business-wide risk assessment</h3>
                <p>
                  Methodology, risk factors, review triggers and alignment between identified risks
                  and the control framework.
                </p>
              </div>
              <div className="scope-card">
                <h3>CDD, KYC &amp; EDD</h3>
                <p>
                  Customer identification, beneficial ownership, risk classification, PEP treatment,
                  source of funds / wealth and enhanced measures.
                </p>
              </div>
              <div className="scope-card">
                <h3>Sanctions, monitoring &amp; reporting</h3>
                <p>
                  Screening, transaction monitoring, internal escalation, suspicious transaction
                  reporting and decision records.
                </p>
              </div>
              <div className="scope-card">
                <h3>Policies, procedures &amp; records</h3>
                <p>
                  Coverage, consistency, approval, version control, record keeping and whether
                  written procedures match the intended operating model.
                </p>
              </div>
              <div className="scope-card">
                <h3>Training, outsourcing &amp; third parties</h3>
                <p>
                  Role-based responsibilities, training coverage, outsourced controls, provider
                  oversight and allocation of accountability.
                </p>
              </div>
              <div className="scope-card">
                <h3>Crypto / CASP &amp; TFR controls</h3>
                <p>
                  Where relevant: wallet-risk controls, blockchain analytics governance, self-hosted
                  address procedures and Travel Rule / TFR workflows.
                </p>
              </div>
              <div className="scope-card">
                <h3>Targeted review</h3>
                <p>
                  A limited engagement can focus on one area — for example CDD/EDD, transaction
                  monitoring, sanctions, BWRA or TFR — without reviewing the full programme.
                </p>
              </div>
            </div>
            <p className="scope-note">
              The final scope depends on the applicable regulatory perimeter, jurisdiction, business
              model and the purpose of the engagement.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">How the assessment works</p>
              <h2>Four steps from requirements to remediation priorities.</h2>
            </div>
            <div className="process">
              <div className="step">
                <div className="num">01</div>
                <h3>Scope</h3>
                <p>
                  Confirm the entity, activities, jurisdiction, control areas and regulatory
                  benchmark.
                </p>
              </div>
              <div className="step">
                <div className="num">02</div>
                <h3>Review</h3>
                <p>
                  Review the agreed documents, procedures and information needed to establish the
                  current state.
                </p>
              </div>
              <div className="step">
                <div className="num">03</div>
                <h3>Assess</h3>
                <p>
                  Compare current arrangements with the benchmark and identify the material
                  deficiencies.
                </p>
              </div>
              <div className="step">
                <div className="num">04</div>
                <h3>Prioritise</h3>
                <p>Rank the gaps and translate them into a practical remediation roadmap.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section dark" id="deliverables">
          <div className="container">
            <div className="section-head">
              <p className="kicker">What you receive</p>
              <h2>A decision-ready package, not a list of observations.</h2>
              <p className="lede">
                You should finish the engagement knowing what is deficient, what matters most and
                what should happen next.
              </p>
            </div>
            <div className="deliver-grid">
              <div className="deliver">
                <div className="num">01</div>
                <h3>Gap Analysis Report</h3>
                <p>
                  A concise assessment of the material deficiencies identified within the agreed
                  scope and their practical implications.
                </p>
              </div>
              <div className="deliver">
                <div className="num">02</div>
                <h3>Requirements &amp; Gap Matrix</h3>
                <p>Requirement → current state → gap → priority → recommended action.</p>
              </div>
              <div className="deliver">
                <div className="num">03</div>
                <h3>Prioritised Findings</h3>
                <p>
                  A clear ranking of the issues by significance and urgency so management can focus
                  resources where they matter most.
                </p>
              </div>
              <div className="deliver">
                <div className="num">04</div>
                <h3>Remediation Roadmap</h3>
                <p>
                  A sequenced plan of corrective actions, dependencies and next steps.
                  Implementation can be scoped separately.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container boundary-grid">
            <div>
              <p className="kicker">Clear service boundaries</p>
              <h2>Gap Analysis tells you what to fix. Audit and remediation do different jobs.</h2>
              <p className="lede">
                We keep the scope clean so you know exactly what you are buying — and when a
                separate service is needed.
              </p>
              <div className="boundary-box">
                <div className="boundary-row">
                  <strong>Included in the core scope</strong>
                  <p>
                    Requirement mapping, current-state comparison, identified deficiencies,
                    prioritisation and remediation roadmap.
                  </p>
                </div>
                <div className="boundary-row">
                  <strong>Separate if needed</strong>
                  <p>
                    Independent AML audit or assurance, policy and procedure drafting, remediation
                    implementation, transaction-monitoring calibration or TFR implementation.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="kicker">Related services</p>
              <div className="service-links">
                <a className="service-link" href="/services/aml-cft/aml-audit-independent-review/">
                  <span>Need assurance?</span>
                  <strong>AML Audit &amp; Compliance Review →</strong>
                </a>
                <a className="service-link" href="/services/aml-cft/aml-policies-procedures/">
                  <span>Need documents built or updated?</span>
                  <strong>AML Policies &amp; Procedures →</strong>
                </a>
                <a className="service-link" href="/services/aml-cft/aml-remediation/">
                  <span>Need the gaps fixed?</span>
                  <strong>AML Remediation →</strong>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container sector-grid">
            <div>
              <p className="kicker">FinTech · Payments · Crypto-assets</p>
              <h2>Generic AML checklists miss how your business actually works.</h2>
              <p className="lede">
                For CASPs, payment businesses and technology-led financial services, the review can
                follow the actual customer journey, transaction flows and control dependencies.
              </p>
            </div>
            <div className="sector-list">
              <div className="sector-item">
                <span>01</span>
                <p>Crypto-asset customer, wallet and counterparty risk controls</p>
              </div>
              <div className="sector-item">
                <span>02</span>
                <p>Blockchain analytics governance and escalation arrangements</p>
              </div>
              <div className="sector-item">
                <span>03</span>
                <p>Self-hosted address procedures and risk-based measures</p>
              </div>
              <div className="sector-item">
                <span>04</span>
                <p>Travel Rule / TFR data collection, transmission and exception workflows</p>
              </div>
              <div className="sector-item">
                <span>05</span>
                <p>Transaction-monitoring coverage for the actual product and transaction model</p>
              </div>
              <div className="sector-item">
                <span>06</span>
                <p>Cross-border and sanctions controls relevant to the business</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper" id="fees">
          <div className="container fee-grid">
            <div className="price-box">
              <div className="price-label">Starting fee</div>
              <div className="price">From €3,500</div>
              <p>
                For a defined AML regulatory gap-analysis scope. Full-framework, CASP, multi-entity
                or multi-jurisdiction reviews are quoted after scoping.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="/book-a-consultation/">
                  Request Scope &amp; Fee
                </a>
              </div>
            </div>
            <div>
              <p className="kicker">What affects the fee</p>
              <h2>A clear starting price, with the final fee based on scope.</h2>
              <div className="factor-list">
                <div className="factor">
                  <strong>Jurisdiction and regulatory perimeter</strong> — which rules and
                  requirements must be mapped.
                </div>
                <div className="factor">
                  <strong>Number of entities and control areas</strong> — targeted review versus
                  broader framework assessment.
                </div>
                <div className="factor">
                  <strong>Documentation volume</strong> — the amount of material needed to establish
                  the current state.
                </div>
                <div className="factor">
                  <strong>Business-model complexity</strong> — products, customer types, transaction
                  flows, outsourcing and cross-border exposure.
                </div>
                <div className="factor">
                  <strong>Crypto / TFR complexity</strong> — where wallet models, blockchain
                  analytics or transfer workflows form part of the scope.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Regulatory baseline</p>
              <h2>We assess against the rules that actually apply to your business.</h2>
              <p className="lede">
                For EU engagements, the current-state benchmark can include applicable national
                AML/CFT law, relevant supervisory requirements and directly applicable EU rules.
                Future-state readiness is treated separately.
              </p>
            </div>
            <div className="reg-grid">
              <div className="reg-card">
                <div className="tag">Current EU rule</div>
                <h3>EU Transfer of Funds Regulation — where applicable</h3>
                <p>
                  Regulation (EU) 2023/1113 applies from 30 December 2024. Where relevant, TFR
                  controls can form part of a CASP or crypto-focused gap analysis.
                </p>
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1113"
                  rel="noopener"
                >
                  EUR-Lex →
                </a>
              </div>
              <div className="reg-card">
                <div className="tag">Future-state readiness</div>
                <h3>EU AML Regulation — where applicable</h3>
                <p>
                  The AMLR applies from 10 July 2027 for most obliged entities. Readiness for the
                  new framework can be assessed separately without presenting future requirements as
                  the current legal baseline.
                </p>
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1624"
                  rel="noopener"
                >
                  EUR-Lex →
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Why LEX ARTA</p>
              <h2>A gap analysis should end with decisions, not more uncertainty.</h2>
            </div>
            <div className="why-grid">
              <div className="why">
                <div className="num">01</div>
                <h3>Senior-led AML judgement</h3>
                <p>
                  Work is led from a legal and compliance perspective with practical MLRO experience
                  and a focus on material regulatory issues.
                </p>
              </div>
              <div className="why">
                <div className="num">02</div>
                <h3>FinTech, payments &amp; crypto context</h3>
                <p>
                  The review can incorporate payment flows, CASP models, TFR workflows and
                  technology-dependent controls where relevant.
                </p>
              </div>
              <div className="why">
                <div className="num">03</div>
                <h3>Actionable, scope-controlled output</h3>
                <p>
                  You receive priorities and a remediation roadmap, while audit, drafting and
                  implementation remain clearly separate services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <p className="kicker">FAQ</p>
              <h2>AML Gap Analysis — common questions.</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>What is an AML regulatory gap analysis?</summary>
                <p>
                  It is a diagnostic comparison between the AML/CFT framework currently in place and
                  the requirements relevant to the agreed scope. It identifies deficiencies,
                  prioritises them and translates them into a remediation roadmap.
                </p>
              </details>
              <details>
                <summary>How is it different from an AML audit?</summary>
                <p>
                  A gap analysis is diagnostic: it identifies the distance between current state and
                  required state. An AML audit is a separate assurance or review engagement that may
                  test control design, implementation and operating effectiveness.
                </p>
              </details>
              <details>
                <summary>Can the review cover only one AML/CFT area?</summary>
                <p>
                  Yes. A targeted engagement can focus on selected areas such as CDD/EDD, sanctions,
                  transaction monitoring, BWRA or Travel Rule/TFR controls.
                </p>
              </details>
              <details>
                <summary>Can you review a CASP or crypto-specific AML framework?</summary>
                <p>
                  Yes. The scope can include crypto-specific customer and wallet-risk controls,
                  blockchain-analytics governance, self-hosted address procedures and TFR workflows.
                </p>
              </details>
              <details>
                <summary>Do you also fix the gaps?</summary>
                <p>
                  Not within the core gap-analysis scope. Policy drafting, control implementation
                  and remediation support can be scoped separately after the diagnostic phase.
                </p>
              </details>
              <details>
                <summary>How much does the service cost?</summary>
                <p>
                  LEX ARTA pricing starts from €3,500 for a defined AML gap-analysis scope. Final
                  pricing depends on the regulatory perimeter, jurisdiction, number of entities and
                  control areas, documentation volume and business-model complexity.
                </p>
              </details>
            </div>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech AML/CFT requirements?{" "}
              <a href="/services/aml-cft/aml-gap-analysis/">
                See the EU/CZ AML Gap Analysis service →
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
              <a className="" href="/services/aml-cft/aml-audit-independent-review/">
                AML Audit &amp; Independent Review
              </a>
              <a className="is-current" href="/services/aml-cft/aml-gap-analysis/">
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
              <p className="kicker">AML/CFT Regulatory Readiness</p>
              <h2>Know the gaps before they become findings.</h2>
              <p>
                See what is missing, understand what matters most and leave with a clear plan for
                what to do next.
              </p>
            </div>
            <a className="btn" href="/book-a-consultation/">
              Request a Gap Analysis
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

Page.meta = meta;

export default Page;
