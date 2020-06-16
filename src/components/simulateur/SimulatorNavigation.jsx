import React from "react";

import SimulatorNavigationMenu from "components/simulateur/SimulatorNavigationMenu";
import ReactGA from "react-ga";

const SimulatorNav = ({ leftNavData, rightNavData, showOptions }) => {
  function handleClickTracking(type) {
    ReactGA.event({
      category: "Click",
      action: type,
    });
  }

  function handleClick(event) {
    handleClickTracking("options");
    showOptions(event);
  }

  return (
    <div id="sim-nav-box" className="flex-item flex-column">
      <h1>Mes mesures pour 2030</h1>
      <div className="flex-item">
        <div id="sim-nav-fr">
          <SimulatorNavigationMenu data={leftNavData} />
        </div>
        <div id="sim-nav-world">
          <SimulatorNavigationMenu data={rightNavData} />
        </div>
        <button
          id="options"
          className="sim-nav-category flex-item flex-column"
          onClick={handleClick}
        >
          <div className="sim-nav-category-icon">
            <span className="sim-nav-category-icon-helper"></span>
            <img src="/images/Options.png" alt="options" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SimulatorNav;
