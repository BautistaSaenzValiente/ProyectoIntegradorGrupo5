import { Route, Switch } from "react-router-dom";
import React from 'react';
import Home from "./screens/Home/Home";
import Detalle from "./screens/Detalle/Detalle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path= "/" component={Home} exact={true} />
        <Route path= "/detalle/id" component={Detalle} exact={true} />
        <Route path= "/MasVistas" component={Detalle} exact={true} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
