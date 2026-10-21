import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/contact/",
  title: "Contact | LEX ARTA",
  heading: "Contact",
  description:
    "Contact LEX ARTA to discuss an international legal, regulatory, compliance or licensing enquiry.",
  heroImage: "/images/contact-hero.webp",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Contact</div>
                <h1>Contact</h1>
                <p className="hero-lead">
                  Speak with LEX ARTA about an international regulatory, legal, compliance,
                  licensing or market-entry project.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/book-a-consultation/">
                    Book a Consultation
                  </a>
                </div>
              </div>
              <div className="hero-visual">
                <img
                  alt="LEX ARTA professional services"
                  loading="lazy"
                  src="/images/contact-hero.webp"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="legal-intro">
          <div className="container inner">
            <strong>Tell us what you need.</strong>
            <p>
              Share the project, relevant jurisdictions and any important deadline. We will come
              back to you with the appropriate next step.
            </p>
          </div>
        </section>
        <section className="legal-main">
          <div className="container legal-layout">
            <aside className="toc">
              <h2>On this page</h2>
              <a href="/contact/#details">1. Contact Details</a>
              <a href="/contact/#consultation">2. Initial consultation</a>
              <a href="/contact/#privacy">3. Privacy and Sensitive Information</a>
              <a href="/contact/#complaint">4. Data Protection Complaints</a>
            </aside>
            <article>
              <section id="details">
                <div className="caps">01</div>
                <h2>Contact Details</h2>
                <div className="contact-grid">
                  <div className="contact-card">
                    <h3>General enquiries</h3>
                    <p>
                      <strong>Email</strong>
                      <br />
                      <a href="mailto:info@lexarta.co">info@lexarta.co</a>
                    </p>
                    <p>
                      <strong>Phone</strong>
                      <br />
                      +420 292 331 991
                    </p>
                    <p>
                      <strong>Mobile / WhatsApp</strong>
                      <br />
                      +420 607 667 076
                    </p>
                    <p>
                      <strong>Telegram</strong>
                      <br />
                      +420 607 667 076
                    </p>
                    <p>
                      <strong>LinkedIn</strong>
                      <br />
                      LEX ARTA{" "}
                    </p>
                  </div>
                  <div className="contact-card">
                    <h3>Company</h3>
                    <p>
                      <strong>Artlex Global LTD</strong>
                      <br />
                      Office 2036 Fitzrovia, 60 Tottenham Court Road, London, United Kingdom
                    </p>
                    <p>
                      Registered in England and Wales
                      <br />
                      Company no. <code className="token">17479929</code>
                    </p>
                    <p>
                      Website: <a href="/">lexarta.co</a>
                    </p>
                  </div>
                </div>
              </section>
              <section id="consultation">
                <div className="caps">02</div>
                <h2>Send an enquiry</h2>
                <p>For an initial consultation, use the consultation page.</p>
                <p>
                  <a className="btn btn-primary" href="/book-a-consultation/">
                    Book a Consultation
                  </a>
                </p>
              </section>
              <section id="privacy">
                <div className="caps">03</div>
                <h2>Privacy and Sensitive Information</h2>
                <p>
                  Contact-form information may be delivered to our business email environment and
                  retained in the website backend and CRM for enquiry handling and business
                  administration. See the Privacy Notice for lawful bases, recipients, international
                  transfers and retention.
                </p>
                <p>
                  Please do not submit passports, source-of-funds/source-of-wealth documents,
                  private keys or unnecessary special-category/criminal-offence data through this
                  general form.
                </p>
              </section>
              <section id="complaint">
                <div className="caps">04</div>
                <h2>Data Protection Complaints</h2>
                <p>
                  You can use the form above and select <strong>Data protection complaint</strong>,
                  or email{" "}
                  <a href="mailto:info@lexarta.co">
                    <strong>info@lexarta.co</strong>
                  </a>
                  . We will acknowledge receipt of a data-protection complaint, investigate it
                  appropriately without undue delay, keep you informed where appropriate and
                  communicate the outcome without undue delay.
                </p>
              </section>
            </article>
          </div>
        </section>
        <section className="final-cta">
          <div className="final-cta-strip">
            <div className="container final-cta-inner">
              <div>
                <h2>Prefer email?</h2>
                <p>
                  Send your enquiry to info@lexarta.co. For sensitive documents, wait until an
                  appropriate secure channel has been provided.
                </p>
              </div>
              <div className="final-cta-actions">
                <a className="btn btn-primary" href="/book-a-consultation/">
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
