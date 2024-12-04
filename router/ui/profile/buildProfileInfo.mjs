import { profilePageChecker } from "../../../src/Utilities/profilePageChecker.mjs";

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

  if (profilePageChecker) {
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
