import React from 'react'
import "../../styles/navMain.css"
import { Link } from 'react-router-dom'

const NavMain = () => {
    return (
        <nav>
            <Link to="/simulator"><button className="nav-button">Simulateur</button></Link>
            <Link to="/concept"><button className="nav-button">Concept</button></Link>
            <Link to="/about"><button className="nav-button">L'équipe</button></Link>
            <Link to="/contact"><button className="nav-button">Contact</button></Link>
            <Link to="/signin"><button className="nav-button">Mon espace</button></Link>
        </nav>
    )
}

export default NavMain
