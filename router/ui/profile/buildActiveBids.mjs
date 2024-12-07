import { list } from "postcss";
import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";

export function buildActiveBids(activeBids) {
  const activeBidsContainerDomElement = document.getElementById("activeBids");

  activeBidsContainerDomElement.innerHTML = ""; // Clear existing content

  activeBids.forEach((listing) => {
    console.log(listing.listing.id);

    const singleListing = `<div id="${listing.listing.id}" class="listingContainer bg-lightModeBoxes mt-8 px-4 py-4 mb-8 rounded-xl">
              <div class="listingContainerTop flex flex-grow justify-between">
                <div class="nameAndPicture flex items-center gap-2">
                  <img class="listingPFP w-6 h-6 object-cover rounded-full" src="${listing.bidder.avatar.url}" alt="user profile photo" />
                  <p>${listing.bidder.name}</p>
                </div>
                <div class="flex gap-2">
                     <p>Current Bid:  ${listing.amount}</p>
                <img src="/src/Media/coinsIconLightMode.svg" alt="credit amount icon">
                </div>
              </div>
              <img src="${listing.listing.media[0].url || "/src/Media/placeHolderListing.png"}" class="activeListingImage object-cover rounded-xl mt-4 w-full"
                alt="listing image" />
              <div class="listingInfo">
                <h4 class="listingTitle overflow-hidden text-lg mt-5">${listing.listing.title}</h4>
                <p class="listingDesc mt-5 overflow-hidden">
                  "${listing.listing.description}"
                </p>
                <div class="bg-lightModeBlackText w-full h-[2px] mt-10"></div>
                <div class="flex justify-between mt-5">
                  <p>Auction Ending:</p>
                  <p>${formatDate(listing.listing.endsAt)}</p>
                </div>
              </div>
            </div>`;

    const listingElement = document.createElement("div");
    listingElement.innerHTML = singleListing;

    const listingDiv = listingElement.firstChild;

    listingDiv.addEventListener("click", () => {
      window.location.href = `/pages/listing/?id=${listing.listing.id}`;
    });

    activeBidsContainerDomElement.appendChild(listingDiv);
  });
}
