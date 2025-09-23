import { Component } from "react";
import Card from "../../components/Card/Card";
import React from "react";


class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`
        console.log(this.props);
        let busqueda = this.props.match.params.busqueda;


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${busqueda}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ data: data.results, loading: false })

            })


    }

    componentDidUpdate(prevProps) {

        console.log(prevProps.match.params.busqueda, this.props.match.params.busqueda);
        const api_key = `63e3f6a0efe9754e92ac87caf88e971c`
        let propsAntiguas = prevProps.match.params.busqueda
        let propsNuevas = this.props.match.params.busqueda

        if (propsAntiguas !== propsNuevas) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${propsNuevas}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({ data: data.results, loading: false })

                })
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loading ? <p>cargando...</p> : this.state.data.map(resultado => (
                    <Card
                        key={resultado.id}
                        info={resultado}
                        id={resultado.id}
                        title={resultado.title}
                        poster_path={resultado.poster_path}
                        overview={resultado.overview}
                    />
                ))}
            </React.Fragment>
        )
    }

}

export default Buscador;