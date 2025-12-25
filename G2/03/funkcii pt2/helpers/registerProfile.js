import createProfile from "./createProfile.js";

function registerProfile() {
  const username = prompt(
    "Enter your username (must be at least 5 characters):"
  );
  const password = prompt(
    "Enter your password (must be at least 8 characters and contain at least one number):"
  );
  const confirmPassword = prompt("Confirm your password:");

  if (password !== confirmPassword) {
    alert("Passwords do not match, please try again.");
    return;
  }
  const years = Number(
    prompt("Enter your age (must be at least 18 years old to register):")
  );

  return createProfile(username, password, years);
}

export default registerProfile;
