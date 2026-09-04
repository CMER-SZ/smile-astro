# 香港希瑪微笑矯視中心 (CMER Smile 2026) - 現代化前端樣式書與 HTML5 規範標準 (STYLE_GUIDE.md)

> **版本**：2026.1 (Production Standard)  
> **目標**：杜絕舊版前端代碼與樣式結構混亂的問題，全面對齊 Google 2026 Core Web Vitals (CWV)、GEO (AI 實體識別)、WCAG AA 無障礙標準與現代化響應式排版。

---

## 1. 核心排版與層次規範 (Typography Scale System)

為確保全站字階清晰、嚴禁字號與 Heading 混亂，全站嚴格執行以下排版階層：

| 標籤 / 類名 | 用途與位置 | 字號 (Mobile -> PC) | 字重 | 語意說明 |
| :--- | :--- | :--- | :--- | :--- |
| **`<h1>`** 或 `.title-page` | **每頁唯一主標題**（首頁使用 `.sr-only`，內頁頂部顯式標題） | `24px` -> `36px~40px` | `font-black (900)` / `font-bold` | 賦予搜尋引擎與 GEO 爬蟲最高主題權重 |
| **`<h2>`** 或 `.title-normal` | **模組/區塊大標題**（服務看板、核心特色、常見問題等） | `20px` -> `28px~32px` | `font-black (900)` | 區塊唯一主題，與 `<section aria-labelledby>` 綁定 |
| **`<h3>`** 或 `.card-title` | **子卡片標題 / FAQ 問題 / 方案名稱** | `18px` -> `22px~24px` | `font-bold (700)` | 獨立實體單元核心標題 |
| **`<h4>`** | **醫生職稱 / 標籤 / 步驟序號** | `15px` -> `18px` | `font-medium (500)` | 次級輔助標題 |
| **`<p>`** 或 `.text-body` | **正文內容 / 醫療說明 / 簡介段落** | `14px` -> `16px~18px` | `font-light (300)` / `leading-loose` | 主體閱讀文本，高行距提升閱讀舒適度 |
| **`<small>`** / **`<time>`** | **覆診週期 / 發布時間 / 免責聲明** | `12px` -> `14px` | `font-normal (400)` / `text-gray-400` | 備註與法律免責聲明 |

---

## 2. 語意化品牌色彩系統 (Semantic Color Palette)

全站顏色統一由 CSS 變數定義，杜絕在業務代碼中隨意硬編碼 RGB/HEX 顏色：

```css
:root {
  /* 品牌主色 (對齊官方 Logo SVG #4570b6：希瑪皇家科技藍) */
  --color-primary: #4570b6;
  --color-primary-hover: #355995;
  --color-primary-dark: #2958a3;
  --color-primary-subtle: #6b8ec4;

  /* 高轉化轉導色 (WhatsApp 官方綠色) */
  --color-whatsapp: #67ad5b;
  --color-whatsapp-hover: #55934a;

  /* 醫療純淨背景色系 */
  --color-bg-subtle: #f8fafc;
  --color-bg-accent: #f0f6ff;

  /* 正文與文字色彩層次 (WCAG AA 4.5:1 對比度認證) */
  --color-text-main: #1e293b;  /* 主標題與關鍵強調 (深灰藍黑) */
  --color-text-desc: #515151;  /* 標準正文與說明 (深灰) */
  --color-text-muted: #888888; /* 輔助註釋與圖說 (淺灰) */
  --color-border: #e2e8f0;     /* 柔和分割線 */
}
```

---

## 3. 標準 CTA 按鈕設計語言 (Button Design Language)

全站按鈕規範化封裝，禁止各頁面自行書寫粗暴突兀的樣式：

1. **`.btn-primary` (主行動按鈕)**：
   - 樣式：圓角膠囊 (`rounded-full`)、品牌藍底白字、微陰影。
   - 交互：`:hover` 輕微上浮 1px 與背景色平滑加深 (`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`)。
2. **`.btn-whatsapp` (WhatsApp 專屬轉化按鈕)**：
   - 樣式：WhatsApp 官方綠底白字，自帶 WhatsApp Icon 與 `(W-xx)` 追蹤參數。
3. **`.btn-outline` (次級幽靈線框按鈕)**：
   - 樣式：1.5px 品牌藍邊框、藍字。`:hover` 實心藍底白字。
4. **追蹤屬性約束**：所有按鈕必須附帶 `data-cta="..."` 屬性。

---

## 4. 現代化 CSS Reset 與效能優化 (Performance & Web Vitals)

1. **圖片與多媒體 CLS (Cumulative Layout Shift) 歸零**：
   - 所有圖片與影片必須明確宣告 `width` / `height` 或 Tailwind 的 `aspect-ratio`（如 `aspect-square`, `aspect-16/9`, `aspect-8/3`），防止圖片下載延遲造成頁面跳動。
   - 圖片默認 `display: block; max-width: 100%; height: auto;`。
2. **文字排版與渲染優化**：
   - 全域開啟平滑字型渲染：`-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility;`。
   - 英文與數字使用 `Poppins`，繁體中文使用 `Noto Sans HK`，簡體中文使用 `Noto Sans SC`。
3. **流暢滾動與錨點偏移**：
   - `html { scroll-behavior: smooth; }`。
   - 錨點跳轉配置 `scroll-margin-top: 80px`，防止頂部固定導航欄遮擋錨點標題。

---

## 5. HTML5 語意地標與 GEO 拓撲結構 (Semantic Landmarks Checklist)

每個頁面必須嚴格符合以下結構：

```html
<BaseLayout tdkKey="pageKey">
  <!-- 1. 唯一 H1 (頁面核心主題) -->
  <h1 class="...專屬標題或 sr-only...">...</h1>

  <!-- 2. 獨立業務區塊 (必須用 section + aria-labelledby) -->
  <section id="features" aria-labelledby="features-title">
    <div class="wrapper">
      <h2 id="features-title" class="title-normal">區塊主標題</h2>
      
      <!-- 3. 卡片列表 (必須用 article) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article class="card-item">
          <h3 class="card-title">方案/卡片名稱</h3>
          <p class="text-body">內容說明...</p>
        </article>
      </div>
    </div>
  </section>

  <!-- 4. 門市實體資訊 (必須用 address 標籤) -->
  <address class="not-italic">
    中環畢打街1-3號中建大廈1512室 (電話: 3956 2026)
  </address>
</BaseLayout>
```

---
*文檔歸檔於 CMER Smile 2026 核心規範體系 | 制定日期：2026.09*
