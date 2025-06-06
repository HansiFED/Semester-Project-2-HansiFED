/**
 * Initializes the landing (home) page.
 *
 * - Sets up the hamburger menu, header credits, and theme icons.
 * - Builds the landing view layout.
 * - Binds the search form to the `onSearch` handler for product lookup.
 *
 * This script is the main entry point for the `/` (home) page.
 */

import { setIcons } from "../../src/Utilities/toggleIcons.mjs";
import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { buildLanding } from "../ui/landing/buildLanding.mjs";
import { onSearch } from "../ui/landing/onSearch.mjs";

initHamburgerMenu();

setHeaderCredits();

buildLanding();

setIcons();

const form = document.getElementById("searchForm");
form.addEventListener("submit", onSearch);
