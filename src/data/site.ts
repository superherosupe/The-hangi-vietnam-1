/**
 * Domain live hien tai - ten mien rieng thehangivietnam.xyz (mua 2026-07-27).
 * Nguon duy nhat cho site/base: astro.config.mjs doc lai 2 hang so nay.
 * Con cho: user vao GitHub repo Settings > Pages > Custom domain de tro domain nay,
 * va tro DNS o noi mua domain. Xem DEPLOY.md.
 */
export const SITE_URL = 'https://thehangivietnam.xyz';
export const BASE_PATH = '';

/**
 * Access key cua Web3Forms (form lien he o /lien-he). CHUA CO - form se KHONG gui duoc
 * cho toi khi dien key that vao day. Lay tai https://web3forms.com bang email cong ty
 * (vd thehangivietnam@gmail.com), khong can dang ky tai khoan, key nay an toan de nhung
 * vao HTML (khong phai bi mat, no chi gan voi hom thu nhan).
 */
export const WEB3FORMS_ACCESS_KEY = 'd2c8b10c-38ce-4799-ad53-6a9a3c4f3c87';

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
  van_phong: '62 Trần Quang Khải, Phường Tân Định, Quận 1, TP. Hồ Chí Minh',
  van_phong_en: '62 Tran Quang Khai St., Tan Dinh Ward, District 1, Ho Chi Minh City',
  hotline: ['0815 186 268', '0369 838 931'],
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
