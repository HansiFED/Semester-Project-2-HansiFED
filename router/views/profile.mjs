import { onBuild } from "../ui/profile/onBuild.mjs";

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const userName = params.get("username");

console.log(userName);

onBuild(userName);
