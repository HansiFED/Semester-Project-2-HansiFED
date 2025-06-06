import { API_AUCTION_EDIT_PROFILE } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Updates the user's profile via a PUT request.
 *
 * - Sends updated user data to the API.
 * - On success: clears feedback text, reloads the page, and stores updated user data in `localStorage`.
 * - On failure: displays the error message in the `userFeedback` DOM element.
 * - Performs DOM manipulation and localStorage updates.
 *
 * @async
 * @function editUser
 * @param {Object} body - The updated user profile data to be sent in the request.
 * @returns {Promise<void>} This function does not return anything explicitly.
 */
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
