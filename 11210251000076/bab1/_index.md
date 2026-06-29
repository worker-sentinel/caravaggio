Rancangan docker image untuk aplikasi slims

# LATAR BELAKANG MASALAH

Perpustakaan merupakan lembaga pengelola informasi yang memiliki peran penting dalam mendukung kegiatan pendidikan, penelitian, pelestarian pengetahuan, dan penyebaran informasi kepada masyarakat. Seiring dengan perkembangan teknologi informasi, perpustakaan dituntut untuk mampu beradaptasi dengan perubahan kebutuhan pengguna yang semakin mengutamakan kecepatan, kemudahan akses, dan ketersediaan informasi secara digital. Kondisi tersebut mendorong perpustakaan untuk memanfaatkan teknologi informasi dalam berbagai aktivitas pengelolaan layanan dan sumber daya informasi yang dimiliki.

Pemanfaatan teknologi informasi di perpustakaan telah mengubah berbagai proses kerja yang sebelumnya dilakukan secara manual menjadi terkomputerisasi. Salah satu bentuk penerapan teknologi informasi di perpustakaan adalah penggunaan sistem otomasi perpustakaan. Sistem otomasi perpustakaan memungkinkan berbagai kegiatan seperti pengatalogan, sirkulasi, inventarisasi koleksi, pengelolaan anggota, hingga penyediaan katalog daring (Online Public Access Catalog/OPAC) dapat dilakukan secara lebih efektif dan efisien. Penerapan sistem otomasi perpustakaan tidak hanya membantu pustakawan dalam meningkatkan produktivitas kerja, tetapi juga meningkatkan kualitas layanan informasi yang diterima oleh pemustaka.

Perkembangan sistem otomasi perpustakaan di Indonesia turut didukung oleh hadirnya berbagai perangkat lunak sumber terbuka (Open Source Software) yang dapat digunakan secara bebas oleh perpustakaan. Penggunaan perangkat lunak sumber terbuka menjadi alternatif yang menarik bagi perpustakaan karena dapat mengurangi biaya pengadaan perangkat lunak sekaligus memberikan fleksibilitas dalam proses pengembangan dan pemeliharaan sistem. Salah satu perangkat lunak otomasi perpustakaan sumber terbuka yang paling banyak digunakan di Indonesia adalah Senayan Library Management System (SLiMS).

SLiMS merupakan aplikasi otomasi perpustakaan berbasis web yang dikembangkan oleh komunitas pengembang Indonesia dan didistribusikan di bawah lisensi GNU General Public License versi 3 (GPL v3). Aplikasi ini pertama kali diperkenalkan pada tahun 2007 dan terus mengalami perkembangan hingga saat ini. Berbagai fitur yang tersedia pada SLiMS memungkinkan perpustakaan untuk mengelola koleksi, layanan sirkulasi, keanggotaan, pelaporan, hingga penyediaan katalog daring dalam satu sistem yang terintegrasi. Kemudahan penggunaan, sifatnya yang terbuka, serta dukungan komunitas yang aktif menjadikan SLiMS sebagai salah satu sistem otomasi perpustakaan yang banyak diadopsi oleh berbagai jenis perpustakaan.

Perkembangan SLiMS tidak terlepas dari kontribusi komunitas pengembang yang secara aktif melakukan pembaruan dan pengembangan fitur sesuai kebutuhan perpustakaan. Hingga saat ini, SLiMS telah digunakan oleh berbagai jenis perpustakaan, mulai dari perpustakaan sekolah, perpustakaan perguruan tinggi, perpustakaan umum, perpustakaan pemerintah, hingga perpustakaan khusus. Berdasarkan data komunitas pengembang SLiMS, pada tahun 2019 tercatat sebanyak 1.923 institusi di Indonesia dan 75 institusi di luar Indonesia telah menggunakan SLiMS sebagai sistem otomasi perpustakaan. Jumlah tersebut menunjukkan bahwa SLiMS memiliki tingkat adopsi yang tinggi dan menjadi salah satu perangkat lunak otomasi perpustakaan yang berpengaruh dalam perkembangan layanan informasi perpustakaan di Indonesia.

