import { API_LISTINGS_BASE } from "../../../API/constants.mjs";

export async function fetchLandingListings() {
  const response = await fetch(
    `${API_LISTINGS_BASE}?limit=24&_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc&_active=true`,
  );

  const data = await response.json();

  return data;
}
