# **BAB 1**

# **Pendahuluan**

1. ## **Latar Belakang** {#latar-belakang}

   Perkembangan teknologi informasi telah memberikan dampak besar terhadap cara manusia mengelola data dan informasi. Transformasi digital menjadikan informasi sebagai aset utama yang perlu dikelola
   dengan cermat dan berkelanjutan. Arsip, sebagai rekaman informasi yang bernilai, kini lebih banyak berbentuk digital daripada fisik. Pergeseran ini menuntut adanya metode penyimpanan yang efisien,
   aman, dan dapat diakses dalam jangka Panjang. Konsep arsip digital telah menjadi pondasi dalam sistem manajemen informasi modern di berbagai institusi. Fenomena ini menunjukkan pentingnya penelitian
   yang fokus pada protokol penyimpanan arsip digital yang mampu menjaga keberlanjutan data. Oleh karena itu, pemilihan model penyimpanan arsip digital yang tepat menjadi isu strategis.

   Tantangan yang muncul adalah bagaimana menjamin keamanan, keaslian, dan keutuhan arsip digital dalam jangka panjang. Tanpa protokol yang jelas, risiko kehilangan data, manipulasi, serta
   ketidakjelasan akses dapat terjadi. Oleh sebab itu, penelitian terhadap protokol penyimpanan digital bukan hanya relevan, tetapi juga mendesak. “Sebenarnya, berdasarkan situasi praktis saat ini,
   sistem manajemen informasi arsip digital di banyak unit belum sepenuhnya lengkap, dengan beberapa celah dalam manajemen, yang berpotensi menyebabkan risiko kebocoran atau hilangnya informasi arsip
   digital akibat pengumpulan ilegal” (Yu, 2025). Kondisi ini menjadi landasan awal pentingnya eksplorasi metode penyimpanan berbasis teknologi. Salah satunya adalah *Flat file* yang selama ini dianggap
   sederhana namun masih menyimpan potensi.

   *Flat file* merupakan metode penyimpanan data digital dalam bentuk berkas yang berdiri sendiri, tanpa keterkaitan langsung dengan sistem basis data relasional. *Flat file* umumnya menggunakan format
   sederhana seperti teks, CSV, JSON atau MD yang dapat dibuka dengan berbagai aplikasi,  Flat-files Database adalah database yang disimpan dalam file yang disebut flat file. catatan mengikuti format
   yang seragam dan hubungan antar rekod tidak diindeks atau diidentifikasi (Cahyanti, 2023\). Keunggulannya terletak pada kemudahan akses, kompatibilitas tinggi, serta tidak membutuhkan perangkat
   lunak kompleks. Sifat sederhana ini membuat *Flat file* banyak digunakan untuk penyimpanan jangka pendek dan keperluan teknis tertentu. Namun, dalam konteks arsip digital, *Flat file* sering
   dipandang kurang memadai karena keterbatasan dalam manajemen metadata dan integritas data. Perbedaan persepsi inilah yang menimbulkan perdebatan di kalangan praktisi dan akademisi. Kondisi tersebut
   menuntut penelitian lebih lanjut terkait efektivitas *Flat file* dalam arsip digital.

   Arsip digital native merupakan bentuk arsip yang sejak awal dibuat dalam format digital, bukan hasil digitalisasi dari dokumen fisik. Jenis arsip ini mencakup dokumen elektronik, email, data sensor,
   multimedia, dan bentuk informasi lain yang lahir secara digital. Keunikan arsip digital native terletak pada kompleksitas format, volume yang besar, serta kebutuhan akan standar metadata yang ketat.
   Pengelolaan arsip digital native membutuhkan strategi yang berbeda dibandingkan dengan arsip hasil digitalisasi. Hal ini dikarenakan karakteristik teknis yang menuntut pengendalian presisi pada
   tingkat file maupun sistem. *Flat file* menjadi salah satu alternatif penyimpanan arsip digital native karena fleksibilitas formatnya. Meski demikian, efektivitasnya masih dipertanyakan tanpa adanya
   protokol informasi yang jelas.

   Salah satu isu utama dalam manajemen arsip digital adalah pilihan media dan sistem penyimpanan yang digunakan. Banyak institusi memilih sistem berbasis basis data relasional atau repositori khusus
   yang menawarkan kontrol metadata lebih baik. Namun, hal ini membutuhkan infrastruktur besar, biaya tinggi, serta keterampilan teknis yang kompleks. Sebaliknya, *Flat file* menawarkan kesederhanaan
   dan fleksibilitas dalam implementasi. Masalahnya adalah ketiadaan protokol baku yang mampu menjamin keamanan dan kelestarian data. Kondisi ini menimbulkan dilema bagi lembaga yang memiliki
   keterbatasan sumber daya. Oleh karena itu, pengembangan protokol arsip digital berbasis *Flat file* menjadi solusi alternatif yang layak diteliti.

   Penyimpanan arsip digital menggunakan local first menekankan pada penggunaan server lokal atau infrastruktur internal lembaga. Model ini berbeda dengan cloud publik yang rentan terhadap isu keamanan,
   privasi, serta kontrol kepemilikan data. Keunggulan local first terletak pada kendali penuh terhadap data dan infrastruktur, meski memerlukan biaya operasional untuk pemeliharaan. Dalam konteks
   nasional, local first dipandang lebih sesuai dengan regulasi yang menuntut kedaulatan data. "Digital preservation success ultimately rests on institutional autonomy. If an organization cannot sustain
   its own storage environment and data migration paths independent of vendor contracts, it has not genuinely secured its long-term digital memory"(Lee, 2019\) Namun, penyimpanan berbasis *Flat file*
   di local first membutuhkan protokol yang jelas agar tidak menimbulkan masalah teknis. Tanpa standar baku, *Flat file* berisiko menyebabkan redundansi, inkonsistensi, serta kerentanan data. Oleh sebab
   itu, integrasi antara konsep local first dan protokol *Flat file* perlu diteliti secara komprehensif.
   
   Penelitian terdahulu banyak membahas mengenai sistem repositori berbasis database dan teknologi cloud untuk arsip digital. Kajian tersebut menekankan pentingnya metadata terstruktur, otentikasi
   pengguna, serta enkripsi data. Meski demikian, masih sedikit penelitian yang fokus pada *Flat file* sebagai basis arsip digital. Sebagian literatur justru menganggap *Flat file* tidak relevan untuk
   penyimpanan arsip skala besar. Padahal, bagi institusi dengan sumber daya terbatas, *Flat file* dapat menjadi solusi yang realistis. Inilah yang menimbulkan kesenjangan penelitian atau research gap
   di bidang ini. Dengan demikian, fokus penelitian terhadap protokol arsip berbasis *Flat file* menjadi penting.

   Research gap juga terlihat pada kurangnya standar formal mengenai protokol *Flat file* untuk arsip digital. Saat ini, kebanyakan panduan berfokus pada aspek teknis umum, bukan pada prosedur spesifik
   preservasi digital. Hal ini menimbulkan variasi praktik antar lembaga yang berpotensi mengurangi interoperabilitas arsip. Dalam konteks pengelolaan nasional, ketidakseragaman tersebut dapat
   menyulitkan integrasi data antar institusi. Padahal, interoperabilitas merupakan aspek kunci dalam strategi preservasi jangka panjang. Dengan adanya research gap ini, penelitian tentang protokol *
   Flat file* tidak hanya penting secara akademis, tetapi juga praktis. Oleh karena itu, penelitian ini diharapkan mampu mengisi celah yang belum banyak ditelaah.

   Permasalahan lain muncul dari persepsi bahwa *Flat file* kurang aman dibandingkan dengan sistem database. Pandangan ini muncul karena *Flat file* dianggap rentan terhadap korupsi data, kesalahan
   akses, dan keterbatasan kontrol metadata. Namun, dengan protokol yang tepat, kelemahan tersebut dapat diminimalisasi. Misalnya, penggunaan checksum, hashing, atau enkripsi sederhana mampu
   meningkatkan keamanan *Flat file*. Sayangnya, panduan formal mengenai penerapan mekanisme tersebut dalam konteks arsip digital masih minim. Hal ini menjadi tantangan sekaligus peluang penelitian
   untuk membuktikan efektivitas pendekatan *Flat file*. Dengan begitu, asumsi negatif terhadap *Flat file* dapat ditinjau ulang secara ilmiah.

   Selain faktor teknis, faktor regulasi juga mempengaruhi pengelolaan arsip digital. Banyak peraturan terkait arsip belum mengatur secara rinci penggunaan *Flat file* sebagai basis penyimpanan.
   Kondisi ini menimbulkan ambiguitas dalam implementasi di lapangan. Lembaga arsip seringkali harus mengembangkan kebijakan internal sendiri tanpa panduan yang baku. Hal tersebut mengakibatkan adanya
   variasi praktik yang tidak konsisten antar institusi. Padahal, standardisasi sangat diperlukan untuk memastikan keseragaman pengelolaan arsip digital. Oleh karena itu, penelitian ini juga memiliki
   relevansi untuk mendukung pengembangan regulasi.

   Dari sisi keamanan informasi, protokol untuk *Flat file* masih jarang dibahas secara sistematis. Kebanyakan kajian lebih menekankan keamanan jaringan dan basis data terpusat. Padahal, *Flat file*
   juga membutuhkan lapisan pengamanan seperti otorisasi akses, kontrol hak pengguna, dan audit trail. Tanpa adanya protokol ini, arsip digital rawan dimanipulasi atau diakses pihak tidak berwenang.
   Kelemahan ini dapat berdampak pada keabsahan arsip sebagai bukti hukum. Karena itu, penelitian ini menempatkan aspek keamanan sebagai fokus utama dalam pengembangan protokol. Hasilnya diharapkan
   mampu memberikan rekomendasi praktis bagi lembaga arsip nasional.

   Konsep integritas data menjadi isu krusial dalam penyimpanan berbasis *Flat file*. Arsip digital harus dapat menjamin bahwa data yang disimpan sama persis dengan data asli tanpa perubahan. *
   Flat file* memerlukan protokol validasi seperti checksum atau digital signature untuk membuktikan integritas. Tanpa mekanisme ini, arsip digital rawan kehilangan keotentikan. Hal tersebut berpotensi
   melemahkan nilai arsip dalam konteks administrasi dan hukum. Oleh karena itu, penelitian ini menekankan pentingnya penyusunan protokol validasi data. Langkah ini akan memperkuat posisi *Flat file*
   sebagai alternatif yang kredibel untuk arsip digital.

   Dalam perspektif manajemen arsip, keteraksesan merupakan faktor utama. Arsip digital yang disimpan dalam *Flat file* harus tetap mudah diakses oleh pengguna yang sah. Keteraksesan mencakup aspek
   format file, struktur direktori, serta standar metadata. Tanpa pengaturan yang jelas, pengguna akan kesulitan menelusuri arsip secara sistematis. Hal ini dapat mengurangi efektivitas arsip sebagai
   sumber informasi dan bukti sejarah. Oleh karena itu, protokol informasi harus mencakup standar aksesibilitas yang memadai. Dengan begitu, *Flat file* dapat digunakan secara lebih efektif dalam k
   onteks kelembagaan.
   
   Berdasarkan uraian di atas, dapat disimpulkan bahwa *Flat file* memiliki potensi sebagai basis penyimpanan arsip digital, meskipun masih menghadapi berbagai tantangan. Tantangan tersebut meliputi
   keterbatasan dalam manajemen metadata, isu keamanan, integritas, serta ketidakjelasan regulasi. Adanya research gap memperlihatkan kurangnya standar formal dalam penerapan protokol *Flat file*.
   Oleh karena itu, penelitian ini berfokus pada analisis dan pengembangan protokol informasi untuk arsip digital berbasis *Flat file*. Fokus ini dipilih untuk menjawab kebutuhan praktis lembaga arsip
   serta mengisi kekosongan dalam literatur akademis. Dengan demikian, penelitian ini memiliki urgensi baik secara teoritis maupun aplikatif. Hal ini menjadi dasar kuat untuk melanjutkan pembahasan
   pada bagian identifikasi masalah.
