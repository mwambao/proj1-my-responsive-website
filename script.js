// Select the form element with the ID 'contactForm'
const form = document.getElementById('contactForm');

// Add an event listener to handle form submission
form.addEventListener('submit', function(event) {
    // Prevent the form's default submit action (e.g., page reload)
    event.preventDefault();

    // Retrieve the values of the form fields (name, email, and message)
    const name = document.getElementById('name').value; // Get the 'name' field value
    const email = document.getElementById('email').value; // Get the 'email' field value
    const message = document.getElementById('message').value; // Get the 'message' field value

    // Check if all fields have been filled
    if (name && email && message) {
        // Display an alert to confirm message receipt
        alert("Thank you," + name + "! Your message has been received.");
        
        // Attempt to call a method 'request', likely intended to send data (note: method not defined)
        form.request();
    } else {
        // Alert the user if any fields are empty
        alert("Please fill in all fields");
    }
});