Meskipun memiliki tingkat penggunaan yang tinggi, implementasi SLiMS masih menghadapi berbagai tantangan, terutama pada aspek instalasi, konfigurasi, deployment, dan pemeliharaan sistem. Sebagai aplikasi berbasis web, SLiMS memerlukan beberapa komponen pendukung seperti web server, database server, serta berbagai dependensi lainnya agar dapat berjalan dengan baik. Setiap perpustakaan umumnya memiliki lingkungan teknologi informasi yang berbeda, baik dari sisi perangkat keras, sistem operasi, maupun konfigurasi jaringan. Perbedaan tersebut sering kali menyebabkan proses instalasi dan deployment SLiMS menjadi lebih kompleks dan membutuhkan kemampuan teknis tertentu dari pengelola sistem.

Untuk mendukung implementasi aplikasi berbasis web, terdapat beberapa pendekatan yang umum digunakan dalam proses deployment. Pendekatan pertama adalah instalasi langsung pada sistem operasi server. Metode ini relatif mudah diterapkan pada lingkungan yang sederhana karena tidak memerlukan lapisan virtualisasi tambahan. Namun, ketika beberapa aplikasi dijalankan dalam satu server, perbedaan versi perangkat lunak dan dependensi dapat menimbulkan konflik yang memengaruhi stabilitas sistem. Kondisi tersebut dapat menyulitkan proses pemeliharaan maupun pembaruan aplikasi pada masa mendatang.

Pendekatan kedua adalah menggunakan teknologi virtualisasi melalui virtual machine (VM). Pada metode ini, setiap aplikasi dijalankan pada lingkungan virtual yang terpisah sehingga memiliki tingkat isolasi yang lebih baik dibandingkan instalasi langsung pada server. Menurut Morabito (2017), virtualisasi memberikan fleksibilitas dalam pengelolaan aplikasi karena setiap sistem dapat dijalankan secara independen. Namun, penggunaan virtual machine memerlukan sumber daya komputasi yang relatif besar karena setiap VM harus menjalankan sistem operasi secara penuh. Akibatnya, kebutuhan penggunaan prosesor, memori, dan penyimpanan menjadi lebih tinggi dibandingkan metode lainnya.

Perkembangan teknologi kontainerisasi memberikan alternatif yang lebih efisien dibandingkan virtualisasi konvensional. Teknologi ini memungkinkan aplikasi dan seluruh dependensinya dikemas dalam satu lingkungan yang terisolasi tanpa memerlukan sistem operasi terpisah. Menurut Merkel (2014), Docker merupakan salah satu platform kontainerisasi yang memungkinkan aplikasi dijalankan secara konsisten pada berbagai lingkungan komputasi. Selain itu, Pahl (2015) menjelaskan bahwa teknologi kontainerisasi mampu meningkatkan portabilitas aplikasi sekaligus menyederhanakan proses deployment karena seluruh komponen yang dibutuhkan aplikasi dapat dikemas dalam satu paket yang terstandarisasi.

Penerapan teknologi Docker pada sistem otomasi perpustakaan berpotensi memberikan berbagai keuntungan. Docker memungkinkan proses instalasi dan deployment aplikasi dilakukan secara lebih cepat, konsisten, dan mudah direplikasi pada berbagai lingkungan server. Selain itu, penggunaan Docker dapat membantu perpustakaan yang memiliki keterbatasan sumber daya teknologi informasi karena proses implementasi sistem menjadi lebih sederhana dibandingkan metode instalasi konvensional. Dengan demikian, Docker dapat menjadi solusi yang mendukung keberlangsungan layanan informasi perpustakaan melalui pengelolaan sistem yang lebih efisien.

