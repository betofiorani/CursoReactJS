import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo'; // SUT(Subject under testing)


test("CityInfo render",async () =>{
    // El estandar para escribir los test AAA
    // Arrange (preparar las cosas)
    const city = "Córdoba";
    const country = "Argentina";
    // Act (actuar)
    // Usamos render y nos retorna una serie de funciones. Destructuring para obtener la función findAllByRole (busca los roles de las etiquetas HTML)
    const { findAllByRole } = render(<CityInfo city={city} country={country}  />)
    const cityCountryComponents = await findAllByRole("heading"); // devuelve array

    // Assert (evaluar) Cuando es correcto
    expect(cityCountryComponents[0]).toHaveTextContent(city);
    expect(cityCountryComponents[1]).toHaveTextContent(country);

});