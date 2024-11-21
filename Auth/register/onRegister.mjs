import { registerUser } from "./register.mjs";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);

    console.log(formObject);

    const response = await registerUser(formObject);

    console.log("User registered successfully", response);
  } catch (error) {
    console.log("error during registration", error);
  }
});
