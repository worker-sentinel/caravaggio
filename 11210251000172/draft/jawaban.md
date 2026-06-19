Berikut adalah draf jawaban wawancara dari sudut pandang Ketua Organisasi N dan Sysadmin Organisasi N. Jawaban dirancang dengan gaya bahasa kasual, profesional, padat informasi, serta dilengkapi data teknis simulasi untuk kebutuhan skripsi DDR Anda.
------------------------------
## JAWABAN INFORMAN: FASE 1 (ANALISIS KEBUTUHAN)## 1. Pola Trafik Pemustaka

* Ketua Organisasi N: Trafik harian kami sangat fluktuatif. Pada hari biasa, akses landai. Namun, saat pekan ujian atau pendaftaran anggota baru, server langsung diserbu ribuan pengguna secara bersamaan.
* Sysadmin: Berdasarkan log MRTG, rata-rata trafik harian berkisar di 500–800 request per menit. Namun, pada jam sibuk (09.00–11.00 dan 13.00–15.00), angka ini melonjak tajam hingga 2.500–3.000 request per menit. Pola ini menimbulkan spike tinggi pada penggunaan bandwidth dan resource server.

## 2. Penurunan Performa & Downtime

* Ketua Organisasi N: Ya, sering sekali dikeluhkan. Saat trafik tinggi, sistem menjadi sangat lambat, bahkan kadang memunculkan halaman error (tidak bisa diakses).
* Sysadmin: Betul, kami sering menghadapi masalah tersebut. Pada jam sibuk, utilisasi CPU server tunggal kami sering menyentuh 95%–98%. Akibatnya, terjadi connection timeout. Dalam sebulan, rata-rata terjadi 2–3 kali downtime dengan durasi pemulihan sekitar 15–30 menit per kejadian.

## 3. Dampak Kendala Teknis

* Ketua Organisasi N: Dampaknya cukup serius. Pemustaka gagal mengunduh e-book atau jurnal digital, yang menurunkan indeks kepuasan layanan kami. Bagi pustakawan, proses sirkulasi dan input katalog menjadi tertunda.
* Sysadmin: Dari sisi teknis, antrean kueri ke basis data menjadi stuck. Produktivitas staf TI juga tersita karena harus melakukan restart layanan Apache/Nginx secara manual setiap kali server mengalami crash.

## 4. Mekanisme Penanganan Saat Ini

* Ketua Organisasi N: Saat ini kami masih bergantung penuh pada tim TI untuk penanganan manual setiap ada kendala. Belum ada sistem otomatis.
* Sysadmin: Sementara ini kami hanya melakukan optimasi di level software, seperti mengaktifkan caching (Redis) dan menaikkan batas max_connections pada web server. Namun, strategi ini kurang efektif karena keterbatasan fisik resource dari satu server tunggal tersebut.

## 5. Kendala Utama High Availability

* Ketua Organisasi N: Kendala utamanya adalah keterbatasan anggaran untuk peremajaan perangkat keras dan kurangnya cetak biru (blueprint) arsitektur jaringan yang modern.
* Sysadmin: Masalah mendasarnya adalah adanya Single Point of Failure (SPOF). Karena hanya mengandalkan satu server tunggal, jika server tersebut mati atau kelebihan beban, seluruh layanan otomatis ikut terhenti. Kami kekurangan sistem load balancing untuk membagi beban kerja secara merata.

------------------------------
## JAWABAN INFORMAN: FASE 2 (EVALUASI & VALIDASI)## 1. Penilaian Arsitektur Baru

* Ketua Organisasi N: Secara konsep, arsitektur baru ini sangat bagus. Pembagian beban ke beberapa server membuat layanan terasa lebih aman dan menjamin keberlangsungan operasional perpustakaan.
* Sysadmin: Arsitektur yang didemonstrasikan sudah memenuhi standar topologi High Availability. Pemisahan jalur antara Load Balancer dan beberapa Node Web Server di belakangnya berjalan sangat rapi dan logis.

## 2. Evaluasi Algoritma Round Robin

* Ketua Organisasi N: Selama demonstrasi, saya lihat pembagian aksesnya adil dan bergantian. Ini solusi yang adil untuk server-server kami.
* Sysadmin: Round Robin sangat cocok dan adil jika spesifikasi hardware pada backend node setara. Dari hasil pengujian tadi, distribusi request terbagi rata sekitar 50:50 di kedua server. Namun, jika nanti kami menambah server dengan spesifikasi berbeda, disarankan beralih ke Weighted Round Robin.

## 3. Efektivitas Failover (Pengalihan Otomatis)

* Ketua Organisasi N: Fitur ini yang paling kami butuhkan. Saat satu server dimatikan secara sengaja tadi, sistem tetap berjalan normal tanpa disadari oleh pengguna.
* Sysadmin: Mekanisme failover berjalan sangat responsif. Saat Node 1 dimatikan, health check pada Load Balancer langsung mendeteksinya dalam hitungan detik (sekitar 2–3 detik) dan mengalihkan 100% trafik ke Node 2. Layanan tetap up tanpa memicu error 502/504.

## 4. Kelebihan & Kekurangan Purwarupa

* Sysadmin:
* Kelebihan: Konfigurasi sistem sangat ramping, metrik pemantauan mudah dipahami, dan penggunaan resource untuk aplikasi Load Balancer itu sendiri sangat rendah (hemat RAM/CPU).
   * Kekurangan: Belum dilengkapi dengan dasbor pemantauan berbasis grafis (GUI) bawaan. Tim TI masih harus memantau log pergerakan trafik dan kondisi server melalui baris perintah (command-line interface).

## 5. Masukan & Rekomendasi Pengoptimalan

* Ketua Organisasi N: Dari saya, mohon buatkan panduan operasional tertulis yang mudah dipahami oleh staf TI kami agar sistem ini bisa dirawat dengan baik.
* Sysadmin: Untuk implementasi permanen, ada beberapa poin yang perlu ditambahkan:
1. Keamanan: Terapkan SSL/TLS langsung di level Load Balancer (SSL Termination).
   2. Skalabilitas: Tambahkan fitur Auto-Reload konfigurasi agar saat ada penambahan server baru tidak perlu mematikan total layanan.
   3. Monitoring: Integrasikan dengan alat pemantau seperti Prometheus dan Grafana untuk mempermudah pengawasan visual.

------------------------------
Jika Anda ingin menyesuaikan tanggapan ini dengan kondisi riil skripsi Anda, beri tahu saya:

* Spesifikasi teknologi yang Anda gunakan (misalnya Nginx, HAProxy, atau Keepalived?).
* Jumlah server backend yang digunakan dalam purwarupa Anda (2 server, 3 server?).
* Hasil pengujian performa spesifik yang sudah Anda dapatkan (misalnya nilai Throughput atau Response Time?).

Saya siap membantu menyesuaikan detail data teknis di atas agar selaras dengan bab hasil penelitian Anda.

