Rancangan docker image untuk aplikasi slims

# LATAR BELAKANG MASALAH

Perkembangan teknologi informasi pada era digital telah menjadi elemen krusial bagi berbagai institusi, termasuk perusahaan, lembaga pemerintah, maupun organisasi pendidikan. Teknologi informasi tidak hanya berperan sebagai pendukung operasional, tetapi juga sebagai sistem yang memastikan informasi dapat dikelola dan disampaikan secara efektif kepada pengguna. Seiring dengan meningkatnya penggunaan internet, aplikasi berbasis web berkembang pesat dan menjadi pilihan utama bagi banyak instansi karena kemudahan implementasi, fleksibilitas akses, serta kemampuan integrasinya dengan berbagai platform komputasi. Kondisi ini menegaskan bahwa kebutuhan terhadap teknologi informasi yang efisien, adaptif, dan mudah dikelola semakin tidak terhindarkan.

Aplikasi berbasis web juga semakin banyak digunakan karena penggunaannya yang mudah. Aplikasi berbasis web dapat diimplementasikan ke berbagai komputer dengan mudah hanya dengan menjalankan sebuah web browser. Untuk mendukung kemudahan tersebut dibutuhkan proses deployment (penyebaran) aplikasi yang mudah beserta aplikasi pendukungnya seperti aplikasi database, web server, serta dependensi dan environment lainnya. Ada dua metode yang sering digunakan untuk melakukan deployment aplikasi web ke dalam server. Metode yang pertama adalah menggunakan metode deployment konvensional dengan melakukan penginstalan langsung ke dalam server tunggal. Kelebihan dari metode ini adalah proses persiapan yang cukup mudah, simple, dan cepat dalam proses deploymentnya. Namun, dalam metode ini aplikasi yang diinstall tidak terisolasi, maka dari itu jika melakukan deploy untuk beberapa aplikasi pada server tunggal maka dapat terjadi konflik antar dependensi aplikasi yang diinstall. Metode kedua adalah menggunakan virtualisasi. Dalam metode ini, setiap aplikasi beserta dependensinya dijalankan di dalam virtual machine (VM) yang terpisah. Menurut Morabito (2017), keunggulan utama virtualisasi terletak pada skalabilitasnya, karena aplikasi dapat berjalan pada sumber daya yang terisolasi sehingga penambahan kapasitas menjadi lebih fleksibel. Namun demikian, penggunaan VM berbasis hypervisor memerlukan sumber daya komputasi yang besar, sehingga kurang efisien ketika dijalankan pada lingkungan dengan keterbatasan sumber daya.

Morabito, R. (2017). Virtualization on Internet of Things edge devices with container technologies: a performance evaluation. IEEE Access, 5, 8835–8850. https://doi.org/10.1109/ACCESS.2017.2704444

Perkembangan teknologi kontainerisasi telah membawa perubahan signifikan dalam cara aplikasi dikembangkan, didistribusikan, dan dijalankan. Tidak seperti virtualisasi tradisional yang membutuhkan resource besar karena setiap VM menjalankan sistem operasinya sendiri, kontainerisasi memungkinkan aplikasi berjalan dalam lingkungan terisolasi di atas sistem operasi host yang sama. Menurut Merkel (2014), teknologi ini yang dipopulerkan oleh platform seperti Docker memberikan keunggulan berupa efisiensi penggunaan resource, kecepatan deployment, serta kemudahan skalabilitas. Dengan kontainerisasi, proses pengembangan hingga produksi menjadi lebih konsisten karena aplikasi beserta dependensinya dapat dikemas dalam satu paket yang dapat dijalankan di berbagai infrastruktur tanpa perlu konfigurasi ulang yang kompleks (Pahl, 2015).

Merkel, D. (2014). Docker: lightweight Linux containers for consistent development and deployment. Linux Journal, 2014(239), 2.
Pahl, C. (2015). Containerization and the PaaS cloud. IEEE Cloud Computing, 2(3), 24–31. https://doi.org/10.1109/MCC.2015.51

Kemudahan yang diberikan dalam proses deployment aplikasi dapat membantu pengembang perpustakaan dalam melakukan penyebaran aplikasi secara efisien. Ayat ini menekankan pentingnya tolong-menolong dalam kebaikan, salah satunya dengan menghadirkan solusi teknologi yang memudahkan orang lain. Dengan demikian, rancangan Docker image untuk aplikasi SLiMS dapat menjadi bentuk kontribusi nyata dalam memberikan kemudahan, efisiensi, dan kebermanfaatan bagi pengelola perpustakaan maupun masyarakat luas. Islam telah mengajarkan memberikan kemudahan kepada orang lain dalam Al-Quran surah Al-Maidah ayat 2 yang berbunyi

