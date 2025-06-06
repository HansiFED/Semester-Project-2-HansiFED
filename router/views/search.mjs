/**
 * Initializes the search page functionality.
 *
 * - Sets up the hamburger menu and header credits.
 * - Builds the search view layout.
 * - Applies theme-specific icons.
 * - Binds the search form to the `onSearch` handler.
 *
 * This module acts as the main setup entry point for the `/search` page.
 */

import { setIcons } from "../../src/Utilities/toggleIcons.mjs";
import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { onSearch } from "../ui/landing/onSearch.mjs";
import { buildSearch } from "../ui/search/buildSearchPage.mjs";

initHamburgerMenu();

setHeaderCredits();

buildSearch();

setIcons();

const form = document.getElementById("searchForm");
form.addEventListener("submit", onSearch);
