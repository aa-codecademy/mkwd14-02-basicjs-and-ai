const minimumUsernameLength = 2;
const minimumPasswordLength = 8;
const minimumAge = 18;


function createProfile(username, password, years) {
  if (username.length < minimumUsernameLength) {
    alert(
      `Username must be at least ${minimumUsernameLength} characters long.`
    );
    return;
  }
  if (password.length < minimumPasswordLength) {
    alert(
      `Password must be at least ${minimumPasswordLength} characters long.`
    );
    return;
  }

  if (
    !(
      password.includes("0") ||
      password.includes("1") ||
      password.includes("2") ||
      password.includes("3") ||
      password.includes("4") ||
      password.includes("5") ||
      password.includes("6") ||
      password.includes("7") ||
      password.includes("8") ||
      password.includes("9")
    )
  ) {
    alert("Password must contain at least one number.");
    return;
  }

  if (years < minimumAge) {
    alert(`You must be at least ${minimumAge} years old to log in.`);
    return;
  }

  const account = {
    username: username,
    password: password,
    age: years,
  };
  return account;
}

export default createProfile;