Namun demikian, berdasarkan hasil observasi awal terhadap berbagai sumber distribusi Docker image SLiMS yang tersedia secara publik, ditemukan bahwa pembaruan image belum dilakukan secara berkelanjutan. Beberapa image yang tersedia masih menggunakan komponen perangkat lunak yang sudah tidak diperbarui dalam waktu yang cukup lama. Kondisi tersebut berpotensi menimbulkan masalah kompatibilitas dengan versi terbaru SLiMS maupun perangkat lunak pendukung lainnya. Selain itu, belum tersedia rancangan Docker image yang secara khusus dirancang untuk mendukung kebutuhan implementasi SLiMS dengan mempertimbangkan efisiensi penggunaan sumber daya, kemudahan deployment, dan kemudahan pemeliharaan sistem.

Menurut Sommerville (2016), perangkat lunak perlu dikelola dan diperbarui secara berkelanjutan agar tetap mampu memenuhi kebutuhan pengguna, menjaga kualitas sistem, serta mengurangi risiko permasalahan yang dapat muncul akibat perubahan teknologi. Dalam konteks perpustakaan, pemeliharaan sistem otomasi perpustakaan merupakan faktor penting karena secara langsung memengaruhi kualitas layanan informasi yang diberikan kepada pemustaka. Oleh karena itu, diperlukan suatu solusi yang dapat membantu pengelola perpustakaan dalam melakukan implementasi dan pemeliharaan SLiMS secara lebih efektif.

Berbagai penelitian sebelumnya telah membahas implementasi SLiMS pada berbagai jenis perpustakaan serta pemanfaatan Docker dalam deployment aplikasi berbasis web. Namun, penelitian yang secara khusus membahas perancangan Docker image untuk aplikasi SLiMS sebagai upaya mendukung implementasi sistem otomasi perpustakaan masih relatif terbatas. Padahal, kebutuhan terhadap solusi deployment yang mudah, konsisten, dan efisien semakin meningkat seiring dengan berkembangnya penggunaan SLiMS pada berbagai jenis perpustakaan.

Sebagai mahasiswa Program Studi Ilmu Perpustakaan, peneliti memandang bahwa pengembangan teknologi pendukung sistem otomasi perpustakaan merupakan bagian penting dalam mendukung penyelenggaraan layanan informasi yang berkualitas. Penelitian ini tidak berfokus pada pengembangan fitur aplikasi SLiMS, melainkan pada penyediaan solusi deployment yang dapat mempermudah implementasi dan pemeliharaan sistem otomasi perpustakaan. Dengan tersedianya Docker image yang terancang dengan baik, diharapkan perpustakaan dapat mengimplementasikan SLiMS secara lebih mudah, konsisten, dan efisien.

Berdasarkan uraian tersebut, penelitian ini dilakukan dengan judul “Rancangan Docker Image untuk Aplikasi SLiMS”. Penelitian ini menggunakan metode Design and Development Research (DDR) karena metode tersebut memungkinkan proses perancangan, pengembangan, dan evaluasi produk dilakukan secara sistematis dan iteratif. Menurut Pressman dan Maxim (2015), proses pengembangan yang dilakukan secara bertahap dan berkelanjutan dapat menghasilkan produk yang lebih sesuai dengan kebutuhan pengguna. Melalui penelitian ini diharapkan dapat dihasilkan rancangan Docker image yang mampu mendukung implementasi SLiMS secara lebih efektif, efisien, dan berkelanjutan dalam lingkungan perpustakaan.

Morabito, R. (2017). Virtualization on Internet of Things edge devices with container technologies: a performance evaluation. IEEE Access, 5, 8835–8850. https://doi.org/10.1109/ACCESS.2017.2704444

Merkel, D. (2014). Docker: lightweight Linux containers for consistent development and deployment. Linux Journal, 2014(239), 2.
Pahl, C. (2015). Containerization and the PaaS cloud. IEEE Cloud Computing, 2(3), 24–31. https://doi.org/10.1109/MCC.2015.51

Sommerville, I. (2016). Software Engineering (10th ed.). Boston: Pearson.

Pressman, R. S., & Maxim, B. R. (2015). Software Engineering: A Practitioner’s Approach (8th ed.). New York: McGraw-Hill.


# IDENTIFIKASI MASALAH
Berdasarkan latar belakang yang telah diuraikan, maka dapat diidentifikasi beberapa permasalahan sebagai berikut:

