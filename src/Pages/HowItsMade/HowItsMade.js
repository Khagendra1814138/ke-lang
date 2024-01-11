import React from "react";

import "./HowItsMade.css";
import { Materials } from "./materials";
import { Parts } from "./parts";
import { MakingKeGallery } from "./makingKeGallery";
//Images Imports

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
            
            </section>
            
        </div>
    );
}