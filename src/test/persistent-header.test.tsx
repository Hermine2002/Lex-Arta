import { QueryClient } from "@tanstack/react-query";
import { RouterProvider, createMemoryHistory, createRouter } from "@tanstack/react-router";
import { act, render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { pages } from "@/lib/site-content";

async function setup(initial: string) {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    history: createMemoryHistory({ initialEntries: [initial] }),
  });
  await router.load();
  const utils = render(<RouterProvider router={router} />);
  return { router, ...utils };
}

describe("persistent shell", () => {
  it("keeps one header/footer node while navigating by clicking links", async () => {
    const { container } = await setup("/");
    await waitFor(() => expect(container.querySelector(".site-header")).toBeTruthy());
    const header = container.querySelector(".site-header")!;
    const footer = container.querySelector(".lx-site-footer")!;
    expect(container.querySelectorAll(".site-header").length).toBe(1);

    for (const target of [
      "/about/",
      "/services/aml-cft/",
      "/services/licensing/international/uae/",
      "/contact/",
      "/",
    ]) {
      // Click a real internal link (same markup the audited HTML content uses).
      const link = document.createElement("a");
      link.setAttribute("href", target);
      container.querySelector(".lex-site")!.appendChild(link);
      await act(async () => {
        link.click();
      });
      link.remove();
      await waitFor(() =>
        expect(container.querySelector("h1")?.textContent).toBe(
          new DOMParser().parseFromString(pages[target]!.html, "text/html").querySelector("h1")
            ?.textContent,
        ),
      );
      expect(container.querySelectorAll(".site-header").length).toBe(1);
      expect(container.querySelectorAll(".lx-site-footer").length).toBe(1);
      expect(container.querySelector(".site-header")).toBe(header);
      expect(container.querySelector(".lx-site-footer")).toBe(footer);
    }
  });
});

describe("route coverage", () => {
  it("every audited page URL resolves to a route (no 404) with and without trailing slash", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const url of Object.keys(pages)) {
      for (const candidate of [url, url.length > 1 ? url.replace(/\/$/, "") : url]) {
        const last = router.matchRoutes(candidate).at(-1)?.routeId;
        expect(last, candidate).not.toBe("__root__");
      }
    }
  });
});
