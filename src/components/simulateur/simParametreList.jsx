import React from 'react'

const simParametreList = () => {

    return (
        <div>
            <h3>{props.parameters.data.name}</h3>
            <p>{props.parameters.data.description}</p>
            <form>
            <div className="list" /*onChange=fonction callback*/>
                {props.parameters.data.possibleValues.map((value, i) => {
                    <>
                        <input type="radio" id={`${value}`} name={`${value}`} value={`${value}`} checked={(props.parameters.data.value === value) ?  true : false }/>
                        <label htmlFor={`${value}`}>{value}</label>
                    </>
                })
                }
			</div>
            </form>
        </div>
    )
}

export default simParametreList
