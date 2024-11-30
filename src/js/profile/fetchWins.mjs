import { API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function fetchWins(username) {
  try {
    const response = await fetch(`${API_AUCTION_PROFILES}/${username}/wins`, {
      method: "GET",
      headers: headers(),
    });

    const result = await response.json();

    console.log("listing wins data", result);

    return result;
  } catch (err) {
    throw err;
  }
}
