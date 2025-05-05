// Data kamar dummy (sementara sebelum API nyata tersedia)
const dummyRooms = [
    { id: 1, name: "Kamar Standar", price: 350000, size: "20m²", capacity: 2, breakfast: false },
    { id: 2, name: "Kamar Deluxe", price: 550000, size: "30m²", capacity: 2, breakfast: true },
    { id: 3, name: "Suite", price: 1200000, size: "50m²", capacity: 4, breakfast: true }
];

// Fungsi untuk menampilkan kamar
async function loadRooms() {
    try {
        // Jika menggunakan API nyata:
        // const response = await fetch('/api/kamar');
        // if (!response.ok) throw new Error('Gagal memuat data kamar');
        // const data = await response.json();
        
        // Untuk sementara menggunakan data dummy
        const data = { rooms: dummyRooms };
        
        const roomList = document.getElementById('room-list');
        const roomSelect = document.getElementById('room');
        
        roomList.innerHTML = '';
        roomSelect.innerHTML = '<option value="">Pilih Kamar</option>';

        data.rooms.forEach(room => {
            // Tampilkan kartu kamar
            const roomElement = document.createElement('div');
            roomElement.classList.add('room-card');
            roomElement.innerHTML = `
                <img src="images/kamar-${room.name.toLowerCase().replace(' ', '-')}.jpg" alt="${room.name}">
                <h3>${room.name}</h3>
                <p>${room.size} | Maks ${room.capacity} orang | ${room.breakfast ? 'Termasuk sarapan' : 'Tidak termasuk sarapan'}</p>
                <div class="room-price">Rp ${room.price.toLocaleString()}/malam</div>
                <button class="book-btn" onclick="selectRoom(${room.id})">Pilih Kamar</button>
            `;
            roomList.appendChild(roomElement);

            // Tambahkan ke dropdown
            const option = document.createElement('option');
            option.value = room.id;
            option.textContent = `${room.name} - Rp ${room.price.toLocaleString()}`;
            roomSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('room-list').innerHTML = 
            '<p class="error">Gagal memuat data kamar. Silakan coba lagi nanti.</p>';
    }
}

// Fungsi untuk memilih kamar
function selectRoom(roomId) {
    const selectedRoom = dummyRooms.find(room => room.id === roomId);
    if (selectedRoom) {
        localStorage.setItem('selectedRoom', JSON.stringify(selectedRoom));
        alert(`Anda memilih ${selectedRoom.name}. Lanjutkan ke form pemesanan.`);
        document.getElementById('reservation-form').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('room').value = roomId;
    }
}

// Fungsi untuk menangani form reservasi
document.getElementById('reservation-form')?.addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const roomId = document.getElementById('room').value;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;

    if (!name || !roomId || !date || !email) {
        alert('Harap lengkapi semua field!');
        return;
    }

    const selectedRoom = dummyRooms.find(room => room.id === parseInt(roomId));
    
    try {
        // Jika menggunakan API nyata:
        // const response = await fetch('/api/reservasi', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, roomId, date, email })
        // });
        // if (!response.ok) throw new Error('Gagal melakukan reservasi');
        // const result = await response.json();

        // Untuk demo, gunakan timeout simulasi API
        await new Promise(resolve => setTimeout(resolve, 1000));
        const confirmationId = 'RSV-' + Math.floor(Math.random() * 1000000);
        
        alert(`Reservasi Berhasil!\n\nDetail:\nNama: ${name}\nKamar: ${selectedRoom.name}\nTanggal: ${date}\nEmail: ${email}\nID Konfirmasi: ${confirmationId}`);
        
        // Reset form
        this.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Gagal melakukan reservasi. Silakan coba lagi.');
    }
});

// Panggil saat halaman dimuat
window.onload = function() {
    if (document.getElementById('room-list')) {
        loadRooms();
    }
    
    // Tampilkan kamar yang dipilih sebelumnya
    const savedRoom = localStorage.getItem('selectedRoom');
    if (savedRoom && document.getElementById('room')) {
        const room = JSON.parse(savedRoom);
        document.getElementById('room').value = room.id;
    }
};

// Payment System Functionality
function setupPaymentSystem() {
    const paymentMethod = document.querySelectorAll('input[name="payment"]');
    const bankSelect = document.getElementById('bankSelect');
    const ewalletSelect = document.getElementById('ewalletSelect');
    const paymentInfo = document.getElementById('paymentInfo');
    
    function updatePaymentInfo() {
      const method = document.querySelector('input[name="payment"]:checked').value;
      
      if (method === 'bank') {
        const bank = bankSelect.value;
        const accounts = {
          'bca': 'BCA 123 456 7890',
          'bni': 'BNI 987 654 3210',
          'mandiri': 'Mandiri 111 222 3333'
        };
        paymentInfo.textContent = `Silakan transfer ke ${accounts[bank]}`;
      } else {
        const wallet = ewalletSelect.value;
        paymentInfo.textContent = `Silakan bayar via ${wallet} di aplikasi Anda`;
      }
    }
    
    paymentMethod.forEach(radio => {
      radio.addEventListener('change', updatePaymentInfo);
    });
    
    bankSelect.addEventListener('change', updatePaymentInfo);
    ewalletSelect.addEventListener('change', updatePaymentInfo);
    
    // Initialize
    updatePaymentInfo();
  }
  
  // Call the function when page loads
  window.addEventListener('DOMContentLoaded', setupPaymentSystem);