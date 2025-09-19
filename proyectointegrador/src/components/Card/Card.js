import React, { Component } from 'react'
import "../Card/Card.css"


class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            esFavorito: false
        }
    }

    agregarAFavoritos(id) {
        let favoritos = []
        let favoritosLocal = localStorage.getItem(`favoritos`)
        let favoritosParse = JSON.parse(favoritosLocal)

        if (favoritosParse !== null) {
            favoritosParse.push(id)
            let favoritosToString = JSON.stringify(favoritosParse)
            localStorage.setItem(`favoritos`, favoritosToString)
            this.setState({ esFavorito: true })
        } else {
            favoritos.push(id)
            let favoritosToString = JSON.stringify(favoritos)
            localStorage.setItem(`favoritos`, favoritosToString)
            this.setState({ esFavorito: true })
        }

        console.log(id)

    }

    sacarDeFavoritos(id) {
        let favoritosLocal = localStorage.getItem(`favoritos`)
        let favoritosParse = JSON.parse(favoritosLocal)

        let quitarFav = favoritosParse.filter(fav => fav !== id)

        let favoritosToString = JSON.stringify(quitarFav)
        localStorage.setItem(`favoritos`, favoritosToString)
        this.setState({ esFavorito: false })
    }


    componentDidMount() {
        let favoritosLocal = localStorage.getItem(`favoritos`)
        let favoritosParse = JSON.parse(favoritosLocal)
        if (favoritosParse !== null) {
            if (favoritosParse.includes(this.props.id)) {
                this.setState({
                    esFavorito: true
                })
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <li className="card" key={this.props.key}>
  <h3 className="card-title">
    {this.props.esSerie ? this.props.info.name : this.props.info.title}
  </h3>
  <img
    className="card-img"
    src={`https://image.tmdb.org/t/p/w500${this.props.info.poster_path}`}
    alt={this.props.info.overview}
  />
  {
    this.state.esFavorito ?
      <button className="card-btn remove" onClick={() => this.sacarDeFavoritos(this.props.id)}>
        Sacar de favoritos
      </button>
    :
      <button className="card-btn add" onClick={() => this.agregarAFavoritos(this.props.id)}>
        Agregar a favoritos
      </button>
  }
</li>


            </React.Fragment>
        )

    }
}


export default Card;