/**
 * API constants and user data for auction platform.
 *
 * - Contains base URLs and endpoints for authentication, listings, profiles, and search.
 * - Retrieves and exports access token and user data from localStorage.
 * - Exports user's username for API requests.
 *
 * @module apiConstants
 */
export const API_KEY = "1fa70db6-66b3-487c-834e-bcd2d13da983";

export const accessToken = localStorage.getItem("accessToken");

export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUCTION_BASE = `${API_BASE}/auction`;

export const API_LISTINGS_BASE = `${API_BASE}/auction/listings`;

export const API_AUCTION_PROFILES = `${API_BASE}/auction/profiles`;

export const API_SEARCH_LISTINGS = `${API_LISTINGS_BASE}/search?_seller=true&_bids=true&`;

export const API_SEARCH_PROFILES = `${API_AUCTION_PROFILES}/search`;

export const myUserData = JSON.parse(localStorage.getItem("myUserData"));

export const myUserName = myUserData?.data?.name || "";

export const API_AUCTION_EDIT_PROFILE = `${API_AUCTION_PROFILES}/${myUserName}`;
