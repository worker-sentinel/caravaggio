# LANDASAN TEORI

## Teknologi Informasi 

Menurut Bambang Warsita (2008:135) teknologi informasi adalah sarana dan prasarana (hardware, software, useware) sistem dan metode untuk memperoleh, mengirimkan, mengolah, menafsirkan, menyimpan, mengorganisasikan, dan menggunakan data secara bermakna. Hal yang sama juga diungkapkan oleh Lantip dan Riyanto (2011:4) teknologi informasi diartikan sebagai ilmu pengetahuan dalam bidang informasi yang berbasis komputer dan perkembanganya sangat pesat. Hamzah B. Uno dan Nina Lamatenggo (2011:57) juga mengemukakan teknologi informasi adalah suatu teknologi yang digunakan untuk mengolah data. Pengolahan itu termasuk memproses, mendapatkan, menyusun, menyimpan, memanipulasi data dalam berbagai cara untuk menghasilkan informasi yang berkualitas, yaitu informasi yang relevan, akurat, dan tepat waktu.

## Adaptasi Lima Hukum Perpustakaan di Era Digital

Penerapan teknologi load balancing dalam infrastruktur perpustakaan digital dapat dikaji melalui kacamata teori informasi modern yang dikembangkan oleh Alireza Noruzi. Noruzi melakukan rekontekstualisasi terhadap "Five Laws of Library Science" milik Ranganathan ke dalam ekosistem berbasis web, yang dikenal sebagai The Five Laws of the Web. Dalam kerangka pemikiran ini, efisiensi teknis sebuah sistem informasi menjadi penentu utama keberhasilan layanan perpustakaan dalam memenuhi kebutuhan pengguna.

Kaitan paling erat antara load balancing dengan teori Noruzi terletak pada hukum keempat, yaitu "Save the time of the Web user". Noruzi menekankan bahwa dalam lingkungan digital, kecepatan akses dan responsivitas sistem adalah komponen kritis dari kualitas layanan. Load balancing berperan sebagai instrumen teknis yang mendistribusikan lalu lintas data secara merata ke beberapa peladen (server) guna mencegah terjadinya kemacetan (bottleneck). Dengan meminimalkan latensi dan menghindari kegagalan sistem saat lonjakan trafik, load balancing secara langsung mengimplementasikan prinsip penghematan waktu pengguna yang diusung oleh Noruzi.

Lebih lanjut, hukum kelima Noruzi yang menyatakan "The Web is a growing organism" memberikan dasar filosofis bagi kebutuhan skalabilitas infrastruktur. Seiring dengan pertumbuhan koleksi digital dan peningkatan jumlah pemustaka yang mengakses pangkalan data secara simultan, beban kerja sistem akan terus berkembang secara eksponensial. Implementasi load balancing memungkinkan perpustakaan untuk melakukan pengembangan kapasitas sistem secara fleksibel tanpa harus menghentikan layanan yang sedang berjalan, sehingga menjamin keberlangsungan akses informasi meskipun organisasi perpustakaan terus bertumbuh (Noruzi, 2004).

## High Availability

Kebutuhan akan kecepatan dan efisiensi internet yang terus meningkat mendorong perusahaan untuk memodernisasi strategi pemasaran mereka, baik seseorang yang membayar tagihannya, pemberi kerja yang menyimpan dokumen karyawannya, atau rumah sakit yang mengakses catatan kesehatan pasien secara online, semuanya membutuhkan aplikasi web yang siap digunakan hanya dengan menekan sebuah tombol. studi beban web yang sedang berlangsung menunjukkan bahwa di bawah beban yang berat, ketersediaan dan kinerja situs web menjadi sangat berkurang (Backlinko, 2018). Untuk mengurangi beban pada aplikasi web, perlu untuk meningkatkan efisiensi dan kecepatannya. 

