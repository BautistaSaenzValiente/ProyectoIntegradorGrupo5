import React from "react";
import { Component } from "react";
import Card from "../../components/Card/Card";


class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [],
            loading: true,
            pagina: 1,
            busqueda: ''
        }
    }


    componentDidMount() {
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

        fetch(`https://api.themoviedb.org/3/tv/popular?&api_key=${api_key}&page=${this.state.pagina}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ series: data.results, loading: false })

            })
            .catch(error => console.log(error))
    }
    cargarMas() {
        let pagina = this.state.pagina + 1
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

        fetch(`https://api.themoviedb.org/3/tv/popular?&api_key=${api_key}&page=${pagina}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ series: this.state.series.concat(data.results), pagina: pagina })
            })
            .catch(error => console.log(error))
    }



    controlCmabios(event) {
        this.setState({ busqueda: event.target.value })
    }

    render() {
        const seriesFiltradas = this.state.series.filter(serie =>
            serie.name.toLowerCase().includes(this.state.busqueda.toLowerCase())
        );
        return (
            <React.Fragment>
                <h1>Todas las series</h1>
                <ul className="cards-container" >
                    <input
                        type="text"
                        placeholder="Buscar..."
                        onChange={(event) => this.controlCmabios(event)}
                        value={this.state.busqueda}
                    />
                    <ul className="cards-container">
                        {seriesFiltradas.map(serie => (
                            <Card key={serie.id} info={serie} esSerie={true} />
                        ))}
                    </ul>

                    {this.state.series.map(serie => (

                        <Card key={serie.id} info={serie} esSerie={true} />


                    ))}
                    <button onClick={() => this.cargarMas()}>Cargar mas</button>
                </ul>

            </React.Fragment>
        )
    }
}

export default Series