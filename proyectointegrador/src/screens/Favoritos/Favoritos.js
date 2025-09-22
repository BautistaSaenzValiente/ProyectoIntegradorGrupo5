import { Component } from "react";
import React from "react";
import Card from "../../components/Card/Card"

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritosPeliculas: []
    };
  }

  componentDidMount() {
    const api_key = `63e3f6a0efe9754e92ac87caf88e971c`;
    let favoritosLocal = localStorage.getItem("favoritos");
    if (favoritosLocal) {
      let favoritosParse = JSON.parse(favoritosLocal);
      favoritosParse.map((favs) =>
        fetch(`https://api.themoviedb.org/3/movie/${favs}?api_key=${api_key}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.setState({ favoritosPeliculas: data })

          })
          .catch(error => console.log(error))
      )
    }
  }






  render() {
    return (
      <React.Fragment >
        <div>
          <h1>Mis Favoritos</h1>
          {this.state.favoritosPeliculas.length === 0 ? (
            <p>No tenés favoritos aún.</p>
          ) : (
            <div className="grid">
              {this.state.favoritos.map(peli => (
                <Card />
              ))}
            </div>
          )}
        </div>
      </React.Fragment >
    )
  }
}





export default Favoritos;