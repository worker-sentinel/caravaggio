didalam podman server dimasukan teknologi nbde, jadikan dia server untuk podman untuk melindungi podman di masukan teknologi nbde, untuk aplikasi arsip di atas 
podman jadi urutanya kernel lalu untuk melindungi storage menggunakan nbde lalu diatas itu ada layer podman lalu diatasnya ada layer arsip. namun podman server dan 
nbde server tidak saling berhubungan karena tanpa adanya podman nbde tetap berjalan dan tanpa adanya nbde podman juga tetap berjalan.

ada aplikasi untuk authentikasi namanya authelia itu jalan di semua layer aplikasi, untuk network menggunakan radius untuk authentikasi, ada aplikasi untuk audit, 
ada aplikasi untuk keamanan network jadi tidak bisa di pisahkan setiap infrasturukturnya, makanya disini kita menyebutnya bukan aplikasi tapi sistem komputer.

di sini ada standar pengujian server yang dimana harus dipatuhi karena jika itu tidak di patuha maka tidak di install dengan standar dan harus install ulang, sekecil
meskipun sekecil copot flashdisk tapi tidak sesuai standar harus di lakukan instalasi ulang.

untuk fungsi nbde adalah untuk memitigasi celah celah keamanan di sisi hardisk misal yang tau password hanyalah superadmin otomatis jika ingin membuka hardisk hanya bisa superadmin yang membukanya makanya ada fitur nbde 
untuk mendecrypt ketika tetap ada didalam jaringan yang di verifikasi, lalu jika nantinya ada kerusakan fisik atau kemalingan ketika keluar dari jaringan internet yang diverfikasi tidak akan bisa di buka hardisknya, kecuali dibuka oleh superadmin. karena disini memliki doktrin informasi lebih baik rusak dari pada kebocoran data

ada layer layer otorisasi dikita ada untuk di layer hardisk, untuk memitigasi jaringan yang tidak sah ada di layer network, untuk memitigasi anomali di aplikasi ada di layer aplikasi namun semua berada di dalam 1 server makanya disini disebut authentikasi dan otorisasi berlapis lapis.

