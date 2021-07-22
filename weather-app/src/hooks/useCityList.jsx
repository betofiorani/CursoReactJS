import { useEffect, useState } from 'react';
import axios from 'axios';
import { getWeatherUrl, getCityCode } from './../utils/utils';
import getAllWeather from './../utils/transform/getAllWeather';


const useCityList = (cities, allWeather, actions) => {


    
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            
            const url = getWeatherUrl(city, countryCode) 
            
            try {

                const propName = getCityCode(city,countryCode);
                //onSetAllWeather({[propName] : {}})
                actions({type: 'SET_ALL_WEATHER', payload: {[propName] : {}}})
                const response = await axios.get(url)
    
                const allWeatherAux = getAllWeather(response, city, countryCode)
                
                //onSetAllWeather(allWeatherAux)
                actions({type: 'SET_ALL_WEATHER', payload: allWeatherAux })

            } catch (error) {
                if(error.response){
                    const { data, status } = error.response
                    setError("Ha ocurrido un error en el Servidor")
                } else if (error.request) { // No llegamos al servidor
                    setError("No hay internet o falló la conexión")
                } else { // error no previstos
                    setError("Error - Algo que no previmos sucedió")
                }
            }
        }

        cities.forEach( ({ city, countryCode }) => {
            if(!allWeather[getCityCode(city,countryCode)]){
                setWeather(city,countryCode)
            }
        });
        
    }, [cities,allWeather,actions])

    return { error, setError }

}

export default useCityList