3. ## **Identifikasi Masalah** {#identifikasi-masalah}

   Berdasarkan latar belakang di atas maka dapat diidentifikasi permasalahan yaitu:

1. Masih banyak yang menganggap *Flat file* tidak efektif untuk arsip digital

2. Peraturan keamanan dalam protokol *Flat file* masih belum jelas.

3. Kurangnya penelitian yang fokus pada *Flat file* sebagai alternatif praktis

4. Belum adanya protokol baku untuk penyimpanan arsip digital berbasis Flat file  
   

3. ## **Batasan Masalah** {#batasan-masalah}

   Dari identifikasi masalah yang ditetapkan dalam penelitian ini, diperlukan pembatasan masalah agar dalam pengkajian yang dilakukan lebih terfokus kepada.

1. Penelitian ini membahas protokol arsip digital berbasis *Flat file*

2. Penelitian ini hanya membahas sistem keamanan yang bersangkutan dengan arsip digital berbasis *Flat file*

3. Penelitian ini dilakukan di Organisasi N  
   

4. ## **Rumusan Masalah** {#rumusan-masalah}

   Berdasarkan uraian latar belakang yang telah dijelaskan, maka rumusan masalah dalam penelitian ini adalah 

1. Bagaimana proses penerapan protokol informasi dalam sistem arsip digital berbasis *Flat file?*  
   

