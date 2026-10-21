import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/licensing/",
  title: "Licensing | LEX ARTA",
  heading: "Licensing",
  description:
    "Licensing advisory to test regulatory routes, prepare the right evidence and coordinate defined application workstreams.",
  heroImage: null,
};

export default function Page() {
  return (
    <>
      <main className="lx-basic">
        <p className="eyebrow">Services</p>
        <h1>Licensing</h1>
        <p className="intro">Explore our work across this practice area.</p>
        <div className="lx-basic-grid">
          <a
            className="lx-basic-card"
            href="/services/licensing/licensing-strategy-jurisdiction-assessment/"
          >
            <strong>Licensing Strategy &amp; Jurisdiction Assessment</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/international/">
            <strong>International Licensing</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/international/uae/">
            <strong>UAE Virtual Asset Licensing</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/international/switzerland/">
            <strong>Switzerland Crypto Regulatory &amp; SRO Route</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/international/canada/">
            <strong>Canada MSB / FMSB Registration</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/international/armenia/">
            <strong>Armenia Crypto-Asset Service Provider Licensing</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/international/mauritius/">
            <strong>Mauritius Virtual Asset Service Provider Licensing</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/international/el-salvador/">
            <strong>El Salvador Digital Asset Service Provider Registration</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/payments-e-money/">
            <strong>Payments &amp; E-Money Licensing</strong>
            <span>Explore service →</span>
          </a>
        </div>
      </main>
    </>
  );
}
