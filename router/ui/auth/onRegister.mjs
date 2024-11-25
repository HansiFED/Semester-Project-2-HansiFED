import { registerUser } from "../../../src/js/auth/register.mjs";

export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;
  const registeredUserData = Object.fromEntries(new FormData(form));
  await registerUser(registeredUserData);
}
