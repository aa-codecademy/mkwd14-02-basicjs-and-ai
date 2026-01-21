import { add, subtract } from "./math.js";
import { state } from "./stores/state.store.js";

export function initLogicalCalculations() {
  const users = state.users;
  console.log("LOGICAL CALCULATIONS:", users);
  console.log("Logical calculations module initialized.");
  let result = 0;
  const addedResult = add(1, 2);
  const subtractedResult = subtract(5, 3); // Using add function for demonstration
  result = addedResult + subtractedResult;
  return result;
}
