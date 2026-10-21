
const reuseForm = document.getElementById("reuseForm");

if (reuseForm) {
    reuseForm.addEventListener("submit", function (event) {
        const ownerName = document
            .getElementById("ownerName")
            .value.trim();

        const itemName = document
            .getElementById("itemName")
            .value.trim();

        const itemCategory = document
            .getElementById("itemCategory")
            .value.trim();

        const itemDescription = document
            .getElementById("itemDescription")
            .value.trim();

        const reuseMessage =
            document.getElementById("reuseMessage");

        if (
            ownerName === "" ||
            itemName === "" ||
            itemCategory === "" ||
            itemDescription === ""
        ) {
            event.preventDefault();

            if (reuseMessage) {
                reuseMessage.textContent =
                    "Please fill in all the fields!";
            }

            return;
        }

        // Allow the valid form to submit normally to the Python server.
        if (reuseMessage) {
            reuseMessage.textContent = "";
        }
    });
}
