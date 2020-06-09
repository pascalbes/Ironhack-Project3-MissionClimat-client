import React from "react";
import NavMain from "./NavMain";
import { Link } from "react-router-dom";
import "../../styles/header.css";
import { withRouter } from "react-router-dom";

const Header = ({ location }) => {
  function handleId() {
    return location.pathname === "/simulator" ? "header-simulator" : "";
  }

  function handleColor() {
    return location.pathname === "/simulator" ? "#163e59" : "white";
  }

  function handleLogo() {
    return location.pathname === "/simulator"
      ? "../../../images/logo/missionclimat_blue.svg"
      : "../../../images/logo/missionclimat.svg";
  }

  return (
    <header id={handleId()} className="flex-item">
      <div className="header-left flex-item">
        <Link className="header-link flex-item" to="/">
          <img src={handleLogo()} alt="Home logo" className="header-logo" />
          {location.pathname !== "/" && <h4>mission climat</h4>}
        </Link>
      </div>
      <NavMain color={handleColor()} />
    </header>
  );
};

export default withRouter(Header);
