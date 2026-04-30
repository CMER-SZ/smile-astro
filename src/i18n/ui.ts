/*
 * @Author: 谭洁莹
 * @Date: 2026-04-24 18:42:52
 * @LastEditTime: 2026-04-30 13:42:49
 * @FilePath: /src/i18n/ui.ts
 * @Description: 导出所有语言的字典对象，并定义相关类型
 */
import { zhHK } from './zh-hk';
import { en } from './en';
import { zhCN } from './zh-cn';

export type Dictionary = typeof zhHK;

// export const ui = {
//   'zh-hk': zhHK,
//   'en': en as Dictionary,
//   'zh-cn': zhCN as Dictionary,
// } as const;
export const ui = {
  'zh-hk': zhHK,
  // 'en': en,
  // 'zh-cn': zhCN,
} as const;

export type Lang = keyof typeof ui;
export type Dict = typeof zhHK;
