import { accessToken, API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../../src/Utilities/API/headers.mjs";
import { myUserName } from "../../../API/constants.mjs";

/**
 * Fetches the current user's credit amount and updates the header UI.
 *
 * - Sends a GET request to the user profile API using the logged-in user's username.
 * - Updates the inner HTML of the element with ID "creditsHeaderAmount" to show the credits.
 * - Only performs the fetch if an access token is present (user is logged in).
 *
 * @async
 * @function setHeaderCredits
 * @returns {Promise<Object|undefined>} Resolves to the fetched user profile data if successful, otherwise undefined.
 * @throws Will throw an error if the fetch request fails.
 */
export async function setHeaderCredits() {
  if (accessToken) {
    try {
      const response = await fetch(`${API_AUCTION_PROFILES}/${myUserName}`, {
        method: "GET",
        headers: headers(),
      });

      const result = await response.json();

      if (response.ok) {
        const headerCreditsAmount = document.getElementById(
          "creditsHeaderAmount",
        );
        headerCreditsAmount.innerHTML = `Credits - ${result.data.credits}`;
      }

      return result;
    } catch (err) {
      throw err;
    }
  }
}
