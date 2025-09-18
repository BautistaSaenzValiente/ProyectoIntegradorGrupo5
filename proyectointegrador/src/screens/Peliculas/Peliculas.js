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
                this.setState({peliculas:data.results, loading: false})
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
<h1>Todas las peliculas</h1>
  {this.state.loading ? <p>Cargando...</p> : null}
    <ul>
       {this.state.peliculas.map(pelicula => (
         <li key={pelicula.id}>
           <h3>{pelicula.title}</h3>
           <img
             src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
             alt={pelicula.overview}
           />
           <div><Card/></div>
         </li>
       ))}
     </ul>
      
            </React.Fragment>
        )
    }
}

export default Peliculas
