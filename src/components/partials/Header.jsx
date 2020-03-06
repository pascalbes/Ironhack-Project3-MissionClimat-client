import React from 'react'
import NavMain from "./NavMain"
import { Link } from "react-router-dom"
import "../../styles/header.css"

const Header = () => {
    return (
        <header id="scroll-top" className="flex-item">
            <div className="header-left flex-item">
                <Link to="/"><img src="../../../images/logo/missionclimat.svg" alt="Home logo" className="header-logo"/></Link>
                <h4>mission climat</h4>
            </div>
            <NavMain/>
        </header>
    )
}

export default Header
