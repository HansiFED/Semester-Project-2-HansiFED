import { API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Fetches all auction listings created by a specific user.
 *
 * - Includes seller details and bid data in the response.
 * - Useful for rendering a user's own listings or managing seller dashboards.
 * - Logs any fetch errors to the console.
 *
 * @async
 * @function fetchListings
 * @param {string} username - The username whose listings should be retrieved.
 * @returns {Promise<Object|undefined>} A promise resolving to the listings data object, or undefined if an error occurs.
 */
export async function fetchListings(username) {
  try {
    const response = await fetch(
      `${API_AUCTION_PROFILES}/${username}/listings?_seller=true&_bids=true`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const result = await response.json();

    return result;
  } catch (err) {
    console.error("Error in fetchListings function:", err);
  }
}
