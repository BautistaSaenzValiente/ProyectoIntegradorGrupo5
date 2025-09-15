import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Component } from 'react'
 

class Detalle extends Component {
  constructor(props) {
      super(props)
      this.state = {
          pelicula: [],
          loading: true
      }
  }
  componentDidMount() {
    const api_key = `63e3f6a0efe9754e92ac87caf88e971c`

      fetch(` https://api.themoviedb.org/3/movie/popular&api_key=${api_key}`)
          .then(res => res.json())
          .then(data => {
              this.setState({pelicula: data.results})
          })
  }

  render() {
      return (
          <React.Fragment>
              <Header />
                  this.state.loading ? <p>Cargando...</p> : pelicula={this.state.pelicula}
              <Footer />
          </React.Fragment>
      )
  }
}

export default Detalle;