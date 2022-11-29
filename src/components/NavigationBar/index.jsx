import { NavLink } from "react-router-dom";

import "./index.scss";

const NavigationBar = ({ items }) => {
  const content = items.map(({ name, path }) => {
    return (
      <NavLink key={name} to={path}>
        {name}
      </NavLink>
    );
  });

  return <nav className="navigation">{content}</nav>;
};

export default NavigationBar;
