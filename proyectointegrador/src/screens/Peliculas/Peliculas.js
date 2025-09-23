import React from "react";
import { Component } from "react";
import Card from "../../components/Card/Card";

class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            loading: true,
            pagina: 1,
            busqueda: ''
        }
    }

    componentDidMount() {
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

        fetch(`https://api.themoviedb.org/3/movie/popular?&api_key=${api_key}&page=${this.state.pagina}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ peliculas: data.results, loading: false })
            })
            .catch(error => console.log(error))
    }


    cargarMas() {
        let pagina = this.state.pagina + 1
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

        fetch(`https://api.themoviedb.org/3/movie/popular?&api_key=${api_key}&page=${pagina}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ peliculas: this.state.peliculas.concat(data.results), pagina: pagina })
            })
            .catch(error => console.log(error))
    }


    controlCmabios(event) {
        this.setState({ busqueda: event.target.value })
    }

    render() {
        const peliculasFiltradas = this.state.peliculas.filter(peli =>
            peli.title.toLowerCase().includes(this.state.busqueda.toLowerCase())
        );

        return (
            <React.Fragment>
                <h1>Todas las peliculas</h1>

                <input
                    type="text"
                    placeholder="Buscar..."
                    onChange={(event) => this.controlCmabios(event)}
                    value={this.state.busqueda}
                />

                <ul className="cards-container">
                    {peliculasFiltradas.map(pelicula => (
                        <Card key={pelicula.id} info={pelicula} esSerie={false} />
                    ))}
                </ul>

                {
                }

                {this.state.loading ? <p>Cargando...</p> : null}
                <ul className="cards-container">
                    {this.state.peliculas.map(pelicula => (
                        <Card key={pelicula.id} info={pelicula} esSerie={false} />
                    ))}
                    <button onClick={() => this.cargarMas()}>Cargar mas</button>
                </ul>
            </React.Fragment>
        )
    }
}

export default Peliculas
