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
## Berikut adalah file kamar.html 
   ```
   <!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Kamar - Hotel Sederhana</title>
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
        
        nav ul li a:hover {
            text-decoration: underline;
        }
        
        main {
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .page-title {
            text-align: center;
            margin-bottom: 2rem;
            color: #2c3e50;
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
            transition: transform 0.3s ease;
        }
        
        .room-card:hover {
            transform: translateY(-5px);
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
            color: #2c3e50;
        }
        
        .price {
            font-weight: bold;
            color: #e74c3c;
            margin: 0.5rem 0;
        }
        
        .facilities {
            margin-top: 0.5rem;
            font-size: 0.9rem;
        }
        
        .facilities span {
            display: inline-block;
            background-color: #ecf0f1;
            padding: 0.2rem 0.5rem;
            border-radius: 3px;
            margin-right: 0.3rem;
            margin-bottom: 0.3rem;
        }
        
        .book-btn {
            display: inline-block;
            background-color: #2c3e50;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 3px;
            margin-top: 0.5rem;
            cursor: pointer;
            text-decoration: none;
        }
        
        .book-btn:hover {
            background-color: #34495e;
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
            <li><a href="index.html">Home</a></li>
            <li><a href="kamar.html">Kamar</a></li>
            <li><a href="#">Fasilitas</a></li>
            <li><a href="#">Kontak</a></li>
        </ul>
    </nav>
    
    <main>
        <h2 class="page-title">Daftar Kamar Tersedia</h2>
        
        <div class="room-container">
            <div class="room-card">
                <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304" alt="Kamar Standar">
                <div class="room-info">
                    <h3>Kamar Standar</h3>
                    <p class="price">Rp 500.000/malam</p>
                    <p>Kamar nyaman dengan fasilitas dasar untuk kenyamanan Anda.</p>
                    <div class="facilities">
                        <span>AC</span>
                        <span>TV</span>
                        <span>Kamar Mandi</span>
                        <span>WiFi</span>
                    </div>
                    <a href="#" class="book-btn">Pesan Sekarang</a>
                </div>
            </div>
            
            <div class="room-card">
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" alt="Kamar Deluxe">
                <div class="room-info">
                    <h3>Kamar Deluxe</h3>
                    <p class="price">Rp 800.000/malam</p>
                    <p>Kamar lebih luas dengan fasilitas premium dan pemandangan yang indah.</p>
                    <div class="facilities">
                        <span>AC</span>
                        <span>TV LED</span>
                        <span>Bathub</span>
                        <span>WiFi</span>
                        <span>Mini Bar</span>
                    </div>
                    <a href="#" class="book-btn">Pesan Sekarang</a>
                </div>
            </div>
            
            <div class="room-card">
                <img src="https://images.unsplash.com/photo-1566669437685-2c5a585fac30" alt="Suite">
                <div class="room-info">
                    <h3>Suite</h3>
                    <p class="price">Rp 1.500.000/malam</p>
                    <p>Kamar mewah dengan ruang tamu terpisah dan fasilitas eksklusif.</p>
                    <div class="facilities">
                        <span>AC</span>
                        <span>TV LED 42"</span>
                        <span>Bathub Premium</span>
                        <span>WiFi High Speed</span>
                        <span>Mini Bar</span>
                        <span>Ruang Tamu</span>
                    </div>
                    <a href="#" class="book-btn">Pesan Sekarang</a>
                </div>
            </div>
            
            <div class="room-card">
                <img src="https://images.unsplash.com/photo-1564078516393-cf04bd966897" alt="Kamar Keluarga">
                <div class="room-info">
                    <h3>Kamar Keluarga</h3>
                    <p class="price">Rp 1.200.000/malam</p>
                    <p>Kamar luas dengan dua tempat tidur double, cocok untuk keluarga.</p>
                    <div class="facilities">
                        <span>AC</span>
                        <span>2 TV</span>
                        <span>Kamar Mandi Besar</span>
                        <span>WiFi</span>
                        <span>Ruang Santai</span>
                    </div>
                    <a href="#" class="book-btn">Pesan Sekarang</a>
                </div>
            </div>
        </div>
    </main>
    
    <footer>
        <p>&copy; 2023 Hotel Sederhana. Semua hak dilindungi.</p>
        <p>Hubungi kami: info@hotelsederhana.com | (021) 12345678</p>
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
    <title>Fasilitas Hotel</title>
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
        
        .facility {
            background: #fff;
            margin: 20px 0;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .facility img {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            border-radius: 5px;
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
        <h1>Fasilitas Hotel Kami</h1>
    </header>
    
    <div class="container">
        <div class="facility">
            <h2>Kolam Renang</h2>
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Kolam Renang">
            <p>Nikmati kolam renang outdoor kami dengan pemandangan yang menakjubkan. Dilengkapi dengan area bersantai dan bar kolam renang.</p>
        </div>
        
        <div class="facility">
            <h2>Spa & Wellness</h2>
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Spa">
            <p>Pusat spa kami menawarkan berbagai perawatan relaksasi dan kecantikan dengan terapis profesional.</p>
        </div>
        
        <div class="facility">
            <h2>Restoran</h2>
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Restoran">
            <p>Restoran kami menyajikan hidangan internasional dan lokal dengan bahan-bahan segar pilihan.</p>
        </div>
        
        <div class="facility">
            <h2>Ruang Pertemuan</h2>
            <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Ruang Pertemuan">
            <p>Fasilitas ruang pertemuan yang lengkap untuk acara bisnis atau pernikahan Anda.</p>
        </div>
    </div>
    
    <footer>
        <p>Hotel Contoh &copy; 2023 - Semua Hak Dilindungi</p>
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
    <title>Reservasi Hotel</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: #f5f5f5;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background-color: #2c3e50;
            color: white;
            padding: 1rem 0;
            text-align: center;
            margin-bottom: 30px;
        }
        
        h1 {
            font-size: 2rem;
        }
        
        .reservation-form {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }
        
        .form-row {
            display: flex;
            gap: 20px;
        }
        
        .form-row .form-group {
            flex: 1;
        }
        
        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #2980b9;
        }
        
        .room-types {
            margin-top: 30px;
        }
        
        .room-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            display: flex;
            gap: 20px;
        }
        
        .room-image {
            width: 200px;
            height: 150px;
            object-fit: cover;
            border-radius: 4px;
        }
        
        .room-info {
            flex: 1;
        }
        
        .room-price {
            font-size: 1.2rem;
            color: #2c3e50;
            font-weight: bold;
        }
        
        footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px 0;
            margin-top: 50px;
        }
        
        @media (max-width: 768px) {
            .form-row {
                flex-direction: column;
                gap: 0;
            }
            
            .room-card {
                flex-direction: column;
            }
            
            .room-image {
                width: 100%;
                height: auto;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Reservasi Kamar Hotel</h1>
        </div>
    </header>
    
    <div class="container">
        <form class="reservation-form">
            <div class="form-row">
                <div class="form-group">
                    <label for="nama">Nama Lengkap</label>
                    <input type="text" id="nama" name="nama" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="telepon">Nomor Telepon</label>
                    <input type="tel" id="telepon" name="telepon" required>
                </div>
                <div class="form-group">
                    <label for="jumlah-tamu">Jumlah Tamu</label>
                    <input type="number" id="jumlah-tamu" name="jumlah-tamu" min="1" max="6" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="check-in">Tanggal Check-in</label>
                    <input type="date" id="check-in" name="check-in" required>
                </div>
                <div class="form-group">
                    <label for="check-out">Tanggal Check-out</label>
                    <input type="date" id="check-out" name="check-out" required>
                </div>
            </div>
            
            <div class="form-group">
                <label for="tipe-kamar">Tipe Kamar</label>
                <select id="tipe-kamar" name="tipe-kamar" required>
                    <option value="">-- Pilih Tipe Kamar --</option>
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Suite Room</option>
                    <option value="family">Family Room</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="catatan">Catatan Tambahan</label>
                <textarea id="catatan" name="catatan" rows="4"></textarea>
            </div>
            
            <button type="submit">Pesan Sekarang</button>
        </form>
        
        <div class="room-types">
            <h2>Pilihan Kamar Kami</h2>
            
            <div class="room-card">
                <img src="https://images.unsplash.com/photo-1566669437685-b9e79526acd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Standard Room" class="room-image">
                <div class="room-info">
                    <h3>Standard Room</h3>
                    <p>Kamar nyaman dengan tempat tidur double atau twin, AC, TV, dan kamar mandi pribadi.</p>
                    <p class="room-price">Rp 500.000/malam</p>
                </div>
            </div>
            
            <div class="room-card">
                <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Deluxe Room" class="room-image">
                <div class="room-info">
                    <h3>Deluxe Room</h3>
                    <p>Kamar lebih luas dengan fasilitas tambahan seperti minibar dan pemandangan kota.</p>
                    <p class="room-price">Rp 750.000/malam</p>
                </div>
            </div>
            
            <div class="room-card">
                <img src="https://images.unsplash.com/photo-1582719471385-cf34a5b1d16e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Suite Room" class="room-image">
                <div class="room-info">
                    <h3>Suite Room</h3>
                    <p>Kamar mewah dengan ruang tamu terpisah, fasilitas lengkap, dan pemandangan terbaik.</p>
                    <p class="room-price">Rp 1.200.000/malam</p>
                </div>
            </div>
        </div>
    </div>
    
    <footer>
        <div class="container">
            <p>&copy; 2023 Hotel Contoh. Semua hak dilindungi.</p>
        </div>
    </footer>
</body>
</html>
```

