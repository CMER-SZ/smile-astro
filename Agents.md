# 希瑪微笑矯視中心 (CMER Smile 2026) - Agent 開發與重構核心準則 (Agents.md)

> **最高原則**：本項目為「香港希瑪微笑矯視中心 (CMER Smile)」2026 年 Astro 重構生產級項目。所有 AI Agent 與工程師在編寫、修改代碼時必須嚴格遵守以下準則，杜絕任何隨意猜測或破壞現有廣告與 SEO 的行為。

---

## 1. 運行環境與工具鏈約束 (Environment & Tooling)

1. **包管理器唯一約束**：
   - 項目統一且**唯一使用 `pnpm`** 作為包管理器（例如 `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm astro check`）。
   - 嚴禁使用 `npm` 或 `yarn`，嚴禁生成或提交 `package-lock.json` 或 `yarn.lock`。
2. **高效自動化腳本**：
   - 數據遷移、批量校驗、文本分析與代碼檢查腳本，可自行選取 `Node.js` 或 `Python 3` 高效執行。

---

## 2. 路由與 URL 絕對一致性原則 (零 404 容忍)

1. **大小寫與路徑 100% 精確匹配**：
   - 嚴禁擅自修改線上已存在的 URL 大小寫或命名。例如：
     - `/smilePro`（大寫 P，嚴禁改為 `/smile-pro` 或 `/smilepro`）
     - `/FreQuestions`（大寫 FQ，嚴禁改為 `/fre-questions` 或 `/faq`）
     - `/ophthalmicInfo/AppointForm`（駝峰路徑，嚴禁改為全小寫）
     - `/vision-correction/relex-smile`（多層路徑，嚴禁扁平化）
     - `/smileProCare`（廣告專題頁，必須嚴格保留）
2. **多語言路由策略**：
   - 僅支持兩種語言：
     - **繁體中文 (zh-HK)**：默認無前綴（例如 `/`, `/smilePro`, `/fee`）
     - **簡體中文 (zh-CN)**：統一 `/cn/` 前綴（例如 `/cn/`, `/cn/smilePro`, `/cn/fee`）
   - 嚴禁啟用 `en`（英文版暫不上線）。
3. **錨點 (Anchor) 必須嚴格還原**：
   - 診症須知：`#beforeJiaoShi`, `#inJiaoShi`, `#afterJiaoShi`
   - 常見問題：`#faq-smile`, `#faq-lasik`, `#faq-icl`, `#faq-presbyopia`
   - 老花矯視：`#CorrectionProgram`

---

## 3. HTML5 現代化語意骨骼地標規範 (HTML5 Semantic Landmarks for GEO)

為了讓 Googlebot、Gemini、Applebot 等 AI GEO 爬蟲精確解析頁面實體拓撲結構，全站頁面必須嚴格採用以下 HTML5 語意地標標籤構建骨架：

1. **核心骨骼標籤標準**：
   - **`<header>`**：頂部全域導航、Logo 與語言切換區。
   - **`<nav aria-label="...">`**：所有導航菜單（桌面主菜單、移動端菜單、麵包屑導航）必須使用 `<nav>` 並聲明 `aria-label`。
   - **`<main id="main-content">`**：每個頁面**有且僅有 1 個 `<main>`**，代表該頁面核心主體內容區。
   - **`<section aria-labelledby="section-heading-id">`**：具備獨立主題的業務板塊（如服務介紹、特色看板、預約專區），並與該區塊的 `<h2>` 標題 ID 綁定。
   - **`<article>`**：獨立成篇的內容實體（如科普文章詳情、用家案例分享、FAQ 單條問答卡片）。
   - **`<aside>`**：側邊浮動諮詢條、移動端快捷底欄、相關文章推薦區。
   - **`<address>`**：診所實體聯絡資訊（地址、電話、營業時間）專用標籤，增強 Local SEO 實體權重。
   - **`<time datetime="YYYY-MM-DD">`**：文章發布時間、活動時間與覆診週期。
   - **`<figure>` 與 `<figcaption>`**：眼部構造示意圖、手術流程圖與圖說。
2. **唯一 `<h1>` 與無障礙 `sr-only` 規範**：
   - 每個頁面**必須且只能有 1 個 `<h1>`**。
   - 若視覺設計無明顯大標題（如首頁輪播圖），**嚴禁使用 `display: none`（會被 Google 視為作弊懲罰）**，必須使用 Tailwind 無障礙隱藏類 `sr-only`：
     ```html
     <h1 class="sr-only">香港希瑪微笑矯視中心 (CMER Smile) - SMILE Pro 2.0 / ICL / 激光矯視</h1>
     ```
   - 內頁頂部標題必須為該頁專屬 `<h1>`（如 `<h1>SMILE Pro 2.0 微笑激光矯視</h1>`）。
