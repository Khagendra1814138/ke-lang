import React from "react";
import "../../Styles/AboutPage.css";

import huksagay from "../../Images/aboutChyabrung/huksagay.png";
import singsagay from "../../Images/aboutChyabrung/singsagay.png";
import flowers from "../../Images/aboutChyabrung/flowers.jpg";
import wetting from "../../Images/aboutChyabrung/wetting.jpg";
import tuningChabi from "../../Images/aboutChyabrung/pangraKey.jpg";
import tuningMatengra from "../../Images/aboutChyabrung/matengraKey.jpg";

import strung from "../../Images/homeImages/strung.png";
import tiltedUP from "../../Images/aboutChyabrung/tiltedUp.jpg";
import heldStraight from "../../Images/aboutChyabrung/tiltedStraight.jpg";
import tiltedDown from "../../Images/aboutChyabrung/tiltedDown.jpg";

import taplejungChyabrung from "../../Images/aboutChyabrung/taplejung.jpg";
import terhathumChyabrung from "../../Images/aboutChyabrung/terhathum.jpg";
import dhankutaChyabrung from "../../Images/aboutChyabrung/dhankuta.jpg";
import panchtharChyabrung from "../../Images/aboutChyabrung/panchthar.png";
import illamChyabrung from "../../Images/aboutChyabrung/illam.jpg";
import sikkimChyabrung from "../../Images/aboutChyabrung/sikkim.jpg";

