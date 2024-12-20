import { API_AUCTION_EDIT_PROFILE } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function editUser(body) {
  try {
    const response = await fetch(API_AUCTION_EDIT_PROFILE, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (response.ok) {
      document.getElementById("userFeedback").innerText = "";
      window.location.reload();
      localStorage.setItem("myUserData", JSON.stringify(result));
    }

    if (!response.ok) {
      document.getElementById("userFeedback").innerText =
        result.errors[0].message;
    }
  } catch (error) {
    console.error("Error during the API request:", error);
  }
}