3. **嚴格的 Heading 層級樹**：
   - 模組大區塊一律使用 `<h2>`，子卡片與 FAQ 問題一律使用 `<h3>`，嚴禁跳級（如 `<h1>` 直接跳到 `<h4>`）。
4. **圖片 `alt` 語意規範**：
   - 所有內容圖片必須具備具體語意的 `alt` 描述（包含「SMILE Pro」、「ICL 矯視」等實體關鍵詞），純背景裝飾圖標記 `aria-hidden="true"`。

---

## 4. 專業級 TDK (Title, Description, Keywords) 質量約束

杜絕舊版 TDK 中的重複堆砌、標題截斷與模糊不清，新版全站 TDK 必須嚴格遵守以下黃金標準：

1. **Title 標題規範 (50 ~ 60 字符 / 約 28~32 個中文字)**：
   - **黃金結構**：`【頁面核心業務/主題】 - 【特色/權威賣點】 | 【香港希瑪微笑矯視中心】`
   - 杜絕超長被 Google 搜尋結果截斷為 `...`。
   - **核心頁面標準 Title 示例**：
     - **首頁**：`香港希瑪微笑矯視中心 | SMILE Pro 2.0 / ICL 植入式隱形眼鏡 / 激光矯視`
     - **SMILE Pro**：`SMILE Pro 2.0 微笑激光矯視 | 10秒極速矯視・眼科專科主理 - 香港希瑪微笑矯視中心`
     - **ICL 晶體**：`ICL 植入式隱形眼鏡 | 高度近視及散光首選・不切削角膜 - 香港希瑪微笑矯視中心`
     - **老花矯視**：`老花矯視方案 | PRESBYOND LBV / CLEAR-Vision / ICL Viva - 香港希瑪微笑矯視中心`
     - **收費詳情**：`矯視收費詳情與價目表 | SMILE Pro / ICL / LASIK 明碼實價 - 香港希瑪微笑矯視中心`
     - **常見問題**：`矯視常見問題 FAQ | SMILE Pro / ICL / LASIK 術前術後須知 - 香港希瑪微笑矯視中心`
2. **Description 描述規範 (120 ~ 155 字符 / 約 70~85 個中文字)**：
   - **黃金要素**：`【受眾痛點 + 醫療方案】 + 【雙旗艦門市 (香港中環/旺角)】 + 【E-E-A-T 權威背書 (專科醫生/上市醫療集團)】 + 【明確行動呼籲 (立即預約術前檢查/WhatsApp諮詢)】`。
   - **嚴禁全站複製粘貼相同的 Description**，每個業務頁面必須有專屬的高轉化文案。
3. **Keywords 關鍵詞規範**：
   - 精選 4 ~ 6 個高意圖核心實體詞，嚴禁無意義堆砌數十個關鍵字。
4. **多語言 TDK 本地化詞彙對齊**：
   - **繁體中文 (zh-HK)**：採用港式醫療規範詞彙（如「矯視」、「散光」、「覆診」、「中建大廈」、「雅蘭中心」）。
   - **簡體中文 (zh-CN)**：精準轉化為內地受眾習慣詞彙（如「近视手术」、「散光」、「复诊」、「眼科专科医生」）。

---

## 5. 結構化數據 (Schema.org) 與 Local SEO 規範

1. **結構化數據 (JSON-LD) 模組化**：
   - 嚴禁在各頁面零散硬編碼 Schema。必須統一調用 `src/components/seo/` 組件庫：
     - `SEOHead.astro`：動態 Canonical、Hreflang、OpenGraph、Twitter Card（嚴禁硬編碼無效的 `geo.position` 垃圾標籤）
     - `SchemaClinic.astro`：基於真實 `PostalAddress` 的診所實體標記 (`MedicalClinic` / `LocalBusiness`)
     - `SchemaDoctor.astro`：醫生團隊標記 (`Physician` / E-E-A-T 權威性)
     - `SchemaProcedure.astro`：矯視手術標記 (`MedicalProcedure` / SMILE Pro, ICL, LASIK, LBV)
     - `SchemaFAQ.astro`：常見問題標記 (`FAQPage`)
     - `SchemaBreadcrumb.astro`：麵包屑標記 (`BreadcrumbList`)
