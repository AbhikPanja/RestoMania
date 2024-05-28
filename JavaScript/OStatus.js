document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Example order status data
    const orderStatuses = {
        '123': 'Your order is being prepared.',
        '456': 'Your order is out for delivery.',
        '789': 'Your order has been delivered.'
    };

    const orderId = document.getElementById('order-id').value;
    const statusMessage = orderStatuses[orderId] || 'Order ID not found.';
    const statusMessageElement = document.getElementById('status-message');
    
    statusMessageElement.textContent = statusMessage;
    document.getElementById('order-status').classList.remove('hidden');
    
    statusMessageElement.classList.remove('fade-in');
    void statusMessageElement.offsetWidth; // Trigger reflow
    statusMessageElement.classList.add('fade-in');
});
