/**
 * Andrea Hotel - Main JavaScript File
 * Contains all interactive functionality for the hotel website
 */

document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // 1. BACK TO TOP BUTTON
    // ======================
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            backToTopButton.classList.toggle('active', window.scrollY > 300);
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ======================
    // 2. TESTIMONIAL CAROUSEL
    // ======================
    const testimonialCarousel = document.getElementById('testimonialCarousel');
    if (testimonialCarousel) {
        new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            pause: 'hover',
            wrap: true
        });
    }

    // ======================
    // 3. MOBILE MENU TOGGLE
    // ======================
    const mobileMenuButton = document.querySelector('.navbar-toggler');
    const mobileMenu = document.querySelector('.navbar-collapse');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
        });

        // Close menu when clicking nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu.classList.contains('show')) {
                    mobileMenu.classList.remove('show');
                }
            });
        });
    }

    // ======================
    // 4. FORM VALIDATION
    // ======================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            if (name) {
                alert(`Terima kasih ${name}! Kami akan menghubungi Anda segera.`);
                this.reset();
            } else {
                alert('Silakan isi nama Anda terlebih dahulu.');
            }
        });
    }

    // ======================
    // 5. PAYMENT SYSTEM
    // ======================
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        // Constants
        const PRICE_PER_NIGHT = 350000;
        const nightsInput = document.getElementById('nights');
        const totalPayment = document.getElementById('totalPayment');
        
        // Bank and E-wallet data
        const bankAccounts = {
            'bca': 'BCA 123 456 7890 a/n Andrea Hotel',
            'mandiri': 'Mandiri 987 654 3210 a/n Andrea Hotel',
            'bni': 'BNI 567 890 1234 a/n Andrea Hotel',
            'bri': 'BRI 345 678 9012 a/n Andrea Hotel'
        };
        
        const ewalletMethods = {
            'gopay': 'Gunakan GoPay untuk membayar dengan scan QR code',
            'ovo': 'Gunakan OVO untuk membayar dengan scan QR code',
            'dana': 'Gunakan DANA untuk membayar dengan scan QR code',
            'shopeepay': 'Gunakan ShopeePay untuk membayar dengan scan QR code',
            'linkaja': 'Gunakan LinkAja untuk membayar dengan scan QR code'
        };

        // Calculate total payment
        function calculateTotal() {
            const nights = parseInt(nightsInput.value) || 1;
            totalPayment.textContent = 'Rp ' + (PRICE_PER_NIGHT * nights).toLocaleString('id-ID');
        }

        // Initialize payment method display
        function initPaymentMethods() {
            const bankSelect = document.getElementById('bankSelect');
            const ewalletSelect = document.getElementById('ewalletSelect');
            const bankInstruction = document.getElementById('bankInstruction');
            const ewalletInstruction = document.getElementById('ewalletInstruction');

            // Populate bank options
            for (const [key, value] of Object.entries(bankAccounts)) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key.toUpperCase();
                bankSelect.appendChild(option);
            }

            // Populate e-wallet options
            for (const [key] of Object.entries(ewalletMethods)) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                ewalletSelect.appendChild(option);
            }

            // Update instructions
            bankSelect.addEventListener('change', function() {
                bankInstruction.textContent = `Transfer ke ${bankAccounts[this.value]}`;
            });

            ewalletSelect.addEventListener('change', function() {
                ewalletInstruction.textContent = ewalletMethods[this.value];
            });
        }

        // Toggle payment method sections
        document.querySelectorAll('input[name="paymentMethod"]').forEach(method => {
            method.addEventListener('change', function() {
                document.querySelector('.bank-details').classList.toggle('d-none', this.value !== 'bank');
                document.querySelector('.ewallet-details').classList.toggle('d-none', this.value === 'bank');
            });
        });

        // Form submission
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            const nights = parseInt(nightsInput.value) || 1;
            const total = PRICE_PER_NIGHT * nights;
            
            let paymentDetail = '';
            if (paymentMethod === 'bank') {
                const bank = document.getElementById('bankSelect').value;
                paymentDetail = `Transfer Bank ${bank.toUpperCase()} - ${bankAccounts[bank]}`;
            } else {
                const ewallet = document.getElementById('ewalletSelect').value;
                paymentDetail = `E-Wallet ${ewallet.charAt(0).toUpperCase() + ewallet.slice(1)}`;
            }
            
            // Save payment data (simulation)
            const paymentData = {
                roomType: 'Standar',
                nights: nights,
                total: total,
                paymentMethod: paymentMethod,
                paymentDetail: paymentDetail,
                timestamp: new Date().toLocaleString('id-ID')
            };
            
            localStorage.setItem('lastPayment', JSON.stringify(paymentData));
            
            // Show confirmation
            alert(`Pembayaran berhasil!\n\nKamar: Standar\n${nights} Malam\nTotal: Rp ${total.toLocaleString('id-ID')}\nMetode: ${paymentDetail}`);
            
            // Redirect to confirmation page
            window.location.href = 'konfirmasi.html';
        });

        // Initialize
        nightsInput.addEventListener('input', calculateTotal);
        initPaymentMethods();
        calculateTotal();
    }

    // ======================
    // 6. AOS ANIMATION INIT
    // ======================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 120
        });
    }

    console.log('Andrea Hotel JS initialized successfully');
});