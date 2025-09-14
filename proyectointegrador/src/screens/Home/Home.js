import React from "react";
import Header from "../../components/Header/Header";
import { Component } from "react";
import Footer from "../../components/Footer/Footer"

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
                <Header />

                <Footer />
            </React.Fragment>
        )
    }
}
export default Home;