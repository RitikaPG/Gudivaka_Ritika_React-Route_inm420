import React from 'react';
import {  NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar= () =>{
  return (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/projects">Projects</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
  </ul>
  );
}
export default Navbar;
