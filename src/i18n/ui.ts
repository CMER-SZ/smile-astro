import { zhHk } from './zh-hk';
import { en } from './en';
import { zhCn } from './zh-cn';

export type Dictionary = typeof zhHk;

export const ui = {
  'zh-hk': zhHk,
  'en': en as Dictionary,
  'zh-cn': zhCn as Dictionary,
} as const;

export type Lang = keyof typeof ui;
export type Dict = typeof zhHk;
