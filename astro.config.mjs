/*
 * @Author: 谭洁莹
 * @Date: 2026-04-22 16:53:05
 * @LastEditTime: 2026-07-17 15:21:32
 * @FilePath: /astro.config.mjs
 * @Description: Astro 配置
 */
// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// 导入 path 模块
import path from "path";
import { fileURLToPath } from "url";
import icon from "astro-icon";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  output: "static",
  trailingSlash: "ignore",
  site: "https://smile.hkcmereye.com",
  i18n: {
    defaultLocale: "zh-hk",
    locales: ["zh-hk", "en", "cn"],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "redirect",
    },
  },
  integrations: [vue(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // 设置 @ 指向 src 目录
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  build: {
    // 将默认的 '_astro' 改为 'assets'
    assets: "assets",
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.hkcmereye.com",
      },
      {
        protocol: "https",
        hostname: "statichk.cmermedical.com",
      },
    ],
  },
});
