import { API_AUCTION_EDIT_PROFILE } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function editUser({ formData }) {
  try {
    const response = await fetch(API_AUCTION_EDIT_PROFILE, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
