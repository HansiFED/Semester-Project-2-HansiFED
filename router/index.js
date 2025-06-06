/**
 * Dynamically loads the appropriate view module based on the current pathname.
 *
 * - Uses `import()` for lazy loading individual route views.
 * - Supports multiple routes (home, auth, profile, listing, etc.).
 * - Falls back to the "not found" view for unknown paths.
 *
 * @async
 * @function router
 * @param {string} [pathname=window.location.pathname] - The URL path to route to. Defaults to the current window location.
 * @returns {Promise<void>} This function dynamically imports a module and does not return a value.
 */
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
