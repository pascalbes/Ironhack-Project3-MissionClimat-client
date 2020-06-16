import React from "react";

const SimulatorNavigationLink = ({ id, backgroundColor, name, children }) => {
  return (
    <a href={`#${id}`} title={name} className="sim-nav-category flex-item  flex-column">
      <div className="sim-nav-category-background" style={{ backgroundColor }}></div>
      <div className="sim-nav-category-icon">
        <span className="sim-nav-category-icon-helper"></span>
        {children}
      </div>
    </a>
  );
};

export default SimulatorNavigationLink;
