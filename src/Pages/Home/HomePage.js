import React from "react";

import "../../Styles/HomePage.css"

import ParallaxMouse from "../Paralax/ParallaxMouse";

//Images Imports


export const HomePage = () => {
    return (
        <div className="homePage">
            
            <ParallaxMouse/>


            <section>
                
            </section>
        
            <sectioncurvedtop className="curvedTop"></sectioncurvedtop>

            <section>
                <image>Image</image>
                <p>Paragapah</p>
            </section>

            <sectioncurvedbottom className="curvedBottom"></sectioncurvedbottom>

            <section>
                <div>
                    <image>Image</image>
                    <p>Paragapah</p>
                </div>
            </section>
            
            <section className="section2">
                <div className="imageFrame">
                    <image>Image</image>
                </div>
                <p>Paragapah</p>
            </section>

            <section className="section2">
                <div className="imageFrameOval">
                    <image>Image</image>
                </div>
                <p>Paragapah</p>
            </section>
            
        </div>
    );
};