export const baseUrl = "https://api.open-meteo.com/v1/forecast";

export async function getHourlyWeatherForGeolocation(latitude, longitude) {
  const hum = "relative_humidity_2m";
  const temp = "temperature_2m";
  const precip = "precipitation_probability";
  const ws = "wind_speed_10m";

  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    hourly: `${temp},${precip}`,
    timezone: "Europe/Skopje",
    past_hours: "0",
    forecast_hours: "24",
  });

  const url = `${baseUrl}?${params.toString()}`;

  try {
    const response = await fetch(url.replace(/\s+/g, ""));
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    console.error("Error fetching weather data:", response.statusText);
  } catch (error) {
    console.error("Network error:", error);
  }
}
