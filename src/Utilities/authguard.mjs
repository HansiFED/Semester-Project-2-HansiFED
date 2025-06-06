import { accessToken } from "../../API/constants.mjs";

/**
 * Checks if the user is authenticated.
 *
 * If no access token is found, alerts the user and redirects them to the login page.
 *
 * @function authCheck
 * @returns {void}
 */
export function authCheck() {
  if (!accessToken) {
    window.alert("You must be signed in to view this page");
    window.location.href = "/pages/auth/login/";
  }
}

/**
 * Determines whether a user is currently logged in.
 *
 * @function isLoggedIn
 * @returns {boolean} True if the user has an access token, false otherwise.
 */
export function isLoggedIn() {
  if (accessToken) {
    return true;
  } else {
    return false;
  }
}
