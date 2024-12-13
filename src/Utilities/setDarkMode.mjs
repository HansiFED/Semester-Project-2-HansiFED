export function setTheme() {
  const checkTheme = localStorage.getItem("theme");
  if (checkTheme == "dark") {
    document.documentElement.classList.toggle("dark");
  } else {
    return;
  }
}
