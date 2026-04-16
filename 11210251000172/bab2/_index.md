# LANDASAN TEORI

## 5 Hukum Perpustakaan

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

Teknologi Informasi merupakan serangkaian perangkat lunak, perangkat keras, maupun prosedur yang digunakan untuk memproses, menyimpan, menyebarkan, dan mengelola informasi secara elektronik guna mendukung pengambilan keputusan dan aktivitas operasional (Ward & Peppard, 2016). Dalam perkembangannya, teknologi ini tidak hanya berfungsi sebagai alat bantu pemrosesan data, tetapi telah menjadi tulang punggung bagi setiap proses bisnis di berbagai organisasi. Keberadaannya memungkinkan integrasi data yang lebih cepat dan akurat, sehingga setiap informasi yang dihasilkan memiliki nilai guna yang tinggi bagi penggunanya.

Pada tingkatan infrastruktur, teknologi informasi mencakup elemen fisik seperti komputer dan jaringan kabel hingga elemen abstrak seperti algoritma dan protokol komunikasi. Sinergi antara komponen-komponen ini menciptakan sebuah ekosistem digital yang mampu menangani beban kerja dalam skala besar secara berkelanjutan. Bagi organisasi modern, penguasaan terhadap teknologi informasi merupakan kunci untuk mempertahankan efisiensi di tengah persaingan global yang semakin mengandalkan kecepatan data.

Implementasi teknologi informasi di sektor publik bertujuan untuk mendemokratisasi akses data sehingga masyarakat dapat memperoleh layanan dengan lebih transparan. Hal ini mencakup pengembangan sistem yang ramah pengguna serta mampu menyimpan data dalam jangka waktu lama tanpa risiko kerusakan fisik yang berarti. Dengan teknologi informasi, manajemen arsip dan dokumen berpindah dari metode manual yang lambat menuju metode digital yang instan dan terstruktur (Ward & Peppard, 2016).

Lebih lanjut, teknologi informasi berperan penting dalam memfasilitasi komunikasi antar sistem yang berbeda melalui standarisasi protokol pertukaran data. Kemampuan interoperabilitas ini memungkinkan satu platform untuk berinteraksi dengan platform lainnya tanpa kendala teknis yang rumit. Dalam lingkup ini, teknologi informasi bukan lagi sekadar pelengkap, melainkan kebutuhan mendasar yang menggerakkan seluruh lini pelayanan dalam sebuah institusi.

Terakhir, aspek keamanan dalam teknologi informasi menjadi fokus utama untuk melindungi aset data dari ancaman eksternal maupun kegagalan sistem internal. Pengelolaan hak akses, enkripsi, dan prosedur pencadangan data adalah bagian tak terpisahkan dari implementasi teknologi ini. Dengan sistem informasi yang aman dan andal, organisasi dapat menjamin keberlangsungan layanannya kepada publik secara profesional dan tepercaya (Ward & Peppard, 2016).

## Perpustakaan

Perpustakaan merupakan sebuah institusi pengelola koleksi karya tulis, karya cetak, dan/atau karya rekam secara profesional dengan sistem yang baku guna memenuhi kebutuhan pendidikan, penelitian, pelestarian, informasi, dan rekreasi bagi para pemustaka (Undang-Undang Republik Indonesia Nomor 43, 2007). Sebagai pusat sumber belajar, perpustakaan memegang peranan strategis dalam meningkatkan literasi dan kualitas intelektual masyarakat. Standar baku yang diterapkan dalam pengelolaannya memastikan bahwa setiap koleksi dapat ditemukan dan dimanfaatkan secara optimal oleh pihak-pihak yang membutuhkan.

