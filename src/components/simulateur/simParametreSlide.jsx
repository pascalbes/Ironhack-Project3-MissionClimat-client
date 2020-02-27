import React from 'react'

const simParametreSlide = ({data, value, setOneValue}) => {

    const handleChange = (e) => {
        setOneValue(e.target.value, data.index)
    }

    return (
        <div id={"param"+data.index}>
            <h5>{data.name}</h5>
            <p>{data.description}</p>
            <form onChange={handleChange}>
                <input type="range" id="param" name="param" min={data.min} max={data.max} defaultValue={`${value}`} step={(data.max - data.min)/20}/>
            </form>
        </div>
    )
}

export default simParametreSlide
