import { API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function fetchBids(username) {
  try {
    const response = await fetch(`${API_AUCTION_PROFILES}/${username}/bids`, {
      method: "GET",
      headers: headers(),
    });

    const result = await response.json();

    console.log("listing bids data", result);

    return result;
  } catch (err) {
    throw err;
  }
}