2. **地址與實體絕對真實**：
   - 嚴禁隨意編造地理座標或門市地址。所有 Schema 門市地址必須嚴格依據中環中建大廈與旺角雅蘭中心官方門市文本。

---

## 6. 數據渲染與 CDN 偽靜態策略 (SSG + Edge SWR)

1. **靜態預渲染 (SSG First)**：
   - 核心業務頁（首頁、SMILE Pro、收費、常見問題等 21 個頁面）必須在 Astro 構建期完成純靜態 HTML 預渲染。
   - 確保所有搜尋引擎爬蟲（Googlebot, Bingbot, Applebot, Gemini GEO 爬蟲）在 `curl` 抓取時直接獲得完整的 HTML，TTFB < 50ms，數據絕不為空。
2. **動態文章邊緣按需渲染與快照 (Edge SWR)**：
   - 科普專欄詳情頁採用 Astro 邊緣按需請求新 CMS (`cms.cmermedical.com.hk`)，並注入 `Cache-Control: public, s-maxage=604800` 標頭，被訪問一次後自動沉澱為 CDN 純靜態快照。
3. **CMS 域名過渡**：
   - 舊 CMS 域名 `admin.hkcmereye.com` 已進入淘汰期。
   - 新 CMS 域名為 `cms.cmermedical.com.hk`。開發到需要動態數據的頁面時，主動提示用戶確認新 API 結構。

---

## 7. 廣告轉化、GTM 與 WhatsApp 追蹤規範

1. **GTM 容器集成**：
   - 正式 GTM 容器 ID 為 `GTM-5M8VLLM`。
   - 所有關鍵轉化元素必須帶有清晰的語意化屬性（如 `data-cta="whatsapp | phone | lecture | book"`），方便在 GTM 後台配置觸發器。
2. **WhatsApp 追蹤參數保護**：
   - 各頁面的 WhatsApp 按鈕必須嚴格按照 `docs/WHATSAPP_TRACKING_MATRIX.md` 注入相應的業務追蹤代碼（例如 `W-15`, `W-05`, `WSPC-2025`, `W-13`, `W-06`, `W-07`, `W-14`, `WM-BAW01` 等）。
3. **在線客服加載**：
   - 採用延時/空閒加載方式加載商務通客服代碼，確保不拖累 Google PageSpeed 指標。

---

## 8. 樣式響應式與組件工程規範 (CSS & Engineering Quality)

1. **禁止濫用無邊界 `vw` 單位**：
   - 嚴禁在文字排版與佈局中大面積使用 `p-[4vw]`, `text-[3.8vw]` 等易失真的硬編碼，必須採用 Tailwind 標準斷點 (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) 或 `clamp()` 限制上下界，保證在 iPad / 平板、筆記本、2K/4K 寬屏顯示器上排版絕不崩潰。
2. **圖片與資產優化**：
   - 本地靜態圖片優先使用 Astro 原生 `<Image />`，自動轉換 WebP/AVIF。
   - 首屏 LCP 核心大圖需配置 `loading="eager"` 與 `fetchpriority="high"`，非首屏圖片一律 `loading="lazy"`。
3. **TypeScript 類型安全**：
   - 所有多語言字典訪問、組件 Props 必須有嚴格的 TypeScript 類型約束，構建時執行 `pnpm astro check` 必須 0 錯誤。

---

## 9. 統一前端樣式書與標準標籤規範 (Design System & HTML5 Standards)

全站嚴格遵循 `STYLE_GUIDE.md` 設計標準，杜絕樣式混亂與標籤隨意嵌套：
1. **排版字階嚴格綁定**：
   - `<h1>` / `.title-page`：每頁唯一，24px (Mobile) -> 36px~40px (PC)。
   - `<h2>` / `.title-normal`：模組大標題，20px -> 28px~32px，與 `<section aria-labelledby>` 綁定。
   - `<h3>` / `.title-card`：子卡片與 FAQ 問題，18px -> 22px~24px。
   - `<p>` / `.text-body`：主體閱讀文本，高行距 (leading-relaxed / leading-loose)。
2. **標準按鈕語言**：
   - 主按鈕：`.btn-primary`
   - WhatsApp 轉化按鈕：`.btn-whatsapp`
   - 幽靈線框按鈕：`.btn-outline`
   - 所有按鈕必須綁定 `data-cta="..."` 屬性。
