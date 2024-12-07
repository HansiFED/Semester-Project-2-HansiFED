import { accessToken } from "../../../API/constants.mjs";
import { formatDate } from "../../../src/Utilities/dateFromIso.mjs";
import { listingRemainingIsoCalculator } from "../../../src/Utilities/listingRemainingIsoCalculator.mjs";

export function buildSearch() {
  const searchedUsersRaw = JSON.parse(localStorage.getItem("userSearchData"));
  const searchedListingsRaw = JSON.parse(
    localStorage.getItem("listingSearchData"),
  );

  const searchedUsers = searchedUsersRaw?.data || 0;
  const searchedListings = searchedListingsRaw.data;

  const searchKeyWord = localStorage.getItem("searchKeyWord");

  console.log(searchedUsers, searchedListings);
  console.log("Type:", typeof searchedUsers);

  const domSearchHeader = document.getElementById("searchHeader");
  domSearchHeader.innerHTML = `Showing search result(s) for: <i> ${searchKeyWord} </i>`;

  const userList = document.getElementById("userList");
  const listingsList = document.getElementById("listingsList");

  if (!accessToken) {
    userList.innerHTML = "<i> You must be logged in to view users </i>";
  } else if (searchedUsers.length > 0) {
    userList.innerHTML = "";
    searchedUsers.forEach((user) => {
      const userContainer = document.createElement("div");
      userContainer.className =
        "userContainer mt-5 flex flex-col cursor-pointer items-center";
      userContainer.addEventListener("click", () => {
        window.location.href = `/pages/profile/?username=${user.name}`;
      });

      const userImg = document.createElement("img");
      userImg.className = "w-20 h-20 object-cover rounded-full";
      userImg.src = `${user.avatar?.url || "/src/Media/stockPfp.jpg"}`;
      userImg.alt = `${user.avatar.alt || "User Avatar"}`;

      const userName = document.createElement("p");
      userName.innerText = user.name;

      userContainer.append(userImg, userName);
      userList.append(userContainer);
    });
  } else {
    userList.innerHTML = "<i> No users found. </i>";
  }

  if (searchedListings.length > 0) {
    listingsList.innerHTML = "";

    searchedListings.forEach((listing) => {
      const listingContainer = document.createElement("div");
      listingContainer.className = "listingContainer cursor-pointer";
      listingContainer.addEventListener("click", () => {
        window.location.href = `/pages/listing/?id=${listing.id}`;
      });

      const listingBox = document.createElement("div");
      listingBox.className =
        "listingContainer1 bg-lightModeBoxes mt-8 px-4 py-4 mb-8 rounded-xl";

      const listingTop = document.createElement("div");
      listingTop.className =
        "listingContainerTop flex flex-grow justify-between";

      const nameAndPicture = document.createElement("div");
      nameAndPicture.className =
        "nameAndPicture flex items-center gap-2 cursor-pointer";
      nameAndPicture.addEventListener("click", (event) => {
        event.stopPropagation();
        window.location.href = `/pages/profile/?username=${listing.seller.name}`;
      });

      const sellerImg = document.createElement("img");
      sellerImg.className = "listingPFP w-6 h-6 object-cover rounded-full";
      sellerImg.src = listing.seller.avatar?.url || "/src/Media/stockPfp.jpg";
      sellerImg.alt = listing.seller.avatar?.alt || "Seller Avatar";

      const sellerName = document.createElement("p");
      sellerName.innerText = listing.seller.name;

      nameAndPicture.append(sellerImg, sellerName);
      listingTop.append(nameAndPicture);

      const dateElement = document.createElement("p");
      const createdDate = formatDate(listing.created);
      dateElement.className = "date";
      dateElement.innerText = createdDate;

      listingTop.appendChild(dateElement);
      listingBox.appendChild(listingTop);

      const listingImage = document.createElement("img");
      listingImage.src =
        listing.media[0]?.url || "/src/Media/placeholderImg.jpeg";
      listingImage.className =
        "activeListingImage object-cover rounded-xl mt-4 w-full";
      listingImage.alt = "Listing Image";

      listingBox.appendChild(listingImage);

      const listingInfo = document.createElement("div");
      listingInfo.className = "listingInfo";

      const titleElement = document.createElement("h4");
      titleElement.className = "listingTitle text-lg mt-5";
      titleElement.innerText = listing.title;

      const descriptionElement = document.createElement("p");
      descriptionElement.className = "listingDesc mt-5 overflow-hidden";
      descriptionElement.innerText = listing.description;

      const lineElement = document.createElement("div");
      lineElement.className = "bg-lightModeBlackText w-full h-[2px] mt-10";

      const timerElement = document.createElement("div");
      timerElement.className = "flex justify-between mt-5";
      const endingText = document.createElement("p");
      endingText.innerText = "Auction Ending:";

      const endsAt = listingRemainingIsoCalculator(listing.endsAt);
      const remainingTime = document.createElement("p");
      remainingTime.innerText = `${endsAt}`;

      timerElement.append(endingText, remainingTime);

      listingInfo.append(
        titleElement,
        descriptionElement,
        lineElement,
        timerElement,
      );
      listingBox.appendChild(listingInfo);

      listingContainer.appendChild(listingBox);
      listingsList.appendChild(listingContainer);
    });
  } else {
    listingsList.innerHTML = "<p> No listings found </p>";
  }

  document.querySelector("main").classList.remove("animate-pulse");
}
