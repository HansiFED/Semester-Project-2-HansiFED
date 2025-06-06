import { API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Fetches the bidding activity of a specific user.
 *
 * - Retrieves all bids made by the user.
 * - Includes associated listings and wins using query parameters.
 * - Handles and logs any fetch errors.
 *
 * @async
 * @function fetchBids
 * @param {string} username - The username whose bid history should be fetched.
 * @returns {Promise<Object|undefined>} A promise resolving to the bid data object, or undefined if an error occurs.
 */
export async function fetchBids(username) {
  try {
    const response = await fetch(
      `${API_AUCTION_PROFILES}/${username}/bids?_listings=true&_wins=true`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const result = await response.json();

    return result;
  } catch (err) {
    console.error("Error in fetchBids function:", err);
  }
}
