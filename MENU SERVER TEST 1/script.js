function showCategory(categoryId) {
    // First, hide all categories
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => cat.style.display = 'none');
  
    // Then, show the category that was clicked
    const activeCategory = document.getElementById(categoryId);
    if (activeCategory) {
      activeCategory.style.display = 'flex';
    }
  }
  
  // Show 'All' category by default on page load
  window.onload = () => {
    showCategory('all');
  };
  