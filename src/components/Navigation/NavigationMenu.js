import React from "react";
import { NavLink } from "react-router-dom";

export function NavigationMenu(props) {
  return (
    <ul className="navbar-nav mr-auto w-100 justify-content-end">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link page-scroll">
          {" "}
          Home{" "}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" exact className="nav-link page-scroll">
          {" "}
          About{" "}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/news" exact className="nav-link page-scroll">
          {" "}
          News{" "}
        </NavLink>
      </li>

      {props.menuItems.map((val, i) => (
        <li className="nav-item" key={`k-${i}`}>
          <a className="nav-link page-scroll" href="#portfolios">
            {val.field_menu_label}
          </a>
        </li>
      ))}
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#pricing">
          Pricing
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#team">
          Team
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#subscribe">
          Subscribe
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#blog">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link page-scroll" href="#contact">
          Contact1
        </a>
      </li>
    </ul>
  );
}
