import React from 'react'

const simNavBar = (props) => {

    return (
        <div key="div1" className="sim-nav flex-item flex-column nopad">
            <div key="i1" className="sim-nav-scope">{props.data.scope}</div>
            <div key="i2" className="sim-nav-categories flex-item border-btn">
                {props.data.categories.map((cat, i) => (
                    <>
                        <a href={"#"+cat.id} key={i} className="sim-nav-categorie flex-item">{cat.name}</a>
                        <p key={"p"+i} className="nomarge nopad">|</p>
                    </>
                ))}
            </div>
        </div>
    )
}

export default simNavBar
