// importar React
import React from 'react';
import PropTypes from 'prop-types';

// importar CSS
import './Button.css'

// Componente funcional
const Button = ({type, text, clickHandler}) => (
        <button className={type} onClick={ () => clickHandler(text)}>
            <span>{text}</span>
        </button>
    )

Button.propTypes = {
    type : PropTypes.string,
    text : PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}
Button.defaultProps = {
    
}

// Exportación del componente para su consumo desde otro componente
export default Button;