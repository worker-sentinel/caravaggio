# METODE PENELITIAN

## Jenis Penelitian

Jenis penelitian ini akan menggunakan design and development dengan pendekatan berbasis pengembangan model. Penelitian pengembangan desain adalah studi komprehensif tentang proses desain, pengembangan, dan evaluasi yang bertujuan untuk memberikan landasan empiris bagi pengembangan produk, alat pendidikan atau non-pendidikan, dan model baru atau yang sudah ada; Pengembangan produk sendiri (Richey & Klein, 2007).

Analisis, perencanaan, produksi, & penilaian bisa sebagai penekanan penelitian design and development, selain itu penelitian design and development pula bisa serius dalam desain & pengembangan produk & indera atau dalam pengembangan, validasi, & penggunaan model. Tujuan akhir dari penelitian desain dan pengembangan model adalah untuk menciptakan pengetahuan baru, biasanya dalam bentuk model desain baru atau yang sudah ada, yang kemudian disempurnakan. Tujuan akhir dari penelitian desain dan pengembangan model adalah untuk menciptakan pengetahuan baru, biasanya dalam bentuk model desain baru atau yang sudah ada, yang kemudian disempurnakan. 

Dalam konteks penelitian ini, pendekatan DDR diaplikasikan untuk merancang dan mengembangkan arsitektur infrastruktur perpustakaan digital berbasis kontainer (Docker) yang dioptimalkan dengan algoritma penyeimbangan beban. Proses ini mengikuti empat tahapan utama sesuai kerangka kerja Richey dan Klein (2007), yaitu:

1. Analisis (Analysis)
Tahap awal ini difokuskan pada identifikasi hambatan teknis pada server SLiMS konvensional yang sering mengalami kegagalan akses saat beban trafik tinggi. Analisis kebutuhan sistem mencakup spesifikasi image Docker yang diperlukan, serta penentuan bobot parameter dalam algoritma Dynamic Weighted Round Robin yang akan diimplementasikan untuk menjamin High Availability.

2. Desain (Design)
Pada tahap ini, dirancang sebuah model infrastruktur multi-container menggunakan Docker Compose. Rancangan ini menempatkan sebuah Load Balancer sebagai gerbang utama yang mendistribusikan trafik ke beberapa instans kontainer SLiMS secara dinamis. Desain model ini bertujuan untuk memastikan bahwa distribusi beban kerja tidak hanya berdasarkan urutan, tetapi juga mempertimbangkan kapasitas resource (CPU dan RAM) dari masing-masing kontainer.

3. Pengembangan (Development)
Tahap produksi melibatkan pembangunan (build) dan penyebaran (deployment) infrastruktur di dalam lingkungan Docker. Pada fase ini, skrip konfigurasi dieksekusi untuk menciptakan ekosistem perpustakaan digital yang terisolasi namun terintegrasi. Algoritma Dynamic Weighted Round Robin dikonfigurasikan pada tingkat jaringan kontainer untuk memastikan komunikasi antar-node berjalan sesuai dengan model yang telah dirancang.

4. Evaluasi (Evaluation)
Tahap akhir adalah validasi empiris terhadap model yang dikembangkan. Untuk mendapatkan data yang akurat dan objektif di tahun 2026 ini, penelitian menggunakan dua instrumen pengumpulan data utama:

Apache JMeter: Instrumen ini digunakan untuk melakukan pengujian beban (load testing) dan pengujian stres (stress testing). JMeter akan mensimulasikan ratusan hingga ribuan akses pemustaka secara simultan ke pangkalan data SLiMS. Data yang dikumpulkan melalui instrumen ini meliputi Response Time, Throughput, dan Error Rate untuk mengukur efisiensi distribusi beban.

Observasi Sistem secara Real-Time: Observasi dilakukan dengan memantau metrik performa internal pada Docker Engine menggunakan alat monitoring. Observasi ini bertujuan untuk mencatat pemanfaatan sumber daya (Resource Usage) pada setiap kontainer, memastikan bahwa tidak ada satu node pun yang mengalami bottleneck sementara node lainnya dalam kondisi idle.

