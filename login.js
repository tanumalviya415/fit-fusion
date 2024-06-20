let signup = document.getElementById("signup");
let signin = document.getElementById("signin");
let name = document.getElementById("name");
let title = document.getElementById("title");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("LoginForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("clicked");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // yaha
        window.location.href =
          "http://127.0.0.1:5500/Fitness-Project[1]/Fitness-Project/index1.html";

        resultDiv.innerHTML = `<p>User Logged in successfully!</p><pre></pre>`;
      } else {
        resultDiv.innerHTML = `<p>Error: ${data.message || data.error}</p>`;
      }
    } catch (error) {
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
});
