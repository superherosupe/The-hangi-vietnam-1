# Hướng dẫn deploy website The Hangi

## Phương án hiện tại: GitHub Pages (miễn phí, chưa cần tên miền)

- Repo: https://github.com/superherosupe/The-hangi-vietnam-1
- Địa chỉ web: **https://superherosupe.github.io/The-hangi-vietnam-1/**
- Vì deploy dưới đường dẫn con nên `astro.config.mjs` có `base: '/The-hangi-vietnam-1'`. Mọi link nội bộ tự kèm base qua hàm `localePath()`.

### Lần đầu (đã làm)

1. Tạo repo Public trên GitHub
2. `git remote add origin https://github.com/superherosupe/The-hangi-vietnam-1.git` rồi `git push -u origin main`
3. Vào repo → **Settings → Pages** → **Build and deployment** → chọn **Source: GitHub Actions**
4. Chờ tab **Actions** chạy xong (~2 phút) là web live

### Các lần cập nhật sau

```
git add -A
git commit -m "Mo ta thay doi"
git push
```

GitHub Actions tự build và deploy, ~2 phút sau là thấy thay đổi.

## Khi mua tên miền riêng (ví dụ thehangi.vn)

1. Repo → Settings → Pages → **Custom domain**: điền tên miền, làm theo hướng dẫn trỏ DNS (bản ghi CNAME/A)
2. Trong `astro.config.mjs`: đổi `site` thành tên miền mới và **xóa dòng `base`**; sửa `robots.txt` theo; commit + push
3. (Khuyến nghị về sau) Chuyển sang Cloudflare Pages để có CDN tốt hơn tại VN - chỉ cần kết nối repo GitHub, framework preset "Astro", build command `npm run build`, output `dist`
