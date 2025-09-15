import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = { busqueda: '' }
    }
    controlSubmit(event) {
        event.preventDefault();
        this.props.history.push("/buscador/"+ this.state.busqueda);
    }
    controlCmabios(event) {
        this.setState({ busqueda: event.target.value })
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={(event) => this.controlSubmit(event)}>
                    <input type="text" onChange={(event) => this.controlCmabios(event)} value={this.state.busqueda} />
                    <button type="submit">Buscar</button>
                </form>
                <h2>{this.state.busqueda}</h2>
            </React.Fragment>
        )
    }
}

export default withRouter(Formulario) ;