Artinya: Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan permusuhan, dan bertakwalah kepada Allah. Sesungguhnya Allah sangat berat siksaan-Nya

SLiMs merupakan aplikasi berbasis web yang berfungsi untuk pengelolaan koleksi yang ada di perpustakaan. Aplikasi website ini dikembangkan secara open source yang dilisensikan dibawah General Public License v3 (GPL v3). SLiMS pertama kali dirilis pada tahun 2007 dengan versi senayan3-rc4. Versi SLiMS saat ini yang berkembang merupakan versi 9.6.1 yang dirilis pada 11 Juli 2023. Dalam perkembangannya SLiMS sudah memiliki berbagai fitur yang siap mendukung kebutuhan pustakawan dalam mengelola perpustakaannya. 

Perkembangan SLiMS tidak terlepas dari campur tangan developer dan komunitas pengembang SLiMS didalamnya. Sebagai Open Software Services (OSS) berbasis web, banyak developer dan komunitas yang berperan aktif untuk terus mengembangkan SLiMS Diantaranya merupakan pengembang dan komunitas dari indonesia dan juga sebagian dari luar negeri. Mereka berkontribusi dengan memberikan update-update fitur yang saling melengkapi sehingga dapat meningkatkan kinerja SLiMS untuk dilayankan kepada pemustaka. Perkembangan SLiMS juga dipengaruhi terhadap meningkatnya jumlah pengguna, per tahun 2019 pengguna slims untuk instansi di indonesia mencapai angka 1.923 pengguna. Sedangkan untuk pengguna diluar indonesia mencapai 75 instansi Pengguna SLiMS mencakup beragam jenis lembaga perpustakaan, meliputi perpustakaan sekolah, perpustakaan perguruan tinggi, perpustakaan instansi pemerintahan, perpustakaan daerah, perpustakaan umum, serta perpustakaan khusus.

Namun, distribusi aplikasi SLiMS dalam bentuk Docker image hingga saat ini belum mendapatkan pembaruan secara berkelanjutan. Kondisi tersebut berpotensi menimbulkan keterbatasan dalam pemenuhan kebutuhan pengelolaan perpustakaan yang terus berkembang seiring dengan kemajuan teknologi informasi. Ketiadaan update dapat berdampak pada keterlambatan adopsi fitur baru, kurangnya perbaikan terhadap bug, serta potensi celah keamanan yang dapat mengganggu stabilitas sistem. Oleh karena itu, diperlukan upaya perancangan ulang dan pemeliharaan Docker image SLiMS agar senantiasa relevan, adaptif, dan sesuai dengan kebutuhan perpustakaan di berbagai jenis lembaga. Hal ini sejalan dengan pendapat Sommerville (2016) yang menyatakan bahwa perangkat lunak harus dikelola dan diperbarui secara berkelanjutan untuk menjaga kualitas, keandalan, serta kesesuaian dengan kebutuhan pengguna.

Sommerville, I. (2016). Software Engineering (10th ed.). Boston: Pearson.

Oleh karena itu, penelitian ini berfokus pada perancangan Docker image untuk aplikasi SLiMS dengan menggunakan metode penelitian DDR. Metode ini dipilih karena memungkinkan proses pengembangan yang iteratif serta melibatkan evaluasi secara berkelanjutan, sehingga hasil yang diperoleh dapat lebih sesuai dengan kebutuhan pengguna (Pressman & Maxim, 2015). Penelitian ini diharapkan dapat memberikan kontribusi dalam menghadirkan solusi teknologi yang mempermudah proses deployment aplikasi perpustakaan serta mendukung kinerja layanan informasi yang lebih baik.

Pressman, R. S., & Maxim, B. R. (2015). Software Engineering: A Practitioner’s Approach (8th ed.). New York: McGraw-Hill.

Dari latar belakang yang telah dipaparkan, peneliti menetapkan topik penelitian dengan judul “Rancangan Docker Image untuk Aplikasi SLiMS”. Pemilihan topik ini didasarkan pada kebutuhan akan solusi deployment yang lebih efisien, portabel, dan adaptif dalam mendukung pengelolaan aplikasi SLiMS di berbagai jenis perpustakaan. Dengan memanfaatkan teknologi container Docker, diharapkan rancangan yang dihasilkan mampu mengatasi keterbatasan metode deployment konvensional maupun virtualisasi, sekaligus memberikan kemudahan dalam proses pemeliharaan serta pembaruan sistem. Selain itu, penelitian ini juga dimaksudkan untuk memberikan kontribusi praktis bagi pengembang dan pengelola perpustakaan dalam upaya peningkatan kualitas layanan informasi melalui pemanfaatan teknologi yang lebih modern dan berkelanjutan.

