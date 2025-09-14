import React from 'react'

class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {
          pelicula: [],
          loading: true
      }
  }
  componentDidMount() {
      fetch(` https://developer.themoviedb.org/reference/intro/getting-started`)
          .then(res => res.json())
          .then(pelicula => {
              this.setState({})
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