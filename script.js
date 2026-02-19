function togglePassword() {
    const password = document.getElementById("password");
    const toggle = document.querySelector(".toggle-password");

    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide";
    } else {
        password.type = "password";
        toggle.textContent = "Show";
    }
}
