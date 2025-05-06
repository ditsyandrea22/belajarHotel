# Belajar Hotel

Repositori ini berisi proyek pembelajaran untuk sistem manajemen hotel sederhana.

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
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Hotel Sederhana</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="kamar.html">Kamar</a></li>
      <li><a href="fasilitas.html">Fasilitas</a></li>
      <li><a href="reservasi.html">Reservasi</a></li>
    </ul>
  </nav>
  
  <main class="container">
    <section class="hero">
      <h2>Selamat Datang di Hotel Kami</h2>
      <p>Pengalaman menginap yang nyaman dan tak terlupakan</p>
    </section>
    
    <section>
      <h2 class="page-title">Kamar Pilihan</h2>
      <div class="room-container">
        <div class="room-card">
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304" alt="Kamar Standar">
          <div class="room-info">
            <h3>Kamar Standar</h3>
            <p class="price">Rp 500.000/malam</p>
            <p>Kamar nyaman dengan fasilitas dasar untuk kenyamanan Anda.</p>
            <a href="reservasi.html" class="btn">Pesan Sekarang</a>
          </div>
        </div>
        
        <div class="room-card">
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" alt="Kamar Deluxe">
          <div class="room-info">
            <h3>Kamar Deluxe</h3>
            <p class="price">Rp 800.000/malam</p>
            <p>Kamar lebih luas dengan fasilitas premium.</p>
            <a href="reservasi.html" class="btn">Pesan Sekarang</a>
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
## Berikut adalah file kamar.html 
   ```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kamar - Hotel Sederhana</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Hotel Sederhana</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="kamar.html">Kamar</a></li>
      <li><a href="fasilitas.html">Fasilitas</a></li>
      <li><a href="reservasi.html">Reservasi</a></li>
    </ul>
  </nav>
  
  <main class="container">
    <h2 class="page-title">Daftar Kamar</h2>
    
    <div class="room-container">
      <div class="room-card">
        <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304" alt="Kamar Standar">
        <div class="room-info">
          <h3>Kamar Standar</h3>
          <p class="price">Rp 500.000/malam</p>
          <p>Fasilitas: AC, TV, WiFi, Kamar Mandi</p>
          <a href="reservasi.html" class="btn">Pesan Sekarang</a>
        </div>
      </div>
      
      <div class="room-card">
        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" alt="Kamar Deluxe">
        <div class="room-info">
          <h3>Kamar Deluxe</h3>
          <p class="price">Rp 800.000/malam</p>
          <p>Fasilitas: AC, TV LED, Bathub, WiFi</p>
          <a href="reservasi.html" class="btn">Pesan Sekarang</a>
        </div>
      </div>
      
      <div class="room-card">
        <img src="https://images.unsplash.com/photo-1566669437685-2c5a585fac30" alt="Suite">
        <div class="room-info">
          <h3>Suite</h3>
          <p class="price">Rp 1.200.000/malam</p>
          <p>Fasilitas: AC, TV LED 42", Bathub, Ruang Tamu</p>
          <a href="reservasi.html" class="btn">Pesan Sekarang</a>
        </div>
      </div>
    </div>
  </main>
  
  <footer>
    <p>&copy; 2023 Hotel Sederhana. Semua hak dilindungi.</p>
  </footer>
</body>
</html>
```
## Berikut adalah contoh sederhana file fasilitas.html
```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fasilitas - Hotel Sederhana</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Hotel Sederhana</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="kamar.html">Kamar</a></li>
      <li><a href="fasilitas.html">Fasilitas</a></li>
      <li><a href="reservasi.html">Reservasi</a></li>
    </ul>
  </nav>
  
  <main class="container">
    <h2 class="page-title">Fasilitas Hotel</h2>
    
    <div class="room-container">
      <div class="room-card">
        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3" alt="Kolam Renang">
        <div class="room-info">
          <h3>Kolam Renang</h3>
          <p>Nikmati kolam renang outdoor kami dengan pemandangan yang menakjubkan.</p>
        </div>
      </div>
      
      <div class="room-card">
        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874" alt="Spa">
        <div class="room-info">
          <h3>Spa & Wellness</h3>
          <p>Berbagai perawatan relaksasi dengan terapis profesional.</p>
        </div>
      </div>
      
      <div class="room-card">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Restoran">
        <div class="room-info">
          <h3>Restoran</h3>
          <p>Hidangan internasional dan lokal dengan bahan-bahan segar pilihan.</p>
        </div>
      </div>
    </div>
  </main>
  
  <footer>
    <p>&copy; 2023 Hotel Sederhana. Semua hak dilindungi.</p>
  </footer>
</body>
</html>
```
## Berikut adalah contoh sederhana file pemesanan.html
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Pemesanan Kamar Hotel</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        
        header {
            background: #003366;
            color: #fff;
            padding: 1rem 0;
            text-align: center;
        }
        
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
            padding: 20px 0;
        }
        
        .booking-form {
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: 20px auto;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .form-group input, 
        .form-group select, 
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        .btn {
            display: inline-block;
            background: #003366;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        
        .btn:hover {
            background: #002244;
        }
        
        footer {
            background: #003366;
            color: #fff;
            text-align: center;
            padding: 1rem 0;
            margin-top: 20px;
        }
        
        @media(max-width: 768px) {
            .container {
                width: 95%;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Pemesanan Kamar Hotel</h1>
    </header>
    
    <div class="container">
        <form class="booking-form" action="#" method="POST">
            <div class="form-group">
                <label for="nama">Nama Lengkap</label>
                <input type="text" id="nama" name="nama" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="telepon">Nomor Telepon</label>
                <input type="tel" id="telepon" name="telepon" required>
            </div>
            
            <div class="form-group">
                <label for="tipe-kamar">Tipe Kamar</label>
                <select id="tipe-kamar" name="tipe-kamar" required>
                    <option value="">-- Pilih Tipe Kamar --</option>
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Suite Room</option>
                    <option value="executive">Executive Room</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="check-in">Tanggal Check-in</label>
                <input type="date" id="check-in" name="check-in" required>
            </div>
            
            <div class="form-group">
                <label for="check-out">Tanggal Check-out</label>
                <input type="date" id="check-out" name="check-out" required>
            </div>
            
            <div class="form-group">
                <label for="jumlah-tamu">Jumlah Tamu</label>
                <input type="number" id="jumlah-tamu" name="jumlah-tamu" min="1" max="4" required>
            </div>
            
            <div class="form-group">
                <label for="permintaan-khusus">Permintaan Khusus</label>
                <textarea id="permintaan-khusus" name="permintaan-khusus" rows="4"></textarea>
            </div>
            
            <button type="submit" class="btn">Pesan Sekarang</button>
        </form>
    </div>
    
    <footer>
        <p>Hotel Contoh &copy; 2023 - Semua Hak Dilindungi</p>
    </footer>
</body>
</html>
```
## Berikut adalah contoh file reservasi.html
```
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reservasi - Hotel Sederhana</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>Hotel Sederhana</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="kamar.html">Kamar</a></li>
      <li><a href="fasilitas.html">Fasilitas</a></li>
      <li><a href="reservasi.html">Reservasi</a></li>
    </ul>
  </nav>
  
  <main class="container">
    <h2 class="page-title">Form Reservasi</h2>
    
    <form class="booking-form" action="#" method="POST">
      <div class="form-group">
        <label for="nama">Nama Lengkap</label>
        <input type="text" id="nama" name="nama" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-group">
        <label for="telepon">Nomor Telepon</label>
        <input type="tel" id="telepon" name="telepon" required>
      </div>
      
      <div class="form-group">
        <label for="tipe-kamar">Tipe Kamar</label>
        <select id="tipe-kamar" name="tipe-kamar" required>
          <option value="">-- Pilih Tipe Kamar --</option>
          <option value="standard">Standard Room</option>
          <option value="deluxe">Deluxe Room</option>
          <option value="suite">Suite Room</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="check-in">Tanggal Check-in</label>
        <input type="date" id="check-in" name="check-in" required>
      </div>
      
      <div class="form-group">
        <label for="check-out">Tanggal Check-out</label>
        <input type="date" id="check-out" name="check-out" required>
      </div>
      
      <div class="form-group">
        <label for="catatan">Catatan Tambahan</label>
        <textarea id="catatan" name="catatan" rows="4"></textarea>
      </div>
      
      <button type="submit" class="btn">Pesan Sekarang</button>
    </form>
  </main>
  
  <footer>
    <p>&copy; 2023 Hotel Sederhana. Semua hak dilindungi.</p>
  </footer>
</body>
</html>
```

## Berikut adalah file style.css
   ```
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header & Navigation */
header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  text-align: center;
}

nav {
  background-color: #34495e;
  padding: 0.5rem 0;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #f1c40f;
}

/* Main Content */
main {
  padding: 2rem 0;
}

.page-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

/* Room Cards */
.room-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.room-card {
  background: white;
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

.price {
  font-weight: bold;
  color: #e74c3c;
  margin: 0.5rem 0;
}

/* Forms */
.booking-form {
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn {
  display: inline-block;
  background: #2c3e50;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.btn:hover {
  background: #1a252f;
}

/* Footer */
footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  margin-top: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .room-container {
    grid-template-columns: 1fr;
  }
  
  nav ul li {
    margin: 0 0.5rem;
  }
}
```
## Cara Menggunakan:
Buat file baru bernama css letakkan style.css di dalam css

Salin seluruh kode di atas ke dalam file tersebut

Hubungkan ke HTML Anda dengan menambahkan ini di bagian <head>:
```
    <link rel="stylesheet" href="style.css">
```
## Berikut adalah dua file JavaScript
   ```
   // Fungsi untuk inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    // Set tahun copyright otomatis
    setCopyrightYear();
    
    // Inisialisasi slider kamar
    initRoomSlider();
    
    // Setup event listener untuk form kontak
    setupContactForm();
    
    // Tambahkan efek scroll smooth untuk navigasi
    setupSmoothScrolling();
});

// Fungsi untuk mengupdate tahun copyright di footer
function setCopyrightYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Fungsi untuk inisialisasi slider kamar (jika ada)
function initRoomSlider() {
    const roomSlider = document.querySelector('.room-slider');
    if (roomSlider) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.room-slide');
        const totalSlides = slides.length;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Tampilkan slide pertama
        showSlide(currentSlide);
        
        // Otomatis ganti slide setiap 5 detik
        setInterval(nextSlide, 5000);
    }
}

// Fungsi untuk setup form kontak
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data form
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validasi sederhana
            if (!name || !email || !message) {
                alert('Harap isi semua field!');
                return;
            }
            
            // Simulasi pengiriman data
            console.log('Form submitted:', { name, email, message });
            alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }
}

