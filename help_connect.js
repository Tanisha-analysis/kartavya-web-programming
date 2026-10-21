
const helpForm = document.getElementById("helpRequestForm");

if (helpForm) {
    helpForm.addEventListener("submit", function (event) {
        const name = document.getElementById("requestName").value.trim();
        const email = document.getElementById("requestEmail").value.trim();
        const helpType = document.getElementById("helpType").value;
        const description = document.getElementById("helpDescription").value.trim();
        const helpMessage = document.getElementById("helpMessage");

        if (
            name === "" ||
            email === "" ||
            helpType === "" ||
            description === ""
        ) {
            event.preventDefault();

            helpMessage.textContent = "Please fill in all the fields!";
            return;
        }

        // Valid form: allow normal submission to the Python server.
        helpMessage.textContent = "";
    });
}
