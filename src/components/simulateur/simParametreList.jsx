import React from 'react'

const simParametreList = (props) => {

    const possibleValues = props.data.possibleValues.split(', ')

    return (
        <div>
            <h5>{props.data.name}</h5>
            <p>{props.data.description}</p>
            {/* <form>
            <div className="list"> 
                {props.data.possibleValues.map((value, i) => (
                    <>
                        <input type="radio" id={`${value}`} name={`${value}`} value={`${value}`} checked={(props.parameters.data.value === value) ?  true : false }/>
                        <label htmlFor={`${value}`}>{value}</label>
                    </>
                ))
                }
			</div>
            </form> */}
        </div>
    )
}

export default simParametreList