// Fungsi untuk smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Fungsi untuk toggle menu mobile (jika ada)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}
```
## script.js
  ```
  // Fungsi untuk menangani pemesanan kamar
function handleRoomBooking() {
    const bookButtons = document.querySelectorAll('.book-btn');
    
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const roomCard = this.closest('.room-card');
            const roomName = roomCard.querySelector('h3').textContent;
            const roomPrice = roomCard.querySelector('.price').textContent;
            
            // Simpan data kamar yang dipilih di localStorage
            localStorage.setItem('selectedRoom', JSON.stringify({
                name: roomName,
                price: roomPrice
            }));
            
            // Redirect ke halaman pemesanan
            window.location.href = 'booking.html';
        });
    });
}

// Fungsi untuk menampilkan modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Fungsi untuk menyembunyikan modal
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Fungsi untuk inisialisasi gallery kamar (jika ada)
function initRoomGallery() {
    const galleryImages = document.querySelectorAll('.gallery-thumbnail');
    const mainImage = document.querySelector('.gallery-main-img');
    
    if (galleryImages && mainImage) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                // Update gambar utama
                mainImage.src = this.src;
                mainImage.alt = this.alt;
                
                // Update active class
                galleryImages.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

// Fungsi untuk menangani filter kamar
function setupRoomFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const roomCards = document.querySelectorAll('.room-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter kamar
            roomCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.type === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Hilangkan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Panggil fungsi yang diperlukan saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    handleRoomBooking();
    initRoomGallery();
    setupRoomFilters();
    
    // Setup event listener untuk tombol close modal
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.closest('.modal').id;
            hideModal(modalId);
        });
    });
    
    // Close modal ketika klik di luar konten modal
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal(this.id);
            }
        });
    });
});
```
## Cara Menggunakan:
Buat dua file baru: main.js dan script.js

Salin kode di atas ke masing-masing file

Hubungkan ke HTML Anda dengan menambahkan ini sebelum tag </body>:
   ```
   <script src="js/main.js"></script>
   <script src="js/script.js"></script>
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


📸 Screenshot
<div align="center"> <img src="assets/img/screenshot-desktop.png" width="45%" alt="Desktop View"> <img src="assets/img/screenshot-mobile.png" width="45%" alt="Mobile View"> </div>
❓ Pertanyaan?
Jika menemui masalah, silakan buka issue baru.

Dikembangkan dengan ❤ oleh Ditsy Andrea
© 2025 Hotel Management Website Project
