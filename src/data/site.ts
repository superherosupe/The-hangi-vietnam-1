/**
 * Domain live hien tai - CHUA CO ten mien rieng, dang dung GitHub Pages tam.
 * Nguon duy nhat cho site/base: astro.config.mjs doc lai 2 hang so nay.
 * Khi mua ten mien rieng: doi SITE_URL, xoa BASE_PATH (dat = ''), va xem DEPLOY.md.
 */
export const SITE_URL = 'https://superherosupe.github.io';
export const BASE_PATH = '/The-hangi-vietnam-1';

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
  hotline: '0815 186 268 / 0369 838 931',
  email: 'kalinnguyenn@gmail.com',
  nguoi_dai_dien: 'HE, XIAOCHEN',
  nguoi_chiu_trach_nhiem_noi_dung: 'Deema - Trương Mậu Tuấn Hùng',
  nam_thanh_lap: '2023',
  pham_vi: 'Seoul (HQ) - TP. Hồ Chí Minh - Hà Nội',
} as const;
