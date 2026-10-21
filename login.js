const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    const email = document.getElementById("loginEmail").value.trim();
    const password =
        document.getElementById("loginPassword").value;

    if (email === "") {
        event.preventDefault();

        document.getElementById("loginMessage").textContent =
            "Please enter your email!";

        return;
    }

    if (password === "") {
        event.preventDefault();

        document.getElementById("loginMessage").textContent =
            "Please enter your password!";

        return;
    }
        loginForm.submit();

    // Valid → allow form to submit to Python
});