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
