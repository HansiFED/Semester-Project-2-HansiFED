import { placeBid } from "../../src/js/listing/placeBid.mjs";
import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { buildListing } from "../ui/listing/buildListing.mjs";

initHamburgerMenu();

setHeaderCredits();

document.getElementById("bidForm").addEventListener("submit", placeBid);

buildListing();
