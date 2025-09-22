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
    const api_key = `63e3f6a0efe9754e92ac87caf88e971c`;
    let favoritosLocal = localStorage.getItem("favoritos");
    if (favoritosLocal) {
      let favoritosParse = JSON.parse(favoritosLocal);
      favoritosParse.map((favs) => (
        fetch(`https://api.themoviedb.org/3/movie/popular?&api_key=${api_key}`)
          .then(res => res.json())
          .then(data => {
            this.setState({ peliculas: data.results })

          })
          .catch(error => console.log(error))
          < Card
        key = { peli.id }
        id = { peli.id }
        title = { peli.title }
        poster_path = { peli.poster_path }
          />
     }}}
    




render(){
        return(
    <React.Fragment >
          <div>
            <h1>Mis Favoritos</h1>
            {this.state.favoritos.length === 0 ? (
              <p>No tenés favoritos aún.</p>
            ) : (
              <div className="grid">
                {this.state.favoritos.map(peli => (
                  <Card
                    key={peli.id}
                    id={peli.id}
                    title={peli.title}
                    poster_path={peli.poster_path}
                  />
                ))}
              </div>
            )}
          </div>
    </React.Fragment >
  );
    }






    export default Favoritos;