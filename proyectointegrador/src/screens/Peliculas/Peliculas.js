import React from "react";
import { Component } from "react";
import Card from "../../components/Card/Card";

class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            loading: true
        }
    }

    componentDidMount() {
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

        fetch(`https://api.themoviedb.org/3/movie/popular?&api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ peliculas: data.results, loading: false })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <h1>Todas las peliculas</h1>

                {this.state.loading ? <p>Cargando...</p> : null}
                <ul className="cards-container">
                    {this.state.peliculas.map(pelicula => (
                        <Card key={pelicula.id} info={pelicula} esSerie={false} />
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

export default Peliculas
