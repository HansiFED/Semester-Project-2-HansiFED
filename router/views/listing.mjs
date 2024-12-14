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
