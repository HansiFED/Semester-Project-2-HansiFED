import { authCheck } from "../../src/Utilities/authguard.mjs";
import { setIcons } from "../../src/Utilities/toggleIcons.mjs";

import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { buildEditForm } from "../ui/profile/buildEditForm.mjs";
import { onBuild } from "../ui/profile/onBuild.mjs";

authCheck();

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const userName = params.get("username");

initHamburgerMenu();

setHeaderCredits();

onBuild(userName);

setIcons();

document
  .getElementById("editUserIcon")
  .addEventListener("click", buildEditForm);
