# Hướng dẫn deploy website The Hangi

## Phương án hiện tại: GitHub Pages (miễn phí, chưa cần tên miền)

- Repo: https://github.com/superherosupe/The-hangi-vietnam-1
- Địa chỉ web: **https://superherosupe.github.io/The-hangi-vietnam-1/**
- Vì deploy dưới đường dẫn con nên `astro.config.mjs` có `base: '/The-hangi-vietnam-1'`. Mọi link nội bộ tự kèm base qua hàm `localePath()`.
- Domain và base path chỉ khai báo MỘT chỗ duy nhất: `SITE_URL`/`BASE_PATH` trong `src/data/site.ts`. `astro.config.mjs`, `robots.txt` (route động ở `src/pages/robots.txt.ts`) và toàn bộ canonical/og:url/hreflang/sitemap trong `Base.astro` đều đọc lại từ đây - đổi tên miền chỉ cần sửa 2 hằng số này.

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

Các bước DNS/GitHub cần làm THỦ CÔNG (không có trong code, không AI nào tự làm được):

1. Mua tên miền tại nhà cung cấp bất kỳ (Matbao, PA Vietnam, Namecheap...)
2. Trỏ DNS về GitHub Pages tại nơi quản lý tên miền:
   - Dùng miền gốc (thehangi.vn): tạo 4 bản ghi **A** trỏ tới `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Hoặc dùng subdomain (www.thehangi.vn): tạo 1 bản ghi **CNAME** trỏ tới `superherosupe.github.io`
3. Trên GitHub: repo → **Settings → Pages → Custom domain**: điền tên miền rồi bấm Save. GitHub sẽ tự tạo file `public/CNAME` và đợi DNS xác thực (có thể mất vài giờ), sau đó tick **Enforce HTTPS**.
   - Có thể làm bước này trước khi DNS trỏ xong, nhưng phải đợi DNS đúng thì GitHub mới xác thực được và cấp HTTPS.
4. Sau khi domain đã live: sửa 2 dòng trong `src/data/site.ts`:
   ```ts
   export const SITE_URL = 'https://thehangi.vn'; // domain that
   export const BASE_PATH = ''; // khong con o duong dan con nua
   ```
   Rồi `npm run build`, kiểm tra không lỗi, commit + push. Toàn bộ canonical/og:url/hreflang/sitemap/robots.txt tự cập nhật theo vì đều đọc từ 2 hằng số này (không cần sửa chỗ nào khác).
5. (Khuyến nghị về sau) Chuyển sang Cloudflare Pages để có CDN tốt hơn tại VN - chỉ cần kết nối repo GitHub, framework preset "Astro", build command `npm run build`, output `dist`
