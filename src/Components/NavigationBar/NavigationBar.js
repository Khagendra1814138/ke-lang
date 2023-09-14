import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

import { NavigationLinksArray } from "./navigationArray";

function NavigationBar() {
   return (
        <div className="NavagationBar">
            {NavigationLinksArray.map((item) => (
                <Link className="links" to={item.link}> {item.title} </Link>
            ))}
        </div>
    );
};

export default NavigationBar;
