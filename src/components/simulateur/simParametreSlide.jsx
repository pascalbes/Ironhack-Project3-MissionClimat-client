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
    const [componentClass, setComponentClass] = useState("param-container-normal")
    
    const unit=data.unit
    
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
    
    function valuetext() {
    return `${value}${unit}`;
    }
    
    function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
    }

    const handleChange = (e, val) => {
        setOneValue(val[0], data.index)
    }

    function toggleClass() {
        if (componentClass==="param-container-normal") {
            setComponentClass("param-container-expanded")
            setInfoClass("param-info-container-visible")
        }
        else {
            setComponentClass("param-container-normal")
            setInfoClass("param-info-container-hidden") 
        }
    }
    
      
    return (
        // <div id={"param"+data.index}>
        //     <h5>{data.name}</h5>
        //     <p>{data.description}</p>
        //     <form onChange={handleChange}>
        //         <input type="range" id="param" name="param" min= max={data.max} defaultValue={`${value}`} step={(data.max - data.min)/20}/>
        //     </form>
        // </div>
        
        <div className={componentClass}>
            <div className="param-header flex-item nomarge nopad">
                <h5 className="nomarge">{data.name}</h5>
                <div className="hidden nomarge">||</div>
                <button className="see-more-btn nomarge" onClick={toggleClass}>+</button>
            </div>
            {data.description && <p className="small-param-desc">{data.description}</p>}

            <div className={classes.root}>
                <div className={classes.margin} />
                <Slider
                    value={value}
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