5. ## **Tujuan dan Manfaat Penelitian** {#tujuan-dan-manfaat-penelitian}

1. Tujuan Penelitian  
   Berdasarkan rumusan masalah di atas, tujuan dari penelitian ini adalah:

1. Untuk mengetahui proses penerapan protokol informasi dalam sistem arsip digital berbasis *Flat file*

2. Untuk mengetahui kendala apa saja yang dihadapi dalam proses penerapan protokol informasi dalam sistem arsip digital berbasis *Flat file*

2.  Manfaat Penelitian  
   Adapun manfaat yang diharapkan oleh penelitian ini adalah

1. ### Manfaat Akademis {#manfaat-akademis}

   Penelitian ini memberikan kontribusi bagi pengembangan ilmu kearsipan dengan menambah literatur mengenai penggunaan *Flat file* dalam pengelolaan arsip digital. Kajian ini memperluas pemahaman mengenai desain 	protokol arsip digital dengan pendekatan sederhana namun efektif. Hasil penelitian dapat menjadi referensi dalam studi lanjut mengenai arsip digital di berbagai konteks. Dengan demikian, penelitian ini memperkuat dasar teoritis dalam bidang manajemen arsip digital.

2. ### Manfaat Praktis {#manfaat-praktis}

   Penelitian ini bermanfaat bagi lembaga arsip sebagai acuan dalam merancang protokol berbasis *Flat file*. Rekomendasi penelitian dapat membantu lembaga dengan keterbatasan sumber daya untuk tetap menjaga keamanan dan integritas arsip digital. Protokol yang disusun dapat dijadikan pedoman operasional dalam praktik sehari-hari. Selain itu, penelitian ini mendukung upaya nasional dalam mewujudkan kedaulatan data melalui penyimpanan lokal. Dengan demikian, hasil penelitian ini memberikan solusi praktis yang dapat langsung diterapkan oleh instansi pengelola arsip digital.


