A. Opening — Konfirmasi Peran dan Konteks

1. Bisa Anda ceritakan secara lengkap peran dan tanggung jawab Anda dalam organisasi ini, khususnya selama proses deployment Gitrock berlangsung?
2. Bisa Anda ceritakan perjalanan Anda membangun infrastruktur jaringan di organisasi ini dari awal hingga kondisi saat ini?


B. Infrastruktur Jaringan

3. Bisa Anda jelaskan secara menyeluruh bagaimana arsitektur jaringan yang Anda bangun untuk mendukung ekosistem sistem ini, dari sisi topologi hingga komponen-komponen yang terlibat?
4. Bisa Anda ceritakan bagaimana proses Anda memastikan konektivitas antara server, desktop, dan aplikasi dalam ekosistem ini bisa berjalan dengan baik dan stabil?
5. Bisa Anda jelaskan protokol jaringan apa saja yang Anda gunakan dalam sistem ini beserta alasan dan pertimbangan di balik pemilihan masing-masing protokol tersebut, termasuk bagaimana RADIUS berperan dalam ekosistem autentikasi jaringan ini?
6. Bisa Anda ceritakan bagaimana Anda merancang pembagian zona atau jalur jaringan untuk setiap komponen sistem — misalnya antara server, aplikasi, dan pengguna — dan apa pertimbangan di balik rancangan tersebut?


C. Cluster Jaringan dalam Ekosistem

7. Bisa Anda ceritakan bagaimana ekosistem jaringan ini dibagi ke dalam cluster-cluster tertentu, cluster apa saja yang ada, dan apa fungsi serta peran masing-masing cluster tersebut dalam mendukung sistem secara keseluruhan?
8. Bisa Anda jelaskan bagaimana komunikasi dan alur data antar cluster dirancang, termasuk bagaimana Anda memastikan setiap cluster bisa berinteraksi dengan cluster lainnya secara aman dan efisien?
9. Bisa Anda ceritakan bagaimana Anda menangani situasi ketika salah satu cluster mengalami gangguan — apakah ada mekanisme isolasi atau failover yang dirancang agar cluster lain tidak ikut terdampak?


D. Keamanan dan Ketahanan Jaringan

10. Bisa Anda jelaskan bagaimana Anda merancang jaringan agar sistem tetap bisa berjalan dan pulih ketika terjadi gangguan atau kegagalan pada salah satu komponen?
11. Bisa Anda ceritakan mekanisme keamanan apa saja yang Anda terapkan di level jaringan, termasuk bagaimana firewalld dikonfigurasi untuk mengatur dan membatasi traffic antar komponen dalam ekosistem ini?
12. Bisa Anda jelaskan bagaimana layer jaringan yang Anda bangun berinteraksi dengan sistem autentikasi seperti Keycloak atau Authelia, termasuk bagaimana RADIUS melengkapi lapisan autentikasi tersebut di level jaringan?
13. Bisa Anda ceritakan apakah pernah terjadi kendala atau insiden selama proses deployment berlangsung di sisi jaringan, dan bagaimana proses penanganannya dari awal hingga selesai?


E. MariaDB dalam Ekosistem Jaringan

14.Bisa Anda ceritakan bagaimana MariaDB yang Anda kelola berperan dalam ekosistem sistem ini, layanan atau komponen mana saja yang bergantung padanya, dan bagaimana Anda merancang konektivitas serta keamanan aksesnya dari sisi jaringan?


F. Hubungan dengan Tim Lain

15. Bisa Anda ceritakan bagaimana pola koordinasi dan komunikasi Anda dengan tim developer dan ketua organisasi selama proses deployment berlangsung, termasuk bagaimana keputusan teknis bersama diambil dan disesuaikan antar tim?


G. Closing — Refleksi

16. Bisa Anda ceritakan secara mendalam tantangan terbesar yang Anda hadapi dalam membangun infrastruktur jaringan untuk sistem seperti ini, dan bagaimana Anda menghadapinya?
17. Bisa Anda refleksikan kembali keseluruhan proses yang sudah berjalan — bagian mana yang menurut Anda paling perlu diperbaiki atau dirancang ulang jika prosesnya diulang dari awal?

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
4. Bisa Anda ceritakan bagaimana proses Anda merancang dan mengelola jaringan antar container di Podman, termasuk bagaimana container-container tersebut berkomunikasi satu sama lain?
5. Bisa Anda jelaskan tantangan teknis apa yang Anda hadapi selama proses konfigurasi Podman dan bagaimana Anda mengatasinya?


C. Forgejo sebagai Platform Arsip

