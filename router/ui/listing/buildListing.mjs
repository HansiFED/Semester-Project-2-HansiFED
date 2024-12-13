import { accessToken, myUserName } from "../../../API/constants.mjs";
import { fetchListing } from "../../../src/js/listing/fetchListing.mjs";
import { listingRemainingIsoCalculator } from "../../../src/Utilities/listingRemainingIsoCalculator.mjs";
import { timeSinceBid } from "../../../src/Utilities/timeSinceBid.mjs";

export async function buildListing() {
  const main = document.querySelector("main");
  const initialData = await fetchListing();
  const data = initialData.data;
  const listingImage = data.media[0]?.url || "/media/placeholderImg.jpeg";
  const listingTitle = data.title;
  const currentBid = data.bids[data.bids.length - 1]?.amount || "0";
  const listingDesc = data.description;
  const sellerPfp = data.seller.avatar.url;
  const sellerId = data.seller.name;
  const endsAt = listingRemainingIsoCalculator(data.endsAt);
  const bidders = data.bids;

  const userInfo = document.getElementById("userInfo");
  const listingImageDomElement = document.getElementById("listingImage");
  const listingTitleDomElement = document.getElementById("listingTitle");
  const currentBidDomElement = document.getElementById("currentBid");
  const listingDescDomElement = document.getElementById("listingDesc");
  const userPfpDomElement = document.getElementById("userPfp");
  const userNameDomElement = document.getElementById("userName");
  const auctionEndingDomElement = document.getElementById("endsAt");
  // const biddersWrapperDomElement = document.getElementById(
  //   "currentBiddersWrapper",
  // );

  if (!accessToken) {
    document.getElementById("placeBidContainer").classList.add("hidden");
    document
      .getElementById("loginToPlaceBidContainer")
      .classList.remove("hidden");
  }

  listingImageDomElement.src = listingImage;
  listingTitleDomElement.innerHTML = listingTitle;
  currentBidDomElement.innerHTML = currentBid;
  listingDescDomElement.innerHTML = listingDesc;
  userPfpDomElement.src = sellerPfp;
  userNameDomElement.innerHTML = sellerId;
  auctionEndingDomElement.innerHTML = endsAt;

  userInfo.classList.add("cursor-pointer");

  if (accessToken) {
    document.getElementById("currentBiddersWrapper").classList.remove("hidden");
    bidders.forEach((bid) => {
      const bidderContainer = document.createElement("div");
      bidderContainer.classList.add("mt-8");

      const biddersChildContainer = document.createElement("div");
      biddersChildContainer.className = "flex";

      const bidderInfoWrapper = document.createElement("div");
      bidderInfoWrapper.classList.add("flex", "cursor-pointer");

      const bidderPfp = document.createElement("img");
      bidderPfp.className = "w-6 h-6 object-cover rounded-full";
      bidderPfp.src = bid.bidder.avatar.url;

      const bidderUserName = document.createElement("p");
      bidderUserName.className = "ml-3";
      bidderUserName.innerHTML = `${bid.bidder.name}:`;

      const userBid = document.createElement("div");
      userBid.className = "flex ml-2 gap-2";

      const userBidAmount = document.createElement("p");
      userBidAmount.classList.add("ml-5");
      userBidAmount.innerHTML = bid.amount;

      const creditsImageIcon = document.createElement("img");
      creditsImageIcon.alt = "amount of credits icon";
      creditsImageIcon.setAttribute("src", "/media/coinsIconLightMode.svg");

      const timeSinceBidPElement = document.createElement("p");
      timeSinceBidPElement.classList.add("ml-auto");
      timeSinceBidPElement.innerHTML = `${timeSinceBid(bid.created)}`;

      bidderInfoWrapper.addEventListener("click", () => {
        window.location.href = `/pages/profile/?username=${bid.bidder.name}`;
      });

      userBid.append(userBidAmount, creditsImageIcon);
      bidderInfoWrapper.append(bidderPfp, bidderUserName);
      biddersChildContainer.append(
        bidderInfoWrapper,
        userBid,
        timeSinceBidPElement,
      );
      bidderContainer.append(biddersChildContainer);
      const currentBiddersHeader = document.querySelector(
        "#currentBiddersWrapper > div",
      );
      currentBiddersHeader.insertAdjacentElement("afterend", bidderContainer);
    });

    userInfo.addEventListener("click", () => {
      window.location.href = `/pages/profile/?username=${sellerId}`;
    });

    if (data.endsAt) {
      setInterval(() => {
        const updatedTime = listingRemainingIsoCalculator(data.endsAt);
        auctionEndingDomElement.textContent = updatedTime;
      }, 1000);
    }

    if (currentBid == "0") {
      document.getElementById("currentBiddersWrapper").classList.add("hidden");
    }

    if (myUserName == sellerId) {
      document.getElementById("placeBidWrapper").classList.add("hidden");
    }
  }
  main.classList.remove("animate-pulse");
}
