import { API_LISTINGS_BASE } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function createListing(body) {
  console.log("body", body);

  const userError = document.getElementById("userError");
  const loader = document.getElementById("loader");
  const createListingButton = document.getElementById("createListingButton");

  try {
    const response = await fetch(API_LISTINGS_BASE, {
      method: "POST",
      headers: headers(),
      body: body,
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      userError.style.display = "block";
      userError.innerHTML = `${data.errors[0].message}`;
    } else if (response.ok) {
      createListingButton.classList.add("animate-pulse");
      loader.classList.remove("hidden");
      setTimeout(() => {
        window.location.href = "/";
      }, 6000);
    }

    return data;
  } catch (error) {
    console.log("error creating listing", error);
    throw error;
  }
}
