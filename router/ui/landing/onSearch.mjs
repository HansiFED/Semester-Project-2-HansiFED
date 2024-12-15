import { listingSearch } from "../../../src/js/landing/fetchSearchedListings.mjs";
import { userSearch } from "../../../src/js/landing/fetchSearchedUsers.mjs";

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
