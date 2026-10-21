import type { PageMeta } from "./types";

// Route metadata is required as a named export and is not a React component.
// eslint-disable-next-line react-refresh/only-export-components
export const meta: PageMeta = {
  path: "/services/aml-cft/aml-remediation/",
  title: "AML Remediation | International AML/CFT Compliance | LEX ARTA",
  heading: "AML Remediation",
  description:
    "AML remediation support to convert identified gaps into prioritised controls, ownership and delivery steps.",
  heroImage: null,
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">AML/CFT · Financial Crime Compliance</div>
              <h1>AML Remediation</h1>
              <p>
                Resolve regulatory, audit and internal AML/CFT findings through a structured
                remediation programme focused on corrective action, implementation and defensible
                evidence.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="/contact/">
                  Discuss an AML remediation matter →
                </a>
                <a className="btn-link" href="/services/aml-cft/aml-remediation/#services">
                  Explore the scope
                </a>
              </div>
              <div className="hero-note">
                <span>International scope</span>
                <span>Risk-based approach</span>
                <span>Evidence-focused delivery</span>
              </div>
            </div>
          </div>
        </section>
        <section className="problem">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">The client problem</div>
                <h2>When an AML finding needs more than a policy update</h2>
              </div>
              <p>
                A regulatory or audit finding may point to a broader weakness in governance,
                customer due diligence, risk methodology, monitoring, sanctions controls or
                escalation. Remediation should therefore address the underlying control failure,
                assign responsibility and create evidence that the corrective action has actually
                been implemented.
              </p>
            </div>
            <div className="problem-grid">
              <div className="problem-card">
                <strong>Regulatory findings</strong>
                <p>
                  Deficiencies raised by a supervisory authority or licensing body that require
                  corrective action within a defined timeframe.
                </p>
              </div>
              <div className="problem-card">
                <strong>Audit or review findings</strong>
                <p>
                  Weaknesses identified through internal audit, independent AML review or compliance
                  testing.
                </p>
              </div>
              <div className="problem-card">
                <strong>KYC and control backlogs</strong>
                <p>
                  Known issues in CDD, EDD, customer risk classification, periodic review or
                  operational execution.
                </p>
              </div>
              <div className="problem-card">
                <strong>Governance and evidence gaps</strong>
                <p>
                  Actions may have been taken, but ownership, approval, implementation or closure
                  evidence is incomplete.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="approach">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Our approach</div>
                <h2>From finding to sustainable corrective action</h2>
              </div>
              <p>
                We distinguish the immediate finding from its underlying cause, translate each
                material issue into a corrective action and support implementation through to
                documented closure.
              </p>
            </div>
            <div className="process-row">
              <div className="step">
                <div className="step-num">01</div>
                <h3>Understand</h3>
                <p>
                  Review the finding, evidence, applicable requirements and surrounding control
                  environment.
                </p>
              </div>
              <div className="step">
                <div className="step-num">02</div>
                <h3>Prioritise</h3>
                <p>
                  Assess regulatory significance, financial-crime exposure, dependencies and
                  implementation urgency.
                </p>
              </div>
              <div className="step">
                <div className="step-num">03</div>
                <h3>Plan</h3>
                <p>Define actions, owners, milestones, dependencies and evidence requirements.</p>
              </div>
              <div className="step">
                <div className="step-num">04</div>
                <h3>Implement</h3>
                <p>
                  Support policy, process, methodology, governance and control improvements within
                  scope.
                </p>
              </div>
              <div className="step">
                <div className="step-num">05</div>
                <h3>Evidence</h3>
                <p>
                  Organise the records needed to demonstrate what changed and why the action can be
                  closed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="services" id="services">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">AML remediation services</div>
                <h2>Targeted support around the actual control weakness</h2>
              </div>
              <p>
                The scope can cover an entire AML/CFT framework or selected workstreams only. It is
                tailored to the relevant jurisdiction, business model, regulatory status and
                identified findings.
              </p>
            </div>
            <div className="services-grid">
              <article className="service">
                <div className="n">01</div>
                <h3>Remediation Planning</h3>
                <p>
                  Corrective-action planning, priorities, ownership, dependencies, milestones and
                  closure evidence.
                </p>
              </article>
              <article className="service">
                <div className="n">02</div>
                <h3>Root-Cause Analysis</h3>
                <p>
                  Identify whether the failure relates to governance, methodology, procedures,
                  ownership, data, training or execution.
                </p>
              </article>
              <article className="service">
                <div className="n">03</div>
                <h3>Policies &amp; Procedures</h3>
                <p>
                  Revise or develop documentation where it is incomplete, outdated or disconnected
                  from actual operations.
                </p>
              </article>
              <article className="service">
                <div className="n">04</div>
                <h3>KYC, CDD &amp; EDD Remediation</h3>
                <p>
                  Strengthen onboarding, beneficial ownership, risk classification, periodic review,
                  EDD and related controls.
                </p>
              </article>
              <article className="service">
                <div className="n">05</div>
                <h3>Risk Methodology</h3>
                <p>
                  Review customer-risk and enterprise-wide risk methodologies where weaknesses
                  affect risk identification or residual-risk decisions.
                </p>
              </article>
              <article className="service">
                <div className="n">06</div>
                <h3>Transaction Monitoring Governance</h3>
                <p>
                  Address monitoring governance, investigation, escalation, documentation and
                  management oversight. Technical implementation is separately scoped.
                </p>
              </article>
              <article className="service">
                <div className="n">07</div>
                <h3>Sanctions &amp; PEP Controls</h3>
                <p>
                  Improve screening governance, escalation, decision-making, record keeping and
                  management oversight.
                </p>
              </article>
              <article className="service">
                <div className="n">08</div>
                <h3>Suspicious Activity Escalation</h3>
                <p>
                  Clarify investigation, internal escalation, decision-making, reporting
                  responsibilities and documentation standards.
                </p>
              </article>
              <article className="service">
                <div className="n">09</div>
                <h3>Governance &amp; MLRO Oversight</h3>
                <p>
                  Strengthen accountability, reporting lines, management oversight, committee
                  structures and board visibility.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="deliverables">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Deliverables</div>
                <h2>Evidence that the issue was addressed</h2>
              </div>
              <p>
                Remediation is not complete simply because a new document has been approved. The
                engagement should produce a clear record of what changed, why it changed, who
                approved it and what supports closure.
              </p>
            </div>
            <div className="deliver-grid">
              <div className="deliver">
                <h3>Remediation Action Plan</h3>
                <p>
                  Structured findings, corrective actions, responsibilities, priorities,
                  dependencies and implementation status.
                </p>
              </div>
              <div className="deliver">
                <h3>Revised Compliance Framework</h3>
                <p>
                  Updated policies, procedures, methodologies, governance documents and control
                  requirements within scope.
                </p>
              </div>
              <div className="deliver">
                <h3>Evidence &amp; Closure Pack</h3>
                <p>
                  Organised records supporting implementation and demonstrating how the identified
                  weaknesses were addressed.
                </p>
              </div>
              <div className="deliver">
                <h3>Root-Cause Assessment</h3>
                <p>
                  Analysis of the underlying drivers of material deficiencies where root-cause work
                  forms part of the engagement.
                </p>
              </div>
              <div className="deliver">
                <h3>Management Reporting</h3>
                <p>
                  Clear reporting on material issues, progress, implementation risk and outstanding
                  remediation actions.
                </p>
              </div>
              <div className="deliver">
                <h3>Regulatory Response Support</h3>
                <p>
                  Support with factual and compliance components of remediation responses, subject
                  to jurisdiction and professional scope.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="international" id="international">
          <div className="wrap intl-layout">
            <div>
              <div className="eyebrow">Cross-border remediation</div>
              <h2>One methodology. Jurisdiction-specific requirements.</h2>
              <p>
                There is no universal AML remediation checklist. The correct response depends on
                regulatory status, jurisdiction, sector, business model, customer base, products,
                delivery channels and financial-crime risk profile.
              </p>
              <p>
                For cross-border businesses, LEX ARTA can coordinate remediation across entities or
                markets while separating group standards from local legal and supervisory
                requirements.
              </p>
            </div>
            <div className="intl-box">
              <h3>Our cross-border framework considers</h3>
              <ul>
                <li>group-wide AML/CFT standards;</li>
                <li>national legislation and supervisory expectations;</li>
                <li>sector-specific regulatory requirements;</li>
                <li>FATF-based international standards; and</li>
                <li>entity-specific operational controls.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="compare">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Clear service boundaries</div>
                <h2>Remediation is not the same as assessment or audit</h2>
              </div>
              <p>
                Separating these services helps preserve a clear client journey and, where
                independent assurance is required, protects the necessary objectivity.
              </p>
            </div>
            <div className="compare-list">
              <div className="compare-item">
                <h3>AML Gap Analysis</h3>
                <p>
                  Identifies the difference between the current framework and the required state.
                </p>
              </div>
              <div className="compare-item">
                <h3>AML Remediation</h3>
                <p>
                  Addresses deficiencies that are already known and implements corrective action.
                </p>
              </div>
              <div className="compare-item">
                <h3>Independent AML Review</h3>
                <p>
                  Assesses the design, implementation or effectiveness of controls within an
                  independent-assurance scope.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="why">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Why LEX ARTA</div>
                <h2>Legal and compliance thinking applied to implementation</h2>
              </div>
              <p>
                AML remediation often sits at the intersection of regulatory requirements,
                governance and operational execution. We address those elements together rather than
                treating remediation as document production.
              </p>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>Legal &amp; Compliance Perspective</h3>
                <p>
                  Regulatory requirements, governance and operational controls considered together.
                </p>
              </div>
              <div className="why-card">
                <h3>Practitioner-Led</h3>
                <p>Work shaped by AML, MLRO, compliance, legal and financial-crime experience.</p>
              </div>
              <div className="why-card">
                <h3>Evidence-Focused</h3>
                <p>
                  Attention to how corrective actions can be demonstrated, not only how they are
                  described.
                </p>
              </div>
              <div className="why-card">
                <h3>International Scope</h3>
                <p>
                  Cross-border engagements adapted to the jurisdictions and activities relevant to
                  the client.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="faq" id="faq">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">FAQ</div>
                <h2>AML remediation: common questions</h2>
              </div>
              <p>
                Focused answers to help determine whether remediation — rather than an initial
                assessment — is the right next step.
              </p>
            </div>
            <details open>
              <summary>What is AML remediation?</summary>
              <p>
                AML remediation is the process of addressing identified deficiencies in an AML/CFT
                framework through corrective actions, governance or procedural changes,
                implementation support and documented evidence of completion.
              </p>
            </details>
            <details>
              <summary>Is an AML gap analysis the same as remediation?</summary>
              <p>
                No. A gap analysis identifies deficiencies. Remediation is the work required to
                correct deficiencies that are already known.
              </p>
            </details>
            <details>
              <summary>Can you remediate only one part of our AML framework?</summary>
              <p>
                Yes. The engagement can focus on a defined area such as CDD/EDD, customer risk
                assessment, transaction monitoring governance, sanctions controls, AML policies,
                EWRA or MLRO governance.
              </p>
            </details>
            <details>
              <summary>Can you support historical KYC remediation?</summary>
              <p>
                Yes, subject to scope. Support can cover methodology, risk-based prioritisation,
                file-review standards, governance, quality control and related documentation.
                Large-scale operational review is separately scoped.
              </p>
            </details>
            <details>
              <summary>Do you work internationally?</summary>
              <p>
                Yes. Cross-border remediation is scoped against the legal and regulatory benchmark
                relevant to each jurisdiction rather than a single generic checklist.
              </p>
            </details>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech AML/CFT requirements?{" "}
              <a href="/services/aml-cft/aml-remediation/" rel="noopener" target="_blank">
                See the EU/CZ Regulatory Response &amp; Compliance Remediation service →
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
              <a className="" href="/services/aml-cft/aml-gap-analysis/">
                AML Gap Analysis
              </a>
              <a className="is-current" href="/services/aml-cft/aml-remediation/">
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
        <section className="cta" id="contact">
          <div className="wrap cta-inner">
            <div>
              <div className="eyebrow">AML/CFT · Remediation</div>
              <h2>Turn AML findings into a defensible remediation programme.</h2>
              <p>
                Send us the relevant findings, jurisdiction, deadline and current remediation
                status. We can define the scope and identify the workstreams requiring immediate
                attention.
              </p>
            </div>
            <a className="btn-primary" href="mailto:info@lexarta.co">
              Discuss a matter →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
