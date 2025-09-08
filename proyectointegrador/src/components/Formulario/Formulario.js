import React, { Component } from "react";

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = { busqueda: '' }
    }
    noSubmit(event) {
        event.preventDefault();
    }
    controlCmabios(event) {
        this.setState({ busqueda: event.target.value })
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={(event) => this.noSubmit(event)}>
                    <input type="text" onChange={(event) => this.controlCmabios(event)} value={this.state.busqueda} />
                    <button type="submit">Buscar</button>
                </form>
                <h2>{this.state.busqueda}</h2>
            </React.Fragment>
        )
    }
}

export default Formulario;