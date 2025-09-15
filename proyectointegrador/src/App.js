import { Route, Switch } from "react-router-dom";
import React from 'react';
import Home from "./screens/Home/Home";
import Detalle from "./screens/Detalle/Detalle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import NotFound from "./screens/NotFound/NotFound";
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
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="/buscador/:busqueda" component={Buscador}  />
        <Route path="/favoritos" component={Favoritos}  />
        <Route path="/series" component={Series}  />
        <Route path="/peliculas" component={Peliculas}  />
        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
