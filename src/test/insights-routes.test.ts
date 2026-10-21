import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { insightArticles } from "@/data/insights";
import { pages } from "@/lib/site-content";
import { routeTree } from "@/routeTree.gen";

describe("Insights article destinations", () => {
  it("keeps every article card linked to a registered local page", () => {
    const router = createRouter({
      routeTree,
      context: { queryClient: new QueryClient() },
    });

    for (const article of insightArticles) {
      expect(article.href.startsWith("/insights/")).toBe(true);
      expect(pages[article.href], article.href).toBeDefined();
      expect(router.matchRoutes(article.href).at(-1)?.routeId, article.href).not.toBe(
        "__root__",
      );
    }
  });
});
