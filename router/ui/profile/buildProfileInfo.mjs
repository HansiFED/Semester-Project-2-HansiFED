import { profilePageChecker } from "../../../src/Utilities/profilePageChecker.mjs";

/**
 * Populates the user profile section with the provided data.
 *
 * - Updates the banner image, profile picture, username, credits, and bio in the DOM.
 * - Checks if the current profile page belongs to the logged-in user using `profilePageChecker`.
 *   If true, reveals the edit icon.
 *
 * @function buildProfileInfo
 * @param {Object} data - The user profile data object.
 * @param {string} data.name - The user's display name.
 * @param {Object} data.avatar - The user's avatar information.
 * @param {string} data.avatar.url - URL of the avatar image.
 * @param {string} data.avatar.alt - Alt text for the avatar image.
 * @param {Object} data.banner - The user's banner information.
 * @param {string} data.banner.url - URL of the banner image.
 * @param {string} data.banner.alt - Alt text for the banner image.
 * @param {string} data.bio - The user's biography text.
 * @param {number} data.credits - The user's credit balance.
 * @returns {void}
 */
export function buildProfileInfo(data) {
  const userName = data.name;
  const avatarURL = data.avatar.url;
  const avatarALT = data.avatar.alt;
  const userBanner = data.banner.url;
  const userBannerALT = data.banner.alt;
  const userBio = data.bio;
  const credits = data.credits;

  const userBannerDomElement = document.getElementById("profileBanner");
  const userNameDomElement = document.getElementById("userName");
  const userPfpDomElement = document.getElementById("pfp");
  const userCreditsDomElement = document.getElementById("userCredits");
  const userBioDomElement = document.getElementById("userBio");

  if (profilePageChecker()) {
    document.getElementById("editUserIcon").classList.remove("hidden");
  }

  userBannerDomElement.src = userBanner;
  userBannerDomElement.alt = userBannerALT;
  userNameDomElement.innerHTML = userName;
  userPfpDomElement.src = avatarURL;
  userPfpDomElement.alt = avatarALT;
  userCreditsDomElement.innerHTML = credits;
  userBioDomElement.innerHTML = userBio;
}
