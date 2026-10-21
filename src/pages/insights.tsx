import { insightArticles, insightCategories } from "@/data/insights";
import { resolveImageUrl } from "@/lib/assets";
import type { PageMeta } from "./types";

export const meta: PageMeta = {
  path: "/insights/",
  title: "Insights | MiCA, AML/CFT & Regulatory Compliance | LEX ARTA",
  heading: "Regulatory insight for decisions that matter.",
  description:
    "Practical analysis of licensing, AML/CFT, financial services and data protection for regulated businesses.",
  heroImage: null,
};

function InsightCard({
  article,
}: {
  article: (typeof insightArticles)[number];
}) {
  return (
    <a
      className="insight-card"
      data-insight-card
      data-insight-category={article.category}
      href={article.href}
    >
      <span className="insight-card-image">
        <img
          src={resolveImageUrl(article.image)}
          alt={article.imageAlt}
          loading="lazy"
        />
      </span>
      <span className="insight-card-content">
        <span className="insight-meta">
          <span>{article.category}</span>
          <time dateTime={article.dateTime}>{article.date}</time>
        </span>
        {article.author && (
          <span className="insight-card-author">{article.author}</span>
        )}
        <span className="insight-card-title">{article.title}</span>
        {article.summary && (
          <span className="insight-card-summary">{article.summary}</span>
        )}
        <span className="insight-read">
          Read Article <span aria-hidden="true">↗</span>
        </span>
      </span>
    </a>
  );
}

export default function Page() {
  return (
    <main className="insights-page">
      <section className="insights-hero">
        <div className="container insights-hero-grid">
          <div className="insights-heading">
            <p className="eyebrow">LEX ARTA / Insights</p>
            <h1>Regulatory insight for decisions that matter.</h1>
            <p>
              Practical analysis of licensing, AML/CFT, financial services and
              data protection for regulated businesses. Each article separates
              the rule from the questions that need a business-specific
              assessment.
            </p>
            <a className="btn btn-primary" href="/book-a-consultation/">
              Book a consultation
            </a>
          </div>
          <div aria-hidden="true" className="insights-hero-art">
            <span>INSIGHTS</span>
            <i />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="latest-insights-title"
        className="section insights-listing"
      >
        <div className="container">
          <div className="insights-listing-heading">
            <div>
              <p className="section-kicker">Latest analysis</p>
              <h2 id="latest-insights-title">Explore our thinking.</h2>
            </div>
            <p>
              Browse concise briefings with source links and a clear date of
              review.
            </p>
          </div>

          <div aria-label="Filter articles" className="insights-filters">
            <button
              aria-pressed="true"
              className="insights-filter active"
              data-insights-filter="all"
              type="button"
            >
              All
            </button>
            {insightCategories.map((category) => (
              <button
                aria-pressed="false"
                className="insights-filter"
                data-insights-filter={category}
                key={category}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="insights-grid">
            {insightArticles.map((article) => (
              <InsightCard article={article} key={article.href} />
            ))}
          </div>
          <p className="insights-empty" data-insights-empty hidden>
            No articles in this category yet.
          </p>
          <nav aria-label="Insights pages" className="insights-pagination" />
        </div>
      </section>

      <section className="section insights-cta">
        <div className="container insights-cta-inner">
          <div>
            <p className="section-kicker">Discuss your project</p>
            <h2>Turn regulatory questions into a clear work plan.</h2>
          </div>
          <a className="btn btn-primary" href="/book-a-consultation/">
            Book a consultation
          </a>
        </div>
      </section>
    </main>
  );
}
