# nework
A. Opening — Konfirmasi Peran dan Konteks

1. Bisa Anda ceritakan secara lengkap peran dan tanggung jawab Anda dalam organisasi ini, khususnya selama proses deployment Gitrock berlangsung?
2. Bisa Anda ceritakan perjalanan Anda membangun infrastruktur jaringan di organisasi ini dari awal hingga kondisi saat ini?


B. Infrastruktur Jaringan

3. Bisa Anda jelaskan secara menyeluruh bagaimana arsitektur jaringan yang Anda bangun untuk mendukung ekosistem sistem ini, dari sisi topologi hingga komponen-komponen yang terlibat?
4. Bisa Anda ceritakan bagaimana proses Anda memastikan konektivitas antara server, desktop, dan aplikasi dalam ekosistem ini bisa berjalan dengan baik dan stabil?
5. Bisa Anda jelaskan protokol jaringan apa saja yang Anda gunakan dalam sistem ini beserta alasan dan pertimbangan di balik pemilihan masing-masing protokol tersebut?
6. Bisa Anda ceritakan bagaimana Anda merancang pembagian zona atau jalur jaringan untuk setiap komponen sistem — misalnya antara server, aplikasi, dan pengguna — dan apa pertimbangan di balik rancangan tersebut?


C. Keamanan dan Ketahanan Jaringan

7. Bisa Anda jelaskan bagaimana Anda merancang jaringan agar sistem tetap bisa berjalan dan pulih ketika terjadi gangguan atau kegagalan pada salah satu komponen?
8. Bisa Anda ceritakan mekanisme keamanan apa saja yang Anda terapkan di level jaringan dan bagaimana masing-masing mekanisme itu bekerja dalam ekosistem sistem ini?
9. Bisa Anda jelaskan bagaimana layer jaringan yang Anda bangun berinteraksi dengan sistem autentikasi seperti Keycloak atau Authelia, dan bagaimana alur traffic-nya dirancang?
10. Bisa Anda ceritakan apakah pernah terjadi kendala atau insiden selama proses deployment berlangsung di sisi jaringan, dan bagaimana proses penanganannya dari awal hingga selesai?


D. Hubungan dengan Tim Lain

11. Bisa Anda ceritakan bagaimana pola koordinasi dan komunikasi Anda dengan kedua developer selama proses deployment berlangsung, termasuk bagaimana keputusan teknis bersama diambil?
12. Bisa Anda jelaskan apakah ada keputusan atau rancangan jaringan yang harus Anda sesuaikan karena adanya kebutuhan dari sisi server atau aplikasi, dan bagaimana proses penyesuaian itu terjadi?
13. Bisa Anda ceritakan bagaimana alur komunikasi antara Anda dengan ketua organisasi, terutama ketika ada keputusan teknis jaringan yang memerlukan persetujuan atau arahan dari level pimpinan?

E. Closing — Refleksi

15. Bisa Anda ceritakan secara mendalam tantangan terbesar yang Anda hadapi dalam membangun infrastruktur jaringan untuk sistem seperti ini, dan bagaimana Anda menghadapinya?
16. Bisa Anda refleksikan kembali keseluruhan proses yang sudah berjalan — bagian mana yang menurut Anda paling perlu diperbaiki atau dirancang ulang jika prosesnya diulang dari awal?

# Developer bay
A. Opening — Konfirmasi Peran dan Konteks

1. Bisa Anda ceritakan secara lengkap peran dan tanggung jawab Anda dalam organisasi ini, khususnya selama proses deployment sistem arsip digital berlangsung?
2. Bisa Anda ceritakan bagaimana pembagian kerja antara Anda dengan developer lainnya dalam ekosistem sistem ini, dan bagaimana batasan tanggung jawab teknis itu disepakati?


B. Infrastruktur Server dan Enkripsi

3. Bisa Anda jelaskan secara menyeluruh bagaimana NBDE yang Anda kelola bekerja dalam ekosistem ini, termasuk bagaimana mekanisme enkripsi disk otomatisnya dirancang dan diintegrasikan dengan komponen lain?
4. Bisa Anda ceritakan bagaimana proses Anda merancang dan men-deploy NBDE, termasuk tantangan teknis yang Anda hadapi dan bagaimana Anda mengatasinya?
5. Bisa Anda jelaskan bagaimana Valkey berperan dalam ekosistem sistem ini, layanan mana saja yang bergantung padanya, dan bagaimana Anda memastikan performanya tetap optimal?


C. Sistem Autentikasi dan Keamanan Akses

6. Bisa Anda ceritakan bagaimana Anda merancang dan mengintegrasikan Keycloak sebagai sistem manajemen identitas dalam ekosistem ini, termasuk bagaimana alur autentikasi penggunanya berjalan dari awal hingga akhir?
7. Bisa Anda jelaskan bagaimana Authelia berperan dalam ekosistem ini dan bagaimana hubungannya dengan Keycloak — apakah keduanya bekerja secara paralel, hierarkis, atau saling melengkapi dalam lapisan yang berbeda?
8. Bisa Anda ceritakan bagaimana Vaultwarden diintegrasikan ke dalam sistem ini, siapa yang menggunakannya, dan bagaimana Anda memastikan keamanan credential yang tersimpan di dalamnya tetap terjaga?
9. Bisa Anda jelaskan bagaimana keseluruhan lapisan keamanan yang Anda bangun — NBDE, Keycloak, Authelia, dan Vaultwarden — bekerja sebagai satu kesatuan dalam melindungi sistem arsip digital ini?