6. Bisa Anda ceritakan secara menyeluruh bagaimana Forgejo — yang dikenal secara internal sebagai Gitrock — dikonfigurasi dan disesuaikan untuk kebutuhan arsip digital di organisasi ini, termasuk penyesuaian apa saja yang dilakukan dari konfigurasi defaultnya?
7. Bisa Anda jelaskan bagaimana struktur repositori di Forgejo dirancang untuk mengakomodasi sistem klasifikasi arsip yang berlaku di organisasi ini?
8. Bisa Anda ceritakan bagaimana alur kerja pengelolaan file Markdown sebagai arsip flat file di Forgejo — mulai dari penciptaan dokumen, penyimpanan, hingga pengelolaan versinya?
9. Bisa Anda jelaskan bagaimana sistem kontrol akses di Forgejo dirancang, termasuk bagaimana tingkatan hak akses pengguna ditentukan dan dikelola?


D. Manajemen Identitas dan Database

10. Bisa Anda ceritakan bagaimana LLDAP diintegrasikan ke dalam ekosistem sistem ini, bagaimana hubungannya dengan Forgejo dan komponen autentikasi lainnya, serta bagaimana alur manajemen identitas penggunanya berjalan?
11. Bisa Anda jelaskan bagaimana PostgreSQL berperan dalam ekosistem sistem ini, layanan atau komponen mana saja yang bergantung padanya, dan bagaimana Anda merancang serta memastikan keamanan datanya?


E. Hubungan dengan Tim Lain

12. Bisa Anda ceritakan bagaimana koordinasi Anda dengan Network Engineer terkait kebutuhan jaringan untuk komponen-komponen yang Anda kelola, termasuk bagaimana keputusan teknis bersama diambil?
13. Bisa Anda jelaskan bagaimana interaksi teknis antara komponen yang Anda kelola dengan komponen yang dikelola Developer A, misalnya bagaimana Forgejo berinteraksi dengan sistem autentikasi Keycloak dan Authelia?
14. Bisa Anda ceritakan bagaimana alur komunikasi antara Anda dengan ketua organisasi, terutama ketika ada keputusan teknis yang memerlukan persetujuan atau arahan dari level pimpinan?


F. Closing — Refleksi

15. Bisa Anda ceritakan secara mendalam tantangan terbesar yang Anda hadapi selama proses deployment komponen-komponen yang Anda kelola, dan bagaimana Anda menghadapinya?
16. Bisa Anda refleksikan kembali keseluruhan proses yang sudah berjalan — bagian mana yang menurut Anda paling perlu diperbaiki atau dirancang ulang jika prosesnya diulang dari awal?

# untuk ketua organisasi
1. bisa dijelaskan apa yang melatarbelakangi pembangunan ifrastruktur protokol informasi untuk arsip digital ini
2. bisa dijelaskan apa yang mendasari penggunaan podman sebagai platform container dibandingkan alternatif lain seperti docker
3. bisa dijelaskan apa yang membedakan infrastruktur server ini dibanding dengan server server lain diluarsana.
4. bisa di jelaskan apa saja konfigurasi dalam server ini yang menjadi pembeda dari pembagian hardisk dan lainya
4pilar kearsipan
---
6. Bisa Anda ceritakan bagaimana Tata Naskah Dinas diterjemahkan ke dalam sistem ini secara teknis, termasuk bagaimana standar penciptaan dan format naskah dinas diakomodasi dalam struktur file Markdown yang digunakan?
7. Bisa Anda jelaskan bagaimana Klasifikasi Arsip diimplementasikan dalam ekosistem sistem ini, termasuk bagaimana skema klasifikasi tersebut tercermin dalam struktur repositori di Gitrock?
8. Bisa Anda ceritakan bagaimana Jadwal Retensi Arsip diterapkan dalam sistem ini secara teknis, termasuk bagaimana logika retensi dan pengelolaan masa simpan arsip dirancang agar berjalan otomatis atau terkontrol dalam ekosistem ini?
9. Bisa Anda jelaskan bagaimana Sistem Klasifikasi Keamanan dan Akses Arsip diimplementasikan dalam sistem ini, termasuk bagaimana tingkatan keamanan dan hak akses arsip diterjemahkan ke dalam konfigurasi teknis di level aplikasi maupun infrastruktur?
model cyber resillent
---
10. Bisa Anda ceritakan bagaimana Anda merancang sistem ini  mampu bertahan ketika terjadi gangguan atau kegagalan sistem atau humanis, termasuk mekanisme pemulihan apa yang sudah disiapkan?
11. Bisa Anda jelaskan bagaimana Anda memastikan kemandirian data organisasi dalam sistem ini, termasuk keputusan teknis dan kebijakan apa saja yang diambil untuk memastikan data tidak bisa di akses oleh orang luar organisasi.
13. Bisa Anda ceritakan bagaimana Anda memimpin dan mengkoordinasikan tim teknis selama proses deployment berlangsung, termasuk bagaimana pembagian kerja dan pengambilan keputusan teknis bersama dilakukan?










