import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Schema san pham - cac truong phap ly la BAT BUOC theo:
 * - ND 98/2021/ND-CP (sd bs ND 07/2023, ND 04/2025) ve quan ly thiet bi y te
 * - ND 342/2025/ND-CP quy dinh chi tiet Luat Quang cao
 * Build se FAIL neu thieu truong. Khong duoc lach bang chuoi rong.
 */

const PHAN_LOAI = [
  'thiet-bi-y-te-a',
  'thiet-bi-y-te-b',
  'thiet-bi-y-te-c',
  'thiet-bi-y-te-d',
  'my-pham',
] as const;

const NHOM = ['skinbooster-plla', 'skinbooster-khac', 'my-pham-chuyen-khoa'] as const;

const batBuoc = (ten: string) =>
  z.string({ required_error: `Thieu truong phap ly bat buoc: "${ten}"` }).min(1, {
    message: `Truong phap ly "${ten}" khong duoc de trong. Neu chua co du lieu, ghi ro "CHUA CO" va KHONG publish san pham nay.`,
  });

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: ({ image }) =>
    z
      .object({
        // Dinh danh
        ten: batBuoc('ten (ten thuong mai)'),
        ten_thiet_bi: z.string().nullable(), // ten thiet bi y te theo phieu cong bo (VD: "Dung dich dieu tri da")
        ma_san_pham: batBuoc('ma_san_pham'),
        thuong_hieu: batBuoc('thuong_hieu'),
        nhom: z.enum(NHOM),
        phan_loai_phap_ly: z.enum(PHAN_LOAI, {
          errorMap: () => ({
            message: `phan_loai_phap_ly phai la mot trong: ${PHAN_LOAI.join(', ')}`,
          }),
        }),

        // Phap ly
        so_luu_hanh_hoac_cong_bo: batBuoc('so_luu_hanh_hoac_cong_bo'),
        ngay_cong_bo: z.string().nullable(),
        co_so_cong_bo_ten: z.string().nullable(),
        co_so_cong_bo_dia_chi: z.string().nullable(),
        chu_so_huu_ten: batBuoc('chu_so_huu_ten'),
        chu_so_huu_dia_chi: batBuoc('chu_so_huu_dia_chi'),
        co_so_nhap_khau_ten: z.string().nullable(),
        co_so_nhap_khau_dia_chi: z.string().nullable(),

        // Thong tin san pham theo tai lieu nha san xuat (khong phai cong bo cong dung)
        khau_hieu: z.string().nullable().default(null),
        thanh_phan_chinh: z.array(z.object({ ten: z.string().min(1), mo_ta: z.string().default('') })).default([]),
        cong_nghe: z.array(z.object({ ten: z.string().min(1), mo_ta: z.string().min(1) })).default([]),

        // Noi dung cong bo - CHI ghi dung noi dung da cong bo, khong suy dien
        muc_dich_su_dung: z.string().min(20, {
          message:
            'muc_dich_su_dung phai trich dung noi dung da cong bo (toi thieu 20 ky tu). Khong duoc tu viet cong dung.',
        }),
        canh_bao: z.array(z.string()), // cho phep rong, khong cho phep thieu
        thanh_phan: z.string().nullable(),
        hoat_chat: z.array(z.string()).default([]),
        quy_cach: batBuoc('quy_cach'),
        xuat_xu: batBuoc('xuat_xu'),

        // Media & tai lieu
        anh: image(),
        anh_alt: batBuoc('anh_alt (alt tieng Viet co nghia)'),
        gallery: z.array(z.object({ src: image(), alt: z.string().min(1) })).default([]),
        tai_lieu: z.array(z.object({ ten: z.string().min(1), file: z.string().min(1) })).default([]),

        // Hien thi & SEO
        thu_tu: z.number().default(99),
        meta_title: z.string().nullable(),
        meta_description: batBuoc('meta_description (viet tay, khong cat tu bai)'),
        lastUpdated: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'lastUpdated phai dang YYYY-MM-DD, vd "2026-07-27"' }),
      })
      .superRefine((data, ctx) => {
        const laTBYT = data.phan_loai_phap_ly.startsWith('thiet-bi-y-te');
        if (laTBYT) {
          const coCoSoCongBo = !!(data.co_so_cong_bo_ten && data.co_so_cong_bo_dia_chi);
          const coCoSoNhapKhau = !!(data.co_so_nhap_khau_ten && data.co_so_nhap_khau_dia_chi);
          if (!coCoSoCongBo && !coCoSoNhapKhau) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message:
                'San pham la THIET BI Y TE: bat buoc phai co (co_so_cong_bo_ten + co_so_cong_bo_dia_chi) HOAC (co_so_nhap_khau_ten + co_so_nhap_khau_dia_chi) theo ND 342/2025/ND-CP. Bo sung truoc khi build.',
            });
          }
        }
        if (data.phan_loai_phap_ly === 'my-pham') {
          if (!data.co_so_cong_bo_ten || !data.co_so_cong_bo_dia_chi) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message:
                'San pham la MY PHAM: bat buoc phai co ten va dia chi to chuc/ca nhan cong bo san pham (co_so_cong_bo_ten, co_so_cong_bo_dia_chi).',
            });
          }
        }
      }),
});

export const collections = { products };
