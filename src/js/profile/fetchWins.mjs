import { API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function fetchWins(username) {
  try {
    const response = await fetch(
      `${API_AUCTION_PROFILES}/${username}/wins?_seller=true`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const result = await response.json();

    return result;
  } catch (err) {
    console.error("Error in fetchWins function:", err);
  }
}
