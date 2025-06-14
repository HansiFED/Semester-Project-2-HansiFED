/**
 * Adds a new URL input field to the listing creation form.
 *
 * - Limits the number of URL inputs to a maximum of 8.
 * - Tracks the current count using a data attribute on the parent container.
 * - Hides the "Add URL" button and alerts the user if the limit is exceeded.
 * - Dynamically creates and appends a label and input field for each new URL.
 *
 * @function addURL
 * @returns {void}
 */
export function addURL() {
  const maxAmount = 8;
  const parentContainer = document.getElementById("urlContainer");

  // Use a data attribute on the parentContainer to keep track of count
  let i = parentContainer.dataset.urlCount
    ? parseInt(parentContainer.dataset.urlCount)
    : 0;

  if (i >= maxAmount) {
    document.getElementById("addUrl").style.display = "none";
    alert("You can't add more than 8 URLs.");
    return;
  } else {
    i++; // Increment the counter
    parentContainer.dataset.urlCount = i;

    const urlLabel = document.createElement("label");
    const urlBox = document.createElement("input");

    urlLabel.htmlFor = `urlBox${i}`;
    urlLabel.innerHTML = `URL ${i}`;

    urlBox.className =
      "border border-lightModeDarkGray rounded-lg py-1 px-3 text-black";
    urlBox.name = `urlBox${i}`;
    urlBox.id = `urlBox${i}`;
    urlBox.type = "url";
    urlBox.placeholder = "Example: https://i.imgur.com/OB0y6MR.jpg";

    parentContainer.append(urlLabel, urlBox);
  }
}
