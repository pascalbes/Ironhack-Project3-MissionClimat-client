import React from 'react'
import "./../../styles/sim-nav.css";



const simNavBar = () => {

    
    return (
        <div className="sim-nav">
            <div className="sim-nav-scope">{props.scope}</div>
            <div className="sim-nav-categories">
                {props.categories.map((cat, i) => {
                <div key={i} className="sim-nav-categorie">{cat}</div>})}</div>
            </div>
    )
}

export default simNavBar
