import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";

export function buildActiveListings(activeListings, pfp, userName) {
  const activeListingsContainerDomElement =
    document.getElementById("activeListings");

  activeListingsContainerDomElement.innerHTML = ""; // Clear existing content

  activeListings.forEach((listing) => {
    // Create the outer div for the listing container with appropriate classes
    const listingDiv = document.createElement("div");
    listingDiv.id = listing.id;
    listingDiv.className =
      "listingContainer flex flex-col flex-grow bg-lightModeBoxes mt-8 px-4 py-4 mb-8 rounded-xl max-w-[700px] md:w-[350px] xl:max-w-[350px] lg:h-[650px] lg:w-80 lg:hover:scale-105 transition transition-300 cursor-pointer";

    // Create the top part of the listing
    const listingTopDiv = document.createElement("div");
    listingTopDiv.className =
      "listingContainerTop flex justify-between flex-wrap gap-4";

    // Create the name and picture container
    const nameAndPictureDiv = document.createElement("div");
    nameAndPictureDiv.className = "nameAndPicture flex items-center gap-2";

    // Create the profile image
    const profileImage = document.createElement("img");
    profileImage.className = "listingPFP w-6 h-6 object-cover rounded-full";
    profileImage.src = pfp;
    profileImage.alt = "user profile photo";

    // Create the user name paragraph
    const userNameParagraph = document.createElement("p");
    userNameParagraph.textContent = userName;

    nameAndPictureDiv.appendChild(profileImage);
    nameAndPictureDiv.appendChild(userNameParagraph);

    // Create the date paragraph
    const dateParagraph = document.createElement("p");
    dateParagraph.className = "date";
    dateParagraph.textContent = formatDate(listing.created);

    listingTopDiv.appendChild(nameAndPictureDiv);
    listingTopDiv.appendChild(dateParagraph);

    // Create the image element for the listing
    const listingImage = document.createElement("img");
    listingImage.className =
      "activeListingImage object-cover rounded-xl mt-4 h-60 lg:h-72 w-full";
    listingImage.src =
      listing.media[0]?.url || "/src/Media/placeholderImg.jpeg";
    listingImage.alt = "listing image";

    // Create the listing info container with appropriate flex and styling
    const listingInfoDiv = document.createElement("div");
    listingInfoDiv.className =
      "listingInfo flex flex-col flex-grow justify-between";

    // Create the title
    const titleElement = document.createElement("h4");
    titleElement.className = "listingTitle text-lg mt-5";
    titleElement.textContent = listing.title;

    // Create the description
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.className =
      "listingDesc mt-5 overflow-hidden line-clamp-4";
    descriptionParagraph.textContent = `"${listing.description}"`;

    // Create the auction ending section wrapped in a div
    const bottomDiv = document.createElement("div");
    bottomDiv.className = "mt-auto";

    const separatorLine = document.createElement("div");
    separatorLine.className = "bg-lightModeBlackText w-full h-[2px] mt-10";

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

    // Append the listing div to the active listings container
    activeListingsContainerDomElement.appendChild(listingDiv);
  });
}
