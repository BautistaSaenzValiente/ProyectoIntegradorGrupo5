import { Component } from "react";
import Card from "../../components/Card/Card";
import React from "react";
import Header from "../../components/Header/Header";

class Buscador extends Component {
    constructor(props){
        super(props);
        this.state ={
            data: [],
            loading: true
        }
    }

    componentDidMount(){
        console.log(this.props);

        let urlParams = new URLSearchParams(window.location.search)
        let busqueda = urlParams.get('busqueda')
        console.log(busqueda);
    
        fetch(``)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({ data: data.results, loading: false })
        })
        
    }

    render(){
        return(
            <React.Fragment>
                <Header />
                {this.state.loading ? <p>cargando...</p> : this.state.data.map(unPersonaje => <Card data={unPersonaje} />  )}
            </React.Fragment>
        )
    }

}

export default Buscador;