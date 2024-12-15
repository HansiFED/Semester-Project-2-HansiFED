import { login } from "../../../src/js/auth/login.mjs";

export async function onLogin(event) {
  event.preventDefault();

  const form = event.target;

  const loggedInUserData = Object.fromEntries(new FormData(form));

  await login(loggedInUserData);
}
