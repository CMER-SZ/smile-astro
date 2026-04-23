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
