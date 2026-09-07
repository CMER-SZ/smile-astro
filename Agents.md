# 希瑪微笑矯視中心 (CMER Smile 2026) - Agent 開發與重構核心準則 (Agents.md)

> **最高原則**：本項目為「香港希瑪微笑矯視中心 (CMER Smile)」2026 年 Astro 現代化重構生產級項目。所有 AI Agent 與工程師在編寫、修改代碼時必須嚴格遵守以下準則，杜絕任何隨意猜測、文案篡改或破壞現有廣告與 SEO 的行為。重構的核心是「**骨架升級、語意化重構與性能極致化**」，視覺與文案必須與線上官網 (`https://smile.hkcmereye.com`) **100% 精確對齊**。

---

## 1. 運行環境與工具鏈約束 (Environment & Tooling)

1. **唯一包管理器**：
   - 項目統一且**唯一使用 `pnpm`**（如 `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm check:all`）。嚴禁使用 `npm` / `yarn`，嚴禁提交 `package-lock.json` 或 `yarn.lock`。
2. **代碼與規範校驗**：
   - 提交前必須保證 `pnpm check:all` (Astro Check + TypeScript + ESLint + Stylelint) 0 錯誤、0 警告。
3. **自動化腳本**：
   - 數據遷移、批量校驗與文本分析腳本，統一使用 Node.js (ESM) 或 Python 3 執行。

---

## 2. 路由與 URL 絕對一致性 (零 404 容忍)

1. **大小寫與路徑 100% 精確匹配**（嚴禁擅自扁平化或改小寫）：
   - `/smilePro`（大寫 P）、`/FreQuestions`（大寫 FQ）、`/ophthalmicInfo/AppointForm`、`/vision-correction/relex-smile`、`/smileProCare` 等必須嚴格保留。
2. **多語言路由策略**：
   - **繁體中文 (zh-HK)**：默認無前綴（如 `/`, `/smilePro`, `/fee`, `/group-profile`）。
   - **簡體中文 (zh-CN)**：統一 `/cn/` 前綴（如 `/cn/`, `/cn/smilePro`, `/cn/fee`, `/cn/group-profile`）。
   - 英文版 (`en`) 暫不上線，路由不對外暴露。
3. **錨點 (Anchor) 必須嚴格還原**：
   - 診症須知：`#beforeJiaoShi`, `#inJiaoShi`, `#afterJiaoShi`
   - 常見問題：`#faq-smile`, `#faq-lasik`, `#faq-icl`, `#faq-presbyopia`
   - 老花矯視：`#CorrectionProgram`

---

## 3. 官方文案 100% 絕對還原與 1:1 視覺比對紅線 (Copywriting Parity)

1. **嚴禁文案臆造與擅自篡改**：
   - 全站所有文字內容（服務介紹、經營理念、關懷大使、醫生名銜、收費細則、FAQ 等）必須 **100% 忠實還原線上官網 (`https://smile.hkcmereye.com`)，一字不差**。
   - 杜絕任何 AI 自行潤色、概括總結、字詞替換或編造展示數據。
2. **舊代碼甄別與現代化語意重構**：
   - `smile2024/` 目錄中混雜歷史廢棄組件，嚴禁盲目拷貝舊代碼。
   - 舊版低質量的 `div` 嵌套與硬編碼必須重構為現代 HTML5 語意地標與清晰語意類名，但**最終視覺佈局、文字高亮與排版層次必須與官網 1:1 精確對應**。
3. **即時比對驗證**：
   - 開發每個模組時，必須邊做邊透過瀏覽器截圖比對線上官網對應頁面，杜絕偏差累積。

---

## 4. HTML5 語意骨骼地標與 GEO/SEO 規範 (Semantic Landmarks)

為確保 Googlebot、Gemini、Applebot 等 AI GEO 爬蟲精準解析頁面拓撲結構，骨架必須採用標準語意地標：

1. **核心地標標籤**：
   - **`<header>`**：頂部全域導航、Logo 與語言切換。
   - **`<nav aria-label="...">`**：所有主導航、移動端菜單、麵包屑導航。
   - **`<main id="main-content">`**：每個頁面**有且僅有 1 個 `<main>`**。
   - **`<section aria-labelledby="heading-id">`**：獨立業務板塊，並與其 `<h2>` 標題 ID 綁定。
   - **`<article>`**：獨立內容實體（科普文章、案例分享、FAQ 卡片、大使卡片）。
   - **`<aside>`**：側邊浮動條、移動端快捷底欄、推薦區塊。
   - **`<address>`**：診所門市聯絡資訊（地址、電話、營業時間）。
   - **`<figure>` / `<figcaption>`**：眼部構造圖、手術流程圖與圖說。
2. **唯一 `<h1>` 與 Heading 階層規範**：
   - 每個頁面**必須且只能有 1 個 `<h1>`**。首頁若無視覺大標題，必須使用 Tailwind 無障礙隱藏類 `sr-only`（**嚴禁使用 `display: none`，會被 Google 視為作弊懲罰**）。
   - 標題層級嚴格遞減 (`h1` -> `h2` -> `h3`)，嚴禁跨級跳躍（如 `h1` 直接到 `h4`/`h5`）。
