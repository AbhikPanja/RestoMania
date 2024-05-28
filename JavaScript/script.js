document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function() {
      const isOpen = navLinks.classList.contains('open');
      navLinks.classList.toggle('open', !isOpen);
      menuToggle.setAttribute('aria-expanded', !isOpen);
    });
  
    function scrollOffers(direction) {
      const wrapper = document.querySelector('.offers-wrapper');
      const scrollAmount = 300; // Adjust the scroll amount based on your design
      wrapper.scrollLeft += direction * scrollAmount;
    }
  
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
  
    leftArrow.addEventListener('click', function() {
      scrollOffers(-1);
    });
  
    rightArrow.addEventListener('click', function() {
      scrollOffers(1);
    });
  
    const reservationForm = document.getElementById('reservation-form');
    reservationForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const tableNumber = document.getElementById('table-number').value;
      const reservationTime = document.getElementById('reservation-time').value;
      const numberOfPeople = document.getElementById('number-of-people').value;
  
      // Add your booking logic here
      alert(`Table ${tableNumber} reserved at ${reservationTime} for ${numberOfPeople} people.`);
    });
  });
  