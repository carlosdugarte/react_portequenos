import React from 'react'
import { CartWidget } from './CartWidget';
import logo from './logo2.png';
import './estilosNavBar.css'
import {Link} from 'react-router-dom';


export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img id="imgLogo" src={logo} alt="logo de Portequeños"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home 
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/productos" className="nav-link">
                                Productos
                            </Link>
                        </li>   

                        <li className="nav-item ">
                            <Link to="/nosotros" className="nav-link">
                                Nosotros 
                            </Link>
                        </li>  
                    </ul>
                </div>
                <Link to="/carrito">
                    <CartWidget/>
                </Link>
            </nav>
            
        </div>
    )
}
