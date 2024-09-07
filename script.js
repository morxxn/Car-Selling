// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('registration-message');
    
    if (name && email && username && password) {
        message.textContent = 'Registration successful!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
    }
});

// Handle car search
document.getElementById('search-button').addEventListener('click', function() {
    const model = document.getElementById('search-model').value;
    const location = document.getElementById('search-location').value;
    const results = document.getElementById('search-results');
    
    if (model && location) {
        results.textContent = `Searching for cars with model "${model}" in location "${location}".`;
    } else {
        results.textContent = 'Please enter both car model and location.';
    }
});
