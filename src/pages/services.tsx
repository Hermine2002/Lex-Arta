import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/services/",
  title: "Services | LEX ARTA",
  heading: "Services",
  description:
    "Explore LEX ARTA legal, regulatory, AML/CFT, privacy, licensing and governance advisory services.",
  heroImage: null,
};

export default function Page() {
  return (
    <>
      <main className="lx-basic">
        <p className="eyebrow">Our services</p>
        <h1>Services</h1>
        <p className="intro">
          Senior-led advisory across legal, regulatory, AML/CFT, privacy, licensing and governance
          matters.
        </p>
        <div className="lx-basic-grid">
          <a className="lx-basic-card" href="/services/legal-regulatory/">
            <strong>Legal &amp; Regulatory</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/aml-cft/">
            <strong>AML/CFT &amp; Financial Crime</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/data-protection/">
            <strong>Data Protection &amp; Privacy</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/licensing/">
            <strong>Licensing</strong>
            <span>Explore service →</span>
          </a>
          <a className="lx-basic-card" href="/services/corporate-governance/">
            <strong>Corporate &amp; Governance</strong>
            <span>Explore service →</span>
          </a>
        </div>
      </main>
    </>
  );
}
