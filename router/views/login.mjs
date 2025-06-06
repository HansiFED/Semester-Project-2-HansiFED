/**
 * Initializes the login page functionality.
 *
 * - Sets up the hamburger menu and applies theme-specific icons.
 * - Binds the login form to the `onLogin` handler for authentication.
 *
 * This script serves as the entry point for the `/login` page.
 */

import { setIcons } from "../../src/Utilities/toggleIcons.mjs";
import { onLogin } from "../ui/auth/onLogin.mjs";
import { initHamburgerMenu } from "../ui/header/slideInHeader.mjs";

initHamburgerMenu();

setIcons();

const form = document.forms.loginForm;

form.addEventListener("submit", onLogin);
