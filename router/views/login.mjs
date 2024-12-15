import { setIcons } from "../../src/Utilities/toggleIcons.mjs";
import { onLogin } from "../ui/auth/onLogin.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";

initHamburgerMenu();

setIcons();

const form = document.forms.loginForm;

form.addEventListener("submit", onLogin);
