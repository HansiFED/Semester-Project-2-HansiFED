import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";
import { listingRemainingIsoCalculator } from "../../../src/Utilities/listingRemainingIsoCalculator.mjs";

/**
 * Creates and appends a listing card element to the landing page listings container.
 *
 * - Displays seller profile info with clickable navigation to seller's profile.
 * - Shows listing creation date, image (with fallback), title, and description.
 * - Displays a live-updating auction ending countdown.
 * - The entire listing card is clickable to navigate to the listing detail page.
 *
 * @function buildLandingListings
 * @param {Object} listing - The listing data object.
 * @param {string} listing.id - The unique ID of the listing.
 * @param {Object} listing.seller - The seller's user data.
 * @param {string} listing.seller.name - Seller's username.
 * @param {Object} listing.seller.avatar - Seller's avatar info.
 * @param {string} listing.seller.avatar.url - URL of seller's avatar image.
 * @param {string} [listing.seller.avatar.alt] - Alt text for seller's avatar image.
 * @param {string} listing.created - ISO string of listing creation date.
 * @param {Array<Object>} listing.media - Array of media objects for the listing.
 * @param {string} listing.media[].url - Media image URL.
 * @param {string} [listing.media[].alt] - Alt text for the media image.
 * @param {string} listing.title - Listing title.
 * @param {string} listing.description - Listing description.
 * @param {string} listing.endsAt - ISO string of auction end date/time.
 * @returns {void}
 */
export function buildLandingListings(listing) {
  const auctionListingsDomElement = document.getElementById(
    "auctionListingsContainer",
  );

  const listingContainer = document.createElement("div");
  listingContainer.className =
    "listingContainer flex flex-col flex-grow bg-lightModeBoxes dark:bg-darkModeBoxes mt-8 px-4 py-4 mb-8 rounded-xl max-w-[700px] md:w-[350px] xl:max-w-[350px] lg:h-[650px] lg:w-80 lg:hover:scale-105 transition transition-300 cursor-pointer";

  listingContainer.addEventListener("click", () => {
    window.location.href = `/pages/listing/?id=${listing.id}`;
  });

  // Profile container
  const profileContainer = document.createElement("div");
  profileContainer.className = "nameAndPicture flex items-center gap-2";
  profileContainer.addEventListener("click", (event) => {
    event.stopPropagation();
    window.location.href = `/pages/profile/?username=${listing.seller.name}`;
  });

  const profileImage = document.createElement("img");
  profileImage.className = "listingPFP w-6 h-6 rounded-full object-cover";
  profileImage.src = listing.seller.avatar.url;
  profileImage.alt = listing.seller.avatar.alt || "User profile photo";

  const profileName = document.createElement("p");
  profileName.textContent = listing.seller.name;

  profileContainer.appendChild(profileImage);
  profileContainer.appendChild(profileName);

  // Listing container top
  const listingContainerTop = document.createElement("div");
  listingContainerTop.className =
    "listingContainerTop flex justify-between flex-wrap gap-4";

  const dateElement = document.createElement("p");
  dateElement.className = "date";
  dateElement.textContent = formatDate(listing.created);

  listingContainerTop.appendChild(profileContainer);
  listingContainerTop.appendChild(dateElement);

  // Media container
  const mediaContainer = document.createElement("div");
  mediaContainer.className = "w-full h-[300px] rounded-xl mt-4 overflow-hidden";

  const mediaImage = document.createElement("img");
  mediaImage.src = listing.media[0]?.url || "/media/placeholderImg.jpeg";
  mediaImage.className = "activeListingImage object-cover w-full h-full";
  mediaImage.alt = listing.media[0]?.alt || "Listing image";

  mediaContainer.appendChild(mediaImage);

  // Listing info
  const listingInfo = document.createElement("div");
  listingInfo.className = "listingInfo flex flex-col flex-grow justify-between";

  const titleElement = document.createElement("h4");
  titleElement.className =
    "listingTitle text-lg mt-5 overflow-hidden line-clamp-2";
  titleElement.textContent = listing.title;

  const descElement = document.createElement("p");
  descElement.className = "listingDesc mt-5 overflow-hidden line-clamp-4";
  const descItalic = document.createElement("i");
  descItalic.className = "overflow-hidden line-clamp-4";
  descItalic.textContent = listing.description;
  descElement.appendChild(descItalic);

  const auctionEndingContainer = document.createElement("div");
  auctionEndingContainer.className = "flex justify-between mt-5";

  const auctionEndingLabel = document.createElement("p");
  auctionEndingLabel.textContent = "Auction Ending:";

  const auctionEndingValue = document.createElement("p");
  auctionEndingValue.className = "auctionEndingValue font-inriasans font-light";
  auctionEndingValue.textContent = listingRemainingIsoCalculator(
    listing.endsAt,
  );

  setInterval(() => {
    auctionEndingValue.textContent = listingRemainingIsoCalculator(
      listing.endsAt,
    );
  }, 1000);

  auctionEndingContainer.appendChild(auctionEndingLabel);
  auctionEndingContainer.appendChild(auctionEndingValue);

  // Create the bottomDiv wrapper for the auction details
  const bottomDiv = document.createElement("div");
  bottomDiv.className = "mt-auto";

  const lineElement = document.createElement("div");
  lineElement.className =
    "bg-lightModeBlackText w-full dark:bg-white h-[2px] mt-10";

  bottomDiv.appendChild(lineElement);
  bottomDiv.appendChild(auctionEndingContainer);

  // Assemble the listing container
  listingInfo.appendChild(titleElement);
  listingInfo.appendChild(descElement);
  listingInfo.appendChild(bottomDiv); // Add bottomDiv here

  listingContainer.appendChild(listingContainerTop);
  listingContainer.appendChild(mediaContainer);
  listingContainer.appendChild(listingInfo);

  auctionListingsDomElement.appendChild(listingContainer);
}
