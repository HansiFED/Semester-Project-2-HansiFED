export async function logout() {
  localStorage.clear();
  window.confirm("Do you wish to logout?");
  window.location.href = "/";
}
