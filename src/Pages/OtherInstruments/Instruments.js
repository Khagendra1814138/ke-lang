import React from "react";

import "./Instruments.css";

import YoutubeEmbed from "../../Components/YoutubeEmbed/YoutubeEmbed";
import { KesanglaGallery } from "./kesanglaGallery";

//Images Imports
import Tamborine from "../../Images/otherInstruments/tamborine.png";
import keSangla from "../../Images/otherInstruments/keSangla.png";
import Jhympta2 from "../../Images/otherInstruments/Jhympta2.png";

import createBeat from "../../Images/otherInstruments/keSangla/createBeat.jpg";
import tuneChyabrung from "../../Images/otherInstruments/keSangla/tuneChyabrung.jpg";
import kesanglaSize1 from "../../Images/otherInstruments/keSangla/kesanglaSize1.jpg";
import kesanglaSize2 from "../../Images/otherInstruments/keSangla/kesanglaSize2.jpg";
import birdKesangla2 from "../../Images/otherInstruments/keSangla/birdKesangla2.jpg";
import birdKesangla from "../../Images/otherInstruments/keSangla/birdKesangla.jpg";
import antler1 from "../../Images/otherInstruments/keSangla/antler1.jpg";
import antler2 from "../../Images/otherInstruments/keSangla/antler2.jpg";

