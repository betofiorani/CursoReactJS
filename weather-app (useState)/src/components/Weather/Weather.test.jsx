import React from 'react';
import Weather from './Weather';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("Weather render Sunny", async () => {

    //Arrange
    const {findByRole} = render(<Weather temperature={10} state="clear" />)
    //Act
    const temp = await findByRole("heading");
    //Assert
    expect(temp).toHaveTextContent(10);
})

test("Weather render Cloudy", async () => {

    //Arrange
    const {findByRole} = render(<Weather temperature={15} state="clouds" />)
    //Act
    const temp = await findByRole("heading");
    //Assert
    expect(temp).toHaveTextContent(15);
})
