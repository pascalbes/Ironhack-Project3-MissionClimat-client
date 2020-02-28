import React from 'react'
import "./../../styles/nav-results.css"

const resultsNav = () => {
    return (
        <div className="results-nav flex-item border-btn light">
            <a href="#national-co2">Emissions françaises</a>
            <p className="nomarge nopad">|</p>
            <a href="#world-co2">Emissions mondiales</a>
            <p className="nomarge nopad">|</p>
            <a href="#impact">Impact</a>
            <p className="nomarge nopad">|</p>
            <a href="#parameters">Résumé des paramètres</a>
        </div>
    )
}

export default resultsNav
