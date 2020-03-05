import React, {useState, useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider'
import '../../styles/simParametreSlide.css'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%'
    },
    margin: {
      height: 0,
    },
  }));

const MscSlider = withStyles({
        root: {
          color: 'grey',
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '5px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {//   left: 'calc(-50%)',
        },
        track: {
          height: 10,
          borderRadius: 4,
          color: 'black'
        },
        rail: {
          height: 10,
          borderRadius: 4,
        },
        markActive: {
            display: 'none'
          },
        mark: {
            display: 'none'
          },
      })(Slider);
    
const SimParametreSlide = ({data, value, setOneValue}) => {

    const [infosClass, setInfoClass] = useState("param-info-container-hidden")
    const [componentClass, setComponentClass] = useState("")
    const [defautVal, setDefaultVal] = useState(value)

    useEffect(() => {
        if (data.expert) {
            setComponentClass("mode-expert param-container-normal")
        }
        else setComponentClass("param-container-normal")
    },[])

    // useEffect(() => {
    //     setValueState(value)
    //     setDefaultVal(value)
    // }, [])

    // useEffect(() => {
    //     setDefaultVal(valueState)
    // },[valueState])

    console.log(value)
    
    const unit=data.unit
    
    const classes = useStyles()

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
        console.log("inhandle", val)
        setOneValue(val[0], data.index)
    }

    function toggleClass() {
        var componentClassSt =""
        if (data.expert) componentClassSt += "mode-expert"
        if (componentClass.includes("param-container-normal")) {
            setComponentClass(componentClassSt + " param-container-expanded")
            setInfoClass("param-info-container-visible flex-item")
        }
        else {
            setComponentClass(componentClassSt + " param-container-normal")
            setInfoClass("param-info-container-hidden") 
        }
    }
      
    return (
        
        <div className={componentClass}>
            <div className="param-header flex-item nomarge nopad">
                <h6 className="param-name nomarge">{data.name}</h6>
                <button className="see-more-btn icon-box nomarge nopad" onClick={toggleClass}>
                    <FontAwesomeIcon icon={faInfoCircle}/>
                </button>
            </div>
            {data.description && <p className="small-param-desc">{data.description}</p>}

            <div className={classes.root}>
                <div className={classes.margin} />
                <MscSlider 
                    defaultValue={value || 0}
                    //value={value}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    min={data.min}
                    max={data.max}
                    marks={marks}
                    scale={x => x + data.unit}
                    valueLabelDisplay="auto"
                    onChangeCommitted={ (e, val) => handleChange(e, val)}
                    track="normal"
                />
            </div>

            <div className={infosClass}>
                <div className="right-btn">
                    <div>
                        <h6>Calcul des émissions</h6>
                        <p>{data.infoCalcul}</p>
                    </div>
                    <div>
                        <h6>Tendances</h6>
                        <p>{data.tendance}</p>
                    </div>
                </div>
                <div>
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

        </div>


    )
}

export default SimParametreSlide
