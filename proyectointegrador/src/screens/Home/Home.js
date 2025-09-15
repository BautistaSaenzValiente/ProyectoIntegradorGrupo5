import React from "react";
import { Component } from "react";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: [],
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

            </React.Fragment>
        )
    }
}
export default Home;