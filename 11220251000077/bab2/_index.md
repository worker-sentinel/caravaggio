  # **BAB II** 

   # **KERANGKA TEORI**

7. ## **Arsip Digital Native** {#arsip-digital-native}

   Arsip digital native adalah arsip yang sejak awal diciptakan dalam format elektronik tanpa melalui proses konversi dari media fisik. Jenis arsip ini memiliki karakteristik unik karena otentisitas
   dan integritasnya bergantung pada perangkat lunak, format file, serta sistem yang digunakan saat penciptaannya. Menurut Gilliland (2020), arsip digital native memiliki risiko tinggi kehilangan
   konteks dan makna jika tidak disertai metadata yang lengkap sejak awal. Oleh karena itu, keberadaan standar deskriptif sangat penting untuk menjamin arsip digital native tetap dapat dipahami dan
   dimanfaatkan di masa depan. Dalam konteks hukum nasional, Undang-Undang Nomor 43 Tahun 2009 tentang Kearsipan menegaskan bahwa arsip elektronik, termasuk arsip digital native, memiliki kekuatan
   hukum yang sama dengan arsip konvensional (Republik Indonesia, 2009). Hal ini mengimplikasikan bahwa lembaga kearsipan wajib mengembangkan protokol pengelolaan yang mampu menjamin keberlanjutan
   arsip digital native. 

9. ## **Protokol Keamanan informasi** {#protokol-kearsipan}

   Protokol dalam konteks kearsipan digital adalah seperangkat aturan, standar, dan mekanisme yang digunakan untuk mengatur penciptaan, penyimpanan, akses, serta preservasi arsip. Menurut Duranti
   dan Franks (2019), protokol berfungsi untuk menjaga agar arsip digital tetap otentik, dapat dipercaya, dan konsisten meskipun berada dalam sistem teknologi yang berbeda. Dalam praktiknya, protokol
   tidak hanya mengatur aspek teknis, tetapi juga mencakup kebijakan akses, keamanan, dan interoperabilitas agar arsip dapat digunakan lintas lembaga. Bagi arsip digital berbasis *Flat file*, protokol
   sangat diperlukan untuk menghindari inkonsistensi penamaan file, ketiadaan metadata, serta lemahnya perlindungan terhadap manipulasi data. Di Indonesia, urgensi penggunaan protokol dalam pengelolaan
   arsip juga sejalan dengan amanat UU No. 43 Tahun 2009 yang menekankan perlunya standar baku dalam penyelenggaraan kearsipan (Republik Indonesia, 2009). Dengan demikian, teori protokol menjadi pondasi
   penting untuk merancang pedoman yang dapat diadopsi dalam pengelolaan arsip digital sederhana. Protokol arsip berbasis *Flat file* diharapkan mampu menjembatani kebutuhan praktis dengan prinsip
   ilmiah kearsipan digital.

   

11. ## **Flat file** {#flat-file}

   *Flat file* adalah bentuk penyimpanan data sederhana yang menggunakan struktur tabel dua dimensi atau file teks dengan pemisah tertentu tanpa adanya relasi antar tabel. Sistem ini berbeda dengan 
   basis data relasional karena tidak memiliki mekanisme *query* yang kompleks, sehingga lebih mudah digunakan untuk penyimpanan data dalam skala kecil hingga menengah. Menurut Silberschatz, Korth, 
   dan Sudarshan (2020), *Flat file* sering dipakai sebagai solusi penyimpanan awal sebelum organisasi beralih ke sistem basis data yang lebih kompleks. Dalam konteks kearsipan digital, *Flat file* 
   tetap relevan terutama bagi lembaga dengan keterbatasan infrastruktur teknologi karena sifatnya yang ringan dan mudah dioperasikan. Namun, kelemahan utama *Flat file* adalah rawan duplikasi data, 
   kesulitan dalam menjaga konsistensi, serta minimnya fitur keamanan. Oleh sebab itu, penerapan protokol yang tepat menjadi penting agar *Flat file* dapat mendukung prinsip kearsipan digital seperti 
   autentisitas, integritas, dan aksesibilitas. Dengan demikian, *Flat file* dapat diposisikan sebagai alternatif media arsip digital yang layak jika dilengkapi aturan dan standar pengelolaan yang 
   jelas.

   

   

