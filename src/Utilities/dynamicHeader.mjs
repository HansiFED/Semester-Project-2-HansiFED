export function generateHeaderAndFooter() {
  const body = document.querySelector("body");

  const header = document.createElement("header");
  const headerImg = document.createElement("img");
  const headerNav = document.createElement("nav");
  const navImg = document.createElement("img");

  header.className = "bg-primaryBlue flex justify-between p-6 items-center";

  headerImg.setAttribute("src", "/src/Media/site-logo.svg");
  headerImg.setAttribute("alt", "Bidly site logo");

  navImg.setAttribute("src", "/src/Media/hamburger-icon.svg");
  navImg.setAttribute("alt", "Toggle sidebar menu button");

  headerNav.append(navImg);
  header.append(headerImg, headerNav);

  const footer = document.createElement("footer");
  const footerText = document.createElement("p");

  footerText.innerHTML = "©2024 HansiFED";
  footerText.className = "text-white text-xs";
  footer.className = "bg-primaryBlue flex justify-center py-6";
  footer.append(footerText);

  body.prepend(header);
  body.append(footer);
}
