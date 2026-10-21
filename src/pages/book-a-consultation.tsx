import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/book-a-consultation/",
  title: "Book a Consultation | LEX ARTA",
  heading: "Book a Consultation",
  description:
    "Book an initial consultation with LEX ARTA for a legal, regulatory, compliance or cross-border business enquiry.",
  heroImage: null,
};

export default function Page() {
  return (
    <>
      <main className="lx-consultation">
        <div className="lx-form-header">
          <p className="lx-form-eyebrow">Contact</p>
          <h1>Book a Consultation</h1>
          <p>Tell us about your request and we will get back to you to discuss the next steps.</p>
        </div>
        <ol aria-label="Form progress" className="lx-stepper">
          <li aria-current="step">
            1 <span>Contact Details</span>
          </li>
          <li>
            2 <span>Services Required</span>
          </li>
          <li>
            3 <span>Your Request</span>
          </li>
        </ol>
        <form id="consultation-form" noValidate>
          <fieldset className="lx-form-step" data-step="0">
            <legend>Contact Details</legend>
            <div className="lx-field-grid">
              <label>
                First Name <span aria-hidden="true">*</span>
                <input autoComplete="given-name" name="first_name" required />
              </label>
              <label>
                Last Name <span aria-hidden="true">*</span>
                <input autoComplete="family-name" name="last_name" required />
              </label>
              <label>
                Country <span className="lx-optional">(optional)</span>
                <input autoComplete="country-name" name="country" />
              </label>
              <label>
                Email Address <span aria-hidden="true">*</span>
                <input autoComplete="email" name="email" required type="email" />
              </label>
              <label>
                Phone Number <span className="lx-optional">(optional)</span>
                <input autoComplete="tel" name="phone" type="tel" />
              </label>
              <label>
                Are you contacting us as? <span className="lx-optional">(optional)</span>
                <select name="contacting_as">
                  <option value="">Select one</option>
                  <option value="Individual">Individual</option>
                  <option value="Company">Company</option>
                </select>
              </label>
            </div>
            <label className="lx-company-field" hidden>
              Company Name <span className="lx-optional">(optional)</span>
              <input autoComplete="organization" name="company_name" />
            </label>
            <div className="lx-step-actions">
              <button data-next="" type="button">
                Continue
              </button>
            </div>
          </fieldset>
          <fieldset className="lx-form-step" data-step="1" hidden>
            <legend>Services Required</legend>
            <p className="lx-field-hint">
              Select all services relevant to your enquiry. <span aria-hidden="true">*</span>
            </p>
            <div
              aria-label="Services Required"
              aria-required="true"
              className="lx-services-choices"
              role="group"
            >
              <label className="lx-option">
                <input name="services" type="checkbox" value="AML Audit" />
                <span>AML Audit</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="AML compliance" />
                <span>AML compliance</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="Legal services" />
                <span>Legal services</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="AML Training" />
                <span>AML Training</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="Data Protection" />
                <span>Data Protection</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="Regulatory gap analysis" />
                <span>Regulatory gap analysis</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="Licensing Gap Assessment" />
                <span>Licensing Gap Assessment</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="Licensing" />
                <span>Licensing</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="Bank / EMI Readiness" />
                <span>Bank / EMI Readiness</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="Trademark Registration" />
                <span>Trademark Registration</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="Corporate" />
                <span>Corporate</span>
              </label>
              <label className="lx-option">
                <input name="services" type="checkbox" value="Other" />
                <span>Other</span>
              </label>
            </div>
            <p className="lx-form-error" hidden id="service-error" role="alert">
              Please select at least one service.
            </p>
            <div className="lx-step-actions">
              <button className="lx-secondary" data-back="" type="button">
                Back
              </button>
              <button data-next="" type="button">
                Continue
              </button>
            </div>
          </fieldset>
          <fieldset className="lx-form-step" data-step="2" hidden>
            <legend>Request Description</legend>
            <label>
              Please briefly describe your request <span aria-hidden="true">*</span>
              <textarea
                name="description"
                placeholder="Tell us what you need, the jurisdiction involved and any relevant deadlines."
                required
                rows={7}
              ></textarea>
            </label>
            <label>
              How did you hear about LEX ARTA?
              <select name="source">
                <option value="">Select one (optional)</option>
                <option value="Google">Google</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
                <option value="Client">Client</option>
                <option value="Website">Website</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <div className="lx-consents">
              <p>
                Artlex Global LTD will use the information you provide to review and respond to your
                enquiry, including contacting you about it. The applicable lawful basis depends on
                the circumstances and is explained in our <a href="/privacy/">Privacy Notice</a>.
                Please do not include sensitive documents or information in this initial enquiry.
              </p>
            </div>
            <div className="lx-form-disclaimer">
              <h2>Before you send</h2>
              <p>
                Submission of this form does not create a client relationship, legal engagement,
                advisory mandate or any obligation for Artlex Global LTD to accept the matter.
                Artlex Global LTD may request additional information and may decline an enquiry
                where legal, AML/CFT, sanctions, fraud, conflict of interest or reputational risks
                are identified. An engagement starts only after the proposed contracting company is
                identified and accepts the agreed scope in writing. The applicable engagement letter
                or service agreement identifies that company.
              </p>
            </div>
            <div className="lx-step-actions">
              <button className="lx-secondary" data-back="" type="button">
                Back
              </button>
              <button type="submit">Prepare Email Enquiry</button>
            </div>
            <p className="lx-send-note">
              This preview opens your email application with the enquiry prepared for{" "}
              <a href="mailto:info@lexarta.co">info@lexarta.co</a>. Send the message in your email
              application to complete the enquiry.
            </p>
            <p className="lx-form-error" hidden id="submission-status" role="status">
              Your email application should open now. We cannot confirm receipt until you send the
              email there.
            </p>
          </fieldset>
        </form>
      </main>
    </>
  );
}
