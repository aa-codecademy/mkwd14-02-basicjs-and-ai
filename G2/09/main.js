import { renderUserList } from "./src/dom/dom.js";
import { assignEventListeners } from "./src/events/events.js";
import { state } from "./src/stores/state.store.js";

export async function main() {
  await state.init();
  renderUserList();

  assignEventListeners();
}
