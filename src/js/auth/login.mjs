import { API_AUTH_LOGIN } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Logs a user into the application using email and password.
 *
 * - Sends a POST request to the login endpoint.
 * - On success: stores access token and user info in `localStorage`, and redirects to homepage.
 * - On failure: displays an error message in the `#userError` DOM element.
 *
 * @async
 * @function login
 * @param {Object} params - User login credentials.
 * @param {string} params.email - The user's email address.
 * @param {string} params.password - The user's password.
 * @returns {Promise<void>} This function performs side effects and does not return a value.
 */
export async function login({ email, password }) {
  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      document.getElementById("userError").classList.remove("hidden");
      document.getElementById("userError").innerHTML =
        `${data.errors[0].message}`;
    }

    if (response.ok) {
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("userName", data.data.name);
      localStorage.setItem("myUserData", `${JSON.stringify(data)}`);
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Error in login function:", error);
  }
}
