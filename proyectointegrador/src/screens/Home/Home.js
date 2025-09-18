import React from "react";
import { Component } from "react";
import Card from "../../components/Card/Card";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            series: []
        }
    }


    componentDidMount() {
       const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

      fetch(`https://api.themoviedb.org/3/movie/popular?&api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({pelicula:data.results})
            
            })
            .catch(error => console.log(error))
    }

    series() {
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

      fetch(`https://api.themoviedb.org/3/tv/popular?&api_key=${api_key}`)
            .then(res => res.json())
            .then( data => {
                this.setState({series: data.results})
            })
    }
   

    render() {
 return (
   <React.Fragment>
     <ul>
       {this.state.peliculas.map(pelicula => (
         <li key={pelicula.id}>
           <h3>{pelicula.title}</h3>
           <img
             src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
             alt={pelicula.title}
           />
           <Card/>
         </li>
       ))}
     </ul>
     <ul>
       {this.state.series.map(serie => (
         <li key={serie.id}>
           <h3>{serie.title}</h3>
           <img
             src={`https://image.tmdb.org/t/p/w500${this.serie.poster_path}`}
             alt={serie.title}
           />
           <Card/>
         </li>
       ))}
     </ul>
   </React.Fragment>
 );
}
}


export default Home;