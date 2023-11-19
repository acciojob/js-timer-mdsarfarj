function updateTimer() {
    const timerElement = document.getElementById('timer');

    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time
    const formattedDate = formatDate(currentDate);
    const formattedTime = formatTime(currentDate);

    // Display the timer in the HTML
    timerElement.textContent = `${formattedDate}, ${formattedTime}`;

    // Update the timer every second
    setTimeout(updateTimer, 1000);
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

// Call the updateTimer function to start the timer
updateTimer();
