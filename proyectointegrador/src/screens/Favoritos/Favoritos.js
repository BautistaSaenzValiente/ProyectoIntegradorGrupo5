import { Component } from "react";
import React from "react";
import Card from "../../components/Card/Card"

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritosPeliculas: [],
      favoritosSeries: []
    };
  }

  componentDidMount() {
    const api_key = `63e3f6a0efe9754e92ac87caf88e971c`;
    let favoritosLocal = localStorage.getItem("favoritosPelis");
    if (favoritosLocal) {
      let favoritosParse = JSON.parse(favoritosLocal);
      let pelis = []


      favoritosParse.map((favs) =>
        fetch(`https://api.themoviedb.org/3/movie/${favs}?api_key=${api_key}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            pelis.push(data)
            this.setState({ favoritosPeliculas: pelis })

          })
          .catch(error => console.log(error))
      )
    }

    this.series()
  }

  series() {
    const api_key = `63e3f6a0efe9754e92ac87caf88e971c`;
    let favoritosLocal = localStorage.getItem("favoritosSeries");
    if (favoritosLocal) {
      let favoritosParse = JSON.parse(favoritosLocal);
      let series = []


      favoritosParse.map((favs) =>
        fetch(`https://api.themoviedb.org/3/tv/${favs}?api_key=${api_key}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            series.push(data)
            this.setState({ favoritosSeries: series })

          })
          .catch(error => console.log(error))
      )
    }
  }


  quitarFavoritos(id, esSerie) {
    if (esSerie) {
      let filtrados = this.state.favoritosSeries.filter(serie => serie.id !== id)
    this.setState({ favoritosSeries: filtrados })
    }
    else {
      let filtrados = this.state.favoritosPeliculas.filter(peli => peli.id !== id)
    this.setState({ favoritosPeliculas: filtrados })
    }
  }





  render() {
    return (
      <React.Fragment >
        <div>
          <h1>Mis Favoritos</h1>
          
          {this.state.favoritosPeliculas.length === 0 ? (
            <p>No tenés peliculas favoritas aún.</p>
          ) : (
            <div className="grid">
              <h2>Tus Peliculas favoritas</h2>
              {this.state.favoritosPeliculas.map(peli => (
                <Card
                  key={peli.id}
                  info={peli}
                  esSerie={false}
                  quitarFavoritos={() => this.quitarFavoritos(peli.id, false)} />
              ))}
            </div>
            
            
          )}
          {this.state.favoritosSeries.length === 0 ? (
            <p>No tenés series favoritos aún.</p>
          ) : (
            
            <div className="grid">
              <h2>Tus Series favoritas</h2>
              {this.state.favoritosSeries.map(peli => (
                <Card
                  key={peli.id}
                  info={peli}
                  esSerie={true}
                  quitarFavoritos={() => this.quitarFavoritos(peli.id, true)} />
              ))}
            </div>
          )}
        </div>
      </React.Fragment >
    )
  }
}





export default Favoritos;