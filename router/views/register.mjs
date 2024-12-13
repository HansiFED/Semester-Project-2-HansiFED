import { setTheme } from "../../src/Utilities/setDarkMode.mjs";
import { onRegister } from "../ui/auth/onRegister.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";

setTheme();
initHamburgerMenu();

const form = document.forms.registerForm;

form.addEventListener("submit", onRegister);