Solusi penyeimbangan beban membantu memenuhi permintaan layanan yang meningkat secara lebih efisien dan menjalankan fungsi-fungsi berikut: 

a. Effectively mendistribusikan permintaan pelanggan atau beban jaringan ke beberapa server. 
b. Ensures ketersediaan dan keandalan server dengan mengirimkan permintaan hanya ke server yang aktif pada saat ini.
c. Flexibly menambah atau menghapus server ketika permintaan membutuhkannya.

Algoritma penyeimbangan beban ini dapat menggunakan tiga bentuk pengendalian yang berbeda: terpusat, terdistribusi, atau semi terdistribusi.  Strategi transfer menggunakan:

a. Least Connections adalah solusi, ketika memeriksa server mana yang memiliki jumlah koneksi paling sedikit yang terbuka pada saat itu dan mengirim lalu lintas ke server tersebut, diasumsikan bahwa semua koneksi membutuhkan daya pemrosesan yang kurang lebih sama; 
b. Weighted Least Connections adalah solusi di mana administrator memberikan bobot yang berbeda untuk setiap server, dengan asumsi bahwa beberapa server dapat memproses lebih banyak koneksi daripada yang lain. 

Strategi informasi diterapkan dalam solusi waktu respons tertimbang, di mana waktu respons rata-rata dari setiap server dan jumlah koneksi yang terbuka menentukan kemana harus mengirim aliran data.

## Perpustakaan

Perpustakaan adalah institusi pengelola koleksi karya tulis, karya cetak, dan/atau karya rekam secara profesional dengan sistem yang baku guna memenuhi kebutuhan pendidikan, penelitian, pelestarian, informasi, dan rekreasi para pemustaka (UU No. 43 Tahun 2007). Dalam konteks modern, perpustakaan bukan lagi sekadar tempat penyimpanan fisik, melainkan pusat akses informasi digital yang harus tersedia secara terus-menerus (high availability).

Menurut Reitz (2004), perpustakaan digital merupakan perpustakaan di mana sebagian besar koleksinya tersedia dalam format yang dapat dibaca mesin (machine-readable format), yang diakses melalui komputer dan jaringan. Keberhasilan manajemen perpustakaan modern sangat bergantung pada sistem otomasi yang memastikan setiap materi perpustakaan tercatat, aman, dan dapat ditemukan kembali (retrieved) dengan cepat. Hal ini sejalan dengan pendapat Lasa Hs (2009) yang menyatakan bahwa perpustakaan merupakan suatu sistem informasi yang mengintegrasikan sumber daya manusia, sarana prasarana, dan teknologi informasi untuk mendayagunakan koleksi bagi masyarakat.

Seiring dengan meningkatnya kebutuhan akses daring, manajemen koleksi digital dalam perpustakaan memerlukan infrastruktur teknologi yang stabil. Sesuai dengan prinsip akuntabilitas dan layanan publik, perpustakaan harus menjamin bahwa sistem informasi yang digunakan mampu menangani lonjakan beban kerja (workload) pemustaka tanpa mengalami kegagalan akses (downtime). Oleh karena itu, penerapan strategi teknologi seperti load balancing pada server pangkalan data perpustakaan menjadi sangat krusial untuk menjaga performa layanan perpustakaan digital di era keterbukaan informasi saat ini.

## Arsitektur NGINX dalam Infrastruktur Perpustakaan Digital

Dalam implementasi sistem informasi perpustakaan yang modern, NGINX berperan sebagai reverse proxy dan load balancer yang menggunakan arsitektur event-driven. Berbeda dengan server tradisional yang menggunakan model process-based (satu proses untuk satu koneksi), NGINX dirancang untuk menangani ribuan koneksi secara simultan dengan penggunaan memori yang sangat rendah. Hal ini sangat krusial dalam konteks perpustakaan digital yang sering mengalami lonjakan trafik saat akses bersamaan ke pangkalan data atau pengunduhan koleksi repositori (Reese, 2008).

