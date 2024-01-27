import React from "react";

import "./HowItsMade.css";
import { Materials } from "./materials";
import { Parts } from "./parts";
import { MakingKeGallery } from "./makingKeGallery";
//Images Imports

import decorating from "../../Images/construction/assemble/decorating.jpg";
import insertingChabi from "../../Images/construction/assemble/insertingChabi.jpg";
import wettingLeather from "../../Images/construction/assemble/wettingLeather.jpeg";
import tightningSkin from "../../Images/construction/assemble/tightningSkin.jpg";
import tuningHuksagay from "../../Images/construction/assemble/tuningHuksagay.png";
import coloringHuksagey from "../../Images/construction/assemble/coloringHuksagey.jpg";
import performingRitual from "../../Images/construction/assemble/performingRitual.png";



export const HowItsMadePage = () => {

    return (
        <div className="howItsMadePage">
            <hero className="heroWrapper">
                <div className="heroInformationFrame">
                    <h1>HOW KE/CHYABRUNG IS MADE</h1>
                </div>

                <div className="heroeCurvedWrapper">
                    <div className="heroeCurvedBottom"></div>
                </div>
            </hero>


            <section className="sectionMaterialWrapper lightPurple">
                <h1><span>MATERIALS</span> USED TO <span>MAKE</span> CHYABRUNG</h1>
                <div className="informationWrapper">
                    <h3>
                        The chyabrung is made of mainly woods and leathers. The chyabrung main frame is made from a special wood called “khamari” and the leathers used for chyabrung are cow/ox, goat and deer leather. Pangra beans (Entada phaseoloides) and bamboo is used to make the key of the chyabrung.                    
                    </h3>
                </div>
                <Materials/>
            </section>


            <section className="sectionPartsWrapper lightPurple">
                <h1><span>MATERIALS</span> USED TO <span>MAKE</span> CHYABRUNG</h1>
                <div className="informationWrapper">
                    <h3>
                        From the materials, the parts required to assemble a chyabrung are created. The main parts that is required to make a chyabrung are the main hollow frame, huksagey skin, singsagay skin, chabi/key and leather/nylon rope.                 
                    </h3>
                </div>
                <Parts/>
            </section>


            <div className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop purpleRoundedColor2"></div>
                </div>  
                <MakingKeGallery/>
                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom purpleRoundedColor2"></div>
                </div>
            </div>


            <section className="sectionKeAssembleWrapper lightPurple">
                <h1><span>HOW</span> CHYABUNG IS <span>ASSEMBLED</span></h1>
                <div className="informationWrapper">
                    <h3>
                        Once all the parts are made and ready, the chyabrung is assembled together. There is no specific order on how to assemble the chyabrung, the most important step is to make sure that the chabi/key is inserted inside the chyabrung frame before stretchering and the skins.                  
                    </h3>
                </div>

                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <h2><span>DECORATING</span> FRAME</h2>
                        <line className="darkPurple"></line>
                        <p>
                            At the start, the frame of the chyabrung is decorated by the maker of the chyabrung. During this process the chaybrung is painted with vibrant colors and is painted with different patterns and symbols of the limbu community.                        
                        </p>
                    </div>

                    <div className="assemblyImageFrame mediumPurple animationFloatRight">
                        <image className="roundedRImage" style={{backgroundImage: `url(${decorating})`}}></image>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="assemblyImageFrame mediumPurple animationFloatLeft">
                        <image className="roundedLImage" style={{backgroundImage: `url(${insertingChabi})`}}></image>
                    </div>

                    <div className="informationWrapper">
                        <h2>INSERTING <span>CHABI</span></h2>
                        <line className="darkPurple"></line>
                        <p>
                            The chabi/key of the chyabrung is inserted inside the frame of the chyabrung. Screws or nails are used to hold the chabi inside the frame. Then a strong string is used to tie the tip of the chabi. A small hole is drilled on the frame and the key sting is pulled out through the hole.                        
                        </p>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <h2><span>WETTING</span> LEATHER</h2>
                        <line className="darkPurple"></line>
                        <p>
                            Before putting the chyabrung leathers together, all the leathers parts are placed inside a bucked with water and left for around 1 hours. This will make the leather soft, easy to stretch and easy to work with. This is important for the huksahey and singsagay skins.                        
                        </p>
                    </div>

                    <div className="assemblyImageFrame mediumPurple animationFloatRight">
                        <image className="roundedRImage" style={{backgroundImage: `url(${wettingLeather})`}}></image>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="assemblyImageFrame mediumPurple animationFloatLeft">
                        <image className="roundedLImage" style={{backgroundImage: `url(${tightningSkin})`}}></image>
                    </div>

                    <div className="informationWrapper">
                        <h2><span>TIGHTNING</span> SKIN</h2>
                        <line className="darkPurple"></line>
                        <p>
                            The huksahey and singsagay is placed over the both ending of the chabrung frame like a lid. The huksagey is placed at the ending side of the key, where it can touch the pangra beans. Then leather or nylon rope is used to tight both skin in a zig zap pattern. 
                        </p>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <h2><span>TUNING</span> CHYABRUNG</h2>
                        <line className="darkPurple"></line>
                        <p>
                            The left hand or your weaker hand is normally used to hold the kesangla and hit the “singsagay” side of the chyabrung, which produces the “Dhung” sound.                        
                        </p>
                    </div>

                    <div className="assemblyImageFrame mediumPurple animationFloatRight">
                        <image className="normalImage" style={{backgroundImage: `url(${tuningHuksagay})`}}></image>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="assemblyImageFrame mediumPurple animationFloatLeft">
                        <image className="roundedLImage" style={{backgroundImage: `url(${coloringHuksagey})`}}></image>
                    </div>

                    <div className="informationWrapper">
                        <h2><span>COLORING</span> HUKSAGAY</h2>
                        <line className="darkPurple"></line>
                        <p>
                            Once the chyabrung skins are fully tightened and the chyabrung is propely tuned, the huksahey/chyang skin is colored using natural ingredients like beans and blablabla...                        
                        </p>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <h2><span>RITUAL</span> PUJA</h2>
                        <line className="darkPurple"></line>
                        <p>
                            The left hand or your weaker hand is normally used to hold the kesangla and hit the “singsagay” side of the chyabrung, which produces the “Dhung” sound.                        
                        </p>
                    </div>

                    <div className="assemblyImageFrame mediumPurple animationFloatRight">
                        <image className="roundedRImage" style={{backgroundImage: `url(${performingRitual})`}}></image>
                    </div>
                </div>
            </section>
            
        </div>
    );
}