Karena penelitian Anda menggunakan **Design and Development (D&D)** dan fokusnya bukan sekadar mengukur performa tetapi juga **mengembangkan serta mengevaluasi produk (Load Balancer)**, maka wawancaranya sebaiknya tidak hanya teknis. Pertanyaan perlu mengikuti alur D&D:

1. **Analisis kebutuhan (Analysis)**
2. **Perancangan (Design)**
3. **Pengembangan & Implementasi (Development)**
4. **Evaluasi hasil (Evaluation)**

Selain itu karena informan Anda ada **CIO dan DevOps Engineer**, pertanyaannya sebaiknya semi-terstruktur supaya nanti jawabannya mudah diolah menjadi narasi BAB IV.

---

# Pedoman Wawancara Penelitian

**Judul:**
*Implementasi Load Balancer untuk Meningkatkan High Availability Sistem Otomasi Perpustakaan pada Organisasi N*

**Jenis Wawancara:** Semi Terstruktur

**Tujuan:** Menggali kebutuhan sistem, proses pengembangan, implementasi, dan evaluasi penerapan Load Balancer.

---

# A. Tahap Analisis Kebutuhan (Analysis)

## Tujuan:

Mengidentifikasi kondisi awal dan masalah sebelum pengembangan.

### Untuk CIO

1. Bagaimana kondisi layanan sistem otomasi perpustakaan sebelum dilakukan pengembangan infrastruktur?
2. Permasalahan apa yang paling sering muncul ketika jumlah pengguna meningkat?
3. Bagaimana dampak gangguan performa sistem terhadap aktivitas operasional organisasi?
4. Mengapa peningkatan performa dan ketersediaan layanan menjadi kebutuhan penting bagi organisasi?

### Untuk DevOps Engineer

5. Bagaimana arsitektur sistem yang digunakan sebelum implementasi Load Balancer?
6. Komponen mana yang paling sering menjadi titik bottleneck?
7. Pada kondisi seperti apa penurunan performa mulai terlihat?
8. Apakah sebelumnya pernah dilakukan optimasi selain Load Balancer?

---

# B. Tahap Perancangan Sistem (Design)

## Tujuan:

Menggali alasan pemilihan desain dan teknologi.

### Untuk DevOps Engineer

9. Apa pertimbangan dalam memilih pendekatan Load Balancer dibanding peningkatan spesifikasi server?
10. Mengapa menggunakan pendekatan container dibanding instalasi langsung pada server fisik?
11. Bagaimana proses menentukan jumlah node server pada penelitian ini?
12. Mengapa seluruh container dibuat menggunakan spesifikasi CPU dan RAM yang sama?
13. Algoritma distribusi beban apa yang dipilih dan apa alasan pemilihannya?
14. Bagaimana desain arsitektur sistem sebelum dan sesudah pengembangan?

---

# C. Tahap Pengembangan dan Implementasi (Development)

## Tujuan:

Menggali proses implementasi produk.

### Untuk DevOps Engineer

15. Jelaskan tahapan implementasi Load Balancer pada lingkungan laboratorium.
16. Teknologi apa saja yang digunakan selama proses implementasi?
17. Bagaimana proses integrasi beberapa container SLiMS agar dapat berjalan bersamaan?
18. Kendala teknis apa yang muncul selama proses pengembangan?
19. Bagaimana cara memastikan setiap node menerima distribusi trafik secara merata?
20. Bagaimana konfigurasi sistem agar tetap berjalan ketika salah satu node mengalami kegagalan?

---

# D. Tahap Pengujian Produk (Testing)

## Tujuan:

Mengumpulkan data eksperimen.

### Untuk DevOps Engineer

21. Bagaimana skenario pengujian yang digunakan untuk mensimulasikan beban pengguna?
22. Mengapa menggunakan K6 sebagai alat pengujian?
23. Parameter apa saja yang diamati selama pengujian?
24. Bagaimana proses pencatatan hasil pengujian dilakukan?
25. Bagaimana cara memastikan hasil pengujian konsisten?

---

# E. Tahap Evaluasi Produk (Evaluation)

## Tujuan:

Mengevaluasi keberhasilan implementasi.

### Untuk CIO dan DevOps

26. Bagaimana perbandingan performa sistem sebelum dan sesudah implementasi?
27. Apakah terdapat perubahan pada waktu tanggap sistem?
28. Bagaimana perubahan jumlah permintaan yang dapat dilayani?
29. Apakah sistem menjadi lebih mudah dikembangkan setelah implementasi?
30. Menurut Anda apakah penerapan Load Balancer berhasil menjawab kebutuhan organisasi?

---

# F. Validasi Teori Penelitian

## Tujuan:

Menghubungkan hasil dengan landasan teori.

### Untuk CIO

31. Apakah implementasi ini membantu mempercepat layanan kepada pemustaka?
32. Apakah sistem saat ini lebih siap menghadapi pertumbuhan pengguna?
33. Bagaimana pandangan Anda terhadap keberlanjutan infrastruktur ini?

### Untuk DevOps

34. Apakah implementasi ini mendukung konsep High Availability?
35. Apakah hasil yang diperoleh sesuai dengan ekspektasi awal?

---

## Pertanyaan Penutup

36. Apakah terdapat rekomendasi pengembangan lebih lanjut terhadap sistem ini?
37. Apakah ada informasi tambahan yang ingin disampaikan terkait penelitian ini?
