# 希瑪微笑矯視中心 (CMER Smile) - 2024 舊項目至 2026 Astro 遷移全景審計與頁面清單

> **文檔目的**：基於線上生產環境最新菜單架構與 2024 Nuxt 舊站、2026 Astro 新站代碼庫深度逆向分析生成。本清單已徹底甄別出**線上真正正在使用的最新頁面與組件**，並標記出多次迭代產生的**廢棄/過時舊代碼**，旨在精準遷移、防止廣告與自然流量 404，並落地頂級 SEO / GEO / Schema.org 優化。

---

## 目錄
1. [線上現役 22 大核心路由與精確源代碼映射表 (必遷核心)](#1-線上現役-22-大核心路由與精確源代碼映射表)
2. [舊站過時/廢棄頁面與組件甄別清單 (過濾免除遷移)](#2-舊站過時廢棄頁面與組件甄別清單)
3. [錨點路由與廣告推廣專題頁面 (防 404 必查)](#3-錨點路由與廣告推廣專題頁面)
4. [2026 Astro 新項目代碼可靠性與 SEO/GEO/Schema 審查報告](#4-2026-astro-新項目代碼可靠性與-seogeoschema-審查報告)
5. [301 永久重定向兜底矩陣](#5-301-永久重定向兜底矩陣)
6. [第一輪核心業務與技術確認問題](#6-第一輪核心業務與技術確認問題)

---

## 1. 線上現役 22 大核心路由與精確源代碼映射表

依據線上正在運行的導航菜單（`header-bottom`）及底層路由配置，以下為線上**唯一正在使用**的最新頁面及其對應的 Vue 源文件與依賴組件：

| 模組分類 | 線上路由 (Path) | 簡體版路徑 (CN Path) | 最新對應 Vue 文件 (smile2024) | 依賴核心子組件 | 2026 Astro 當前狀態 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **首頁** | `/` | `/cn/` | `pages/new-page/home.vue` | `BannerSliderV2`, `InstagramSlider`, `VedioSlider` | 已完成初版 (`index.astro`) |
| **關於希瑪** | `/group-profile` | `/cn/group-profile` | `pages/new-page/group-profile.vue` | `Banner`, `H2Tag` | ⚠️ 部分完成 (1.6 KB) |
| | `/our-medical-team` | `/cn/our-medical-team` | `pages/new-page/doctor-team.vue` | `Banner`, `H2Tag` | ⚠️ 僅骨架 (749 B) |
| | `/medical-equipment` | `/cn/medical-equipment` | `pages/new-page/equipment.vue` | `equipmentM`, `Banner`, `H2Tag` | ⚠️ 空殼 (261 B) |
| **矯視服務** | `/smilePro` | `/cn/smilePro` | `pages/new-page/smile-proV2.vue` | `SmileProV2/drow.vue`, `ICL-new/process.vue`, `UserShare` | ⚠️ 空殼 (261 B) |
| | `/vision-correction-icl` | `/cn/vision-correction-icl` | `pages/new-page/iclV2.vue` | `ICL-new/process`, `suitable`, `xtra`, `film`, `share` | ⚠️ 空殼 (261 B) |
| | `/vision-correction/relex-smile` | `/cn/vision-correction/relex-smile` | `pages/new-page/smileV2.vue` | `SwiperCard`, `SwiperRound`, `UserShare`, `ShareSection` | ⚠️ 僅骨架 (772 B) |
| | `/vision-correction-presbyopia` | `/cn/vision-correction-presbyopia` | `pages/lbv/index.vue` | `lbvTable.vue`, `lbvSwiper.vue`, `ICL-new/process` | ⚠️ 空殼 (261 B) |
| | `/vision-correction-lasik` | `/cn/vision-correction-lasik` | `pages/new-page/lasik.vue` | `Banner`, `H2Tag` | ⚠️ 僅骨架 (435 B) |
| **診症須知** | `/patient-info` | `/cn/patient-info` | `pages/new-page/patient-info.vue` | `ICL-new/process`, `suitable`, `SmileProV2/drow.vue` | ⚠️ 空殼 (261 B) |
| **收費詳情** | `/fee` | `/cn/fee` | `pages/new-page/new-feeV2.vue` | `FeeSetMeal.vue`, `FeeTableMobile.vue` | ⚠️ 空殼 (261 B) |
| **常見問題** | `/FreQuestions` | `/cn/FreQuestions` | `pages/FreQuestions/index.vue` | `firstProblem`, `secondProblem`, `thirtProblem`, `fourProblem` | ⚠️ 空殼 (261 B) |
| **矯視資訊** | `/video` | `/cn/video` | `pages/new-page/orthopedic-videoV2.vue` | `shareVideo.vue`, `Banner`, `H2Tag` | ⚠️ 部分完成 (1.8 KB) |
| | `/blog` | `/cn/blog` | `pages/new-page/blog.vue` | `Banner`, `H2Tag`, API 請求 (ID 32/35) | ⚠️ 空殼 (261 B) |
| | `/blog/:id` | `/cn/blog/:id` | `pages/new-page/blog_news/_id.vue` | API 內容請求 (`api.php/content/:id`) | ❌ 缺失 (無動態路由) |
| **聯絡我們** | `/contact-us` | `/cn/contact-us` | `pages/new-page/contact-us.vue` | `Banner`, `H2Tag`, 診所地圖與營業時間 | ⚠️ 部分完成 (741 B) |
| **預約與講座** | `/booking` | `/cn/booking` | `pages/booking/index.vue` | `appointFrom_ifram.vue`, `serve.vue` | ❌ 缺失 (需建立) |
| | `/ophthalmicInfo/AppointForm` | `/cn/ophthalmicInfo/AppointForm` | `pages/new-page/preaching-seat.vue` | `SwiperBanner.vue`, `H2Tag` | ⚠️ 僅骨架 (703 B) |
| **活動推廣** | `/smileProCare` | `/cn/smileProCare` | `pages/smileProCare/index.vue` | `ShareSection.vue` (咖啡機/保障禮品) | ❌ 缺失 (無此頁面) |
| **媒體報導** | `/media-coverage` | `/cn/media-coverage` | `pages/new-page/media-coverage.vue` | `Banner`, `H2Tag` | ❌ 缺失 (無獨立頁面) |
| **條款政策** | `/privacy-policy` | `/cn/privacy-policy` | `pages/privacy-policy/index.vue` | 隱私政策靜態文本 | ⚠️ 空殼 (261 B) |
| | `/disclaimer` | `/cn/disclaimer` | `pages/disclaimer/index.vue` | 免責聲明靜態文本 | ⚠️ 空殼 (261 B) |

---

## 2. 舊站過時/廢棄頁面與組件甄別清單

舊項目經歷多年迭代，代碼中遺留了大量已被 `new-page` 取代或不再掛載的過時文件。在本次 2026 遷移中**嚴格排除以下廢棄文件**，避免將歷史垃圾代碼搬入新站：

### 2.1 已廢棄的舊版頁面文件 (Deprecated Pages)
- ❌ `pages/smilePro/index.vue`（舊版 SMILE Pro，已被 `new-page/smile-proV2.vue` 取代）
- ❌ `pages/new-page/smile-proV2 copy.vue` 及 `preaching-seat copy.vue备份`（開發備份文件）
- ❌ `pages/vision-correction-icl/index.vue`、`index-del.vue`、`new-page/icl.vue`（已被 `new-page/iclV2.vue` 取代）
- ❌ `pages/vision-correction/relex-smile/index.vue`、`index-old.vue`、`new-page/smile.vue`（已被 `new-page/smileV2.vue` 取代）
- ❌ `pages/vision-correction-presbyopia/index.vue`、`new-page/clear-vision.vue`（已被 `lbv/index.vue` 取代）
- ❌ `pages/vision-correction-lasik/index.vue`、`index-old.vue`（已被 `new-page/lasik.vue` 取代）
- ❌ `pages/fee/index.vue`、`pages/charge-detail/index.vue`、`new-page/fee.vue`、`new-page/new-fee.vue`（已被 `new-page/new-feeV2.vue` 取代）
- ❌ `pages/FreQuestions/new-index.vue`、`new2-problem.vue`、`new-page/common-problem.vue`（已被 `FreQuestions/index.vue` 取代）
- ❌ `pages/video/index.vue`、`new-page/orthopedic-video.vue`（已被 `new-page/orthopedic-videoV2.vue` 取代）
- ❌ `pages/contact-us/index.vue`、`pages/contactus000/index.vue`（已被 `new-page/contact-us.vue` 取代）
- ❌ `pages/eye-checkup/index.vue`、`pages/flow-of-vision-correction/index.vue`、`pages/post-corrective-care/index.vue`、`pages/Notice/*`（已被整合進 `new-page/patient-info.vue` 的錨點區塊）
- ❌ `pages/divit/index.vue`、`pages/consumption-voucher.zip`、`new-page/trext.vue`（歷史活動廢棄頁）

### 2.2 已廢棄的舊版組件 (Deprecated Components)
- ❌ `components/commom/head/*`（舊版頭部，已被 `commom/new_head/*` 或新版 Astro Header 取代）
- ❌ `components/commom/foot/*`（舊版底部，已被 `layout/Footer.vue` 取代）
- ❌ `components/content/aboutus/*`（舊版關於我們組件）
- ❌ `components/content/service/relex_smile/*`（舊版 SMILE 組件）
- ❌ `components/content/service/ICL/*`、`ICL-R/*`（舊版 ICL 組件）
- ❌ `components/content/service/LASIK/*`（舊版 LASIK 組件）
- ❌ `components/content/service/CLEAR_Vision/*`（舊版 CLEAR 組件）

---

## 3. 錨點路由與廣告推廣專題頁面

### 3.1 線上菜單原生錨點（重要導航交互）
線上導航菜單直接指向下列錨點，新版 2026 Astro 頁面內部相應 HTML 標籤**必須嚴格保留對應 `id` 屬性**：

1. **診症須知 (`/patient-info`)**：
   - `#beforeJiaoShi` ➔ 眼睛檢查及矯視前 (停止佩戴隱形眼鏡須知)
   - `#inJiaoShi` / `#process` ➔ 矯視當天流程
   - `#afterJiaoShi` / `#followUp` ➔ 矯視後覆診與護理
2. **常見問題 (`/FreQuestions`)**：
   - `#faq-smile` ➔ SMILE Pro 2.0 / SMILE 微笑激光矯視 FAQ
   - `#faq-lasik` ➔ LASIK 激光矯視 FAQ
   - `#faq-icl` ➔ ICL 植入式隱形眼鏡 FAQ
   - `#faq-presbyopia` ➔ 老花矯視 FAQ

### 3.2 廣告專用推廣專題
- `/smileProCare` ➔ 現役正在投放的專屬禮品/保障推廣頁（對應 `pages/smileProCare/index.vue`）
- `new-page/icl2510.vue` 與 `new-page/icltalk-2025.vue` ➔ 歷史專項推廣頁，需確認是否有活躍廣告投放中。

---

## 4. 2026 Astro 新項目代碼可靠性與 SEO/GEO/Schema 審查報告

### 4.1 架構與代碼質量診斷
1. **空殼頁面佔比 90%**：新項目中除 `index.astro` 外，其餘頁面均只有 10 行佔位代碼，需全面將上述現役 Vue 業務代碼重構成 Astro 組件。
2. **多語言路由字典衝突**：`i18nPaths` 存在 `en`，但 `ui.ts` 註釋了英文字典，構建易報錯。
3. **動態文章路由缺失**：需在 `src/pages/[...lang]/blog/[id].astro` 實現構建期靜態拉取 (SSG)。

### 4.2 SEO / GEO / Schema.org 最新標準差距
- ❌ **Schema.org 結構化數據完全缺失**：亟需封裝 `SchemaClinic.astro` (`MedicalClinic`)、`SchemaDoctor.astro` (`Physician`)、`SchemaProcedure.astro` (`MedicalProcedure`)、`SchemaFAQ.astro` (`FAQPage`)、`SchemaBreadcrumb.astro`。
- ❌ **Canonical 與 Hreflang 缺失**：每個語言版本缺少標準網址與多語言互指標籤。
- ❌ **GEO 本地定位 Meta 缺失**：缺少香港本地經緯度與區域標籤 (`geo.region`, `geo.position`, `ICBM`)。
- ⚠️ **GTM 追蹤被註釋**：需恢復正式 `GTM-5M8VLLM` 容器以維持廣告轉換歸因。

---

## 5. 301 永久重定向兜底矩陣

為防止歷史收錄與外鏈訪問舊頁面時發生 404，需配置下列 301 重定向規則：

```text
# 歷史流程與須知頁面重定向
/eye-examination                /patient-info#beforeJiaoShi  301
/flow-of-vision-correction      /patient-info#inJiaoShi      301
/post-corrective-care           /patient-info#afterJiaoShi   301
/Notice/*                       /patient-info                301

# 歷史媒體與服務別名重定向
/ophthalmicInfo/mediaCov        /media-coverage              301
/ophthalmicInfo/serveYyue       /booking                     301
/ophthalmicInfo/shareVideos     /video                       301
/vision-correction-lasikV2      /vision-correction-lasik     301
/FreQuestions-presbyopia        /FreQuestions#faq-presbyopia 301
/charge-detail                  /fee                         301
/divit                          /                            301

# 簡體版對應重定向
/cn/eye-examination             /cn/patient-info#beforeJiaoShi  301
/cn/flow-of-vision-correction   /cn/patient-info#inJiaoShi      301
/cn/post-corrective-care        /cn/patient-info#afterJiaoShi   301
/cn/vision-correction-lasikV2   /cn/vision-correction-lasik     301
```

---

## 6. 第一輪核心業務與技術確認問題

1. **英文版 (EN)**：新版是否正式上線英文版，還是僅保留繁體 (zh-HK) 與簡體 (zh-CN)？
2. **廣告推廣專題 (`icl2510` / `icltalk-2025` / `smileProCare`)**：目前線上是否有活躍廣告投放？需 1:1 完整保留原 URL 還是 301 合併？
3. **預約表單 (`/booking` 與 `/ophthalmicInfo/AppointForm`)**：新版是繼續對接後台 API、嵌入 CRM 表單，還是導流至 WhatsApp 預約？
4. **科普專欄 API (`/blog` 與 `/blog/:id`)**：後台 API (`https://admin.hkcmereye.com/api.php/list/32`) 是否正常運作？新版是否採 Astro 構建期靜態拉取 (SSG)？
5. **在線客服**：舊版頭部的商橋客服代碼 (`https://mqj.zoosnet.net/JS/LsJS.aspx`) 新版是否保留？
6. **GTM 與廣告轉換**：新項目是否繼續沿用 `GTM-5M8VLLM`？是否有特定的 Meta Pixel 或 Google Ads 轉換事件？
7. **WhatsApp 引流追蹤參數**：各頁面的 WhatsApp 追蹤代碼（如 `W-15`, `WSPC-2025` 等）是否有固定的業務命名規範需精確還原？
8. **老花矯視宣傳定位**：目前官方主打是「LBV 融像老花矯視」還是「CLEAR 矯視」？
9. **醫生團隊最新資歷**：醫生名單與頭銜是否需同步最新 2026 資料以強化 Schema.org `Physician` 標記？
10. **診所地址與 GEO 本地定位**：中環中信大廈與旺角朗豪坊旗艦店門市資訊是否有更新？
11. **伺服器部署環境**：預計部署在 Cloudflare Pages, Nginx 還是其他環境？
12. **域名切換與測試時程**：切換至 2026 Astro 的時程節奏為何？
