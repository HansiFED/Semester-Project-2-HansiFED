import { accessToken, API_LISTINGS_BASE } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

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
