import { fetchLandingCarousel } from "../../../src/js/landing/fetchLandingCarousel.mjs";
import { listingRemainingIsoCalculator } from "../../../src/Utilities/listingRemainingIsoCalculator.mjs";

let currentIndex = 0;
let carouselData = [];

export async function buildLandingCarousel() {
  try {
    const rawData = await fetchLandingCarousel();
    carouselData = rawData.data;

    if (carouselData.length > 0) {
      renderCarouselItem(currentIndex);
      setupNavigation();
      setupClickNavigation();
    } else {
      console.error("No carousel data available");
    }
  } catch (error) {
    console.error("Error fetching carousel data:", error);
  }
}

function renderCarouselItem(index) {
  const carouselListing = document.querySelector(
    "#carouselListings figure img",
  );
  const caption = document.querySelector("#carouselListings figcaption");

  const item = carouselData[index];
  const media = item.media[0];

  carouselListing.src = media ? media.url : "/src/Media/placeholderImg.jpeg";
  carouselListing.alt = media ? media.alt : "No image available";

  caption.querySelector("h2").textContent = item.title || "Auction Listing";
  caption.querySelector("p").textContent =
    item.description || "No description available";

  const sellerAvatar = caption.querySelector("#userContainer img");
  const sellerName = caption.querySelector("#userContainer p");

  sellerAvatar.src = item.seller.avatar?.url || "/src/Media/stockPfp.jpg";
  sellerAvatar.alt = item.seller.avatar?.alt || "Seller avatar";
  sellerName.textContent = item.seller.name || "Unknown seller";

  sellerAvatar.onclick = () =>
    (window.location.href = `/pages/profile/?username=${item.seller.name}`);
  sellerName.onclick = () =>
    (window.location.href = `/pages/profile/?username=${item.seller.name}`);

  const endsAt = document.getElementById("endingTimeCarousel");
  endsAt.innerText = listingRemainingIsoCalculator(item.endsAt);

  setInterval(() => {
    endsAt.textContent = listingRemainingIsoCalculator(item.endsAt);
  }, 1000);
}

function setupNavigation() {
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("previousButton");

  const stopPropagation = (event) => event.stopPropagation();

  nextButton.onclick = (event) => {
    stopPropagation(event);
    currentIndex = (currentIndex + 1) % carouselData.length;
    renderCarouselItem(currentIndex);
  };

  prevButton.onclick = (event) => {
    stopPropagation(event);
    currentIndex =
      (currentIndex - 1 + carouselData.length) % carouselData.length;
    renderCarouselItem(currentIndex);
  };

  nextButton.addEventListener("click", stopPropagation);
  prevButton.addEventListener("click", stopPropagation);
}

function setupClickNavigation() {
  const carouselFigure = document.querySelector("#carouselListings figure");
  carouselFigure.onclick = () => {
    const currentItem = carouselData[currentIndex];
    window.location.href = `/pages/listing/?id=${currentItem.id}`;
  };
}
