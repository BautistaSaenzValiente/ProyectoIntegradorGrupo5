import React, { Component, } from 'react'
import { Link } from 'react-router-dom';
import "../Card/Card.css"


class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            esFavorito: false,
            verDescripcion: false
        }
    }

    agregarAFavoritos(id) {


        if (this.props.esSerie) {
            let favoritos = []
            let favoritosLocal = localStorage.getItem(`favoritosSeries`)
            let favoritosParse = JSON.parse(favoritosLocal)

            if (favoritosParse !== null) {
                favoritosParse.push(id)
                let favoritosToString = JSON.stringify(favoritosParse)
                localStorage.setItem(`favoritosSeries`, favoritosToString)
                this.setState({ esFavorito: true })
            } else {
                favoritos.push(id)
                let favoritosToString = JSON.stringify(favoritos)
                localStorage.setItem(`favoritosSeries`, favoritosToString)
                this.setState({ esFavorito: true })
            }
        }
        else {
            let favoritos = []
            let favoritosLocal = localStorage.getItem(`favoritosPelis`)
            let favoritosParse = JSON.parse(favoritosLocal)

            if (favoritosParse !== null) {
                favoritosParse.push(id)
                let favoritosToString = JSON.stringify(favoritosParse)
                localStorage.setItem(`favoritosPelis`, favoritosToString)
                this.setState({ esFavorito: true })
            } else {
                favoritos.push(id)
                let favoritosToString = JSON.stringify(favoritos)
                localStorage.setItem(`favoritosPelis`, favoritosToString)
                this.setState({ esFavorito: true })
            }

            console.log(id)

        }
    }

    sacarDeFavoritos(id) {
        if (this.props.esSerie) {
            let favoritosLocal = localStorage.getItem(`favoritosSeries`)
            let favoritosParse = JSON.parse(favoritosLocal)

            let quitarFav = favoritosParse.filter(fav => fav !== id)

            let favoritosToString = JSON.stringify(quitarFav)
            localStorage.setItem(`favoritosSeries`, favoritosToString)
            this.setState({ esFavorito: false })

            if (this.props.quitarFavoritos) {
                this.props.quitarFavoritos(this.props.info.id)

            }
        }
        else {
            let favoritosLocal = localStorage.getItem(`favoritosPelis`)
            let favoritosParse = JSON.parse(favoritosLocal)

            let quitarFav = favoritosParse.filter(fav => fav !== id)

            let favoritosToString = JSON.stringify(quitarFav)
            localStorage.setItem(`favoritosPelis`, favoritosToString)
            this.setState({ esFavorito: false })

            if (this.props.quitarFavoritos) {
                this.props.quitarFavoritos(this.props.info.id)

            }
        }
    }


    componentDidMount() {
        if (this.props.esSerie) {
            let favoritosLocal = localStorage.getItem(`favoritosSeries`)
            let favoritosParse = JSON.parse(favoritosLocal)
            if (favoritosParse !== null) {
                if (favoritosParse.includes(this.props.info.id)) {
                    this.setState({
                        esFavorito: true
                    })
                }
            }
        }
        else {
            let favoritosLocal = localStorage.getItem(`favoritosPelis`)
            let favoritosParse = JSON.parse(favoritosLocal)
            if (favoritosParse !== null) {
                if (favoritosParse.includes(this.props.info.id)) {
                    this.setState({
                        esFavorito: true
                    })
                }
            }
        }
    }

    mostrarDescripcion = () => {
        this.setState(prev => ({ verDescripcion: !prev.verDescripcion }));
    };


    render() {
        return (
            <React.Fragment>
                <div className="card" key={this.props.info.key}>
                    <h3 className="card-title">
                        {this.props.esSerie ? this.props.info.name : this.props.info.title}
                    </h3>
                    <img
                        className="card-img"
                        src={`https://image.tmdb.org/t/p/w500${this.props.info.poster_path}`}
                        alt={this.props.info.overview}
                    />
                    <Link to={`${this.props.esSerie ? 'serie' : 'pelicula'}/detalle/${this.props.info.id}`} ><button>Detalle</button></Link>

                    <button onClick={this.mostrarDescripcion}>
                        {this.state.verDescripcion ? "Ocultar descripción" : "Ver descripción"}
                    </button>

                    {this.state.verDescripcion && <p>{this.props.info.overview}</p>}
                    {
                        this.state.esFavorito ?
                            <button className="card-btn remove" onClick={() => this.sacarDeFavoritos(this.props.info.id)}>
                                Sacar de favoritos
                            </button>
                            :
                            <button className="card-btn add" onClick={() => this.agregarAFavoritos(this.props.info.id)}>
                                Agregar a favoritos
                            </button>
                    }
                </div>


            </React.Fragment >
        )

    }
}


export default Card;