import React from "react";

import "./HowItsMade.css";

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

            </section>


            <section className="sectionPartsWrapper lightPurple">
                <h1><span>MATERIALS</span> USED TO <span>MAKE</span> CHYABRUNG</h1>
            </section>


            <section className="sectionKeAssembleWrapper lightPurple">
            
            </section>
            
        </div>
    );
}