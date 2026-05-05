# METODE PENELITIAN

## Metode Penelitian
Penelitian ini menerapkan metode Design and Development (D&D) melalui pendekatan kualitatif. Menurut Richey & Klein (2007), metode ini merupakan studi sistematis mengenai proses perancangan, pengembangan, dan evaluasi yang bertujuan membangun basis empiris untuk menciptakan produk, perangkat instruksional maupun non-instruksional, serta pengembangan atau pembaruan model yang sudah ada.

Strategi yang digunakan menghubungkan fase desain dengan fase pengembangan produk secara berkesinambungan. Seluruh tahapan pengembangan didokumentasikan secara terstruktur untuk menjaga transparansi serta validitas desain. Di era saat ini, pendekatan ini jamak diaplikasikan oleh para peneliti dalam memvalidasi pengembangan perangkat berbasis teknologi.

Fokus penelitian D&D dapat mencakup aspek analisis, perencanaan, produksi, hingga evaluasi, baik pada produk fisik maupun pada validasi model desain. Output akhir dari studi ini diharapkan mampu menghasilkan kebaruan pengetahuan, baik berupa model desain orisinal maupun penyempurnaan dari model yang telah tersedia.

## Informan Penelitian
Informan dalam studi ini mencakup seluruh elemen atau kelompok yang memenuhi kriteria penelitian, yang berperan tidak hanya sebagai objek, tetapi juga sumber data yang valid (Asrulla et al., 2023). Dalam kerangka D&D, informan dapat dikategorikan menjadi sumber manusia dan non-manusia (Richey & Klein, 2007).

Subjek penelitian ini terbagi menjadi dua klasifikasi utama. Informan non-manusia direpresentasikan oleh proyek penelitian itu sendiri, sedangkan informan manusia melibatkan peran perancang (designer) dan pengembang (developer) (Richey & Klein, 2007).

Secara spesifik, informan non-manusia dalam penelitian ini adalah infrastruktur teknologi Load Balancer sebagai objek utama data teknis. Sementara itu, informan manusia terdiri dari praktisi divisi DevOps Organisasi N yang berperan sebagai informan kunci dalam memberikan wawasan operasional terkait implementasi sistem.

Teknik pemilihan informan menggunakan purposive sampling, yakni strategi penentuan sampel secara sengaja berdasarkan karakteristik spesifik yang relevan dengan tujuan studi. Teknik ini digunakan untuk memperoleh sumber data yang paling kompeten dalam mengeksplorasi fenomena penelitian secara mendalam (Richey & Klein, 2007). Kriteria kualifikasi informan yang ditetapkan adalah:
1. Memahami mekanisme sistem keamanan dan distribusi trafik digital.
2. Mampu menjelaskan teknis implementasi Load Balancer.
3. Bertanggung jawab atas pengelolaan serta pemeliharaan infrastruktur digital di lingkungan perusahaan.

Berdasarkan kriteria tersebut, berikut adalah daftar informan dari Organisasi N:

|No | Nama   | Jabatan                 |
|-- | ------ | ----------------------- |
| 1 | Null   | Chief Information Officer |
| 2 | Rookit | DevOps Engineer         |
| 3 | Neckle | DevOps Engineer         |

## Teknik Pengumpulan Data
Peneliti menggunakan berbagai teknik untuk menghimpun informasi yang diperlukan dari sumber penelitian. Merujuk pada Richey & Klein (2007), pengumpulan data dalam D&D dapat dilakukan melalui catatan kerja, uji coba data, kuesioner, wawancara, observasi, hingga penggunaan perangkat lunak atau laboratorium. Dalam penelitian ini, data akan dikumpulkan melalui:

### Data Uji Coba
Data ini didapatkan langsung melalui penggunaan sumber daya yang diteliti untuk menjelaskan tingkat keberhasilan maupun kegagalan model (Richey & Klein, 2007). Prosedur pengujian dilakukan secara terstruktur dan sistematis untuk menghimpun data eksperimental.

Tahapan ini melibatkan pengamatan mendalam pada performa sistem, identifikasi kendala teknis, serta perumusan solusi atas masalah yang muncul selama pengujian. Data yang dihasilkan mencerminkan dinamika proses dan anomali sistem yang ditemukan selama operasional berlangsung.

