import { login } from "../../../src/js/auth/login.mjs";

/**
 * Handles the user login form submission.
 *
 * - Prevents the default form submission behavior.
 * - Collects form data and converts it into an object.
 * - Calls the login function with the collected credentials.
 *
 * @async
 * @function onLogin
 * @param {SubmitEvent} event - The form submission event.
 * @returns {Promise<void>} Resolves after the login request is processed.
 */
export async function onLogin(event) {
  event.preventDefault();

  const form = event.target;

  const loggedInUserData = Object.fromEntries(new FormData(form));

  await login(loggedInUserData);
}
