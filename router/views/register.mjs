import { onRegister } from "../ui/auth/onRegister.mjs";

//Attaches the on-login function to the form submission event

const form = document.forms.registerForm;

form.addEventListener("submit", onRegister);
