    import React from 'react';
    import Formulario from '../Formulario/Formulario';
    import { Link } from 'react-router-dom';


    function Header() {
        return (
            <React.Fragment>
                <nav>
                    <Formulario/>
                    <ul className="">
                        <b><li><Link to="/">Home</Link></li></b>
                        <b><li><Link to="/series">Series</Link></li></b>
                        <b><li><Link to="/peliculas">Películas</Link></li></b>
                        <b><li><Link to="/favoritos">Favoritos</Link></li></b>
                    </ul>
                </nav>
            </React.Fragment>
        )
    };

    export default Header;