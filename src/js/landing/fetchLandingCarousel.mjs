import { API_LISTINGS_BASE } from "../../../API/constants.mjs";

/**
 * Fetches the 3 most recent active listings for a landing page carousel.
 *
 * - Includes seller and bid data.
 * - Filters to only active listings.
 * - Sorted by creation date in descending order.
 *
 * @async
 * @function fetchLandingCarousel
 * @returns {Promise<Object>} A promise resolving to the fetched carousel listings data.
 */
export async function fetchLandingCarousel() {
  const response = await fetch(
    `${API_LISTINGS_BASE}?limit=3&_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc`,
  );

  const data = await response.json();

  return data;
}
