// Function to save username and password to localStorage
function saveCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Save to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to login page (replace with your actual logic)
    alert("Sign Up successful. Redirecting to login page...");

    // Redirect to login page
    window.location.href = "login.html";

    // Prevent form submission for now
    return false;
}

// Function to validate entered credentials during login
function validateCredentials() {
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;
    var error = document.getElementById("error");

    // Basic validation
    if (enteredUsername === "" || enteredPassword === "") {
        error.innerHTML = "Username and password are required";
        return false;
    }

    // Check if the entered credentials match the stored ones
    if (enteredUsername !== storedUsername || enteredPassword !== storedPassword) {
        error.innerHTML = "Incorrect username or password";
        return false;
    }

    // If all validation passed, redirect to home page (for demonstration purpose, simply alerting)
    alert("Login successful. Redirecting to home page...");
    window.location.href = "index.html";

    // Redirect to home page (replace with your actual logic)
    // window.location.href = "home.html";

    // Prevent form submission for now
    return false;
}
