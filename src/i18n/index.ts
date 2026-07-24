import vi from './vi';
import en from './en';

export type Lang = 'vi' | 'en';
export type TKey = keyof typeof vi;

const dicts = { vi, en } as const;

export function useT(lang: Lang) {
  return (key: TKey): string => dicts[lang][key];
}

/** Duong dan tuong ung giua hai ngon ngu - giu nguyen trang khi chuyen */
export function localePath(lang: Lang, path: string): string {
  const clean = path.replace(/^\/en(\/|$)/, '/');
  return lang === 'en' ? `/en${clean === '/' ? '' : clean}` : clean;
}
