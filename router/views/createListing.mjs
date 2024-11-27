import { authCheck } from "../../src/Utilities/authguard.mjs";
import { addURL } from "../ui/post/addInputUrl.mjs";
import { onCreate } from "../ui/post/onCreate.mjs";
authCheck();

const addUrlField = document.getElementById("addUrl");
const listingCreateForm = document.getElementById("listingCreateForm");

listingCreateForm.addEventListener("submit", onCreate);
addUrlField.addEventListener("click", addURL);
