import React from 'react';
import Forecast from './Forecast';

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { weekDay: "lunes", hour: "14:00", state: "clear", temperature: 15 },
    { weekDay: "martes", hour: "16:00", state: "clouds", temperature: 10 },
    { weekDay: "miércoles", hour: "17:00", state: "clouds", temperature: 20 },
    { weekDay: "jueves", hour: "09:00", state: "snow", temperature: 12 },
    { weekDay: "viernes", hour: "12:00", state: "rain", temperature: 30 },
    { weekDay: "sábado", hour: "19:00", state: "clear", temperature: 18 }
]

export const ForecastExample = () => {
    return (
        <Forecast forecastItemList = {forecastItemList}/>    
    )
}