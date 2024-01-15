import React from "react";

import "./keGallery.css";

import keCol1a from "../../Images/aboutChyabrung/keGallery/keCol1a.jpg";
import keCol1b from "../../Images/aboutChyabrung/keGallery/keCol1b.jpg";
import keCol1c from "../../Images/aboutChyabrung/keGallery/keCol1c.jpg";

import keCol2a from "../../Images/aboutChyabrung/keGallery/keCol2a.jpg";
import keCol2b from "../../Images/aboutChyabrung/keGallery/keCol2b.jpg";
import keCol2c from "../../Images/aboutChyabrung/keGallery/keCol2c.jpg";

import keCol3a from "../../Images/aboutChyabrung/keGallery/keCol3a.jpg";
import keCol3b from "../../Images/aboutChyabrung/keGallery/keCol3b.jpg";
import keCol3c from "../../Images/aboutChyabrung/keGallery/keCol3c.jpg";

export const KeGallery = () => {
    return (
        <div className="chyabrungGallaryFrame roundedSteelBlue">
            <div className="chyabrungGallaryColumn">
                <image style={{backgroundImage: `url(${keCol1a})`}}></image>
                <image style={{backgroundImage: `url(${keCol1b})`}}></image>
                <image className="mediumImage" style={{backgroundImage: `url(${keCol1c})`}}></image>
            </div>
        

            <div className="chyabrungGallaryColumn">
                <image style={{backgroundImage: `url(${keCol2a})`}}></image>
                <image className="bigImage" style={{backgroundImage: `url(${keCol2b})`}}></image>
                <image style={{backgroundImage: `url(${keCol2c})`}}></image>
            </div>


            <div className="chyabrungGallaryColumn">
                <image className="mediumImage" style={{backgroundImage: `url(${keCol3a})`}}></image>
                <image style={{backgroundImage: `url(${keCol3b})`}}></image>
                <image style={{backgroundImage: `url(${keCol3c})`}}></image>
            </div>
        </div>
    );
}