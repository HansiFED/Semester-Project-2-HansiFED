/**
 * Checks profile sections for content and hides empty sections and their buttons.
 *
 * - Targets active listings, active bids, and won bids sections.
 * - If a section container is empty (no inner HTML), hides its wrapper and corresponding button.
 *
 * @function profileCheck
 * @returns {void}
 */
export function profileCheck() {
  const activeListingsButton = document.getElementById("activeListingsButton");
  const activeBidsButton = document.getElementById("activeBidsButton");
  const wonBidsButton = document.getElementById("wonBidsButton");

  const activeListingsWrapper = document.getElementById(
    "activeListingsContainer",
  );
  const activeBidsWrapper = document.getElementById("activeBidsContainer");
  const wonBidsWrapper = document.getElementById("wonBidsContainer");

  const activeListings = document.getElementById("activeListings");
  const activeBidsContainer = document.getElementById("activeBids");
  const wonBidsContainer = document.getElementById("wonBids");

  function checkAndHideIfEmpty(containerId, parentElement, profileButton) {
    if (containerId && containerId.innerHTML.trim() === "") {
      parentElement.style.display = "none";
      profileButton.style.display = "none";
    }
  }

  checkAndHideIfEmpty(
    activeListings,
    activeListingsWrapper,
    activeListingsButton,
  );
  checkAndHideIfEmpty(activeBidsContainer, activeBidsWrapper, activeBidsButton);
  checkAndHideIfEmpty(wonBidsContainer, wonBidsWrapper, wonBidsButton);
}