3. **圖片 `alt` 語意**：
   - 內容圖片必須包含具體業務關鍵詞的 `alt` 描述，純裝飾圖標記 `aria-hidden="true"`。
4. **AI 智能體支援 (llms.txt)**：
   - 網站根目錄提供標準 `/llms.txt`，遵循 llmstxt.org 規範，便利 LLM 索引。

---

## 5. 專業級 TDK 與結構化數據 (Schema.org)

1. **TDK 黃金標準**：
   - **Title (50~60 字符 / 28~32 中文字)**：`【核心業務/主題】 - 【權威賣點】 | 【香港希瑪微笑矯視中心】`，杜絕超長截斷。
   - **Description (120~155 字符 / 70~85 中文字)**：`【受眾痛點 + 醫療方案】 + 【雙旗艦門市 (中環/旺角)】 + 【專科醫生背書】 + 【明確行動呼籲】`，杜絕全站重複。
   - **Keywords**：精選 4~6 個高意圖核心實體詞。
2. **Schema.org 模組化**：
   - 統一調用 `src/components/seo/` 組件庫（`SEOHead`, `SchemaClinic`, `SchemaDoctor`, `SchemaProcedure`, `SchemaFAQ`, `SchemaBreadcrumb`）。
   - 門市地址與經緯度必須嚴格依據中環中建大廈與旺角雅蘭中心官方真實數據。

---

## 6. 前端設計系統與 CSS 工程規範 (Design System & CSS)

全站嚴格遵循 `STYLE_GUIDE.md` 設計系統：
1. **排版字階與字體**：
   - 字體族：中文統一 `var(--font-hk)`，英文數字統一 `var(--font-en)`。
   - 字階：`h1` 24~40px，`h2` 20~32px，`h3` 18~24px，正文 `p` 14~20px (高行距 leading-relaxed / 1.8)。
2. **按鈕規範**：
   - 主按鈕 `.btn-primary`、WhatsApp 轉化 `.btn-whatsapp`、線框按鈕 `.btn-outline`。所有轉化按鈕必須綁定 `data-cta="..."`。
3. **佈局約束與防變形**：
   - 嚴禁濫用無邊界 `vw` 單位，必須使用 Tailwind 標準斷點 (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) 或 `clamp()` 限制上下界。
   - 統一使用 `.container` 約束內容寬度，全寬背景區塊在其內部使用 container 實現嚴絲合縫貼邊。
4. **無障礙色彩對比度 (WCAG 2.1 AA)**：
   - 淺色背景下的文字與背景色彩對比度必須達到 **4.5:1 以上**（嚴禁使用過淡的灰色）。
   - 錨點標題自帶 `scroll-margin-top: 5rem`，防止被頂部固定導航遮擋。

---

## 7. 性能優化與第三方腳本隔離 (PageSpeed & A11y)

1. **第三方腳本隔離 (GTM / 在線客服)**：
   - 正式 GTM 容器 ID：`GTM-5M8VLLM`。
   - 追蹤器與商務通客服代碼嚴禁在 `<head>` 同步阻塞加載。必須採用「用戶首次手勢互動 (touchstart/scroll/mousemove) 觸發加載」或延遲 3.5s~5s 加載，確保首屏 TBT < 100ms，移動端 Performance 穩居 85~98 分。
   - 外部商務通彈窗圖片必須由 `MutationObserver` 自動補齊 `alt=""` 與 `aria-hidden="true"` 防止 Lighthouse 扣分。
2. **圖片資產傳輸與 LCP 優化**：
   - 首屏 LCP 核心大圖宣告 `loading="eager"` 與 `fetchpriority="high"`，並提供移動端專屬尺寸；非首屏圖片一律 `loading="lazy"`。
   - 圖片優先轉換為現代無損/高壓縮比 WebP / AVIF 格式。
3. **WhatsApp 業務追蹤**：
   - 各頁面 WhatsApp 按鈕必須嚴格按照 `docs/WHATSAPP_TRACKING_MATRIX.md` 注入相應追蹤代碼（如 `W-15`, `W-05`, `WSPC-2025` 等）。

---

## 8. 數據渲染與 CMS 策略 (SSG + Edge SWR)

1. **靜態預渲染 (SSG First)**：
   - 核心業務頁（首頁、SMILE Pro、收費、常見問題、集團簡介等 21 個頁面）必須在構建期完成純靜態 HTML 預渲染，TTFB < 50ms。
2. **邊緣快照 (Edge SWR)**：
   - 科普專欄詳情頁邊緣請求新 CMS (`cms.cmermedical.com.hk`) 並注入 `Cache-Control: public, s-maxage=604800`，自動沉澱為 CDN 靜態快照。
   - 舊 CMS `admin.hkcmereye.com` 已淘汰。

---
*文檔由 Antigravity Agent 自動維護 | 版本：2026.9*
