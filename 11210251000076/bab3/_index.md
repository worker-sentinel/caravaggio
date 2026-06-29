## 3.1 Metode Penelitian

### 3.1.1 Jenis Penelitian

Penelitian ini merupakan penelitian **pengembangan (developmental research)** yang berfokus pada perancangan dan pembangunan produk perangkat lunak berupa Docker Image untuk aplikasi Senayan Library Management System (SLiMS). Penelitian pengembangan bertujuan untuk menghasilkan suatu produk yang dapat digunakan untuk menyelesaikan permasalahan tertentu, khususnya dalam konteks deployment sistem otomasi perpustakaan.

Menurut Pressman dan Maxim (2015), pengembangan perangkat lunak merupakan proses yang mencakup aktivitas analisis, desain, implementasi, dan pengujian yang dilakukan secara sistematis untuk menghasilkan perangkat lunak yang sesuai dengan kebutuhan pengguna.

Dalam penelitian ini, produk yang dikembangkan tidak berupa fitur aplikasi SLiMS, melainkan berupa **infrastruktur deployment berbasis container (Docker Image)** yang digunakan untuk menyederhanakan proses instalasi, konfigurasi, dan pemeliharaan sistem SLiMS.

---

### 3.1.2 Pendekatan Penelitian

Pendekatan yang digunakan dalam penelitian ini adalah **Prototyping berbasis Human-Computer Interaction (HCI)**. Pendekatan ini menekankan pada pengembangan sistem melalui pembuatan prototype yang dapat diuji secara langsung untuk memperoleh pemahaman terhadap kebutuhan sistem secara bertahap.

Menurut Mackay dan Beaudouin-Lafon (2003), prototype dalam HCI tidak hanya berfungsi sebagai representasi awal sistem, tetapi juga sebagai media eksplorasi desain (*design exploration*) yang memungkinkan pengembang memahami kebutuhan sistem melalui proses interaksi dan evaluasi terhadap prototype yang dibangun.

Sommerville (2016) menjelaskan bahwa pendekatan prototyping digunakan ketika kebutuhan sistem belum sepenuhnya jelas pada awal pengembangan, sehingga kebutuhan tersebut dapat diperoleh melalui proses iterasi berdasarkan hasil evaluasi terhadap prototype.

Dalam penelitian ini, pendekatan prototyping digunakan untuk mengembangkan Docker Image SLiMS melalui proses iteratif yang melibatkan pengujian dan evaluasi terhadap prototype yang dibandingkan dengan Docker Image SLiMS yang telah tersedia sebelumnya.

---

### 3.1.3 Karakteristik Metode Prototyping

Metode prototyping yang digunakan dalam penelitian ini memiliki karakteristik sebagai berikut:

1. **Iteratif**
   Pengembangan dilakukan melalui siklus berulang yang meliputi pembangunan prototype, pengujian, evaluasi, dan perbaikan.

2. **Berbasis Eksplorasi**
   Prototype digunakan untuk mengeksplorasi berbagai alternatif konfigurasi Docker Image dalam implementasi SLiMS.

3. **Kebutuhan Sistem Bersifat Bertahap**
   Kebutuhan sistem tidak ditentukan secara lengkap di awal, tetapi diperoleh melalui hasil pengujian dan evaluasi terhadap prototype.

4. **Berorientasi Evaluasi**
   Setiap tahap pengembangan disertai dengan proses evaluasi untuk menilai kesesuaian prototype terhadap kebutuhan sistem.

5. **Fokus pada Efisiensi Deployment**
   Penelitian berfokus pada peningkatan efisiensi proses deployment SLiMS melalui containerization menggunakan Docker.
## 3.2 Model Pengembangan Sistem

### 3.2.1 Model Prototyping yang Digunakan

Model pengembangan sistem yang digunakan dalam penelitian ini adalah **model prototyping**. Model ini merupakan pendekatan pengembangan perangkat lunak yang dilakukan dengan membangun prototype awal sistem untuk kemudian dievaluasi dan disempurnakan secara bertahap hingga diperoleh sistem yang sesuai dengan kebutuhan.

