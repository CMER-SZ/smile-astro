// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// 导入 path 模块
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://smile.hkcmereye.com",
  integrations: [vue(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // 设置 @ 指向 src 目录
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
