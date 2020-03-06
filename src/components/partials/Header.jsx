import React from 'react'
import NavMain from "./NavMain"
import { Link } from "react-router-dom"
import "../../styles/header.css"
import { useState } from 'react'
import { useEffect } from 'react'
import {withRouter} from 'react-router-dom'

const Header = ({location}) => {
    console.log(location)
    return (
        <header id="scroll-top" className="flex-item">
            <div className="header-left flex-item">
                <Link to="/"><img src="../../../images/logo/missionclimat.svg" alt="Home logo" className="header-logo"/></Link>
                {location.pathname !=="/" && <h4>mission climat</h4>}
            </div>
            <NavMain/>
        </header>
    )
}

export default withRouter(Header)
