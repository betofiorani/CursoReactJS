import React, { Component } from 'react'

class ErrorBoundary extends Component {
    // cuerpo de la clase

    constructor(props) { // usamos el constructor cuando necesitamos un estado inicial.
        super(props)

        this.state = { // state se puede modificar internamente. eso lo diferencia de una propiedad
            activo: false
        } // state es una propiedad heredada de props de Component. es un objeto
        
    }

    estaActivo = () => {
        return this.state.activo ? "activo" : "Inactivo"
    }

    onClickHandler = () => {
        // setState. no puedo hacer this.state.activo = true lo tengo que hacer con setState
        this.setState({
            activo: true
        })
    }

    // montaje del componente. Es cuando aparece por primera vez.
    componentDidMount() {
        console.log("el componente se ha montado")
    }

    // evento del ciclo de vida cuando se actualiza o cambia un componente
    componentDidUpdate(prevProps, prevState) {
        console.log("Estado Previo", prevState.activo)
        console.log("Estado Nuevo", this.state.activo)
        console.log("el componente se actualizo")
    }

    // evento de limpieza en el ciclo de vida. El previo a que se desmonte el componente
    componentWillUnmount(){
        console.log("El componente se ha desmontado")
    }

    render() {
        // cuerpo de render sobrescribe la funcion propia de la clase component.
        // SI o SI tiene que estar. y tiene que retornar siempre algo
        return (
            <div>
                <button onClick={this.onClickHandler}>Activar</button>
                <h1>
                    {this.props.saludo}
                    {this.estaActivo()}
                </h1>
            </div>    
        )

    }


}

export default ErrorBoundary