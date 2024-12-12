import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";
import { listingRemainingIsoCalculator } from "../../../src/Utilities/listingRemainingIsoCalculator.mjs";

export function buildLandingListings(listing) {
  const auctionListingsDomElement = document.getElementById(
    "auctionListingsContainer",
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
    "cursor-pointer",
  );

  listingContainer.addEventListener("click", () => {
    window.location.href = `/pages/listing/?id=${listing.id}`;
  });

  // Profile container
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

  const profileImage = document.createElement("img");
  profileImage.classList.add(
    "listingPFP",
    "w-6",
    "h-6",
    "rounded-full",
    "object-cover",
  );
  profileImage.src = listing.seller.avatar.url;
  profileImage.alt = listing.seller.avatar.alt || "User profile photo";

  const profileName = document.createElement("p");
  profileName.textContent = listing.seller.name;

  profileContainer.appendChild(profileImage);
  profileContainer.appendChild(profileName);

  // Listing container top
  const listingContainerTop = document.createElement("div");
  listingContainerTop.classList.add(
    "listingContainerTop",
    "flex",
    "flex-grow",
    "justify-between",
  );

  const dateElement = document.createElement("p");
  dateElement.classList.add("date");
  dateElement.textContent = formatDate(listing.created);

  listingContainerTop.appendChild(profileContainer);
  listingContainerTop.appendChild(dateElement);

  // Media container
  const mediaContainer = document.createElement("div");
  mediaContainer.classList.add(
    "w-full",
    "max-h-[200px]",
    "h-full",
    "rounded-xl",
    "mt-4",
    "overflow-hidden",
  );

  const mediaImage = document.createElement("img");
  mediaImage.src = listing.media[0]?.url || "/src/Media/placeholderImg.jpeg";
  mediaImage.classList.add(
    "activeListingImage",
    "object-cover",
    "w-full",
    "h-full",
  );
  mediaImage.alt = listing.media[0]?.alt || "Listing image";

  mediaContainer.appendChild(mediaImage);

  // Listing info
  const listingInfo = document.createElement("div");
  listingInfo.classList.add("listingInfo");

  const titleElement = document.createElement("h4");
  titleElement.classList.add("listingTitle", "text-lg", "mt-5");
  titleElement.textContent = listing.title;

  const descElement = document.createElement("p");
  descElement.classList.add("listingDesc", "mt-5");

  const descItalic = document.createElement("i");
  descItalic.classList.add("line-clamp-4", "overflow-hidden");
  descItalic.textContent = listing.description;

  descElement.appendChild(descItalic);

  const separator = document.createElement("div");
  separator.classList.add(
    "bg-lightModeBlackText",
    "w-full",
    "h-[2px]",
    "mt-10",
  );

  const auctionEndingContainer = document.createElement("div");
  auctionEndingContainer.classList.add("flex", "justify-between", "mt-5");

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

  listingInfo.appendChild(titleElement);
  listingInfo.appendChild(descElement);
  listingInfo.appendChild(separator);
  listingInfo.appendChild(auctionEndingContainer);

  // Assemble the listing container
  listingContainer.appendChild(listingContainerTop);
  listingContainer.appendChild(mediaContainer);
  listingContainer.appendChild(listingInfo);

  auctionListingsDomElement.appendChild(listingContainer);
}
