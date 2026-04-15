# LANDASAN TEORI

## 
Alireza Noruzi merumuskan lima hukum web yang diadaptasi dari prinsip dasar kepustakaan untuk menggambarkan bagaimana seharusnya sebuah sumber daya informasi digital dikelola agar memberikan manfaat maksimal bagi penggunanya. Berikut adalah kelima hukum tersebut:

1. Web resources are for use: Sumber daya web ada untuk digunakan, bukan sekadar disimpan. Fokus utamanya adalah pada aksesibilitas dan kemudahan penggunaan bagi pengunjung.
2. Every user his or her web resource: Setiap pengguna memiliki kebutuhan informasi yang berbeda, sehingga sistem harus mampu menyediakan akses yang relevan bagi setiap individu secara personal dan tepat sasaran.
3. Every web resource its user: Setiap sumber daya atau konten yang ada di web harus dapat ditemukan oleh pengguna yang membutuhkannya melalui mekanisme pencarian dan distribusi yang efektif.
4. Save the time of the user: Waktu pengguna adalah hal yang sangat berharga. Sistem web yang baik harus memiliki performa yang cepat, struktur yang jelas, dan navigasi yang efisien untuk meminimalkan waktu tunggu.
5. The Web is a growing organism: Web adalah organisme yang terus tumbuh dan berkembang. Infrastruktur web harus mampu beradaptasi dengan perubahan teknologi, pertumbuhan data, dan peningkatan jumlah pengguna secara dinamis.

Relevansi Hukum Noruzi dalam Penelitian
Dari kelima hukum di atas, penulis memilih dua hukum yang paling mendasari dan menjadi landasan teoritis utama dalam penelitian mengenai Load Balancing di Organisasi N:
Pertama adalah Hukum Keempat: Save the time of the user. Hukum ini menjadi fondasi teknis mengapa implementasi Load Balancer sangat krusial. Dalam konteks infrastruktur di Organisasi N, keterlambatan respon server atau latensi tinggi saat jam sibuk secara langsung melanggar prinsip ini karena membuang waktu pengguna. Dengan menerapkan mekanisme penyeimbangan beban, waktu tanggap (response time) dapat diminimalisir, sehingga selaras dengan tujuan hukum ini yaitu efisiensi waktu akses bagi pengguna sistem (Noruzi, 2004).
Kedua adalah Hukum Kelima: The Web is a growing organism. Hukum ini mendasari perlunya skalabilitas dan fleksibilitas dalam infrastruktur Cloud Computing. Mengingat trafik dan data di Organisasi N bersifat dinamis dan cenderung terus meningkat (tumbuh), maka sistem tidak boleh bersifat statis. Penggunaan Load Balancer memungkinkan infrastruktur organisasi untuk beradaptasi terhadap pertumbuhan tersebut tanpa harus merombak total sistem, memastikan bahwa "organisme" digital di Organisasi N tetap berfungsi optimal meskipun skala penggunaannya meluas (Noruzi, 2004).

## Teknologi Informasi
Teknologi Informasi adalah serangkaian perangkat lunak, perangkat keras, maupun prosedur yang digunakan untuk memproses, menyimpan, menyebarkan, dan mengelola informasi secara elektronik guna mendukung pengambilan keputusan dan aktivitas operasional (Ward & Peppard, 2016). Dalam lingkup perpustakaan, teknologi informasi berperan sebagai pendukung utama dalam transformasi layanan konvensional menjadi layanan berbasis digital yang lebih efisien dan terukur.

## Perpustakaan
Perpustakaan merupakan sebuah institusi pengelola koleksi karya tulis, karya cetak, dan/atau karya rekam secara profesional dengan sistem yang baku guna memenuhi kebutuhan pendidikan, penelitian, pelestarian, informasi, dan rekreasi para pemustaka (Undang-Undang Republik Indonesia Nomor 43, 2007). Dalam konteks modern, perpustakaan tidak lagi hanya sekadar gedung fisik penyimpanan buku, melainkan telah bertransformasi menjadi pusat akses informasi digital yang melayani pengguna tanpa batasan ruang dan waktu.

## Sistem Otomasi Perpustakaan
Sistem otomasi perpustakaan adalah aplikasi teknologi informasi yang digunakan untuk membantu pekerjaan manajerial dan pelayanan di perpustakaan, mulai dari pengadaan, pengolahan, hingga sirkulasi dan layanan referensi (Saleh, 2014). Implementasi otomasi ini bertujuan untuk meningkatkan efisiensi kerja pustakawan dan mempermudah pemustaka dalam melakukan pencarian koleksi melalui Online Public Access Catalog (OPAC).

