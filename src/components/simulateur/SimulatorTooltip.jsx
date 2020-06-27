import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

const SimulatorTooltip = withStyles({
  tooltip: {
    color: "white",
    backgroundColor: "#1087a1",
    fontSize: "1.1em",
  },
  arrow: {
    color: "#1087a1",
  },
})(Tooltip);

export default SimulatorTooltip;
