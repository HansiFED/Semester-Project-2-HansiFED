import { fetchListing } from "../../../src/js/listing/fetchListing.mjs";

/**
 * Builds an interactive image carousel for a listing's media.
 *
 * - Fetches the listing data asynchronously.
 * - Uses the media array from the listing to display images.
 * - Shows previous/next buttons if there is more than one image.
 * - Updates the displayed image and alt text when navigating.
 *
 * @async
 * @function buildListingCarousel
 * @returns {Promise<void>} Resolves after the carousel is initialized.
 */
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
