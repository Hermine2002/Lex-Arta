import { describe, expect, it } from "vitest";
import { resolveImageUrl } from "@/lib/assets";

describe("resolveImageUrl", () => {
  it("points managed images at the public asset CDN", () => {
    expect(resolveImageUrl("/__l5e/assets-v1/asset-id/contact-hero.webp")).toBe(
      "https://lex-arta-global-preview.lucyrossetti77.chatgpt.site/assets/contact-hero.webp",
    );
  });

  it("leaves other image URLs unchanged", () => {
    expect(resolveImageUrl("/images/local.webp")).toBe("/images/local.webp");
    expect(resolveImageUrl("https://example.com/image.webp")).toBe(
      "https://example.com/image.webp",
    );
  });
});
