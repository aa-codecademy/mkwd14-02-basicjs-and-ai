import { renderHourlyCards } from "./render/renderHourlyCards.js";
import { weatherStore } from "./stores/weather.store.js";

export async function main() {
  await weatherStore.init();
  renderHourlyCards(weatherStore.hourlyData);
}
