import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

//Images Imports

export const Footer = () => {

  return (
    <div className="footer">
        <Link to="/" className="homeLogoFooter"></Link>

        <div className="quickLinks">
            <ul>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>

            <ul>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>

            <ul>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>
        </div>
    </div>
  );
}
