import { registerUser } from "../../../src/js/auth/register.mjs";

/**
 * Handles the user registration form submission.
 *
 * - Prevents the default form submission.
 * - Collects form data and converts it to an object.
 * - Calls the registerUser function with the collected data.
 *
 * @async
 * @function onRegister
 * @param {SubmitEvent} event - The form submission event.
 * @returns {Promise<void>} Resolves after the registration request is made.
 */
export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;
  const registeredUserData = Object.fromEntries(new FormData(form));
  await registerUser(registeredUserData);
}
