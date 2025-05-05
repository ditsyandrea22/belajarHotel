document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservation-form');
    const checkIn = document.getElementById('check-in');
    const checkOut = document.getElementById('check-out');
    const roomType = document.getElementById('room-type');
    const guests = document.getElementById('guests');
    const totalPrice = document.getElementById('total-price');
    const priceDisplay = document.getElementById('price-display');

    // Harga kamar
    const roomPrices = {
        'superior': 500000,
        'deluxe': 800000,
        'suite': 1200000
    };

    // Set tanggal minimum (hari ini)
    const today = new Date().toISOString().split('T')[0];
    checkIn.min = today;

    // Event listeners
    roomType.addEventListener('change', calculateTotal);
    checkIn.addEventListener('change', updateCheckOutMin);
    checkOut.addEventListener('change', calculateTotal);
    guests.addEventListener('change', calculateTotal);

    function updateCheckOutMin() {
        checkOut.min = checkIn.value;
        if(checkOut.value && new Date(checkOut.value) < new Date(checkIn.value)) {
            checkOut.value = '';
            priceDisplay.textContent = 'Rp 0';
        }
    }

    function calculateTotal() {
        if(checkIn.value && checkOut.value && roomType.value) {
            const diffTime = Math.abs(new Date(checkOut.value) - new Date(checkIn.value));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if(diffDays > 0) {
                const price = roomPrices[roomType.value] * diffDays * guests.value;
                totalPrice.value = price;
                priceDisplay.textContent = `Rp ${price.toLocaleString('id-ID')} (${diffDays} malam)`;
            } else {
                alert('Tanggal check-out harus setelah check-in');
                checkOut.value = '';
                priceDisplay.textContent = 'Rp 0';
            }
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if(!form.checkValidity()) {
            alert('Harap isi semua field yang wajib diisi!');
            return;
        }

        if(!totalPrice.value || totalPrice.value == 0) {
            alert('Harap periksa kembali tanggal dan tipe kamar Anda');
            return;
        }

        const reservation = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            checkIn: checkIn.value,
            checkOut: checkOut.value,
            roomType: roomType.options[roomType.selectedIndex].text,
            guests: guests.value,
            totalPrice: totalPrice.value,
            specialRequest: document.getElementById('requests').value,
            bookingDate: new Date().toLocaleString()
        };

        // Simpan ke localStorage
        saveReservation(reservation);
        
        // Tampilkan konfirmasi
        showConfirmation(reservation);
    });

    function saveReservation(reservation) {
        let allReservations = JSON.parse(localStorage.getItem('hotelReservations')) || [];
        allReservations.push(reservation);
        localStorage.setItem('hotelReservations', JSON.stringify(allReservations));
    }

    function showConfirmation(reservation) {
        const confirmationHTML = `
            <div class="confirmation">
                <h2>Reservasi Berhasil!</h2>
                <p><strong>Kode Booking:</strong> ${generateBookingCode()}</p>
                <p><strong>Atas Nama:</strong> ${reservation.name}</p>
                <p><strong>Tipe Kamar:</strong> ${reservation.roomType}</p>
                <p><strong>Check-in:</strong> ${formatDate(reservation.checkIn)}</p>
                <p><strong>Check-out:</strong> ${formatDate(reservation.checkOut)}</p>
                <p><strong>Total:</strong> Rp ${parseInt(reservation.totalPrice).toLocaleString('id-ID')}</p>
                <button onclick="window.location.href='index.html'" class="btn">Kembali ke Home</button>
            </div>
        `;
        
        document.querySelector('.reservation-container').innerHTML = confirmationHTML;
    }

    function generateBookingCode() {
        return 'BOOK-' + Math.floor(100000 + Math.random() * 900000);
    }

    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    }
});