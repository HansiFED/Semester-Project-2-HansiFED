import { accessToken, API_SEARCH_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function userSearch(userInput) {
  let empty = 0;

  if (accessToken) {
    const response = await fetch(
      `${API_SEARCH_PROFILES}?limit=15&_listings=true&_wins=true&q=${userInput}`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const data = await response.json();

    return data;
  } else {
    return empty;
  }
}
