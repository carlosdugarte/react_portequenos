import React from 'react'
import { CartWidget } from './CartWidget';
import logo from './logo2.png';
import './estilosNavBar.css'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="../public/index.html">
                    <img id="imgLogo" src={logo} alt="logo de Portequeños"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="../public/index.html">Home <span className="sr-only"></span> </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="../public/index.html">Productos  </a>
                        </li>    
                        <li className="nav-item ">
                            <a className="nav-link" href="../public/index.html">Nosotros </a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link" href="../public/index.html">Contacto</a>
                        </li>  
                    </ul>
                </div>
                <CartWidget/>
            </nav>
            
        </div>
    )
}
