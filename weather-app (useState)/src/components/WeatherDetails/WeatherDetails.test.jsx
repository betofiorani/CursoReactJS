import React from 'react';
import WeatherDetails from './WeatherDetails';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("render WeatherDetails", async ()=>{
    ///AAA
    //Arrange
    const {findByText} = render(<WeatherDetails humidity={80} wind={40} />)
    //Act
    const wind = await findByText(/40/);
    const humidity = await findByText(/80/);
    //Assert
    expect(humidity).toHaveTextContent("Humedad: 80%");
    expect(wind).toHaveTextContent("Viento: 40 km/h");

})
