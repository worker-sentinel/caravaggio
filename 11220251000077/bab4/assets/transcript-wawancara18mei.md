Pewawancara: "Bisa dijelaskan bagaimana struktur dan urutan teknologi di dalam server utamanya, khususnya terkait Podman dan penyimpanannya?"

Narasumber: "Di dalam Podman server dimasukkan teknologi NBDE. Jadi kan dia server untuk Podman, nah untuk melindungi Podman dimasukkan teknologi NBDE ini. Untuk aplikasi arsip itu posisinya di atas Podman. Jadi urutannya: kernel, lalu untuk melindungi storage menggunakan NBDE, di atas itu ada layer Podman, dan di atasnya lagi baru ada layer arsip. Namun, Podman server dan NBDE server ini tidak saling berhubungan, karena tanpa adanya Podman, NBDE tetap berjalan, dan tanpa adanya NBDE, Podman juga tetap berjalan."

Pewawancara: "Lalu bagaimana dengan aplikasi otentikasi dan infrastruktur lainnya? Apakah berjalan terpisah?"

Narasumber: "Ada aplikasi untuk autentikasi namanya Authelia, itu jalan di semua layer aplikasi. Terus ada juga aplikasi untuk audit, ada aplikasi untuk keamanan network, jadi tidak bisa dipisahkan setiap infrastrukturnya. Makanya di sini kita menyebutnya bukan aplikasi, tapi sistem komputer."

Pewawancara: "Terkait pengujiannya, apakah ada standar khusus saat instalasi?"

Narasumber: "Iya, di sini ada standar pengujian server yang harus dipatuhi. Karena jika tidak dipatuhi, maka dianggap tidak diinstal dengan standar dan harus instal ulang. Meskipun masalah sekecil copot flashdisk tapi tidak sesuai standar, itu tetap harus dilakukan instalasi ulang."

Pewawancara: "Kembali ke NBDE, fungsinya spesifik untuk apa dalam keamanan fisik?"

Narasumber: "Fungsi NBDE adalah untuk memitigasi celah-celah keamanan di sisi hardisk. Misal, yang tahu password hanyalah superadmin, otomatis jika ingin membuka hardisk hanya bisa superadmin yang membukanya. Makanya ada fitur NBDE untuk men-decrypt ketika tetap berada di dalam jaringan yang diverifikasi. Lalu jika nantinya ada kerusakan fisik atau kemalingan, ketika server keluar dari jaringan internet yang diverifikasi, tidak akan bisa dibuka hardisk-nya, kecuali dibuka oleh superadmin. Karena di sini kita memiliki doktrin informasi: lebih baik rusak daripada terjadi kebocoran data."

Pewawancara: "Berarti keamanannya sangat berlapis ya?"

Narasumber: "Betul, ada layer-layer otorisasi di kita. Ada untuk di layer hardisk, lalu untuk memitigasi jaringan yang tidak sah ada di layer network, dan untuk memitigasi anomali di aplikasi ada di layer aplikasi. Namun semua itu berada di dalam 1 server, makanya di sini disebut autentikasi dan otorisasi berlapis-lapis."

Pewawancara: "Contoh penerapannya pada aplikasi yang digunakan, seperti Forgejo, itu bagaimana sistem masuknya?"

Narasumber: "Untuk di layer aplikasi Forgejo, untuk aksesnya terdapat 2 layer otorisasi. Ketika ada yang ingin akses Forgejo, mereka harus tervalidasi di layer network dan tervalidasi di keanggotaan yang diatur di aplikasi Authelia dan LDAP. Di Forgejo sendiri tidak ada halaman login karena kita sudah menggunakan otorisasi tersebut, jadi hanya user yang terverifikasi yang bisa mengakses Forgejo."