6. ## ***Review*** **Kajian Terdahulu** {#review-kajian-terdahulu}

1. Penelitian oleh Herman Setyawan (2025)  yang berjudul “Mengukur Efektivitas Sistem Pengarsipan Digital Perguruan Tinggi di Indonesia”  memiliki kesamaan dengan penelitian ini dalam hal fokus pada peningkatan efektivitas pengelolaan arsip digital dalam suatu institusi. Keduanya sama-sama menyoroti pentingnya efisiensi dalam proses penyimpanan, pencarian, serta pengelolaan arsip sebagai bagian dari transformasi digital organisasi. Selain itu, penelitian tersebut juga menekankan peran standar metadata dan pengelolaan sistem yang baik sebagai faktor kunci keberhasilan, yang sejalan dengan penelitian ini dalam upaya merancang protokol penyimpanan arsip digital yang terstruktur dan dapat meningkatkan kualitas pengelolaan data secara keseluruhan. 

   Meskipun penelitian Herman Setyawan (2025) berhasil menunjukkan dampak positif sistem arsip digital terhadap efisiensi organisasi, kajian tersebut belum membahas secara spesifik aspek teknis terkait metode penyimpanan data, khususnya penggunaan *flat file* sebagai basis arsip digital. Penelitian tersebut lebih berfokus pada hasil implementasi dan faktor manajerial seperti pelatihan SDM dan standar metadata, tanpa mengulas bagaimana struktur penyimpanan, protokol keamanan, serta mekanisme integritas data dirancang pada level teknis. Oleh karena itu, terdapat celah penelitian dalam mengembangkan protokol penyimpanan arsip digital berbasis *flat file* yang tidak hanya mendukung efisiensi, tetapi juga menjamin keamanan, keaslian, dan keberlanjutan data dalam jangka panjang.

