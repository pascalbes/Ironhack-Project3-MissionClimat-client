import React from 'react'
import "./../../styles/sim-nav.css";



const simNavBar = (props) => {

    return (
        <div className="sim-nav">
            <div className="sim-nav-scope">{props.data.scope}</div>
            <div className="sim-nav-categories">
                {props.data.categories.map((cat, i) => (
                    <a href={"#"+cat.id} key={i} className="sim-nav-categorie">{cat.name}</a>
                ))}
            </div>
        </div>
    )
}

export default simNavBar
