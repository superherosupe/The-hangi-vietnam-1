# Hướng dẫn deploy website The Hangi

## Phương án hiện tại: GitHub Pages (miễn phí, chưa cần tên miền)

### Lần đầu (làm 1 lần)

1. Tạo tài khoản GitHub (nếu chưa có): https://github.com/signup
2. Tạo repository mới tên **`<username>.github.io`** (thay `<username>` bằng tên tài khoản của bạn, ví dụ tài khoản là `thehangi` thì repo tên `thehangi.github.io`). Chọn **Public**, không tick thêm gì.
   - Đặt đúng tên này thì website sẽ nằm ở địa chỉ gốc `https://<username>.github.io/` - bắt buộc, vì các đường dẫn nội bộ của site dùng dạng tuyệt đối (`/san-pham`).
3. Trong thư mục dự án, chạy:
   ```
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
   Windows sẽ mở cửa sổ đăng nhập GitHub - đăng nhập bằng trình duyệt.
4. Vào repo trên GitHub → **Settings → Pages** → mục **Build and deployment**, chọn **Source: GitHub Actions**.
5. Chờ tab **Actions** chạy xong (~2 phút). Website live tại `https://<username>.github.io/`.

### Các lần cập nhật sau

```
git add -A
git commit -m "Mo ta thay doi"
git push
```

GitHub Actions tự build và deploy, ~2 phút sau là thấy thay đổi.

### Trước khi push lần đầu, cập nhật địa chỉ site

Sửa 2 chỗ cho khớp địa chỉ thật:

- `astro.config.mjs` → `site: 'https://<username>.github.io'`
- `public/robots.txt` → dòng `Sitemap: https://<username>.github.io/sitemap-index.xml`

## Khi mua tên miền riêng (ví dụ thehangi.vn)

1. Repo → Settings → Pages → **Custom domain**: điền tên miền, làm theo hướng dẫn trỏ DNS (bản ghi CNAME/A)
2. Sửa lại `site` trong `astro.config.mjs` và `robots.txt` thành tên miền mới, commit + push
3. (Khuyến nghị về sau) Chuyển sang Cloudflare Pages để có CDN tốt hơn tại VN - chỉ cần kết nối repo GitHub, framework preset "Astro", build command `npm run build`, output `dist`
