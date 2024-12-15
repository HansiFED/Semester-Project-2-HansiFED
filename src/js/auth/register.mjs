import { API_AUTH_REGISTER } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";
import { login } from "./login.mjs";

export async function registerUser({ name, email, password }) {
  const body = JSON.stringify({
    name,
    email,
    password,
  });

  const userError = document.getElementById("userError");
  const userSuccess = document.getElementById("userSuccess");

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body,
    });

    const result = await response.json();

    if (!response.ok) {
      userError.style.display = "block";
      userError.innerHTML = `${result.errors[0].message}`;
    } else if (response.ok) {
      userSuccess.style.display = "block";
      userSuccess.innerHTML = `User was created successfully, logging in...`;
      setTimeout(() => {
        login({ email, password });
      }, 3000);
    }

    return result;
  } catch (error) {
    throw new Error(error);
  }
}
