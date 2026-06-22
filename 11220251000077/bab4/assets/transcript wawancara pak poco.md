# transcript wawancara pak poco
Mirza: Baik, selamat siang, Pak Poco.

Pak Poco: Siang.

Mirza: Perkenalkan nama saya Mirza dari Fakultas Adab dan Humaniora, Jurusan Ilmu Perpustakaan. Saya izin ingin mewawancara Pak Poco untuk masuk sebagai narasumber skripsi saya yang membahas protokol informasi untuk arsip digital berbasis platform.

Pak Poco: Saya masuk skripsi apa jadi narasumber?

Mirza: Jadi narasumber, maksud saya.

Pak Poco: Kirain saya yang masuk skripsi. Masuk ke kertas dong.

Mirza: Hahaha, nggak bisa. Ya... Jadi mungkin kita bisa langsung—eh, saya izin merekam pembicaraan kita ya sebelumnya?

Pak Poco: Boleh, boleh. Aman, aman.

Mirza: Mungkin bisa langsung kita mulai wawancaranya, Pak Poco?

Pak Poco: Boleh, boleh.

Mirza: Jadi bisa Bapak ceritakan secara lengkap, peran dan tanggung jawab apa saja yang Bapak kerjakan saat deployment server ini, Pak Poco?

Pak Poco: Kalau di saya tuh... Sebenarnya saya terbagi, sebenarnya saya kerja nggak sendiri sih, ada tim. Jadi kita berempat. Untuk tugas saya pribadi, saya 
ngerjainnya—saya dan teman saya yang satu lagi—itu kita instalasi server. Jadi dimulai dari infrastruktur paling bawah, saya dan teman saya instalasi servernya
di bagian baremetal atau di server fisik. Habis itu apa lagi ya, Mas... Oh ini, kita deployment aplikasi itu pakai mekanisme container.

Mirza: Oh... Kalau boleh tahu, masa satu tim itu berapa orang, Mas?

Pak Poco: Pas deployment itu saya berempat.

Mirza: Ada divisi apa aja tuh di dalam deployment itu?

Pak Poco: Kalau kemarin, yang memang bertugas untuk deployment emang dari divisinya DevOps ya. Di Development and Operational gitu.

Mirza: Oh, itu dari DevOps semua?

Pak Poco: Iya, semuanya dari DevOps karena secara penugasan kan emang DevOps itu untuk... ya kita menyiapkan infrastruktur yang paling dasar, terus kita deployment 
aplikasi. Nah, itu emang tugas dari tugas-tugas divisi kita.

Mirza: Oke. Masnya sendiri pas deployment tuh megang aplikasi apa aja tuh, Mas? Kayak, apa aja yang Mas pegang?

Pak Poco: Kalau dari aplikasi sih, kalau saya itu megang aplikasi database. Aplikasi database tuh saya megang MongoDB untuk deployment. Karena kan kita
di database selama uji coba tuh kita ada MongoDB, ada PostgreSQL, sama MariaDB. Nah kebetulan saya megang MariaDB sama ada aplikasi untuk autentikasi. Itu 
Authelia saya pegang. Sama... apa lagi ya? Sama saya pegang ini sih, Iman.

Mirza: Apa? Oh, pegang iman! Nice. Hahaha. Kemarin sih dari beberapa hari yang saya observasi, ada beberapa aplikasi autentikasi ya. Ada kayak Keycloak, 
Vaultwarden, ada Valkey, dan teman-temannya. Itu Masnya yang nge-deploy juga apa ada yang lain?

Pak Poco: Oh iya. Sebenarnya kalau autentikasi kita nyoba dua ya, bener. Saya rada lupa, waktu itu saya uji coba untuk Authelia yang emang kita uji coba di dua 
OS. Yang satu base-nya kita menggunakan Arch Linux, kita coba Authelia, sama kita base-nya itu nyobain Red Hat, keluarganya Red Hat lah. Red Hat sama waktu itu
kita coba Rocky. Nah, untuk yang di Rocky itu kita yang di aplikasi autentikasi itu kita coba Keycloak. Kalau di Arch kita coba Authelia. Untuk Vaultwarden 
sendiri sebenarnya dia nggak termasuk dalam aplikasi autentikasi, karena secara fungsi Vaultwarden ini sebagai manajemen... manajemen kunci gitu. Kalau Masnya
tahu, itu biasanya di Android itu ada namanya KeePass, KeePassXC. Nah, itu semacam itulah.

