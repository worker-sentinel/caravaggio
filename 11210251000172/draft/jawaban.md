Karena wawancara belum benar-benar dilakukan, saya tidak akan membuat seolah-olah ini adalah kutipan nyata dari informan. Yang aman untuk skripsi adalah membuat **simulasi jawaban / ekspektasi jawaban (contoh hasil wawancara)** yang nanti bisa Anda sesuaikan setelah wawancara asli dilakukan.

Format di bawah ini saya sesuaikan dengan gaya penulisan Anda dan mudah dipindahkan ke **BAB IV – Hasil Wawancara**.

---

# Simulasi Hasil Wawancara Informan

## Informan 1 — CIO Organisasi N

**Kode Informan: I-1**

### 1. Bagaimana kondisi layanan sistem otomasi perpustakaan sebelum dilakukan pengembangan infrastruktur?

**Jawaban (simulasi):**
Sebelum dilakukan pengembangan, sistem otomasi perpustakaan masih menggunakan pendekatan layanan tunggal (*single server*). Pada kondisi normal sistem dapat berjalan dengan baik, namun ketika jumlah pengguna meningkat secara bersamaan mulai muncul gejala penurunan performa seperti keterlambatan membuka halaman katalog dan meningkatnya waktu pemuatan halaman.

---

### 2. Permasalahan apa yang paling sering muncul ketika jumlah pengguna meningkat?

**Jawaban (simulasi):**
Permasalahan yang paling sering muncul adalah peningkatan waktu tanggap sistem. Pada beberapa kondisi tertentu sistem terlihat tetap aktif tetapi membutuhkan waktu lebih lama untuk memberikan respon kepada pengguna.

---

### 3. Bagaimana dampak gangguan performa sistem terhadap operasional?

**Jawaban (simulasi):**
Keterlambatan sistem memengaruhi pengalaman pemustaka karena proses pencarian koleksi dan akses informasi menjadi lebih lambat sehingga dapat menghambat efektivitas pelayanan.

---

### 4. Mengapa peningkatan performa dan ketersediaan layanan menjadi penting?

**Jawaban (simulasi):**
Karena layanan perpustakaan saat ini sudah bergantung pada sistem digital sehingga akses yang cepat dan tersedia secara terus-menerus menjadi kebutuhan utama organisasi.

---

# Informan 2 — DevOps Engineer

**Kode Informan: I-2**

---

### 5. Bagaimana arsitektur sistem sebelum implementasi Load Balancer?

**Jawaban (simulasi):**
Sebelum pengembangan, aplikasi SLiMS dijalankan secara monolitik menggunakan satu instansi aplikasi yang terhubung ke database. Seluruh permintaan pengguna diproses pada satu simpul sehingga seluruh konsumsi sumber daya terpusat.

---

### 6. Komponen mana yang paling sering menjadi bottleneck?

**Jawaban (simulasi):**
Bottleneck utama ditemukan pada lapisan aplikasi karena seluruh koneksi aktif diproses oleh satu container secara bersamaan.

---

### 7. Pada kondisi seperti apa penurunan performa mulai terlihat?

**Jawaban (simulasi):**
Penurunan mulai terlihat ketika jumlah pengguna virtual meningkat selama proses pengujian dan menghasilkan antrean proses pada server aplikasi.

---

### 8. Apakah sebelumnya pernah dilakukan optimasi selain Load Balancer?

**Jawaban (simulasi):**
Sebelumnya optimasi dilakukan melalui penyesuaian konfigurasi layanan, namun peningkatan tersebut belum cukup untuk mengatasi pertumbuhan trafik.

---

# Tahap Perancangan (Design)

### 9. Mengapa memilih Load Balancer dibanding meningkatkan spesifikasi server?

**Jawaban (simulasi):**
Pendekatan Load Balancer dipilih karena memungkinkan skalabilitas horizontal sehingga kapasitas dapat ditingkatkan dengan menambah node tanpa bergantung pada peningkatan perangkat keras tunggal.

---

