import React from 'react'

const simParametreList = ({data, value, setValues}) => {

    const possibleValues = data.possibleValues.split(', ')

    return (
        <div id={"param"+data.index}>
            <h5>{data.name}</h5>
            <p>{data.description}</p>
            <form >
            <div className="list" /*onChange= callback function*/> 
                {possibleValues.map((value, i) => (
                    <>
                        <input type="radio" id={`${value}`} name="params" value={`${value}`} /*checked={(props.data.value === value) ?  true : false }*//>
                        <label htmlFor={`${value}`}>{value}</label>
                    </>
                ))
                }
			</div>
            </form>
        </div>
    )
}

export default simParametreList
