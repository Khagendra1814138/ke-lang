import React from "react";

import "./WhenPerformed.css";

//Images Imports
import newHim from "../../Images/whenPerformed/newHim.jpg";
import himPillar from "../../Images/whenPerformed/himPillar.jpg";
import chautara from "../../Images/whenPerformed/chautara.jpg";
import chautara3 from "../../Images/whenPerformed/chautara3.JPG";
import bar from "../../Images/whenPerformed/bar.jpg";
import peepal from "../../Images/whenPerformed/peepal.jpg";

export const WhenPerformedPage = () => {

    return (
        <div className="whenPerformedPage">
            <hero className="heroWrapper">
                <div className="heroInformationFrame">
                    <h1>WHEN IS IT PERFORMED</h1>
                </div>

                <div className="heroeCurvedWrapper">
                    <div className="heroeCurvedBottom"></div>
                </div>
            </hero>

            <section className="sectionHouseTreeChautaraWrapper lightRed">
                <h1>PERFORMED IN MANY <span>OCCASIONS</span></h1>
                <div className="informationWrapper">
                    <h3>
                        Originally, the kelang was only performed during a constriction of a new house, specially during the constriction of the main house pillar. However, as the time progressed, so did the Limbu society and   the kelang. Nowadays, kelang is performed during Limbu marrige, Limbu festivals and other occasions and events like open ceremony.                    
                    </h3>
                </div>

                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="leafRIGHT" style={{backgroundImage: `url(${newHim})`}}></image>
                        </div>
                        <div className="informationWrapper">
                            <p>
                                At the beginning, the kelang was only performed during the construction of a new “Himlingama” (house) and before occupying it. The dance is performed around the “Hangsitlang”, which is the main pillar of the house to invoke “Akwanama”, the house protecting deity and spirits to drive away evil spirit and avoid accidents and ill-luck. Nowadays, it is also performed, when buying a house before occupation.                            
                            </p>
                         </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="headingWrapper">
                            <h2>CONSTRUCTION OF A NEW <span>HOUSE</span></h2>
                        </div>

                         <div className="imageFrame darkRed">
                            <image className="leafRIGHT" style={{backgroundImage: `url(${himPillar})`}}></image>
                        </div>
                    </div>
                </div>


                <line className="darkRed"></line>


                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="leafLEFT" style={{backgroundImage: `url(${chautara3})`}}></image>
                        </div>
                        <div className="informationWrapper">
                            <p>
                                Chautara is a traditional resting place for merchants, travelers and trekkers in Nepal. It is built with stones under a big tree like bar or peepal on a long trail/path side. In the Limbu regions, chautara are built on the name and honor of a deceased loved ones like father, mother, grandfather, grandmother etc. Sadly, this tradition is slowly disappearing due to road development as fewer people uses trail/path to travel by foots.                            
                            </p>
                         </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="headingWrapper">
                            <h2>CONSTRUCTION OF A <span>CHAUTARA</span></h2>
                        </div>

                         <div className="imageFrame darkRed">
                            <image className="leafLEFT" style={{backgroundImage: `url(${chautara})`}}></image>
                        </div>
                    </div>
                </div>


                <line className="darkRed"></line>


                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="leafRIGHT" style={{backgroundImage: `url(${peepal})`}}></image>
                        </div>
                        <div className="informationWrapper">
                            <p>
                                Bar(Banyan) and Peepal(Sacred Fig) are a type of large trees which are believed to be sacred. Chautara (resting place) are either built under a bar tree or peepal tree. Both bar and peepal tree must be planted together or close to each other as they are believed to be partners like husband and wife. Therefore, when two of these trees are planted together, kelang is performed to celebrate their marriage. This event is very rare and is slowly disappearing.                            
                            </p>
                         </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="headingWrapper">
                            <h2>PLANTING <span>BAR</span> OR <span>PEEPAL</span> TREE</h2>
                        </div>

                         <div className="imageFrame darkRed">
                            <image className="leafRIGHT" style={{backgroundImage: `url(${bar})`}}></image>
                        </div>
                    </div>
                </div>
            </section>



            <section className="sectionMarrigeWrapper lightRed">
                <h1>PERFORMED DURING LIMBU <span>MARRIGE</span></h1>
                <div className="informationWrapper">
                    <h3>
                        Second most important occasion when the kelang is performed, it’s during a Limbu Marrige. In a Limbu marriage, the kelang has two parts. Mekhim, which is when the bride and groom gets engaged and Lamdhan, which is the reception party.                    
                    </h3>
                </div>
            </section>
        </div>
    );
}