### Penggunaan Laboratorium
Teknik ini diterapkan ketika penelitian memerlukan dukungan teknologi yang kompleks. Standarisasi laboratorium sangat bergantung pada ketersediaan pendanaan yang menjadi variabel penting dalam menyediakan infrastruktur yang mampu menjamin akurasi hasil pengembangan (Richey & Klein, 2007).

Seluruh spesifikasi perangkat keras dan perangkat lunak yang membangun lingkungan laboratorium dalam penelitian ini akan dijabarkan secara rinci sebagai berikut:

| Perangkat Keras        | Perangkat Lunak          |
|------------------------|--------------------------|
| 2 Monitor              | Github                   |
| 3 Peladen (**server**) | sistem operasi Archlinux |
| 1 PC Testing           | Obsidian                 |
| 2 Keyboard             | Perekam layar            |
| 2 Mouse                | Docker                   |
| 1 Speaker              |                          | 
| 1 Switch cisco         |                          |
| 1 Mikrotik             |                          |
| 1 Router wireless      |                          |

## Wawancara
Wawancara merupakan metode pertukaran informasi secara verbal yang dilakukan secara terorganisir untuk mencapai tujuan perolehan data tertentu. Mekanisme ini melibatkan interaksi dua arah antara pewawancara (*interviewer*) sebagai pemandu diskusi dan narasumber (*informant*) yang menyajikan informasi atau respon atas stimulus pertanyaan yang diberikan (Moleong, 2016).

Proses wawancara ini kemudian diintegrasikan dengan analisis penilaian kebutuhan (*needs assessment*). Fokus utamanya adalah menggali kompetensi fundamental yang diperlukan oleh seorang perancang agar proses penilaian kebutuhan dapat berjalan efektif dan mencapai keberhasilan (Richey & Klein, 2007).

Penerapan teknik wawancara juga berfungsi memperkuat kredibilitas serta validitas temuan penelitian. Melalui komunikasi langsung, peneliti memiliki peluang untuk mengeksplorasi sudut pandang partisipan secara mendalam, baik dalam situasi spesifik maupun fenomena teknologi yang sedang diteliti.

# Teknik Analisis Data
Seluruh data yang telah dihimpun melalui metode uji coba, pemanfaatan laboratorium, dan wawancara kemudian dianalisis untuk menghasilkan informasi valid. Tahapan analisis yang dilakukan adalah sebagai berikut:

## Observasi Data Eksperimen
Tahapan ini dilakukan dengan mengamati secara langsung hasil implementasi sistem **Load Balancer** yang telah dibangun. Tujuannya adalah memantau operasional sistem pada kondisi riil, baik saat menangani lonjakan trafik maupun dalam kondisi normal. Hal ini memungkinkan peneliti mendapatkan data objektif terkait performa dan stabilitas sistem.

Peneliti menitikberatkan observasi pada aspek-aspek krusial seperti efektivitas distribusi beban kerja, kecepatan waktu tanggap sistem, serta ketahanan infrastruktur terhadap kegagalan salah satu simpul server. Observasi dilakukan tanpa intervensi langsung agar data yang diperoleh murni mencerminkan performa sistem yang sebenarnya.

Temuan dari observasi ini menjadi landasan untuk mengevaluasi apakah penerapan **Load Balancer** telah sesuai dengan tujuan penelitian. Dengan pendekatan ini, kekuatan dan kelemahan sistem dapat diidentifikasi secara akurat sehingga hasil analisis dapat dipertanggungjawabkan (Moleong, 2016).

## Seleksi Data Eksperimen
Seleksi data merupakan proses penyaringan informasi yang didapat dari observasi dan dokumentasi teknis. Peneliti memilih data yang paling relevan dan memiliki akurasi tinggi terhadap tujuan penelitian guna memastikan analisis akhir mencerminkan performa sistem yang nyata.

Data yang dikurasi dalam tahap ini meliputi metrik pengujian sistem, tangkapan layar konfigurasi, serta catatan teknis yang berkaitan langsung dengan operasional **Load Balancer**. Informasi yang tidak konsisten atau kurang relevan akan dipisahkan untuk menjaga kualitas hasil penelitian serta menyederhanakan data yang kompleks agar lebih fokus pada poin-poin signifikan.

