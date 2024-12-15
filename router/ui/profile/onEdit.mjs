import { myUserName } from "../../../API/constants.mjs";
import { editUser } from "../../../src/js/profile/editUser.mjs";
import { fetchProfile } from "../../../src/js/profile/fetchProfile.mjs";

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
