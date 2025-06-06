import { API_LISTINGS_BASE } from "../../../API/constants.mjs";

/**
 * Fetches the 24 most recent active listings for the landing page.
 *
 * - Includes seller and bid information in the response.
 * - Sorts listings by creation date in descending order.
 *
 * @async
 * @function fetchLandingListings
 * @returns {Promise<Object>} A promise resolving to the fetched listings data.
 */
export async function fetchLandingListings() {
  const response = await fetch(
    `${API_LISTINGS_BASE}?limit=24&_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc&_active=true`,
  );

  const data = await response.json();

  return data;
}
