2. Pola Berjalannya Sistem (Jaringan ke Klien)
Pertanyaan: Bisa Anda jelaskan bagaimana pola berjalannya sistem ini dari jaringan ke server ke aplikasi dan ke klien?
Jawaban Eksak Narasumber:

"Dari internet difilter. Terus lari ke firewall regionalnya. Lari ke server, server difilter lagi port-nya ada request atau nggak. Baru dikasih ke server relay. Dari relay baru nantinya difilter lagi. Lari ke server data. Dari server data dicek kalau memang autentikasi dari servernya oke, baru dibalikin ke user."

3. Kebijakan untuk Anggota dan Non-Anggota
Pertanyaan: Bisa ada jelaskan kebijakan apa saja yang diberikan kepada anggota dan non...
Jawaban Eksak Narasumber:

"Kita nggak pernah bijak, kita kejam. [...] Kekejaman."

4. Konsep Arsip (In-In, In-Out, Out-In)
Pertanyaan: Bisa Anda jelaskan konsep arsip in out, out in dan in in?
Jawaban Eksak Narasumber:

In-In: "In-in, itu pakai jaringan serat optik mentah."

In-Out: "In-out dari jaringan lokal langsung ditunnel ke jaringan publik."

Out-In: "Out-in itu dari jaringan publik langsung ke jaringan lokal."

5. Tata Naskah Dinas ke Dalam Sistem
Pertanyaan: Bisa Anda ceritakan bagaimana tata naskah dinas diterjemahkan ke dalam sistem ini?
Jawaban Eksak Narasumber:

"Printing markdown. [...] Kita sebenarnya bikinnya itu udah semuanya dari markdown. Kemudian baru tuh nantinya diconvert sesuai kebutuhan. Cuman yang valid di kita itu markdown-nya, bukan website-nya nantinya setelah diconvert, bukan PDF-nya."

6. Sistem Klasifikasi Arsip
(Catatan: Pertanyaan ini dilempar dan dijawab secara mendetail oleh rekan narasumber bernama "Bran" dengan membacakan teks)
Pertanyaan: Sistem klasifikasinya gimana berarti di sini?
Jawaban Eksak Narasumber (Bran):

"Jadi tuh... notasi domain utama terbagi menjadi tiga karakter yang terdiri dari alfanumerik. Nah setiap karakter itu adalah rep presentasi dari esensi dan metodologi pengembangan informasi. Berikut adalah pembagian dari karakter notasi domain utama:

Discere: Informasi dibangun menggunakan pendekatan yang bisa diukur, diuji, dan dipahami dengan cara yang sama bagi setiap individu.

Fides: Informasi yang dibangun menggunakan pendekatan atas keyakinan terhadap suatu kekuatan yang sifatnya superior berada di luar eksistensi keberadaan individu dan domain discere.

Transcendere: Informasi dibangun dengan menggunakan instrumen yang bersifat konsensus baik yang sifatnya sementara atau permanen. Jenis informasi ini bisa dipahami secara bersamaan tanpa diperlukan kasus belii dari substansi dari keberadaan suatu person, agen, atau formater.

Figuratio: Jadi informasi dibangun menggunakan landasan imajinasi, insting, atau instrumen lainnya yang berada di luar dari domain discere, fides, dan transcendere informasi yang dihasilkan menggunakan mesin.

Aturannya:
Yang pertama adalah menentukan aturan domain antara fides dan discere. Jika proporsi informasi dalam teks maka discere menjadi lebih dominan daripada fides baru kemudian diikuti oleh figuratio atau transcendere.
Aturan yang kedua, jika nilai domain transcendere sama dengan figuratio maka transcendere dianggap lebih dominan daripada figuratio sehingga penulisan notasi transcendere mendahului notasi figuratio."

7. Ketahanan Sistem Terhadap Gangguan
Pertanyaan: Bisa Anda ceritakan bagaimana Anda merancang sistem ini mampu bertahan ketika terjadi gangguan atau kegagalan sistem?
Jawaban Eksak Narasumber:

"Kita nggak bisa klaim sejauh mana. Pokoknya kemarin itu untuk install aplikasi aja nggak bisa. Jadi kalau lu belum nginstal di awal, lu nggak bisa tambah aplikasi. Karena emang ada policy nggak boleh lagi nambah user baru. karena biasanya peretas itu nambah user baru untuk dapet sistem di kita gaboleh lagi nambah user baru gaboleh lagi nambah grup baru
bukan hanya nambah user secara manual melainkan aplikasi yang membutuhkan user juga ga bisa berjalan di kita kaya nginx itu butuh user nah user dia itu gabakal bisa kebuat dikita dan ga bakal berjalan itu nginx, dan semuaktifitas di catata di auditd
Terus semua aktivitasnya itu kita monitoring diaudit. Terus lalu lintasnya itu terbagi jadi tiga. Ada pemiliknya, ada admin, ada guest. Dengan jaringan yang berbeda-beda. Dan sistem autentikasi yang berbeda-beda dari ketiga orang tersebut. [...] Kalau yang guest nih harus pakai OTP, kalau yang admin pakai password, kalau yang admin(root) pakai file."