Dalam konteks institusional, perpustakaan berfungsi sebagai memori kolektif suatu bangsa atau organisasi yang menyimpan rekam jejak ilmu pengetahuan dari berbagai generasi. Pengelolaan yang profesional menuntut pustakawan untuk terus beradaptasi dengan perubahan pola konsumsi informasi masyarakat yang kini cenderung beralih ke format digital. Oleh karena itu, perpustakaan saat ini dituntut untuk tidak hanya menyediakan ruang fisik, tetapi juga ruang virtual yang dapat diakses secara fleksibel.

Modernisasi perpustakaan membawa institusi ini menuju konsep perpustakaan tanpa dinding, di mana batas geografis tidak lagi menjadi penghalang bagi pemustaka untuk mendapatkan referensi. Transformasi ini memerlukan perubahan paradigma dalam manajemen koleksi, dari yang semula berfokus pada kepemilikan fisik menjadi fokus pada aksesibilitas data. Perpustakaan kini menjadi titik temu antara tradisi pelestarian dokumen kuno dan inovasi teknologi penyebaran informasi masa kini (Saleh, 2014).

Lebih jauh, perpustakaan memiliki tanggung jawab sosial untuk menyediakan informasi yang otoritatif di tengah maraknya persebaran data yang tidak terverifikasi di internet. Dengan sistem katalogisasi yang terstandar, perpustakaan memberikan kepastian bahwa sumber daya informasi yang disediakan telah melalui proses kurasi yang ketat. Peran sebagai penyaring informasi ini menjadikan perpustakaan sebagai institusi yang paling tepercaya dalam mendukung kegiatan akademik dan penelitian ilmiah.

Sebagai organisasi yang melayani publik, perpustakaan juga harus memperhatikan kenyamanan dan kecepatan pelayanan kepada pemustaka. Segala bentuk inovasi yang diterapkan dalam perpustakaan, baik dari sisi gedung maupun sistem aplikasi, pada akhirnya bermuara pada satu tujuan, yaitu kepuasan pengguna. Dengan demikian, eksistensi perpustakaan akan tetap relevan selama ia mampu memberikan nilai tambah dalam pemenuhan kebutuhan informasi penggunanya secara berkelanjutan (Undang-Undang Republik Indonesia Nomor 43, 2007).

## Sistem Otomasi Perpustakaan

Sistem otomasi perpustakaan adalah aplikasi teknologi informasi yang digunakan untuk membantu pekerjaan manajerial dan pelayanan di perpustakaan, mulai dari pengadaan, pengolahan, hingga sirkulasi dan layanan referensi (Saleh, 2014). Sistem ini menggantikan proses pencatatan manual yang rentan terhadap kesalahan manusia dengan database yang terintegrasi secara otomatis. Dengan otomasi, alur kerja di dalam perpustakaan menjadi lebih terukur dan data mengenai koleksi maupun pemustaka dapat dipantau secara real-time.

Komponen utama dalam sistem otomasi biasanya mencakup modul katalogisasi, sirkulasi, dan Online Public Access Catalog (OPAC) sebagai antarmuka bagi pengguna. Modul-modul ini saling terhubung sehingga aktivitas di satu bagian, misalnya pengembalian buku, akan langsung memperbarui status koleksi di bagian katalog. Efisiensi yang dihasilkan oleh otomasi ini memungkinkan pustakawan untuk lebih fokus pada pengembangan layanan daripada sekadar urusan administratif rutin.

Penerapan otomasi juga memberikan kemudahan bagi pemustaka dalam menelusuri koleksi tanpa harus datang langsung ke rak buku. Melalui fitur pencarian yang canggih, pengguna dapat mengetahui status ketersediaan bahan pustaka hanya dalam hitungan detik. Hal ini secara langsung meningkatkan efektivitas pemanfaatan koleksi perpustakaan dan memperpendek waktu tunggu dalam proses layanan sirkulasi di meja layanan (Saleh, 2014).

