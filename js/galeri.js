document.addEventListener('DOMContentLoaded', function() {
    // Filter Galeri
    const filterButtons = document.querySelectorAll('#galeriFilter .nav-link');
    const galeriItems = document.querySelectorAll('.galeri-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter items
            galeriItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Load More Functionality
    const loadMoreBtn = document.getElementById('loadMore');
    const hiddenItems = Array.from(document.querySelectorAll('.galeri-item.d-none'));
    let itemsToShow = 3;
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const itemsToLoad = hiddenItems.splice(0, itemsToShow);
            
            itemsToLoad.forEach(item => {
                item.classList.remove('d-none');
            });
            
            if (hiddenItems.length === 0) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
    
    // Lightbox Configuration
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': true,
        'disableScrolling': true,
        'albumLabel': 'Gambar %1 dari %2'
    });
    
    // Initialize hidden items for load more
    if (galeriItems.length > 9) {
        for (let i = 9; i < galeriItems.length; i++) {
            galeriItems[i].classList.add('d-none');
        }
    } else {
        loadMoreBtn.style.display = 'none';
    }
});