import { getHourlyWeatherForGeolocation } from "../api/api.js";
import { getGeolocation } from "../services/getGeolocation.js";

export const weatherStore = {
  hourlyData: [],
  setHourlyDataForMyLocation: async function () {
    const myLocation = await getGeolocation();
    const dataFromApi = await getHourlyWeatherForGeolocation(
      myLocation.latitude,
      myLocation.longitude,
    );
    weatherStore.hourlyData = dataFromApi.hourly;
  },
  init: async function () {
    await this.setHourlyDataForMyLocation();
  },
};