Selain itu, sistem otomasi memungkinkan perpustakaan untuk menghasilkan laporan statistik yang akurat mengenai pola penggunaan koleksi dan profil pemustaka. Data statistik ini sangat berguna bagi pimpinan organisasi dalam mengambil keputusan strategis, seperti kebijakan pengadaan buku baru atau pengembangan layanan tertentu. Tanpa sistem otomasi, pengambilan data semacam ini akan memakan waktu yang sangat lama dan memiliki risiko ketidakakuratan yang tinggi.

Dalam jangka panjang, sistem otomasi perpustakaan menjadi fondasi utama dalam pengembangan menuju perpustakaan digital yang lebih kompleks. Integrasi dengan sistem eksternal, seperti perpustakaan lain dalam jaringan nasional, menjadi lebih mudah dilakukan jika perpustakaan sudah memiliki sistem otomasi yang mapan. Dengan demikian, otomasi bukan hanya sekadar modernisasi alat kerja, melainkan langkah awal menuju keterhubungan informasi yang lebih luas (Saleh, 2014).

## Web Server

Web server adalah perangkat lunak atau perangkat keras yang berfungsi menerima permintaan melalui protokol HTTP atau HTTPS dari klien, biasanya berupa peramban web, dan mengirimkan kembali konten yang diminta dalam bentuk halaman web atau data digital (Erl, 2013). Dalam arsitektur sistem informasi, web server bertindak sebagai gerbang depan yang melayani setiap permintaan akses dari pengguna internet. Tanpa adanya web server yang stabil, aplikasi atau situs web perpustakaan tidak akan dapat diakses oleh pemustaka meskipun data sudah tersedia di database.

Cara kerja web server melibatkan proses mendengarkan permintaan pada port tertentu dan memberikan respon sesuai dengan permintaan tersebut. Jika pengguna meminta halaman katalog, web server akan memproses permintaan itu dan mengirimkan kode HTML atau data JSON kembali ke komputer pengguna. Kecepatan web server dalam merespon permintaan ini sangat menentukan kualitas pengalaman pengguna dalam berinteraksi dengan sistem informasi organisasi.

Sebuah web server yang andal harus memiliki kemampuan untuk menangani banyak permintaan secara simultan (concurrency). Namun, setiap perangkat keras memiliki batasan fisik dalam hal memori dan daya proses, sehingga lonjakan permintaan yang ekstrem dapat menyebabkan server menjadi lambat atau berhenti berfungsi. Oleh karena itu, konfigurasi dan optimasi pada sisi web server merupakan hal teknis yang wajib dilakukan oleh setiap administrator jaringan (Erl, 2013).

Selain menyajikan konten, web server juga berperan dalam menjaga keamanan akses melalui implementasi sertifikat SSL/TLS untuk enkripsi data. Hal ini memastikan bahwa data sensitif pemustaka, seperti informasi akun atau riwayat peminjaman, tidak dapat disadap oleh pihak yang tidak bertanggung jawab saat dikirimkan melalui jaringan. Fungsi keamanan ini menjadikan web server sebagai komponen kritikal yang menjaga integritas layanan digital perpustakaan.

Terakhir, pengembangan teknologi web server saat ini telah memungkinkan penggunaan server virtual yang lebih efisien dalam penggunaan sumber daya fisik. Dengan teknik virtualisasi, beberapa instansi web server dapat berjalan di atas satu mesin fisik yang sama tanpa saling mengganggu. Fleksibilitas inilah yang mendukung pertumbuhan sistem informasi di perpustakaan agar tetap tangguh menghadapi perkembangan trafik pengguna yang dinamis (Erl, 2013).

## Load Balancer

Load Balancer adalah komponen teknologi yang bertugas mendistribusikan beban lalu lintas data ke beberapa server secara seimbang guna mengoptimalkan penggunaan sumber daya dan meminimalkan waktu tanggap (Nance & Hay, 2020). Dalam sistem yang memiliki trafik tinggi, menempatkan beban hanya pada satu server sangat berisiko menyebabkan overload. Load balancer hadir sebagai polisi lalu lintas digital yang mengarahkan setiap permintaan akses ke server yang sedang dalam kondisi paling optimal untuk memprosesnya.

