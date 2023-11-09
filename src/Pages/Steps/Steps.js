import React from "react";

import "./Steps.css";


//Images Imports


export const ChyabrungStepsPage = () => {

    return (
        <div className="chyabrungStepsPage">
            <header className="diagonalHeader">Chyabrung steps</header>

            <section></section>
            {/* https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/ */}
            <nav class="navbar">
            
                <div class="logo">LOGO</div>

      
                <ul class="nav-links">

           
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>

               
                <div class="menu">

                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>

                    <li class="services">
                    <a href="/">Services</a>

                 
                    <ul class="dropdown">
                        <li><a href="/">Dropdown 1 </a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 3</a></li>
                        <li><a href="/">Dropdown 4</a></li>
                    </ul>

                    </li>

                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact</a></li>
                </div>
                </ul>
            </nav>

        </div>
    );
};