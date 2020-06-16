import React from "react";
import SimulatorIcon from "components/simulateur/SimulatorIcon";
import SimulatorNavigationLink from "components/simulateur/SimulatorNavigationLink";

const SimulatorNavigationMenu = ({ data }) => {
  return (
    <div className="flex-item flex-column">
      <h2 className="sim-nav-scope">{data.scope}</h2>
      <div className="sim-nav-categories flex-item">
        {data.categories.map((cat) => (
          <SimulatorNavigationLink
            key={cat.id}
            name={cat.name}
            id={cat.id}
            backgroundColor={cat.colorHover}
          >
            <SimulatorIcon icon={cat.name} />
          </SimulatorNavigationLink>
        ))}
      </div>
    </div>
  );
};

export default SimulatorNavigationMenu;
