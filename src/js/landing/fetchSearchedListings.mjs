import { API_SEARCH_LISTINGS } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Searches for listings matching the user's input query.
 *
 * - Sends a GET request to the listings search endpoint.
 * - Uses headers for content type or auth if required.
 *
 * @async
 * @function listingSearch
 * @param {string} userInput - The search query string entered by the user.
 * @returns {Promise<Object>} A promise resolving to the search results data.
 */
export async function listingSearch(userInput) {
  const response = await fetch(`${API_SEARCH_LISTINGS}q=${userInput}`, {
    method: "GET",
    headers: headers(),
  });

  const data = await response.json();

  return data;
}
