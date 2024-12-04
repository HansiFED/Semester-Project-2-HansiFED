import { myUserName } from "../../API/constants.mjs";

export function profilePageChecker() {
  const queryString = window.location.search;

  const params = new URLSearchParams(queryString);

  const urlUserName = params.get("username");

  if (myUserName == urlUserName) {
    return true;
  } else {
    return false;
  }
}
