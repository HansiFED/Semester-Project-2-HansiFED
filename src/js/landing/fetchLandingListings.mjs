import { API_CREATE_LISTING } from "../../../API/constants.mjs";

export async function fetchLandingListings() {
  const response = await fetch(API_CREATE_LISTING);
}