# IDENTIFIKASI MASALAH
Berdasarkan latar belakan yang telah diuraikan diatas maka dapat diidentifikasi masalah yaitu:

1. Distribusi aplikasi SLiMS dalam bentuk Docker image belum tersedia secara berkelanjutan, sehingga menimbulkan kesulitan dalam proses instalasi dan deployment pada berbagai lingkungan perpustakaan.Diperlukan rancangan Docker image untuk aplikasi SLiMS yang mendukung instalasi secara efisien, portabel, dan adaptif.

2. Diperlukan rancangan Docker image untuk aplikasi SLiMS yang mendukung instalasi secara efisien, portabel, dan adaptif.

3. Perlu dipastikan rancangan Docker image yang dihasilkan memiliki kinerja yang optimal, meliputi stabilitas, efisiensi penggunaan sumber daya, serta kemudahan pemeliharaan dan pembaruan.



# BATASAN MASALAH
Dari identifikasi masalah yang ditentukan dari penelitian ini, diperlukan adanya suatu pembatasan masalah agar pengkajiannya dapat terfokus, berikut beberapa pembatasan masalah yang peneliti tetapkan:
Penelitian ini hanya berfokus pada perancangan Docker image untuk aplikasi SLiMS, tidak mencakup pengembangan fitur baru pada aplikasi SLiMS itu sendiri.

1. Lingkup penelitian dibatasi pada proses deployment dan pengujian kinerja Docker image aplikasi SLiMS, tanpa membahas aspek keamanan sistem secara mendalam.

2. Pengujian kinerja dilakukan pada aspek efisiensi penggunaan sumber daya, stabilitas aplikasi, serta kemudahan deployment, bukan pada uji beban berskala besar.

3. Penelitian menggunakan metode prototyping sehingga hasil yang diperoleh berupa rancangan dan implementasi prototipe Docker image, bukan produk final siap distribusi resmi.

4. Lingkungan pengujian dibatasi pada server berbasis Linux dengan konfigurasi tertentu, sehingga hasil penelitian belum tentu dapat mewakili seluruh jenis infrastruktur yang lebih kompleks.

# RUMUSAN MASALAH
Berdasarkan uraian latar belakang yang telah dijelaskan, maka rumusan masalah dalam penelitian ini adalah: 

1. Bagaimana rancangan docker image untuk aplikasi SLiMS untuk mendukung kebutuhan instalasi dan aplikasi SLiMS?

# TUJUAN DAN MANFAAT PENELITIAN
## Tujuan Penelitian
Berdasarkan rumusan masalah di atas, tujuan dari penelitian ini adalah:

1. Merancang Docker image untuk aplikasi SLiMS yang dapat mendukung proses instalasi dan deployment secara lebih efisien, portabel, dan adaptif di berbagai lingkungan perpustakaan.

2. Menguji dan memastikan rancangan Docker image aplikasi SLiMS memiliki kinerja yang optimal, meliputi stabilitas, efisiensi penggunaan sumber daya, serta kemudahan pemeliharaan dan pembaruan.
##Manfaat Penelitian

### Manfaat Teoritis

1. Memberikan kontribusi pada pengembangan ilmu pengetahuan di bidang teknologi informasi, khususnya dalam penerapan teknologi kontainerisasi untuk aplikasi perpustakaan.

2. Menjadi referensi bagi penelitian selanjutnya yang berfokus pada optimalisasi deployment aplikasi berbasis web menggunakan Docker.

### Manfaat Praktis

1. Bagi pengelola perpustakaan, penelitian ini dapat memberikan solusi dalam mempermudah proses instalasi dan pemeliharaan aplikasi SLiMS melalui Docker image.

2. Bagi pengembang SLiMS, penelitian ini dapat menjadi masukan untuk pengembangan distribusi aplikasi yang lebih modern, efisien, dan mudah diimplementasikan.

3. Bagi masyarakat umum, khususnya pengguna layanan perpustakaan, penelitian ini diharapkan dapat mendukung peningkatan kualitas layanan informasi melalui sistem yang lebih stabil dan mudah diakses.

REVIEW KAJIAN TERDAHULU

