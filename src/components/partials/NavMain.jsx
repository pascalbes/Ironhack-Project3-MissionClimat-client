import React from 'react'
import { Link } from 'react-router-dom'

const NavMain = (props) => {
    return (
        <nav>
            <Link to="/simulator"><button style={{color:props.color}}>Simulateur</button></Link>
            <Link to="/concept"><button style={{color:props.color}}>Concept</button></Link>
            <Link to="/about"><button style={{color:props.color}}>À propos</button></Link>
            <Link to="/contribuer"><button style={{color:props.color}}>Contribuer</button></Link>
            <Link to="/contact"><button style={{color:props.color}}>Contact</button></Link>
        </nav>
    )
}

export default NavMain
