import React, { useState, useEffect } from 'react'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/simParametreSlide.css'


const SimParametreList = ({data, value, setOneValue, cat}) => {

    const [defaultValue, setDefaultValue] = useState(value[0])
    const possibleValues = data.possibleValues.split(', ')
    const [infosClass, setInfoClass] = useState("param-info-container-hidden")
    const [componentClass, setComponentClass] = useState("")
    const [hasInit, setHasInit]=useState(0)

    useEffect(() => {
        if (data.expert) {
            setComponentClass("mode-expert param-container-normal")
        }
        else setComponentClass("param-container-normal")
    },[])

    useEffect(() => {
        console.log("in list useeffect", hasInit)
        if (hasInit==0) {
            setHasInit(1)
        }
        else {
            console.log(hasInit, "in list setonevalue")
            setOneValue(defaultValue, data.index)
        }
    }, [defaultValue])

    function toggleClass() {
        var componentClassSt =""
        if (data.expert) componentClassSt += "mode-expert"
        if (componentClass.includes("param-container-normal")) {
            setComponentClass(componentClassSt + " param-container-expanded")
            setInfoClass("param-info-container-visible flex-item")
        }
        else {
            setComponentClass(componentClassSt + " param-container-normal")
            setInfoClass("param-info-container-hidden") 
        }
    }

    return (
        <div className={componentClass}>
            <div id={"param"+data.index}>
                <div className="param-header flex-item nomarge nopad">
                    <h6 className="param-name nomarge">{data.name}</h6>
                    <button className="see-more-btn icon-box nomarge nopad" onClick={toggleClass}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                {data.description && <p className="small-param-desc">{data.description}</p>}

                <form >
                <div className="flex-item"> 
                    {possibleValues.map((val, i) => (
                        <div key={i} className="sim-param-radio">
                            <input type="radio" key={i} id={val} name={i} onChange={e => setDefaultValue(e.target.id)} checked={val === defaultValue}/>
                            <label className="small-param-desc" key={"lab"+i} htmlFor={val}>{val}</label>
                        </div>
                    ))
                    }
                </div>
                </form>
            </div>

            <div className={infosClass} style={{backgroundColor:cat.color}}>
                <div className="right-btn">
                    <div>
                        <h6>Calcul des émissions</h6>
                        <p>{data.infoCalcul}</p>
                    </div>
                    <div>
                        <h6>Tendances</h6>
                        <p>{data.tendance}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h6>Co-Bénéfices</h6>
                        <p>{data.coBenefices}</p>
                    </div>
                    <div>
                        <h6>Contraintes</h6>
                        <p>{data.contraintes}</p>
                    </div>
                </div>
                
            </div>

        </div>
                    
    )
}

export default SimParametreList
