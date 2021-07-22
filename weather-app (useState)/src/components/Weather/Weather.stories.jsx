import React from 'react';
import Weather from './Weather';

export default {
    title: "Weather",
    component: Weather
}

export const WeatherSunny = () => <Weather temperature = {10} state = "clear" />
export const WeatherCloudy = () => <Weather temperature = {15} state = "clouds" />