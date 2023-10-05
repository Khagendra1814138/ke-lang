import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

//Images Imports

export const Footer = () => {

  return (
    <div className="footer">
        <Link to="/" className="homeLogoFooter"></Link>

        <div className="quickLinks">
            <div>
                <Link className="footerPageLinks" to="/">Home</Link>
                <Link className="footerPageLinks" to="/ChyabrungSteps">Chyabrung Steps</Link>
                <Link className="footerPageLinks" to="/HowItsPlayed">Chaybrung Played</Link>
            </div>

            <div>
                <Link className="footerPageLinks" to="/Instruments">Other Instruments</Link>
                <Link className="footerPageLinks" to="/HowItsMade">How its Made</Link>
                <Link className="footerPageLinks" to="/Dresses">Dress Worn</Link>
            </div>

            <div>
                <Link className="footerPageLinks" to="/WhenPerformed">When its Performed</Link>
                <Link className="footerPageLinks" to="/WhyImportant">Why its Important</Link>
            </div>
        </div>
    </div>
  );
}
