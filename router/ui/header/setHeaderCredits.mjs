import { API_AUCTION_PROFILES } from "../../../API/constants.mjs";
import { headers } from "../../../src/Utilities/API/headers.mjs";
import { myUserName } from "../../../API/constants.mjs";

export async function setHeaderCredits() {
  try {
    const response = await fetch(`${API_AUCTION_PROFILES}/${myUserName}`, {
      method: "GET",
      headers: headers(),
    });

    const result = await response.json();

    if (response.ok) {
      const headerCreditsAmount = document.getElementById(
        "creditsHeaderAmount",
      );
      headerCreditsAmount.innerHTML = `Credits - ${result.data.credits}`;
    }

    console.log(result);

    return result;
  } catch (err) {
    throw err;
  }
}
