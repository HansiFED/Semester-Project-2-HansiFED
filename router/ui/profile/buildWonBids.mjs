import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";

export function buildWonBids(wonBids) {
  const wonBidsContainerDomElement = document.getElementById("wonBids");

  wonBidsContainerDomElement.innerHTML = "";

  wonBids.forEach((listing) => {
    const singleListing = `<div id="${listing.id}" class="listingContainer bg-lightModeBoxes mt-8 px-4 py-4 mb-8 rounded-xl">
              <div class="listingContainerTop flex flex-grow justify-between">
                <div class="nameAndPicture flex items-center gap-2">
                  <img class="listingPFP w-6 rounded-full" src="/src/Media/stockPfp.jpg" alt="user profile photo" />
                  <p>HansiFed</p>
                </div>
                <p class="date">${formatDate(listing.created)}</p>
              </div>
              <img src="${listing.media[0].url}" class="activeListingImage object-cover rounded-xl mt-4 w-full"
                alt="listing image" />
              <div class="listingInfo">
                <h4 class="listingTitle text-lg mt-5">${listing.title}</h4>
                <p class="listingDesc mt-5">
                  "${listing.description}"
                </p>
                <div class="bg-lightModeBlackText w-full h-[2px] mt-10"></div>
                <div class="flex justify-between mt-5">
                  <p>Auction Ending:</p>
                  <p>${formatDate(listing.endsAt)}</p>
                </div>
              </div>
            </div>`;

    const listingElement = document.createElement("div");
    listingElement.innerHTML = singleListing;

    const listingDiv = listingElement.firstChild;

    wonBidsContainerDomElement.appendChild(listingDiv);
  });
}
