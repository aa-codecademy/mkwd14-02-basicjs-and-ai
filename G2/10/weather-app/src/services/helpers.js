export function getCurrentHourISO() {
  const now = new Date();
  // round down to the hour
  now.setMinutes(0, 0, 0);
  return now.toISOString().slice(0, 13) + ":00";
}
