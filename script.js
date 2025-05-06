function showCategory(categoryId) {
    // First, hide all categories
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => cat.style.display = 'none');
  
    // Then, show the category that was clicked
    const activeCategory = document.getElementById(categoryId);
    if (activeCategory) {
        activeCategory.style.display = 'flex';
        // Observe new cards after category change
        activeCategory.querySelectorAll('.card').forEach(card => {
            card.classList.remove('animate'); // Reset animation
            observer.observe(card);
        });
    }
}
  
// Show 'All' category by default on page load
window.onload = () => {
    showCategory('all');
};
  
// Scroll animation for categories
let lastScrollTop = 0;
const categories = document.querySelector('.categories');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        categories.classList.add('scrolling');
        categories.classList.remove('scrolling-up');
    } else {
        // Scrolling up
        categories.classList.remove('scrolling');
        categories.classList.add('scrolling-up');
    }
    
    lastScrollTop = scrollTop;
});
  
// Intersection Observer for menu cards animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Observe all menu cards
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});
  