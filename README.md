# Peta Alur Filsafat Ilmu

Situs statis (HTML/CSS/JS murni, tanpa build tool) berisi peta alur belajar
**Filsafat Ilmu** (mata kuliah wajib Program Pascasarjana Ekonomi Syariah) —
dari hakikat dan objek filsafat ilmu, tiga cabang ontologi-epistemologi-
aksiologi, sejarah dan aliran filsafat ilmu dari Yunani Kuno hingga Kuhn,
Popper, Lakatos, dan Feyerabend, hingga penerapannya sebagai landasan
paradigma penelitian ekonomi syariah.

- `index.html` — peta alur utama, bisa disaring per modul, setiap entri
  menaut ke halaman detailnya.
- `topics/` — 24 halaman detail (konteks & penjelasan, poin-poin kunci,
  literatur utama, relevansi & keterkaitan, rujukan jurnal), lengkap dengan
  navigasi sebelumnya/selanjutnya mengikuti urutan pedagogis modul.
- `assets/style.css`, `assets/script.js` — gaya dan interaksi (filter modul)
  yang dipakai bersama seluruh halaman.

Tidak ada dependensi build (tidak perlu `npm install`) — situs ini murni
HTML statis, siap diterbitkan langsung sebagai GitHub Pages.

## Cara menerbitkan ke GitHub Pages

**Opsi A — repo baru, file di root (paling sederhana)**

1. Buat repository baru di GitHub, misalnya `filsafat-ilmu`.
2. Unggah seluruh isi folder ini (`index.html`, `assets/`, `topics/`,
   `README.md`) ke root repository tersebut — lewat web GitHub ("Add file →
   Upload files") atau lewat `git`:
   ```bash
   git init
   git add .
   git commit -m "Publish peta alur Filsafat Ilmu"
   git branch -M main
   git remote add origin https://github.com/<username>/filsafat-ilmu.git
   git push -u origin main
   ```
3. Di repo tersebut buka **Settings → Pages**.
4. Pada **Build and deployment → Source**, pilih **Deploy from a branch**.
5. Pada **Branch**, pilih `main` dan folder `/ (root)`, lalu **Save**.
6. Tunggu 1-2 menit — GitHub akan menampilkan URL live, biasanya:
   `https://<username>.github.io/filsafat-ilmu/`

**Opsi B — menambahkan ke repo yang sudah ada (folder `/docs`)**

Jika sudah punya repository lain dan ingin menambahkan situs ini sebagai
bagian dari repo tersebut tanpa mengganggu isi root:

1. Salin seluruh isi folder ini ke dalam folder `docs/` di repo tersebut.
2. Commit & push seperti biasa.
3. Di **Settings → Pages → Branch**, pilih branch yang sesuai dan folder
   `/docs`, lalu **Save**.

**Opsi C — satu repo untuk semua mata kuliah**

Situs ini memakai struktur yang sama dengan situs "Sejarah dan Pemikiran
Ekonomi Islam" dan "Teori Ekonomi Mikro Islam" yang sudah dibuat sebelumnya
— ketiganya bisa digabung dalam satu repository, masing-masing di subfolder
sendiri (misalnya `/sejarah`, `/mikro`, `/filsafat`), dengan sebuah
`index.html` penghubung di root yang menaut ke ketiganya.

## Menambah atau mengubah entri

Karena situs ini statis, cara paling gampang menambah entri baru adalah
menduplikasi salah satu file di `topics/`, mengganti isinya, lalu menambahkan
kartu tautan baru ke `index.html` pada bagian `<section class="era" ...>`
yang sesuai (ikuti pola `<a class="entry-link" href="topics/nama-file.html"
data-era="...">...</a>` yang sudah ada). Jangan lupa memperbarui tautan
"Sebelumnya / Selanjutnya" (`.pagenav`) pada halaman sebelum dan sesudahnya
agar urutan modul tetap tersambung.

## Berkas pendamping

File `Rincian_Materi_Filsafat_Ilmu.xlsx` (di folder mata kuliah yang sama,
di luar situs ini) memuat rincian materi per modul, kata kunci riset, peta
konsep ringkas, dan daftar lengkap jurnal pendukung dengan tautannya.

Dibuat Oleh Hariyanto Mahasiswa Magister Ekonomi Syariah IAIN Curup