11. ## **Operation System** {#operation-system}

    Sistem operasi (Operating System/OS) merupakan perangkat lunak inti yang mengelola sumber daya perangkat keras yang di modifikasi untuk menjalankan sistem arsip digital berbasis flat file. D
    alam konteks pengelolaan arsip digital, sistem operasi memiliki peran penting karena seluruh proses penyimpanan, pembacaan, pengorganisasian, serta pengamanan berkas berlangsung melalui mekanisme
    yang dikendalikan oleh OS. Silberschatz, Galvin, dan Gagne (2020) menjelaskan bahwa OS bertanggung jawab terhadap pengaturan *file system*, manajemen metadata, kontrol akses, serta mekanisme
    penyimpanan persisten yang memastikan berkas dapat dipertahankan dalam kondisi stabil.

    Pengelolaan arsip digital berbasis *flat file* berdasarkan kepada sistem operasi yang mana nantinya menangani operasi dasar seperti *read*, *write*, *open*, dan *close* pada struktur direktori
    dan tanpa menggunakan layer aplikasi tambahan diatas aplikasi native yang berjalan di desktop. Tanenbaum dan Bos (2019) menegaskan bahwa OS menyediakan struktur hierarkis yang memungkinkan file
    dikelompokkan, diberi hak akses, dan disimpan dengan keamanan tertentu. Pada sistem arsip digital, hal ini berhubungan langsung dengan aspek keteraturan file, konsistensi penamaan, serta
    aksesibilitas arsip oleh pengguna berwenang. Dengan demikian, kinerja protokol arsip berbasis *flat file* tidak hanya ditentukan oleh aturan kearsipan, tetapi juga dipengaruhi oleh kapabilitas
    sistem operasi dalam memproses file secara efisien.

    Selain itu, aspek keandalan penyimpanan pada OS menjadi penting terutama ketika menilai integritas arsip digital. Arpaci-Dusseau dan Arpaci-Dusseau (2018) menjelaskan bahwa sistem operasi
    modern menyediakan mekanisme seperti *write ordering*, *journaling*, dan *crash consistency* untuk mencegah kerusakan file akibat kegagalan sistem. Mekanisme ini sangat relevan untuk penelitian
    ini, karena protokol arsip berbasis *flat file* memerlukan dasar penyimpanan yang stabil, tahan gangguan, serta mampu menjaga keutuhan arsip dalam jangka panjang. Oleh karena itu, protokol sistem
    operasi menjadi landasan teknis yang mendukung analisis efektivitas protokol arsip digital yang diteliti.

    

13. ## **Teori Difusi Inovasi** {#teori-difusi-inovasi}

    Teori Difusi Inovasi dikemukakan oleh Everett M. Rogers (1962; 2003\) untuk menjelaskan bagaimana suatu ide, praktik, atau teknologi baru diperkenalkan, disebarluaskan, dan akhirnya diadopsi dalam
    suatu sistem sosial. Difusi inovasi terjadi melalui proses komunikasi antar individu atau antar organisasi dalam kurun waktu tertentu, yang dipengaruhi oleh faktor lingkungan, sosial, dan
    kelembagaan. Dalam konteks pengelolaan arsip digital, teori ini memberikan dasar untuk memahami bagaimana lembaga atau organisasi menerima dan menerapkan teknologi baru seperti protokol arsip
    berbasis flat file sebagai bagian dari sistem pengelolaan informasi.

    Menurut Rogers (2003), terdapat lima tahapan utama dalam proses adopsi inovasi, yaitu pengetahuan (knowledge), persuasi (persuasion), keputusan (decision), implementasi (implementation), dan
    konfirmasi (confirmation). Tahapan pengetahuan muncul ketika individu atau lembaga mulai mengenal konsep inovasi baru, seperti penggunaan flat file untuk pengelolaan arsip digital. Tahap persuasi
    ditandai dengan proses pembentukan sikap terhadap inovasi, di mana kelebihan dan kelemahan sistem flat file dipertimbangkan berdasarkan kebutuhan organisasi. Keputusan diambil setelah melalui
    pertimbangan manfaat, efisiensi, dan keamanan, yang kemudian dilanjutkan pada tahap implementasi berupa penerapan protokol flat file dalam praktik pengarsipan digital. Pada tahap konfirmasi,
    organisasi mengevaluasi hasil penerapan dan menilai apakah inovasi tersebut memberikan dampak positif terhadap efektivitas dan keamanan arsip digital.

    Penerapan teori ini dalam penelitian berfungsi untuk memahami tingkat penerimaan dan adaptasi inovasi di lembaga yang diteliti. Penggunaan protokol flat file sebagai bentuk inovasi teknologi
    kearsipan dapat dianalisis melalui respon pengguna, efektivitas implementasi, serta kesesuaian dengan Empat Pilar Pengelolaan Arsip dan Model Cyber Resilience. Dengan demikian, teori Difusi Inovasi
    memberikan landasan teoritis untuk menjelaskan proses perubahan dan penyesuaian kelembagaan terhadap penerapan teknologi baru dalam tata kelola arsip digital.

    

