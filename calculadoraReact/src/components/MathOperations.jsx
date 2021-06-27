// importar React
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

// Componente funcional
const operators = ["+","-","*","/","="];
const renderOperators = (onClickOperation, onClickEqual) => {

    const renderOperator = (operator => {
        let onClick; 
        if(operator !== "="){
            onClick = onClickOperation;
        } else {
            onClick = onClickEqual;
        }   
        return <Button 
                    key={operator} 
                    text={operator} 
                    clickHandler={onClick}
                />     
    })
    return operators.map(renderOperator);

}
const MathOperations = ({onClickOperation, onClickEqual}) => (
        <section className="math-operations">
            {renderOperators(onClickOperation, onClickEqual)}
        </section>
    )

MathOperations.propTypes = {
    onClickOperation : PropTypes.func.isRequired,
    onClickEqual : PropTypes.func.isRequired
}
MathOperations.defaultProps = {
    
}

// Exportación del componente para su consumo desde otro componente
export default MathOperations;