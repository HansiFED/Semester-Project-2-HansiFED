/**
 * Sets the appropriate icon images based on the user's saved theme.
 *
 * - Reads the "theme" value from localStorage.
 * - If dark mode is active, sets dark-themed icons.
 * - If no theme is set (assumed light), sets light-themed icons.
 * - Targets specific DOM elements: `.creditIcon`, `#editUserIcon`, `#darkModeIcon`, and `#bidHammer`.
 *
 * @function setIcons
 * @returns {void}
 */
export function setIcons() {
  const theme = localStorage.getItem("theme");
  const creditIcons = document.querySelectorAll(".creditIcon");
  const editUserIcon = document.getElementById("editUserIcon");
  const darkModeIcon = document.getElementById("darkModeIcon");

  const bidHammer = document.getElementById("bidHammer");

  if (theme === "dark") {
    if (bidHammer) {
      bidHammer.src = "/media/bidHammerDark.svg";
    }

    if (darkModeIcon) {
      darkModeIcon.src = "/media/darkModeOn.svg";
    }

    if (creditIcons) {
      creditIcons.forEach((icon) => {
        icon.src = "/media/coinsIconDarkMode.svg";
      });
    }
    if (editUserIcon) {
      editUserIcon.src = "/media/editUserDarkMode.svg";
    }
  } else if (!theme) {
    if (bidHammer) {
      bidHammer.src = "/media/auctionhammer.svg";
    }

    if (darkModeIcon) {
      darkModeIcon.src = "/media/darkModeIcon.svg";
    }

    if (creditIcons) {
      creditIcons.forEach((icon) => {
        icon.src = "/media/coinsIconLightMode.svg";
      });
    }
    if (editUserIcon) {
      editUserIcon.src = "/media/editUserIcon.svg";
    }
  }
}
