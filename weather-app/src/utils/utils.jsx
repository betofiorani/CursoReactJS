import convertUnits from 'convert-units';

export const getCityCode = (city, countryCode) =>  `${city}-${countryCode}`
export const toCelsius = (temp) => Number(convertUnits(temp).from("K").to("C").toFixed(0))

const appId = '0da0a2ecef1d19516fd23488f58f3b97'

export const getForecastUrl = (city, countryCode) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appId}`
export const getWeatherUrl = (city, countryCode) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appId}`