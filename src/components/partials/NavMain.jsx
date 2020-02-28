import React from 'react'
import { Link } from 'react-router-dom'

const NavMain = () => {
    return (
        <nav>
            <Link to="/simulator"><button className="green-btn left-btn">Simulateur</button></Link>
            <Link to="/concept"><button className="border-btn left-btn">Concept</button></Link>
            <Link to="/about"><button className="border-btn left-btn">L'équipe</button></Link>
            <Link to="/contact"><button className="border-btn left-btn">Contact</button></Link>
            <Link to="/signin"><button className="border-btn left-btn">Mon espace</button></Link>
        </nav>
    )
}

export default NavMain
