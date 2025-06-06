/**
 * Initializes the listing detail page.
 *
 * - Sets up the hamburger menu and header credits.
 * - Binds the bid form to the `placeBid` submission handler.
 * - Builds the main listing content and related carousel.
 * - Applies dark/light mode icons based on local theme settings.
 *
 * This script serves as the main entry point for the `/listing` page.
 */

import { placeBid } from "../../src/js/listing/placeBid.mjs";
import { setIcons } from "../../src/Utilities/toggleIcons.mjs";
import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { buildListing } from "../ui/listing/buildListing.mjs";
import { buildListingCarousel } from "../ui/listing/buildListingCarousel.mjs";

initHamburgerMenu();

setHeaderCredits();

document.getElementById("bidForm").addEventListener("submit", placeBid);

buildListing();

buildListingCarousel();

setIcons();
