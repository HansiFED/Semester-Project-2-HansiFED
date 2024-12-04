export async function logout() {
  localStorage.clear();
  window.location.href = "/";
}
