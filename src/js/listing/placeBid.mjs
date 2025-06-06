import { accessToken, API_LISTINGS_BASE } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Submits a bid for a specific listing.
 *
 * - Prevents default form submission behavior.
 * - Extracts bid amount from an input field (`#bidInput`).
 * - Gets the listing ID from the URL query string (`?id=...`).
 * - Sends a POST request with the bid amount to the listing's bids endpoint.
 * - If the request is successful, reloads the page to reflect the new bid.
 * - If the request fails, shows an error message in `#errorMessage`.
 * - Only runs if an `accessToken` is available.
 *
 * @async
 * @function placeBid
 * @param {Event} event - The form submit event.
 * @returns {Promise<void>} This function doesn't return anything directly.
 */
export async function placeBid(event) {
  event.preventDefault();
  if (accessToken) {
    const bidAmount = document.getElementById("bidInput").value;

    const body = JSON.stringify({
      amount: parseInt(bidAmount),
    });

    const postUrl = window.location.search;

    const fetchId = new URLSearchParams(postUrl);

    const postId = fetchId.get("id");

    const response = await fetch(`${API_LISTINGS_BASE}/${postId}/bids`, {
      method: "POST",
      headers: headers(),
      body: body,
    });

    const data = await response.json();

    if (response.ok) {
      window.location.reload();
    }

    if (!response.ok) {
      document.getElementById("errorMessage").classList.remove("hidden");

      document.getElementById("errorMessage").innerText =
        `${data.errors[0].message}`;
    }
  }
}
