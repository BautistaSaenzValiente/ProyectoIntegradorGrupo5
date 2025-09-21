    import React from 'react';
    import Formulario from '../Formulario/Formulario';
    import { Link } from 'react-router-dom';
    import "../Header/header.css"

    function Header() {
        return (
            <React.Fragment>
                <nav>
                    <img className="logo"
                    
                        src='/pp.png'
                        alt='pelis'
                    />
                    <Formulario/>
                    
                    <ul className="">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/series">Series</Link></li>
                        <li><Link to="/peliculas">Películas</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    };

    export default Header;