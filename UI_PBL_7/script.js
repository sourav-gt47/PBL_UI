function handleApprovalChange(selectElement) {
    const selectedValue = selectElement.value;

    if (selectedValue === "approve") {
        document.getElementById('roomSelection').classList.remove('hidden');
    } else {
        document.getElementById('roomSelection').classList.add('hidden');
    }
}

function checkInUser() {
    const roomType = document.getElementById('roomType').value;
    alert(`User checked in with room type: ${roomType}`);
    // Perform additional actions like updating the server or refreshing the page
    location.reload();
}
