import { API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Fetches a list of auctions the specified user has won.
 *
 * - Sends a GET request to the profile wins endpoint.
 * - Includes `_seller=true` to enrich response data with seller info.
 * - Uses custom headers for authentication or content type as needed.
 *
 * @async
 * @function fetchWins
 * @param {string} username - The username whose auction wins should be fetched.
 * @returns {Promise<Object|undefined>} A promise resolving to the wins data, or undefined if an error occurs.
 */
export async function fetchWins(username) {
  try {
    const response = await fetch(
      `${API_AUCTION_PROFILES}/${username}/wins?_seller=true`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const result = await response.json();

    return result;
  } catch (err) {
    console.error("Error in fetchWins function:", err);
  }
}
