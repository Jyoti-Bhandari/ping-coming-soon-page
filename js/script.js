const form = document.querySelector(".top-container form");
const emailInput = document.getElementById("email");
const errorText = document.querySelector(".error-text");

// form submission
form.addEventListener("submit", function (e) {
    // Prevent default form submission behavior
    e.preventDefault();

    if (emailInput.value.trim() === "") {
        // Empty email
        errorText.textContent = "Email cannot be empty";
        repeatCSS();
    } else if (!validateEmail(emailInput.value)) {
        // Invalid email format
        errorText.textContent = "Please provide a valid email";
        repeatCSS();
    } else {
        // Valid email
        errorText.style.display = "none";
        emailInput.style.border = "1px solid var(--pale-blue)";        //Added pale blue border
    }
});

// Function to validate email format
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function repeatCSS() {
    errorText.style.display = "block";
    emailInput.style.border = "1px solid var(--light-red)";     //Added light-red border
}
