import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  appType: "mpa",
  base: "",
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        login: resolve(__dirname, "./pages/auth/login/index.html"),
        auth: resolve(__dirname, "./pages/auth/index.html"),
        register: resolve(__dirname, "./pages/auth/register/index.html"),
        profile: resolve(__dirname, "./pages/profile/index.html"),
        post: resolve(__dirname, "./pages/post/index.html"),
        editPost: resolve(__dirname, "./pages/post/edit/index.html"),
        createPost: resolve(__dirname, "./pages/post/create/index.html"),
        search: resolve(__dirname, "./pages/search/index.html"),
        listing: resolve(__dirname, "./pages/listing/index.html"),
        notFound: resolve(__dirname, "./pages/notFound/index.html"),
      },
    },
  },
});
