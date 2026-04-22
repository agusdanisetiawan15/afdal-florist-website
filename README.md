# Afdal Florist Website

Website profesional untuk toko bunga **Afdal Florist** di Rangkasbitung, Banten. Dibangun dengan Astro + Tailwind CSS untuk tampilan modern, cepat, dan SEO-friendly.

**Live Website:** https://afdal-florist.pages.dev

---

## Daftar Isi

- [Tentang Project](#tentang-project)
- [Fitur Website](#fitur-website)
- [Tech Stack](#tech-stack)
- [Struktur Project](#struktur-project)
- [Persiapan Development](#persiapan-development)
- [Cara Menjalankan Lokal](#cara-menjalankan-lokal)
- [Cara Update Konten](#cara-update-konten)
  - [Update Nomor WhatsApp](#update-nomor-whatsapp)
  - [Update Informasi Toko](#update-informasi-toko)
  - [Update Google Maps](#update-google-maps)
  - [Tambah Produk Baru](#tambah-produk-baru)
  - [Hapus Produk](#hapus-produk)
  - [Ganti Foto Produk](#ganti-foto-produk)
  - [Ganti Logo](#ganti-logo)
  - [Update Konten Halaman](#update-konten-halaman)
- [Cara Deploy](#cara-deploy)
- [Setup Custom Domain](#setup-custom-domain)
- [Setup Email Forwarding](#setup-email-forwarding)
- [SEO & Google Search Console](#seo--google-search-console)
- [Troubleshooting](#troubleshooting)
- [Kontak Support](#kontak-support)

---

## Tentang Project

Website ini dibuat untuk menggantikan website lama Afdal Florist dengan tampilan yang lebih modern dan profesional. Fokusnya adalah:

- Menampilkan katalog produk dengan kategorisasi yang jelas
- Mempermudah pelanggan melakukan pemesanan via WhatsApp
- Memberikan informasi lokasi toko yang akurat
- Meningkatkan kredibilitas toko di mata pelanggan online

---

## Fitur Website

### Halaman
- **Home** - Hero section, keunggulan toko, preview kategori, tentang kami, CTA
- **Katalog** - Semua produk dikelompokkan per kategori
- **Kontak** - Info kontak, jam operasional, peta lokasi

### Fitur Utama
- Navigasi responsive (desktop & mobile dengan hamburger menu)
- Tombol "Pesan via WhatsApp" pada setiap produk dengan pesan otomatis
- Floating WhatsApp button yang selalu terlihat
- Google Maps embed dengan lokasi toko akurat
- Design tema Putih & Gold yang elegan
- SEO optimized (meta tags, JSON-LD, sitemap, robots.txt)
- Auto-optimized untuk Google Search (terutama pencarian lokal)

### Kategori Produk
1. **Buket Bunga** - Rangkaian buket untuk hadiah
2. **Papan Bunga** - Papan duka cita & ucapan selamat
3. **Standing Flower** - Standing flower untuk berbagai acara
4. **Bunga Meja** - Rangkaian untuk dekorasi meja
5. **Kustomisasi** - Rangkaian sesuai permintaan

---

## Tech Stack

| Teknologi | Fungsi |
|-----------|--------|
| **Astro 4** | Framework website statis |
| **Tailwind CSS** | Styling |
| **TypeScript** | Type safety untuk data |
| **Cloudflare Pages** | Hosting (gratis) |
| **GitHub** | Version control |
| **Wrangler** | CLI untuk deploy ke Cloudflare |

---

## Struktur Project

```
Toko Bunga Afdal Florist/
├── .github/              (tidak dipakai - workflows dihapus)
├── public/
│   ├── images/           # Semua foto produk & logo
│   └── robots.txt        # SEO - instruksi untuk Google
├── src/
│   ├── components/       # Komponen UI yang reusable
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── CategoryCard.astro
│   │   ├── ProductCard.astro
│   │   ├── WhatsAppFloat.astro
│   │   └── GoogleMap.astro
│   ├── data/
│   │   └── products.ts   # SEMUA DATA TOKO & PRODUK
│   ├── layouts/
│   │   └── BaseLayout.astro  # Template utama
│   ├── pages/
│   │   ├── index.astro   # Halaman Home
│   │   ├── katalog.astro # Halaman Katalog
│   │   └── kontak.astro  # Halaman Kontak
│   └── styles/
│       └── globals.css   # CSS global
├── astro.config.mjs      # Konfigurasi Astro
├── tailwind.config.mjs   # Konfigurasi Tailwind (warna, font)
├── package.json          # Dependencies
└── README.md             # File ini
```

**File paling penting untuk diupdate:** `src/data/products.ts`

---

## Persiapan Development

### Software yang Harus Diinstall

1. **Node.js v22 atau lebih baru**
   - Download: https://nodejs.org/
   - Cek versi di terminal: `node --version`

2. **Git**
   - Download: https://git-scm.com/
   - Cek versi: `git --version`

3. **Code Editor** (pilih salah satu)
   - **VS Code** (direkomendasikan): https://code.visualstudio.com/
   - Atau editor lain yang Anda suka

### Clone Repository

Buka terminal/command prompt, lalu:

```bash
git clone https://github.com/agusdanisetiawan15/afdal-florist-website.git
cd afdal-florist-website
```

### Install Dependencies

```bash
npm install
```

Perintah ini akan download semua library yang dibutuhkan (sekitar 1-2 menit).

---

## Cara Menjalankan Lokal

### Jalankan Development Server

```bash
npm run dev
```

Buka browser ke **http://localhost:4321** -- website akan muncul.

Setiap perubahan yang Anda simpan akan **otomatis reload** di browser (tidak perlu refresh manual).

### Akses dari HP

Jika ingin test di HP sambil development:

```bash
npm run dev -- --host 0.0.0.0
```

Lalu buka di HP: `http://[IP-laptop-Anda]:4321`

Contoh: `http://192.168.1.35:4321`

> Cara cari IP laptop: Windows → buka CMD → ketik `ipconfig` → cari "IPv4 Address"

### Build untuk Production

```bash
npm run build
```

Hasil build ada di folder `dist/`. Biasanya dipakai untuk test sebelum deploy.

### Preview Hasil Build

```bash
npm run preview
```

---

## Cara Update Konten

### Update Nomor WhatsApp

File: `src/data/products.ts`

Cari baris:
```typescript
export const WHATSAPP_NUMBER = "6288905882925";
```

Ganti dengan nomor baru (**format internasional, tanpa +**).

Contoh:
- Nomor asli: `0889 0588 2925`
- Format untuk kode: `6288905882925` (hapus `0` depan, ganti dengan `62`)

### Update Informasi Toko

File: `src/data/products.ts`

```typescript
export const STORE_INFO = {
  name: "Afdal Florist",
  address: "Jl. Siliwangi, RT.01/RW.02, Rangkasbitung Tim., Kec. Rangkasbitung, Kabupaten Lebak, Banten 42313",
  // ... dll
};
```

Ganti data di dalam `{...}` sesuai kebutuhan.

### Update Google Maps

1. Buka Google Maps
2. Cari toko Anda → klik "Share" → tab "Embed a map"
3. Copy kode embed-nya, cari bagian `src="..."`
4. Copy URL di dalam `src`
5. Ganti di file `src/data/products.ts`:

```typescript
googleMapsEmbed: "PASTE_URL_EMBED_DI_SINI",
```

Untuk link "Buka di Google Maps":
- Buka Google Maps toko Anda
- Klik "Share" → copy link pendek (contoh: `https://maps.app.goo.gl/xxx`)
- Ganti:

```typescript
googleMapsLink: "https://maps.app.goo.gl/xxx",
```

### Tambah Produk Baru

**Langkah 1: Upload foto produk**

Masukkan foto ke folder `public/images/` dengan nama yang jelas, contoh:
- `buket-mawar-pink.jpeg`
- `standing-lily.png`

**Langkah 2: Edit data**

File: `src/data/products.ts`

Cari array `products`, tambahkan entry baru:

```typescript
{
  id: "buket-mawar-pink",                          // ID unik (bebas, tanpa spasi)
  name: "Buket Mawar Pink Premium",                // Nama yang muncul di website
  category: "buket",                                // Kategori: buket/papan/standing/meja/kustomisasi
  image: "/images/buket-mawar-pink.jpeg",          // Path foto (awalan /)
  price: "Hubungi Kami"                             // Atau harga spesifik, misal "Rp 250.000"
},
```

### Hapus Produk

File: `src/data/products.ts`

Cari entry produk yang mau dihapus, hapus seluruh blok `{...},` termasuk koma di akhir.

### Ganti Foto Produk

**Cara mudah:** Timpa file foto lama dengan nama yang sama di folder `public/images/`.

**Cara dengan nama berbeda:**
1. Upload foto baru ke `public/images/`
2. Update path di `src/data/products.ts`:
```typescript
image: "/images/nama-foto-baru.jpeg",
```

### Ganti Logo

Timpa file `public/images/LOGO-AFDAL FLORIST.png` dengan logo baru (nama file harus sama persis, termasuk huruf besar-kecil dan spasi).

### Update Konten Halaman

**Home page:** `src/pages/index.astro`
- Text di hero section
- Keunggulan toko (4 features)
- Bagian "Tentang Kami"
- Statistics (100+ pelanggan, dll)

**Katalog page:** `src/pages/katalog.astro`
- Header text

**Kontak page:** `src/pages/kontak.astro`
- Jam operasional
- Info kontak tambahan

Cari teks yang mau diubah, ganti langsung di file `.astro`.

---

## Cara Deploy

Setelah melakukan perubahan, ada 2 cara deploy:

### Metode 1: Deploy Cepat via Wrangler (Recommended)

```bash
npm run build
npx wrangler pages deploy dist --project-name=afdal-florist --branch=main --commit-dirty=true
```

Website akan auto-update dalam 1-2 menit.

### Metode 2: Deploy via Git + Cloudflare Auto-deploy

Jika sudah dikonfigurasi di Cloudflare dashboard, setiap `git push` ke branch `master` akan otomatis trigger deploy.

```bash
git add .
git commit -m "update: deskripsi perubahan"
git push
```

Cloudflare akan build & deploy otomatis.

### Cek Status Deploy

Buka Cloudflare dashboard → Workers & Pages → afdal-florist → Deployments.

---

## Setup Custom Domain

### Persyaratan
- Sudah membeli domain (misal: `afdalflorist.id` atau `afdalflorist.com`)
- Punya akses ke registrar tempat beli domain
- Punya akses ke Cloudflare dashboard

### Langkah-langkah

**1. Tambah Site ke Cloudflare (kalau belum)**
- Buka https://dash.cloudflare.com/
- Klik "Add a Site" → masukkan domain Anda
- Pilih plan **Free**
- Cloudflare akan scan DNS records

**2. Update Nameserver di Registrar**

Cloudflare akan kasih 2 nameserver, contoh:
```
alex.ns.cloudflare.com
zara.ns.cloudflare.com
```

Login ke registrar tempat beli domain (Niagahoster/Rumahweb/dll), cari menu **Nameservers** atau **DNS**, ganti nameserver ke 2 yang Cloudflare berikan. Simpan.

**3. Tunggu Propagasi**

Biasanya 5 menit - 2 jam. Cek status di Cloudflare dashboard -- tunggu sampai **"Active"**.

**4. Link Domain ke Pages Project**
- Masuk ke Cloudflare → Workers & Pages → **afdal-florist**
- Tab **Custom Domains** → klik "Set up a custom domain"
- Masukkan domain Anda (contoh: `afdalflorist.id`)
- Cloudflare otomatis setup DNS record
- Klik "Activate domain"

**5. Update Kode dengan Domain Baru**

File: `astro.config.mjs`

```javascript
export default defineConfig({
  site: "https://afdalflorist.id",  // Ganti dengan domain baru
  integrations: [tailwind(), sitemap()],
});
```

Deploy ulang agar sitemap & meta tags pakai domain baru.

**6. Tunggu SSL Certificate**

Cloudflare auto-generate SSL (HTTPS) dalam ~5-15 menit. Setelah itu website bisa diakses di:
- `https://afdalflorist.id`
- `https://www.afdalflorist.id`

---

## Setup Email Forwarding

Punya email bisnis seperti `info@afdalflorist.id` yang ter-forward ke Gmail pribadi Anda. **100% gratis**.

### Cara Setup:

1. Di Cloudflare dashboard → pilih domain → **Email** → **Email Routing**
2. Klik **Enable Email Routing**
3. Cloudflare otomatis tambahkan MX records
4. Klik **Create address** → buat alias:
   - `info@afdalflorist.id` → forward ke `emailanda@gmail.com`
   - `order@afdalflorist.id` → forward ke `emailanda@gmail.com`
5. Verifikasi email tujuan (cek inbox, klik link confirm)

Selesai! Email yang dikirim ke `info@afdalflorist.id` akan masuk ke Gmail Anda.

> **Catatan:** Email ini hanya **menerima** email. Untuk **mengirim** email dari `info@afdalflorist.id`, perlu setup SMTP tambahan (atau pakai Zoho Mail / Google Workspace berbayar).

---

## SEO & Google Search Console

Agar website muncul di Google:

### 1. Daftar di Google Search Console
- Buka https://search.google.com/search-console
- Add Property → masukkan domain
- Verifikasi kepemilikan (pilih metode DNS -- paling mudah via Cloudflare)

### 2. Submit Sitemap
Setelah property aktif:
- Menu **Sitemaps** di Search Console
- Submit URL: `https://afdalflorist.id/sitemap-index.xml`

Google akan mulai index website Anda dalam 1-7 hari.

### 3. Optimasi Lokal (Google Maps)
- Daftarkan toko di **Google Business Profile**: https://www.google.com/business/
- Pastikan nama, alamat, jam buka, nomor telepon sama persis dengan di website
- Upload foto toko & produk
- Minta pelanggan review di Google

### 4. Cek Peringkat
- Search di Google: `toko bunga rangkasbitung`, `florist lebak`, `afdal florist`
- Biasanya butuh waktu 1-3 bulan untuk mulai muncul di halaman 1

---

## Troubleshooting

### Build Error: "command not found: astro"
```bash
npm install
```

### Foto Tidak Muncul Setelah Update
- Pastikan nama file di `src/data/products.ts` sama persis dengan di `public/images/`
- Case-sensitive: `Foto.jpg` ≠ `foto.jpg`
- Restart dev server (`Ctrl+C` lalu `npm run dev`)

### Deploy Gagal: "Project not found"
```bash
npx wrangler pages project create afdal-florist --production-branch=main
```

### Deploy Gagal: "Not authenticated"
```bash
npx wrangler login
```

### Website Lama Masih Muncul Setelah Deploy
- Clear cache browser (`Ctrl+Shift+R` atau `Cmd+Shift+R`)
- Cek di mode incognito
- Cloudflare cache biasanya expire ~5 menit

### Custom Domain Belum Aktif
- Cek status DNS di https://www.whatsmydns.net/ → masukkan domain
- Tunggu sampai semua region hijau
- Pastikan nameserver di registrar sudah benar

### Error saat `git push`
```bash
git pull
git push
```

### Lupa Password GitHub
- Reset via https://github.com/password_reset

### Lupa Password Cloudflare
- Reset via https://dash.cloudflare.com/forgot-password

---

## Kontak Support

### Developer
- **GitHub**: https://github.com/agusdanisetiawan15

### Layanan Pihak Ketiga
| Layanan | URL Login | Fungsi |
|---------|-----------|--------|
| GitHub | https://github.com/login | Version control |
| Cloudflare | https://dash.cloudflare.com/login | Hosting & Domain DNS |

### Dokumentasi Resmi
- **Astro**: https://docs.astro.build/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/

---

## Informasi Bisnis

**Afdal Florist**
- Alamat: Jl. Siliwangi, RT.01/RW.02, Rangkasbitung Tim., Kec. Rangkasbitung, Kabupaten Lebak, Banten 42313
- WhatsApp: 0889-0588-2925
- Jam Operasional: Senin - Sabtu, 08.00 - 17.00 WIB

---

## Changelog

### 2026-04-17
- Initial release
- 5 kategori produk (Buket, Papan, Standing, Bunga Meja, Kustomisasi)
- SEO optimization lengkap
- Deploy ke Cloudflare Pages

---

_Dokumentasi ini dibuat dengan bantuan Claude AI (Anthropic)_