1. Pemanfaatan sistem otomasi perpustakaan menjadi kebutuhan penting dalam mendukung efektivitas pengelolaan koleksi dan layanan informasi di perpustakaan.
2. SLiMS sebagai sistem otomasi perpustakaan yang banyak digunakan memerlukan lingkungan aplikasi yang terkonfigurasi dengan baik agar dapat berjalan secara optimal.
3. Proses instalasi dan deployment SLiMS masih memerlukan konfigurasi berbagai komponen pendukung seperti web server, database server, dan dependensi lainnya yang dapat menjadi kendala bagi sebagian pengelola perpustakaan.
4. Perbedaan konfigurasi perangkat keras, sistem operasi, dan lingkungan server pada setiap perpustakaan berpotensi menyebabkan ketidakkonsistenan dalam proses implementasi SLiMS.
5. Penggunaan metode deployment konvensional maupun virtual machine masih memiliki keterbatasan, baik dari sisi pengelolaan dependensi maupun efisiensi penggunaan sumber daya komputasi.
6. Docker image SLiMS yang tersedia saat ini belum mendapatkan pembaruan dan pengelolaan secara berkelanjutan sehingga berpotensi menimbulkan masalah kompatibilitas, pemeliharaan, dan implementasi sistem.
7. Diperlukan rancangan Docker image untuk aplikasi SLiMS yang mampu mendukung proses deployment secara lebih efisien, portabel, mudah dipelihara, dan sesuai dengan kebutuhan pengelolaan sistem informasi perpustakaan.


# BATASAN MASALAH
Agar penelitian ini lebih terarah dan sesuai dengan tujuan yang ingin dicapai, maka penelitian dibatasi pada hal-hal sebagai berikut:

1. Penelitian ini berfokus pada perancangan Docker image untuk aplikasi Senayan Library Management System (SLiMS) sebagai sistem otomasi perpustakaan berbasis web.
2. Penelitian tidak mencakup pengembangan, modifikasi, atau penambahan fitur pada kode sumber aplikasi SLiMS.
3. Rancangan Docker image yang dikembangkan difokuskan pada kebutuhan instalasi, konfigurasi, dan deployment aplikasi SLiMS dalam lingkungan server berbasis Linux.
4. Pengujian yang dilakukan terbatas pada aspek fungsionalitas aplikasi, kemudahan deployment, stabilitas sistem, dan efisiensi penggunaan sumber daya komputasi seperti CPU, memori, dan media penyimpanan.
5. Penelitian tidak membahas implementasi Docker dalam lingkungan orkestrasi kontainer seperti Docker Swarm, Kubernetes, maupun platform cloud secara khusus.
6. Aspek keamanan sistem, seperti penetration testing, vulnerability assessment, dan audit keamanan aplikasi tidak dibahas secara mendalam dalam penelitian ini.
7. Hasil penelitian berupa rancangan dan prototipe Docker image yang dapat digunakan sebagai referensi implementasi SLiMS, bukan sebagai produk distribusi resmi dari komunitas pengembang SLiMS.

# RUMUSAN MASALAH
Berdasarkan latar belakang, identifikasi masalah, dan batasan masalah yang telah diuraikan, maka rumusan masalah dalam penelitian ini adalah sebagai berikut:

1. Bagaimana rancangan Docker image untuk aplikasi Senayan Library Management System (SLiMS) yang dapat mendukung proses instalasi dan deployment secara efisien pada lingkungan perpustakaan?
2. Bagaimana hasil pengujian rancangan Docker image untuk aplikasi SLiMS berdasarkan aspek fungsionalitas, kemudahan deployment, stabilitas sistem, dan efisiensi penggunaan sumber daya komputasi?

# TUJUAN DAN MANFAAT PENELITIAN
## Tujuan Penelitian
Berdasarkan rumusan masalah yang telah ditetapkan, tujuan penelitian ini adalah:

