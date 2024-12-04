import { API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function fetchListings(username) {
  try {
    const response = await fetch(
      `${API_AUCTION_PROFILES}/${username}/listings?_seller=true&_bids=true`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const result = await response.json();

    console.log("listing data", result);

    return result;
  } catch (err) {
    throw err;
  }
}
