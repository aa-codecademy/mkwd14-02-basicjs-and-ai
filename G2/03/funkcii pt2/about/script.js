import registerProfile from "../helpers/registerProfile.js";

const button = document.getElementById("registerProfileButton");

button.addEventListener("click", () => {
  registerProfile();
});