Melalui rangkaian tahapan DDR ini, diharapkan tercipta sebuah model infrastruktur perpustakaan digital yang tidak hanya mutakhir secara teknologi, tetapi juga memiliki landasan empiris yang kuat dalam menjaga stabilitas layanan informasi bagi masyarakat luas.

## Populasi

Populasi sendiri mencakup seluruh unsur atau kelompok yang kriterianya sesuai dengan penelitian. Populasi tidak hanya berfungsi sebagai subjek penelitian tetapi juga sebagai sumber data yang terverifikasi (Asrulla et al., 2023). Dalam penelitian design and development populasi bisa menggunakan sumber yang bukan manusia untuk dijadikan fokus penelitian.

## Teknik Pengumpulan Data

Dalam penelitian, teknik pengumpulan data digunakan peneliti untuk memperoleh informasi yang diperlukan dari berbagai sumber dan objek yang dibahas. Pengumpulan data dalam penelitian desain dan pengembangan mencakup berbagai teknik, antara lain catatan kerja, survei dan kuesioner, wawancara, observasi langsung, penggunaan website, penggunaan perangkat lunak, dan penggunaan laboratorium (Richey & Klein, 2007). Pada penelitian ini data yang didapatkan akan melalui metode Try-out data. 

Try-out data adalah data yang didapatkan secara langsung memakai sumber daya yang dipakai dan data ini akan menjelaskan kesuksesan dan kegagalan model. Berikut cara yang digunakan untuk memperoleh try-out data:

a. Penggunaan Perangkat Lunak
Penggunaan perangkat lunak untuk mengumpulkan data dalam penelitian desain dan pengembangan mengacu pada penggunaan aplikasi atau program komputer. Penggunaan perangkat lunak ini untuk mengumpulkan, mengelola, dan menganalisis data yang berkaitan dengan proses pembuatan produk, alat, dan model.
Perangkat lunak ini digunakan untuk membuat desain load balancer untuk pemerataan beban server, tetapi selain itu juga dapat menggunakan alat ini untuk mendapatkan hasil desain tersebut.
 Data yang dikumpulkan berupa screenshot pada saat proses pengembangan model, pada saat pengujian model, dan pada saat implementasi model.

b. Observasi
Observasi merupakan metode pengumpulan data yang melibatkan pengamatan pribadi terhadap subjek & konteks penelitian (Ardiyansyah et al., 2023). Dalam penelitian ilmiah, observasi dilakukan secara eksklusif tanpa hegemoni dari peneliti buat menerima data yang objektif dan sistematis mengenai subjek atau objek penelitian.
Observasi yang dilakukan pada penelitian ini untuk mendukung uji coba contoh yang didesain oleh peneliti dan untuk mengumpulkan data output menurut contoh sebagai akibatnya bisa diperoleh berita yang sesungguhnya.

## Teknik Analisis Data

Setelah data dikumpulkan melalui perangkat lunak dan observasi, kemudian dianalisis untuk menghasilkan data yang sah akan ditampilkan dalam hasil penelitian. Berikut adalah cara analisisnya:
1. Pencitraan Model Awal
2. Catatan Eksperimen
3. Observasi Data Eksperimen
4. Seleksi Data Eksperimen
5. Implementasi Data Eksperimen
6. Deskripsi Protype

## Tempat dan Jadwal Penelitian 

1. Tempat Penelitian
Penelitian ini dilakukan di PT Lektor Media Utama yang berlokasi di Tokopedia Tower Lantai 22 Unit F, Jl. Prof. Dr. Satrio Kav. 11, RT 003, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan

2. Jadwal Penelitian
Peneliti melakukan tahap observasi awal pada bulan September tahun 2024, setelah melakukan observasi awal dan menemukan masalah yang ada pada tempat penelitian peneliti menyusun proposal pada bulan September hingga bulan November dengan bimbingan dari dosen pembimbing. Setelah disetujuinya proposal, peneliti melakukan seminar pada bulan Desember.

Setelah disetujui oleh dosen penguji I dan dosen penguji II, peneliti melanjutkan bimbingan untuk melakukan penyusunan skripsi pada bulan Januari hingga bulan Maret. Peneliti berharap pada bulan April sudah melakukan sidang skripsi.