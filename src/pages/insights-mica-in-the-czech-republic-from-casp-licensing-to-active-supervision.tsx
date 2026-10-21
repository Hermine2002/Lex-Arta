import { InsightArticlePage } from "@/components/insight-article-page";
import { getInsightArticle } from "@/data/insights";
import type { PageMeta } from "./types";

const article = getInsightArticle(
  "mica-in-the-czech-republic-from-casp-licensing-to-active-supervision",
);

export const meta: PageMeta = {
  path: article.href,
  title: `${article.title} | LEX ARTA`,
  heading: article.title,
  description: article.brief,
  heroImage: article.image,
};

export default function Page() {
  return <InsightArticlePage article={article} />;
}
