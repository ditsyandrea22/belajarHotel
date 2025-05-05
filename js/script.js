// Fungsi untuk mengambil data kamar dari API
async function loadRooms() {
    try {
        // Mengambil data kamar dari API
        const response = await fetch('/api/kamar');
        
        // Menangani jika respon tidak OK
        if (!response.ok) {
            throw new Error('Failed to fetch room data');
        }

        // Mengonversi respon ke format JSON
        const data = await response.json();

        // Menampilkan daftar kamar ke dalam elemen dengan id "room-list"
        const roomList = document.getElementById('room-list');
        const roomSelect = document.getElementById('room');
        
        // Menghapus konten sebelumnya
        roomList.innerHTML = '';
        roomSelect.innerHTML = '';

        // Looping untuk menampilkan kamar
        data.rooms.forEach(room => {
            // Menambahkan kamar ke daftar kamar
            const roomElement = document.createElement('div');
            roomElement.classList.add('room');
            roomElement.innerHTML = `
                <h3>${room.name}</h3>
                <p>Price: $${room.price}</p>
            `;
            roomList.appendChild(roomElement);

            // Menambahkan pilihan kamar di dropdown
            const option = document.createElement('option');
            option.value = room.id;
            option.textContent = `${room.name} - $${room.price}`;
            roomSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading rooms:', error);
    }
}

// Fungsi untuk menangani form reservasi
document.getElementById('reservation-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const roomId = document.getElementById('room').value;
    const date = document.getElementById('date').value;

    // Menampilkan data reservasi ke konsol
    console.log('Reservation Details:');
    console.log(`Name: ${name}`);
    console.log(`Room ID: ${roomId}`);
    console.log(`Date: ${date}`);

    // Kirim data reservasi ke API (misalnya ke /api/reservasi)
    try {
        const response = await fetch('/api/reservasi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                roomId: roomId,
                date: date
            })
        });

        if (!response.ok) {
            throw new Error('Failed to make reservation');
        }

        const result = await response.json();
        alert(`Reservation Successful! Confirmation ID: ${result.confirmationId}`);
    } catch (error) {
        console.error('Error making reservation:', error);
        alert('Failed to make reservation. Please try again.');
    }
});

// Panggil fungsi loadRooms saat halaman dimuat
window.onload = loadRooms;
