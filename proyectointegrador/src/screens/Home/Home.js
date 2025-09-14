import React from "react";
import Header from "../../components/Header/Header";
import { Component } from "react";
import Footer from "../../components/Footer/Footer"

class Home extends Component{
    constructor(props){
        super(props)
        this.state= {
            pelicula:[]
        }
    }
}

componentDidMount(){
fetch(` https://developers.themoviedb.org/3/movies/get-popular-movies`)
.then(res => res.json())
.then(pelicula =>{
    this.setState({})
})
}

Vermas(){
    fetch(` https://developers.themoviedb.org/3/movies/get-popular-movies`)
.then(res => res.json())
.then(pelicula =>{
    this.setState({})
})
}

render(){
    return(
        <React.Fragment>
            <Header/>

            <Footer/>
        </React.Fragment>
    )
}
export default Home;