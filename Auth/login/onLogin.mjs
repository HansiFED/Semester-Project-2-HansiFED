import { login } from "./login.mjs";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);

    console.log(formObject);

    const response = await login(formObject);

    console.log(response);
  } catch (error) {
    console.log("error during login", error);
  }
});
