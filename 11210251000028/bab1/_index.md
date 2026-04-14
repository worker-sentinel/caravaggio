# IMPLEMENTASI MODEL NETWORK BOUND DISK ENCRYPTION UNTUK PENINGKATAN KEAMANAN ARSIP DIGITAL DI PT X

## BAB 1
## Latar belakang

Menurut Undang – Undang No.43 Tahun 2009 pasal 1 ayat (2), definisi arsip merupakan rekaman kegiatan atau peristiwa arsip dalam berbagai bentuk dan media sesuai dengan perkembangan teknologi informasi dan komunikasi yang dibuat dan diterima oleh lembaga negara, pemerintahan daerah, lembaga pendidikan, perusahaan, organisasi politik, organisasi kemasyarakatan, dan perorangan dalam pelaksanaan kehidupan bermasyarakat, berbangsa, dan bernegara.

Menurut Peraturan Kepala Arsip Nasional Republik Indonesia No.7 Tahun 2016 tentang petunjuk pelaksanaan sistem klasifikasi keamanan dan akses arsip dinamis, klasifikasi keamanan arsip adalah kategori kerahasiaan informasi arsip berdasarkan pada tingkat keseriusan dampak yang ditimbulkannya terhadap kepentingan dan keamanan negara, masyarakat dan perorangan. Untuk mengklasifikasikan akses arsip, arsip dapat dikategorikan berdasarkan bagaimana arsip dapat digunakan untuk tujuan tertentu. Program pengamanan arsip melindungi data dan arsip secara fisik berdasarkan kategori keamanannya (Khariroh, 2021).

Dalam konteks perusahaan, arsip berfungsi sebagai aset informasi yang memiliki nilai hukum, administratif, dan strategis. Oleh karena itu, pengelolaan arsip yang baik menjadi bagian integral dari tata kelola organisasi yang efektif. Seiring berkembangnya teknologi informasi, bentuk arsip juga mengalami transformasi dari fisik menuju digital.

Namun, perubahan dari arsip konvensional menjadi arsip digital juga menimbulkan tantangan baru terutama dalam aspek keamanan data dan keaslian arsip. Arsip digital rentan terhadap kerusakan perangkat, kehilangan data, dan serangan siber yang dapat mengancam integritas informasi. Dengan demikian, pengelolaan arsip digital menuntut penerapan strategi keamanan informasi yang terencana.


Keamanan arsip digital merupakan isu strategis dalam tata kelola arsip di era digitalisasi industri. Perusahaan harus memastikan bahwa arsip digital terlindungi dari risiko kebocoran, manipulasi, maupun kehilangan akibat akses yang tidak sah. Untuk itu, diperlukan penerapan kebijakan keamanan yang mencakup aspek kerahasiaan, integritas, dan ketersediaan data. Penerapan keamanan arsip digital bukan hanya tanggung jawab teknis, tetapi juga menjadi bagian dari manajemen risiko informasi secara menyeluruh. Oleh karena itu, sistem penyimpanan arsip digital perlu dirancang dengan pendekatan keamanan berlapis.

Dalam konteks penyimpanan digital, keamanan arsip digital bergantung pada mekanisme proteksi data di tingkat perangkat keras dan perangkat lunak. Salah satu pendekatan umum adalah dengan menerapkan sistem enkripsi pada media penyimpanan agar data tidak dapat diakses tanpa izin atau wewenang.

Ancaman terhadap arsip digital sering memanfaatkan celah keamanan pada perangkat lunak atau kesalahan konfigurasi pengguna. Dalam konteks perusahaan, dampak serangan tersebut dapat menyebabkan kerugian finansial, reputasi, bahkan gangguan operasional (Raj, 2023). Terdapat kasus kebocoran data terhadap arsip digital seperti serangan operasi dragon knight pada tahun 2006 yang merugikan perusahaan - perusahaan minyak dan gas. Serangan ini bertujuan untuk mengambil informasi terkait data lapangan, data keuangan, dan dokumen perintah rahasia untuk kepentingan perusahaan.