1. Merancang Docker image untuk aplikasi Senayan Library Management System (SLiMS) yang dapat mendukung proses instalasi dan deployment secara efisien pada lingkungan perpustakaan.
2. Mengimplementasikan rancangan Docker image untuk aplikasi SLiMS sebagai alternatif solusi deployment sistem otomasi perpustakaan yang lebih portabel dan mudah dipelihara.
3. Menguji kinerja Docker image yang dirancang berdasarkan aspek fungsionalitas, kemudahan deployment, stabilitas sistem, dan efisiensi penggunaan sumber daya komputasi.
4. Memberikan rekomendasi penerapan Docker image sebagai pendukung implementasi sistem otomasi perpustakaan guna meningkatkan efektivitas pengelolaan layanan informasi di perpustakaan.

### Manfaat Teoritis

1. Memberikan kontribusi terhadap pengembangan kajian Ilmu Perpustakaan dan Informasi, khususnya dalam pemanfaatan teknologi informasi untuk mendukung implementasi sistem otomasi perpustakaan.
2. Menambah referensi ilmiah mengenai penerapan teknologi kontainerisasi (containerization) dalam pengelolaan sistem informasi perpustakaan.
3. Menjadi bahan rujukan bagi penelitian selanjutnya yang berkaitan dengan implementasi Docker, deployment aplikasi berbasis web, maupun pengembangan infrastruktur teknologi informasi di lingkungan perpustakaan.

### Manfaat Praktis

#### Bagi Perpustakaan

Penelitian ini diharapkan dapat memberikan alternatif solusi dalam proses implementasi sistem otomasi perpustakaan yang lebih mudah, efisien, dan konsisten melalui penggunaan Docker image SLiMS.

#### Bagi Pustakawan dan Pengelola Sistem Perpustakaan

Penelitian ini diharapkan dapat membantu mempermudah proses instalasi, deployment, pemeliharaan, dan pembaruan aplikasi SLiMS sehingga pengelolaan sistem perpustakaan dapat dilakukan secara lebih efektif.

#### Bagi Pengembang dan Komunitas SLiMS

Penelitian ini diharapkan dapat menjadi masukan dalam pengembangan metode distribusi aplikasi SLiMS yang lebih modern, portabel, dan mudah diimplementasikan pada berbagai lingkungan server.

#### Bagi Program Studi Ilmu Perpustakaan

Penelitian ini diharapkan dapat memperkaya kajian mengenai pemanfaatan teknologi informasi dalam pengelolaan perpustakaan serta menjadi contoh penerapan pendekatan interdisipliner antara ilmu perpustakaan dan teknologi informasi.

#### Bagi Peneliti Selanjutnya

Penelitian ini diharapkan dapat menjadi referensi dalam pengembangan penelitian terkait otomasi perpustakaan, deployment aplikasi berbasis kontainer, maupun optimalisasi infrastruktur sistem informasi perpustakaan.

## KAJIAN TERDAHULU

Kajian terdahulu dilakukan untuk mengetahui penelitian-penelitian yang telah dilakukan sebelumnya serta mengidentifikasi persamaan, perbedaan, dan celah penelitian (*research gap*) yang menjadi dasar pelaksanaan penelitian ini.

### Penelitian oleh Yuniar dan Hidayat (2022)

Penelitian yang dilakukan oleh Yuniar dan Hidayat (2022) dengan judul **"Implementasi Aplikasi Senayan Library Management System (SLiMS) dalam Proses Katalogisasi Bahan Pustaka di Perpustakaan SMK Negeri 3 Bandung"** bertujuan untuk mengetahui implementasi aplikasi SLiMS dalam proses katalogisasi bahan pustaka serta dampaknya terhadap pengelolaan perpustakaan. Hasil penelitian menunjukkan bahwa penerapan SLiMS mampu meningkatkan efektivitas dan efisiensi proses katalogisasi, mempermudah pekerjaan pustakawan, serta mendukung pengelolaan koleksi yang lebih baik. Meskipun demikian, penelitian tersebut juga menemukan bahwa masih terdapat beberapa kekurangan pada pengisian deskripsi bibliografi sehingga pemanfaatan SLiMS belum sepenuhnya optimal.

