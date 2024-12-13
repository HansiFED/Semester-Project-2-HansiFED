import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { onSearch } from "../ui/landing/onSearch.mjs";
import { buildSearch } from "../ui/search/buildSearchPage.mjs";

initHamburgerMenu();

setHeaderCredits();

buildSearch();

const form = document.getElementById("searchForm");
form.addEventListener("submit", onSearch);