2. Penelitian oleh Lailul Mursyidah, Rita Ambarwati Sukmono, dan Laila Ihza Masithah (2020) yang berjudul “Transformation of Digital Archive management: Case Study of Dynamic Archives Information System Implementation at SMA Negeri 2 Sidoarjo” memiliki kesamaan dengan penelitian ini dalam hal fokus pada pengelolaan arsip digital di lingkungan institusi. Keduanya sama-sama menyoroti pentingnya sistem yang mampu meningkatkan efektivitas pengelolaan, aksesibilitas, serta pemanfaatan arsip digital oleh pengguna. Selain itu, penelitian tersebut juga menekankan peran sistem informasi arsip (seperti SIKD) dalam mendukung transformasi digital, yang sejalan dengan tujuan penelitian ini dalam mengembangkan pendekatan penyimpanan arsip digital yang lebih efisien dan terstruktur. Dengan demikian, kedua penelitian sama-sama berada dalam ranah pengembangan sistem arsip digital yang adaptif terhadap kebutuhan organisasi.  
   Meskipun penelitian tersebut berhasil menunjukkan efektivitas implementasi sistem arsip digital berbasis aplikasi, kajiannya belum menyentuh aspek teknis mendalam terkait protokol penyimpanan arsip digital, khususnya yang berbasis *flat file*. Penelitian tersebut lebih berfokus pada penggunaan aplikasi dan dampaknya terhadap pengguna, tanpa membahas bagaimana data arsip disimpan, diamankan, dan dijaga integritasnya pada level struktur file. Selain itu, tidak terdapat pembahasan mengenai solusi penyimpanan yang ramah terhadap keterbatasan sumber daya, seperti pendekatan *local first* berbasis *flat file*. Oleh karena itu, terdapat celah penelitian dalam merancang protokol arsip digital yang sederhana namun aman, efisien, dan dapat diimplementasikan pada institusi dengan infrastruktur terbatas.  
     
3. Artikel jurnal yang berjudul “Penjelasan basis data lanjutan mengenai flat-files model” yang ditulis Ai Cahyanti, p enelitian yang dilakukan oleh Ai Cahyanti memiliki kesamaan dengan penelitian ini dalam hal fokus pada pemahaman dasar mengenai *flat file* sebagai model penyimpanan data. Keduanya sama-sama menempatkan *flat file* sebagai objek kajian utama dan mengakui perannya sebagai bentuk penyimpanan yang sederhana, efisien, serta mudah diakses. Selain itu, penjelasan mengenai struktur data, tipe file, serta mekanisme manipulasi dasar dalam penelitian tersebut memberikan landasan konseptual yang relevan bagi penelitian ini dalam memahami karakteristik teknis *flat file*. Dengan demikian, penelitian Cahyanti dapat menjadi pijakan teoritis dalam mengembangkan pemanfaatan *flat file* pada konteks yang lebih luas.  
   Meskipun penelitian Ai Cahyanti memberikan pemahaman teknis yang kuat mengenai *flat file*, kajian tersebut masih terbatas pada aspek konseptual dan belum menyentuh implementasi dalam pengelolaan arsip digital. Penelitian tersebut tidak membahas aspek penting seperti keamanan informasi, integritas data, autentikasi, serta kebutuhan preservasi jangka panjang yang menjadi inti dalam sistem kearsipan digital. Selain itu, tidak terdapat pembahasan mengenai protokol atau standar operasional yang dapat diterapkan dalam konteks kelembagaan. Oleh karena itu, terdapat celah penelitian dalam mengembangkan *flat file* dari sekadar model data menjadi suatu sistem penyimpanan arsip digital yang terstruktur, aman, dan berkelanjutan melalui penyusunan protokol informasi yang komprehensif.  
     
