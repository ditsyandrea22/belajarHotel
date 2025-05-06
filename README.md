# Belajar Hotel

Repositori ini berisi proyek pembelajaran untuk sistem manajemen hotel sederhana.

## Fitur

- Manajemen Kamar
  - Tambah kamar
  - Lihat daftar kamar
  - Update status kamar
  - Hapus kamar

- Manajemen Tamu
  - Check-in tamu
  - Check-out tamu
  - Lihat daftar tamu

- Laporan
  - Laporan pendapatan
  - Laporan okupansi kamar

## Instalasi

🚀 Cara Menggunakan
1. Clone repositori ini:
   ```bash
   git clone https://github.com/ditsyandrea22/belajarHotel.git
   cd belajarHotel
   
Buka file index.html di browser favorit Anda saya menggunakan gitpod
Atau akses langsung via GitHub Pages:
Open in GitHub Pages

## Berikut adalah file index.html sederhana
   ```
   <!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Sederhana</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        
        body {
            background-color: #f5f5f5;
            color: #333;
        }
        
        header {
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        
        nav {
            background-color: #34495e;
            padding: 0.5rem;
        }
        
        nav ul {
            display: flex;
            list-style: none;
            justify-content: center;
        }
        
        nav ul li {
            margin: 0 1rem;
        }
        
        nav ul li a {
            color: white;
            text-decoration: none;
        }
        
        main {
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .hero {
            background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa');
            background-size: cover;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 2rem;
            border-radius: 5px;
        }
        
        .hero h2 {
            font-size: 2.5rem;
        }
        
        .room-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        
        .room-card {
            background-color: white;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .room-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .room-info {
            padding: 1rem;
        }
        
        .room-info h3 {
            margin-bottom: 0.5rem;
        }
        
        .price {
            font-weight: bold;
            color: #e74c3c;
            margin: 0.5rem 0;
        }
        
        footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>Hotel Sederhana</h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Kamar</a></li>
            <li><a href="#">Fasilitas</a></li>
            <li><a href="#">Kontak</a></li>
        </ul>
    </nav>
    
    <main>
        <section class="hero">
            <h2>Selamat Datang di Hotel Kami</h2>
        </section>
        
        <section>
            <h2>Daftar Kamar</h2>
            <div class="room-container">
                <div class="room-card">
                    <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304" alt="Kamar Standar">
                    <div class="room-info">
                        <h3>Kamar Standar</h3>
                        <p class="price">Rp 500.000/malam</p>
                        <p>Kamar nyaman dengan fasilitas dasar untuk kenyamanan Anda.</p>
                    </div>
                </div>
                
                <div class="room-card">
                    <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" alt="Kamar Deluxe">
                    <div class="room-info">
                        <h3>Kamar Deluxe</h3>
                        <p class="price">Rp 800.000/malam</p>
                        <p>Kamar lebih luas dengan fasilitas premium dan pemandangan yang indah.</p>
                    </div>
                </div>
                
                <div class="room-card">
                    <img src="https://images.unsplash.com/photo-1566669437685-2c5a585fac30" alt="Suite">
                    <div class="room-info">
                        <h3>Suite</h3>
                        <p class="price">Rp 1.500.000/malam</p>
                        <p>Kamar mewah dengan ruang tamu terpisah dan fasilitas eksklusif.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023 Hotel Sederhana. Semua hak dilindungi.</p>
    </footer>
</body>
</html>
```

## Teknologi

- PHP
- MySQL
- Bootstrap (untuk antarmuka)
- 
  
🛠 Teknologi
<div align="left"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"> <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome"> </div>


📂 Struktur Project
```bash
belajarHotel/
├── assets/
│   ├── css/
│   │   └── style.css         # Stylesheet utama
│   ├── img/                  # Semua asset gambar
│   │   ├── hero-bg.jpg
│   │   ├── room-1.jpg
│   │   └── ...
│   └── js/
│       └── script.js         # JavaScript utama
├── index.html                # Halaman utama
├── about.html                # Tentang hotel
├── rooms.html                # Daftar kamar
├── facilities.html           # Fasilitas hotel
├── contact.html              # Halaman kontak
├── LICENSE
└── README.md

```

🧩 Komponen Penting
Navigasi Responsif

```
html
<nav class="navbar">
  <div class="logo">Hotel Kita</div>
  <ul class="nav-links">
    <!-- Menu items -->
  </ul>
  <div class="burger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</nav>
Hero Section

css
.hero {
  background: linear-gradient(rgba(0,0,0,0.5), url('../img/hero-bg.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
```

🤝 Berkontribusi
Kontribusi sangat diterima! Ikuti langkah berikut:

Fork project

Buat branch baru (git checkout -b fitur-baru)

Commit perubahan (git commit -m 'Tambahkan fitur')

Push ke branch (git push origin fitur-baru)

Buat Pull Request

📜 Lisensi
Dilisensikan di bawah MIT License.

```
Perbaikan yang dilakukan:
1. Format judul dan subjudul diperbaiki
2. Penulisan fitur lebih konsisten
3. Menambahkan bagian teknologi yang digunakan
4. Instruksi instalasi lebih jelas
5. Menambahkan bagian kontribusi dan lisensi
6. Beberapa typo diperbaiki (contoh: "liat" menjadi "lihat", "tamu" yang salah ketik)

```

📸 Screenshot
<div align="center"> <img src="assets/img/screenshot-desktop.png" width="45%" alt="Desktop View"> <img src="assets/img/screenshot-mobile.png" width="45%" alt="Mobile View"> </div>
❓ Pertanyaan?
Jika menemui masalah, silakan buka issue baru.

Dikembangkan dengan ❤ oleh Ditsy Andrea
© 2025 Hotel Management Website Project
