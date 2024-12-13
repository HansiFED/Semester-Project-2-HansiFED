import { authCheck } from "../../src/Utilities/authguard.mjs";

import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { addURL } from "../ui/post/addInputUrl.mjs";
import { onCreate } from "../ui/post/onCreate.mjs";
authCheck();

initHamburgerMenu();
setHeaderCredits();

const addUrlField = document.getElementById("addUrl");
const listingCreateForm = document.getElementById("listingCreateForm");

listingCreateForm.addEventListener("submit", onCreate);
addUrlField.addEventListener("click", addURL);