Mirza: Oh, itu Vaultwarden?

Pak Poco: Vaultwarden. Bedanya kalau KeePassXC itu dia kan nggak bisa... dia bentuknya aplikasi gitu, setahu saya tuh nggak bisa online. Nah, yang kita coba
Vaultwarden ini dia base-nya website, aplikasinya jadi kita bisa akses secara online. Jadi satu aplikasi, kita bisa pakai bareng-bareng gitu. Habis itu juga di
Vaultwarden itu dia support yang namanya Role-Based Access Control (RBAC).

Mirza: R... RAB? Eh RBA?

Pak Poco: RBAC dia. Role-Based Access Control. Jadi kan kita pakai bareng-bareng nih. Karena kita pakai bareng-bareng, jadi setiap orang punya user masing-masing.
Jadi, di aplikasinya tuh nggak... misalnya saya sama tim saya yang A, kita satu aplikasi tapi nggak bisa saling lihat kunci. Nah, dia di situ tuh ada fungsi RBAC.
Jadi tergantung, kalau saya emang mau invite dia ke dalam folder manajemen kunci saya, baru dia bisa ngelihat.

Mirza: Oke, oke, oke. Oh ya, dari beberapa hari saya observasi juga, ada satu fitur di server yang saya dengar itu namanya NBDE. Mungkin Pak Poco bisa untuk
menceritakan bagaimana sih NBDE yang dikelola di ekosistem ini, dan termasuk bagaimana mekanisme enkripsi disk otomatisnya dirancang?

Pak Poco: Sebenarnya NBDE itu lebih tepatnya bukan enkripsi disk otomatis ya. Dia lebih tepatnya sebagai... kalau kita kunci bahasanya enkripsi, kalau kita membuka
kunci itu bahasanya decrypt atau dekripsi. Nah, NBDE itu emang fitur yang ada di Linux ya. Nah, itu emang fungsinya di kita... ya kita kan semua perangkat di sini
nggak cuma server, itu hampir semua kita pakai Linux. Habis itu kita enkripsi semuanya, Full Disk Encryption (FDE) pakai LUKS. Nah, NBDE ini fungsinya untuk... ya
biar tidak ada interaksi user ketika masukin password gitu lho. Jadi kita menghindari atau meminimalisir masukan password secara manual gitu pakai NBDE.

Pak Poco (melanjutkan): Di server sendiri dia fungsinya nanti sebagai penyimpan kunci LUKS-nya. Jadi ketika device di sini dinyalakan, nanti device ini 
berkomunikasi kepada server, apakah kuncinya ada. Kalau emang ada, server akan ngerespon balik untuk membuka kunci enkripsi di device tersebut.

Mirza: Untuk itu... NBDE itu, untuk celah keamanan—bukan celah keamanan sih, maksudnya kayak sejauh mana mitigasi keamanan di NBDE itu? Kayak, apa sih yang bisa 
dimitigasi dari NBDE? Plus minusnya paling.

Pak Poco: Ah iya bisa. Ya sebenarnya plus minusnya di NBDE itu plusnya adalah: selama si perangkat hard disk ini kita enkripsi itu masih di satu jaringan, atau
masih di dalam jaringan tempat kita, dia bakalan kebuka otomatis. Ketika ada pencurian atau kehilangan hard disk, itu dia tidak NBDE itu tidak bakal bisa jalan. 
Jadi tetap butuh kunci secara manual.

Pak Poco (melanjutkan): Itu plusnya. Minusnya adalah gimana kalau memang terjadi mati listrik atau internet mati? Nah, di kita mitigasinya tuh langkah selain 
NBDE kita ada namanya decrypt otomatisnya menggunakan... kita tuh pakai flash disk. Jadi selain NBDE, NBDE itu kan dia bergantung sekali dengan jaringan. Kalau 
jaringannya mati, kita tinggal colok flash disk, dia nanti otomatis terbuka. Jadi kita sangat amat meminimalisir dari interaksi manual user untuk membuka password atau encrypt-nya. Jadi langkah untuk masukin manual pun itu jadi langkah terakhir, dan tidak semua user itu dia mengetahui password-nya.

Mirza: Yang mengetahui cuma Super Admin aja, apa ada yang tahu lagi Mas

