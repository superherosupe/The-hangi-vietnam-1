# HƯỚNG DẪN SỬA VÀ THÊM NỘI DUNG WEBSITE THE HANGI

> Dành cho người không biết lập trình. Chỉ cần biết mở file bằng Notepad hoặc VS Code.
> Thư mục dự án: `C:\Users\Administrator\Desktop\the-hangi-website`
> Web sẽ chạy tại: https://thehangivietnam.xyz - cần trỏ DNS + bật Custom domain trên GitHub trước (xem DEPLOY.md). Trong lúc chờ, URL cũ https://superherosupe.github.io/The-hangi-vietnam-1/ có thể tạm hiển thị lỗi giao diện (mất CSS/ảnh), đây là bình thường, sẽ hết khi domain mới live.

---

## 1. QUY TRÌNH MỘT LẦN LÀM VIỆC (đọc mục này là đủ dùng)

1. Mở **VS Code** → File → Open Folder → chọn `C:\Users\Administrator\Desktop\the-hangi-website`
2. Bấm **Ctrl + `** (phím dưới Esc) để mở Terminal
3. Bật bản nháp để xem thử:
   ```
   npm.cmd run dev
   ```
   Mở trình duyệt vào **http://localhost:4321**. Đây là bản chỉ mình bạn thấy.
4. Sửa file → bấm **Ctrl + S** → trang tự tải lại. Lặp lại tới khi ưng.
5. Bấm **Ctrl + C** trong Terminal để tắt bản nháp.
6. Đăng lên web thật - gõ lần lượt 3 lệnh:
   ```
   git add -A
   git commit -m "Cap nhat footer"
   git push
   ```
7. Chờ ~2 phút, mở https://superherosupe.github.io/The-hangi-vietnam-1/ kiểm tra.

### Ý nghĩa 3 lệnh git

| Lệnh | Nghĩa nôm na |
|---|---|
| `git add -A` | Gom tất cả file vừa sửa lại |
| `git commit -m "..."` | Đóng gói + ghi chú "lần này sửa gì" |
| `git push` | Đẩy lên GitHub, web tự cập nhật sau ~2 phút |

Phần trong dấu nháy của lệnh commit là ghi chú **do bạn tự viết**, mỗi lần đổi cho khớp việc vừa làm: `"Them link Facebook"`, `"Cap nhat hotline"`... Viết không dấu cho chắc. Ghi chú này chỉ để tra lịch sử, không hiện lên web.

Theo dõi quá trình đăng: https://github.com/superherosupe/The-hangi-vietnam-1/actions
Dấu tích xanh = thành công, dấu X đỏ = có lỗi (bấm vào đọc chi tiết).

---

## 1b. XỬ LÝ LỖI THƯỜNG GẶP

### "npm ... cannot be loaded because running scripts is disabled"
PowerShell chặn file script. Cách chữa: **thêm `.cmd` sau chữ npm**
```
npm.cmd run dev
npm.cmd run build
```
Hoặc đổi loại terminal 1 lần cho xong: **Ctrl + Shift + P** → gõ `Terminal: Select Default Profile` → chọn **Command Prompt** → đóng terminal cũ, mở lại. Từ đó gõ `npm run dev` bình thường.

Các lệnh `git` KHÔNG bị lỗi này.

### "Author identity unknown" khi commit
Git chưa biết bạn là ai. Chạy 2 lệnh sau, **chỉ 1 lần duy nhất cho cả máy**:
```
git config --global user.name "Truong Mau Tuan Hung"
git config --global user.email "truongmautuanhung.213@gmail.com"
```
Rồi commit lại như bình thường.

### Push xong nhưng web không đổi
Thường do commit thất bại nên không có gì để đẩy (dấu hiệu: push báo "Everything up-to-date"). Chạy lại `git commit` xem có báo lỗi gì không.

### Lỡ sửa hỏng, muốn quay về như cũ
Xoá mọi sửa đổi chưa đăng, trở lại lần đăng gần nhất:
```
git checkout -- .
```

---

## 1c. HAI QUY TẮC CẦN NHỚ KHI SỬA

**Quy tắc 1: Chữ nhãn và dữ liệu nằm ở 2 file khác nhau**

| Loại | File | Ví dụ |
|---|---|---|
| Chữ nhãn, tiêu đề, tên nút | `src/i18n/vi.ts` (+ `en.ts`) | "Người chịu trách nhiệm nội dung" |
| Dữ liệu thật (tên, số ĐT, địa chỉ) | `src/data/site.ts` | "HE, XIAOCHEN", "0901..." |

Dòng kiểu `{lang === 'vi' ? 'Liên kết' : 'Links'}` có nghĩa: *xem tiếng Việt thì hiện "Liên kết", xem tiếng Anh thì hiện "Links"*. Sửa thì sửa cả 2 phần cho đúng ngôn ngữ, đừng dán link vào đây.

**Quy tắc 2: Link nội bộ và link ra ngoài viết khác nhau**

```
Trong web:  <a href={p('/san-pham')}>Sản phẩm</a>
Ra ngoài:   <a href="https://facebook.com/..." target="_blank" rel="noopener">Facebook</a>
```

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

Các lỗi terminal thường gặp (npm bị chặn, git chưa biết bạn là ai...) xem **Mục 1b** ở đầu file.

- Build báo lỗi tiếng Việt về "truong phap ly" → thiếu trường trong file sản phẩm, đọc thông báo là biết file nào thiếu gì
- Web không cập nhật sau khi push → xem tab Actions trên GitHub, run nào đỏ thì bấm vào đọc lỗi
- Sửa hỏng gì đó không rõ → chạy `git checkout -- .` để hoàn tác về lần commit gần nhất (mất các sửa đổi chưa commit!)
- Trang nháp hiện lỗi đỏ sau khi sửa → thường do thiếu dấu `}`, `'` hoặc thẻ đóng `</p>`; bấm **Ctrl + Z** nhiều lần để hoàn tác rồi làm lại
