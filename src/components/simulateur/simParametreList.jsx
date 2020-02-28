import React, { useState, useEffect } from 'react'


const SimParametreList = ({data, value, setOneValue}) => {

    const [defaultValue, setDefaultValue] = useState(value[0])

    const possibleValues = data.possibleValues.split(', ')


    useEffect(() => {
        setOneValue(defaultValue, data.index)
    }, [defaultValue])

    return (
        <div id={"param"+data.index}>
            <h5>{data.name}</h5>
            <p>{data.description}</p>
            <form >
            <div className="flex-item"> 
                {possibleValues.map((val, i) => (
                    <div className="sim-param-radio">
                    <input type="radio" key={i} id={val} name={i} onChange={e => setDefaultValue(e.target.id)} checked={val == defaultValue}/>
                        {/* {handleLine(val, value, i)} */}
                        <label for={val}>{val}</label>
                    </div>
                ))
                }
			</div>
            </form>
        </div>
    )
}

export default SimParametreList