Menurut Pressman dan Maxim (2015), model prototyping memungkinkan pengembang untuk membuat versi awal sistem yang dapat digunakan sebagai alat evaluasi guna memperoleh umpan balik sebelum sistem dikembangkan secara penuh.

Dalam penelitian ini, prototype yang dikembangkan berupa **Docker Image SLiMS** yang digunakan untuk menguji proses deployment aplikasi SLiMS dalam lingkungan container.

---

### 3.2.2 Tahapan Model Prototyping

Tahapan model prototyping yang digunakan dalam penelitian ini meliputi:

1. **Communication**
   Tahap awal yang dilakukan untuk memahami permasalahan terkait proses deployment SLiMS serta menentukan kebutuhan awal sistem berdasarkan permasalahan yang ditemukan.

2. **Quick Plan**
   Tahap perencanaan awal yang mencakup penentuan komponen sistem seperti web server, database server, serta struktur Docker Image yang akan digunakan.

3. **Modeling / Quick Design**
   Tahap perancangan sistem yang meliputi desain Dockerfile, arsitektur container, serta konfigurasi layanan yang dibutuhkan oleh SLiMS.

4. **Construction of Prototype**
   Tahap implementasi desain ke dalam bentuk Docker Image yang dapat dijalankan dalam lingkungan container.

5. **Deployment and Testing**
   Tahap pengujian prototype untuk memastikan sistem dapat berjalan dengan baik serta melakukan evaluasi terhadap hasil implementasi.

6. **Evaluation**
   Tahap evaluasi dilakukan untuk menilai kinerja prototype dan membandingkannya dengan Docker Image SLiMS yang telah ada.

---

### 3.2.3 Alasan Pemilihan Model Prototyping

Model prototyping dipilih dalam penelitian ini karena memiliki beberapa keunggulan yang sesuai dengan kebutuhan penelitian, yaitu:

1. Memungkinkan pengembangan sistem dilakukan secara bertahap dan iteratif.
2. Memudahkan identifikasi kebutuhan sistem melalui hasil pengujian prototype.
3. Memberikan fleksibilitas dalam melakukan perubahan desain selama proses pengembangan.
4. Memungkinkan dilakukan evaluasi langsung terhadap sistem yang sedang dikembangkan.
5. Sesuai dengan tujuan penelitian yang berfokus pada optimalisasi proses deployment SLiMS menggunakan Docker.


## 3.3 Proses Pengembangan Prototipe

### 3.3.1 Communication

Tahap communication dilakukan untuk mengidentifikasi permasalahan yang berkaitan dengan proses instalasi dan deployment aplikasi Senayan Library Management System (SLiMS) pada lingkungan server. Permasalahan utama yang ditemukan berkaitan dengan kompleksitas konfigurasi sistem yang melibatkan web server, database server, serta dependensi aplikasi yang harus disiapkan secara manual.

Pada tahap ini, kebutuhan sistem tidak ditentukan secara lengkap di awal, tetapi berkembang melalui proses evaluasi terhadap prototype yang dibangun. Pendekatan ini sejalan dengan konsep prototyping dalam Human-Computer Interaction (HCI), di mana prototype digunakan sebagai alat untuk mengeksplorasi kebutuhan sistem melalui proses pengujian dan umpan balik.

Hasil dari tahap ini berupa kebutuhan awal sistem yang mencakup penyederhanaan proses deployment, standardisasi lingkungan aplikasi, serta peningkatan konsistensi instalasi SLiMS melalui teknologi containerization menggunakan Docker.

---

### 3.3.2 Quick Plan

Tahap quick plan dilakukan untuk menyusun rencana awal pengembangan Docker Image SLiMS. Perencanaan ini mencakup penentuan komponen utama yang diperlukan untuk menjalankan aplikasi SLiMS dalam lingkungan container.

Komponen yang direncanakan meliputi web server, database server, serta konfigurasi dasar sistem operasi yang digunakan sebagai base image. Selain itu, ditentukan pula struktur multi-container untuk memisahkan layanan aplikasi dan layanan database agar sistem lebih terorganisir dan mudah dikelola.

Tahap ini juga mencakup penentuan alur deployment menggunakan Docker Compose untuk mempermudah proses orkestrasi container.

---

### 3.3.3 Modeling / Quick Design