Pak Poco: Eh, untuk yang tahu password-nya sih kalau di kita ya, kita tuh cuma ngasih akses ke kepala divisi sih.  

 Mirza: Oh, kepala divisi. Kepala divisi megang akses ya.  

 Pak Poco: Iya, dia tahu kuncinya. Jadi kalau statusnya dia masih anggota, dia enggak tahu. Jadi kalau memang kerja di flash disk-nya hilang terus jaringannya
 mati, itu paling baru si kepala divisinya masukin manual. Itu juga di flash disk kita enggak cuma satu flash disk. Jadi kita tetap backup untuk beberapa flash 
 disk. Jadi kalau hilang satu kita punya yang lain gitu.  

 Mirza: Oke. Kalau menurut Mas nih, pas Mas yang men-deploy NBDE ada tantangan tersendiri enggak sih buat pas nge-deploy-nya? Apakah ada kegagalan atau ada apa?
 Dan Mas menanggulanginya seperti apa? Apa berjalan lancar aja?  

 Pak Poco: Itu kalau tantangannya sih ada ya. Kita riset buat NBDE sendiri itu sekitar 1 bulan. Untuk tantangan itu, saya itu dulu belajar NBDE itu dari Red Hat.
 Nah, Red Hat Linux ini kan berbayar ya. Nah, itu dokumentasinya jelas, lengkap lah. Nah, ketika di sini kita coba untuk keluar dari Linux yang enterprise. Jadi,
 kita kan pakai Arch. Nah, tantangannya sendiri itu dokumentasinya terpencar-pencar lah. Jadi, kita harus cari manual evidences atau apa aja sih yang dibutuhin di
 NBDE, perintilan-perintilan. Nah, kita cari manual tuh satu-satu di Arch, habis itu digabungin. Nah, itu proses itu saya ngabisin waktu 1 bulan.  

 Mirza: Oke, oke, oke. Nah, mungkin kita lanjut untuk pertanyaan berikutnya. Saya juga kemarin pas observasi melihat ada aplikasi bernama Falky. Nah, untuk Falky
 sendiri tuh aplikasi tentang apa sih, Mas?  

 Pak Poco: Sebenarnya Falky ini dia fungsinya sebagai manajemen cache aja sih ya. Jadi setiap aplikasi itu kan pasti ada cache-nya ya. Nah, Falky ini untuk
 manajemen si cache gitu. Jadi biar cache-nya itu tidak menumpuk ya di hardisk. Jadi si Falky ini nanti fungsinya kalau emang cache-cache lama itu nanti dia
 otomatis kehapus. Jadi kita resource-nya minim lah penggunaannya. Jadi resource dari server kita enggak terlalu boros gitu. Nah, dia juga nyimpan cache-cache
 yang memang masih baru. Jadi, itu juga nantinya di performa tidak terlalu... jadi performanya ya baguslah gitu.  

 Mirza: Itu otomatis terhapus atau kalau... ya harus dikonfigurasi lah?  

 Pak Poco: Di... tapi emang fitur Falky itu bisa otomatis terhapus. Jadi kita bisa jadwalin berapa hari atau berapa bulan atau berapa jam sekali untuk nghapus
 cache-nya.  

 Mirza: Oh, bukan per restart.  

 Pak Poco: Iya, enggak per restart. Jadi kan server itu kan harus nyala ya. Enggak mungkin downtime terus. Haya juga. Iya. Jadi kita ngejadwalinnya biasanya
 per hari berarti ngapus cache-nya. Enggak perlu restart OS lagi, Mas. Udah otomatis sebenarnya bukan cache OS-nya ya, tapi lebih ke cache aplikasinya.  

 Mirza: Oh, berarti hampir semua layanan tuh bergantung ke Falky ya dari buat manajemen cache-nya?  

 Pak Poco: Kalau di aplikasi... kalau memang di aplikasinya bisa pakai Falky ya kita pakai Falky. Kalau emang enggak bisa ya...  

 Mirza: Oke. Baik. Pas Masnya nge-deploy itu berapa lama, Mas? Sampai benar-benar optimal itu?  

 Pak Poco: Benar-benar optimal itu ada sekitar 2 minggu lah. Eh seminggu lah untuk eh 2 minggu ya.  

 Mirza: 2 minggu itu pengoptimalannya di mana aja itu, Mas?  

 Pak Poco: Ya pengoptimalan seperti... ya kan setiap aplikasi itu emang memakan memori, jadi kita optimalin pemakaian memorinya. Terus pemakaian hardisk-nya 
 kita limitin segala macam, terus bikin scheduling. Karena kalau memang kita enggak scheduling itu Falky enggak ngapus, jadi dia nyimpan aja gitu.  

 Mirza: He iya. Berarti emang Falky ini tetap harus dikonfigurasiin ya?  

 Pak Poco: Tetap. Dia emang ada fiturnya buat ngapus otomatis atau scheduling lah, tapi emang harus dikonfigurasi terlebih dahulu. Kalau enggak dikonfigurasi dia
 hanya menyimpan cache aja.  

 Mirza: Oke mungkin di Falky segitu aja pertanyaannya. Selanjutnya saya mau nanya juga untuk aplikasi Keycloak. Nah itu tuh aplikasi digunainnya buat apa aja
 penggunaannya? Habis itu juga gimana sih alur penggunaan aplikasi Keycloak itu sendiri?  

 Pak Poco: Sebenarnya aplikasi Keycloak ini sebagai autentikasi aja ya, Mas. Autentikasi itu maksudnya... jadi kan si Keycloak ini nanti enggak berdiri sendiri 
 aplikasinya, nanti kita terhubung dengan beberapa aplikasi lain. Contohnya kayak aplikasi Git lah. Jadi ketika kita mau login ke Git itu enggak langsung ke
 website-nya Git. Jadi kita nanti langsung terindeks... sudah terindeks langsung ke aplikasi Keycloak-nya. Nanti kalau emang berhasil autentikasinya itu langsung 
 lari ke dalam aplikasi Git-nya. Jadi dia fungsinya cuman layer-nya itu cuman layer paling depan lah autentikasi.  

 Mirza: Bedanya Keycloak sama LDAP kan bukan... kan dia sama-sama autentikasi user enggak sih? Apa beda?  

 Pak Poco: Beda. LDAP itu buat manajemen user-nya. Tapi dia berhubungan tuh... berdua bisa berhubungan. Jadi LDAP itu fungsinya ya buat mendaftarin anggota untuk
 login ke aplikasi Git lah gitu misalnya. Jadi anggota kita tuh enggak bikin user sendiri. Tapi dia harus daftar nanti dari adminnya LDAP itu dia bikinin. Nah,
 nanti ketika masuk ke Git itu dia langsung yang muncul tuh Keycloak.  

 Mirza: Mm. Oke oke oke. Kalau misalnya kan tadi Keycloak tuh apa... Manajemen... Eh bukan manajemen kunci ya. Bukan, Keycloak tuh buat autentikasi. Buat
 autentikasi kan. Authelia juga tuh buat autentikasi juga. Iya. Nah, itu perbedaan dua aplikasi itu apa? Apa dua-duanya dipakai apa cuma salah satunya doang
 yang dipakai, Mas?  

 Pak Poco: Salah satunya aja sih yang kita pakai. Kita nyari yang memang paling optimal dari segala penggunaan resource-nya sama fiturnya. Mungkin Keycloak itu
 lebih bersahabat. Enggak usah bersahabat... konfigurasinya di Keycloak tuh dia ada interface-nya jadi lebih gampang.  

 Mirza: Oh. Berarti Authelia tuh udah enggak dipakai sekarang? Apa masih tetap digunain?  

 Pak Poco: Eh, untuk sekarang kita cuma pakai Keycloak ya. Untuk Authelia nanti mungkin bakal digunakan cuman memang hasil risetnya kita tetap simpan.  

 Mirza: Oke. Oke. Tapi kan udah ya itu tadi udah ngebahas Keycloak, udah bahas Vaultwarden, Authelia sama NBDE. Nah, itu tuh struktur berjalannya aplikasi-aplikasi
 itu untuk keamanan di server tuh gimana, Mas? Maksudnya dikasih contoh pola perjalanannya.  

 Pak Poco: Ya, kalau NBDE kan dia layer-nya layer PC (fisik). Jadi sebelum masuk ya dia... sebelum... jadi ketika device atau perangkat itu nyala dia kan pasti
 minta kunci nih sebelum kita masuk OS-nya. Nah si NBDE ini fungsinya kan buat tadi ya membuka kuncinya secara otomatis. Nah ketika membuka kuncinya otomatis
 ketika sudah terbuka baru masuk OS. Nah, layer-nya pun juga beda, tiga aplikasi itu sama NBDE. NBDE fisik. Di tiga aplikasi tersebut di software, dia perangkat
 lunak. Nah, ketika emang sudah terbuka baru si user ketika mau akses Git ya dia langsung dimintain autentikasi. Jadi NBDE dulu buka OS, masuk OS. Habis itu ketika
 dia mau login, ketika dia sudah terdaftar di LDAP dia masuk ke website-nya Git-nya kita. Nah itu si Keycloak muncullah untuk autentikasi benar enggak user ini
 ada. Kalau memang user ini ada, baru dia masuk ke dalam Git-nya. Kalau memang user-nya belum ada, dia balik lagi ke tahap satu yang sebelumnya. Dia harus daftar
 dulu ke admin untuk pembuatan user gitu.  

 Mirza: Oke. Nah, Vaultwarden sendiri itu cuma buat nyimpan password-nya doang berarti.  

 Pak Poco: Iya. Vaultwarden ini sebenarnya buat manajemen kunci pribadi aja sih. Cuman emang bisa diakses secara online nantinya karena dia base-nya kan dikasih.
 Oke, sebentar. Halo. Asalamualaikum. Gebugin aja itu jerapa mini. Ah, masuk.  

 Mirza: Eh, tadi Masnya sempat menyinggung database. Iya. Nah, itu tuh kenapa sih dibagi jadi tiga database? Ada MongoDB, ada PostgreSQL sama MariaDB.  

 Pak Poco: Sebenarnya kita sih nganggapnya untuk ketiga database tersebut... kita memilih tiga database tersebut karena tergantung aplikasi ya. Kebetulan aplikasi 
 yang kita deploy itu support dengan ketiga aplikasi database tersebut. Nah, kenapa kita beli (pilih) MongoDB? Karena MongoDB ini skala database-nya itu bisa
 cukup besarlah. Jadi kita persiapkan infrastrukturnya memang buat ke depannya. Kalau memang anggota kita nanti ya misalnya kita anggotanya bisa se-Indonesia,
 jadi ya kita enggak perlu nge-build infrastruktur ulang. Kebetulan tiga aplikasi ini emang ada yang support PostgreSQL, ada yang support MongoDB, ada yang 
 support MariaDB. Makanya itu kita riset satu-satu, hampir setiap aplikasi itu support ketiganya lah. Nah, kita cobain satu-satu mana yang memang secara keamanan
 itu oke dan tuning. Tuning performa. Jadi di kita nih ada kolaborasi... bukan kolaborasi ya. Jadi ada apa ya bahasanya ya? Komunikasi pokoknya.  

 Mirza: Hah? Komunikasi bukan komunikasi, Mas.  

 Pak Poco: Oh. Jadi si aplikasinya aman, habis itu performanya juga top lah gitu. Di kita itulah.  

 Mirza: Oh, berarti sebenarnya aplikasi-aplikasi yang ada di server ini bisa jalan di ketiga database itu, tapi dicari mana yang paling optimal.  

 Pak Poco: Iya. Yang mana paling optimal, mana yang paling secure dari sisi keamanannya.  

 Mirza: Eh, ngopi, Mas.  

 Pak Poco: Eh, itu. Oh, ya. Boleh, boleh. Iya, ngopi. Ngopi. Ah, habis ini kita ngopi ya.  

 Mirza: Oke. Nah, itu ada kopi tuh. Benar dong.  

 Pak Poco: Iya, makanya saya nawarin masnya.  

 Mirza: Oke. Nah, itu tuh Masnya bisa dapat nih, oh yang ini pakai Mongo, yang ini pakai PostgreSQL, yang ini pakai MariaDB... ini tuh standarnya kayak gimana tuh?  

 Pak Poco: Ya sebenarnya untuk standarnya sendiri ya kita perhitungan dari spek server kita sendiri ya. Dari spek server kita mulai dari RAM, hardisk itu emang diperhitungkan. Kita cari yang memang di kondisi memang yang paling minimal sekali terus tapi paling kencang juga. Jadi setiap kita testing misalnya pakai PostgreSQL, kita testing, kita lihat statistiknya itu dicatat. Terus di MariaDB pun sama seperti itu. Nanti ketika tiga statistik ini sudah selesai, nanti kita compare mana yang memang cocok nih buat production nih kita dan memang sesuai dengan spesifikasi kita kan nantinya. Itu servernya juga akan ya semakin... sebenarnya kan hukum alaminya teknologi kan kita... teknologi itu kan berkembang enggak pernah berhenti ya setiap harinya itu akan berkembang. Jadi tiga aplikasi ini bukan tiga aplikasi terakhir yang kita deploy, mungkin ke depannya masih ada lagi. Jadi kita meminimalisir sekali untuk penggunaan resource-nya buat persiapan aplikasi di depan. Syukur-syukur memang kalau kita nantinya bisa ini kita punya budget untuk upgrade server ya. Jadi yah gitulah ya.  

 Mirza: Itu berarti benchmarking ya jatuhnya.  

 Pak Poco: Nah, iya benar kita melakukan benchmarking untuk terkait untuk yang paling sesuai sama hard drive, RAM, CPU, prosesor kita ya. Ah, yang sesuai yang performanya. Oke. Kalau emang ya kita kan uji cobanya selain benchmarking by perangkatnya kita juga benchmarking-nya dari sisi user juga. Jadi ketika emang ketemu nih di perangkat misalnya si Keycloak nih cocoknya pakai PostgreSQL di secara benchmarking dari perangkatnya dia yang paling optimal, dia yang paling secure. Nah, habis itu kita coba di sisi user benar enggak optimal ya. Secepat apa sih gitu. Kita nih standarnya emang kita memiliki standar yang tinggi ya. Kalau bisa setiap aplikasi itu ketika loading itu kurang dari 1 detik.  

 Mirza: Oh, paling lama tuh paling 1 detik.  

 Pak Poco: Kecuali memang aplikasi itu memang aplikasinya berat dan butuh perangkat yang tinggi. Spesifikasi perangkat kita enggak memadai ya okelah. Tapi kebanyakan kita seringkali kalau emang tidak memadai kita ya cari alternatif aplikasi tersebut. Cari yang performanya memang biasanya sih kita incerannya sih di bawah 1 detik. Hitungannya kita milis.  

 Mirza: Baik. Selama pengerjaan deployment di sini, pola project management di sini tuh kayak gimana, Mas? Antara Mas dengan ketua, Mas dengan network, Mas dengan developer lain?  

 Pak Poco: Ya, seperti biasa kalau manajemennya ya sebelum kita mulai ya kita biasanya meeting dulu untuk planning. Bikin planning apa yang harus dikerjakan, apa yang harus dipersiapkan, berjalannya ini siapa yang bertanggung jawab. Nah, itu kita biasanya planning dulu. Habis itu kita biasanya gunain aplikasi namanya GitHub untuk project management-nya. Jadi ketahuan progresnya setiap harinya. Si A ngerjain apa, si B ngerjain apa, si C ngerjain apa. Jadi itu terdata semua progresnya untuk manajemen. Jadi emang kita selalu planning, biasanya kita planning tuh 1 hari sih cukup planning 1 hari.  

 Mirza: Pengerjaannya biasanya berapa hari tuh yang buat deployment ini?  

 Pak Poco: Kalau yang kemarin kita emang habis 2 mingguan karena ada beberapa kendala dan sama tim. Tim sendiri maksudnya kan punya side job. Jadi karena di tim saya ini ada pengajar, ada pebisnis juga jadi ya lama.  

 Mirza: Kalau menurut Mas sendiri tantangan terbesar dalam deployment ini apa? Hah? Tantangan terbesar saat deployment. Tantangan terbesar ya sejauh ini dari semuanya dari awal sampai habis. Tantangan terbesarnya apa?  

 Pak Poco: Ya, tantangan terbesarnya kan ya biasanya kan kita uji cobanya di lokal ya. Lokal tuh maksudnya di perangkat masing-masing. Habis itu ketika kita uji coba di server testing ada error tuh jadi enggak asinkron sama yang kita uji coba. Nah, itu tantangan terbesarnya. Jadi tantangan user tuh ketika uji coba lokal dengan server testing dan server development kita kadang harus ya benar-benar sama lah. Karena kan ketika deployment server tuh di kita ada... kalau di luar kendali kita, kita tuh punya doktrin ya "zero mistake" gitu. Jadi satu kali percobaan aja install dan running.  

 Mirza: Ya, baik mungkin wawancara kita cukup sampai sini. Terima kasih untuk Pak Poco sudah meluangkan waktunya untuk wawancara ya.  

 Pak Poco: Sama-sama aman, Mas ya. Semoga cepat selesai skripsinya.  

 Mirza: Amin. Terima kasih, Mas, ya.  

 Pak Poco: Oke
