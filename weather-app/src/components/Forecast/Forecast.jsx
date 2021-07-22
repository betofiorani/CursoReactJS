import React from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './../ForecastItem'
import Grid from '@material-ui/core/Grid'

const renderForecastItem = forecastItem => {
    const {weekDay, hour, state, temperature} = forecastItem;

    // hay que poner un identificador único.
    return (
        <Grid data-testid="forecast-item-container" Item key={`${weekDay}-${hour}`}>
            <ForecastItem 
                weekDay = {weekDay} 
                hour = {hour} 
                state = {state} 
                temperature ={temperature}/>
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
    return (
        
        <Grid container 
            justify = "space-around"
            alignItems = "center">
            {
                forecastItemList.map(forecastItem => renderForecastItem(forecastItem))
            }
        </Grid>
        
    )
}

// ForecastItemList es un array de objetos
// tiene que tener la siguiente propiedad
Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired,
}

export default Forecast
