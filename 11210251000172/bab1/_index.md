# PENDAHULUAN

## Latar Belakang

Perpustakaan merupakan institusi pengelola koleksi karya tulis, cetak, dan/atau rekam secara profesional dengan sistem yang baku guna memenuhi kebutuhan pendidikan, penelitian, dan informasi para pemustaka. Sebagai pusat sumber daya informasi, perpustakaan memiliki peran strategis dalam menyediakan bukti intelektual, membantu pengambilan keputusan akademis, serta menjamin akuntabilitas penyebaran ilmu pengetahuan. Pengelolaan perpustakaan kini menjadi aspek vital dalam operasional lembaga pendidikan dan organisasi, di mana perpustakaan tidak hanya berfungsi sebagai gudang buku, tetapi juga sebagai penyedia data strategis yang dinamis.

Seiring pesatnya perkembangan teknologi informasi hingga tahun 2026, organisasi mulai meninggalkan pola konvensional dan mengadopsi sistem otomasi perpustakaan serta perpustakaan digital untuk meningkatkan efisiensi dan kecepatan akses data. Hal ini sejalan dengan amanat Undang-Undang Republik Indonesia Nomor 43 Tahun 2007 tentang Perpustakaan yang menekankan bahwa penyelenggaraan perpustakaan harus dilakukan sesuai dengan standar nasional untuk menjamin ketersediaan layanan yang autentik dan terpercaya. Praktik tata kelola yang baik melibatkan pengklasifikasian, penyimpanan, dan pemeliharaan koleksi secara digital untuk menjaga integritas dan kerahasiaan informasi di dalamnya.

Efektivitas perpustakaan digital sangat bergantung pada proses komprehensif yang mencakup pengadaan, pengolahan, hingga pendayagunaan koleksi. Menurut Peraturan Pemerintah Nomor 24 Tahun 2014, proses pengelolaan yang sistematis memainkan peran penting dalam menjaga memori kolektif organisasi dan memfasilitasi kebutuhan administratif maupun hukum. Melalui sistem otomasi yang terstruktur, perpustakaan dapat meningkatkan efisiensi operasional secara signifikan sekaligus melindungi hak kekayaan intelektual yang dikelolanya.

Sistem otomasi perpustakaan ini mengintegrasikan teknologi informasi dan komunikasi untuk mengelola koleksi dari hulu ke hilir, mulai dari digitalisasi dokumen, pengambilan informasi (information retrieval) yang cepat, hingga distribusi akses kepada pemustaka secara daring. Implementasi ini, sesuai dengan standar pengembangan perpustakaan modern, memanfaatkan perangkat lunak (Library Management System) dan perangkat keras canggih untuk memperkuat tata kelola informasi.

Namun, dalam praktiknya di era digital, stabilitas infrastruktur teknologi menjadi tantangan besar. Perpustakaan digital yang melayani akses massa memerlukan dukungan server yang andal untuk menjaga ketersediaan data secara real-time. Masalah muncul ketika beban kerja server tidak terdistribusi secara merata, yang mengakibatkan terjadinya bottleneck atau kegagalan sistem saat puncak kunjungan pemustaka. Oleh karena itu, diperlukan optimalisasi distribusi beban kerja pada server menggunakan teknologi load balancing. Salah satu pendekatan yang dinilai efektif adalah algoritma Dynamic Weighted Round Robin yang mampu meningkatkan efisiensi distribusi beban kerja dengan mempertimbangkan kapasitas spesifik dari masing-masing server secara dinamis (Rahmawati & Suryanto, 2019, hlm. 167–174).

Server adalah komputer atau program perangkat lunak yang menyediakan layanan kepada komputer, program, atau pengguna lain di dalam jaringan. Server merupakan tulang punggung komputasi modern, yang menjalankan berbagai hal mulai dari aplikasi web dan email hingga penyimpanan file dan manajemen basis data. 

Server dirancang untuk menangani permintaan dengan volume tinggi, mempertahankan integritas data, dan memastikan akses yang andal dan aman ke sumber daya. Server dapat berupa mesin fisik yang ditempatkan di pusat data atau mesin virtual yang berjalan di infrastruktur cloud. 

Kinerja server sangat bergantung pada konfigurasi dan spesialisasi yang diterapkan. (He et al., 2021, hlm 1868-1895). Penelitian menunjukkan bahwa pengoptimalan konfigurasi server dapat meningkatkan kinerja secara signifikan, terutama dalam lingkungan komputasi tepi (edge computing) di mana permintaan komputasi bervariasi (Steen & Tanenbaum, 2016, hlm 967-1009).

Dalam konteks sistem otomasi perpustakaan, load balancer berperan penting untuk mendistribusikan beban kerja secara merata di antara server-server yang ada. Hal ini diperlukan untuk meningkatkan kinerja, ketersediaan, dan skalabilitas sistem. Load balancer berfungsi sebagai perantara antara klien dan server, mengatur lalu lintas data masuk sehingga tidak ada server yang terlalu dibebani (Buyya et al., 2009, hlm 599-616).

Skalabilitas server juga merupakan aspek penting yang harus dipertimbangkan. Dengan meningkatnya jumlah pengguna dan beban kerja, server harus mampu menyesuaikan kapasitasnya untuk memenuhi permintaan yang meningkat. (Saifullah & Mohammed, 2014, hlm 1-5).

