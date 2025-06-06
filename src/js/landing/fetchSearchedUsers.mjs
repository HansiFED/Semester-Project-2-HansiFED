import { accessToken, API_SEARCH_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Performs a profile search query against the API.
 *
 * - Only executes if an access token is present.
 * - Returns up to 15 profiles matching the input, including listings and wins.
 * - Returns `0` if the user is not authenticated.
 *
 * @async
 * @function userSearch
 * @param {string} userInput - The search query to look up user profiles.
 * @returns {Promise<Object|number>} A promise resolving to the search results object, or `0` if unauthenticated.
 */
export async function userSearch(userInput) {
  let empty = 0;

  if (accessToken) {
    const response = await fetch(
      `${API_SEARCH_PROFILES}?limit=15&_listings=true&_wins=true&q=${userInput}`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const data = await response.json();

    return data;
  } else {
    return empty;
  }
}
