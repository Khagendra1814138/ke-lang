import React from "react";

import "./Beats.css";

import beatsImage from "../../Images/aboutChyabrung/beats.png";

export const BeatsPage = () => {
    return (
        <div className="beatsPage">
            <hero className="heroWrapper">
                <div className="heroInformationFrame">
                    <h1>CHYBRUNG BEATS</h1>
                </div>

                <div className="heroeCurvedWrapper">
                    <div className="heroeCurvedBottom"></div>
                </div>
            </hero>


            <section className="sectionBeatsWrapper lightSteelBlue">
                <h1>CHYABRUNG <span>BEAT’S</span></h1>
                <div className="informationWrapper">
                    <p>
                        Similar to the steps, there are countless varities of chyabrung beats, and they are different between region to region. Each regions have their own unique chyabrung beats that matches their typical steps. All the beats can categorized into 3 different sections and they are kassarokpa beats, turning beats and animals steps beats. However, there are many beats outside the category.                    
                    </p>
                </div>

                <div className="flexRowWrapper">
                    <image className="darkSteelBlue" style={{backgroundImage: `url(${beatsImage})`}}></image>

                    <div className="flexColumnWrapper">
                        <div className="informationWrapper">
                            <h2><span>KASSAROKPA</span> STEPS BEAT</h2>
                            <line className="mediumSteelBlue"></line>
                            <p>
                                This beat is the primary beat that is played during the chyabrung dance. Its used during most of the basic steps and is used as a beat reset or go back to beat. All regions have their own unique kassarokpa beat.                            
                            </p>
                        </div>
                        
                        <div className="informationWrapper">
                            <h2><span>TURNING</span> STEP BEAT</h2>
                            <line className="mediumSteelBlue"></line>
                            <p>
                                This beat is used when the dancer turns their body from facing inside to outside, outside to inside and from inside to right or from inside to left. This beat is similar throughout all the regions.                            
                            </p>
                        </div>

                        <div className="informationWrapper">
                            <h2><span>ANIMAL</span> STEPS BEAT</h2>
                            <line className="mediumSteelBlue"></line>
                            <p>
                                This beat is used when the dancers are performing the animal steps. These beats are unique and differs from animal to animal steps. However, some regions like Terthum and Taplejung uses the same beat for every animal steps.                            
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
       
    );
}