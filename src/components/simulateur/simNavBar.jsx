import React from 'react'

const simNavBar = (props) => {

    console.log(props)

    const srcAgri = "../../images/Alimentation.png"

    return (
        <div key="div1" className="sim-nav flex-item flex-column">
            <div key="i1" className="sim-nav-scope">{props.data.scope}</div>
            <div key="i2" className="sim-nav-categories flex-item">
                {props.data.categories.map((cat, i) => (
                    <a href={"#"+cat.id} className="sim-nav-category flex-item flex-column">
                        <img src="../../images/Alimentation.png"></img>
                        <p key={i} className="sim-nav-categorie flex-item">{cat.name}</p>
                    </a>
                ))}
            </div>




            {/* <div key="i1" className="sim-nav-scope">{props.data.scope}</div>
            <div key="i2" className="sim-nav-categories flex-item">
                {props.data.categories.map((cat, i) => (
                    <>
                        <a href={"#"+cat.id} key={i} className="sim-nav-categorie flex-item">{cat.name}</a>
                        <p key={"p"+i} className="nomarge nopad">|</p>
                    </>
                ))}
            </div> */}
        </div>
    )
}

export default simNavBar
