import { renderUserList } from "../dom/dom.js";
import { state } from "../stores/state.store.js";

export async function refreshUsers() {
  await state.fetchUsers();
  renderUserList();
}

export function assignEventListeners() {
  const button = document.querySelector("#refreshUsersButton");
  button.addEventListener("click", refreshUsers);
}
