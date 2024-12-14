import { onEdit } from "./onEdit.mjs";

export async function buildEditForm() {
  document.getElementById("editUserFormWrapper").classList.remove("hidden");
  const overlay = document.getElementById("userForm");
  const editUserButton = document.getElementById("editUserIcon");

  setTimeout(() => {
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100", "pointer-events-auto");
    overlay.querySelector("#formContent").classList.remove("scale-95");
    overlay.querySelector("#formContent").classList.add("scale-100");
    editUserButton.disabled = true;
  }, 10);

  const closeForm = () => {
    overlay.classList.remove("opacity-100", "pointer-events-auto");
    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.querySelector("#formContent").classList.add("scale-95");
    setTimeout(() => {
      editUserButton.disabled = false;
    }, 300);
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeForm();
  });

  document.getElementById("editSubmitForm").addEventListener("submit", onEdit);
}
