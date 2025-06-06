/**
 * Initializes the listing creation page.
 *
 * - Enforces authentication via `authCheck`.
 * - Sets up the hamburger menu, header credits, and theme icons.
 * - Binds the listing creation form submission to `onCreate`.
 * - Adds event listener for dynamically adding URL input fields.
 *
 * This script serves as the main entry point for the `/create` page.
 */

import { authCheck } from "../../src/Utilities/authguard.mjs";
import { setIcons } from "../../src/Utilities/toggleIcons.mjs";

import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { addURL } from "../ui/post/addInputUrl.mjs";
import { onCreate } from "../ui/post/onCreate.mjs";

authCheck();

initHamburgerMenu();
setHeaderCredits();

setIcons();

const addUrlField = document.getElementById("addUrl");
const listingCreateForm = document.getElementById("listingCreateForm");

listingCreateForm.addEventListener("submit", onCreate);
addUrlField.addEventListener("click", addURL);
