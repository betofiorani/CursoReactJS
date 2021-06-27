// importar React
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

// Componente funcional
const Functions = ({onClearContent, onDelete}) => (
        <section className="functions">
            <Button type="button-long button-long-text" text="borrar" clickHandler={onClearContent}/>
            <Button type="button-long" text="&larr;" clickHandler={onDelete}/>
            
        </section>
    )

Functions.propTypes = {
    onClearContent : PropTypes.func.isRequired,
    onDelete : PropTypes.func.isRequired
}
Functions.defaultProps = {
    
}

// Exportación del componente para su consumo desde otro componente
export default Functions;