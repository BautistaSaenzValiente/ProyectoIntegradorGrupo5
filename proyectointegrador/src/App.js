import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from "./screens/Home/Home";
import Detalle from "./screens/Detalle/Detalle";
import MasVistas from "./screens/MasVistas/MasVistas";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Peliculas from "./components/Peliculas/Peliculas"


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path "/" component={Home} exact={true} />
        <Route path "/detalle/id" component={Detalle} exact={true} />
        <Route path "/MasVistas" component={Detalle} exact={true} />

      </Switch>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
