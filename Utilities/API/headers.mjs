import { accessToken, API_KEY } from "../../API/constants.mjs";

export function headers() {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  return headers;
}
