import { fetchBids } from "../../../src/js/profile/fetchBids.mjs";
import { fetchListings } from "../../../src/js/profile/fetchListings.mjs";
import { fetchProfile } from "../../../src/js/profile/fetchProfile.mjs";
import { fetchWins } from "../../../src/js/profile/fetchWins.mjs";
import { buildActiveBids } from "./buildActiveBids.mjs";
import { buildActiveListings } from "./buildActiveListings.mjs";
import { buildProfileInfo } from "./buildProfileInfo.mjs";
import { buildWonBids } from "./buildWonBids.mjs";
import { profileCheck } from "./hideUI.mjs";

/**
 * Fetches user-related data and builds the profile page dynamically.
 *
 * - Retrieves profile info, won bids, active listings, and bids.
 * - Uses builder functions to render sections for profile info, listings, bids, and won auctions.
 * - Performs UI checks for conditional visibility.
 * - Removes loading animation from the main content area when done.
 *
 * @async
 * @function onBuild
 * @param {string} username - The username whose profile page is to be built.
 * @returns {Promise<void>} Resolves when all data is fetched and UI is constructed.
 */
export async function onBuild(username) {
  const main = document.querySelector("main");
  //   Here i get the data neccessary to build the page
  const fetchedUserData = await fetchProfile(username);
  const fetchedUserWinsData = await fetchWins(username);
  const fetchedUserListingData = await fetchListings(username);
  const fetchedUserBids = await fetchBids(username);

  //   Here I get the pathing shortened down so it looks prettier

  const userData = fetchedUserData.data;
  const userWins = fetchedUserWinsData.data;
  const userListings = fetchedUserListingData.data;
  const userBids = fetchedUserBids.data;

  const avatarURL = userData.avatar.url;

  //  building the different sections dynamically

  buildProfileInfo(userData);

  buildActiveListings(userListings, avatarURL, username);

  buildActiveBids(userBids);

  buildWonBids(userWins);

  profileCheck();

  main.classList.remove("animate-pulse");
}