D. MongoDB dalam Ekosistem

10. Bisa Anda ceritakan bagaimana MongoDB yang Anda kelola berperan dalam ekosistem sistem ini, data atau layanan apa saja yang menggunakannya, dan bagaimana Anda merancang strukturnya?
11. Bisa Anda jelaskan bagaimana Anda memastikan keamanan dan integritas data di MongoDB, mengingat sistem ini berkaitan dengan arsip digital yang memiliki klasifikasi keamanan tertentu?

E. Hubungan dengan Tim Lain

12. Bisa Anda ceritakan bagaimana koordinasi Anda dengan Network Engineer terkait kebutuhan jaringan untuk komponen-komponen yang Anda kelola, termasuk bagaimana keputusan teknis bersama diambil?
13. Bisa Anda jelaskan bagaimana interaksi teknis antara komponen yang Anda kelola dengan komponen yang dikelola Developer B, misalnya bagaimana sistem autentikasi Anda berinteraksi dengan Forgejo atau Podman?
14. Bisa Anda ceritakan bagaimana alur komunikasi antara Anda dengan ketua organisasi, terutama ketika ada keputusan teknis yang memerlukan persetujuan atau arahan dari level pimpinan?


F. Closing — Refleksi

15. Bisa Anda ceritakan secara mendalam tantangan terbesar yang Anda hadapi selama proses deployment komponen-komponen yang Anda kelola, dan bagaimana Anda menghadapinya?
16. Bisa Anda refleksikan kembali keseluruhan proses yang sudah berjalan — bagian mana yang menurut Anda paling perlu diperbaiki atau dirancang ulang jika prosesnya diulang dari awal?

# devoloper sultan
A. Opening — Konfirmasi Peran dan Konteks

1. Bisa Anda ceritakan secara lengkap peran dan tanggung jawab Anda dalam organisasi ini, khususnya selama proses deployment sistem arsip digital berlangsung?
2. Bisa Anda ceritakan bagaimana pembagian kerja antara Anda dengan developer lainnya dalam ekosistem sistem ini, dan bagaimana batasan tanggung jawab teknis itu disepakati?


B. Container dan Infrastruktur Aplikasi

3. Bisa Anda ceritakan secara menyeluruh bagaimana Podman difungsikan sebagai server dalam ekosistem sistem ini, termasuk bagaimana Anda merancang arsitekturnya sejak awal hingga siap menopang seluruh layanan yang berjalan di atasnya?
Bisa Anda ceritakan bagaimana proses Anda merancang dan mengelola jaringan antar container di Podman, termasuk bagaimana container-container tersebut berkomunikasi satu sama lain?
Bisa Anda jelaskan tantangan teknis apa yang Anda hadapi selama proses konfigurasi Podman dan bagaimana Anda mengatasinya?


C. Forgejo sebagai Platform Arsip

Bisa Anda ceritakan secara menyeluruh bagaimana Forgejo — yang dikenal secara internal sebagai Gitrock — dikonfigurasi dan disesuaikan untuk kebutuhan arsip digital di organisasi ini, termasuk penyesuaian apa saja yang dilakukan dari konfigurasi defaultnya?
Bisa Anda jelaskan bagaimana struktur repositori di Forgejo dirancang untuk mengakomodasi sistem klasifikasi arsip yang berlaku di organisasi ini?
Bisa Anda ceritakan bagaimana alur kerja pengelolaan file Markdown sebagai arsip flat file di Forgejo — mulai dari penciptaan dokumen, penyimpanan, hingga pengelolaan versinya?
Bisa Anda jelaskan bagaimana sistem kontrol akses di Forgejo dirancang, termasuk bagaimana tingkatan hak akses pengguna ditentukan dan dikelola?


D. Manajemen Identitas dan Database

Bisa Anda ceritakan bagaimana LLDAP diintegrasikan ke dalam ekosistem sistem ini, bagaimana hubungannya dengan Forgejo dan komponen autentikasi lainnya, serta bagaimana alur manajemen identitas penggunanya berjalan?
Bisa Anda jelaskan bagaimana PostgreSQL berperan dalam ekosistem sistem ini, layanan atau komponen mana saja yang bergantung padanya, dan bagaimana Anda merancang serta memastikan keamanan datanya?


E. Hubungan dengan Tim Lain

Bisa Anda ceritakan bagaimana koordinasi Anda dengan Network Engineer terkait kebutuhan jaringan untuk komponen-komponen yang Anda kelola, termasuk bagaimana keputusan teknis bersama diambil?
Bisa Anda jelaskan bagaimana interaksi teknis antara komponen yang Anda kelola dengan komponen yang dikelola Developer A, misalnya bagaimana Forgejo berinteraksi dengan sistem autentikasi Keycloak dan Authelia?
Bisa Anda ceritakan bagaimana alur komunikasi antara Anda dengan ketua organisasi, terutama ketika ada keputusan teknis yang memerlukan persetujuan atau arahan dari level pimpinan?


F. Closing — Refleksi

Bisa Anda ceritakan secara mendalam tantangan terbesar yang Anda hadapi selama proses deployment komponen-komponen yang Anda kelola, dan bagaimana Anda menghadapinya?
Bisa Anda refleksikan kembali keseluruhan proses yang sudah berjalan — bagian mana yang menurut Anda paling perlu diperbaiki atau dirancang ulang jika prosesnya diulang dari awal?



