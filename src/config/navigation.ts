/*
 * @Author: Antigravity AI
 * @Date: 2026-09-02
 * @FilePath: /src/config/navigation.ts
 * @Description: 全域導航數據配置中心 (Single Source of Truth，支援多語言視圖驅動)
 */

export interface NavChildItem {
  id: string;
  name: string;
  path: string;
  title: string;
}

export interface NavMenuItem {
  id: string;
  name: string;
  path: string;
  hasDot: boolean;
  title: string;
  children?: NavChildItem[];
}

/**
 * 根據 i18n 字典動態解析導航數據
 */
export function getHeaderNavigation(dict: any): NavMenuItem[] {
  return [
    {
      id: "about",
      name: dict.common.menu.about.title,
      path: "/group-profile",
      title: "關於希瑪微笑矯視中心",
      hasDot: true,
      children: [
        {
          id: "about-group",
          name: dict.common.menu.about.group,
          path: "/group-profile",
          title: "了解香港希瑪眼科集團簡介與背景",
        },
        {
          id: "about-team",
          name: dict.common.menu.about.team,
          path: "/our-medical-team",
          title: "查看希瑪微笑矯視專科醫生團隊名冊",
        },
        {
          id: "about-equipment",
          name: dict.common.menu.about.equipment,
          path: "/medical-equipment",
          title: "查看德國蔡司等國際先進醫療設備",
        },
      ],
    },
    {
      id: "service",
      name: dict.common.menu.service.title,
      path: "/smilePro",
      title: "希瑪全系列矯視醫療服務",
      hasDot: true,
      children: [
        {
          id: "service-smilepro",
          name: dict.common.menu.service.smilepro,
          path: "/smilePro",
          title: "SMILE Pro 2.0 微笑激光矯視 - 10秒極速全飛秒",
        },
        {
          id: "service-icl",
          name: dict.common.menu.service.icl,
          path: "/vision-correction-icl",
          title: "ICL 植入式隱形眼鏡 - 高度近視及散光不切削角膜方案",
        },
        {
          id: "service-smile",
          name: dict.common.menu.service.smile,
          path: "/vision-correction/relex-smile",
          title: "SMILE 微笑激光矯視 - 德國蔡司全飛秒微創技術",
        },
        {
          id: "service-presbyopia",
          name: dict.common.menu.service.presbyopia,
          path: "/vision-correction-presbyopia",
          title: "老花矯視方案 - PRESBYOND LBV / CLEAR-Vision / ICL Viva",
        },
        {
          id: "service-lasik",
          name: dict.common.menu.service.lasik,
          path: "/vision-correction-lasik",
          title: "LASIK 傳統激光矯視服務",
        },
      ],
    },
    {
      id: "instructions",
      name: dict.common.menu.instructions.title,
      path: "/patient-info",
      title: "矯視診症與手術須知",
      hasDot: true,
      children: [
        {
          id: "instructions-pre",
          name: dict.common.menu.instructions.pre,
          path: "/patient-info#beforeJiaoShi",
          title: "術前檢查與準備注意事項",
        },
        {
          id: "instructions-process",
          name: dict.common.menu.instructions.process,
          path: "/patient-info#inJiaoShi",
          title: "矯視當日手術流程與需知",
        },
        {
          id: "instructions-post",
          name: dict.common.menu.instructions.post,
          path: "/patient-info#afterJiaoShi",
          title: "術後保養與定期覆診保障",
        },
      ],
    },
    {
      id: "fee",
      name: dict.common.menu.fee,
      path: "/fee",
      title: "矯視收費詳情與價目表",
      hasDot: false,
    },
    {
      id: "faq",
      name: dict.common.menu.faq.title,
      path: "/FreQuestions",
      title: "矯視常見問題 FAQ",
      hasDot: true,
      children: [
        {
          id: "faq-smile",
          name: dict.common.menu.faq.smile,
          path: "/FreQuestions#faq-smile",
          title: "SMILE Pro 2.0 / SMILE 微笑激光矯視常見問題 FAQ",
        },
        {
          id: "faq-lasik",
          name: dict.common.menu.faq.lasik,
          path: "/FreQuestions#faq-lasik",
          title: "LASIK 激光矯視常見問題 FAQ",
        },
        {
          id: "faq-icl",
          name: dict.common.menu.faq.icl,
          path: "/FreQuestions#faq-icl",
          title: "ICL 植入式隱形眼鏡常見問題 FAQ",
        },
        {
          id: "faq-presbyopia",
          name: dict.common.menu.faq.presbyopia,
          path: "/FreQuestions#faq-presbyopia",
          title: "老花矯視常見問題 FAQ",
        },
      ],
    },
    {
      id: "news",
      name: dict.common.menu.news.title,
      path: "/video",
      title: "最新矯視資訊與專欄",
      hasDot: true,
      children: [
        {
          id: "news-case",
          name: dict.common.menu.news.case,
          path: "/video",
          title: "用家矯視真實案例分享影片",
        },
        {
          id: "news-knowledge",
          name: dict.common.menu.news.knowledge,
          path: "/blog",
          title: "眼科專科醫生科普專欄文章",
        },
      ],
    },
    {
      id: "contact",
      name: dict.common.menu.contact,
      path: "/contact-us",
      title: "聯絡我們 - 香港中環及旺角旗艦門市",
      hasDot: false,
    },
  ];
}
