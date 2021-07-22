const cities = [
    { city: "Malabrigo", country: "Argentina", countryCode: "AR" },
    { city: "Moreno", country: "Argentina", countryCode: "AR" },
    { city: "Río Segundo", country: "Argentina", countryCode: "AR" },
    { city: "Pergamino", country: "Argentina", countryCode: "AR" }
]; // Es nuestro dato estático. En una app final debería configurarlo el usuario

export const getCities = () => (cities)
export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)