4. Penelitian oleh Lawnik, Pełka, dan Kapczyński (2020) memiliki kesamaan dengan penelitian ini dalam hal fokus pada pemanfaatan *flat file* sebagai media penyimpanan data yang masih relevan di era modern. Keduanya menekankan bahwa *flat file* tidak sepenuhnya usang, melainkan memiliki keunggulan dalam hal kesederhanaan, efisiensi akses, serta kompatibilitas lintas platform. Selain itu, kedua penelitian juga melihat potensi *flat file* sebagai solusi alternatif bagi kebutuhan penyimpanan data tertentu, khususnya pada kondisi yang tidak memerlukan kompleksitas sistem basis data relasional. Penekanan pada efisiensi teknis dan kemudahan implementasi menjadi titik temu yang memperkuat argumen bahwa *flat file* masih layak dikaji dan dikembangkan lebih lanjut.  
   Meskipun penelitian Lawnik, Pełka, dan Kapczyński (2020) berhasil menunjukkan peningkatan efisiensi dalam pengelolaan *flat file*, kajian tersebut belum menyentuh aspek kearsipan digital secara komprehensif. Penelitian tersebut tidak membahas isu penting seperti keamanan informasi, integritas data jangka panjang, autentikasi, serta standar metadata yang menjadi elemen krusial dalam pengelolaan arsip digital. Selain itu, belum terdapat pembahasan mengenai protokol penyimpanan yang terstruktur dan sesuai dengan prinsip preservasi digital. Oleh karena itu, terdapat celah penelitian dalam mengembangkan protokol *flat file* yang tidak hanya efisien secara teknis, tetapi juga mampu memenuhi kebutuhan arsip digital yang menuntut keandalan, keamanan, dan keberlanjutan dalam jangka panjang  
     
5. Penelitian oleh Arpaci-Dusseau dan Arpaci-Dusseau (2018) memiliki kesamaan dengan penelitian ini dalam fokus terhadap aspek keandalan dan keamanan penyimpanan data digital. Keduanya sama-sama menyoroti pentingnya mekanisme teknis yang menjamin konsistensi data, khususnya dalam kondisi kegagalan sistem (crash). Konsep seperti *crash consistency*, *write ordering*, dan *journaling* yang dibahas dalam penelitian tersebut sejalan dengan upaya penelitian ini dalam memastikan integritas, keaslian, dan keberlanjutan arsip digital berbasis *flat file*. Selain itu, kedua penelitian juga menempatkan sistem operasi sebagai komponen kunci yang mempengaruhi bagaimana data disimpan, diproses, dan dilindungi secara internal.  
   Meskipun penelitian Arpaci-Dusseau dan Arpaci-Dusseau (2018) memberikan pemahaman mendalam mengenai mekanisme internal sistem operasi dalam menjaga konsistensi data, penelitian tersebut belum secara spesifik membahas penerapan konsep tersebut dalam konteks pengelolaan arsip digital berbasis *flat file*. Fokus mereka lebih pada aspek sistem file dan kernel, bukan pada pengembangan protokol informasi yang dapat digunakan secara praktis oleh lembaga arsip. Oleh karena itu, terdapat celah penelitian dalam mengintegrasikan prinsip-prinsip *crash consistency* dan manajemen file tingkat OS ke dalam protokol penyimpanan arsip digital yang terstruktur, aplikatif, dan sesuai dengan kebutuhan preservasi jangka panjang.  
