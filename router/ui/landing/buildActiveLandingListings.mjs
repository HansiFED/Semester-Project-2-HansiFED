import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";
import { listingRemainingIsoCalculator } from "../../../src/Utilities/listingRemainingIsoCalculator.mjs";

export function buildLandingListings(listing) {
  const auctionListingsDomElement = document.getElementById(
    "auctionListingsWrapper",
  );

  const listingContainer = document.createElement("div");
  listingContainer.classList.add(
    "listingContainer",
    "bg-lightModeBoxes",
    "mt-8",
    "px-4",
    "py-4",
    "mb-8",
    "rounded-xl",
  );

  listingContainer.addEventListener("click", () => {
    window.location.href = `/pages/listing/?id=${listing.id}`;
  });

  const profileContainer = document.createElement("div");
  profileContainer.classList.add(
    "nameAndPicture",
    "flex",
    "items-center",
    "gap-2",
  );

  profileContainer.addEventListener("click", (event) => {
    event.stopPropagation();
    window.location.href = `/pages/profile/?username=${listing.seller.name}`;
  });

  profileContainer.innerHTML = `
    <img class="listingPFP w-6 h-6 rounded-full object-cover" src="${listing.seller.avatar.url}" alt="${listing.seller.avatar.alt || "User profile photo"}" />
    <p>${listing.seller.name}</p>
  `;

  listingContainer.innerHTML = `
    <div class="listingContainerTop flex flex-grow justify-between">
      <div id="profileContainerPlaceholder"></div>
      <p class="date">${formatDate(listing.created)}</p>
    </div>
    <img src="${listing.media[0]?.url || "/src/Media/placeholderImg.jpeg"}" class="activeListingImage object-cover h-1 rounded-xl mt-4 w-full"
      alt="${listing.media[0]?.alt || "Listing image"}" />
    <div class="listingInfo">
      <h4 class="listingTitle text-lg mt-5">${listing.title}</h4>
      <p class="listingDesc mt-5 overflow-hidden"><i class="line-clamp-4">${listing.description}</i></p>
      <div class="bg-lightModeBlackText w-full h-[2px] mt-10"></div>
      <div class="flex justify-between mt-5">
        <p>Auction Ending:</p>
        <p>${listingRemainingIsoCalculator(listing.endsAt)}</p>
      </div>
    </div>
  `;

  listingContainer
    .querySelector("#profileContainerPlaceholder")
    .replaceWith(profileContainer);

  auctionListingsDomElement.appendChild(listingContainer);
}
