import React from "react";
import { Component } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


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
                this.setState({ peliculas: data.results })

            })
            .catch(error => console.log(error))
            this.series()
    }
    

    series() {
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

        fetch(`https://api.themoviedb.org/3/tv/popular?&api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ series: data.results })
            })
             .catch(error => console.log(error))
    }


    render() {
        return (
            <React.Fragment>
                <h1>Peliculas:</h1>
                <ul>
                    {this.state.peliculas.filter((_,i)=>i<4).map(pelicula => (
                        <li key={pelicula.id}>
                            <h3>{pelicula.title}</h3>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                                alt={pelicula.overview}
                            />
                            <div><Card /></div>
                        </li>
                    ))}
                </ul>
               <Link to ="/peliculas"><button>Ver mas</button></Link>
               
               <h1>Series:</h1>
                <ul>
                    {this.state.series.filter((_,i)=>i<4).map(serie => (
                        <li key={serie.id}>
                            <h3>{serie.name}</h3>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}

                                alt={serie.overview}
                            />
                            <div><Card /></div>
                        </li>
                    ))}
                </ul>
                <Link to ="/series"><button>Ver mas</button></Link>
            </React.Fragment>
        );
    }
}


export default Home;