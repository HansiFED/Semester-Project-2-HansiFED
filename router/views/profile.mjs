import { authCheck } from "../../src/Utilities/authguard.mjs";
import { setHeaderCredits } from "../ui/header/setHeaderCredits.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";
import { onBuild } from "../ui/profile/onBuild.mjs";

authCheck();

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const userName = params.get("username");

console.log(userName);

initHamburgerMenu();

setHeaderCredits();

onBuild(userName);
