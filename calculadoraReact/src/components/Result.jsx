import React from 'react';
import PropTypes from 'prop-types';

const Result = ({value }) =>  // si pongo entre llaves la propiedad es igual que el destructuring. Sería igual const {value} = props; // destructuring de props.
(
    <div className="result">
        <span>{value}</span>
    </div>    
)

Result.propTypes = {
    value : PropTypes.string.isRequired
}
Result.defaultProps = {
    value : "0"
}

export default Result;