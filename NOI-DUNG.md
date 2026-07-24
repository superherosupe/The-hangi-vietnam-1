# HƯỚNG DẪN SỬA VÀ THÊM NỘI DUNG WEBSITE THE HANGI

> Dành cho người không biết lập trình. Chỉ cần biết mở file bằng Notepad hoặc VS Code.
> Thư mục dự án: `C:\Users\Administrator\Desktop\the-hangi-website`
> Web đang chạy tại: https://superherosupe.github.io/The-hangi-vietnam-1/

---

## 1. QUY TRÌNH CHUNG: SỬA XONG THÌ ĐĂNG LÊN THẾ NÀO?

Mọi thay đổi chỉ hiện lên web sau khi "push" lên GitHub. Mở **Git Bash** hoặc **PowerShell** trong thư mục dự án và chạy 3 lệnh:

```
git add -A
git commit -m "Mo ta ngan viec vua sua"
git push
```

Chờ khoảng 2 phút là web tự cập nhật. Xem tiến trình tại:
https://github.com/superherosupe/The-hangi-vietnam-1/actions

**Muốn xem thử trước khi đăng:** chạy `npm run dev` rồi mở http://localhost:4321 trên trình duyệt. Sửa file, lưu, trang tự tải lại. Nhấn Ctrl+C trong cửa sổ lệnh để tắt.

---

## 2. SỬA THÔNG TIN CÔNG TY (hotline, email, địa chỉ)

Mở file: `src/data/site.ts`

```ts
hotline: '',        // ← điền số vào giữa 2 dấu nháy, vd: '0901 234 567'
email: '',          // ← vd: 'info@thehangi.vn'
```

Footer và trang Liên hệ tự cập nhật theo. Các trường khác (địa chỉ, người đại diện...) sửa cùng file này.

## 3. SỬA CHỮ TRÊN GIAO DIỆN (menu, nút bấm, tiêu đề khối...)

- Tiếng Việt: `src/i18n/vi.ts`
- Tiếng Anh: `src/i18n/en.ts`

Mỗi dòng có dạng `'ten_khoa': 'Nội dung hiển thị'`. **Chỉ sửa phần bên phải dấu hai chấm**, giữ nguyên tên khóa bên trái. Hai file phải có cùng bộ khóa.

## 4. SỬA NỘI DUNG SẢN PHẨM ĐANG CÓ

Mỗi sản phẩm là 1 file văn bản:

| Sản phẩm | Bản tiếng Việt | Bản tiếng Anh |
|---|---|---|
| PLLACUBE Original | `src/content/products/vi/pllacube-original.md` | `src/content/products/en/pllacube-original.md` |
| PLLACUBE PiNk VOL. | `src/content/products/vi/pllacube-pink-vol.md` | `src/content/products/en/pllacube-pink-vol.md` |

Phần đầu file (giữa 2 dòng `---`) là bảng thông tin. Ý nghĩa các trường quan trọng:

| Trường | Ý nghĩa | Lưu ý |
|---|---|---|
| `ten` | Tên thương mại | |
| `ten_thiet_bi` | Tên trên phiếu công bố | vd "Dung dịch điều trị da" |
| `phan_loai_phap_ly` | `thiet-bi-y-te-a/b/c/d` hoặc `my-pham` | quyết định badge màu |
| `so_luu_hanh_hoac_cong_bo` | Số công bố / số lưu hành | **BẮT BUỘC - ghi đúng hồ sơ** |
| `co_so_cong_bo_ten/dia_chi` | Đơn vị đứng tên công bố | vd AGTV Việt Nam |
| `chu_so_huu_ten/dia_chi` | Chủ sở hữu sản phẩm | vd LABINCUBE |
| `muc_dich_su_dung` | **Chép nguyên văn từ phiếu công bố** | không tự viết thêm |
| `thanh_phan`, `quy_cach`, `xuat_xu` | Thông tin nhãn | |
| `hoat_chat` | Danh sách chip hiển thị | PLLA, PDRN... |
| `khau_hieu`, `thanh_phan_chinh`, `cong_nghe` | Khối "Thông tin sản phẩm" (kiểu pllacube.kr) | tên thành phần giữ tiếng Anh như brochure |
| `canh_bao` | Danh sách cảnh báo | |
| `anh`, `anh_alt`, `gallery` | Ảnh + mô tả ảnh tiếng Việt | |
| `tai_lieu` | PDF tải về | file nằm trong `public/docs/` |
| `meta_title`, `meta_description` | Tiêu đề/mô tả Google | viết tay, ngắn gọn |

