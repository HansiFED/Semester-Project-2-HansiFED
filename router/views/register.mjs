/**
 * Initializes the registration page functionality.
 *
 * - Sets up the hamburger menu and applies theme-specific icons.
 * - Attaches the `onRegister` form submission handler.
 *
 * This module acts as the main setup script for the `/register` page.
 */

import { setIcons } from "../../src/Utilities/toggleIcons.mjs";
import { onRegister } from "../ui/auth/onRegister.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";

initHamburgerMenu();

setIcons();

const form = document.forms.registerForm;

form.addEventListener("submit", onRegister);
