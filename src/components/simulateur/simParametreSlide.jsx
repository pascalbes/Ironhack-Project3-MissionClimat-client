import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import '../../styles/simParametreSlide.css'

const useStyles = makeStyles(theme => ({
    root: {
      width: "auto",
    },
    margin: {
      height: theme.spacing(3),
    },
}));

const SimParametreSlide = ({data, value, setOneValue}) => {

    const [infosClass, setInfoClass] = useState("param-info-container-hidden")
    
    const classes = useStyles();

    const marks = [
    {
        value: data.min,
        label: `${data.min}${data.unit}`,
    },
    {
        value: data.max,
        label: `${data.max}${data.unit}`,
    },
    ];
    
    function valuetext(value) {
    return `${value}`;
    }
    
    function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
    }

    const handleChange = (e, val) => {
        setOneValue(val[0], data.index)
    }

    function toggleClass() {
        if (infosClass==="param-info-container-visible") {
            setInfoClass("param-info-container-hidden")
        }
        else setInfoClass("param-info-container-visible") 
    }
    
      
    return (
        // <div id={"param"+data.index}>
        //     <h5>{data.name}</h5>
        //     <p>{data.description}</p>
        //     <form onChange={handleChange}>
        //         <input type="range" id="param" name="param" min= max={data.max} defaultValue={`${value}`} step={(data.max - data.min)/20}/>
        //     </form>
        // </div>
        
        <div>
            <button onClick={toggleClass}>Expand View</button>
            <h5>{data.name}</h5>
            <p>{data.description}</p>

            <div className={classes.root}>
                <div className={classes.margin} />
                <Slider
                    defaultValue={value}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    min={data.min}
                    max={data.max}
                    marks={marks}
                    valueLabelDisplay="auto"
                    onChangeCommitted={ (e, val) => handleChange(e, val)}
                    track="normal"
                />
            </div>

            <div className={infosClass}>
                <div>
                    <h6>Calcul des émissions</h6>
                    <p>{data.infoCalcul}</p>
                </div>
                <div>
                    <h6>Tendances</h6>
                    <p>{data.tendance}</p>
                </div>
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


    )
}

export default SimParametreSlide
