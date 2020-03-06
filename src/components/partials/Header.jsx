import React from 'react'
import NavMain from "./NavMain"
import { Link } from "react-router-dom"
import "../../styles/header.css"
import { useState } from 'react'
import { useEffect } from 'react'

const Header = () => {
    const [title, setTitle] = useState("")

    useEffect(() => {
        window.location.pathname === "/" ? setTitle("") : setTitle("mission climat")
    })

    return (
        <header id="scroll-top" className="flex-item">
            <div className="header-left flex-item">
                <Link to="/"><img src="../../../images/logo/missionclimat.svg" alt="Home logo" className="header-logo"/></Link>
                <h4>{title}</h4>
            </div>
            <NavMain/>
        </header>
    )
}

export default Header
