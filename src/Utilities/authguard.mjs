import { accessToken } from "../../API/constants.mjs";

export function authCheck() {
  if (!accessToken) {
    window.alert("You must be signed in to view this page");
    window.location.href = "/";
  }
}
