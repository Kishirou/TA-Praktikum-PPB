# TA Praktikum PPB
Identitas
=========
- Nama : Fatih Najwan Madhani Susilo
- NIM : 21120122130038

Deskripsi
=========
Pada repository github ini, terdapat source code dari aplikasi yang bernama "LocalBusiness". Aplikasi ini dapat menampilkan bisnis-bisnis yang ada di area lokal (Amerika). API yang digunakan adalah API yang menggunakan JSON Server karena kehabisan akses untuk API Yelp sehingga buat sendiri.

Fitur Aplikasi
==============
- Tampilan bisnis lokal
- Fitur favorit, dimana dapat memilih bisnis favorit dan masuk ke dalam page favorit
- Deskripsi bisnis dengan review

Penggunaan API
==============
- Untuk menggunakan API, perlu dibuat JSON server dengan perintah npm install -g json-server. Kemudian menjalankan file JSON yang berisi data API dengan json-server --watch APIData.json --port 3000.
- Untuk image pada API menggunakan link dari https://postimages.org dan mungkin sulit untuk menghubungi website tersebut sehingga gambar mungkin tidak muncul. Jika tidak muncul, perlu menggunakan VPN.
- Untuk fetching API pada HomeScreen (https://localhost:3000/businesses) dapat diganti dengan IP sendiri jika ingin mengetes pada device eksternal seperti android sehingga menjadi (https://192.168.1.x:3000/businesses).
- IP lokal dapat dilihat dengan command ipconfig pada cmd.

node-modules
============
Pada folder aplikasi tidak terdapat node-modules karena ukurannya yang terlalu besar untuk dimasuki ke dalam github. Oleh karena itu, perlu dijalankan perintah npm install sebelum menjalankan aplikasi untuk menginstal dependensi.
