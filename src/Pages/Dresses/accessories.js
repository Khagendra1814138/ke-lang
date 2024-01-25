import React from "react";
import { useNavigate } from "react-router-dom";

import "./clothesAccessories.css";
import { ArrowRight } from 'react-feather';

import accessories from "../../Images/clothing/accessories.png";
import silamSakma from "../../Images/clothing/silamSakma.jpg";
import scarf from "../../Images/clothing/scarf.jpg";
import shawl from "../../Images/clothing/shawl.jpg";
import bag from "../../Images/clothing/bag.jpg";

import Acol1a from "../../Images/clothing/accessoriesGallery/Acol1a.jpg";
import Acol1b from "../../Images/clothing/accessoriesGallery/Acol1b.jpg";
import Acol1c from "../../Images/clothing/accessoriesGallery/Acol1c.jpg";

import Acol2a from "../../Images/clothing/accessoriesGallery/Acol2a.jpg";
import Acol2b from "../../Images/clothing/accessoriesGallery/Acol2b.jpg";
import Acol2c from "../../Images/clothing/accessoriesGallery/Acol2c.jpg";

import Acol3a from "../../Images/clothing/accessoriesGallery/Acol3a.jpg";
import Acol3b from "../../Images/clothing/accessoriesGallery/Acol3b.jpg";
import Acol3c from "../../Images/clothing/accessoriesGallery/Acol3c.jpg";



export const Accessories = () => {
    const navigate = useNavigate();

    return (
        <div className="clothingFrame">
            <div className="row1">
                <div className="imageFrame darkBrown">
                    <image className="roundTopImage" style={{backgroundImage: `url(${silamSakma})`}}></image>
                </div>
                <div className="informationWrapper">
                    <h2><span>Silam Sakma</span></h2>
                    <line className="darkBrown"></line>
                    <p>
                        Silam Sakma is a symbol that identifies Limbus. It is made of 9 lines of colors tied around a cross bamboo stick frame in a square diamond shape. Four yarn pom pom is tied on the end of the cross bamboo frame. It is worn by the Limbu community people on their left chest during an event.                    
                    </p>
                    <button onClick={() => navigate("/ChyabrungSteps")}>Learn More<ArrowRight size={40}/></button>
                </div>
            </div>

            <div className="row2">
                <div className="flexColumnWrapper">
                    <div className="informationWrapper">
                        <h2><span>Scarf</span></h2>
                        <line className="darkBrown"></line>
                        <p>
                            There are four different types of scarf worn by the Limbu people. Dhaka scarf, tartan scarf (red and black color), yarn knitted scarf and a white scarf. The scarf is worn around the neck and secured with a pin.                       
                        </p>
                    </div>
                    <div className="imageFrame darkBrown">
                        <image className="roundLeftImage" style={{backgroundImage: `url(${scarf})`}}></image>
                    </div>
                </div>

                <image className="longCenterImage darkBrown" style={{backgroundImage: `url(${accessories})`}}></image>

                <div className="flexColumnWrapper"> 
                    <div className="imageFrame darkBrown">
                        <image className="roundRightImage" style={{backgroundImage: `url(${shawl})`}}></image>
                    </div>
                    <div className="informationWrapper">
                        <h2><span>Shawl</span></h2>
                        <line className="darkBrown"></line>
                        <p>
                            Similar to the boys, the girls also wears Dkaha shawl, tartan shawl and white shawl. The shawl is typically draped around the left shoulder and secured with a pin during Kelang performance.                        
                        </p>
                    </div>
                </div>
            </div>

            <div className="row3accessories">
                <div className="informationWrapper">
                    <h2><span>Bag</span></h2>
                    <line className="darkBrown"></line>
                    <p>
                        Limbu people have their own unique side bag made of yarn woven into different geometrical patterns and shaped like the Dhaka. Triangle, diamond square and flowers are the common shapes and patterns found on the bag. The bag is also decorated with knitted flowers pom pom.                     
                    </p>
                </div>
                <div className="imageFrame darkBrown">
                    <image className="roundBottomImage" style={{backgroundImage: `url(${bag})`}}></image>
                </div>
            </div>
        </div>
    );
}

export const AccessoriesGallery = () => {
    return (
        <div className="jewelerieGallaryFrame brownRoundColor">
            <div className="jewelerieGallaryColumn3">
                <image className="longerImage" style={{backgroundImage: `url(${Acol1a})`}}></image>
                <image style={{backgroundImage: `url(${Acol1b})`}}></image>
                <image style={{backgroundImage: `url(${Acol1c})`}}></image>
            </div>


            <div className="jewelerieGallaryColumn2">
                <image style={{backgroundImage: `url(${Acol2a})`}}></image>
                <image className="longerImage" style={{backgroundImage: `url(${Acol2b})`}}></image>
                <image style={{backgroundImage: `url(${Acol2c})`}}></image>
            </div>


            <div className="jewelerieGallaryColumn">
                <image style={{backgroundImage: `url(${Acol3a})`}}></image>
                <image style={{backgroundImage: `url(${Acol3b})`}}></image>
                <image className="longerImage" style={{backgroundImage: `url(${Acol3c})`}}></image>
            </div>
        </div>
    );
}