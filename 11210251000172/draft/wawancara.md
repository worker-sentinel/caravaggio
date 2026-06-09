## PANDUAN WAWANCARA PENELITIAN
Informasi Sesi Wawancara

* Hari/Tanggal: Jumat, 12 Juni 2026
* Waktu: 09.00 - 16.00
* Tempat/Media: Organisasi N
* Informan/Narasumber: Ketua Organisasi N, Sysadmin Organisasi N

------------------------------

## BAGIAN I: PROTOKOL PEMBUKA (PENGANTAR)
Selamat pagi/siang Bapak/Ibu. Terima kasih atas kesediaannya meluangkan waktu untuk sesi wawancara ini.
Perkenalkan, saya [Nama Anda], mahasiswa program studi [Nama Prodi]. Saat ini saya sedang melaksanakan penelitian skripsi dengan metode Design and Development Research (DDR) terkait dengan "Implementasi dan Optimasi Load Balancing untuk Meningkatkan High Availability Sistem Otomasi Perpustakaan di Organisasi N".
Wawancara ini bertujuan untuk mengumpulkan data substantif mengenai kondisi infrastruktur jaringan saat ini, hambatan ketersediaan layanan koleksi, serta melakukan validasi terhadap sistem Load Balancer yang telah saya kembangkan. Seluruh data yang diperoleh akan dijaga kerahasiaannya dan hanya digunakan untuk kepentingan akademik penelitian ini. Sesi ini akan berlangsung sekitar 15–20 menit. Apakah Bapak/Ibu bersedia untuk direkam? Jika bersedia, kita dapat memulai pertanyaan pertama.

------------------------------

## BAGIAN II: DAFTAR PERTANYAAN INTI

## Fase 1: Analisis Kebutuhan Jaringan & Masalah Ketersediaan (Needs Analysis)
Tujuan: Menggali masalah nyata di lapangan terkait beban server, latensi, dan ketersediaan koleksi digital sebelum sistem dibangun.

   1. Bagaimana karakteristik dan pola trafik pemustaka saat mengakses sistem otomasi perpustakaan di Organisasi N harian, khususnya pada jam-jam sibuk?
   2. Apakah infrastruktur web server yang ada saat ini pernah mengalami penurunan performa (latensi tinggi) atau kondisi mati total (downtime) akibat lonjakan trafik tersebut?
   3. Bagaimana dampak dari kendala teknis server tersebut terhadap ketersediaan layanan bahan koleksi digital dan produktivitas operasional pustakawan di Organisasi N?
   4. Mekanisme atau strategi apa yang saat ini sudah diterapkan oleh tim TI Organisasi N untuk mengatasi penumpukan beban kerja pada server tunggal?
   5. Menurut Anda, kendala utama apa yang membuat infrastruktur jaringan saat ini belum mampu mencapai standar High Availability (ketersediaan tinggi) secara maksimal?

## Fase 2: Evaluasi Usulan Desain & Validasi Sistem (Evaluation & Validation)
Tujuan: Meminta umpan balik teknis dari informan ahli setelah penulis mendemonstrasikan purwarupa sistem Load Balancer yang telah dikembangkan.

   1. Setelah melihat demonstrasi purwarupa sistem Load Balancer yang saya kembangkan, bagaimana penilaian Anda terhadap alur distribusi trafik dan arsitektur jaringan yang baru ini?
   2. Menurut pandangan teknis Anda, apakah implementasi algoritma (seperti Round Robin atau Least Connection) dalam sistem ini sudah cukup adaptif untuk memecahkan masalah penumpukan beban di Organisasi N?
   3. Apakah mekanisme pengalihan otomatis (failover) pada sistem Load Balancer ini dinilai sudah efektif dalam menjamin ketersediaan layanan koleksi tanpa downtime saat salah satu server mati?
   4. Apa saja kelebihan dan kekurangan dari purwarupa sistem Load Balancer ini jika ditinjau dari sisi kemudahan pemeliharaan (maintenance) oleh tim TI Organisasi N ke depan?
   5. Masukan atau rekomendasi apa yang perlu saya tambahkan agar produk arsitektur jaringan ini lebih optimal, aman, dan siap diimplementasikan secara permanen di Organisasi N?

------------------------------

## BAGIAN III: PROTOKOL PENUTUP
Baik Bapak/Ibu, semua pertanyaan inti telah selesai didiskusikan. Informasi dan perspektif teknis yang Bapak/Ibu berikan sangat berharga untuk melengkapi fase analisis dan evaluasi dalam metodologi DDR penelitian saya. Data ini akan segera saya transkripsikan dan analisis secara objektif untuk menyempurnakan luaran sistem ini.
Sebelum saya akhiri, apakah ada poin tambahan atau dokumen teknis pendukung yang ingin Bapak/Ibu sampaikan terkait topik kita hari ini?
Jika tidak ada, saya ucapkan terima kasih yang sebesar-besarnya atas dukungan, waktu, dan ilmu yang diberikan dalam wawancara ini. Selamat pagi/siang.

------------------------------

## DAFTAR PUSTAKA
Richey, R. C., & Klein, J. D. (2007). Design and Development Research: Methods, Strategies, and Issues. Lawrence Erlbaum Associates, Publishers.

