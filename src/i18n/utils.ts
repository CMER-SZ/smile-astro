import { ui } from "./ui";

// 映射路由前缀到字典 Key
const routePrefixMap = {
  en: "en",
  cn: "zh-cn",
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  // 如果前缀是 en 或 cn，返回对应 key，否则返回默认繁体
  if (lang in routePrefixMap)
    return routePrefixMap[lang as keyof typeof routePrefixMap];
  return "zh-hk";
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    // 简单的 key 获取逻辑，支持点语法（如 'home.title'）可以自行扩展
    return key.split(".").reduce((o: any, i) => o?.[i], ui[lang]) || key;
  };
}
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