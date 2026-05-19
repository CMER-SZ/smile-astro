/*
 * @Author: 谭洁莹
 * @Date: 2026-05-15 14:12:40
 * @LastEditTime: 2026-05-18 17:42:48
 * @FilePath: /src/data/videoData.ts
 * @Description: 用家分享视频数据合集
 */
export type VideoType = "smilepro" | "smile" | "icl";

export interface VideoItem {
  type: VideoType[];
  name: string;
  enName: string;
  title: string;
  link: string;
  img: string;
  webp?: string;
  avif?: string;
}

// 统一管理所有视频数据
export const ALL_VIDEOS: VideoItem[] = [
  {
    type: ["smilepro", "icl"],
    name: "群星",
    enName: "",
    title: "真實用家共同見證<br/>「真實」自己",
    link: "https://youtu.be/NtULZl7qUEg",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-027-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "文凱婷",
    enName: "Aerent",
    title: "清楚咗 唱Live都放鬆咗",
    link: "https://youtu.be/LvVdc3l7XpE",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-026-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "曾展望",
    enName: "GM",
    title: "做SMILE Pro梗係搵<br/>希瑪!",
    link: "https://youtu.be/kPM1KMcAwss",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-025-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "樊沛珈",
    enName: "Gi",
    title: "穿搭由眼睛開始自由",
    link: "https://youtu.be/Z-jpOoOpMEg",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-024-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "阮浩棕",
    enName: "Nicholas",
    title: "唔使再忍受除戴Con嘅<br/>痛苦",
    link: "https://youtu.be/iNu-uMliXNA",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-023-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "米姬",
    enName: "Maggie",
    title: "做咗SMILE Pro 2年<br/>都仲睇得咁清楚",
    link: "https://youtu.be/tcvQgB4IXDk",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-022-v1.avif",
  },
  {
    type: ["smilepro"],
    name: "李蒨怡",
    enName: "Sarah",
    title: "唔洗矇查查周圍搵眼鏡",
    link: "https://youtu.be/Z5ut-9tIhmo",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-021.avif",
  },
  {
    type: ["smilepro"],
    name: "沈以諾",
    enName: "Jay",
    title: "無咗眼鏡都一樣做到唔<br/>同活動",
    link: "https://youtu.be/857FwJQu7OA",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro-020.avif",
  },
  {
    type: ["smilepro"],
    name: "譚凱琳",
    enName: "Karen",
    title: "咸淡水活動都咁方便",
    link: "https://youtu.be/AT7ZVZ4lFgM",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro1.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Anson Au",
    title: "無哂Con帶嚟嘅麻煩<br/>促進咗眼神交流",
    link: "https://youtu.be/10KYv_gGgWM",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro2.avif",
  },
  {
    type: ["smilepro"],
    name: "倪嘉雯",
    enName: "Carmen",
    title: "做咗就可以好似我依家<br/>咁方便㗎喇",
    link: "https://youtu.be/TBI6J31JwJQ",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro3.avif",
  },
  {
    type: ["smilepro"],
    name: "",
    enName: "Mimi Lau",
    title: "無哂Con帶嚟嘅麻煩<br/>促進咗眼神交流",
    link: "https://youtu.be/10KYv_gGgWM",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro4.avif",
  },
  {
    type: ["smilepro"],
    name: "鄧伊程",
    enName: "Tiffany",
    title: "唔洗花時間戴Con，<br/>可以直接出門練習，<br/>非常方便",
    link: "https://youtu.be/TBI6J31JwJQ",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro3.avif",
  },
  {
    type: ["smilepro"],
    name: "米姬",
    enName: "Maggie",
    title: "好舒服之下就完成咗<br/>成個過程",
    link: "https://youtu.be/AT7ZVZ4lFgM",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro1.avif",
  },
  {
    type: ["smilepro"],
    name: "莎比亞",
    enName: "SAPIAH",
    title: "無咗副Con<br/>生活自主返",
    link: "https://youtu.be/jBAIJeUQGz0",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smilepro/smilepro19.avif",
  },
  {
    type: ["smile"],
    name: "黃啟樂",
    enName: "",
    title: "就算落雨都唔會再影響<br/>到我跑步嘅心情",
    link: "https://youtu.be/TGxol6pNXSY",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/smile/smile-001.avif",
  },
  {
    type: ["icl"],
    name: "陳楨怡",
    enName: "Celina",
    title: "全天候高清視力<br/>我靠ICL!",
    link: "https://youtu.be/M4-FA9U3VPo",
    img: "https://statichk.cmermedical.com/smile/orthopedic-video/icl/icl-012-v1.avif",
  },
];

// 定义 Tab 对应关系
export const VIDEO_TABS = [
  { key: "smilepro", label: "SMILE Pro" },
  { key: "smile", label: "SMILE" },
  { key: "icl", label: "ICL" },
] as const;
