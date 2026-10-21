const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (fullName === "") {
        event.preventDefault();
        alert("Please enter your full name!");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        event.preventDefault();
        alert("Please enter a valid email address!");
        return;
    }

    if (password.length < 8) {
        event.preventDefault();
        alert("Password must contain at least 8 characters!");
        return;
    }

    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match!");
        return;
    }
    registerForm.submit();
    // If everything is valid,
    // the form is allowed to submit to Python.
});


