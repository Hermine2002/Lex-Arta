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
            <span className="card-tag">Strategy</span>
            <strong>Licensing Strategy &amp; Jurisdiction Assessment</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/licensing/international/"
          >
            <span className="card-tag">Global coverage</span>
            <strong>International Licensing</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/mica-casp/">
            <span className="card-tag">European Union</span>
            <strong>MiCA CASP Licensing &amp; EU Authorisation</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/licensing/international/uae/"
          >
            <span className="card-tag">United Arab Emirates</span>
            <strong>UAE Virtual Asset Licensing</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/licensing/international/switzerland/"
          >
            <span className="card-tag">Switzerland</span>
            <strong>Switzerland Crypto Regulatory &amp; SRO Route</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/licensing/international/canada/"
          >
            <span className="card-tag">Canada</span>
            <strong>Canada MSB / FMSB Registration</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/licensing/international/armenia/"
          >
            <span className="card-tag">Armenia</span>
            <strong>Armenia Crypto-Asset Service Provider Licensing</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/licensing/international/mauritius/"
          >
            <span className="card-tag">Mauritius</span>
            <strong>Mauritius Virtual Asset Service Provider Licensing</strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/licensing/international/el-salvador/"
          >
            <span className="card-tag">El Salvador</span>
            <strong>
              El Salvador Digital Asset Service Provider Registration
            </strong>
            <span>Explore service →</span>
          </a>
          <a
            className="lx-basic-card"
            href="/services/licensing/payments-e-money/"
          >
            <span className="card-tag">Payments &amp; EMI</span>
            <strong>Payments &amp; E-Money Licensing</strong>
            <span>Explore service →</span>
          </a>
        </div>
      </main>
    </>
  );
}
