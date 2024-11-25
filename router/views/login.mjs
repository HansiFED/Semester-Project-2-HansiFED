import { onLogin } from "../ui/auth/onLogin.mjs";

//Attaches the on-login function to the form submission event

const form = document.forms.loginForm;

console.log(form);

form.addEventListener("submit", onLogin);
