import React from 'react'
import "./../../styles/sim-category.css"

const simCategorie = (props) => {

    return (
        <div className="sim-categorie">
            <h3 className="sim-categorie-name">{props.data.name}</h3>
            <p className="sim-categorie-description">{props.data.description}</p>
            {/* ajouter une jauge? un graphe?? */}
        </div>
    )
}

export default simCategorie
