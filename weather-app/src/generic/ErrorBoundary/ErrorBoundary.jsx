import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
    // cuerpo de la clase

    constructor(props) { // usamos el constructor cuando necesitamos un estado inicial.
        super(props)

        this.state = { // state se puede modificar internamente. eso lo diferencia de una propiedad
            hasError: false    
        } // state es una propiedad heredada de props de Component. es un objeto 
    }

    static getDerivedStateFromError(error) { // estas funciones static no pueden acceder al this porque no se instancian
        return {hasError: true }
    }

    componentDidCatch (error, errorInfo) {
        console.log("errorInfo",errorInfo)
    }

    render() {
        // cuerpo de render sobrescribe la funcion propia de la clase component.
        // SI o SI tiene que estar. y tiene que retornar siempre algo
        return (
            this.state.hasError ? <h1>Hubo un Error</h1> : this.props.children)
    }
}

export default ErrorBoundary