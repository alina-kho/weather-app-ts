import axios from "axios";
import { WEATHER_API_KEY } from "../constants/env-constants";

export const getWeatherInfo = () => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${WEATHER_API_KEY}`
    )
    .then((response) => {
      console.log(response.data);
      return response.data.items;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};
