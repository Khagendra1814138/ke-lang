import React, {useRef} from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

import { Menu } from 'react-feather';
import { X } from 'react-feather';

import { NavigationLinksArray } from "./navigationArray";
import SilamSakma from "../../Images/silamSakma/silamSakma1.png";

function NavigationBar() {
    const navResponsiveRef = useRef(); 
    const showNavbar = () => {
        navResponsiveRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className="NavagationBar">
            <Link to="/" className="homeLogo"></Link>
            
            <nav ref={navResponsiveRef}>
                {NavigationLinksArray.map((item) => (
                    <Link onClick={showNavbar}className="links" to={item.link}> {item.title} </Link>
                ))}
                <button className="nav-btn nav-close-btn" onClick={showNavbar}><X size="30"/></button>
                <Link to="/" className="homeLogoResponsive" style={{backgroundImage: `url(${SilamSakma})`}}></Link>
            </nav>

            <button className="nav-btn" onClick={showNavbar}><Menu size="30"/></button>
        </div>
    );
};

export default NavigationBar;
