import React from 'react'
import { Link } from 'react-router-dom'

const NavMain = (props) => {
    return (
        <nav>
            <Link to="/simulator"><button className="border-btn left-btn" style={{color:props.color}}>Simulateur</button></Link>
            <Link to="/concept"><button className="border-btn left-btn" style={{color:props.color}}>Concept</button></Link>
            <Link to="/about"><button className="border-btn left-btn" style={{color:props.color}}>À propos</button></Link>
            <Link to="/contact"><button className="border-btn left-btn" style={{color:props.color}}>Contact</button></Link>
        </nav>
    )
}

export default NavMain
