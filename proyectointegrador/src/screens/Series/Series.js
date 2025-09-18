import React from "react";
import { Component } from "react";
import Card from "../../components/Card/Card";


class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [],
            loading: true
        }
    }


    componentDidMount() {
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

        fetch(`https://api.themoviedb.org/3/tv/popular?&api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ series: data.results, loading: false })

            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <h1>Todas las series</h1>
                <ul>
                    {this.state.series.map(serie => (
                        <li key={serie.id}>
                            <h3>{serie.name}</h3>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                
                                alt={serie.overview}
                            />
                            <div><Card/></div>
                        </li>
                    ))}
                </ul>
                
            </React.Fragment>
        )
    }
}

export default Series