import React from 'react';
import Formulario from '../Formulario/Formulario';


function Header() {
    return (
        <React.Fragment>
            <nav>
                <Formulario />
                <ul class="nav nav-tabs my-4">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="movies.html">Películas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="series.html">Series</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="favorites.html">Favoritas</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
};

export default Header;