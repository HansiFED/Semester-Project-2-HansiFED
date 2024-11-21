import { API_AUTH_REGISTER } from "../../API/constants.mjs";
import { headers } from "../../Utilities/API/headers.mjs";

export async function registerUser({ name, email, password }) {
  const body = JSON.stringify({
    name,
    email,
    password,
  });

  const userError = document.getElementById("userError");
  const userSuccess = document.getElementById("userSuccess");

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body,
    });

    const result = await response.json();

    console.log(result);

    if (!response.ok) {
      userError.style.display = "block";
      userError.innerHTML = `${result.errors[0].message}`;
      window.alert("oh no balls");
    } else if (response.ok) {
      userSuccess.style.display = "block";
      userSuccess.innerHTML = `User was created successfully, we'll now redirect you to the login page`;
      setTimeout(() => {
        window.location.href = "../login/";
      }, 6000);
    }

    return result;
  } catch (error) {
    console.log(error);
  } finally {
    console.log(console.log("execution complete"));
  }
}
