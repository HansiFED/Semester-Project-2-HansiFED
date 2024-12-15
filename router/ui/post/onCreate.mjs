import { createListing } from "../../../src/js/post/createListing.mjs";

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

  console.log(listingBody);

  await createListing(listingBodyFormatted);
}
