import {useEffect, useDebugValue} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl, getCityCode} from '../utils/utils'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'

const useCityPage = (allChartData, allForecastItemList,actions) => {
    
    const { city, countryCode } = useParams();
    
    // hago funcion aparte porque dentro de useEffect no permite funciones async

    useDebugValue(`useCityPage ${city}`) // no sobreutilizar.

    useEffect(() => {

        const cityCode = getCityCode(city, countryCode)
        const getForecast = async () => {
            
            const url = getForecastUrl(city, countryCode)
            
            try {
                
                const { data } = await axios.get(url)
                const chartDataAux = getChartData(data)
                
                //onSetChartData({[cityCode]:chartDataAux})
                actions({type: 'SET_CHART_DATA', payload: {[cityCode]:chartDataAux} })
                
                const forecastItemListAux = getForecastItemList(data)
                
                //onSetForecastItemList({[cityCode]:forecastItemListAux})
                actions({type: 'SET_FORECAST_ITEM_LIST', payload: {[cityCode]:forecastItemListAux} })

            } catch (error) {
                console.log(error)
            }
        }

        if(allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]){
            getForecast()
        }

    }, [city, countryCode, allChartData, allForecastItemList, actions])
    return { city, countryCode }
}

export default useCityPage