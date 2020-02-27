import React from 'react'
import NavMain from "./NavMain"
import { Link } from "react-router-dom"
import "../../styles/header.css"

const Header = () => {
    return (
        <header className="flex-item">
            <div className="header-left flex-item">
                <Link to="/"><img src="" alt="MSC LOGO HERE MOFO" className="header-logo"/></Link>
            </div>
            <NavMain/>
        </header>
    )
}

export default Header