Implementasi teknologi enkripsi telah menjadi praktik standar dalam keamanan penyimpanan digital modern. Namun, satu sisi metode enkripsi masih terdapat kelemahan dalam kecepatan proses data yang cukup besar (Judijanto et al., 2025).  Oleh karena itu, pemilihan metode enkripsi yang tepat menjadi hal fundamental bagi keamanan arsip digital.

Dalam konteks PT X, arsip digital menjadi aset informasi penting yang harus dijaga kerahasiaannya. Perusahaan yang bergerak di bidang pengembangan teknologi ini menyimpan berbagai data strategis, termasuk naskah, kontrak, dan arsip digital hasil produksi. Dengan meningkatnya ketergantungan terhadap media penyimpanan digital, risiko kebocoran dan kehilangan data juga meningkat. Oleh karena itu, diperlukan pendekatan teknologi yang mampu mengamankan data dari akses tidak sah, baik dari internal maupun eksternal. NBDE menawarkan potensi untuk mengamankan arsip tersebut melalui kontrol berbasis jaringan.

Pengembangan model dan implementasi NBDE untuk perusahaan seperti PT X harus mempertimbangkan struktur jaringan internal dan pola akses data pengguna.Desain sistem harus mampu menjamin keamanan tanpa menurunkan kinerja akses arsip digital. Selain itu, integrasi dengan sistem autentikasi perusahaan harus dilakukan secara tertutup agar tidak mengganggu operasional.
Namun, penerapan NBDE juga memiliki tantangan tertentu, khususnya dalam hal desain server otentikasi dan pemulihan sistem. Apabila Tang Server mengalami kegagalan, maka seluruh sistem terenkripsi tidak dapat diakses hingga server dipulihkan. Oleh karena itu, diperlukan rancangan yang mempertimbangkan redundansi server dan kebijakan failover. Strategi ini akan menjamin ketersediaan sistem meskipun terjadi gangguan. 

PT X sebagai subjek penelitian memiliki kebutuhan khusus yang menjadikan NBDE relevan untuk diterapkan. Infrastruktur digital perusahaan melibatkan sistem penyimpanan terpusat untuk arsip media, yang diakses oleh banyak unit kerja melalui jaringan internal. Hal ini menimbulkan tantangan dalam menjaga kontrol akses dan otorisasi pengguna. Dengan NBDE, sistem penyimpanan dapat dibatasi hanya untuk perangkat yang berada dalam jaringan resmi perusahaan. Oleh karena itu, model yang diusulkan diharapkan dapat meningkatkan keamanan arsip digital perusahaan secara signifikan.

Selain itu, ketertarikan peneliti dalam mengangkat tema ini didasarkan pada pentingnya pengembangan sistem keamanan arsip digital yang tidak hanya kuat secara teknis, tetapi juga adaptif terhadap kebutuhan operasional modern. Perkembangan ancaman siber yang semakin kompleks menuntut adanya solusi keamanan yang tidak hanya mengandalkan enkripsi konvensional, tetapi juga mampu mengintegrasikan kontrol akses berbasis jaringan. Dalam hal ini, Network Bound Disk Encryption (NBDE) menjadi pendekatan yang menarik karena mampu memberikan lapisan keamanan tambahan melalui mekanisme autentikasi jaringan, sehingga relevan untuk diteliti dan dikembangkan lebih lanjut.

Pemilihan PT X sebagai objek penelitian didasarkan pada kesesuaian karakteristik operasional perusahaan dengan kebutuhan implementasi NBDE. PT X merupakan perusahaan yang sejak awal mengelola arsip secara digital dan memiliki tingkat ketergantungan yang tinggi terhadap sistem jaringan dalam aktivitas bisnisnya. Dalam lingkungan kerja yang sedemikian rupa, kegagalan dalam pengelolaan arsip digital khususnya dalam rangka pengamanan bukan sekadar kendala teknis, melainkan ancaman terhadap kelangsungan bisnis.

