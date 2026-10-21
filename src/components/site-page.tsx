import { useEffect, useRef } from "react";
import { OriginalContent } from "./site-content";
import { pages } from "@/lib/site-content";
import { getRouteApi } from "@tanstack/react-router";
import { createEnquiry } from "@/lib/enquiries";

export function SitePage({ path }: { path: string }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const override = getRouteApi("__root__").useLoaderData()?.overrides?.[path];
  const original = pages[path];
  const page = original
    ? { ...original, ...(override?.html ? { html: override.html } : {}) }
    : undefined;
  useEffect(() => {
    const root = wrapper.current;
    if (!root) return;
    const form = root.querySelector<HTMLFormElement>("#consultation-form");
    const steps = Array.from(
      root.querySelectorAll<HTMLElement>(".lx-form-step"),
    );
    let current = 0;
    function show(n: number) {
      current = n;
      steps.forEach((step, i) => {
        step.hidden = i !== n;
      });
      root?.querySelectorAll(".lx-stepper li").forEach((item, i) => {
        if (i === n) item.setAttribute("aria-current", "step");
        else item.removeAttribute("aria-current");
      });
    }
    function valid(n: number) {
      for (const field of Array.from(
        steps[n]?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
          "input[required],textarea[required]",
        ) ?? [],
      )) {
        if (!field.checkValidity()) {
          field.reportValidity();
          return false;
        }
      }
      const error = root?.querySelector<HTMLElement>("#service-error");
      if (n === 1 && !form?.querySelector('input[name="services"]:checked')) {
        if (error) error.hidden = false;
        return false;
      }
      if (error) error.hidden = true;
      return true;
    }
    function change(e: Event) {
      const target = e.target;
      if (!(
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement
      ))
        return;
      if (target.name === "contacting_as") {
        const companyRow =
          form?.querySelector<HTMLElement>(".lx-company-field");
        if (companyRow) companyRow.hidden = target.value !== "Company";
        const company = form?.querySelector<HTMLInputElement>(
          '[name="company_name"]',
        );
        if (company && target.value !== "Company") company.value = "";
      }
      if (target.name === "services") {
        const error = root?.querySelector<HTMLElement>("#service-error");
        if (error) error.hidden = true;
      }
    }
    function click(e: Event) {
      if (!(e.target instanceof Element)) return;
      const button = e.target.closest("button");
      if (button?.hasAttribute("data-next") && valid(current))
        show(current + 1);
      if (button?.hasAttribute("data-back")) show(current - 1);
    }
    async function submit(e: Event) {
      e.preventDefault();
      if (!form) return;
      for (let i = 0; i < steps.length; i++) {
        if (!valid(i)) {
          show(i);
          return;
        }
      }
      const d = new FormData(form);
      const str = (k: string) => String(d.get(k) ?? "");
      const status = root?.querySelector<HTMLElement>("#submission-status");
      const submitButton = form.querySelector<HTMLButtonElement>(
        'button[type="submit"]',
      );
      if (submitButton) submitButton.disabled = true;
      const saved = await createEnquiry({
        first_name: str("first_name"),
        last_name: str("last_name"),
        country: str("country"),
        email: str("email"),
        phone: str("phone"),
        contacting_as: str("contacting_as"),
        company_name: str("company_name"),
        services: d.getAll("services").map(String),
        description: str("description"),
        source: str("source"),
      });
      if (submitButton) submitButton.disabled = false;
      if (saved) {
        if (status) {
          status.textContent =
            "Thank you. Your enquiry has been received and we will be in touch shortly.";
          status.hidden = false;
        }
        form.reset();
        show(0);
        return;
      }
      // Fallback (backend not configured or temporarily unavailable): prepare the email as before.
      const lines = [
        "First Name: " + d.get("first_name"),
        "Last Name: " + d.get("last_name"),
        "Country: " + d.get("country"),
        "Email Address: " + d.get("email"),
        "Phone Number: " + d.get("phone"),
        "Contacting as: " + d.get("contacting_as"),
        "Company Name: " + (d.get("company_name") || "—"),
        "Services Required: " + d.getAll("services").join(", "),
        "",
        "Request: " + d.get("description"),
        "How did you hear about us: " + (d.get("source") || "—"),
      ];
      if (status) {
        status.textContent =
          "Your email application should open now. We cannot confirm receipt until you send the email there.";
        status.hidden = false;
      }
      window.location.href =
        "mailto:info@lexarta.co?subject=" +
        encodeURIComponent(
          "Consultation enquiry — " +
            d.get("first_name") +
            " " +
            d.get("last_name"),
        ) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));
    }
    form?.addEventListener("click", click);
    form?.addEventListener("change", change);
    form?.addEventListener("submit", submit);
    const slides = Array.from(
      root.querySelectorAll<HTMLElement>(".carousel-slide"),
    );
    let slide = 0;
    function showSlide(n: number) {
      slide = (n + slides.length) % slides.length;
      slides.forEach((s, i) => {
        s.hidden = i !== slide;
      });
      root?.querySelectorAll(".carousel-dot").forEach((d, i) => {
        d.classList.toggle("active", i === slide);
        d.setAttribute("aria-pressed", String(i === slide));
      });
    }
    if (slides.length) showSlide(0);
    function gallery(e: Event) {
      if (!(e.target instanceof Element)) return;
      const b = e.target.closest("button");
      const filter = b?.dataset.insightsFilter;
      if (filter) {
        let visibleCount = 0;
        root
          .querySelectorAll<HTMLElement>("[data-insight-card]")
          .forEach((card) => {
            const visible =
              filter === "all" || card.dataset.insightCategory === filter;
            card.hidden = !visible;
            if (visible) visibleCount++;
          });
        root
          .querySelectorAll<HTMLButtonElement>("[data-insights-filter]")
          .forEach((button) => {
            const active = button.dataset.insightsFilter === filter;
            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
          });
        const empty = root.querySelector<HTMLElement>("[data-insights-empty]");
        if (empty) empty.hidden = visibleCount > 0;
        return;
      }
      if (b?.classList.contains("next")) showSlide(slide + 1);
      if (b?.classList.contains("prev")) showSlide(slide - 1);
      if (b?.hasAttribute("data-slide"))
        showSlide(Number(b.getAttribute("data-slide")));
    }
    root.addEventListener("click", gallery);
    return () => {
      form?.removeEventListener("click", click);
      form?.removeEventListener("change", change);
      form?.removeEventListener("submit", submit);
      root.removeEventListener("click", gallery);
    };
  }, [path]);
  if (!page) return null;
  return (
    <div className={path === "/" ? "homepage" : "inner-page"}>
      <div ref={wrapper} id="main-content" className="page-content">
        <OriginalContent html={page.html} />
      </div>
    </div>
  );
}
