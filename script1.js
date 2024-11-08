function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
        window.location.href = "currency_converter.html";
    } else {
        message.textContent = "Login failed! Please check your credentials.";
    }
}
