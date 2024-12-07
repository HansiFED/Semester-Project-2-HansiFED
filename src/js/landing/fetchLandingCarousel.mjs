import { API_LISTINGS_BASE } from "../../../API/constants.mjs";

export async function fetchLandingCarousel() {
  const response = await fetch(
    `${API_LISTINGS_BASE}?limit=3&_seller=true&_bids=true&_active=true`,
  );

  const data = await response.json();

  return data;
}