Persamaan penelitian tersebut dengan penelitian yang penulis lakukan terletak pada penggunaan **Senayan Library Management System (SLiMS)** sebagai objek utama penelitian. Kedua penelitian juga sama-sama bertujuan mendukung peningkatan kualitas pengelolaan perpustakaan melalui pemanfaatan teknologi informasi.

Perbedaan penelitian tersebut dengan penelitian yang penulis lakukan terletak pada fokus penelitian. Penelitian Yuniar dan Hidayat berfokus pada implementasi SLiMS dalam proses katalogisasi bahan pustaka, sedangkan penelitian ini berfokus pada **perancangan Docker image** sebagai media deployment aplikasi SLiMS sehingga proses instalasi, konfigurasi, dan pemeliharaan sistem menjadi lebih mudah, konsisten, dan efisien.

### Penelitian oleh Aprilianto dkk. (2025)

Penelitian yang dilakukan oleh Aprilianto dkk. (2025) dengan judul **"Pemanfaatan Docker pada Virtualisasi Server untuk Mengoptimalkan Kinerja Aplikasi Berbasis Web Menggunakan Multiserver"** bertujuan untuk mengoptimalkan kinerja aplikasi berbasis web melalui penerapan teknologi Docker pada lingkungan virtualisasi server. Hasil penelitian menunjukkan bahwa penggunaan Docker mampu meningkatkan efisiensi pemanfaatan sumber daya server, mempermudah proses deployment aplikasi, serta menghasilkan lingkungan aplikasi yang lebih konsisten dibandingkan metode instalasi konvensional. Penelitian tersebut juga menunjukkan bahwa penerapan Docker pada arsitektur multiserver mampu meningkatkan fleksibilitas pengelolaan aplikasi berbasis web.

Persamaan penelitian tersebut dengan penelitian yang penulis lakukan adalah sama-sama memanfaatkan **teknologi Docker** sebagai solusi dalam proses deployment aplikasi berbasis web. Selain itu, kedua penelitian juga memiliki tujuan untuk meningkatkan efisiensi penggunaan sumber daya komputasi serta mempermudah proses pengelolaan aplikasi.

Perbedaan penelitian tersebut dengan penelitian yang penulis lakukan terletak pada objek implementasi. Penelitian Aprilianto dkk. berfokus pada optimalisasi virtualisasi server menggunakan arsitektur multiserver untuk aplikasi berbasis web secara umum, sedangkan penelitian ini secara khusus merancang Docker image untuk aplikasi SLiMS sebagai sistem otomasi perpustakaan sehingga dapat diterapkan pada berbagai lingkungan perpustakaan.

### Penelitian oleh Sari dkk. (2022)

Penelitian yang dilakukan oleh Sari dkk. (2022) dengan judul **"Implementasi Docker untuk Deployment Aplikasi Berbasis Web"** bertujuan untuk menerapkan teknologi Docker sebagai media deployment aplikasi berbasis web guna meningkatkan portabilitas aplikasi, kemudahan implementasi, dan efisiensi pengelolaan server. Hasil penelitian menunjukkan bahwa Docker mampu menyederhanakan proses deployment karena seluruh dependensi aplikasi dapat dikemas dalam satu container sehingga instalasi menjadi lebih cepat dan konsisten pada berbagai lingkungan sistem.

Persamaan penelitian tersebut dengan penelitian yang penulis lakukan terletak pada penggunaan Docker sebagai teknologi utama dalam proses deployment aplikasi. Kedua penelitian juga mengevaluasi kemudahan implementasi dan efisiensi pengelolaan aplikasi setelah menggunakan Docker.

Perbedaan penelitian tersebut dengan penelitian yang penulis lakukan adalah penelitian Sari dkk. hanya membahas implementasi Docker pada aplikasi berbasis web secara umum, sedangkan penelitian ini berfokus pada penyusunan **rancangan Docker image** yang secara khusus ditujukan untuk aplikasi SLiMS sebagai sistem otomasi perpustakaan dengan mempertimbangkan kebutuhan implementasi pada lingkungan perpustakaan.