export const AboutPage = () => {
    return (
        <div className="aboutPage">
            <hero className="heroWrapper">
                <div className="heroInformationFrame">
                    <h1>ABOUT THE KE/CHYABRUNG</h1>
                </div>
                <div className="heroeCurvedWrapper">
                    <div className="heroeCurvedBottom"></div>
                </div>
            </hero>

            <section className="sectionHandsWrapper lightSteelBlue">
                <h1>HOW THE <span>HANDS</span> ARE <span>USED</span></h1>

                <div className="informationWrapperCurvedBR">
                    <h3>
                        The chyabrung has two openings on either ends. The right side is called “Huksagay” and it produces a thrilling sharp, treble tone. The left side is called “Singsagay” and it produces a flat, roaring bass sound. Moreover, the chyabrung has a Chabi (key) made of pangra beans and the purpose of the key is to produce a vibrating resound by slightly touching the “huksangay/chyang” skin.
                    </h3>
                    <div className="curvedBR"></div>
                </div>

                <div className="flexRowWrapper">
                    <image className="darkSteelBlue" style={{backgroundImage: `url(${huksagay})`}}></image>
                    <div className="informationWrapper">
                        <h2>RIGHT <span>HAND</span></h2>
                        <line className="mediumSteelBlue"></line>
                        <p>
                            The right hand or your stronger hand palm is normally used to strike the “huksagay” side of the chyabrung, which produces the “Chyang” sound.                        
                        </p>
                        <button>Play</button>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <h2><span>RIGHT</span> HAND</h2>
                        <line className="mediumSteelBlue"></line>
                        <p>
                            The left hand or your weaker hand is normally used to hold the kesangla and hit the “singsagay” side of the chyabrung, which produces the “Dhung” sound.                        
                        </p>
                        <button>Play</button>
                    </div>
                    <image className="darkSteelBlue" style={{backgroundImage: `url(${singsagay})`}}></image>
                </div>

                <div className="informationWrapperCurvedTL">
                    <h3>
                        Both left and right hands are used together to play the both side of the chyabrung simultaneously to create rhythmic beats. The beats sounds something like “chyang, dhung, chyang”.                    
                    </h3>
                    <div className="curvedTL"></div>
                </div>
            </section>



            <section className="sectionPreparingWrapper lightSteelBlue"> 
                <h1><span>PREPARING</span> THE CHYABRUNG</h1>

                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <div className="informationWrapper">
                            <h2><span>FLOWER</span> DECORATION</h2>
                            <p>
                                Fresh flowers and lush plants branches and leafs are used to decorate the chyabrung. The flowers and plants branches stem are tucked under the leather ropes on the chyabrung. The flowers are used to bless the bride and groom during wedding dance.                       
                            </p>
                            <line className="mediumSteelBlue"></line>
                        </div>

                        <div className="imageFrame darkSteelBlue">
                            <image className="imageLeafL" style={{backgroundImage: `url(${wetting})`}}></image>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkSteelBlue">
                            <image className="imageLeafR" style={{backgroundImage: `url(${flowers})`}}></image>
                        </div>

                        <div className="informationWrapper">
                            <h2><span>WETTING</span> CHYABRUNG</h2>
                            <p>
                                Before starting to play the chyabrung, the huksagay/chyang skin of the chyabrung is wetted. A piece of cloth or rag is soaked with water, and the soaked cloth is placed in the middle of the skin. This makes the skin looser in the middle, which helps the chyabrung to produce much richer and louder sound.                            </p>
                            <line className="mediumSteelBlue"></line>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="informationWrapper">
                            <h2>TUNING <span>PANGRA</span> KEY</h2>
                            <p>
                                Before starting to play the chyabrung, the huksagay/chyang skin of the chyabrung is wetted. A piece of cloth or rag is soaked with water, and the soaked cloth is placed in the middle of the skin. This makes the skin looser in the middle, which helps the chyabrung to produce much richer and louder sound.                     
                            </p>
                            <line className="mediumSteelBlue"></line>
                        </div>

                        <div className="imageFrame darkSteelBlue">
                            <image className="imageLeafL" style={{backgroundImage: `url(${tuningMatengra})`}}></image>
                        </div>
                    </div>

                    <div className="flexColumnWrapper">
                        <div className="imageFrame darkSteelBlue">
                            <image className="imageLeafR" style={{backgroundImage: `url(${tuningChabi})`}}></image>
                        </div>

                        <div className="informationWrapper">
                            <h2>TUNING <span>MATENGRA</span> KEY</h2>
                            <p>
                                Taplejung and Sankhuwasbbha region ke/chyabrung doesn't have the pangra bean chabi/key and insted it has “matengra” (marble) key. To tune the matengra chyabrung you just have to tilt the chyabrung down so the gravaty can always keep the marble toching the huksagay/chyang skin.                       
                            </p>
                            <line className="mediumSteelBlue"></line>
                        </div>
                    </div>
                </div>
            </section>


            <section className="sectionHeldWrapper lightSteelBlue">
                <h1>HOW THE CHYABRUNG IS <span>HELD</span></h1>
                <div className="flexRowWrapperCenter">
                    <div className="imageFrameSmall darkSteelBlue">
                        <image className="imageRoundedUP" style={{backgroundImage: `url(${tiltedUP})`}}></image>
                    </div>

                    <div className="informationWrapper">
                        <h2>TILTED <span>UP</span></h2>
                        <line className="mediumSteelBlue"></line>
                        <p>
                            Region such as Dhankuta and Illam Chyabrung is strung around the neck and over the left shoulder because their chyabrung is large and heavy so its easy to balance the load in the center of the body. 
                            Due to the long size, they also tilt their chyabrung up to makes it easier for the right hand palm to reach the huksagay. 
                            <br></br>
                            <br></br>
                            Although Sikkim chyabrung are small, they also tilts their chyabrung up and hold it around the neck and over the left shoulder because their steps are very fast, aggressive and flexible, requiring the chyabrung to be tightly secured.                          
                        </p>
                    </div>
                </div>

                <div className="flexRowWrapperCenter">
                    <image className="imageFrameLarge darkSteelBlue" style={{backgroundImage: `url(${strung})`}}></image>
                    <div className="flexColumnWrapper">
                        
                        <div className="imageFrameSmall darkSteelBlue">
                            <image className="imageRoundedRIGHT" style={{backgroundImage: `url(${heldStraight})`}}></image>
                        </div>

                        <div className="informationWrapper">
                            <h2>HELD <span>STRAIGHT</span></h2>
                            <line className="mediumSteelBlue"></line>
                            <p>
                                Region like the panchthar chyabrung is typically strung over the left shoulder only and is held straight. This is because their chyabrung size is medium so not too heavy  and their steps aren't aggressive and fast paced like Sikkim. So holding the chyabrung straight makes it easy to reach the huksagay (Chyang) skin and move their body more freely.                         
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flexRowWrapperCenter">
                    <div className="informationWrapper">
                        <h2>TILTED <span>DOWN</span></h2>
                        <line className="mediumSteelBlue"></line>
                        <p>
                        Region such as Taplejung and Sankhuwasabha holds over the left shoulder only their steps has lots body and foot movements and the size is small, lighter, making it easier to carry without having to balance the chyabrung weight.
                        <br></br>
                        <br></br>
                        Their chyabrung are always tilted down because both region chyabrung are made in a same way and have the “Matengre (Marble)” type chabi (Key). So tilting the chyabrung allows the marbel to always roll down and touch and vibrate with the huksagay (Chyang) skin.                          
                        </p>
                    </div>

                    <div className="imageFrameSmall darkSteelBlue">
                        <image className="imageRoundedDOWN" style={{backgroundImage: `url(${tiltedDown})`}}></image>
                    </div>
                </div>
            </section>



            <div className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop darkSteelBlue"></div>
                </div>  

                <div className="chyabrungGallaryFrame darkSteelBlue">
                    <div className="chyabrungGallaryColumn">
                        <image style={{backgroundImage: `url(${tiltedDown})`}}></image>
                        <image style={{backgroundImage: `url(${tiltedDown})`}}></image>
                        <image className="mediumImage" style={{backgroundImage: `url(${tiltedDown})`}}></image>
                    </div>
                

                    <div className="chyabrungGallaryColumn">
                        <image style={{backgroundImage: `url(${tiltedDown})`}}></image>
                        <image className="bigImage" style={{backgroundImage: `url(${tiltedDown})`}}></image>
                        <image style={{backgroundImage: `url(${tiltedDown})`}}></image>
                    </div>


                    <div className="chyabrungGallaryColumn">
                        <image className="mediumImage" style={{backgroundImage: `url(${tiltedDown})`}}></image>
                        <image style={{backgroundImage: `url(${tiltedDown})`}}></image>
                        <image style={{backgroundImage: `url(${tiltedDown})`}}></image>
                    </div>
                </div>

                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom darkSteelBlue"></div>
                </div>
            </div>



            <section className="sectionSizeandSoundWrapper lightSteelBlue">
                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <p>
                            There is no exact dimension for the chyabrung because the size varies from region to region. For exmaple, typically, Taplejung, Sikkim and Sankhuwasabha have small chyabrung. Terhathum and Panchthar have medium size chyabrung. Illam and Dhankuta have larger size chyabrung.
                        </p>
                    </div>
                    <h1><span>SIZE</span> AND <span>SOUND</span> OF THE CHYABRUNG</h1>
                </div>

                <div className="flexRowWrapper">
                    <div className="largeChyabrungImage darkSteelBlue">
                        <image style={{backgroundImage: `url(${taplejungChyabrung})`}}></image>
                    </div>  

                    <div className="informationWrapper">
                        <h2><span>Taplejung</span> & <span>Sankhuwasabha</span> Chyabrung</h2>
                        <p>
                            Taplejung and Sankhuwasabha chyabrung are built the same way and are the shortest & smallest comparing to the rest of the regions. These two regions chyabrung has special type of “matengra”/marble chabi/key and not the typical pangra bean chabi. These chyabrung produces sharp, high pitch but quiet sound.                        
                        </p>
                        <button>Play</button>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="largeChyabrungImage darkSteelBlue">
                        <image style={{backgroundImage: `url(${terhathumChyabrung})`}}></image>
                    </div>

                    <div className="informationWrapper">
                        <h2><span>Terhathum</span> Chyabrung</h2>
                        <p>
                            Terhathum chyabrung are medium size chyabrung. The chyabrung length is short but the diameter is large. Typical Terhathum chyabrung has two chabi/key and it produces very very sharp, very very high pitch sound, almost like hitting a tin plate comparing to the rest of the region.                        
                        </p>
                        <button>Play</button>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="largeChyabrungImage darkSteelBlue">
                        <image style={{backgroundImage: `url(${dhankutaChyabrung})`}}></image>
                    </div>

                    <div className="informationWrapper">
                        <h2><span>Dhankuta</span> Chyabrung</h2>
                        <p>
                            Dhankuta region chyabrung are very very large comparing to the rest of the regions. The chyabrung diameter is very large and the length is very long like the Illam chyabrung. It produces very very loud and bassy sound almost like an animal roar. The most noticable feature about dhankuta chyabrung is that the excess skin of the huksagay/chyang is left hanging.                        
                        </p>
                        <button>Play</button>
                    </div>
                </div>

                <div className="informationWrapper">
                    <p>
                        The size of the chyabrung determines the sound of the chyabrung. For example, smaller chyabrung produces sharpe, high pitch, but quieter sound. Where as, larger size chyabrung produces bassy, lower pitch, but louder sound.                     
                    </p>
                </div>

                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <h2><span>Panchthar</span> Chyabrung</h2>
                        <p>
                            Panchthar chyabrung is a medium size chyabrung, similar to Terhathum chyabrung. However, the length is a mixture of both short and long and the diameter is also a mixture of large and small. Typical panchthar chyabrung has one pangra bean chabi/key and the frame is left natural without colors. It produces high pitch buzzing like sound.                        
                        </p>
                        <button>Play</button>
                    </div>

                    <div className="largeChyabrungImage darkSteelBlue">
                        <image style={{backgroundImage: `url(${panchtharChyabrung})`}}></image>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <h2><span>Illam</span> Chyabrung</h2>
                        <p>
                            Illam chyabrung are very large like the Dhankuta chyabrung. The chyabrung has very large diameter and very long frame comparing to the rest of the region. The frame is almost like a cone shape, the huksagay/chyang side diameter is large and gradually the frame diameter becomes smaller at the singsagay/dhung side. It has two pangra bean chabi/key and it produces very loud resonating swarm of buzzing bee like sound.                       
                        </p>
                        <button>Play</button>
                    </div>

                    <div className="largeChyabrungImage darkSteelBlue">
                        <image style={{backgroundImage: `url(${illamChyabrung})`}}></image>
                    </div>
                </div>

                <div className="flexRowWrapper">
                    <div className="informationWrapper">
                        <h2><span>Sikkim</span> Chyabrung</h2>
                        <p>
                            Sikkim region chyabrung size and diameter is very small like the Taplejung and Sankhuwasabha chyabrung. Typically, sikkim chyabrung are decorated by fully draping it with colorful fabric hanging from the chyabrung. The chyabrung produces sharp but quiet sound and has low resonate and vibration.                        
                        </p>
                        <button>Play</button>
                    </div>

                    <div className="largeChyabrungImage darkSteelBlue">
                        <image style={{backgroundImage: `url(${sikkimChyabrung})`}}></image>
                    </div>
                </div>
            </section>



            <section className="sectionBeatsWrapper lightSteelBlue">
                <h1>CHYABRUNG <span>BEAT’S</span></h1>

                <div className="informationWrapper">
                    <p>
                        Similar to the steps, there are countless varities of chyabrung beats, and they are different between region to region. Each regions have their own unique chyabrung beats that matches their typical steps. All the beats can categorized into 3 different sections and they are kassarokpa beats, turning beats and animals steps beats. However, there are many beats outside the category.                    
                    </p>
                </div>

            </section>

        </div>
    );
};