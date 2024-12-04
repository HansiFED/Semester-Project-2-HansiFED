import { API_CREATE_LISTING } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function fetchListing() {
  const windowSearch = window.location.search;

  const urlQuery = new URLSearchParams(windowSearch);

  const postId = urlQuery.get("id");

  try {
    const response = await fetch(
      `${API_CREATE_LISTING}/${postId}?_seller=true&_bids=true`,
      {
        method: "GET",
        headers: headers(),
      },
    );

    const result = await response.json();

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
