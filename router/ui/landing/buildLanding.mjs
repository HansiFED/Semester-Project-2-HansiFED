import { fetchLandingCarousel } from "../../../src/js/landing/fetchLandingCarousel.mjs";
import { fetchLandingListings } from "../../../src/js/landing/fetchLandingListings.mjs";
import { buildLandingListings } from "./buildActiveLandingListings.mjs";
import { buildLandingCarousel } from "./buildLandingCarousel.mjs";

export async function buildLanding() {
  const carouselRawData = await fetchLandingCarousel();
  const pageListingsRawData = await fetchLandingListings();

  const carouselData = carouselRawData.data;
  const pageListings = pageListingsRawData.data;

  console.log("carouselData", carouselData);
  console.log("pageListings", pageListings);

  pageListings.forEach((listing) => {
    buildLandingListings(listing);
  });

  carouselData.forEach((listing) => {});

  document.querySelector(".listingContainer1").classList.add("hidden");
}
