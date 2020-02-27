import React from 'react'

const simCategorie = (props) => {

    return (
        <div className="sim-categorie" id={"cat"+props.data.index}>
            <h3 className="sim-categorie-name">{props.data.name}</h3>
            <p className="sim-categorie-description">{props.data.description}</p>
            {/* ajouter une jauge? un graphe?? */}
        </div>
    )
}

export default simCategorie
