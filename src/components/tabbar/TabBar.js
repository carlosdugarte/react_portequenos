import React from 'react'
import { Link } from 'react-router-dom'

export const TabBar = () => {

    return (
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/productos/arepas">Arepas</Link>
            </li>       
            <li className="nav-item">
                <Link className="nav-link" to="/productos/tequeños">Tequeños</Link>
            </li>       
        </ul>
    )
}
