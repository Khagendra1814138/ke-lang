import React from "react";

import "./WhenPerformed.css";
import YoutubeEmbed from "../../Components/YoutubeEmbed/YoutubeEmbed";
//Images Imports
import newHim from "../../Images/whenPerformed/newHim.jpg";
import himPillar from "../../Images/whenPerformed/himPillar.jpg";
import chautara from "../../Images/whenPerformed/chautara.jpg";
import chautara3 from "../../Images/whenPerformed/chautara3.JPG";
import bar from "../../Images/whenPerformed/bar.jpg";
import peepal from "../../Images/whenPerformed/peepal.jpg";
import mekhim1 from "../../Images/whenPerformed/mekhim1.jpg";
import mekhim2 from "../../Images/whenPerformed/mekhim2.png";
import lamdhan1 from "../../Images/whenPerformed/lamdhan1.png";
import lamdhan2 from "../../Images/whenPerformed/lamdhan2.jpg";
import chasokTangnam1 from "../../Images/whenPerformed/chasokTangnam1.jpg";
import chasokTangnam2 from "../../Images/whenPerformed/chasokTangnam2.jpg";
import sisekpaTangnam1 from "../../Images/whenPerformed/sisekpaTangnam1.jpg";
import sisekpaTangnam2 from "../../Images/whenPerformed/sisekpaTangnam2.jpg";
import balihangTangnam1 from "../../Images/whenPerformed/balihangTangnam1.jpg";
import balihangTangnam2 from "../../Images/whenPerformed/balihangTangnam2.jpg";
import eventOpening from "../../Images/whenPerformed/eventOpening.jpg";
import gathering from "../../Images/whenPerformed/gathering.jpg";

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

                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="curvedImageTL" style={{backgroundImage: `url(${mekhim1})`}}></image>
                        </div>

                        <div className="headingWrapper">
                            <h2>MEKHIM <br></br> (MARRIGE)</h2>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="curvedImageTR" style={{backgroundImage: `url(${mekhim2})`}}></image>
                        </div>

                        <div className="informationWrapper">
                            <p>
                                During the Mekhim, the kelang is performed inside the groom house in front of the bride, groom, elders and around the house main pillar. The dancers blesses the bride and groom for successful, healthy and prosperous life by using hand gestures. Normally, there are only two expert/lead male dancer performing this ceremonial dance.                            
                            </p>
                        </div>
                    </div>
                </div>

                <line className="darkRed"></line>
                
                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="curvedImageBL" style={{backgroundImage: `url(${lamdhan1})`}}></image>
                        </div>
                        
                        <div className="headingWrapper">
                            <h2>LAMDHAN <br></br> (RECEPTION)</h2>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="curvedImageBR" style={{backgroundImage: `url(${lamdhan2})`}}></image>
                        </div>

                        <div className="informationWrapper">
                            <p>
                                During the Lamdhan (reception party), the dancers escorts the groom to the bride house. On the bride house, they dance for a while and escorts the bride back to the groom house. During the wedding party, the kelang is performed all day and anyone can join the dance. At the end of the wedding, all the dancers blesses the bride and groom before farewell, where, the bride and groom have to join the dance. Finally, blessing are given to the bride and groom using hand gestures and physical objects like flowers from the chayabrung and “achita” (rice) wrapped in a dhaka shawl.                             
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            <div className="sectionVideoWrapper">
                <div className="videoCircleWrapper">
                    <div className="videoCircleTop darkRedRoundedColor"></div>
                </div>
                    <div className="videoFrame lightRedVideoFrame">
                        <div className="videoInformation">
                            <h2 className="">MEKHIM KELANG VIDEO</h2>
                            <line className="darkRed"></line>
                            <p>
                                This video showing how the Kelang is performed during the Mekhim (marrige). Two male dancers perform the basic steps and blesses the bride and the groom using hand gestures.
                            </p>
                        </div>
                        <div className="video">
                            <YoutubeEmbed embedId="0v3MYmwP1Y8"/>
                        </div>
                    </div>
                <div className="videoCircleWrapper">
                    <div className="videoCircleBottom darkRedRoundedColor"></div>
                </div>
            </div>




            <section className="sectionTangnamWrapper lightRed">
                <h1>LIMBU <span>TANGNAM</span> (FESTIVALS)</h1>

                <div className="informationWrapper">
                    <h3>
                        Chyabrung dance is one of the primary entertainment activity of the Limbu Community. So during important tangnams (Festivals) it is performed for fun and enjoyment between young and old people. The three main important festivals are Chasok tangnam, Sisekpta tangnam and Balihang tangnam.                    
                    </h3>
                </div>

                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="curvedImageBLTR" style={{backgroundImage: `url(${chasokTangnam1})`}}></image>
                        </div>

                        <div className="imageFrame darkRed">
                            <image className="curvedImageTLBR" style={{backgroundImage: `url(${chasokTangnam2})`}}></image>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="headingWrapper">
                            <h2><span>CHASOK</span><br></br>TANGNAM</h2>
                        </div>

                        <div className="informationWrapper">
                            <p>
                                Traditionally, Chasok Tangnam festival is celebrated at home with the first foods like rice and crops harvest being offered to Yuma Sammang (Limbu Ancestor Goddess) and other deities. Limbus worships and thanks the Ancestor Goddess Yuma, God Theba, and other deities for a successful harvest of the year and  for giving the knowledge of agriculture and harvest. 
                                <br></br>
                                <br></br>
                                Recently, Limbus started to celebrate this festival in a social group and kelang is performed as entertainment activity and the dancers blesses the community to stay strong and united.                        
                            </p>
                        </div>
                    </div>
                </div>
                
                <line className="darkRed"></line>

                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="headingWrapper">
                            <h2><span>SISEKPA</span><br></br>TANGNAM</h2>
                        </div>

                        <div className="informationWrapper">
                            <p>
                                Sisekpa Tangnam is another important festival of the Limbus. It is celebrated to mark the end of drought, famine, hardship and misery and declare the beginning of prosperity and good luck. It is believe that the Yuma Sammang visits every house and blessing them with abundant growth of foods and bless humanity with prosperity and good fortune, preventing them from hunger, sufferings and famine.
                                <br></br>
                                <br></br>
                                Nowadays, this festival is celebrated in a social group and during this festival, kelang competition are also held where different kelang team show their steps and win prizes.                      
                            </p>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="curvedImageBLTR" style={{backgroundImage: `url(${sisekpaTangnam1})`}}></image>
                        </div>

                        <div className="imageFrame darkRed">
                            <image className="curvedImageTLBR" style={{backgroundImage: `url(${sisekpaTangnam2})`}}></image>
                        </div>
                    </div>
                </div>

                <line className="darkRed"></line>

                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="curvedImageBLTR" style={{backgroundImage: `url(${balihangTangnam1})`}}></image>
                        </div>

                        <div className="imageFrame darkRed">
                            <image className="curvedImageTLBR" style={{backgroundImage: `url(${balihangTangnam2})`}}></image>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="headingWrapper">
                            <h2><span>BALIHANG</span><br></br>TANGNAM</h2>
                        </div>

                        <div className="informationWrapper">
                            <p>
                                Balihang Tangnam is the Deosi Bhaili festival, which falls on the eve of Tihar. It is celebrated to commemorate greate king Balihang ancient past. In short, during night a demon came to take his soul, but the people lit their house with candles and prayed for the moon to set early (Laringek) and sun to rise early (Namlingek). The demon mistaken the night for day and did not take the king soul.
                                <br></br>
                                <br></br>
                                During this festival, dancers goes from house to house, singing Laringek-Namlingek, performing the kelang and blessing the house owners with good fortune and prosperity. In return, the house owners awards the dancers with gifts like money, drinks and foods.                   
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            <div className="sectionVideoWrapper">
                <div className="videoCircleWrapper">
                    <div className="videoCircleTop darkRedRoundedColor"></div>
                </div>
                    <div className="videoFrame lightRedVideoFrame">
                        <div className="videoInformation">
                            <h2 className="">TIHAR KELANG VIDEO</h2>
                            <line className="darkRed"></line>
                            <p>
                                The video showing how the Kelang is performed during Limbu/Nepali festival called Tihar or Balihang Tangnam.
                                The dancers performs the kelang, sings and blesses the families of the houses. The steps are from Taplejung (Phakumba) region.                         
                            </p>
                        </div>
                        <div className="video">
                            <YoutubeEmbed embedId="C7YaKi_oNPQ"/>
                        </div>
                    </div>
                <div className="videoCircleWrapper">
                    <div className="videoCircleBottom darkRedRoundedColor"></div>
                </div>
            </div>




            <section className="sectionOtherOccasionWrapper lightRed">
                <h1>OTHER <span>EVENTS</span> AND <span>OCCASIONS</span></h1>

                <div className="informationWrapper">
                    <h3>
                        Other then important Limbus festivals and construction or buying of a house, the kelang is performed in many occasions and events related to Limbu. For example, nowadays, kelang is performed during an event opening ceremony, gathering, parties and more..                    
                    </h3>
                </div>

                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkRed">
                            <image className="curvedImageTL" style={{backgroundImage: `url(${eventOpening})`}}></image>
                        </div>
                        
                        <div className="informationWrapper">
                            <p>
                                Kelang is gaining its popularity everywhere, and It is performed during almost every, Limbu events, gathering and parties. For example, during Limbus clans gathering, where all the clan people meet together or during any celebration parties like Dashin, kelang is performed and everyone young and old dances together to enjoy such occasion. Furthermore, during any event kelang is performed during an opening ceremony and to bless the event.                                             
                            </p>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="headingWrapper">
                            <h2><span>PARTY</span> ,<span> GATHERING</span> AND <span>EVENTS</span></h2>
                        </div>

                        <div className="imageFrame darkRed">
                            <image className="curvedImageBR" style={{backgroundImage: `url(${gathering})`}}></image>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}