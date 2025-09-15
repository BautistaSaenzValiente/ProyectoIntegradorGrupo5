import React from "react";
import { Component } from "react";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: []
        }
    }


    componentDidMount() {
        fetch(` https://developer.themoviedb.org/reference/intro/getting-started`)
            .then(res => res.json())
            .then(pelicula => {
                this.setState({})
            
            })
            .catch(error => console.log(error))
    }

    Vermas() {
        fetch(` https://developer.themoviedb.org/reference/intro/getting-started`)
            .then(res => res.json())
            .then(pelicula => {
                this.setState({})
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