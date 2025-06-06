import { API_LISTINGS_BASE } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

/**
 * Sends a POST request to create a new listing.
 *
 * - Handles server response and displays user-facing error messages if validation fails.
 * - Shows a loading spinner and animates the button on success.
 * - Redirects the user to the homepage after a delay if the listing is created successfully.
 * - Manipulates DOM elements directly: `userError`, `loader`, and `createListingButton`.
 *
 * @async
 * @function createListing
 * @param {FormData} body - The form data containing listing details (including media, title, etc.).
 * @returns {Promise<Object|undefined>} The server response as a JSON object, or undefined if an error occurs.
 */
export async function createListing(body) {
  const userError = document.getElementById("userError");
  const loader = document.getElementById("loader");
  const createListingButton = document.getElementById("createListingButton");

  try {
    const response = await fetch(API_LISTINGS_BASE, {
      method: "POST",
      headers: headers(),
      body: body,
    });

    const data = await response.json();

    if (!response.ok) {
      userError.style.display = "block";
      userError.innerHTML = `${data.errors[0].message}`;
    } else if (response.ok) {
      userError.innerText = "";
      createListingButton.classList.add("animate-pulse");
      loader.classList.remove("hidden");
      setTimeout(() => {
        window.location.href = "/";
      }, 6000);
    }

    return data;
  } catch (error) {
    console.error("Error in createListing:", error);
  }
}
