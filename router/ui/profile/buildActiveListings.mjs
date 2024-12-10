import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";

export function buildActiveListings(activeListings, pfp, userName) {
  const activeListingsContainerDomElement =
    document.getElementById("activeListings");

  activeListingsContainerDomElement.innerHTML = ""; // Clear existing content

  activeListings.forEach((listing) => {
    const singleListing = `<div id="${listing.id}" class="listingContainer bg-lightModeBoxes mt-8 px-4 py-4 mb-8 rounded-xl">
              <div class="listingContainerTop flex flex-grow justify-between">
                <div class="nameAndPicture flex items-center gap-2">
                  <img class="listingPFP w-6 h-6 object-cover rounded-full" src="${pfp}" alt="user profile photo" />
                  <p>${userName}</p>
                </div>
                <p class="date">${formatDate(listing.created)}</p>
              </div>
              <img src="${listing.media[0]?.url || "/src/Media/placeholderImg.jpeg"}" class="activeListingImage object-cover rounded-xl mt-4 w-full "
                alt="listing image" />
              <div class="listingInfo">
              <div class="flex items-center justify-between mt-5">  
              <h4 class="listingTitle overflow-hidden text-xl">${listing.title}</h4>
              </div>
                <p class="listingDesc mt-5 overflow-hidden">
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

    listingDiv.addEventListener("click", () => {
      window.location.href = `/pages/listing/?id=${listing.id}`;
    });

    activeListingsContainerDomElement.appendChild(listingDiv);
  });
}