3. **無障礙與防 CLS 規範**：
   - 所有多媒體必須宣告明確寬高或 `aspect-ratio`，圖片默認 `max-w-full h-auto`。
   - 錨點標題必須自帶 `scroll-margin-top: 5rem`，防止被頂部固定導航遮擋。

## 10. 舊版代碼甄別與現代化重構準則 (Legacy Code Isolation & Modern UI Quality)

1. **廢棄舊代碼隔離與線上版本確認**：
   - `smile2024/` 目錄中混雜大量歷史迭代殘留與已廢棄組件（例如多個不同版本的 `Header.vue`, `footers.vue`, 舊版 home 模組）。
   - **嚴禁盲目拷貝舊 Nuxt 遺留代碼**。在不確定某個舊文件是否為當前線上正式運行的版本時，**必須主動向用戶確認**。
2. **現代化組件化與語意化重構**：
   - 杜絕舊代碼中低質量的 `div` 嵌套與硬編碼樣式，必須採用 2026 現代 Web 標準重構（乾淨的 HTML5 語意地標標籤、Tailwind / 現代 CSS 封裝、Astro 組件化、無障礙 ARIA 支持）。
   - 確保重構後的視覺效果與線上官方標準 100% 精確一致。

---

## 11. 性能與無障礙實戰經驗準則 (PageSpeed, A11y & Third-party Scripts)

在 2026 年首頁重構與 PageSpeed Insights 實測優化中，總結沉澱以下關鍵技術紅線與最佳實踐：

1. **第三方重度腳本 (GTM / 追蹤器) 性能隔離**：
   - **TBT 核心殺手**：GTM 容器體積超 500KB，且內部捆綁 Google Analytics、Meta Pixel、Microsoft Clarity 錄屏腳本。在移動端 4x CPU 降速測試下會搶佔主線程 1,000ms~2,500ms，直接導致 Performance 評分跌至 50~60 分。
   - **實施策略**：第三方非核心業務追蹤腳本禁止在 `<head>` 中同步阻塞加載。必須採用「用戶首次手勢互動 (touchstart/scroll/mousemove) 觸發加載」或「延遲 3.5s~5s 兜底加載」，確保首屏 TBT < 100ms，Performance 分數穩居 85~98 分。
2. **在線客服系統 (商務通 Zoosnet) 防護**：
   - 外部商務通代碼必須採用延時/互動加載，並在加載前提前注入樣式表（`JS5_2.css`）以防畫面抖動。
   - 動態注入的商務通彈窗圖片缺少 `alt` 屬性時，必須配合輕量 `MutationObserver` 自動補齊 `alt=""` 與 `aria-hidden="true"`，杜絕 Lighthouse A11y 扣分。
3. **無障礙 (A11y) 嚴格合規清單**：
   - **ARIA 屬性合法性**：普通非交互元素（如純 `div`）不得隨意使用 `aria-label`；若需用於表示星級或圖像，必須同時賦予標準角色 `role="img"`（遵循 W3C ARIA 1.2+ 規範）。
   - **Heading 層級嚴格遞減**：大板塊 `<h2>` 內部子標題必須使用 `<h3>`，嚴禁跳級為 `<h5>` 或 `<h6>`（`heading-order` 審查項）。
   - **文字色彩對比度 (WCAG 2.1 AA)**：淺色背景上的說明文字/版權聲明/免責條款，字色與背景對比度必須達到 **4.5:1 以上**（例如在淡藍色 `#f4fafc` 背景下，字色應採用 `#595959`，達到 6.6:1，嚴禁使用過淡的 `#88898c`）。
4. **AI 智能體無障礙樹 (Agentic A11y / llms.txt)**：
   - 網站根目錄必須提供標準的 [`/llms.txt`](file:///f:/mysite/antigravity/smile2026Revamp/smile2026/public/llms.txt) 文件，符合 [llmstxt.org](https://llmstxt.org/) 規範：包含唯一的 `# 品牌名稱` H1 標題、核心醫療服務引言區塊，以及全站核心頁面 Markdown 超連結清單與門市地址，便利 LLM / AI 智能體抓取。
5. **圖片資產傳輸與 LCP 優化**：
   - 首屏輪播圖必須提供獨立針對移動端的適配尺寸（如 `800x800` 或 `382x382` WebP），首圖宣告 `loading="eager"`、`fetchpriority="high"`、`decoding="sync"`，杜絕將 1280px 超大原圖直接分發至移動端。

---
*文檔由 Antigravity Agent 自動維護 | 版本：2026.7*

