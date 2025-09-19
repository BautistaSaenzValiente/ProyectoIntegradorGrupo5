import { Component } from "react";
import React from "react";
import Card from "../../components/Card/Card"

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritos: []
    };
  }

  componentDidMount() {
    let favoritosLocal = localStorage.getItem("favoritos");
    if (favoritosLocal) {
      let favoritosParse = JSON.parse(favoritosLocal);
      this.setState({ favoritos: favoritosParse });
    }
  }

  render() {
    return (
      <div>
        <h2>Mis Favoritos</h2>
        <ul className="cards-container">
          {this.state.favoritos.length > 0 ? ()
          : (
            <p>No tenés favoritos guardados todavía.</p>
          )}
        </ul>
      </div>
    );
  }
}

export default Favoritos;