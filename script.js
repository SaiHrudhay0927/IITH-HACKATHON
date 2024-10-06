// Simulated user database for sign-up and login
const users = [];

// Display ongoing events
function displayEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const eventsContainer = document.getElementById('eventsContainer');
    eventsContainer.innerHTML = ""; // Clear existing events
    events.forEach((event, index) => {
        eventsContainer.innerHTML += `
            <div class="event-card">
                <h2>${event.name}</h2>
                <p>${event.description}</p>
                <p>${event.date} at ${event.time}</p>
                <p>Venue: ${event.venue}</p>
                <button onclick="bookEvent(${index})">Book</button>
            </div>`;
    });
}

// Function to book event
function bookEvent(index) {
    // Store selected event index in local storage
    localStorage.setItem('selectedEventIndex', index);
    // Redirect to booking page
    window.location.href = 'book_event.html';
}

// Call displayEvents on page load
document.addEventListener('DOMContentLoaded', displayEvents);