15. ## **Empat Pilar Kearsipan** {#empat-pilar-kearsipan}

    Pengelolaan arsip digital yang efektif tidak hanya ditentukan oleh keberadaan sistem teknologi, tetapi juga oleh landasan kearsipan yang kokoh. Dalam konteks penelitian ini, efektivitas protokol
    arsip berbasis *Flat file* perlu dianalisis sejauh mana sesuai dengan prinsip-prinsip kearsipan. Salah satu teori yang relevan adalah empat pilar pengelolaan arsip dinamis, yaitu Tata Naskah Dinas
    (TND), Klasifikasi Arsip (KA), Jadwal Retensi Arsip (JRA), dan Sistem Klasifikasi Keamanan dan Akses Arsip (SKKAA). Keempat pilar ini merupakan instrumen utama yang ditetapkan ANRI untuk menjamin
    tertib administrasi, konsistensi komunikasi, kemudahan penataan, efisiensi penyimpanan, serta perlindungan arsip dari akses tidak sah (UU No. 43 Tahun 2009; ANRI, 2014; Rahayuningsih &
    Hastutiningrum, 2020). Dengan mengacu pada teori ini, penelitian dapat menilai apakah protokol *Flat file* mendukung praktik pengelolaan arsip yang sesuai standar, atau justru masih menyisakan k
    elemahan dalam aspek tata naskah, klasifikasi, retensi, maupun keamanan arsip digital.

1. Tata Naskah Dinas   
   Tata Naskah Dinas berfungsi sebagai pedoman penyusunan, penomoran, dan format naskah dinas yang digunakan dalam komunikasi resmi organisasi. Pilar ini menjamin bahwa setiap dokumen yang dihasilkan
   lembaga memiliki format yang seragam, autentik, dan konsisten. (ANRI, 2014).

3. Klasifikasi Arsip  
   Pilar Klasifikasi Arsip bertujuan untuk mengelompokkan arsip sesuai fungsi, tugas, atau kegiatan lembaga. Melalui pola klasifikasi yang sistematis, arsip dapat disusun secara hierarkis dengan kode
   tertentu sehingga memudahkan penataan dan temu kembali.

5. Jadwal Retensi Arsip  
   Jadwal Retensi Arsip adalah instrumen yang mengatur masa simpan arsip, baik arsip aktif maupun inaktif, hingga keputusan pemusnahan atau penyimpanan permanen. Pilar ini berfungsi untuk mengendalikan
   volume arsip agar tidak menumpuk dan membebani ruang penyimpanan.

7. Sistem Klasifikasi Keamanan dan Akses Arsip  
   Pilar terakhir adalah Sistem Klasifikasi Keamanan dan Akses Arsip, yang berfungsi menetapkan tingkat kerahasiaan dan hak akses terhadap arsip. Arsip dibedakan berdasarkan tingkat keterbukaannya,
   mulai dari arsip terbuka, terbatas, rahasia, hingga sangat rahasia.

# 

13. ## **Model Metric for Critical Infrastructure Cyber Resilience**  {#model-metric-for-critical-infrastructure-cyber-resilience}

    Model *Metric for Critical Infrastructure Cyber Resilience* merupakan kerangka konseptual yang dikembangkan untuk mengukur tingkat ketahanan siber pada infrastruktur kritis. Model ini
    membagi ketahanan ke dalam tiga domain utama, yaitu *cyber as a shield*, *cyber as a space*, dan *cyber as a sword*, yang masing-masing menekankan aspek pencegahan, pengelolaan risiko,
    serta pemulihan insiden (Sensors, 2025). Dengan menggunakan skala kapabilitas 0–5, model ini memungkinkan organisasi menilai sejauh mana sistem yang dimiliki mampu bertahan dan pulih dari
    serangan siber. Framework ini juga mengintegrasikan standar global seperti ISO/IEC 15504, NIST Cybersecurity Framework, dan COBIT, sehingga hasil penilaian dapat dijadikan tolok ukur internasional.
    Relevansi model ini dalam penelitian arsip digital adalah kemampuannya memberikan dasar pengukuran tentang sejauh mana protokol informasi untuk arsip digital berbasis *Flat file* mampu menjaga
    keamanan, integritas, dan ketersediaan arsip digital. Selain itu, model ini menegaskan bahwa ketahanan arsip digital tidak hanya bergantung pada aspek teknis, tetapi juga kesiapan organisasi dan
    kebijakan pengelolaan yang mendukung. Dengan demikian, teori ini menjadi acuan penting dalam menganalisis kekuatan dan kelemahan protokol arsip digital berbasis *Flat file*.

