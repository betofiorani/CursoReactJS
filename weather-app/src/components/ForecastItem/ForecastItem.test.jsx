import React from 'react';
import { render } from '@testing-library/react';
import ForeCastItem from './ForecastItem';
import '@testing-library/jest-dom/extend-expect';

test("ForeCastItem render", async () => {

    // AAA (Arrange, Act, Assert)
    // Arrange
    const {findByText} = render(<ForeCastItem weekDay = 'Domingo' hour ="18:00" state="clear" temperature = {20}/>)
    // act
    const temperature = await findByText(/20/);
    //const state = await findByText(/sunny/);
    const weekDay = await findByText(/Domingo/);
    const hour = await findByText(/18:00/);

    // assert
    expect(temperature).toHaveTextContent("20");
    //expect(state).toHaveTextContent("sunny");
    expect(weekDay).toHaveTextContent("Domingo");
    expect(hour).toHaveTextContent("18:00");

})