Secara teoretis, efisiensi NGINX mendukung penerapan Hukum Keempat Ranganathan yang diadaptasi oleh Noruzi (2004), yaitu penghematan waktu pengguna. Melalui mekanisme load balancing, NGINX bertindak sebagai gerbang tunggal yang mendistribusikan beban kerja ke beberapa server di belakangnya (backend servers). Jika salah satu server mengalami kegagalan, NGINX secara cerdas akan mengalihkan trafik ke server yang tersedia, sehingga menjamin ketersediaan tinggi (high availability) layanan informasi bagi pemustaka (Nedelcu, 2013).

Selain itu, fitur caching pada NGINX memungkinkan penyimpanan sementara konten yang sering diakses (seperti sampul buku digital atau dokumen populer). Hal ini mengurangi beban kerja pada peladen utama dan mempercepat waktu pengiriman informasi ke peramban pengguna. Dengan demikian, penggunaan NGINX bukan sekadar pilihan teknis, melainkan sebuah strategi untuk memastikan skalabilitas infrastruktur perpustakaan sebagai "organisme yang terus tumbuh" di ruang siber (Noruzi, 2004; Nedelcu, 2013).

## SLiMS

Senayan Library Management System atau SLiMS adalah perangkat lunak sistem manajemen perpustakaan (Library Management System) sumber terbuka yang dirancang untuk memenuhi kebutuhan otomasi perpustakaan, mulai dari skala kecil hingga besar. Menurut Wardiana (2011), SLiMS merupakan solusi teknologi informasi yang komprehensif untuk mengelola pangkalan data bibliografi dan kegiatan sirkulasi secara efisien. Sistem ini dibangun menggunakan bahasa pemrograman PHP dan pangkalan data MySQL, yang memungkinkan fleksibilitas tinggi dalam pengembangan dan integrasi infrastruktur.

Sebagai platform berbasis web, SLiMS memiliki fitur-fitur utama yang mendukung operasional perpustakaan modern, antara lain:
a. OPAC (Online Public Access Catalog): Antarmuka publik untuk pencarian koleksi secara daring.
b. Manajemen Sirkulasi: Modul untuk proses peminjaman dan pengembalian koleksi.
c. Manajemen Bibliografi: Standar penginputan data buku menggunakan format metadata yang baku.
d. Keanggotaan: Pengelolaan data pemustaka secara terpusat.


Menurut Mulyadi (2016), implementasi SLiMS bertujuan untuk meningkatkan kualitas layanan perpustakaan melalui percepatan temu kembali informasi (information retrieval). Namun, karena SLiMS diakses melalui protokol HTTP/HTTPS, performa sistem ini sangat bergantung pada stabilitas server web dan database. Ketika jumlah akses pemustaka ke halaman OPAC meningkat tajam, server tunggal yang menjalankan SLiMS berisiko mengalami overload. Oleh karena itu, dalam konteks ketersediaan tinggi (High Availability), infrastruktur SLiMS memerlukan mekanisme distribusi beban seperti load balancing untuk memastikan layanan perpustakaan tetap dapat diakses tanpa kendala teknis (Sutarno, 2020).

Peneliti membuat judul Rancangan Load Balancer untuk Sistem Otomasi Perpustakaan pada Organisasi N, lalu menggunakan teori High Availability dengan metode Least Connection dan Weighted Least Connections dan akan menghasilkan rancangan penyeimbang beban server menggunakan Load balancer Pada Sistem Otomasi Perpustakaan Organisasi N

## Kerangka Berpikir

Peneliti membuat judul Rancangan Load Balancer untuk Sistem Otomasi Perpustakaan pada Organisasi N, lalu menggunakan teori High Availability dengan metode Least Connection dan Weighted Least Connections dan akan menghasilkan rancangan penyeimbang beban server menggunakan Load balancer Pada Sistem Otomasi Perpustakaan Organisasi N.