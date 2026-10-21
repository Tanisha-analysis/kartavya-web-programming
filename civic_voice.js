
const civicForm = document.getElementById("civicForm");

if (civicForm) {
    civicForm.addEventListener("submit", function(event) {
        const citizenName =
            document.getElementById("citizenName").value.trim();

        const issueType =
            document.getElementById("issueType").value;

        const issueDescription =
            document.getElementById("issueDescription").value.trim();

        const civicMessage =
            document.getElementById("civicMessage");

        if (
            citizenName === "" ||
            issueType === "" ||
            issueDescription === ""
        ) {
            event.preventDefault();

            civicMessage.textContent =
                "Please fill in all the fields!";

            return;
        }

        // Valid form: submit normally to the Python server.
        civicMessage.textContent = "";
    });
}
