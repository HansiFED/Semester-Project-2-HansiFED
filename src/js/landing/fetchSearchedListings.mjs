import { API_SEARCH_LISTINGS } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function listingSearch(userInput) {
  const response = await fetch(`${API_SEARCH_LISTINGS}q=${userInput}`, {
    method: "GET",
    headers: headers(),
  });

  const data = await response.json();

  return data;
}
