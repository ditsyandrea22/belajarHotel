// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Testimonial Carousel
const testimonialCarousel = new bootstrap.Carousel('#testimonialCarousel', {
    interval: 5000,
    pause: 'hover'
});

// Initialize AOS Animation
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}

// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.navbar-collapse');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}! We'll contact you shortly.`);
        this.reset();
    });
}

// Payment System
document.addEventListener('DOMContentLoaded', function() {
    // Hitung total pembayaran
    const nightsInput = document.getElementById('nights');
    const totalPayment = document.getElementById('totalPayment');
    
    function calculateTotal() {
        const pricePerNight = 350000;
        const nights = parseInt(nightsInput.value) || 1;
        const total = pricePerNight * nights;
        totalPayment.textContent = 'Rp ' + total.toLocaleString('id-ID');
    }
    
    nightsInput.addEventListener('change', calculateTotal);
    
    // Toggle payment method details
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const bankDetails = document.querySelector('.bank-details');
    const ewalletDetails = document.querySelector('.ewallet-details');
    const bankInstruction = document.getElementById('bankInstruction');
    const ewalletInstruction = document.getElementById('ewalletInstruction');
    
    const bankAccounts = {
        'bca': 'BCA 123 456 7890 a/n Hotel Kami',
        'mandiri': 'Mandiri 987 654 3210 a/n Hotel Kami',
        'bni': 'BNI 567 890 1234 a/n Hotel Kami',
        'bri': 'BRI 345 678 9012 a/n Hotel Kami'
    };
    
    const ewalletMethods = {
        'gopay': 'Gunakan GoPay untuk membayar dengan scan QR code atau transfer ke nomor tujuan',
        'ovo': 'Gunakan OVO untuk membayar dengan scan QR code atau transfer ke nomor tujuan',
        'dana': 'Gunakan DANA untuk membayar dengan scan QR code atau transfer ke nomor tujuan',
        'shopeepay': 'Gunakan ShopeePay untuk membayar dengan scan QR code',
        'linkaja': 'Gunakan LinkAja untuk membayar dengan scan QR code'
    };
    
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            if (this.value === 'bank') {
                bankDetails.classList.remove('d-none');
                ewalletDetails.classList.add('d-none');
            } else {
                bankDetails.classList.add('d-none');
                ewalletDetails.classList.remove('d-none');
            }
        });
    });
    
    // Update bank instructions
    document.getElementById('bankSelect').addEventListener('change', function() {
        bankInstruction.textContent = 'Silakan transfer ke ' + bankAccounts[this.value];
    });
    
    // Update e-wallet instructions
    document.getElementById('ewalletSelect').addEventListener('change', function() {
        ewalletInstruction.textContent = ewalletMethods[this.value];
    });
    
    // Form submission
    document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
        const nights = nightsInput.value;
        const total = 350000 * nights;
        
        let paymentDetail = '';
        if (paymentMethod === 'bank') {
            const bank = document.getElementById('bankSelect').value;
            paymentDetail = `Transfer Bank ${bank.toUpperCase()} - ${bankAccounts[bank]}`;
        } else {
            const ewallet = document.getElementById('ewalletSelect').value;
            paymentDetail = `E-Wallet ${ewallet.charAt(0).toUpperCase() + ewallet.slice(1)}`;
        }
        
        // Simpan data pembayaran
        const paymentData = {
            roomType: 'Standar',
            nights: nights,
            total: total,
            paymentMethod: paymentMethod,
            paymentDetail: paymentDetail,
            timestamp: new Date().toISOString()
        };
        
        // Simpan ke localStorage (simulasi)
        localStorage.setItem('lastPayment', JSON.stringify(paymentData));
        
        // Tampilkan konfirmasi
        alert(`Pembayaran berhasil diproses!\n\nDetail:\nKamar: Standar\n${nights} Malam\nTotal: Rp ${total.toLocaleString('id-ID')}\nMetode: ${paymentDetail}`);
        
        // Redirect ke halaman konfirmasi
        window.location.href = 'konfirmasi.html';
    });
    
    // Inisialisasi
    calculateTotal();
});