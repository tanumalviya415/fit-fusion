let signup = document.getElementById("signup");
let signin = document.getElementById("signin");
let name = document.getElementById("name");
let title = document.getElementById("title");


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("clicked")

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        resultDiv.innerHTML = `<p>User registered successfully!</p><pre>${JSON.stringify(
          data.data.name,
          null,
          2
        )}</pre>`;
      } else {
        resultDiv.innerHTML = `<p>Error: ${data.message || data.error}</p>`;
      }
    } catch (error) {
      resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
});