Pendekatan seperti load balancing dan virtualisasi dapat digunakan untuk mencapai tujuan ini, memungkinkan distribusi beban kerja yang lebih efisien di antara beberapa server (Vennila & Manikandan, 2014, hlm 1-6).

Dengan semakin meningkatnya volume data dan permintaan pada sistem otomasi perpustakaan, dibutuhkan arsitektur yang scalable dan handal. Pendekatan agile dalam pengembangan sistem dapat membantu mengakomodasi perubahan dan kebutuhan yang dinamis. Oleh karena itu, rancangan load balancer yang efektif dan efisien menjadi penting untuk memastikan keandalan dan ketersediaan sistem otomasi perpustakaan dalam menghadapi lonjakan permintaan.

## Identifikasi Masalah

Peneliti melihat tidak adanya sistem otomasi perpustakaan yang stabil dalam menghadapi lonjakan permintaan buku digital yang tinggi di PT Lektor Media Utama adalah masalah utama penelitian ini, seperti yang ditunjukkan dalam latar belakang.

## Batasan Masalah

Berdasarkan identifikasi masalah yang telah dipaparkan, maka batasan masalah dalam penelitian ini adalah:

1. Rancangan load balancer untuk sistem otomasi perpustakaan.
2. Penelitian ini tidak membahas secara detail implementasi teknis dari load balancer, tetapi lebih pada perancangan konseptual dan algoritma load balancing yang efektif.
3. Penelitian ini dilakukan di PT Lektor Media Utama.

## Rumusan Masalah

Berdasarkan latar belakang dan batasan masalah yang telah dipaparkan, maka rumusan masalah dalam penelitian ini yaitu “Bagaimana rancangan load balancer meningkatkan ketersediaan buku digital pada sistem otomasi perpustakaan di PT Lektor Media Utama”.

## Tujuan Penelitian

Tujuan dari penelitian ini adalah merancang arsitektur load balancer yang efektif dan efisien untuk mendukung sistem otomasi perpustakaan yang memiliki ketersediaan buku digital yang tinggi pada PT Lektor Media Utama.

## Manfaat Penelitian

Adapun tujuan dan manfaat penelitian yang ingin dicapai oleh peneliti berdasarkan permasalahan yang telah dijelaskan sebelumnya adalah sebagai berikut: 

a. Manfaat Teoritis
Penelitian ini diharapkan dapat memberi wawasan pengetahuan mengenai model untuk meningkatkan ketersediaan buku digital menggunakan load balancer dan dapat dijadikan sumber rujukan untuk penelitian selanjutnya.

b. Manfaat Praktis 
1. Dapat memberikan solusi atau rekomendasi yang dapat diterapkan untuk mengatasi permasalahan yang diteliti.
2. Dapat memberikan masukan bagi PT Lektor Media Utama dalam meningkatkan ketersediaan buku digital yang tinggi pada sistem otomasi perpustakaan.

## Tinjauan Penelitian Terdahulu

Beberapa penelitian terdahulu yang relevan dengan rancangan load balancer pada sistem otomasi perpustakaan adalah sebagai berikut:

1. Artikel jurnal yang berjudul “Implementasi Load Balancing Pada Web Server Menggunakan Nginx” yang ditulis oleh Fahmi Apliansyah, Iskandar Fitri, dan Agus Iskandar. Penelitian yang diterbitkan pada tahun 2020 ini mengkaji penerapan algoritma load balancing menggunakan web server Nginx. Penelitian ini menggunakan 3 metode load balancing yang didukung oleh Nginx yaitu Round Robin, Least Connection, dan IP Hash. Hasil penelitian ini menunjukkan bahwa Least Connection mendapatkan response time 116ms, 2300.96 req/s dan throughput 17380.01 kbps sedangkan Round Robin mendaptkan 140ms, 2335.36 req/s dan Throughput 17098.05 kbps. Dengan begitu menunjukkan bahwa Least Connection merupakan algoritma terbaik berdasarkan parameter yang telah peneliti ujikan. 

2. Artikel jurnal dari Endarta yang berjudul “Pemanfaatan Cloud Computing Meningkatkan Ketersediaan Dokumen Supervisi” membahas program cloud computing yang bersifat virtual dengan tujuan pemeliharaan data dan aplikasi. Penelitian yang diterbitkan pada tahun 2021 ini menggunakan cloud computing untuk menciptakan ketersediaan dokumen yang lebih siap, sehingga bisa diakses oleh petinggi di sekolah SMK. Hasil dari penelitian ini dapat meningkatkan layanan supervisi akademik dan manajerial kepada sekolah binaan.

3. Artikel jurnal oleh Achmad Mustofa dan Desi Ramayanti yang berjudul “Implementasi Load Balancing dan Failover to Device Mikrotik Router Menggunakan Metode NTH (Studi Kasus: PT Gojek Indonesia”. Penelitian yang diterbitkan pada tahun 2020 ini mengkaji Load Balancing untuk pengefisienan pergantian ISP (Internet Service Provider)). Penelitian ini menghasilkan keseimbangan traffic pada dua jalur koneksi dengan menggunakan metode NTH dapat menghindari terjadinya overload pada salah satu jalur koneksi.