import React from 'react'

const simParametreList = (props) => {

    console.log(props)

    const possibleValues = props.data.possibleValues.split(', ')
    console.log(possibleValues)

    return (
        <div id={"param"+props.data.index}>
            <h5>{props.data.name}</h5>
            <p>{props.data.description}</p>
            <form >
            <div /*onChange= callback function*/ className="flex-item"> 
                {possibleValues.map((value, i) => (
                    <div className="sim-param-radio">
                        <input type="radio" id={`${value}`} name="params" value={`${value}`} /*checked={(props.data.value === value) ?  true : false }*//>
                        <label htmlFor={`${value}`}>{value}</label>
                    </div>
                ))
                }
			</div>
            </form>
        </div>
    )
}

export default simParametreList
