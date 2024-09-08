function viewBill() {
    // Simulate fetching bill details
    const billDetails = `
        <p><strong>Room Charges:</strong> $300</p>
        <p><strong>Additional Services:</strong> $50</p>
        <p><strong>Total Amount:</strong> $350</p>
    `;
    
    document.getElementById('billDetails').innerHTML = billDetails;
    document.getElementById('billingSection').classList.add('hidden');
    document.getElementById('billDetailsSection').classList.remove('hidden');
}

function goToPayment() {
    // Display total amount due
    document.getElementById('totalAmount').innerText = '$350';
    document.getElementById('billDetailsSection').classList.add('hidden');
    document.getElementById('paymentSection').classList.remove('hidden');
}

function makePayment() {
    alert('Payment processed successfully!');
    // Redirect to another page or reset UI
    location.reload();
}
