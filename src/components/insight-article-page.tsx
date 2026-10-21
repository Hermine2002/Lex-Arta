import type { InsightArticle } from "@/data/insights";
import { resolveImageUrl } from "@/lib/assets";

export function InsightArticlePage({ article }: { article: InsightArticle }) {
  return (
    <main className="insight-article-page">
      <section className="insight-article-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="insight-breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/insights/">Insights</a>
            <span aria-hidden="true">/</span>
            <span>{article.category}</span>
          </nav>
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <div className="insight-article-meta">
            <time dateTime={article.dateTime}>{article.date}</time>
            {article.author && <span>{article.author}</span>}
          </div>
        </div>
      </section>

      <article className="container insight-article-body">
        <figure className="insight-article-image">
          <img src={resolveImageUrl(article.image)} alt={article.imageAlt} />
        </figure>
        <div className="insight-article-prose">
          <p className="insight-brief">
            <strong>In brief</strong>
            {article.brief}
          </p>
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.points && (
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section className="insight-sources">
            <h2>Primary sources</h2>
            <p>
              This article is general information and does not determine the
              regulatory position of a particular business. Check current law,
              supervisory materials and national procedures for the relevant
              activity and jurisdiction.
            </p>
            <ul>
              {article.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} rel="noreferrer" target="_blank">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <div className="insight-article-end">
            <a className="text-link" href="/insights/">
              ← Back to all insights
            </a>
            <a className="btn btn-primary" href="/book-a-consultation/">
              Discuss your project
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
