/**
 * Domain live hien tai - ten mien rieng thehangivietnam.xyz (mua 2026-07-27).
 * Nguon duy nhat cho site/base: astro.config.mjs doc lai 2 hang so nay.
 * Con cho: user vao GitHub repo Settings > Pages > Custom domain de tro domain nay,
 * va tro DNS o noi mua domain. Xem DEPLOY.md.
 */
export const SITE_URL = 'https://thehangivietnam.xyz';
export const BASE_PATH = '';

/**
 * Thong tin doanh nghiep - nguon: ho so dang ky kinh doanh.
 */
export const SITE = {
  ten_day_du: 'CÔNG TY TNHH THE HANGI VIỆT NAM',
  ten_day_du_en: 'THE HANGI VIET NAM COMPANY LIMITED',
  ten_thuong_hieu: 'THE HANGI',
  ma_so_thue: '0318010232',
  tru_so: '195/10/2 Đường Điện Biên Phủ, Phường 15, Quận Bình Thạnh, TP. Hồ Chí Minh',
  tru_so_en: '195/10/2 Dien Bien Phu St., Ward 15, Binh Thanh District, Ho Chi Minh City',
  van_phong: 'Tầng 5, Tòa nhà TTM Building, 309 Bạch Đằng, Phường Gia Định, TP. Hồ Chí Minh',
  van_phong_en: '5th Floor, TTM Building, 309 Bach Dang, Gia Dinh Ward, Ho Chi Minh City',
  hotline: ['0815 186 268', '0369 838 931'],
  email: 'kalinnguyenn@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61591032317104',
  nguoi_dai_dien: 'HE, XIAOCHEN',
  nguoi_chiu_trach_nhiem_noi_dung: 'Deema - Trương Mậu Tuấn Hùng',
  nam_thanh_lap: '2023',
  pham_vi: 'Seoul (HQ) - TP. Hồ Chí Minh - Hà Nội',
} as const;

/** So dien thoai hien thi (vd "0815 186 268") -> href tel: chuan quoc te (+84...) */
export function telHref(soHienThi: string): string {
  const soChiSo = soHienThi.replace(/\D/g, '');
  return `tel:+84${soChiSo.replace(/^0/, '')}`;
}
