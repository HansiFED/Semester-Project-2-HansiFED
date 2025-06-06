import { fetchLandingListings } from "../../../src/js/landing/fetchLandingListings.mjs";
import { buildLandingListings } from "./buildActiveLandingListings.mjs";
import { buildLandingCarousel } from "./buildLandingCarousel.mjs";

/**
 * Builds the landing page content.
 *
 * - Fetches landing page listings asynchronously.
 * - Builds each listing using `buildLandingListings`.
 * - Initializes the landing page carousel.
 * - Hides a placeholder listing container.
 * - Removes loading animation from the main content.
 *
 * @async
 * @function buildLanding
 * @returns {Promise<void>} Resolves after the landing page content is fully rendered.
 */
export async function buildLanding() {
  const pageListingsRawData = await fetchLandingListings();

  const pageListings = pageListingsRawData.data;

  pageListings.forEach((listing) => {
    buildLandingListings(listing);
  });

  buildLandingCarousel();

  document.querySelector(".listingContainer1").classList.add("hidden");
  document.querySelector("main").classList.remove("animate-pulse");
}
