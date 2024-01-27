import React from "react";

import "./dressGallery.css";

import col1a from "../../Images/clothing/boysClothes/first1.jpg";
import col1b from "../../Images/clothing/boysClothes/first2.jpg";
import col1c from "../../Images/clothing/boysClothes/first3.jpg";
import col2a from "../../Images/clothing/boysClothes/middle1.jpg";
import col2b from "../../Images/clothing/boysClothes/middle2.jpg";
import col2c from "../../Images/clothing/boysClothes/middle3.jpg";
import col3a from "../../Images/clothing/boysClothes/last1.jpeg";
import col3b from "../../Images/clothing/boysClothes/last2.jpg";
import col3c from "../../Images/clothing/boysClothes/last3.jpg";


import Gcol1a from "../../Images/clothing/girlsClothes/col1a.jpg";
import Gcol1b from "../../Images/clothing/girlsClothes/col1b.jpg";
import Gcol1c from "../../Images/clothing/girlsClothes/col1c.jpg";
import Gcol2a from "../../Images/clothing/girlsClothes/col2a.jpg";
import Gcol2b from "../../Images/clothing/girlsClothes/col2b.jpg";
import Gcol2c from "../../Images/clothing/girlsClothes/col2c.jpg";
import Gcol3a from "../../Images/clothing/girlsClothes/col3a.jpg";
import Gcol3b from "../../Images/clothing/girlsClothes/col3b.jpg";
import Gcol3c from "../../Images/clothing/girlsClothes/col3c.jpg";

export const BoysClothingGallary = () => {
    return (
        <div className="dressGallaryFrame brownRoundColor">
            <div className="dressGallaryColumn">
                <image className="animationFade" style={{backgroundImage: `url(${col1a})`}}></image>
                <image className="mediumImage animationFade" style={{backgroundImage: `url(${col1b})`}}></image>
                <image className="animationFade" style={{backgroundImage: `url(${col1c})`}}></image>
            </div>
    

            <div className="dressGallaryColumn">
                <image className="middleMediumImage animationFade" style={{backgroundImage: `url(${col2a})`}}></image>
                <image className="middleLargeImage animationFade" style={{backgroundImage: `url(${col2b})`}}></image>
                <image className="middleMediumImage animationFade" style={{backgroundImage: `url(${col2c})`}}></image>
            </div>


            <div className="dressGallaryColumn">
                <image className="animationFade" style={{backgroundImage: `url(${col3a})`}}></image>
                <image className="mediumImage animationFade" style={{backgroundImage: `url(${col3b})`}}></image>
                <image className="animationFade" style={{backgroundImage: `url(${col3c})`}}></image>
            </div>
        </div>
    );  
}


export const GirlsClothingGallary = () => {
    return (
        <div className="dressGallaryFrame brownRoundColor">
            <div className="dressGallaryColumn">
                <image className="animationFade" style={{backgroundImage: `url(${Gcol1a})`}}></image>
                <image className="mediumImage animationFade" style={{backgroundImage: `url(${Gcol1b})`}}></image>
                <image className="animationFade" style={{backgroundImage: `url(${Gcol1c})`}}></image>
            </div>
    

            <div className="dressGallaryColumn">
                <image className="middleMediumImage animationFade" style={{backgroundImage: `url(${Gcol2a})`}}></image>
                <image className="middleLargeImage animationFade" style={{backgroundImage: `url(${Gcol2b})`}}></image>
                <image className="middleMediumImage animationFade" style={{backgroundImage: `url(${Gcol2c})`}}></image>
            </div>


            <div className="dressGallaryColumn">
                <image className="animationFade" style={{backgroundImage: `url(${Gcol3a})`}}></image>
                <image className="mediumImage animationFade" style={{backgroundImage: `url(${Gcol3b})`}}></image>
                <image className="animationFade" style={{backgroundImage: `url(${Gcol3c})`}}></image>
            </div>
        </div>
    );  
}