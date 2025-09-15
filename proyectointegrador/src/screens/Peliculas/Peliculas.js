import React from "react";
import { Component } from "react";


class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: [],
            loading: true
        }
    }


    componentDidMount() {
       const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

      fetch(`https://api.themoviedb.org/3/movie/popular?&api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({pelicula:data.results, loading: false})

            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
<h1>Todas las peliculas</h1>
  {this.state.loading ? <p>Cargando...</p> : this.state.data.map()}

            </React.Fragment>
        )
    }
}

export default Peliculas