## Latar Belakang  
    Ada perubahan besar dalam cara orang mengonsumsi informasi, di mana generasi sekarang lebih cepat merespons sumber media yang terus berubah. Sayangnya, cara penyajian informasi di banyak perpustakaan masih tertinggal zaman. Riset ini dianggap penting karena ada kesenjangan besar antara teori penyimpanan koleksi digital dan cara penerapannya. Membuat sebuah ekosistem pemutar multimedia adalah langkah baru untuk menyatukan Ilmu Perpustakaan dengan teknologi terkini, sehingga perpustakaan bukan hanya tempat menyimpan buku, tetapi juga pusat interaksi digital yang penting.

    Suara adalah bentuk informasi yang paling utama. Koleksi seperti cerita lisan, arsip musik tradisional, buku yang dibacakan, rekaman diskusi, dan catatan karya seni dari studio musik adalah warisan budaya yang berharga. Namun, koleksi audio sering diabaikan oleh sistem katalog yang ada. Pemutar musik yang terhubung berfungsi sebagai alat penting untuk menemukan kembali informasi audio. Tanpa pemutar khusus yang bisa mengakses data penting, seperti nama pencipta musik, kualitas suara, nuansa, atau jenis alat musik, koleksi audio yang berharga hanya akan menjadi file tak terpakai yang membebani penyimpanan server.

    Titik temu antara Ilmu Perpustakaan dan pengembangan perangkat lunak adalah bidang penelitian yang masih jarang diulas secara mendalam. Topik ini butuh jawaban untuk berbagai masalah yang rumit dan saling terkait: dari membuat tampilan pengguna yang mudah dipakai, membangun susunan database yang baik, sampai mengatasi masalah logika tampilan agar audio bisa diputar lancar tanpa membuat server lambat. Menggabungkan teknologi pengelolaan media ke dalam perpustakaan adalah sebuah percobaan untuk melihat seberapa jauh konsep perpustakaan lama bisa diubah dan diperbarui menjadi platform digital modern dalam skala besar.
## Identifikasi Masalah

## Batasan Masalah
    ## A. Batasan Masalah

Mengingat luasnya cakupan "multimedia" dan "pengelolaan perpustakaan", penelitian ini diberikan batasan sistem agar implementasi tetap fokus dan dapat dieksekusi secara terukur:

1. **Format Multimedia yang Dikelola:**
   Penelitian ini membatasi objek "multimedia" hanya pada koleksi digital berbasis audio (format `.mp3`, `.wav`) dan video standar (format `.mp4` atau `.webm`). Sistem tidak mencakup format media interaktif (seperti *game*, simulasi 3D, atau *Virtual Reality*) maupun *streaming* media resolusi sangat tinggi (*4K/8K lossless*) yang menuntut infrastruktur server skala besar.

2. **Lingkup Implementasi Sistem (*Platform*):**
   Implementasi konsep *multimedia player* dibatasi pada antarmuka berbasis web (*web-based frontend*). Penelitian ini tidak mengembangkan aplikasi *native* berbasis *mobile* (Android/iOS) atau aplikasi *desktop* mandiri. *Player* akan diintegrasikan sebagai fungsionalitas tambahan (*embedded*) dalam purwarupa sistem manajemen perpustakaan yang ada.

3. **Fokus Fungsionalitas Pengelolaan:**
   Kata "pengelolaan" dalam penelitian ini difokuskan pada aspek pengorganisasian metadata media (menggunakan standar seperti Dublin Core) dan aksesibilitas pemustaka melalui *user interface* (UI) saat memutar media. Penelitian ini tidak membahas isu Manajemen Hak Cipta Digital (DRM - *Digital Rights Management*), enkripsi file tingkat lanjut, atau sistem monetisasi konten.

---
## Rumusan Masalah
    Berdasarkan latar belakang dan identifikasi masalah yang telah dipaparkan, maka rumusan masalah dalam penelitian ini adalah sebagai berikut:

1. Bagaimana mengimplementasikan konsep dan arsitektur *multimedia player* (audio dan video) ke dalam sistem informasi pengelolaan perpustakaan berbasis web?

2. Bagaimana perancangan antarmuka (*User Interface*) *multimedia player* tersebut dapat memfasilitasi temu kembali informasi dan aksesibilitas pemustaka terhadap koleksi non-cetak di perpustakaan?
## Tujuan dan Manfaat Penelitian
