import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";

export function buildActiveBids(activeBids) {
  const activeBidsContainerDomElement = document.getElementById("activeBids");

  activeBidsContainerDomElement.innerHTML = ""; // Clear existing content

  activeBids.forEach((bid) => {
    // Create the outer div for the bid container
    const bidDiv = document.createElement("div");
    bidDiv.id = bid.listing.id;
    bidDiv.className =
      "listingContainer flex flex-col flex-grow bg-lightModeBoxes mt-8 px-4 py-4 mb-8 rounded-xl max-w-[700px] md:w-[350px] xl:max-w-[350px] lg:h-[650px] lg:w-80 lg:hover:scale-105 transition transition-300 cursor-pointer";

    // Create the top section of the bid
    const bidTopDiv = document.createElement("div");
    bidTopDiv.className =
      "listingContainerTop flex justify-between flex-wrap gap-4";

    const nameAndPictureDiv = document.createElement("div");
    nameAndPictureDiv.className = "nameAndPicture flex items-center gap-2";

    const profileImage = document.createElement("img");
    profileImage.className = "listingPFP w-6 h-6 object-cover rounded-full"; // Consistent with Example 1
    profileImage.src = bid.bidder.avatar.url || "/media/stockPfp.jpg";
    profileImage.alt = "user profile photo";

    const userNameParagraph = document.createElement("p");
    userNameParagraph.textContent = bid.bidder.name;

    nameAndPictureDiv.appendChild(profileImage);
    nameAndPictureDiv.appendChild(userNameParagraph);

    const bidAmountDiv = document.createElement("div");
    bidAmountDiv.className = "flex gap-2";

    const bidAmountText = document.createElement("p");
    bidAmountText.textContent = `Current Bid: ${bid.amount}`;

    const coinIcon = document.createElement("img");
    coinIcon.src = "/media/coinsIconLightMode.svg";
    coinIcon.alt = "credit amount icon";

    bidAmountDiv.appendChild(bidAmountText);
    bidAmountDiv.appendChild(coinIcon);

    bidTopDiv.appendChild(nameAndPictureDiv);
    bidTopDiv.appendChild(bidAmountDiv);

    // Create the image for the bid
    const bidImage = document.createElement("img");
    bidImage.className =
      "activeListingImage object-cover rounded-xl mt-4 h-60 lg:h-72 w-full";
    bidImage.src = bid.listing.media[0]?.url || "/media/placeholderImg.jpeg";
    bidImage.alt = "listing image";

    // Create the bid info section
    const bidInfoDiv = document.createElement("div");
    bidInfoDiv.className =
      "listingInfo flex flex-col flex-grow justify-between";

    const titleElement = document.createElement("h4");
    titleElement.className =
      "listingTitle text-lg mt-5 overflow-hidden line-clamp-2";
    titleElement.textContent = bid.listing.title;

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.className =
      "listingDesc mt-5 overflow-hidden line-clamp-4 overflow-hidden line-clamp-4";
    descriptionParagraph.textContent = `"${bid.listing.description}"`;

    const bottomDiv = document.createElement("div");
    bottomDiv.className = "relative mt-auto"; // Ensures bottom content stays at the bottom

    const separatorLine = document.createElement("div");
    separatorLine.className = "bg-lightModeBlackText w-full h-[2px] mt-10";

    const auctionEndingDiv = document.createElement("div");
    auctionEndingDiv.className = "flex justify-between mt-5";

    const auctionEndingText = document.createElement("p");
    auctionEndingText.textContent = "Auction Ending:";

    const auctionEndingDate = document.createElement("p");
    auctionEndingDate.textContent = formatDate(bid.listing.endsAt);

    auctionEndingDiv.appendChild(auctionEndingText);
    auctionEndingDiv.appendChild(auctionEndingDate);

    bottomDiv.appendChild(separatorLine);
    bottomDiv.appendChild(auctionEndingDiv);

    bidInfoDiv.appendChild(titleElement);
    bidInfoDiv.appendChild(descriptionParagraph);
    bidInfoDiv.appendChild(bottomDiv); // Append bottom div to info section

    // Append all sections to the bid container
    bidDiv.appendChild(bidTopDiv);
    bidDiv.appendChild(bidImage);
    bidDiv.appendChild(bidInfoDiv);

    // Add click event listener for navigation
    bidDiv.addEventListener("click", () => {
      window.location.href = `/pages/listing/?id=${bid.listing.id}`;
    });

    // Append the bid container to the active bids container
    activeBidsContainerDomElement.appendChild(bidDiv);
  });
}
