import React from "react";

import "../../Styles/HomePage.css"

export const HomePage =() => {
    return (
        <div className="homePage">
            <header className="headerFrame">
                <h1>Ke Lang</h1>
            </header>

            <section>
                <image>Image</image>
                <p>Paragapah</p>
            </section>

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