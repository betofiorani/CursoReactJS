import React from 'react';
import ForeCastItem from './ForecastItem';

export default {
    title: "ForeCastItem",
    component: ForeCastItem
}

export const sabadoParcialNublado = () => {
    return <ForeCastItem weekDay = "Sábado" hour="17:00" state="clouds" temperature = {10}/>}