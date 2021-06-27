/* eslint no-eval: 0 */ // desactiva el warning de usar eval que es potencialmente peligrosa

// Estructura básica de cualquier componente.

// Importacion de las librerias necesarias
import React, {useState} from 'react';
import words from 'lodash.words';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';

// por convención, el css siempre al último
import './App.css'; // el css se importa directamente... colocando la ruta.

// Generación de la función del componente
const App = () => {

    // Array destructuring
    const [texto, setTexto ] = useState("");
    const items = words(texto, /[^-^+^*^/]+/g);
    
    // funciones de los componentes
    const onClickOperationFunction = operation => {
        const operadores = ["+","-","*","/"];
        if(operadores.includes(texto.charAt(texto.length-1))){
            const newTexto = texto.substring(0 , texto.length -1);
            setTexto(`${newTexto}${operation}`);
        } else {
            setTexto(`${texto}${operation}`);
        }
    }
    const onClickEqualFunction = equal => setTexto(!texto ? '' : (eval(texto).toString()));
    
    const onClearContentFunction = clear => setTexto("");
    
    const onDeleteFunction = borrar => {
        
        if(texto.length > 0){
            
            const newTexto = texto.substring(0 , texto.length -1);
            setTexto(newTexto);
        }
    }
    const onClickNumberFunction = numero => { 
        setTexto(`${texto}${numero}`);
    }
    // creamos una constante que guarde el valor a mostrar luego de validar si está vacío o no
    const value = items.length > 0 ? items[items.length-1] : "0";

    // lo que ejecuta la arrow function
    // Si usamos más de una línea tiene que estar entre parentesis
    return (
        <main className='react-calculator'>
            <div>
                <Result value={value}/>
            </div>
            <div className='grid'>
                <Numbers
                    onClickNumber = {onClickNumberFunction}
                />
                <Functions 
                    onClearContent = {onClearContentFunction} 
                    onDelete = {onDeleteFunction}
                />
                <MathOperations 
                    onClickOperation = {onClickOperationFunction} 
                    onClickEqual = {onClickEqualFunction}
                />
            </div>
        </main>
    )
}

// La exportación para que este disponible para ser utilizado.
export default App;