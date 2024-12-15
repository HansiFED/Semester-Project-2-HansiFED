import { API_LISTINGS_BASE } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function fetchListing() {
  const windowSearch = window.location.search;

  const urlQuery = new URLSearchParams(windowSearch);

  const postId = urlQuery.get("id");

  try {
    const response = await fetch(
      `${API_LISTINGS_BASE}/${postId}?_seller=true&_bids=true`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
}
