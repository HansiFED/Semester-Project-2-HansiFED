import { fetchLandingListings } from "../../../src/js/landing/fetchLandingListings.mjs";
import { buildLandingListings } from "./buildActiveLandingListings.mjs";
import { buildLandingCarousel } from "./buildLandingCarousel.mjs";

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
