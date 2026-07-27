# Hướng dẫn deploy website The Hangi

## Tên miền riêng: thehangivietnam.xyz (đã mua 2026-07-27, ĐANG CHỜ user trỏ DNS + bật trên GitHub)

- Repo: https://github.com/superherosupe/The-hangi-vietnam-1
- Domain và base path chỉ khai báo MỘT chỗ duy nhất: `SITE_URL`/`BASE_PATH` trong `src/data/site.ts` (hiện là `https://thehangivietnam.xyz` / `''`). `astro.config.mjs`, `robots.txt` (route động ở `src/pages/robots.txt.ts`), `public/CNAME` và toàn bộ canonical/og:url/hreflang/sitemap trong `Base.astro` đều đọc lại/khớp với đây.
- Code đã sẵn sàng cho domain mới (đã build test, không lỗi) nhưng **web CHƯA THẬT SỰ chạy ở thehangivietnam.xyz cho tới khi làm xong 2 việc thủ công bên dưới**. Trong lúc chờ, trang cũ `https://superherosupe.github.io/The-hangi-vietnam-1/` có thể tạm thời lỗi đường dẫn CSS/ảnh vì code đã build cho domain gốc (không còn base path con) - đây là điều bình thường trong lúc chuyển đổi, sẽ hết khi hoàn tất 2 bước dưới.

### Việc CẦN LÀM THỦ CÔNG NGAY để domain mới chạy được

1. **Trỏ DNS** tại nơi đã mua `thehangivietnam.xyz`:
   - Nếu dùng domain gốc (thehangivietnam.xyz, không có www): tạo 4 bản ghi **A** trỏ tới `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (một số nhà cung cấp gọi là bản ghi **ALIAS**/**ANAME** nếu không cho tạo A ở gốc domain)
   - Nếu dùng subdomain (www.thehangivietnam.xyz): tạo 1 bản ghi **CNAME** trỏ tới `superherosupe.github.io`
2. Trên GitHub: repo → **Settings → Pages → Custom domain**: điền `thehangivietnam.xyz` rồi bấm Save, đợi GitHub xác thực DNS (có thể mất vài giờ tới 1 ngày), sau đó tick **Enforce HTTPS**.
   - File `public/CNAME` trong repo đã có sẵn nội dung này rồi, GitHub sẽ tự nhận ra sau khi deploy.

Sau khi cả 2 bước trên xong và DNS đã propagate, `https://thehangivietnam.xyz` sẽ live.

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

## Nếu sau này đổi sang tên miền khác

1. Sửa 2 dòng trong `src/data/site.ts` (`SITE_URL`, `BASE_PATH`) và nội dung file `public/CNAME`
2. `npm run build`, kiểm tra không lỗi, commit + push
3. Lặp lại 2 bước DNS/GitHub Settings ở trên với tên miền mới
4. (Khuyến nghị về sau) Chuyển sang Cloudflare Pages để có CDN tốt hơn tại VN - chỉ cần kết nối repo GitHub, framework preset "Astro", build command `npm run build`, output `dist`
