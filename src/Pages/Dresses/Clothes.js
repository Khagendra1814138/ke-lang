import React from "react";

import "./Clothes.css";
import YoutubeEmbed from "../../Components/YoutubeEmbed/YoutubeEmbed";

import { BoysClothes } from "./boysClothes";
import { BoysClothingGallary } from "./dressGallery";
import { GirlsClothes } from "./girlsClothes";
import { GirlsClothingGallary } from "./dressGallery";
import { Jeweleries } from "./jewelries";
import { JeweleriesGallery } from "./jewelries";
import { Accessories } from "./accessories";
import { AccessoriesGallery } from "./accessories";
//Images Imports
import DkahaMade from "../../Images/clothing/dkahaMade.png";
import dhaka1 from "../../Images/clothing/dhaka/dhaka1.jpg";
import dhaka2 from "../../Images/clothing/dhaka/dhaka2.jpg";
import dhaka3 from "../../Images/clothing/dhaka/dhaka3.jpg";
import dhaka4 from "../../Images/clothing/dhaka/dhaka4.jpg";
import dhaka5 from "../../Images/clothing/dhaka/dhaka5.jpg";
import dhaka6 from "../../Images/clothing/dhaka/dhaka6.jpg";
import dhaka7 from "../../Images/clothing/dhaka/dhaka7.jpg";
import dhaka8 from "../../Images/clothing/dhaka/dhaka8.jpg";
import dhaka9 from "../../Images/clothing/dhaka/dhaka9.jpg";

export const ClothesAndAccessoriesPage = () => {
    return (
        <div className="clothesAndAccessoriesPage">
            <hero className="heroWrapper">
                <div className="heroInformationFrame">
                    <h1>CLOTHES AND ACCESSORIES</h1>
                </div>

                <div className="heroeCurvedWrapper">
                    <div className="heroeCurvedBottom"></div>
                </div>
            </hero>


            <section className="sectionDhakaWrapper lightBrown">
                <h1>LIMBU <span>DKAHA</span> FABRIC</h1>
                <div className="informationWrapper">
                    <h3>
                        The Dhaka (originally called Thaka) is a traditional hand woven fabric of the Limbu people. The fabric is made of cotton with numerous colors and infinite amount of patterns featuring geometric shapes. Loom made of bamboo and wood is used to make the fabric. The art of weaving dhaka is usually taught and passed to female descendents by one generation to another.                    
                    </h3>
                </div>

                <div className="flexRowWrapper">
                    <div className="dhakaMadeImage darkBrown">
                        <image style={{backgroundImage: `url(${DkahaMade})`}}></image>
                    </div>
                 
                    <div className="informationWrapper">
                        <h2><span>HOW</span> ITS MADE</h2>
                        <line className="darkBrown"></line>
                        <p>
                            The designs are all very different and the weaver usually does it by eye, creating the patterns from small bobbins of yarn pulled through the loom warp, using many different colours, which is very labour intensive. The handwoven patterns all have an individual touch, reflecting the creativity and skill of the weaver.                        
                        </p>
                    </div>
                </div>

                <h1>TYPICAL LIMBU DHAKA <span>PATTERNS</span></h1>
                <div className="flexRowWrapperCenter">
                    <image className="longerImage" style={{backgroundImage: `url(${dhaka1})`}}></image>
                    <image style={{backgroundImage: `url(${dhaka2})`}}></image>
                    <image style={{backgroundImage: `url(${dhaka3})`}}></image>

                    <image style={{backgroundImage: `url(${dhaka4})`}}></image>
                    <image className="longerImage" style={{backgroundImage: `url(${dhaka5})`}}></image>
                    <image style={{backgroundImage: `url(${dhaka6})`}}></image>

                    <image style={{backgroundImage: `url(${dhaka7})`}}></image>
                    <image style={{backgroundImage: `url(${dhaka8})`}}></image>
                    <image className="longerImage" style={{backgroundImage: `url(${dhaka9})`}}></image>
                </div>
            </section>



            <div className="sectionVideoWrapper">
                <div className="videoCircleWrapper">
                    <div className="videoCircleTop brownRoundColor"></div>
                </div>
                    <div className="videoFrame lightBrownVideoFrame">
                        <div className="videoInformation">
                            <h2 className="">DHAKA WEAVING VIDEO</h2>
                            <line className="darkBrown"></line>
                            <p>
                                The video shows how a typical Limbu Dhaka farbic are woven by skilled weaver.
                            </p>
                        </div>
                        <div className="video">
                            <YoutubeEmbed embedId="PDGA1KuOwos"/>
                        </div>
                    </div>
                <div className="videoCircleWrapper">
                    <div className="videoCircleBottom brownRoundColor"></div>
                </div>
            </div>



            <section className="sectionBoysClothingWrapper lightBrown">
                <h1>BOYS <span>DRESS</span></h1>
                <div className="informationWrapper">
                    <h3>
                        The boys are dressed in a colorful Dhaka pattern or plain clothes. The main clothes usually worn by the boys are dhaka topi (hat), daura (upper garment), surual (trouser), and a waistcoat with blazer coat.                    
                    </h3>
                </div>
                <BoysClothes/>
            </section>

            
            <div className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop brownRoundColor"></div>
                </div>  
                <BoysClothingGallary/>
                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom brownRoundColor"></div>
                </div>
            </div>

            <section className="sectionBoysClothingWrapper lightBrown">
                <h1>GIRLS <span>DRESS</span></h1>
                <div className="informationWrapper">
                    <h3>
                        Typically, most of the kelang teams wears gunyo, chaubandi cholo with patuka made of dhaka patterns.The girls also wear Mekli, which is a limbu traditional dress. Sometimes, sarees with blous or cholo with dhaka touch is also word although this is not a traditional Limbu dress.                     
                    </h3>
                </div>
                <GirlsClothes/>
            </section>

            <div className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop brownRoundColor"></div>
                </div>  
                <GirlsClothingGallary/>
                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom brownRoundColor"></div>
                </div>
            </div>

            
            <section className="sectionJewelriesWrapper lightBrown">
                <h1>GIRLS <span>JEWELRIES</span></h1>
                <div className="informationWrapper">
                    <h3>
                        Typically, most of the kelang teams wears gunyo, chaubandi cholo with patuka made of dhaka patterns.The girls also wear Mekli, which is a limbu traditional dress. Sometimes, sarees with blous or cholo with dhaka touch is also word although this is not a traditional Limbu dress.                     
                    </h3>
                </div>
                <Jeweleries/>
            </section>


            <div className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop brownRoundColor"></div>
                </div>  
                <JeweleriesGallery/>
                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom brownRoundColor"></div>
                </div>
            </div>


            <section className="sectionAccessoriesWrapper lightBrown">
                <h1>BOYS & GIRLS <span>ACCESSORIES</span></h1>
                <div className="informationWrapper">
                    <h3>
                        Other than the beautiful and colorful dresses, the boys and girls also wears accessories such as scarf,  shawl, woven bag designed with dhaka patterns. Tartan designed accessories and clothes like scarf and shawl are also worn. Most importantly, Silam Sakma (Limbu symbol) is worn around chest area.                    
                    </h3>
                </div>
                <Accessories/>
            </section>


            <div className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop brownRoundColor"></div>
                </div>  
                <AccessoriesGallery/>
                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom brownRoundColor"></div>
                </div>
            </div>
        </div>
    );
}