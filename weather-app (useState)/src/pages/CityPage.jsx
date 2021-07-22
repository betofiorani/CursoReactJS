import React, {useMemo} from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CityInfo'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from './../utils/serviceCities'

const CityPage = ({ actions, data }) => {

    const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions
    const { allWeather, allForecastItemList,allChartData } = data

    const { city, countryCode } = useCityPage(allChartData, allForecastItemList, onSetChartData, onSetForecastItemList)
    
    const country = countryCode && getCountryNameByCountryCode(countryCode)

    const cities = useMemo(() => ([{city, countryCode}]),[city, countryCode])
    useCityList(cities, allWeather, onSetAllWeather)
    
    const cityCode = getCityCode(city,countryCode)
    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]
    const weather = allWeather[cityCode]
    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind

    
    return (
        <AppFrame>
            <Paper elevation={3}>
                <Grid container
                    justifyContent="center"
                    direction="column"
                    spacing={2}>
                    <Grid item container
                        xs={12}
                        justifyContent="center"
                        alignItems="flex-end">
                        <CityInfo city= { city } country= { country } />
                    </Grid>
                    <Grid item container 
                        xs={12}
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item>
                            <Weather temperature={ temperature } state= { state } />
                        </Grid>
                        <Grid item>{
                            humidity && wind && <WeatherDetails humidity={ humidity } wind ={ wind }/>
                        }
                        </Grid>
                    </Grid>
                    <Grid item>
                        {
                            !chartData && !forecastItemList && <LinearProgress />  
                        }
                    </Grid>
                    <Grid item xs={12}>
                        {chartData && <ForecastChart data = { chartData } />}
                    </Grid>
                    <Grid item xs={12}>
                        {forecastItemList && <Forecast forecastItemList = {forecastItemList}/> }
                    </Grid>
                </Grid>        
            </Paper>
        </AppFrame>
        
    )
}

export default CityPage
