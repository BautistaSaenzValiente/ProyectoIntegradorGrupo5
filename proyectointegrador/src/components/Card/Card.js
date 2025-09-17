import React, { Component } from 'react'
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
            if (favoritosParse.includes(id)) {
                this.setState({
                    esFavorito: true
                })
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.esFavorito ?
                        <button onClick={() => this.sacarAFavoritos(id)}> Sacar de favoritos</button> :
                        <button onClick={() => this.agregarAFavoritos(id)}>Agregar a favoritos</button>
                }
            </React.Fragment>
        )

    }
}


export default Card;