1. Cyber as a shield  
   meliputi *situational awareness*, *security assurance*, dan *active defense*. Fokusnya pada langkah-langkah pencegahan untuk melindungi sistem dari ancaman eksternal maupun internal

2. Cyber as a space  
   mencakup *risk management* dan *infrastructure resilience*, Fokus pada kemampuan sistem untuk tetap berfungsi meskipun terjadi insiden atau gangguan.

3. Cyber as a sword  
   menekankan *preparedness* dan *critical incident recovery*, Fokus pada kesiapan menghadapi insiden serta kemampuan sistem untuk pulih dengan cepat setelah gangguan.  
   

14. ## **Kerangka Berfikir** {#kerangka-berfikir}

    Kerangka berpikir penelitian ini disusun untuk menggambarkan alur logis dalam menganalisis efektivitas protokol informasi pada sistem arsip digital berbasis *flat file*. Penelitian berangkat dari
    tiga identifikasi masalah utama, yaitu masih kuatnya anggapan bahwa *flat file* tidak efektif untuk arsip digital, belum jelasnya peraturan keamanan yang mengatur penggunaan *flat file*, serta
    minimnya penelitian yang secara khusus membahas *flat file* sebagai alternatif praktis dalam pengelolaan arsip digital. Ketiga isu tersebut menunjukkan adanya kesenjangan pengetahuan yang perlu
    dikaji, sehingga menghasilkan rumusan masalah yang berfokus pada bagaimana proses penerapan protokol informasi dalam sistem arsip digital berbasis *flat file* serta kendala-kendala yang muncul
    selama implementasinya.

    Untuk menjawab rumusan masalah tersebut, penelitian ini memanfaatkan Teori Difusi Inovasi sebagai landasan konseptual untuk memahami bagaimana suatu inovasi dalam hal ini penggunaan *flat file*
    sebagai media arsip digital dikenali, dinilai, diputuskan, diterapkan, dan dievaluasi oleh organisasi. Lima tahap difusi inovasi (knowledge, persuasion, decision, implementation, dan confirmation)
    digunakan untuk membaca bagaimana Organisasi N menerima dan mengadopsi protokol berbasis *flat file*. Dengan teori ini, proses adopsi protokol tidak hanya dipahami dari sisi teknis, tetapi juga 
    dari dinamika sikap, penerimaan, dan keputusan para pengelola arsip digital.

    Selain itu, penelitian ini mengacu pada Empat Pilar Pengelolaan Arsip Kelembagaan yang terdiri atas Tata Naskah Dinas, Klasifikasi Arsip, Jadwal Retensi Arsip, dan Sistem Keamanan serta Akses
    Arsip. Keempat pilar tersebut digunakan sebagai instrumen analisis untuk menilai kesesuaian protokol *flat file* dengan standar pengelolaan arsip yang baik dan sistematis. Melalui pilar Tata
    Naskah Dinas, protokol dinilai dari aspek penataan dokumen; melalui Klasifikasi Arsip, protokol dianalisis dari struktur pengelompokan data; melalui Jadwal Retensi Arsip, protokol diukur dari
    pengaturan siklus hidup arsip; dan melalui pilar Keamanan dan Akses, protokol ditinjau dari aspek pengaturan hak akses dan tingkat kerahasiaan arsip.

    Untuk melengkapi aspek keamanan digital, kerangka berpikir ini juga memasukkan Model Metric for Critical Infrastructure Cyber Resilience. Model ini menyediakan tiga perspektif ketahanan siber,
    yaitu *Cyber as a Shield* yang menilai pencegahan ancaman, *Cyber as a Space* yang menilai kemampuan sistem tetap berfungsi meskipun terganggu, serta *Cyber as a Sword* yang melihat kemampuan
    sistem menghadapi insiden dan pulih setelah gangguan. Ketiga aspek ini digunakan untuk mengkaji sejauh mana protokol *flat file* mampu menjaga integritas, keamanan, dan keberlanjutan arsip digital.

    Dengan menggabungkan teori difusi inovasi, empat pilar kearsipan, dan model ketahanan siber, kerangka berpikir ini membentuk alur analisis yang komprehensif. Identifikasi masalah mengarah pada
    rumusan masalah, teori memberikan perspektif untuk menjawabnya, dan dua kerangka analisis utama digunakan untuk mengevaluasi efektivitas protokol *flat file*. Dengan demikian, penelitian ini
    memiliki arah yang jelas untuk menghasilkan pemahaman mendalam mengenai sejauh mana protokol informasi berbasis *flat file* dapat berfungsi secara efektif dalam sistem arsip digital kelembagaan.
