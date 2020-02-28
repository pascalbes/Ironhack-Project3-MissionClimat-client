import React, { useState, useEffect } from 'react'


const SimParametreList = ({data, value, setValues}) => {

    const [defaultValues, setDefaultValues] = useState(value[0])

    const possibleValues = data.possibleValues.split(', ')

    console.log(data)

    const handleChange = e => {
        console.log(e.target.id)
        
    }

    // function handleLine(val, value, i) {
    //     return val == value[0]val == value[0] ? <input type="radio" key={i} id={val} name={i} onChange={e => handleChange(e)} checked="checked"/> : <input type="radio" name={data.index} id={val} onChange={e => handleChange(e)}/>
    // }

    return (
        <div id={"param"+data.index}>
            <h5>{data.name}</h5>
            <p>{data.description}</p>
            <form >
            <div className="flex-item"> 
                {possibleValues.map((val, i) => (
                    <div className="sim-param-radio">
                    <input type="radio" key={i} id={val} name={i} onChange={e => setDefaultValues(e.target.id)} checked={val == defaultValues}/>
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
