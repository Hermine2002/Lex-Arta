const ASSET_CDN = "https://lex-arta-global-preview.lucyrossetti77.chatgpt.site/assets";
const MANAGED_ASSET_PATH = /^\/__l5e\/assets-v1\/[^/]+\/([^/]+)$/;

export function resolveImageUrl(src: string): string {
  const match = MANAGED_ASSET_PATH.exec(src);
  if (!match) return src;
  return `${ASSET_CDN}/${encodeURIComponent(match[1]!)}`;
}
