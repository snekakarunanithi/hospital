// Appointment Form Submission
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collecting the form data
    const name = document.getElementById('patient-name').value;
    const email = document.getElementById('patient-email').value;
    const phone = document.getElementById('phone-number').value;
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
    const type = document.getElementById('appointment-type').value;

    // Show a confirmation message (you can replace this with your desired handling)
    alert(`Thank you, ${name}! Your appointment has been scheduled for ${date} at ${time} for a ${type} consultation. We will contact you at ${phone} or ${email}.`);

    // Reset the form after submission
    document.getElementById('appointment-form').reset();
});
