import React from 'react'
import "./../../styles/sim-category.css"

const simCategorie = (props) => {

    return (
        <div className="sim-categorie">
            <div className="sim-categorie-name">{props.name}</div> <div className="sim-categorie-description">{props.description}</div>
            {/* ajouter une jauge? un graphe?? */}
        </div>
    )
}

export default simCategorie
