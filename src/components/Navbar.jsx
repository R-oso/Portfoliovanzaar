import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import navbarCSS from "../css/navbar.module.css";
import flower from "/bloem.svg";
import flowerRed from "/bloemrood.svg";

const Navbar = ({ onLinkClick, matterContainerRef }) => {
  const [hovered, setHovered] = useState(false);

  const handleLinkHover = () => {
    setHovered(true);
  };

  const handleLinkLeave = () => {
    setHovered(false);
  };

  const TestLink = React.forwardRef(({ to, children, onClick }, ref) => (
    <Link className={navbarCSS.link} to={to} onClick={onClick} ref={ref}>
      {children}
    </Link>
  ));

  return (
    <div className={navbarCSS.container}>
      <h1 className={navbarCSS.title}>ZARA VAN KRIEKINGEN</h1>
      <ul className={navbarCSS.ul}>
        <li className={navbarCSS.link}>
          <div className={navbarCSS.iconContainer}>
            <img className={navbarCSS.icon} src={hovered ? flowerRed : flower} alt="Flower icon" />
          </div>
        </li>
        <li id="flowerContainer" className={navbarCSS.li}>
          <Link className={navbarCSS.link} to="/projects" onClick={() => onLinkClick()} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>
            WORK
          </Link>
        </li>
        <li>
          <Link className={navbarCSS.link} to="/about" onClick={() => onLinkClick()}>
            ABOUT
          </Link>
        </li>
        {/* <li>
        <TestLink to="/test" onClick={() => onLinkClick()} ref={matterContainerRef}>
          Test voor luukje
        </TestLink>
      </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
