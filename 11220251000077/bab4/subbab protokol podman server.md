## podman server
Penerapan Podman Server pada penelitian ini digunakan sebagai bagian dari infrastruktur pengelolaan arsip digital berbasis flat file yang dijalankan melalui layanan Forgejo. Penggunaan container dilakukan
untuk mendukung pengelolaan layanan arsip digital secara terpisah sehingga proses operasional sistem dapat berjalan dengan lebih stabil dan terstruktur. Berdasarkan hasil wawancara dengan ketua organisasi,
kebutuhan terhadap sistem arsip digital muncul akibat meningkatnya jumlah arsip digital native yang sebelumnya masih dikelola secara tidak terstruktur (“..................................................
...............” [isi hasil wawancara], Nama Informan, komunikasi pribadi, Tanggal Wawancara). Pernyataan tersebut menunjukkan bahwa kebutuhan utama organisasi tidak hanya terletak pada media penyimpanan
arsip, tetapi juga pada penerapan protokol sistem yang mampu menjaga konsistensi pengelolaan informasi digital.

Dalam implementasinya, protokol server dikembangkan melalui penggunaan Podman sebagai lingkungan container untuk menjalankan layanan arsip digital. Berdasarkan hasil wawancara dengan container manager,
penggunaan Podman dipilih karena memiliki mekanisme isolasi layanan yang lebih ringan dan fleksibel dalam pengelolaan container (“.................................................................” 
[isi hasil wawancara], Nama Informan, komunikasi pribadi, Tanggal Wawancara). Selain itu, penggunaan container memungkinkan pemisahan fungsi layanan, volume penyimpanan, dan proses operasional sistem 
sehingga risiko gangguan terhadap arsip digital dapat diminimalkan. Hasil wawancara dengan divisi DevOps juga menunjukkan bahwa integrasi server dengan protokol keamanan dilakukan untuk menjaga integritas 
dan keamanan arsip digital yang tersimpan pada sistem (“.................................................................” [isi hasil wawancara], Nama Informan, komunikasi pribadi, Tanggal Wawancara).
Oleh karena itu, subbab ini membahas struktur, mekanisme, dan implementasi protokol Podman Server sebagai bagian dari sistem pengelolaan arsip digital berbasis flat file.

### Perangkat Podman Server
#### spesifikasi server podman
#### standar kesehatan hardisk

### Partioning
#### pembagian partisi
#### konfigurasi penyimpanan

### package

### konfigurasi jaringan

### konfigurasi aide

### konfigurasi podman

### alur kerja podman server untuk arsip digital
