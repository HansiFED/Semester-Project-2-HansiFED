/**
 * Logs the user out after confirmation.
 *
 * - Prompts the user with a confirmation dialog.
 * - If confirmed, clears all localStorage data and redirects to the homepage.
 *
 * @async
 * @function logout
 * @returns {void}
 */
export async function logout() {
  const confirmed = window.confirm("Do you wish to logout?");
  if (confirmed) {
    localStorage.clear();
    window.location.href = "/";
  }
}
