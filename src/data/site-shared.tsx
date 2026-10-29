/* eslint-disable react-refresh/only-export-components */
/* @refresh reset */

import { renderToStaticMarkup } from "react-dom/server";
import type { NavGroup } from "@/lib/site-settings";

export const groups: NavGroup[] = [
  {
    label: "Legal & Regulatory",
    href: "/services/legal-regulatory/",
    links: [
      {
        label: "International Legal & FinTech Advisory",
        href: "/services/legal-regulatory/international-legal-regulatory/",
      },
      {
        label: "Commercial Contracts",
        href: "/services/legal-regulatory/commercial-contracts/",
      },
      {
        label: "Legal Opinions & Regulatory Memoranda",
        href: "/services/legal-regulatory/legal-opinions-regulatory-memoranda/",
      },
      {
        label: "Legal & Regulatory Due Diligence",
        href: "/services/legal-regulatory/legal-regulatory-due-diligence/",
      },
      {
        label: "Regulatory Perimeter Assessment",
        href: "/services/legal-regulatory/regulatory-perimeter-assessment/",
      },
      {
        label: "Payments & Financial Services Regulatory",
        href: "/services/legal-regulatory/payments-financial-services-regulatory/",
      },
      {
        label: "AI Governance",
        href: "/services/legal-regulatory/ai-governance/",
      },
    ],
  },
  {
    label: "AML/CFT & Financial Crime",
    href: "/services/aml-cft/",
    links: [
      {
        label: "Enterprise-Wide Risk Assessment",
        href: "/services/aml-cft/enterprise-wide-risk-assessment/",
      },
      {
        label: "AML Audit & Independent Review",
        href: "/services/aml-cft/aml-audit-independent-review/",
      },
      {
        label: "AML Gap Analysis",
        href: "/services/aml-cft/aml-gap-analysis/",
      },
      {
        label: "AML Remediation",
        href: "/services/aml-cft/aml-remediation/",
      },
      {
        label: "MLRO & Compliance Officer Support",
        href: "/services/aml-cft/mlro-compliance-officer-support/",
      },
      {
        label: "AML/CFT Training",
        href: "/services/aml-cft/aml-cft-training/",
      },
      {
        label: "AML Policies & Procedures",
        href: "/services/aml-cft/aml-policies-procedures/",
      },
      {
        label: "Fraud & Financial Crime Risk",
        href: "/services/aml-cft/fraud-financial-crime-risk/",
      },
    ],
  },
  {
    label: "Data Protection & Privacy",
    href: "/services/data-protection/",
    links: [
      {
        label: "Privacy Audit & Independent Review",
        href: "/services/data-protection/privacy-audit-independent-review/",
      },
      {
        label: "Privacy Impact & Risk Assessments",
        href: "/services/data-protection/privacy-impact-risk-assessments/",
      },
      {
        label: "DPO & Privacy Governance",
        href: "/services/data-protection/dpo-privacy-governance/",
      },
      {
        label: "Privacy Documentation & DPAs",
        href: "/services/data-protection/privacy-documentation-dpas/",
      },
      {
        label: "International Data Transfers",
        href: "/services/data-protection/international-data-transfers/",
      },
      {
        label: "Data Breach & Privacy Incident Response",
        href: "/services/data-protection/data-breach-incident-response/",
      },
    ],
  },
  {
    label: "Licensing",
    href: "/services/licensing/",
    links: [
      {
        label: "Licensing Strategy & Jurisdiction Assessment",
        href: "/services/licensing/licensing-strategy-jurisdiction-assessment/",
      },
      {
        label: "International Licensing & Market Entry",
        href: "/services/licensing/international/",
      },
      {
        label: "Payments & E-Money Licensing",
        href: "/services/licensing/payments-e-money/",
      },
    ],
  },
  {
    label: "Corporate & Governance",
    href: "/services/corporate-governance/",
    links: [
      {
        label: "Banking & EMI Readiness",
        href: "/services/corporate-governance/banking-emi-readiness/",
      },
      {
        label: "Post-Licensing Compliance & Regulatory Support",
        href: "/services/corporate-governance/post-licensing-compliance/",
      },
      {
        label: "Trademark & Brand Protection",
        href: "/services/corporate-governance/trademark-brand-protection/",
      },
    ],
  },
];

