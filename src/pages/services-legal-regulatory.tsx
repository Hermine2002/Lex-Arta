import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/legal-regulatory/",
  title: "Legal & Regulatory | LEX ARTA",
  heading: "Legal & Regulatory",
  description:
    "Legal and regulatory advisory that clarifies applicable rules, evidence requirements and practical next steps.",
  heroImage: null,
};

export default function Page() {
  return (
    <>
      <main className="lx-basic">
        <p className="eyebrow">Services</p>
        <h1>Legal &amp; Regulatory</h1>
        <p className="intro">Explore our work across this practice area.</p>
        <div className="lx-basic-grid">
          <a
            className="lx-basic-card"
            href="/services/legal-regulatory/international-legal-regulatory/"
          >
            <strong>International Legal &amp; Regulatory</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/legal-regulatory/commercial-contracts/">
            <strong>Commercial Contracts</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/legal-regulatory/legal-opinions-regulatory-memoranda/"
          >
            <strong>Legal Opinions &amp; Regulatory Memoranda</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/legal-regulatory/legal-regulatory-due-diligence/"
          >
            <strong>Legal &amp; Regulatory Due Diligence</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/legal-regulatory/regulatory-perimeter-assessment/"
          >
            <strong>Regulatory Perimeter Assessment</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/legal-regulatory/payments-financial-services-regulatory/"
          >
            <strong>Payments &amp; Financial Services Regulatory</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/legal-regulatory/ai-governance/">
            <strong>AI Governance</strong>
            <span>Explore service →</span>
          </a>
        </div>
      </main>
    </>
  );
}
