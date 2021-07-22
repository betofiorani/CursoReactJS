import React from 'react';
import Forecast from './Forecast';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ExpansionPanelActions } from '@material-ui/core';

test("ForeCast render", async () => {
    
    const forecastItemList = [
        { weekDay: "lunes", hour: "14:00", state: "clear", temperature: 15 },
        { weekDay: "martes", hour: "16:00", state: "clouds", temperature: 10 },
        { weekDay: "miércoles", hour: "17:00", state: "clouds", temperature: 20 },
        { weekDay: "jueves", hour: "09:00", state: "snow", temperature: 12 },
        { weekDay: "viernes", hour: "12:00", state: "rain", temperature: 30 },
        { weekDay: "sábado", hour: "19:00", state: "clear", temperature: 18 }
    ]
    
    // nos permite encontrar valores cuando no se puede conseguir con roles o texto
    // AAA
    // Arrange
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>);
    
    // Act
    const forecastItems = await findAllByTestId('forecast-item-container');

    // Assert
    expect(forecastItems).toHaveLength(6);

})
