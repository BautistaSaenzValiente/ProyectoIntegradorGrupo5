import { Route, Switch } from "react-router-dom";
import React from 'react';
import Home from "./screens/Home/Home";
import Detalle from "./screens/Detalle/Detalle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import NotFound from "./screens/NotFound/NotFound";
import MasVistas from "./screens/MasVistas/MasVistas";
import Buscador from "./screens/Buscador/Buscador";
import Favoritos from "./screens/Favoritos/Favoritos";
import Series from "./screens/Series/Series";
import Peliculas from "./screens/Peliculas/Peliculas";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/detalle/id" component={Detalle} exact={true} />
        <Route path="/MasVistas" component={MasVistas} exact={true} />
        <Route path="/buscador" component={Buscador} exact={true} />
        <Route path="/favoritos" component={Favoritos} exact={true} />
        <Route path="/series" component={Series} exact={true} />
        <Route path="/peliculas" component={Peliculas} exact={true} />
        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
