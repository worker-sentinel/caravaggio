Mirza: Selamat malam, Pak Haidar. Perkenalkan, nama saya Mirza dari Fakultas Adab dan Humaniora. Saya izin mewawancarai Bapak terkait jaringan yang ada di organisasi Yuros ini. Sebelumnya, izin saya untuk merekam pembicaraan kita hari ini, ya Pak.

Haidar: Malam. Boleh, silakan.

Mirza: Baik, pertanyaan pertama. Bisa Pak Haidar ceritakan peran dan tanggung jawab Bapak dalam organisasi ini, khususnya selama proses deployment?

Haidar: Untuk tupoksi saya di proses deployment, tugas saya adalah merancang mulai dari jaringan fisik (layer 1), membuat mapping IP Address, menentukan skema jaringan dan perangkat apa saja yang dipakai, melakukan konfigurasi, hingga mengatur keamanan di jaringannya. Kurang lebih seperti itu.

Mirza: Bisa Anda ceritakan bagaimana proses membangun jaringan di organisasi ini dari awal hingga kondisi saat ini? Bagaimana tahapannya?

Haidar: Karena basis kita adalah riset, dari awal kita menggunakan metode trial and error. Terjadi banyak sekali perubahan dari awal sampai sekarang. Awalnya kita belum membagi jaringan menggunakan region atau zona, tapi sekarang sudah pakai region dan perangkat yang digunakan juga sudah semakin banyak.

Tahapannya, pertama kita buat skema jaringannya dulu. Setelah itu masuk ke penyusunan layer fisik, seperti menarik kabel dan menyiapkan perangkatnya. Kemudian kita mulai konfigurasi perangkat, mulai dari switch, modem, access point, hingga router. Terakhir, setelah semuanya berjalan, baru kita masuk ke tahap implementasi keamanan jaringannya.

Mirza: Bisa Anda jelaskan secara menyeluruh bagaimana arsitektur jaringan yang Anda bangun untuk mendukung ekosistem ini? Dari sisi topologi hingga komponen yang terlibat.

Haidar: Perangkat yang dipakai di sini mencakup router, modem, access point, dan switch. Untuk topologinya, kita membaginya ke dalam beberapa region:

Region Internal: Khusus untuk anggota internal Yuros.

Region Control: Khusus untuk administrator utama yang berada di level paling atas.

Region Server: Berisi server fisik.

Region vHost (Virtualization Host): Menampung beberapa layanan (service). Region vHost ini berjalan di dalam Region Server dan dibagi lagi menjadi vHost Internal, vHost Publik, dan vHost Datum.

Layer Publik: Jaringan internet yang hanya bisa diakses oleh publik. Publik tidak bisa berkomunikasi dengan perangkat internal atau lokal kita.

Mirza: Selanjutnya, bagaimana proses Anda memastikan konektivitas antara server, desktop, dan aplikasi dalam ekosistem ini bisa berjalan dengan baik dan stabil?

Haidar: Sudah jelas kita mulai dari layer fisiknya dulu. Kita pastikan kabel dan perangkat kerasnya dalam kondisi bagus. Untuk konfigurasi, kita lakukan trial and error untuk melihat dampaknya. Setelah semua berjalan running, baru kita perkuat di sisi keamanan menggunakan firewall, baik itu firewall dari MikroTik maupun firewall di host atau komputer itu sendiri.

Mirza: Protokol jaringan apa saja yang Anda gunakan dalam sistem ini? Beserta alasan dan pertimbangan di baliknya.

Haidar: Kalau dari segi protokol, kita lebih ke implementasi sendiri menyesuaikan kebutuhan di sini. Kita menggunakan firewall dari MikroTik untuk mengatur aksesnya. Contohnya, Region Internal tidak boleh mengakses Region Control. Hak akses juga dibagi-bagi untuk Admin, Koordinator, Manajer Operasional, Manajer Internal, Kontributor, hingga Internship. Aturannya (rules) disesuaikan dengan cakupan tugas masing-masing agar tidak bisa sembarangan mengakses server.

Mirza: Terkait sistem autentikasi, bagaimana layer jaringan berinteraksi dengan sistem autentikasi seperti Keycloak?

Haidar: Kita atur di firewall agar akses yang bersifat publik sama sekali tidak bisa masuk. Akses ke Keycloak hanya dibuka untuk jaringan internal kita.

Mirza: Kemarin saya sempat mewawancarai rekan-rekan Anda. Mas Edgar memegang PostgreSQL, Mas Poco memegang MongoDB, dan ada satu lagi yang memegang MariaDB. Kenapa harus menggunakan tiga database yang berbeda dalam sistem ini?

Haidar: Pertimbangannya sebenarnya untuk menyesuaikan kebutuhan ke depannya. Kita persiapkan dari sekarang. Apabila nanti butuh MongoDB, teknologinya sudah ready. Begitu juga kalau butuh PostgreSQL atau MariaDB, semuanya sudah siap dipakai.

Mirza: Terakhir, bagaimana pola koordinasi dan komunikasi Anda dengan tim saat melakukan deployment?

Haidar: Koordinasi manajemennya kita menggunakan GitHub, dan tentunya kita juga melakukan koordinasi langsung secara tatap muka dengan orang-orang yang memiliki hak akses.