## Reduksi Data
Reduksi data mencakup proses pemilihan, pengelompokan, dan pengorganisasian data mentah untuk menonjolkan pola-pola yang esensial (Fiantika et al., 2022). Langkah ini bukan sekadar penyederhanaan, melainkan bentuk analisis kritis di mana peneliti melakukan interpretasi awal terhadap fenomena teknis yang ditemukan selama penelitian.

## Kategorisasi Data
Tahap ini melibatkan pengelompokan data secara sistematis berdasarkan kesamaan dan perbedaan karakteristik tertentu. Melalui kategorisasi, informasi yang tersebar disusun ke dalam tema-tema yang saling berkaitan, sehingga memudahkan peneliti dalam memetakan pola kunci yang relevan dengan fokus studi (Hairunisya, 2021).

## Penyajian Data
Data yang telah direduksi kemudian disusun dalam format narasi deskriptif yang sistematis. Penyajian ini bertujuan untuk mengubah informasi yang rumit menjadi format yang lebih koheren, sehingga memudahkan pemahaman mengenai dinamika sistem serta hubungan antarvariabel dalam penelitian (Ratnaningtyas et al., 2022).

## Penarikan Kesimpulan
Fase ini merupakan proses pemaknaan data yang dilakukan secara kontinu sepanjang penelitian. Peneliti berupaya merumuskan esensi dari data yang terkumpul, kemudian memvalidasi kebenarannya melalui proses verifikasi dengan fakta-fakta objektif yang ditemukan di lapangan.

# Uji Keabsahan Data
Dalam riset kualitatif, pengujian keabsahan menitikberatkan pada validitas, reliabilitas, dan objektivitas data temuan, berbeda dengan riset kuantitatif yang lebih menguji instrumennya. Fokus utamanya adalah menjamin bahwa hasil temuan memiliki derajat kepercayaan yang tinggi dan dapat dipertanggungjawabkan secara ilmiah (Anggito & Setiawan, 2018).

Salah satu teknik utama yang digunakan adalah triangulasi, yang berfungsi memperkuat validitas temuan melalui berbagai sudut pandang (Judijanto et al., 2024). Berikut adalah jenis triangulasi yang diterapkan:

## Triangulasi Sumber
Teknik ini dilakukan dengan mengonfirmasi informasi yang didapat melalui wawancara mendalam kepada tiga narasumber berbeda. Tujuannya adalah untuk memvalidasi akurasi data yang telah dianalisis melalui perspektif beberapa informan kunci.

## Triangulasi Teknik
Kredibilitas temuan diuji dengan memverifikasi informasi dari sumber yang sama menggunakan metode berbeda, yaitu melalui data uji coba, observasi laboratorium, dan wawancara. Jika terjadi diskrepansi hasil, maka akan dilakukan diskusi lebih lanjut untuk menetapkan data yang paling akurat.

## Triangulasi Waktu
Pengecekan data dilakukan pada waktu atau situasi yang berbeda menggunakan berbagai teknik pengumpulan data. Konsistensi hasil yang diperoleh dari pengecekan secara berkala ini menjadi jaminan atas kebenaran data tersebut.

## Tempat dan Jadwal Penelitian 

1. Tempat Penelitian
Penelitian ini dilakukan di Organisasi N yang berlokasi di Jl. Lele V No 231, RT.005 RW.005, Pamulang, Tangerang Selatan, Banten 15432

2. Jadwal Penelitian
Peneliti melakukan tahap observasi awal pada bulan April tahun 2026, setelah melakukan observasi awal dan menemukan masalah yang ada pada tempat penelitian peneliti menyusun proposal pada bulan September hingga bulan November dengan bimbingan dari dosen pembimbing. Setelah disetujuinya proposal, peneliti melakukan seminar pada bulan Desember.

Setelah disetujui oleh dosen penguji I dan dosen penguji II, peneliti melanjutkan bimbingan untuk melakukan penyusunan skripsi pada bulan Januari hingga bulan Maret. Peneliti berharap pada bulan April sudah melakukan sidang skripsi.