## Berikut adalah file style.css
   ```
   /* Reset dan Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Header Styles */
header {
    background-color: #2c3e50;
    color: white;
    padding: 1.5rem 0;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

header h1 {
    font-size: 2.2rem;
}

/* Navigation Styles */
nav {
    background-color: #34495e;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

nav ul {
    display: flex;
    list-style: none;
    justify-content: center;
    flex-wrap: wrap;
}

nav ul li {
    margin: 0 1.5rem;
}

nav ul li a {
    color: white;
    font-weight: 500;
    padding: 0.5rem 0;
    transition: color 0.3s ease;
    position: relative;
}

nav ul li a:hover {
    color: #f1c40f;
}

nav ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: #f1c40f;
    bottom: 0;
    left: 0;
    transition: width 0.3s ease;
}

nav ul li a:hover::after {
    width: 100%;
}

/* Main Content Styles */
main {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 300px);
}

.page-title {
    text-align: center;
    margin-bottom: 2rem;
    color: #2c3e50;
    font-size: 2rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.page-title::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 3px;
    background: #f1c40f;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

/* Hero Section */
.hero {
    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa');
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 3rem;
    border-radius: 8px;
    text-align: center;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
}

/* Room Container Styles */
.room-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.room-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.room-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.room-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-bottom: 4px solid #f1c40f;
}

.room-info {
    padding: 1.5rem;
}

.room-info h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-size: 1.3rem;
}

.price {
    font-weight: bold;
    color: #e74c3c;
    margin: 0.8rem 0;
    font-size: 1.2rem;
}

.facilities {
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.facilities span {
    display: inline-block;
    background-color: #ecf0f1;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    color: #2c3e50;
}

/* Button Styles */
.book-btn {
    display: inline-block;
    background-color: #2c3e50;
    color: white;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s ease;
    text-align: center;
    width: 100%;
}

.book-btn:hover {
    background-color: #f1c40f;
    color: #2c3e50;
}

/* Footer Styles */
footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem 1rem;
    margin-top: 3rem;
}

footer p {
    margin-bottom: 0.5rem;
}

/* Responsive Styles */
@media (max-width: 768px) {
    nav ul li {
        margin: 0 0.8rem;
    }
    
    .hero {
        height: 300px;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .room-container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    nav ul {
        flex-direction: column;
        align-items: center;
    }
    
    nav ul li {
        margin: 0.3rem 0;
    }
    
    .hero h2 {
        font-size: 1.8rem;
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
