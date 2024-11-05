function toggleSubmitButton() {
    const agreeButton = document.querySelector('input[value="agree"]');
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = !agreeButton.checked; // Enable the button if "agree" is checked
}
