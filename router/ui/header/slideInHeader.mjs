import { myUserData, myUserName } from "../../../API/constants.mjs";
import { isLoggedIn } from "../../../src/Utilities/authguard.mjs";
import { logout } from "../../../src/Utilities/logout.mjs";
import { setIcons } from "../../../src/Utilities/toggleIcons.mjs";

export function initHamburgerMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const menu = document.getElementById("menu");
  const userDataRaw = myUserData;

  const darkModeToggle = document.getElementById("toggleDarkMode");
  darkModeToggle.addEventListener("click", (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle("dark");
    const checkLocalStorage = localStorage.getItem("theme");
    if (!checkLocalStorage) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
    setIcons();
  });

  menu.classList.remove("hidden");

  const myProfileButton = document.getElementById("myProfileContainer");
  const logoutButton = document.getElementById("logoutContainer");

  myProfileButton.href = `/pages/profile/?username=${myUserName}`;

  logoutButton.addEventListener("click", () => {
    logout();
  });

  if (isLoggedIn()) {
    let userImage = document.getElementById("userProfileImage");
    userImage.src = userDataRaw.data.avatar.url;
    userImage.alt = userDataRaw.data.avatar.alt;

    document.getElementById("creditTag").classList.remove("hidden");
    document.getElementById("profileTag").classList.remove("hidden");
    document.getElementById("createTag").classList.remove("hidden");
    document.getElementById("logoutTag").classList.remove("hidden");
    document.getElementById("loginTag").classList.add("hidden");
  }

  // Open menu
  menuToggle.addEventListener("click", () => {
    menu.classList.remove("translate-x-full");
    document.getElementById("hamburger-icon").classList.add("hidden");
  });

  // Close menu
  menuClose.addEventListener("click", () => {
    menu.classList.add("translate-x-full");
    document.getElementById("hamburger-icon").classList.remove("hidden");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.add("translate-x-full");
      document.getElementById("hamburger-icon").classList.remove("hidden");
    }
  });
}
