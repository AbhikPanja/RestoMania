document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = document.querySelectorAll('.quantity');
    const totalAmountElement = document.getElementById('total-amount');
    const orderItemsBody = document.getElementById('order-items-body');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    const updateTotalAmount = () => {
        let totalAmount = 0;
        quantityInputs.forEach(input => {
            const price = parseFloat(input.getAttribute('data-price'));
            const quantity = parseInt(input.value);
            const costElement = input.closest('tr').querySelector('.cost');
            const cost = price * quantity;
            costElement.textContent = cost;
            totalAmount += cost;
        });
        totalAmountElement.textContent = totalAmount.toFixed(2);
    };

    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotalAmount);
    });

    updateTotalAmount();  // Initial calculation

    window.confirmOrder = () => {
        const tableNumber = document.getElementById('table-number').value;
        const status = document.getElementById('status').value;
        if (!tableNumber) {
            alert('Please enter the table number.');
            return;
        }
        alert(`Order confirmed! Table Number: ${tableNumber}, Status: ${status}, Total Amount: ₹${totalAmountElement.textContent}`);
    };

    window.backToMenu = () => {
        // Placeholder for actual navigation logic
        alert('Returning to menu...');
    };

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
