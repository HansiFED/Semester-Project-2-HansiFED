import { onRegister } from "../ui/auth/onRegister.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";

initHamburgerMenu();

const form = document.forms.registerForm;

form.addEventListener("submit", onRegister);
