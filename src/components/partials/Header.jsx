import React from 'react'
import NavMain from "./NavMain"
import "../../styles/header.css"

const Header = () => {
    return (
        <header className="flex-item">
            <div className="header-left flex-item">
                <img src="" alt="MSC Logo" className="header-logo"/>
                <h2>msc</h2>
            </div>
            <NavMain/>
        </header>
    )
}

export default Header
