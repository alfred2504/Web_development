// Get the email input element from the form
const emailInput = document.querySelector('input[type="email"]');

// Add an event listener to the form for submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the value of the email input
    const emailValue = emailInput.value;

    // You can perform further actions here, such as sending the emailValue to a server or displaying a message
    alert(`Thank you for joining! Your email (${emailValue}) has been submitted.`);
});
