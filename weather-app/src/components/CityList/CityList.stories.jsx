import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions';

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Córdoba", country: "Argentina", countryCode:"AR" },
    { city: "Tulum", country: "México", countryCode:"MX"},
    { city: "Río Segundo", country: "Argentina", countryCode:"AR"}
];

export const CityListExample = () => <CityList cities = {cities} onClickCity = {action("click en City")} />
