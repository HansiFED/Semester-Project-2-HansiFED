export const API_KEY = "1fa70db6-66b3-487c-834e-bcd2d13da983";

export const accessToken = localStorage.getItem("accessToken");

export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUCTION_BASE = `${API_BASE}/auction`;

export const API_CREATE_LISTING = `${API_BASE}/auction/listings`;

export const API_AUCTION_PROFILES = `${API_BASE}/auction/profiles`;

export const myUserData = JSON.parse(localStorage.getItem("myUserData"));

export const myUserName = myUserData?.data?.name || "";

export const API_AUCTION_EDIT_PROFILE = `${API_AUCTION_PROFILES}/${myUserName}`;