export function FooterContent() {
  return (
    <>
      <footer aria-label="Footer" className="lx-site-footer">
        <div className="lx-footer-shell">
          <div className="lx-footer-brand-column">
            <a className="lx-footer-brand" href="/">
              <img
                alt="LEX ARTA logo"
                loading="lazy"
                src="/images/lex-arta-logo.png"
              />
              <span>
                <strong>LEX ARTA</strong>
                <small>
                  International legal, regulatory
                  <br />
                  &amp; compliance advisory
                </small>
              </span>
            </a>
            <span className="lx-footer-rule"></span>
            <p>
              LEX ARTA is a boutique international advisory brand operated by
              Artlex Global LTD, providing strategic legal, regulatory and
              compliance advice to regulated and cross-border businesses across
              jurisdictions.
            </p>
            <div className="lx-footer-markets">
              LONDON <i>/</i> UNITED KINGDOM <i>/</i> INTERNATIONAL
            </div>
          </div>
          <div className="lx-footer-contact">
            <h2>Contact</h2>
            <span className="lx-footer-rule"></span>
            <p>
              Artlex Global LTD
              <br />
              Office 2036 Fitzrovia
              <br />
              60 Tottenham Court Road
              <br />
              London
              <br />
              United Kingdom
            </p>
            <p>
              <a href="mailto:info@lexarta.co">info@lexarta.co</a>
              <br />
              <a href="https://lexarta.co">www.lexarta.co</a>
            </p>
            <div className="lx-footer-social">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/artlexconsult/"
                rel="noopener"
                target="_blank"
                title="Instagram"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect
                    fill="none"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="18"
                    x="3"
                    y="3"
                  ></rect>
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></circle>
                  <circle cx="17.5" cy="6.5" r="1.2"></circle>
                </svg>
              </a>
              <button
                aria-label="Facebook: profile link pending"
                disabled
                title="Facebook link pending"
                type="button"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M14.5 21v-8h2.8l.4-3h-3.2V8c0-.9.3-1.5 1.6-1.5H18V3.8c-.4-.1-1.4-.2-2.5-.2-2.8 0-4.6 1.7-4.6 4.8V10H8v3h2.9v8Z"></path>
                </svg>
              </button>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/108276536/"
                rel="noopener"
                target="_blank"
                title="LinkedIn"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M4.4 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3 10h2.9v10H3Zm5 0h2.8v1.4c.4-.8 1.4-1.6 3-1.6 3.1 0 3.7 2 3.7 4.6V20h-2.9v-5c0-1.2 0-2.6-1.7-2.6-1.7 0-2 1.3-2 2.5V20H8Z"></path>
                </svg>
              </a>
              <a
                aria-label="Telegram"
                href="https://t.me/+420607667076"
                title="Telegram"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M21.4 3.5 18.3 20c-.2 1.1-.8 1.4-1.7.9l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-5 9.2-8.3c.4-.4-.1-.6-.6-.3L6.1 13.6 1.4 12c-1-.3-1-1 .2-1.5L20 3.4c.9-.3 1.7.2 1.4 1.1Z"></path>
                </svg>
              </a>
              <a
                aria-label="WhatsApp"
                href="https://wa.me/420607667076"
                title="WhatsApp"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.3-1.4A9.9 9.9 0 1 0 12 2Zm0 18a8 8 0 0 1-4-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.5-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.5.3-.4c.1-.1.1-.3 0-.4L9.9 8c-.1-.4-.3-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.2s1 2.5 1.1 2.7a9.7 9.7 0 0 0 3.7 3.3c1.9.8 1.9.5 2.3.5.7-.1 2-.8 2.3-1.5.3-.7.3-1.2.2-1.3-.1-.1-.2-.2-.4-.3Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="lx-footer-company">
            <h2>Company</h2>
            <span className="lx-footer-rule"></span>
            <a href="/about/">About</a>
            <a href="/services/">Expertise</a>
            <a href="/about/#team">Team</a>
            <a href="/insights/">Insights</a>
            <a href="/contact/">Contact</a>
          </div>
          <div className="lx-footer-legal">
            <h2>Legal</h2>
            <span className="lx-footer-rule"></span>
            <a href="/legal-notice/">Legal Notice</a>
            <a href="/terms/">Terms of Use</a>
            <a href="/terms-of-business/">Terms of Business</a>
            <a href="/privacy/">Privacy Policy</a>
            <a href="/cookies/">Cookie Policy</a>
            <a href="/disclaimer/">Disclaimer</a>
          </div>
        </div>
        <div className="lx-footer-bottom">
          <span>
            © 2026 Artlex Global LTD.
            <br />
            All rights reserved.
          </span>
          <p>
            LEX ARTA is a professional services brand owned by Artlex Global
            LTD. This website is operated by Artlex Global LTD, registered in
            England and Wales under company number 17479929. Website content is
            general information only and does not constitute professional
            advice.
          </p>
        </div>
      </footer>
    </>
  );
}

let footerHtml: string | undefined;
/** The footer as an HTML string (used by the admin editor and the content renderer). */
export const shared = {
  groups,
  get footer(): string {
    return (footerHtml ??= renderToStaticMarkup(<FooterContent />));
  },
};
