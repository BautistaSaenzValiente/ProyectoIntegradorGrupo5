import React from 'react'
import { Component } from 'react'
import Card from "../../components/Card/Card"

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: [],
            serie: [],
            loading: true
        }
    }
    componentDidMount() {
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`
        const id = this.props.match.params.id
        const type = this.props.match.params.type

        if (type === "serie") {
            fetch(`https://api.themoviedb.org/3/tv/${id}?&api_key=${api_key}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ serie: data, loading: false })
                })
        }
        else {
            fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=${api_key}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ pelicula: data, loading: false })
                })
        }
    }

    render() {
        return (
            <React.Fragment>

                {this.state.loading ? <p>Cargando...</p> :
                    this.props.match.params.type === "serie" ? (<div key={this.state.serie.id}>
                        <Card
                            info={this.state.serie} id={this.state.serie.id} esSerie={true} />
                        <div>
                            <ul>
                                <li>rating: {this.state.serie.vote_count} </li>
                                <li>estreno: {this.state.serie.release_date}</li>
                                <li>duracion: {this.state.serie.video}</li>
                                <li>sinopsis: {this.state.serie.overview}</li>
                                <li>genero: {this.state.serie.genre_ids}</li>
                            </ul>
                        </div>
                    </div>
                    ) : (<div key={this.state.pelicula.id}>
                        <Card
                            info={this.state.pelicula} id={this.state.pelicula.id} esSerie={false} />
                        <div>
                            <ul>
                                <li>rating: {this.state.pelicula.vote_count} </li>
                                <li>estreno: {this.state.pelicula.release_date}</li>
                                <li>duracion: {this.state.pelicula.video}</li>
                                <li>sinopsis: {this.state.pelicula.overview}</li>
                                <li>genero: {this.state.pelicula.genre_ids}</li>
                            </ul>
                        </div>
                    </div>
                    )}

            </React.Fragment>
        )
    }
}

export default Detalle;
