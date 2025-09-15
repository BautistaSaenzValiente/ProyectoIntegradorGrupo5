import React, { Component } from 'react'
class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            esFavorito:false
        }
    }

    agregarAFavoritos(id){
    let favoritos = []
    let favoritosLocal = localStorage.getItem(`favoritos`)
    let favoritosParse = JSON.parse(favoritosLocal)

    if(favoritosParse !== null){
        favoritosParse.push(id)
        let favoritosToString = JSON.stringify(favoritosParse)
        localStorage.setItem(`favoritos`, favoritosToString)
    }else{
        favoritos.push(id)
        let favoritosToString = JSON.stringify(favoritos)
        localStorage.setItem(`favoritos`, favoritosToString)
    }

console.log(id)

  }
  <button onClick={()=>this.state.agregarAFavoritos(id)}>Agregar a favoritos</button>

  componentDidMount(){
     let favoritosLocal = localStorage.getItem(`favoritos`)
     let favoritosParse = JSON.parse(favoritosLocal)
    if(favoritosParse !== null){
        if(favoritosParse.includes(id)){
            this.setState({
                esFavorito: true
            })
        }
    }
    }
}
  

export default Card;