import React from 'react'

const simNavBar = (props) => {

    function handleId() {
        if (props.data.scope==="Émissions nationales") {
            return "sim-nav-fr"
        }
        else if (props.data.scope==="Projection mondiale") {
            return "sim-nav-world"
        }
    }

    const imgSrc = {
        'Bâtiments': "../../images/Logement.png",
        'Transports': "../../images/Transports.png",
        'Agriculture et alimentation': "../../images/Alimentation.png",
        'Biens et services': "../../images/Biens services.png",
        'Énergie': "../../images/Energie.png",
        'Trajectoire': "../../images/Trajectoire.png",
        'Paramètres': "../../images/Projection mondiale.png",
    }

    const colorHover = {
        'Bâtiments': 'blue',
        'Transports': 'red',
        'Agriculture et alimentation': 'blue',
        'Biens et services': 'blue',
        'Énergie': 'blue',
        'Trajectoire': 'blue',
        'Paramètres': 'blue',
    }

    const testStyle = {
        backgroundColor: 'blue',
        '&:hover': {
            backgroundColor: 'red',
        }
    }

    return (
        <div id={handleId(props.data.scope)} className="flex-item flex-column">
            <h2 key="i1" className="sim-nav-scope">{props.data.scope}</h2>
            <div key="i2" className="sim-nav-categories flex-item">
                {props.data.categories.map((cat, i) => (
                    <a href={"#"+cat.id} className="sim-nav-category flex-item  flex-column">
                        <div
                          class="sim-nav-category-background"
                          style={{
                            backgroundColor: cat.color,
                          }}
                        ></div>
                        <div class="sim-nav-category-icon">
                          <span class="sim-nav-category-icon-helper"></span>
                          <img src={imgSrc[cat.name]}></img>
                        </div>
                        {/* <div>
                            <p key={i}>{cat.name}</p>
                        </div> */}
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