Tahap modeling atau quick design dilakukan dengan merancang struktur teknis sistem Docker Image SLiMS. Perancangan mencakup pembuatan Dockerfile, konfigurasi environment, serta desain arsitektur container yang akan digunakan dalam implementasi sistem.

Dockerfile disusun untuk memastikan seluruh dependensi SLiMS dapat terinstal secara otomatis dalam satu environment yang konsisten. Selain itu, Docker Compose digunakan untuk mengatur hubungan antara container aplikasi dan container database agar dapat berjalan secara terintegrasi.

Pada tahap ini, dilakukan pula penentuan konfigurasi service seperti web server dan database agar sesuai dengan kebutuhan aplikasi SLiMS.

---

### 3.3.4 Construction of Prototype

Tahap construction of prototype dilakukan dengan mengimplementasikan hasil perancangan ke dalam bentuk Docker Image yang dapat dijalankan secara langsung. Pada tahap ini dilakukan proses build Docker Image berdasarkan Dockerfile yang telah dibuat sebelumnya.

Selanjutnya dilakukan pembuatan container menggunakan Docker Compose untuk menjalankan aplikasi SLiMS beserta database pendukungnya. Prototype yang dihasilkan kemudian diuji untuk memastikan bahwa aplikasi dapat berjalan sesuai dengan fungsinya.

Tahap ini menghasilkan prototype awal yang siap digunakan untuk proses pengujian dan evaluasi.

---

### 3.3.5 Testing

Tahap testing dilakukan untuk menguji fungsionalitas prototype Docker Image SLiMS. Pengujian dilakukan untuk memastikan bahwa seluruh komponen sistem dapat berjalan dengan baik, termasuk akses web SLiMS, koneksi database, serta stabilitas container selama dijalankan.

Pengujian juga dilakukan untuk memastikan bahwa proses deployment dapat dilakukan dengan benar tanpa konfigurasi manual yang kompleks. Hasil pengujian digunakan sebagai dasar untuk evaluasi dan perbaikan prototype pada iterasi berikutnya.

---

### 3.3.6 Evaluation

Tahap evaluation dilakukan untuk menilai hasil prototype yang telah dibangun. Evaluasi dilakukan berdasarkan hasil pengujian fungsionalitas serta observasi terhadap proses deployment sistem.

Pada tahap ini dilakukan identifikasi terhadap aspek yang masih perlu diperbaiki, seperti efisiensi build image, kestabilan container, serta kesederhanaan konfigurasi sistem. Hasil evaluasi digunakan sebagai dasar untuk pengembangan prototype pada iterasi selanjutnya.

## 3.4 Pendekatan Comparative Evaluation

### 3.4.1 Konsep Evaluasi Perbandingan

Pendekatan evaluasi perbandingan (*comparative evaluation*) dalam penelitian ini digunakan untuk menilai hasil pengembangan Docker Image SLiMS dengan cara membandingkannya terhadap Docker Image SLiMS yang telah tersedia sebelumnya (*existing image*).

Evaluasi perbandingan merupakan metode analisis yang digunakan untuk mengukur perbedaan kinerja, efisiensi, dan karakteristik sistem antara dua atau lebih solusi yang memiliki fungsi serupa. Menurut Sommerville (2016), evaluasi dalam rekayasa perangkat lunak digunakan untuk memastikan bahwa sistem yang dikembangkan memberikan peningkatan kualitas dibandingkan solusi sebelumnya.

Dalam konteks penelitian ini, evaluasi dilakukan untuk mengetahui sejauh mana Docker Image SLiMS yang dirancang mampu memberikan peningkatan dalam aspek deployment, penggunaan sumber daya, dan kemudahan konfigurasi dibandingkan dengan image yang sudah ada.

---

### 3.4.2 Objek Pembanding

Objek yang digunakan dalam proses evaluasi perbandingan terdiri dari dua komponen, yaitu:

1. **Docker Image SLiMS Existing**
   Docker image SLiMS yang telah tersedia secara publik dan digunakan sebagai acuan awal dalam proses analisis. Image ini digunakan sebagai baseline untuk mengetahui kondisi awal implementasi SLiMS dalam lingkungan container.

