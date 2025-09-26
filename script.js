 document.querySelector('.subscribe form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const email = document.querySelector('input[type="email"]').value;
        console.log(email);
            localStorage.setItem("Subscribed_Email",email);
        alert('Thanks for Subscribing!');
    });



  document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const form = document.getElementById("loginForm");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    emailInput.addEventListener("input", () => {
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add("invalid");
        emailError.textContent = "Invalid email format.";
      } else {
        emailInput.classList.remove("invalid");
        emailError.textContent = "";
      }
    });

    passwordInput.addEventListener("input", () => {
      if (!strongPasswordRegex.test(passwordInput.value.trim())) {
        passwordInput.classList.add("invalid");
        passwordError.textContent =
          "Password must be 6+ chars, include uppercase, number & special character.";
      } else {
        passwordInput.classList.remove("invalid");
        passwordError.textContent = "";
      }
    });

    form.addEventListener("submit", function (e) {
      if (
        !emailRegex.test(emailInput.value.trim()) ||
        !strongPasswordRegex.test(passwordInput.value.trim())
      ) {
        e.preventDefault();
        alert("Please fix the errors before submitting.");
      }
    });
  });



