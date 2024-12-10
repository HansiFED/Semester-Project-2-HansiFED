import { fetchListing } from "../../../src/js/listing/fetchListing.mjs";

export async function buildListingCarousel() {
  let index = 0;
  let imgArr = [];

  const data = await fetchListing();

  imgArr = data.data.media;

  const listingImage = document.getElementById("listingImage");
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");
  const buttonsContainer = document.getElementById("buttons");

  function updateImage() {
    listingImage.src = imgArr[index].url;
    listingImage.alt = imgArr[index].alt || "Listing image";
  }

  if (imgArr.length > 1) {
    buttonsContainer.classList.remove("hidden");
  } else {
    buttonsContainer.classList.add("hidden");
  }

  nextButton.addEventListener("click", () => {
    index = (index + 1) % imgArr.length;
    updateImage();
  });

  previousButton.addEventListener("click", () => {
    index = (index - 1 + imgArr.length) % imgArr.length;
    updateImage();
  });

  if (imgArr.length > 0) {
    updateImage();
  }
}