2. **Docker Image SLiMS Hasil Perancangan (Prototype)**
   Docker image yang dikembangkan dalam penelitian ini menggunakan pendekatan prototyping dengan tujuan meningkatkan efisiensi deployment, stabilitas sistem, dan kemudahan konfigurasi.

Kedua objek tersebut memiliki fungsi yang sama, yaitu menjalankan aplikasi SLiMS dalam lingkungan container, sehingga dapat dibandingkan secara langsung berdasarkan indikator yang ditentukan.

---

### 3.4.3 Indikator Perbandingan

Evaluasi perbandingan dilakukan berdasarkan beberapa indikator sebagai berikut:

1. **Ukuran Docker Image**
   Menilai besar file image yang dihasilkan untuk mengetahui efisiensi dalam penggunaan storage.

2. **Waktu Deployment**
   Mengukur waktu yang dibutuhkan dari proses pull image hingga aplikasi SLiMS dapat diakses.

3. **Penggunaan Resource**
   Menilai konsumsi CPU dan memori selama container berjalan.

4. **Stabilitas Sistem**
   Menilai konsistensi dan keberlanjutan container dalam menjalankan aplikasi tanpa error.

5. **Kemudahan Konfigurasi**
   Menilai tingkat kesederhanaan konfigurasi dalam proses instalasi dan deployment aplikasi SLiMS.

## 3.5 Objek Penelitian

Objek penelitian dalam penelitian ini adalah sistem aplikasi Senayan Library Management System (SLiMS) yang dijalankan menggunakan teknologi containerization berbasis Docker.

Secara khusus, objek penelitian terdiri dari dua komponen utama, yaitu Docker Image SLiMS hasil perancangan (prototype) dan Docker Image SLiMS yang telah tersedia sebelumnya (existing image). Kedua objek tersebut digunakan untuk tujuan evaluasi perbandingan dalam aspek deployment, penggunaan sumber daya, serta kemudahan konfigurasi sistem.

SLiMS dipilih sebagai objek penelitian karena merupakan salah satu sistem otomasi perpustakaan berbasis open source yang banyak digunakan di berbagai institusi perpustakaan. Sementara itu, Docker dipilih sebagai teknologi implementasi karena kemampuannya dalam menyediakan lingkungan aplikasi yang portabel, konsisten, dan mudah dikelola.

Objek penelitian ini difokuskan pada proses deployment aplikasi SLiMS dalam lingkungan server berbasis Linux menggunakan Docker Engine.

## 3.6 Teknik Pengumpulan Data

### 3.6.1 Studi Literatur

Studi literatur dilakukan untuk memperoleh dasar teori dan konsep yang berkaitan dengan penelitian ini. Literatur yang digunakan mencakup teori tentang sistem otomasi perpustakaan, Senayan Library Management System (SLiMS), containerization, Docker, serta metode prototyping dalam pengembangan perangkat lunak.

Studi literatur digunakan untuk memahami konsep dasar dan mendukung perancangan Docker Image SLiMS agar sesuai dengan kaidah ilmiah serta praktik pengembangan sistem yang baik.

---

### 3.6.2 Eksperimen

Teknik eksperimen dilakukan dengan cara melakukan implementasi langsung terhadap Docker Image SLiMS yang dikembangkan. Eksperimen dilakukan melalui proses build, run, dan deployment container untuk menguji apakah sistem dapat berjalan sesuai dengan fungsi yang diharapkan.

Selain itu, eksperimen juga dilakukan dengan menjalankan Docker Image SLiMS yang telah tersedia sebelumnya sebagai pembanding. Hasil dari kedua implementasi tersebut kemudian diamati dan dibandingkan berdasarkan indikator evaluasi yang telah ditentukan.

---

### 3.6.3 Dokumentasi

Teknik dokumentasi dilakukan dengan mengumpulkan data yang dihasilkan selama proses pengembangan dan pengujian sistem. Dokumentasi mencakup hasil log container, konfigurasi Dockerfile, konfigurasi Docker Compose, serta hasil pengujian sistem.

Selain itu, dokumentasi juga digunakan untuk mencatat hasil perbandingan antara prototype Docker Image SLiMS dengan existing image, khususnya terkait ukuran image, waktu deployment, dan penggunaan resource sistem.

