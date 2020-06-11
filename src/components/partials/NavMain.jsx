import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const width = window.innerWidth;
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const NavMain = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return width > 900 ? (
    <nav>
      <Link to="/simulator">
        <button style={{ color: props.color }}>Simulateur</button>
      </Link>
      <Link to="/concept">
        <button style={{ color: props.color }}>Concept</button>
      </Link>
      <Link to="/about">
        <button style={{ color: props.color }}>À propos</button>
      </Link>
      <Link to="/contribuer">
        <button style={{ color: props.color }}>Contribuer</button>
      </Link>
      <Link to="/contact">
        <button style={{ color: props.color }}>Contact</button>
      </Link>
    </nav>
  ) : (
    <>
      <nav className="nav-responsive">
        <IconButton onClick={handleDrawerOpen}>
          <FontAwesomeIcon style={{ color: props.color }} icon={faBars} />
        </IconButton>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <FontAwesomeIcon style={{ color: props.color }} size="xs" icon={faChevronLeft} />
              ) : (
                <FontAwesomeIcon style={{ color: props.color }} size="xs" icon={faChevronRight} />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/simulator">
              <button>Simulateur</button>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to="/concept">
              <button>Concept</button>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to="/about">
              <button>À propos</button>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to="/contribuer">
              <button>Contribuer</button>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </List>
        </Drawer>
      </nav>
    </>
  );
};

export default NavMain;
