import type { ComponentType } from "react";

export type PageMeta = {
  path: string;
  title: string;
  heading: string;
  description: string;
  heroImage: string | null;
};
export type PageModule = { meta: PageMeta; default: ComponentType };
