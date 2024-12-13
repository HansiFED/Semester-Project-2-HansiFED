import { authCheck } from "../../src/Utilities/authguard.mjs";
import { setTheme } from "../../src/Utilities/setDarkMode.mjs";
import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { buildEditForm } from "../ui/profile/buildEditForm.mjs";
import { onBuild } from "../ui/profile/onBuild.mjs";

authCheck();
setTheme();

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const userName = params.get("username");

console.log(userName);

initHamburgerMenu();

setHeaderCredits();

onBuild(userName);

document
  .getElementById("editUserIcon")
  .addEventListener("click", buildEditForm);