Phần dưới dấu `---` thứ hai là đoạn văn mô tả tự do (hiện cuối trang, chữ nhỏ).

## 5. THÊM SẢN PHẨM MỚI

1. **Copy** 1 file sẵn có trong `src/content/products/vi/`, đổi tên file thành slug mới, vd `ten-san-pham-moi.md` (không dấu, gạch ngang). Tên file = đường dẫn URL.
2. Sửa toàn bộ các trường theo đúng **phiếu công bố của sản phẩm đó**.
3. Chép ảnh sản phẩm vào `src/assets/products/` (đặt tên không dấu, vd `ten-sp-vial.jpg`) rồi trỏ trường `anh:` và `gallery:` tới file, dạng `"../../../assets/products/ten-sp-vial.jpg"`.
4. Chép PDF công bố vào `public/docs/` và khai vào `tai_lieu`.
5. Muốn hiện bản tiếng Anh: copy thêm file cùng tên sang `src/content/products/en/` và dịch. **Không có bản en thì sản phẩm tự ẩn khỏi trang tiếng Anh** - không sao cả.
6. Chạy `npm run build` để kiểm tra. **Nếu thiếu trường pháp lý, build sẽ báo lỗi tiếng Việt chỉ đúng file và trường thiếu** - đây là tính năng bảo vệ, không phải hỏng.
7. Push lên như Mục 1.

## 6. NHỮNG ĐIỀU TUYỆT ĐỐI KHÔNG LÀM (ràng buộc pháp lý)

1. KHÔNG tự viết công dụng - chỉ chép nguyên văn mục đích sử dụng từ phiếu công bố
2. KHÔNG đăng giá cho thiết bị y tế - chỉ dùng nút "Yêu cầu báo giá"
3. KHÔNG dùng ảnh before/after, testimonial khách hàng, ảnh bác sĩ/áo blouse
4. KHÔNG dùng từ: "tốt nhất", "số một", "duy nhất", "an toàn tuyệt đối", "không tác dụng phụ", "chữa khỏi", "đặc trị"
5. KHÔNG đăng sản phẩm chưa có số công bố tại Việt Nam
6. KHÔNG xóa banner "dành cho cán bộ y tế" ở trang sản phẩm

## 7. VỊ TRÍ CÁC FILE HAY ĐỤNG ĐẾN

```
src/data/site.ts              Thông tin công ty (hotline, email...)
src/i18n/vi.ts, en.ts         Mọi chữ trên giao diện
src/content/products/         Nội dung sản phẩm (vi/ và en/)
src/assets/products/          Ảnh sản phẩm
src/assets/logo-icon.png      Logo (icon xoáy)
public/docs/                  PDF tải về
public/favicon.png            Icon tab trình duyệt
DEPLOY.md                     Hướng dẫn deploy + gắn tên miền riêng
```

## 8. KHI GẶP LỖI

- Build báo lỗi tiếng Việt về "truong phap ly" → thiếu trường trong file sản phẩm, đọc thông báo là biết file nào thiếu gì
- Web không cập nhật sau khi push → xem tab Actions trên GitHub, run nào đỏ thì bấm vào đọc lỗi
- Sửa hỏng gì đó không rõ → chạy `git checkout -- .` để hoàn tác về lần commit gần nhất (mất các sửa đổi chưa commit!)
