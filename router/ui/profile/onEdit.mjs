import { myUserName } from "../../../API/constants.mjs";
import { editUser } from "../../../src/js/profile/editUser.mjs";
import { fetchProfile } from "../../../src/js/profile/fetchProfile.mjs";

/**
 * Handles the profile edit form submission.
 *
 * - Prevents default form submission.
 * - Fetches the current user profile data.
 * - Reads updated profile fields from the form inputs, falling back to existing values if empty.
 * - Constructs an updated user profile object.
 * - Sends the updated profile data to the server via `editUser`.
 *
 * @async
 * @function onEdit
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} Resolves after the profile update is processed.
 */
export async function onEdit(event) {
  event.preventDefault();

  const userDataRaw = await fetchProfile(myUserName);

  const userData = userDataRaw.data;

  const userURL =
    document.getElementById("bannerUrl")?.value || userData.banner.url;
  const userPfp =
    document.getElementById("profilePictureUrl")?.value || userData.avatar.url;
  const userBio = document.getElementById("bio")?.value || userData.bio;

  let body = {
    avatar: {
      url: userPfp,
      alt: "user profile image",
    },
    banner: {
      url: userURL,
      alt: "user banner background image",
    },
    bio: userBio,
  };

  await editUser(body);
}
