import { ui } from "./ui";
const langMap: Record<string, string> = {
  "cn": "zh-cn",
  "en": "en",
  "zh-hk": "zh-hk"
};
export function getLangFromUrl(url: URL, currentLocale?: string) {
  // 优先使用 Astro 传入的 currentLocale，否则回退到路径解析
  const lang = currentLocale || url.pathname.split("/")[1];
  return langMap[lang] || "zh-hk";
}
export function useTranslations(lang: string) {
  const dictKey = langMap[lang] || lang; 
  return function t(key: string) {
    return key.split(".").reduce((o: any, i) => o?.[i], ui[dictKey as keyof typeof ui]) || key;
  };
}
export const i18nPaths = [
  { params: { lang: undefined } },
  { params: { lang: "cn" } },
  { params: { lang: "en" } },
];
export function getLocalizedHref(href: string, lang: string) {
  // 1. 如果是外部链接或特殊协议，直接返回
  if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return href;
  }
  // 2. 规范化路径：确保以 / 开头
  const baseHref = href.startsWith('/') ? href : `/${href}`;
  // 3. 繁体（默认语言）不加前缀
  if (lang === 'zh-hk') return baseHref;
  // 4. 其他语言加前缀，例如 /cn/appointment 或 /en/appointment
  return `/${lang}${baseHref}`;
}