## 3.7 Teknik Analisis Data

### 3.7.1 Analisis Fungsionalitas

Analisis fungsionalitas dilakukan untuk mengetahui apakah Docker Image SLiMS yang dikembangkan dapat menjalankan seluruh fungsi utama aplikasi SLiMS dengan baik. Pengujian dilakukan dengan memastikan fitur-fitur utama seperti akses halaman OPAC, login administrator, pengelolaan data bibliografi, serta koneksi ke database dapat berjalan sesuai dengan yang diharapkan.

Hasil analisis ini digunakan untuk menilai keberhasilan prototype dalam menjalankan fungsi dasar sistem tanpa adanya kesalahan pada proses deployment.

---

### 3.7.2 Analisis Performa

Analisis performa dilakukan untuk mengukur efisiensi penggunaan sumber daya sistem selama Docker container SLiMS dijalankan. Parameter yang dianalisis meliputi penggunaan CPU, penggunaan memori (RAM), serta waktu yang dibutuhkan dalam proses deployment sistem.

Menurut Merkel (2014), teknologi containerization seperti Docker memiliki keunggulan dalam efisiensi penggunaan sumber daya karena tidak memerlukan sistem operasi terpisah seperti pada virtual machine.

---

### 3.7.3 Analisis Komparatif

Analisis komparatif dilakukan dengan cara membandingkan hasil implementasi Docker Image SLiMS yang dikembangkan dengan Docker Image SLiMS yang telah tersedia sebelumnya. Perbandingan dilakukan berdasarkan indikator yang telah ditentukan pada bagian sebelumnya, yaitu ukuran image, waktu deployment, penggunaan resource, stabilitas sistem, dan kemudahan konfigurasi.

Hasil perbandingan ini digunakan untuk mengetahui sejauh mana prototype yang dikembangkan memberikan peningkatan dibandingkan dengan solusi yang sudah ada.

---

### 3.7.4 Interpretasi Hasil

Interpretasi hasil dilakukan untuk memberikan makna terhadap data yang diperoleh dari hasil pengujian dan perbandingan. Hasil analisis digunakan untuk menentukan apakah Docker Image SLiMS yang dikembangkan telah memenuhi tujuan penelitian, yaitu meningkatkan efisiensi deployment dan kemudahan pengelolaan sistem otomasi perpustakaan.

Interpretasi dilakukan secara deskriptif berdasarkan hasil observasi terhadap setiap indikator pengujian yang telah ditentukan.


## 3.8 Alat dan Bahan Penelitian

Alat dan bahan yang digunakan dalam penelitian ini meliputi perangkat keras, perangkat lunak, serta sumber daya pendukung yang digunakan untuk proses pengembangan dan pengujian Docker Image SLiMS.

### 3.8.1 Perangkat Keras

Perangkat keras yang digunakan dalam penelitian ini meliputi komputer atau server dengan spesifikasi yang memadai untuk menjalankan Docker Engine dan aplikasi SLiMS dalam lingkungan container. Perangkat keras digunakan sebagai media utama dalam proses pengembangan, deployment, serta pengujian prototype.

### 3.8.2 Perangkat Lunak

Perangkat lunak yang digunakan dalam penelitian ini antara lain:

1. Sistem Operasi Linux (Ubuntu Server) sebagai lingkungan utama pengembangan.
2. Docker Engine sebagai platform containerization untuk menjalankan Docker Image SLiMS.
3. Docker Compose untuk mengelola multi-container environment.
4. Web server seperti Apache atau Nginx sebagai layanan pendukung aplikasi SLiMS.
5. Database server MariaDB atau MySQL sebagai sistem manajemen basis data.
6. Source code aplikasi Senayan Library Management System (SLiMS).

### 3.8.3 Sumber Daya Pendukung

Sumber daya pendukung yang digunakan dalam penelitian ini meliputi dokumentasi resmi SLiMS, dokumentasi Docker, serta referensi ilmiah yang berkaitan dengan containerization, sistem otomasi perpustakaan, dan metode prototyping.

Sumber daya ini digunakan sebagai acuan dalam proses perancangan dan implementasi Docker Image SLiMS agar sesuai dengan standar pengembangan sistem yang baik.





