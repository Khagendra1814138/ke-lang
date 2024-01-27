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
                <Link className="footerPageLinks" to="/AboutPage">About Ke</Link>
                <Link className="footerPageLinks" to="/Steps">Chaybrung Steps</Link>
            </div>

            <div>
                <Link className="footerPageLinks" to="/Instruments">Other Instruments</Link>
                <Link className="footerPageLinks" to="/Beats">Ke Beats</Link>
                <Link className="footerPageLinks" to="/Clothes">Dresses & Accessories</Link>
            </div>

            <div>
                <Link className="footerPageLinks" to="/HowItsMade">Ke Construction</Link>
                <Link className="footerPageLinks" to="/WhenPerformed">When its Performed</Link>
                <Link className="footerPageLinks" to="/WhyImportant">Kelang Myth</Link>
                <Link className="footerPageLinks" to="/WhyImportant">Silam Sakma</Link>
            </div>
        </div>

        <div className="quickLinks">
            Copyright © 2023 Designed and made by Khagendra Limbu
        </div>
    </div>
  );
}
