import { zhHK } from './zh-hk';
import { en } from './en';
import { zhCN } from './zh-cn';

export type Dictionary = typeof zhHK;

export const ui = {
  'zh-hk': zhHK,
  'en': en as Dictionary,
  'zh-cn': zhCN as Dictionary,
} as const;

export type Lang = keyof typeof ui;
export type Dict = typeof zhHK;
