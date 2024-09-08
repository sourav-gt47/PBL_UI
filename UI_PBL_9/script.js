function generateInvoice() {
    const userId = document.getElementById('userId').value;
    
    if (userId.trim() === '') {
        alert('Please enter a User ID.');
        return;
    }
    
    // Simulate fetching invoice details
    const invoiceDetails = `
        <p><strong>User ID:</strong> ${userId}</p>
        <p><strong>Reservation ID:</strong> 12345</p>
        <p><strong>Room Charges:</strong> $200</p>
        <p><strong>Service Charges:</strong> $50</p>
    `;
    
    document.getElementById('invoiceDetails').innerHTML = invoiceDetails;
    document.getElementById('invoiceSection').classList.remove('hidden');
}

function finalizeInvoice() {
    alert('Invoice finalized and generated successfully!');
}

function viewBookingHistory() {
    // Simulate fetching booking history
    const bookingHistory = `
        <p><strong>Booking 1:</strong> Room 101, Check-in: 01/09/2024, Check-out: 05/09/2024</p>
        <p><strong>Booking 2:</strong> Room 102, Check-in: 10/09/2024, Check-out: 15/09/2024</p>
    `;
    
    document.getElementById('bookingHistory').innerHTML = bookingHistory;
    document.getElementById('bookingHistory').classList.remove('hidden');
}
