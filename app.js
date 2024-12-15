import "./src/css/style.css";

import router from "./router/index";

async function app() {
  await router(window.location.pathname);
}

app();
