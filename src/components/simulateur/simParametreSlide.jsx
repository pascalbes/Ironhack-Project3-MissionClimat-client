import React from 'react'

const simParametreSlide = (props) => {

    console.log((props.data.max - props.data.min)/20)


    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div id={"param"+props.data.index}>
            <h5>{props.data.name}</h5>
            <p>{props.data.description}</p>
            <form onChange={handleChange}>
                <input type="range" id="param" name="param" min={props.data.min} max={props.data.max} defaultValue={`${props.data.value}`} step={(props.data.max - props.data.min)/20}/>
            </form>
        </div>
    )
}

export default simParametreSlide
