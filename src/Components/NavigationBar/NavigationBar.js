import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

import { NavigationLinksArray } from "./navigationArray";
import SilamSakma from "../../Images/silamsakmaLogo.png";

function NavigationBar() {
   return (
        <div className="NavagationBar">
            <logo className="homeLogo" style={{backgroundImage: `url(${SilamSakma})`}}></logo>
            <ul className="linksList">
                {NavigationLinksArray.map((item) => (
                    <Link className="links" to={item.link}> {item.title} </Link>
                ))}
            </ul>
        </div>
    );
};

export default NavigationBar;
