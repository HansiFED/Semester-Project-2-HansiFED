import { onEdit } from "./onEdit.mjs";

export async function buildEditForm() {
  const domParentContainer = document.getElementById("editUserWrapper");

  const popUpForm = `
      <div id="userForm"
           class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
           >
        <div class="bg-lightModeProfileButtons text-white p-6 rounded-lg shadow-lg w-80 font-serif transform scale-95 transition-transform duration-300"
             id="formContent">
          <form id="editSubmitForm">
            <div class="mb-4">
              <label for="bannerUrl" class="block text-sm font-medium mb-1">Banner URL</label>
              <input id="bannerUrl" type="url"
                     class="w-full p-2 rounded-lg bg-[#505050] focus:outline-none focus:ring focus:ring-yellow-400 font-serif z-[100]" />
            </div>
            <div class="mb-4">
              <label for="profilePictureUrl" class="block text-sm font-medium mb-1">Profile Picture URL</label>
              <input id="profilePictureUrl" type="url"
                     class="w-full p-2 rounded-lg bg-[#505050] border border-gray-600 focus:outline-none focus:ring focus:ring-yellow-400 font-serif" />
            </div>
            <div class="mb-6">
              <label for="bio" class="block text-sm font-medium mb-1">Bio</label>
              <textarea id="bio" rows="4"
                        class="w-full resize-none p-2 rounded-lg bg-[#505050] border border-gray-600 focus:outline-none focus:ring focus:ring-yellow-400 font-serif"></textarea>
            </div>
            <p id="userFeedback" class = "text-center mb-5"></p>
            <button type="submit"
                    class="w-full bg-yellow-500 text-black p-2 rounded-lg hover:bg-yellow-600 font-serif">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    `;

  let popUpFormDomElement = document.createElement("div");
  popUpFormDomElement.innerHTML = popUpForm;

  domParentContainer.appendChild(popUpFormDomElement);

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
      domParentContainer.removeChild(popUpFormDomElement);
      editUserButton.disabled = false;
    }, 300);
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeForm();
  });

  document.getElementById("editSubmitForm").addEventListener("submit", onEdit);
}
