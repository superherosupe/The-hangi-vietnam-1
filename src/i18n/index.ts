import vi from './vi';
import en from './en';

export type Lang = 'vi' | 'en';
export type TKey = keyof typeof vi;

const dicts = { vi, en } as const;

export function useT(lang: Lang) {
  return (key: TKey): string => dicts[lang][key];
}

/** Base path khi deploy duoi duong dan con (GitHub Pages project) - '' khi o goc */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Duong dan tuong ung giua hai ngon ngu - giu nguyen trang khi chuyen, tu dong kem base */
export function localePath(lang: Lang, path: string): string {
  const clean = path.replace(/^\/en(\/|$)/, '/');
  const p = lang === 'en' ? `/en${clean === '/' ? '' : clean}` : clean;
  return `${BASE}${p}`;
}
