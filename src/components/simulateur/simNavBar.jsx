import React from 'react'

const simNavBar = (props) => {

    const imgSrc = {
        'Bâtiments': "../../images/Logement.png",
        'Transports': "../../images/Transports.png",
        'Agriculture et alimentation': "../../images/Alimentation.png",
        'Biens et services': "../../images/Biens services.png",
        'Énergie': "../../images/Energie.png",
        'Trajectoire': "../../images/Trajectoire.png",
        'Paramètres': "../../images/Projection mondiale.png",
    }

    return (
        <div className="flex-item flex-column">
            <h2 key="i1" className="sim-nav-scope">{props.data.scope}</h2>
            <div key="i2" className="sim-nav-categories flex-item">
                {props.data.categories.map((cat, i) => (
                    <a href={"#"+cat.id}   title={cat.name} className="sim-nav-category flex-item  flex-column">
                        <div
                          class="sim-nav-category-background"
                          style={{
                            backgroundColor: cat.colorHover,
                          }}
                        ></div>
                        <div class="sim-nav-category-icon">
                          <span class="sim-nav-category-icon-helper"></span>
                          <img src={imgSrc[cat.name]} alt=""></img>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default simNavBar
