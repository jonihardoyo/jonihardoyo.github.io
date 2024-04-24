document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded valid credentials (for demonstration purposes)
    const validUsername = "admin";
    const validPassword = "123";

    if (username === validUsername && password === validPassword) {
      window.location.href = "Menu3.html";
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid username or password. Please try again.",
      });
    }
  });
});
