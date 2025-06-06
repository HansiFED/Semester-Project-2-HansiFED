import { listingSearch } from "../../../src/js/landing/fetchSearchedListings.mjs";
import { userSearch } from "../../../src/js/landing/fetchSearchedUsers.mjs";

/**
 * Handles the search form submission event.
 *
 * - Prevents the default form submit behavior.
 * - Retrieves the user input from the search bar.
 * - If input is empty, logs a warning and exits.
 * - Performs asynchronous search requests for users and listings.
 * - Stores the search results and keyword in localStorage.
 * - Redirects the user to the search results page.
 * - Logs errors if the search requests fail.
 *
 * @async
 * @function onSearch
 * @param {Event} event - The search form submission event.
 * @returns {Promise<void>} Resolves after search results are fetched and stored.
 */
export async function onSearch(event) {
  event.preventDefault();

  const userInput = document.getElementById("searchBar").value.trim();

  if (!userInput) {
    console.warn("Search input is empty");
    return;
  }

  try {
    const userSearchData = await userSearch(userInput);
    const listingSearchData = await listingSearch(userInput);

    localStorage.setItem("userSearchData", JSON.stringify(userSearchData));
    localStorage.setItem(
      "listingSearchData",
      JSON.stringify(listingSearchData),
    );
    localStorage.setItem("searchKeyWord", userInput);
    window.location.href = "/pages/search/";
  } catch (error) {
    console.error("Error occurred during search:", error);
  }
}
