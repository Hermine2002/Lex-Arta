import type { PageMeta } from "./types";

// Page metadata is consumed by the site's page loader, not by React Fast Refresh.
// eslint-disable-next-line react-refresh/only-export-components
export const meta: PageMeta = {
  path: "/services/aml-cft/aml-cft-training/",
  title: "AML/CFT Training | International Compliance Training | LEX ARTA",
  heading: "AML/CFT Training",
  description:
    "AML/CFT training for teams needing practical, role-relevant understanding of controls, escalation and risk.",
  heroImage: null,
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <div className="eyebrow">AML/CFT · Staff Training &amp; Awareness</div>
              <h1>AML/CFT Training</h1>
              <p>
                Role-based AML/CFT training for boards, management, compliance, KYC and operational
                teams — tailored to the organisation’s risk profile, internal policies, jurisdiction
                and real staff responsibilities.
              </p>
              <div className="hero-actions">
                <a className="btn" href="/contact/">
                  Discuss a training programme →
                </a>
                <a className="text-link" href="/services/aml-cft/aml-cft-training/#programmes">
                  View programmes
                </a>
              </div>
              <div className="proof">
                <span>Role-based content</span>
                <span>Company-specific scenarios</span>
                <span>Documented delivery</span>
              </div>
            </div>
          </div>
        </section>
        <section className="problem">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">The training problem</div>
                <h2>Knowing the rules is not the same as knowing what to do.</h2>
              </div>
              <p>
                AML training becomes ineffective when every employee receives the same generic
                presentation. The practical question is whether people can recognise relevant risk,
                make the right decision, escalate it through the correct route and document what
                they did.
              </p>
            </div>
            <div className="problem-grid">
              <article className="problem-card">
                <div className="n">01</div>
                <h3>Generic annual training</h3>
                <p>
                  Content may satisfy a calendar requirement but still fail to reflect the
                  organisation’s customers, products, risk profile or actual procedures.
                </p>
              </article>
              <article className="problem-card">
                <div className="n">02</div>
                <h3>Wrong content for the role</h3>
                <p>
                  A board member, onboarding analyst and transaction-monitoring investigator do not
                  need the same depth, examples or decision framework.
                </p>
              </article>
              <article className="problem-card">
                <div className="n">03</div>
                <h3>Weak evidence of effectiveness</h3>
                <p>
                  Attendance alone does not show that staff understood their responsibilities or can
                  apply the organisation’s controls in practice.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="outcomes">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Training outcomes</div>
                <h2>Four things staff should be able to do.</h2>
              </div>
              <p>
                Training is designed around the decisions participants actually make. The content,
                examples and level of detail are calibrated to the role rather than built around a
                one-size-fits-all syllabus.
              </p>
            </div>
            <div className="outcome-row">
              <div className="outcome">
                <strong>Recognise</strong>
                <p>
                  Identify relevant customer, transaction, sanctions and behavioural risk
                  indicators.
                </p>
              </div>
              <div className="outcome">
                <strong>Assess</strong>
                <p>
                  Understand what the organisation’s risk-based controls require in the situation.
                </p>
              </div>
              <div className="outcome">
                <strong>Escalate</strong>
                <p>Know when, how and to whom a concern must be referred internally.</p>
              </div>
              <div className="outcome">
                <strong>Document</strong>
                <p>
                  Create an appropriate record of decisions, actions and completion of required
                  steps.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="programmes" id="programmes">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">AML/CFT training programmes</div>
                <h2>Training built around responsibilities, not job titles alone.</h2>
              </div>
              <p>
                Programmes can be delivered as standalone sessions or combined into a structured
                training plan. Final scope depends on the audience, jurisdiction, regulated
                activity, internal policies and identified learning needs.
              </p>
            </div>
            <div className="program-grid">
              <article className="program">
                <div className="tag">Programme 01</div>
                <h3>Core AML/CFT Staff Training</h3>
                <p>
                  Foundational role-relevant training for employees whose work can expose the
                  organisation to money-laundering or terrorist-financing risk.
                </p>
                <ul>
                  <li>AML/CFT fundamentals and risk-based approach</li>
                  <li>customer due diligence and ongoing monitoring</li>
                  <li>PEPs, sanctions and higher-risk situations</li>
                  <li>suspicious activity and internal escalation</li>
                </ul>
              </article>
              <article className="program">
                <div className="tag">Programme 02</div>
                <h3>KYC, CDD &amp; EDD Training</h3>
                <p>
                  Practical training for onboarding, customer-risk and compliance teams responsible
                  for customer due diligence decisions.
                </p>
                <ul>
                  <li>identity and beneficial ownership</li>
                  <li>customer risk classification</li>
                  <li>source of funds and source of wealth</li>
                  <li>enhanced due diligence and escalation</li>
                </ul>
              </article>
              <article className="program">
                <div className="tag">Programme 03</div>
                <h3>Board &amp; Senior Management AML Training</h3>
                <p>
                  Governance-focused training for directors and senior management with
                  responsibility for oversight, risk appetite and AML/CFT accountability.
                </p>
                <ul>
                  <li>governance and management responsibilities</li>
                  <li>oversight of the AML/CFT framework</li>
                  <li>management information and escalation</li>
                  <li>control weaknesses and remediation oversight</li>
                </ul>
              </article>
              <article className="program">
                <div className="tag">Programme 04</div>
                <h3>MLRO &amp; Compliance Team Training</h3>
                <p>
                  Advanced sessions for professionals responsible for framework design, oversight,
                  investigation and escalation.
                </p>
                <ul>
                  <li>risk assessment and control calibration</li>
                  <li>CDD/EDD governance and exceptions</li>
                  <li>transaction-monitoring oversight</li>
                  <li>suspicion assessment and internal decision-making</li>
                </ul>
              </article>
              <article className="program">
                <div className="tag">Programme 05</div>
                <h3>Red Flags, Monitoring &amp; Escalation</h3>
                <p>
                  Case-based training for operational and control teams expected to identify unusual
                  or potentially suspicious activity.
                </p>
                <ul>
                  <li>behavioural and transactional indicators</li>
                  <li>alert review and investigation discipline</li>
                  <li>internal escalation thresholds</li>
                  <li>record keeping and confidentiality</li>
                </ul>
              </article>
              <article className="program">
                <div className="tag">Programme 06</div>
                <h3>Sanctions &amp; PEP Awareness</h3>
                <p>
                  Role-appropriate training on screening, escalation and higher-risk relationships,
                  aligned to the jurisdiction and internal control framework.
                </p>
                <ul>
                  <li>sanctions and PEP concepts</li>
                  <li>screening alerts and false-positive handling</li>
                  <li>escalation and decision records</li>
                  <li>jurisdiction-specific risk factors</li>
                </ul>
              </article>
              <article className="program">
                <div className="tag">Programme 07</div>
                <h3>Periodic Refresher Training</h3>
                <p>
                  Targeted refreshers based on legal change, internal findings, emerging typologies,
                  policy changes or recurring control weaknesses.
                </p>
                <ul>
                  <li>regulatory and policy updates</li>
                  <li>lessons from internal incidents or reviews</li>
                  <li>new red flags and risk scenarios</li>
                  <li>knowledge reinforcement</li>
                </ul>
              </article>
              <article className="program">
                <div className="tag">Programme 08</div>
                <h3>Company-Specific AML/CFT Workshops</h3>
                <p>
                  Custom sessions built around the organisation’s own business model, customer
                  journey, policies, risk assessment and escalation framework.
                </p>
                <ul>
                  <li>internal-policy alignment</li>
                  <li>team-specific scenarios</li>
                  <li>jurisdiction and sector adaptation</li>
                  <li>knowledge checks where agreed</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="design" id="design">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">How the service works</div>
                <h2>From training requirement to documented programme.</h2>
              </div>
              <p>
                For tailored training, we first establish who needs training, what decisions they
                make and which internal controls they are expected to operate. This avoids repeating
                general AML content that participants already know.
              </p>
            </div>
            <div className="design-grid">
              <div className="design-card">
                <h3>01 · Audience &amp; Risk Mapping</h3>
                <p>
                  Identify participant groups, responsibilities, relevant risk exposure and the
                  applicable regulatory context.
                </p>
              </div>
              <div className="design-card">
                <h3>02 · Content Design</h3>
                <p>
                  Build the curriculum around the organisation’s policies, procedures, risk
                  assessment, products and escalation routes.
                </p>
              </div>
              <div className="design-card">
                <h3>03 · Scenario Development</h3>
                <p>
                  Use practical examples and case exercises that reflect the decisions participants
                  encounter in their work.
                </p>
              </div>
              <div className="design-card">
                <h3>04 · Delivery</h3>
                <p>
                  Deliver live online sessions, in-house workshops or a structured combination of
                  modules depending on the team.
                </p>
              </div>
              <div className="design-card">
                <h3>05 · Knowledge Check</h3>
                <p>
                  Where agreed, assess participant understanding through questions, case analysis or
                  short testing.
                </p>
              </div>
              <div className="design-card">
                <h3>06 · Training Record</h3>
                <p>
                  Provide agreed completion records and supporting documentation for the
                  organisation’s internal compliance evidence.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="deliverables">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">What you receive</div>
                <h2>Training that can be operated and evidenced.</h2>
              </div>
              <p>
                Deliverables depend on scope. A tailored engagement can provide the organisation
                with both the training itself and the documentation needed to manage the programme
                internally.
              </p>
            </div>
            <div className="deliver-grid">
              <div className="deliver">
                <h3>Training Plan</h3>
                <p>
                  Defined audience, learning objectives, programme scope and delivery structure.
                </p>
              </div>
              <div className="deliver">
                <h3>Tailored Materials</h3>
                <p>
                  Training materials aligned to the agreed roles, risks and internal control
                  framework.
                </p>
              </div>
              <div className="deliver">
                <h3>Case Exercises</h3>
                <p>
                  Role-relevant scenarios designed to test recognition, judgement and escalation.
                </p>
              </div>
              <div className="deliver">
                <h3>Attendance Record</h3>
                <p>Documented participation for the sessions delivered within the engagement.</p>
              </div>
              <div className="deliver">
                <h3>Knowledge Assessment</h3>
                <p>
                  Optional assessment of understanding where this forms part of the agreed
                  programme.
                </p>
              </div>
              <div className="deliver">
                <h3>Completion Evidence</h3>
                <p>
                  Certificates or other completion records can be issued where agreed; they do not
                  constitute supervisory approval or professional certification.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="audience">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Who we train</div>
                <h2>Role-based training across regulated and obliged businesses.</h2>
              </div>
              <p>
                The relevant audience depends on the organisation’s legal obligations and risk
                profile. Training can be scoped for financial institutions, professional and
                regulated businesses, or other organisations whose staff need structured AML/CFT
                awareness.
              </p>
            </div>
            <div className="audience-grid">
              <div className="audience-card">
                <h3>Banks &amp; Financial Institutions</h3>
                <p>Board, compliance, customer-risk, monitoring and operational teams.</p>
              </div>
              <div className="audience-card">
                <h3>Payments &amp; E-Money</h3>
                <p>
                  Teams working across onboarding, payment flows, risk, monitoring and escalation.
                </p>
              </div>
              <div className="audience-card">
                <h3>Investment &amp; Financial Services</h3>
                <p>
                  Role-specific AML/CFT training aligned to customer, product and distribution
                  risks.
                </p>
              </div>
              <div className="audience-card">
                <h3>Professional &amp; Other Obliged Entities</h3>
                <p>
                  Training adapted to the applicable sector, client relationships and statutory
                  duties.
                </p>
              </div>
              <div className="audience-card">
                <h3>Gaming &amp; Other Regulated Businesses</h3>
                <p>
                  Customer-risk, source-of-funds and suspicious-activity awareness tailored to the
                  business model.
                </p>
              </div>
              <div className="audience-card">
                <h3>International Groups</h3>
                <p>
                  Group-level principles combined with local requirements and entity-specific
                  procedures.
                </p>
              </div>
              <div className="audience-card">
                <h3>Technology-Enabled Financial Businesses</h3>
                <p>
                  Training adapted to digital onboarding, outsourcing, automated controls and
                  operational workflows.
                </p>
              </div>
              <div className="audience-card">
                <h3>Digital-Asset Businesses</h3>
                <p>
                  Where relevant, modules can address sector-specific typologies, transfer risks and
                  applicable transfer-information requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="regulatory" id="regulatory">
          <div className="wrap reg-layout">
            <div>
              <div className="eyebrow">Regulatory context</div>
              <h2>Ongoing, role-appropriate and documented.</h2>
              <p>
                EU AML/CFT rules require relevant staff of obliged entities to receive ongoing
                training so they can recognise activity that may be related to money laundering or
                terrorist financing and understand how to proceed.
              </p>
              <p>
                The applicable legal baseline must still be checked against the organisation’s
                jurisdiction, sector and supervisory framework. LEX ARTA does not treat one EU rule
                as a universal training standard for every international business.
              </p>
            </div>
            <div className="reg-box">
              <h3>European Union</h3>
              <p>
                <strong>Directive (EU) 2015/849, Article 46</strong> requires obliged entities to
                provide special ongoing training programmes for relevant employees.
              </p>
              <p>
                <strong>Regulation (EU) 2024/1624, Article 12</strong>, applying from 10 July 2027,
                requires specific, ongoing training appropriate to employees’ functions or
                activities and the ML/TF risks to which the obliged entity is exposed, and requires
                that training to be duly documented.
              </p>
              <a
                className="source-link"
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32015L0849"
                rel="noopener"
                target="_blank"
              >
                EU Directive source →
              </a>
              <br />
              <a
                className="source-link"
                href="https://eur-lex.europa.eu/eli/reg/2024/1624/oj/eng"
                rel="noopener"
                target="_blank"
              >
                EU AML Regulation source →
              </a>
            </div>
          </div>
        </section>
        <section className="boundary">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Clear service boundaries</div>
                <h2>Training does not replace the underlying AML framework.</h2>
              </div>
              <p> </p>
            </div>
            <div className="boundary-grid">
              <div className="boundary-card">
                <h3>Need to identify deficiencies?</h3>
                <p>
                  An AML Gap Analysis is designed to map current arrangements against the applicable
                  requirements and identify gaps.
                </p>
              </div>
              <div className="boundary-card">
                <h3>Need independent testing?</h3>
                <p>
                  An Independent AML Review assesses the design, implementation or effectiveness of
                  controls within an agreed assurance scope.
                </p>
              </div>
              <div className="boundary-card">
                <h3>Already know what is wrong?</h3>
                <p>
                  AML Remediation converts identified deficiencies into corrective actions,
                  implementation work and closure evidence.
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
                <h2>Training grounded in legal and compliance practice.</h2>
              </div>
              <p>
                The objective is not to produce another generic presentation. Training is designed
                around the control framework participants are actually expected to understand and
                operate.
              </p>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <h3>Role-Based</h3>
                <p>
                  Different audiences receive different depth, examples and decision frameworks.
                </p>
              </div>
              <div className="why-card">
                <h3>Policy-Aligned</h3>
                <p>
                  Custom programmes can be built around the organisation’s own AML/CFT framework and
                  escalation routes.
                </p>
              </div>
              <div className="why-card">
                <h3>Practical</h3>
                <p>Case scenarios focus on recognition, judgement, escalation and documentation.</p>
              </div>
              <div className="why-card">
                <h3>International</h3>
                <p>
                  Training can be adapted to cross-border structures while preserving
                  jurisdiction-specific requirements.
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
                <h2>AML/CFT training: common questions</h2>
              </div>
              <p>
                Concise answers focused on training scope, delivery and evidence rather than
                repeating the broader AML/CFT service pages.
              </p>
            </div>
            <details open>
              <summary>Is AML/CFT training mandatory in the EU?</summary>
              <p>
                For obliged entities, EU rules require ongoing training for relevant employees.
                Directive (EU) 2015/849 Article 46 applies under the current framework, while
                Regulation (EU) 2024/1624 Article 12 introduces directly applicable requirements
                from 10 July 2027. National and sector-specific rules must also be checked.
              </p>
            </details>
            <details>
              <summary>How often should AML training be delivered?</summary>
              <p>
                There is no single EU-wide annual frequency applicable to every business. Training
                should be ongoing and proportionate to the applicable legal framework, staff
                responsibilities, risk profile and material changes. Local rules or supervisory
                expectations may impose additional requirements.
              </p>
            </details>
            <details>
              <summary>Can training be based on our own AML policies?</summary>
              <p>
                Yes. Tailored programmes can use the organisation’s policies, procedures, risk
                assessment, customer journey and escalation routes so that the training reflects the
                controls staff are expected to apply.
              </p>
            </details>
            <details>
              <summary>Can different teams receive different training?</summary>
              <p>
                Yes. Role-based design is central to the service. Board members, compliance staff,
                onboarding teams and operational staff can receive different content and depth
                according to their responsibilities.
              </p>
            </details>
            <details>
              <summary>Do participants receive a certificate?</summary>
              <p>
                A completion certificate can be issued where agreed. It records completion of the
                training delivered by LEX ARTA; it does not constitute regulatory approval or an
                external professional qualification.
              </p>
            </details>
            <details>
              <summary>Can you train international teams?</summary>
              <p>
                Yes. Cross-border programmes can combine group-level standards with
                jurisdiction-specific requirements and entity-specific procedures. Delivery language
                and format are agreed as part of the engagement scope.
              </p>
            </details>
          </div>
        </section>
        <div className="lx-eu-inline">
          <div className="lx-eu-inline-shell">
            <p>
              Interested specifically in EU or Czech AML/CFT requirements?{" "}
              <a href="/services/aml-cft/aml-cft-training/" rel="noopener" target="_blank">
                See the EU/CZ AML/CFT Training service →
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
              <a className="" href="/services/aml-cft/aml-remediation/">
                AML Remediation
              </a>
              <a className="" href="/services/aml-cft/mlro-compliance-officer-support/">
                MLRO &amp; Compliance Officer Support
              </a>
              <a className="is-current" href="/services/aml-cft/aml-cft-training/">
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
              <div className="eyebrow">AML/CFT · Training</div>
              <h2>Build a training programme around the decisions your people actually make.</h2>
              <p>
                Tell us the jurisdiction, participant groups, regulated activity and training
                objective. We can define the appropriate modules, depth and delivery format.
              </p>
            </div>
            <a className="btn" href="/contact/">
              Discuss a training programme →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
