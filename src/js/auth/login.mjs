import { API_AUTH_LOGIN } from "../../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function login({ email, password }) {
  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body,
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      document.getElementById("userError").innerHTML =
        `${data.errors[0].message}`;
    }

    if (response.ok) {
      window.location.href = "/";
    }

    localStorage.setItem("accessToken", data.data.accessToken);
    localStorage.setItem("userName", data.data.name);
    localStorage.setItem("myUserData", `${JSON.stringify(data)}`);
  } catch (error) {
    alert(error);
  }
}