Berdasarkan latar belakang yang telah dijelaskan diatas, maka penulis ingin melakukan penelitian lebih lanjut terkait keamanan arsip digital pada lapisan fisik media penyimpanan yang ada di PT X. Adapun judul dalam penelitian ini adalah Implementasi Model Network Bound Disk Encryption Untuk Peningkatan Keamanan Arsip Digital di PT X.

## Identifikasi masalah
Berdasarkan uraian pada latar belakang yang sudah dijelaskan bahwa terdapat beberapa masalah yang teridentifikasi. Identifikasi masalah dalam penelitian sebagai berikut: 
1. Arsip digital sebagai aset strategis perusahaan masih rentan terhadap ancaman seperti kebocoran data, manipulasi, dan kehilangan akibat akses tidak sah.
2. Besarnya probabilitas ancaman terhadap keamanan informasi menyebabkan arsip digital berada dalam kondisi yang sangat rentan.
3. Masih rendahnya tingkat perlindungan arsip digital dari risiko kebocoran dan penyalahgunaan data.
4. Meningkatnya penciptaan dan penggunaan arsip digital tanpa diimbangi dengan sistem pengamanan yang memadai. 
## Batasan masalah

untuk memperjelas ruang lingkup penelitian agar lebih terarah dan tidak melebar sehingga fokus pada tujuan utama yang ingin dicapai. Dengan adanya batasan masalah, penelitian dapat dilakukan secara lebih sistematis, mendalam, dan sesuai dengan kebutuhan perusahaan.

Batasan masalah dalam penelitian ini adalah sebagai berikut:
1. Penelitian difokuskan pada keamanan arsip digital yang disimpan dalam perangkat penyimpanan internal perusahaan.
2. Penelitian hanya dilakukan pada perusahaan PT X.
3. Ruang lingkup penelitian hanya mencakup perancangan model NBDE, tanpa membahas aspek implementasi infrastruktur jaringan secara detail di seluruh unit perusahaan.
4. Impelementasi NBDE pada perusahaan ini menggunakan sistem operasi Arch Linux.

## Rumusan Masalah

Adapun rumusan masalah berdasarkan batasan masalah dan latar belakang yang telah dijelaskan di atas, maka peneliti merumuskan masalah penelitian ini yaitu “Bagaimana rancangan model enkripsi perangkat penyimpanan dengan menggunakan Network Bound Disk Encryption Untuk Peningkatan Keamanan Arsip Digital di PT X.”

## Tujuan dan Manfaat Penelitian

Adapun tujuan dan manfaat penelitian yang ingin dicapai oleh peneliti berdasarkan permasalahan yang telah dijelaskan atas adalah sebagai berikut:

### Tujuan Penelitian
1. Mengetahui model enkripsi perangkat penyimpanan dengan menggunakan Network Bound Disk Encryption untuk meningkatkan keamanan arsip digital.
2. Mengkaji upaya perlindungan yang dapat dilakukan untuk keamanan arsip digital.
3. Mengidentifikasi risiko dan kerentanan yang mempengaruhi keamanan arsip digital.

### Manfaat Penelitian

#### Manfaat teoritis 
 
1. Penelitian ini diharapkan dapat memberikan kontribusi dalam pengembangan konsep keamanan arsip digital.
2. Penelitian ini diharapkan dapat memperkaya kajian ilmiah mengenai integrasi metode enkripsi dan dekripsi otomatis dalam menjaga keamanan arsip digital pada perangkat penyimpanan. 
3. Penelitian ini diharapkan dapat memberi wawasan pengetahuan mengenai model pengamanan pada perangkat keras yang digunakan untuk menyimpan data digital dan dapat dijadikan sumber rujukan untuk penelitian selanjutnya.                                     


#### Manfaat Praktis
1. Dapat menambah pengalaman langsung serta wawasan terkait perancangan model dan implementasi enkripsi perangkat penyimpanan dengan menggunakan Networks Bound Disk Encryption. 
2. Penelitian ini diharapkan dapat memberikan gambaran mengenai upaya perlindungan arsip digital dari ancaman seperti kebocoran, kehilangan, dan penyalahgunaan data.
3. Dapat memberikan solusi terhadap permasalahan dekripsi luks tanpa penginputan manual dari pengguna.



