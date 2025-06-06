import { createListing } from "../../../src/js/post/createListing.mjs";

/**
 * Handles the submission of the create listing form.
 *
 * - Prevents the default form submission behavior.
 * - Collects and formats form data including title, description, tags, end date, and media URLs.
 * - Converts the end date to ISO format.
 * - Triggers the `createListing` function to send the listing data to the server.
 * - Adds a pulse animation class to the submit button for UI feedback.
 *
 * @async
 * @function onCreate
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} Resolves after the listing creation request is made.
 */
export async function onCreate(event) {
  event.preventDefault();
  const formButton = document.getElementById("createListingButton");
  formButton.classList.add("animate-pulse");

  const title = document.getElementById("titleInput").value;
  const description = document.getElementById("listingDesc").value;
  const tags = document
    .getElementById("tags")
    .value.split(",")
    .map((tag) => tag.trim());
  const endsAtRaw = document.getElementById("end-date").value;

  const endsAt = new Date(endsAtRaw).toISOString();

  const urlInputs = document.querySelectorAll(
    '#urlContainer input[type="url"]',
  );
  const media = Array.from(urlInputs).map((input) => ({
    url: input.value,
    alt: `Alt text for listing image`,
  }));

  const listingBody = {
    title,
    description,
    endsAt,
    tags,
    media,
  };

  const listingBodyFormatted = JSON.stringify(listingBody);

  await createListing(listingBodyFormatted);
}