export const OtherInstrumentsPage = () => {

    return (
        <div className="instrumentsPage">
            <hero className="heroWrapper">
                <div className="heroInformationFrame">
                    <h1>OTHER INSTRUMENTS PLAYED</h1>
                </div>

                <div className="heroeCurvedWrapper">
                    <div className="heroeCurvedBottom"></div>
                </div>
            </hero>


            <section className="sectionPercussionWrapper lightGreen">
                <h1><span>PERCUSSION</span> INSTRUMENTS</h1>
                <div className="informationWrapper">
                    <h3>
                        Since the beginning of chyabrung/kelang dance, the Ke/Chyabrung is the primary and only instruments played with the Kesangla or KeChari during chyabrung dance. As times have progressed, new percussion instruments were adapted for the female dancers. For example, instruments such as Jhyampta and Tambourine. However, not all regions plays these instruments.                  
                    </h3>
                </div>

                <div className="flexRowWrapper">
                    <image className="mediumGreen animationFloatUP" style={{backgroundImage: `url(${Jhympta2})`}}></image>
                    <div className="informationWrapper">
                        <h2><span>JHYMPTA</span></h2>
                        <line className="darkGreen"></line>
                        <p>
                            Jhympta also known as taal is a percussion instrument that looks similar to cymbal and is played alongside with the chyabrung. It is played together with the rhythm of the chyabrung beat. This instrument is mainly played in the Taplejung and Sankhuwasabha regions.                        
                        </p>
                    </div>
                </div>

                <line className="darkGreen"></line>

                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <h2><span>TAMORINE</span></h2>
                        <line className="darkGreen"></line>
                        <p>
                            Similar to the jhympta, the tambourine is another instruments that has been recently adapted by the female dancers. This instrument is played together with the jhayampta by following alongside the chyabrung rhythm/beat. This instrument is only played in the Taplejung and Sankhuwasabha regions.                     
                        </p>
                    </div>
                    <image className="mediumGreen animationFloatUP" style={{backgroundImage: `url(${Tamborine})`}}></image>
                </div>

                <div className="gallery3x3Grid">
                    <image></image>
                    <image></image>
                    <image></image>
                    <image></image>
                    <image></image>
                    <image></image>
                </div>
            </section>




            <div className="sectionVideoWrapper">
                <div className="videoCircleWrapper">
                    <div className="videoCircleTop greenRoundColor"></div>
                </div>
                    <div className="videoFrame lightGreenVideoFrame">
                        <div className="videoInformation">
                            <h2 className="">KELANG VIDEO</h2>
                            <line className="darkGreen"></line>
                            <p>
                                The video showing how the Jhyampta is played together with the Tambourine as a percussion instruments alongside the chyabrung beat. This is a Taplejung region kelang.                            
                            </p>
                        </div>
                        <div className="video">
                            <YoutubeEmbed embedId="chmUPIxB4T8"/>
                        </div>
                    </div>
                <div className="videoCircleWrapper">
                    <div className="videoCircleBottom greenRoundColor"></div>
                </div>
            </div>



            <section className="sectionKesanglaWrapper lightGreen">
                <h1><span>KESANGLA</span> OR <span>KECHARI</span> STICK</h1>
                <div className="flexRowWrapper">
                    <div className="kesanglaImageFrame mediumGreen">
                        <image style={{backgroundImage: `url(${keSangla})`}}></image> 
                    </div>

                    <div className="line2 darkGreen"></div>

                    <div className="informationWrapper">
                        <h2><span>WHAT</span> IS IT?</h2>
                        <line className="darkGreen"></line>
                        <p>
                            Kesangla or Kechari is played together with the chyabrung. It is a short length stick made of hard wood. It has mixture of bassy and sharp bells, pom pom and tassels attached to it with a string. Kesangla is decorated with different patterns etched into the wood and its typically colored with brown paint.                    
                        </p>
                    </div>
                </div>
                
                <line className="darkGreen"></line>

                <h1><span>HOW</span> KESANGLA IS <spam>USED</spam></h1>
                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="kesanglaImageFrame mediumGreen">
                            <image className="curvedTL" style={{backgroundImage: `url(${createBeat})`}}></image> 
                        </div>
                        <div className="informationWrapper">
                            <h2>CREATE <span>BEATS</span></h2>
                            <line className="darkGreen"></line>
                            <p>
                                Kesangla is a percussion instrument that is used to create the rhythmic beat of the chyabrung. It is held by the left hand and is used to strike the singsagay/dhung side of the chyabrung.                            
                            </p>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="kesanglaImageFrame mediumGreen">
                            <image className="curvedBR" style={{backgroundImage: `url(${tuneChyabrung})`}}></image> 
                        </div>
                        <div className="informationWrapper">
                            <h2><span>TUNE</span> CHYABRUNG</h2>
                            <line className="darkGreen"></line>
                            <p>
                                Kesangla is also used to tune the chyabrung. Most kesangla has a specific design, where the kesangla has a hook like shape at the top. 
                                <br></br>
                                <br></br>
                                To tune the chabrung, the hook shape is used to lock around the huksange skin bamboo ring and a wood hammer is used to gently strike and add pressure to evenly stretch the skin and tune the chyabrung.                            
                            </p>
                        </div>
                    </div>
                </div>

                <line className="darkGreen"></line>

                <h1>KESANGLA <span>SIZE</span>, <span>DESIGN</span> AND <span>MATERIAL</span></h1>
                <div className="flexColumnWrapper">
                    <div className="flexRowWrapper">
                        <div className="kesanglaImageFrame mediumGreen">
                            <image className="curvedBL" style={{backgroundImage: `url(${kesanglaSize1})`}}></image> 
                        </div>
                        <div className="kesanglaImageFrame mediumGreen">
                            <image className="curvedTR" style={{backgroundImage: `url(${kesanglaSize2})`}}></image> 
                        </div>
                    </div>

                    <div className="flexRowWrapper">
                        <div className="line2 darkGreen"></div>
                        <h2>KESANGLA <span>SIZE</span></h2>
                        <div className="line2 darkGreen"></div>

                        <div className="informationWrapper">
                            <p>
                                The size and length of the Kesangla depends on the region and the size of the chyabrung. Most regions kesangla are about 15cm - 20cm long. 
                                <br></br>
                                <br></br>
                                Typically Taplejung and Sankhuwasabha region have short kesangla, where as Dhankuta region has very long kesangla because of the large chyabrung size.                           
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flexColumnWrapper">
                    <div className="flexRowWrapper">
                        <div className="kesanglaImageFrame mediumGreen">
                            <image className="curvedTL" style={{backgroundImage: `url(${birdKesangla2})`}}></image> 
                        </div>
                        <div className="kesanglaImageFrame mediumGreen">
                            <image className="curvedBR" style={{backgroundImage: `url(${birdKesangla})`}}></image> 
                        </div>
                    </div>

                    <div className="flexRowWrapper">
                        <div className="informationWrapper">
                            <p>
                                Most of the Kesangla are just plain and simple. However, some Kesangla are decorated by etching patterns and shapes into the wood and painting it with colors.
                                <br></br>
                                <br></br>
                                The shape of kesangla depends on the maker skills. Typically, most kesangla are just plain and straight like a stick, but some are cut into  unique shapes and designs resembling animals like birds.                     
                            </p>
                        </div>

                        <div className="line2 darkGreen"></div>
                        <h2><span>SHAPE</span> & <span>DESIGN</span></h2>
                        <div className="line2 darkGreen"></div>
                    </div>
                </div>

                <div className="flexColumnWrapper">
                    <div className="flexRowWrapper">
                        <div className="kesanglaImageFrame mediumGreen">
                            <image className="curvedBL" style={{backgroundImage: `url(${antler1})`}}></image> 
                        </div>
                        <div className="kesanglaImageFrame mediumGreen">
                            <image className="curvedTR" style={{backgroundImage: `url(${antler2})`}}></image> 
                        </div>
                    </div>

                    <div className="flexRowWrapper">
                        <div className="line2 darkGreen"></div>
                        <h2>KESANGLA <span>MATERIALS</span></h2>
                        <div className="line2 darkGreen"></div>

                        <div className="informationWrapper">
                            <p>
                                Most common material used to make the kesangla are wood as its easy to work with and are hard, strong and durable. Sometimes bamboo are also used do make kesangla stick but they are not good quality. 
                                <br></br>
                                <br></br>
                                Apart from wood and bamboo, rare animals horns like the deer antlers are also used to make the kesangla. However, antlers kesangla are not common.              
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <div className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop greenRoundColor"></div>
                </div>  
                <KesanglaGallery/>
                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom greenRoundColor"></div>
                </div>
            </div>
        </div>
    );
}