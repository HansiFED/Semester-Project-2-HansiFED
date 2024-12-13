import { setTheme } from "../../src/Utilities/setDarkMode.mjs";
import { onLogin } from "../ui/auth/onLogin.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";

setTheme();
initHamburgerMenu();

const form = document.forms.loginForm;

console.log(form);

form.addEventListener("submit", onLogin);
