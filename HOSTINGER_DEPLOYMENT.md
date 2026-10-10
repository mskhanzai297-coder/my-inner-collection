# Hostinger Deployment Guide for My Inner Collection

This project is built with **React**, **Vite**, and **Tailwind CSS**. It builds to pure high-performance static files in the `dist/` directory, making it directly compatible with **Hostinger Premium/Business Web Hosting** or **Hostinger Cloud Hosting**.

---

## 1. Quick Build Command

Run the production build:

```bash
npm run build
```

This compiles all TypeScript files, bundles Tailwind CSS, processes high-resolution product imagery, and outputs clean static production files into the `dist/` folder.

---

## 2. Deploying via Hostinger File Manager (Simplest Method)

1. Log into your **Hostinger hPanel** ([hpanel.hostinger.com](https://hpanel.hostinger.com)).
2. Go to **Websites** &rarr; click **Manage** next to your domain (e.g., `myinnercollection.pk`).
3. Under the **Files** section, click **File Manager** &rarr; open the **`public_html`** folder.
4. Compress all files and subfolders inside your local `dist/` folder into a `.zip` archive (make sure you zip the *contents* of `dist`, not the `dist` folder itself).
5. In Hostinger File Manager, click **Upload** &rarr; select the `.zip` file.
6. Right-click the uploaded `.zip` in `public_html` and choose **Extract**.
7. Confirm that `index.html`, `assets/`, and `.htaccess` are directly inside `public_html/`.
8. Visit your website domain in your browser!

---

## 3. Client-Side Routing & `.htaccess`

Hostinger web servers run Apache / LiteSpeed. To ensure that pages and bookmarks reload without returning a 404 error, an optimized `.htaccess` file has been pre-configured in `public/.htaccess`.

It includes:
- URL rewrite rule routing all SPA paths to `index.html`.
- Gzip/Deflate compression for fast loading speeds.
- 1-year browser cache-control headers for static images and assets.

---

## 4. WhatsApp Configuration

The website is wired to the official Pakistani WhatsApp business contact:

- **WhatsApp Phone Number:** `03101041303` (International format: `+92 310 1041303`)
- Pre-filled messages automatically calculate item names, selected sizes, quantities, subtotals in PKR, customer delivery details, and discreet packaging requests.

To update this number in the future, simply update `WHATSAPP_NUMBER` and `WHATSAPP_INT_NUMBER` in `src/data/products.ts`.

---

## 5. Adding Real Payment Gateways & Backend Services (Optional)

Currently, the store is configured with:
- **Instant WhatsApp Ordering** (highest conversion channel in Pakistan).
- **Cash on Delivery (COD)** checkout with local order tracking reference generation.

If you decide to add automated online card payments or an automated database:
- **Pakistani Payment Gateways:** PayFast, Safepay, JazzCash Business, or EasyPaisa merchant API.
- Use an environment variable file (`.env`) for any merchant API tokens.
- Never expose secret API keys on the frontend.
