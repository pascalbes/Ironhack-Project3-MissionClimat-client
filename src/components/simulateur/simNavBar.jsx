import React from 'react'

const simNavBar = (props) => {

    return (
        <div className="sim-nav flex-item flex-column nopad">
            <div className="sim-nav-scope">{props.data.scope}</div>
            <div className="sim-nav-categories flex-item border-btn light">
                {props.data.categories.map((cat, i) => (
                    <>
                        <a href={"#"+cat.id} key={i} className="sim-nav-categorie">{cat.name}</a>
                        <p className="nomarge nopad">|</p>
                    </>
                ))}
            </div>
        </div>
    )
}

export default simNavBar
