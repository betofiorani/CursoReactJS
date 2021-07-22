import React from 'react';
import Weather from './Weather';

export default {
    title: "Weather",
    component: Weather
}

const Template = (args) => <Weather { ...args }/>

export const WeatherSunny = Template.bind({})
WeatherSunny.args = {temperature: 15, state: "clear"}
export const WeatherCloudy = Template.bind({})
WeatherCloudy.args = {temperature: 10, state: "clouds"}