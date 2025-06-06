import { myUserName } from "../../API/constants.mjs";

/**
 * Checks whether the currently viewed profile page belongs to the logged-in user.
 *
 * - Extracts the `username` parameter from the URL.
 * - Compares it to the logged-in user's stored username.
 *
 * @function profilePageChecker
 * @returns {boolean} True if the profile belongs to the logged-in user, otherwise false.
 */
export function profilePageChecker() {
  const queryString = window.location.search;

  const params = new URLSearchParams(queryString);

  const urlUserName = params.get("username");

  if (myUserName == urlUserName) {
    return true;
  } else {
    return false;
  }
}