Secara teknis, load balancer dapat diimplementasikan dalam bentuk perangkat keras khusus maupun perangkat lunak yang dikonfigurasi di dalam server. Mekanisme ini bekerja dengan cara memantau beban kerja pada setiap node server dalam sebuah kelompok atau klaster. Dengan pembagian beban yang merata, organisasi dapat menjamin bahwa tidak ada investasi sumber daya server yang terbuang sia-sia karena tidak terpakai, sementara server lain bekerja terlalu keras.

Penerapan load balancer sangat krusial bagi sistem informasi yang membutuhkan kecepatan respon yang konsisten di mata pengguna. Dengan mendistribusikan beban, waktu pemrosesan di setiap server menjadi lebih cepat karena antrean permintaan tidak menumpuk di satu tempat. Hal ini secara langsung berkontribusi pada peningkatan produktivitas organisasi karena pemustaka tidak lagi harus menunggu lama saat melakukan pencarian atau unduhan bahan koleksi (Nance & Hay, 2020).

Selain itu, load balancer memberikan fleksibilitas bagi administrator jaringan untuk melakukan pemeliharaan server tanpa menghentikan layanan. Administrator dapat menonaktifkan salah satu server untuk diperbaiki sementara load balancer mengalihkan seluruh trafik ke server lainnya yang masih aktif. Kemampuan operasional tanpa henti ini merupakan keunggulan utama yang dicari oleh setiap organisasi yang mengandalkan layanan digital 24 jam.

Dalam jangka panjang, penggunaan load balancer memungkinkan sebuah organisasi untuk melakukan skalabilitas horizontal dengan mudah. Jika jumlah pemustaka di perpustakaan meningkat secara drastis, organisasi cukup menambah server baru ke dalam klaster dan mendaftarkannya pada load balancer. Dengan demikian, pertumbuhan pengguna dapat ditangani secara mulus tanpa harus melakukan perombakan besar pada arsitektur sistem yang sudah ada (Nance & Hay, 2020).

## Cloud Computing

Cloud Computing atau komputasi awan adalah sebuah model penyediaan sumber daya komputasi seperti server, jaringan, dan penyimpanan yang dapat diakses melalui internet secara dinamis dan sesuai permintaan pengguna (Mell & Grance, 2011). Teknologi ini memungkinkan organisasi untuk menjalankan sistem informasi tanpa harus sepenuhnya bergantung pada kepemilikan infrastruktur fisik secara lokal. Dengan paradigma ini, sumber daya TI dipandang sebagai layanan yang dapat dikonsumsi sesuai kebutuhan, mirip dengan utilitas publik seperti listrik atau air.

Secara teknis, kekuatan utama dari cloud computing terletak pada kemampuannya untuk melakukan abstraksi terhadap perangkat keras melalui teknologi virtualisasi. Hal ini memungkinkan beberapa sistem operasi dan aplikasi berjalan di atas satu mesin fisik yang sama tanpa saling mengganggu, sehingga penggunaan sumber daya menjadi jauh lebih efisien. Bagi organisasi, hal ini berarti penghematan biaya yang signifikan karena tidak perlu melakukan investasi besar di awal untuk pengadaan server yang kapasitasnya mungkin tidak selalu terpakai penuh (Buyya et al., 2018).

Fleksibilitas yang ditawarkan oleh teknologi awan juga mencakup aspek skalabilitas, di mana kapasitas penyimpanan atau pemrosesan dapat ditingkatkan atau diturunkan secara instan sesuai dengan fluktuasi trafik. Dalam konteks perpustakaan digital yang sering menghadapi lonjakan akses pada masa-masa tertentu, kemampuan ini memastikan bahwa sistem tetap responsif tanpa adanya kendala teknis akibat kekurangan sumber daya. Model pembayaran pay-as-you-go juga memberikan keuntungan finansial, di mana organisasi hanya membayar untuk apa yang benar-benar mereka gunakan (Mell & Grance, 2011).