### 10. Mengapa menggunakan container?

**Jawaban (simulasi):**
Container dipilih karena memudahkan replikasi lingkungan, menjaga konsistensi konfigurasi, dan mempercepat proses implementasi.

---

### 11. Bagaimana menentukan jumlah node?

**Jawaban (simulasi):**
Pada penelitian ini digunakan dua node aplikasi dengan spesifikasi identik untuk menghindari bias distribusi beban.

---

### 12. Mengapa CPU dan RAM dibuat sama?

**Jawaban (simulasi):**
Penyamaan spesifikasi dilakukan agar hasil pengujian lebih objektif dan distribusi trafik tidak dipengaruhi perbedaan kapasitas node.

---

### 13. Algoritma apa yang dipilih?

**Jawaban (simulasi):**
Round Robin dipilih karena seluruh node memiliki kapasitas yang setara sehingga distribusi trafik dapat dilakukan secara merata.

---

# Tahap Implementasi

### 14. Jelaskan proses implementasi.

**Jawaban (simulasi):**
Implementasi dilakukan dengan membangun container aplikasi SLiMS, menghubungkannya dengan database, lalu menambahkan Nginx sebagai Load Balancer.

---

### 15. Teknologi apa yang digunakan?

**Jawaban (simulasi):**
Implementasi menggunakan Docker, Nginx, MariaDB, sistem operasi Arch Linux, dan K6 untuk pengujian performa.

---

### 16. Bagaimana integrasi beberapa container dilakukan?

**Jawaban (simulasi):**
Masing-masing aplikasi dikonfigurasi agar dapat mengakses database yang sama melalui jaringan internal container.

---

### 17. Kendala terbesar saat implementasi?

**Jawaban (simulasi):**
Kendala utama adalah sinkronisasi aplikasi terhadap database bersama dan penyesuaian konfigurasi reverse proxy.

---

### 18. Bagaimana memastikan distribusi trafik merata?

**Jawaban (simulasi):**
Distribusi diamati melalui log akses dan pengamatan utilisasi masing-masing container.

---

### 19. Bagaimana menjaga layanan tetap tersedia?

**Jawaban (simulasi):**
Sistem dikonfigurasi agar Load Balancer hanya meneruskan permintaan ke node yang masih aktif.

---

# Tahap Pengujian

### 20. Bagaimana skenario pengujian dilakukan?

**Jawaban (simulasi):**
Pengujian dilakukan menggunakan metode *ramping virtual users* hingga mencapai 500 pengguna virtual selama empat menit.

---

### 21. Mengapa menggunakan K6?

**Jawaban (simulasi):**
K6 dipilih karena mendukung simulasi beban tinggi dan menghasilkan metrik performa yang rinci.

---

### 22. Parameter apa yang diamati?

**Jawaban (simulasi):**
Parameter utama adalah *response time*, *throughput*, jumlah request, tingkat keberhasilan, dan stabilitas layanan.

---

# Tahap Evaluasi

### 23. Bagaimana hasil sebelum dan sesudah implementasi?

**Jawaban (simulasi):**
Implementasi Load Balancer menunjukkan peningkatan jumlah request yang berhasil diproses serta penurunan waktu tanggap.

---

### 24. Apakah terjadi peningkatan performa?

**Jawaban (simulasi):**
Ya, hasil pengujian menunjukkan sistem mampu memproses lebih banyak permintaan dengan waktu respon yang lebih rendah.

---

### 25. Apakah sistem menjadi lebih siap berkembang?

**Jawaban (simulasi):**
Ya, karena penambahan node baru dapat dilakukan tanpa perubahan besar pada arsitektur.

---

### 26. Apakah implementasi berhasil?

**Jawaban (simulasi):**
Secara umum implementasi berhasil meningkatkan performa sekaligus mendukung konsep High Availability.

---

Nanti saat masuk ke **BAB IV**, jawaban ini tidak ditulis format tanya-jawab lagi, tetapi diubah menjadi **narasi hasil wawancara + kutipan informan**.
