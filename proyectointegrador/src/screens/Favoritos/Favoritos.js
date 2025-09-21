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

  // render() {
  //   return (
  //     <React.Fragment>
  //     <div>
  //       <h2>Mis Favoritos</h2>
  //       <ul className="cards-container">
  //         {this.state.favoritos.length > 0 ? (<p>No tenés favoritos guardados todavía.</p>)
  //         : (
  //           <p>No tenés favoritos guardados todavía.</p>
  //         )}
  //       </ul>
  //     </div>
//       </React.Fragment >
//     );
//   }
// }


  render() {
    return (
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
    );
  }
}





export default Favoritos;