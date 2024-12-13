import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";

export function buildWonBids(wonBids) {
  const wonBidsContainerDomElement = document.getElementById("wonBids");

  wonBidsContainerDomElement.innerHTML = ""; // Clear existing content

  wonBids.forEach((listing) => {
    const listingDiv = document.createElement("div");
    listingDiv.id = listing.id;
    listingDiv.className =
      "listingContainer flex flex-col flex-grow bg-lightModeBoxes dark:bg-darkModeBoxes mt-8 px-4 py-4 mb-8 rounded-xl max-w-[700px] md:w-[350px] xl:max-w-[350px] lg:h-[650px] lg:w-80 lg:hover:scale-105 transition transition-300 cursor-pointer";

    const listingTopDiv = document.createElement("div");
    listingTopDiv.className =
      "listingContainerTop flex justify-between flex-wrap gap-4";

    const nameAndPictureDiv = document.createElement("div");
    nameAndPictureDiv.className = "nameAndPicture flex items-center gap-2";

    const profileImage = document.createElement("img");
    profileImage.className = "wonBidsPFP w-6 h-6 object-cover rounded-full";
    profileImage.src = listing.seller.avatar.url;
    profileImage.alt = "user profile photo";

    const userNameParagraph = document.createElement("p");
    userNameParagraph.textContent = listing.seller.name;

    nameAndPictureDiv.appendChild(profileImage);
    nameAndPictureDiv.appendChild(userNameParagraph);

    const dateParagraph = document.createElement("p");
    dateParagraph.className = "date";
    dateParagraph.textContent = formatDate(listing.created);

    listingTopDiv.appendChild(nameAndPictureDiv);
    listingTopDiv.appendChild(dateParagraph);

    const listingImage = document.createElement("img");
    listingImage.className =
      "wonBidsImage object-cover rounded-xl mt-4 h-60 lg:h-72 w-full";
    listingImage.src = listing.media[0]?.url || "/media/placeholderImg.jpeg";
    listingImage.alt = "listing image";

    const listingInfoDiv = document.createElement("div");
    listingInfoDiv.className =
      "listingInfo flex flex-col flex-grow justify-between";

    const titleElement = document.createElement("h4");
    titleElement.className =
      "listingTitle text-lg mt-5 overflow-hidden line-clamp-2";
    titleElement.textContent = listing.title;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.className =
      "listingDesc mt-5 overflow-hidden line-clamp-4 overflow-hidden line-clamp-4";
    descriptionParagraph.textContent = `"${listing.description}"`;

    const bottomDiv = document.createElement("div");
    bottomDiv.className = "relative mt-auto"; // This ensures the bottom section sticks to the bottom.

    const separatorLine = document.createElement("div");
    separatorLine.className =
      "bg-lightModeBlackText dark:bg-white w-full h-[2px] mt-10";

    const auctionEndingDiv = document.createElement("div");
    auctionEndingDiv.className = "flex justify-between mt-5";

    const auctionEndingText = document.createElement("p");
    auctionEndingText.textContent = "Auction Ending:";

    const auctionEndingDate = document.createElement("p");
    auctionEndingDate.textContent = formatDate(listing.endsAt);

    auctionEndingDiv.appendChild(auctionEndingText);
    auctionEndingDiv.appendChild(auctionEndingDate);

    // Append separator line and auction ending section to bottomDiv
    bottomDiv.appendChild(separatorLine);
    bottomDiv.appendChild(auctionEndingDiv);

    // Append children to the listing info div
    listingInfoDiv.appendChild(titleElement);
    listingInfoDiv.appendChild(descriptionParagraph);
    listingInfoDiv.appendChild(bottomDiv);

    // Append everything to the listing div
    listingDiv.appendChild(listingTopDiv);
    listingDiv.appendChild(listingImage);
    listingDiv.appendChild(listingInfoDiv);

    // Add a click event listener for the listing
    listingDiv.addEventListener("click", () => {
      window.location.href = `/pages/listing/?id=${listing.id}`;
    });

    wonBidsContainerDomElement.appendChild(listingDiv);
  });
}