## Cloud Computing
Cloud Computing atau komputasi awan adalah sebuah model penyediaan sumber daya komputasi seperti server, jaringan, dan penyimpanan yang dapat diakses melalui internet secara dinamis dan sesuai permintaan pengguna (Mell & Grance, 2011). Teknologi ini memungkinkan perpustakaan atau organisasi untuk menjalankan sistem informasi tanpa harus memiliki server fisik sendiri, sehingga meningkatkan efisiensi pemeliharaan infrastruktur TI (Buyya et al., 2018).

## Web Server
Web server adalah perangkat lunak atau perangkat keras yang berfungsi menerima permintaan melalui protokol HTTP atau HTTPS dari klien, biasanya berupa peramban web, dan mengirimkan kembali konten yang diminta dalam bentuk halaman web atau data digital (Erl, 2013). Dalam sistem informasi, web server berperan sebagai jembatan yang menghubungkan basis data aplikasi dengan tampilan yang dilihat oleh pengguna akhir.

## Load Balancer
Load Balancer adalah komponen teknologi yang bertugas mendistribusikan beban lalu lintas data ke beberapa server secara seimbang guna mengoptimalkan penggunaan sumber daya dan meminimalkan waktu tanggap (Nance & Hay, 2020). Dengan adanya load balancer, risiko penumpukan trafik pada satu titik server dapat dihindari, sehingga performa sistem tetap stabil meskipun diakses oleh banyak pengguna secara bersamaan.

## High Availability
High Availability (HA) adalah karakteristik sistem yang dirancang untuk memastikan tingkat kinerja operasional dan ketersediaan layanan yang tinggi dalam durasi waktu tertentu tanpa kegagalan (F5 Networks, 2024). Dalam penelitian ini, HA dicapai melalui mekanisme failover pada load balancer, di mana jika salah satu server mengalami gangguan, layanan akan secara otomatis dialihkan ke server lain yang masih aktif agar pengguna tidak merasakan adanya downtime.

## Kerangka Berpikir

Kerangka berpikir dalam penelitian ini berawal dari pengamatan terhadap kondisi infrastruktur Teknologi Informasi di Organisasi N, khususnya pada unit Perpustakaan yang telah menerapkan Sistem Otomasi Perpustakaan. Sebagai organisasi yang melayani banyak pemustaka, tuntutan akan ketersediaan layanan yang cepat dan stabil menjadi hal yang mutlak. Namun, pada kenyataannya, sering terjadi penumpukan beban kerja pada satu Web Server tertentu saat jam sibuk, yang mengakibatkan penurunan performa sistem dan waktu tanggap yang lambat bagi pengguna.

Kondisi tersebut melanggar prinsip dasar Grand Theory Alireza Noruzi, khususnya hukum keempat yaitu "Save the time of the user". Ketika sistem informasi perpustakaan mengalami latensi atau sulit diakses, waktu pemustaka terbuang sia-sia, sehingga nilai guna dari sumber daya web tersebut menurun. Untuk mengatasi masalah ini, diperlukan sebuah solusi teknis yang mampu mengelola distribusi trafik secara dinamis guna memastikan sistem tetap berjalan optimal meskipun beban kerja meningkat.

Solusi yang ditawarkan dalam penelitian ini adalah implementasi Load Balancer. Dengan menempatkan Load Balancer di depan beberapa node server, lalu lintas data tidak lagi bertumpu pada satu titik, melainkan didistribusikan secara merata berdasarkan algoritma tertentu. Langkah ini diambil untuk mencapai kondisi High Availability, di mana layanan perpustakaan tetap dapat diakses meskipun salah satu server mengalami kegagalan teknis. Hal ini juga selaras dengan hukum kelima Noruzi, yaitu "The Web is a growing organism", di mana infrastruktur organisasi harus mampu beradaptasi dengan pertumbuhan jumlah pemustaka dan data.
Secara skematis, alur kerangka berpikir ini dimulai dari tahap identifikasi masalah (beban server tidak merata), diikuti dengan tahap intervensi teknis (penerapan Load Balancer), dan diakhiri dengan tahap evaluasi performa. Hasil akhir yang diharapkan adalah terciptanya infrastruktur server yang tangguh, responsif, dan memiliki tingkat ketersediaan yang tinggi demi mendukung produktivitas di Organisasi N.

## alur bagan

1. Kondisi Awal (Masalah):
   a. Trafik pemustaka tinggi di Organisasi N.
   b. Beban kerja menumpuk pada satu server (Overload).
   c. Waktu tanggap lambat (Melanggar Hukum ke-4 Noruzi).
2. Tindakan (Solusi):
   b. Implementasi Load Balancer pada infrastruktur server.
   c. Pengujian berbagai algoritma distribusi beban.
   d. Konfigurasi sistem untuk skalabilitas dan ketahanan.
3. Kondisi Akhir (Hasil yang Diharapkan):
   a. Distribusi beban kerja merata.
   b. Peningkatan Response Time dan Throughput.
   c. Tercapainya High Availability (Sesuai Hukum ke-5 Noruzi).

