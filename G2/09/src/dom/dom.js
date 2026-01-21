import { state } from "../stores/state.store.js";

export function renderUserList() {
  const userListContainer = document.querySelector("#usersContainer");
  userListContainer.innerHTML = "";

  for (const user of state.users) {
    const userElement = document.createElement("div");
    const userElementHeadline = document.createElement("h2");
    const userElementParagraph = document.createElement("p");

    userElementHeadline.textContent = `${user.firstname} ${user.lastname}`;
    userElementParagraph.textContent = user.email;

    userElement.appendChild(userElementHeadline);
    userElement.appendChild(userElementParagraph);

    userListContainer.appendChild(userElement);
  }
}
