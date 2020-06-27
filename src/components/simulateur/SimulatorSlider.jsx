import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

const SimulatorSlider = withStyles({
  root: {
    color: "#E4E4E4",
    height: 8,
  },
  thumb: {
    height: 16,
    width: 16,
    border: "2px solid #1087a1",
    backgroundColor: "#1087a1",
    marginTop: -5,
    marginLeft: -7,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {},
  track: {
    height: 5,
    borderRadius: 4,
    color: "#C7C7C7",
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
  markActive: {
    display: "none",
  },
  mark: {
    display: "none",
  },
})(Slider);

export default SimulatorSlider;
