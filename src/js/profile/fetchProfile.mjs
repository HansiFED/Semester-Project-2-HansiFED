import { API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Fetches the profile information of a given user.
 *
 * - Sends a GET request to the user profile endpoint.
 * - Uses provided headers for authorization or content type.
 * - Logs any errors to the console.
 *
 * @async
 * @function fetchProfile
 * @param {string} username - The username of the profile to retrieve.
 * @returns {Promise<Object|undefined>} A promise resolving to the user's profile data, or undefined if an error occurs.
 */
export async function fetchProfile(username) {
  try {
    const response = await fetch(`${API_AUCTION_PROFILES}/${username}`, {
      method: "GET",
      headers: headers(),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error("Error in fetchProfile function:", err);
  }
}
