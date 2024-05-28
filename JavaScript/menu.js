document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
  
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = button.getAttribute('data-category');
        
        menuCategories.forEach(categorySection => {
          if (categorySection.id === category) {
            categorySection.style.display = 'block';
          } else {
            categorySection.style.display = 'none';
          }
        });
      });
    });
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const foodItem = button.closest('.food-item');
        const foodName = foodItem.querySelector('h4').textContent;
        const foodPrice = foodItem.querySelector('p').textContent;
        
        alert(`${foodName} has been added to your cart at ${foodPrice}.`);
      });
    });
  });
  