Lebih lanjut, cloud computing mendukung ketersediaan data yang tinggi melalui mekanisme replikasi data di berbagai lokasi geografis yang berbeda. Jika terjadi bencana fisik di satu pusat data, data tetap aman dan dapat diakses dari lokasi lain, yang menjamin keberlangsungan layanan informasi secara berkelanjutan. Keamanan data dalam lingkungan awan juga terus ditingkatkan melalui protokol enkripsi standar industri dan manajemen hak akses yang sangat ketat, sehingga integritas informasi tetap terjaga dari ancaman eksternal (Buyya et al., 2018).

Terakhir, adopsi komputasi awan mendorong terciptanya kolaborasi yang lebih luas antar institusi melalui kemudahan berbagi sumber daya informasi di platform yang seragam. Perpustakaan dapat saling terhubung dan berbagi katalog digital dengan lebih efisien tanpa harus merisaukan batasan kompatibilitas perangkat keras. Dengan demikian, cloud computing bukan sekadar inovasi penyimpanan data, melainkan katalisator utama bagi transformasi digital yang memungkinkan organisasi untuk fokus pada inovasi layanan daripada kerumitan pemeliharaan infrastruktur (Mell & Grance, 2011).

## High Availability

High Availability (HA) adalah karakteristik sistem yang dirancang untuk memastikan tingkat kinerja operasional dan ketersediaan layanan yang tinggi dalam durasi waktu tertentu tanpa kegagalan (F5 Networks, 2024). Tujuan utama dari HA adalah meminimalisir atau menghilangkan titik kegagalan tunggal (single point of failure) dalam sebuah arsitektur teknologi informasi. Bagi perpustakaan yang melayani ribuan pemustaka, mencapai kondisi HA berarti menjamin bahwa layanan katalog dan koleksi digital dapat diakses kapan saja tanpa terkendala kerusakan perangkat keras.

Untuk mencapai tingkat ketersediaan yang tinggi, sistem harus memiliki mekanisme redundansi, di mana setiap komponen utama memiliki cadangan yang siap mengambil alih tugas jika terjadi kegagalan. Dalam konteks server, ini berarti memiliki lebih dari satu server yang menjalankan aplikasi yang sama secara paralel. Keberadaan redundansi ini memastikan bahwa layanan tetap berjalan stabil meskipun ada komponen fisik yang mengalami kerusakan mendadak.

Proses pengalihan otomatis dari server yang rusak ke server cadangan dikenal dengan istilah failover. Mekanisme ini harus berjalan sangat cepat sehingga pengguna tidak menyadari bahwa telah terjadi gangguan di sisi infrastruktur. Kecepatan failover ini merupakan indikator utama seberapa baik sebuah sistem dirancang untuk mencapai standar high availability (F5 Networks, 2024).

Implementasi HA juga mencakup pemantauan kesehatan sistem secara berkelanjutan melalui alat-alat monitoring. Administrator jaringan harus mendapatkan peringatan dini jika ada indikasi penurunan performa atau gejala kegagalan pada salah satu unit server. Dengan pemantauan yang proaktif, tindakan pencegahan dapat dilakukan sebelum masalah tersebut berdampak luas pada pelayanan kepada pemustaka di perpustakaan.

Secara keseluruhan, high availability bukan sekadar masalah teknis, melainkan investasi strategis untuk menjaga kredibilitas organisasi di mata publik. Kegagalan sistem yang berulang akan menurunkan kepercayaan pemustaka terhadap keandalan layanan digital perpustakaan. Oleh karena itu, merancang sistem dengan prinsip HA adalah keharusan bagi setiap institusi yang ingin memberikan layanan informasi yang profesional, stabil, dan berkelanjutan (F5 Networks, 2024).

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

