import { API_AUTH_REGISTER } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";
import { login } from "./login.mjs";

/**
 * Registers a new user with the provided credentials.
 *
 * - Sends a POST request to the registration endpoint.
 * - Displays error messages via the `#userError` DOM element if registration fails.
 * - Shows a success message via `#userSuccess` and logs the user in after 3 seconds if successful.
 * - Automatically calls the `login` function using the provided email and password.
 *
 * @async
 * @function registerUser
 * @param {Object} params - The user registration data.
 * @param {string} params.name - The user's chosen username.
 * @param {string} params.email - The user's email address.
 * @param {string} params.password - The user's password.
 * @returns {Promise<Object|undefined>} The API response object, or undefined if an error occurs.
 */
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
      userError.innerText = "";
      userSuccess.style.display = "block";
      userSuccess.innerHTML = `User was created successfully, logging in...`;
      setTimeout(() => {
        login({ email, password });
      }, 3000);
    }

    return result;
  } catch (error) {
    console.error("Error in registerUser function:", error);
  }
}
