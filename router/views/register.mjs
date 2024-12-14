import { setIcons } from "../../src/Utilities/toggleIcons.mjs";
import { onRegister } from "../ui/auth/onRegister.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";

initHamburgerMenu();

setIcons();

const form = document.forms.registerForm;

form.addEventListener("submit", onRegister);
