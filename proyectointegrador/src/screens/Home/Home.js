import React from "react";
import { Component } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";


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
                <ul className="cards-container">
                    {this.state.peliculas.filter((_, i) => i < 4).map(pelicula => (
            
                            <Card key={pelicula.id} info={pelicula} esSerie={false}/>
                    
                    ))}

                <Link to="/peliculas"><button>Ver mas</button></Link>

                <h1>Series:</h1>
    
                    {this.state.series.filter((_, i) => i < 4).map(serie => (
        
                            <Card key={serie.id} info={serie} esSerie={true}/>

                    ))}
                </ul>
                <Link to="/series"><button>Ver mas</button></Link>
            </React.Fragment>
        );
    }
}


export default Home;