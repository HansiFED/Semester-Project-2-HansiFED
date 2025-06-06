import { API_LISTINGS_BASE } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Fetches detailed data for a single listing using its ID from the URL.
 *
 * - Includes seller and bid information in the response.
 * - Logs any errors to the console.
 *
 * @async
 * @function fetchListing
 * @returns {Promise<Object|undefined>} A promise resolving to the listing data, or undefined if an error occurs.
 */
export async function fetchListing() {
  const windowSearch = window.location.search;

  const urlQuery = new URLSearchParams(windowSearch);

  const postId = urlQuery.get("id");

  try {
    const response = await fetch(
      `${API_LISTINGS_BASE}/${postId}?_seller=true&_bids=true`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error in fetchListing:", error);
  }
}
