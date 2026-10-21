import { InsightArticlePage } from "@/components/insight-article-page";
import { getInsightArticle } from "@/data/insights";
import type { PageMeta } from "./types";

const article = getInsightArticle("eu-amlr-2027-obliged-entities");

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
