export default async function router(pathname = window.location.pathname) {
  switch (pathname) {
    case "/":
      await import("./views/home.mjs");
      break;
    case "/pages/auth/login/":
      await import("./views/login.mjs");
      break;
    case "/pages/auth/register/":
      await import("./views/register.mjs");
      break;
    case "/pages/listing/":
      await import("./views/listing.mjs");
      break;
    case "/pages/search/":
      await import("./views/search.mjs");
      break;
    case "/pages/create/":
      await import("./views/createListing.mjs");
      break;
    case "/pages/profile/":
      await import("./views/profile.mjs");
      break;
    default:
      await import("./views/notFound.mjs");
  }
}
