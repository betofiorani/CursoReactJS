import React from 'react';
import CityList from './CityList';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


const cities = [
    { city: "Córdoba", country: "Argentina", countryCode: "AR" },
    { city: "Tulum", country: "México", countryCode:"MX"},
    { city: "Río Segundo", country: "Argentina", countryCode: "AR"}
]

test("CityList renders", async () => {
    
    //Arrange
    const fnClickOnItem = jest.fn();
    const { findAllByRole } = render(<CityList cities = {cities} onClickCity = { () => {} } />)
    //Act
    const listado = await findAllByRole("button");
    //Assert
    expect(listado).toHaveLength(3);
})

test('CityList clickEvent on item', async () => {
    //AAA
    // Simular un click de un usuario en un item -> Usaremos una función mock

    const fnClickOnItem = jest.fn();

    const { findAllByRole } = render(<CityList cities = {cities} onClickCity = { fnClickOnItem }/>);

    const items = await findAllByRole('button');

    // simular la acción - fireEvent que es parte de la librería testing
    fireEvent.click(items[0]);

    // con ese click debio ejecutarse la función fnClickOnItem una unica vez 
    expect(fnClickOnItem).toHaveBeenCalledTimes(1);

})