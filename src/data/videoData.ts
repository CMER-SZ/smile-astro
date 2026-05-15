/*
 * @Author: 谭洁莹
 * @Date: 2026-05-15 14:12:40
 * @LastEditTime: 2026-05-15 18:01:48
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
