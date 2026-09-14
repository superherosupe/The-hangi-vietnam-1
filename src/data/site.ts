/**
 * Domain live hien tai - ten mien rieng thehangivietnam.xyz (mua 2026-07-27).
 * Nguon duy nhat cho site/base: astro.config.mjs doc lai 2 hang so nay.
 * Con cho: user vao GitHub repo Settings > Pages > Custom domain de tro domain nay,
 * va tro DNS o noi mua domain. Xem DEPLOY.md.
 */
export const SITE_URL = 'https://thehangivietnam.xyz';
export const BASE_PATH = '';

/**
 * Access key cua Web3Forms (form lien he o /lien-he) - thu ve hom thu thehangivietnam@gmail.com.
 * Lam moi lai 14/09/2026. Key nay an toan de nhung vao HTML, khong phai bi mat.
 */
export const WEB3FORMS_ACCESS_KEY = '8c7b1b5a-0095-4302-b88f-f9969cf3508f';

/**
 * Thong tin doanh nghiep - nguon: ho so dang ky kinh doanh.
 */
export const SITE = {
  ten_day_du: 'CÔNG TY TNHH THE HANGI VIỆT NAM',
  ten_day_du_en: 'THE HANGI VIET NAM COMPANY LIMITED',
  ten_thuong_hieu: 'THE HANGI',
  ma_so_thue: '0318010232',
  // Tru so = dia chi dang ky kinh doanh, da gop chung voi noi lam viec chinh thuc (xac nhan 14/09/2026).
  tru_so: '62 Trần Quang Khải, Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
  tru_so_en: '62 Tran Quang Khai St., Tan Dinh Ward, District 1, Ho Chi Minh City',
  hotline: ['0815 186 268', '0868 596 660'],
  email: 'thehangivietnam@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61591032317104',
  tiktok: 'https://www.tiktok.com/@hangi.vietnam',
  instagram: 'https://www.instagram.com/thehangivietnam',
  nguoi_dai_dien: 'HE, XIAOCHEN',
  nam_thanh_lap: '2023',
  pham_vi: 'Seoul (HQ) - TP. Hồ Chí Minh - Hà Nội',
} as const;

/** So dien thoai hien thi (vd "0815 186 268") -> href tel: chuan quoc te (+84...) */
export function telHref(soHienThi: string): string {
  const soChiSo = soHienThi.replace(/\D/g, '');
  return `tel:+84${soChiSo.replace(/^0/, '')}`;
}
