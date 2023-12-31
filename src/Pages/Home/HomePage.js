import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import "../../Styles/HomePage.css";
import "../../Styles/wrappers&colors.css";
import "../../Styles/videoSection.css"

import ParallaxMouse from "../Paralax/ParallaxMouse";

//Images Imports
import Background2 from "../../Images/kelangBackground2.jpg";
import Girls from "../../Images/homeImages/girlsDetail.png";
import Boys from "../../Images/homeImages/boysDetail.png";
import complexFoot from "../../Images/homeImages/foot.png";
import ChyabrungRythem from "../../Images/homeImages/onlyMusic.png";
import flexFoot from "../../Images/homeImages/flexFoot.png";
import wild from "../../Images/homeImages/wild.png";
import strung from "../../Images/homeImages/strung.png";
import playedHand from "../../Images/homeImages/playedHand.png";
import Jhympta from "../../Images/homeImages/Jhympta.png";
import chyabrungMade from "../../Images/homeImages/chyabrungMade.png";
import boysClothes from "../../Images/homeImages/boysClothes.png";
import girlsClothes from "../../Images/homeImages/girlsClothes.png";
import wedding from "../../Images/homeImages/wedding.png";
import blessing from "../../Images/homeImages/blessing.png";

import chyabrungLarge from "../../Images/homeImages/chyabrungLarge.jpg";

export const HomePage = () => {
    const navigate = useNavigate();

    const { ref: introImg, inView: introImgIsVisible} = useInView({
        /* Optional options */
        threshold: 0.5,
        rootMargin: "50px",
    });

    const { ref: aboutRef, inView: aboutSectionIsVisible} = useInView({
        /* Optional options */
        threshold: 0.5,
        rootMargin: "50px",
    });
    
    return (
        <div className="homePage">
            
            <div className="heroSection">
                <h1>KE LANG</h1>
                <p>Learn about the unique cultural dance of the Limbu community from Eastern Nepal, inspired by Wild animals and birds.</p>
                <button>Learn More</button>
            </div>
            <ParallaxMouse/>

            <section className="sectionSplitY">
                <h1>KE OR KAY LANG</h1>
                
                <div className="informationWrapper">
                    <h3>
                        Ke Lang, which translates to, which translates to "<span>chyabrung dance</span>", is the <span>traditional</span> dance of the <span>Limbu community </span>in Nepal, Sikkim, Darjeeling hills and North-East India.
                    </h3>
                </div>

                <div ref={introImg} className={`${'largeImage'} ${introImgIsVisible ? "moveUp" : "largeImage"}`} style={{backgroundImage: `url(${Background2})`}}></div>
                <div className="informationWrapper">
                    <h3>
                        The dance is mainly performed in a circular formation. Typically there are between 8 to 12 or more dancers in a kelang group. Each male dancers have a female dancer partner and stands on the left side of their male partner.
                    </h3>  
                </div>

                <div className="genderInfoWrapper">
                    <div className="flexColumn">
                        <image style={{backgroundImage: `url(${Boys})`}} alt="boys"></image>
                        <div className="informationWrapper">
                            <h2><span>MALE </span> DANCERS</h2>
                            <line className="pimpPurple"></line>
                            <p>                       
                                The Chyabrung drum is carried and played by the male dancers. Creating rhythmic beat, the dancers synchronize their foot movements with the chyabrung beat and dance in a circle formation.
                            </p>
                        </div>
                    </div>

                    <div className="flexColumn">
                        <image style={{backgroundImage: `url(${Girls})`}}></image>
                        <div className="informationWrapper">
                            <h2><span>FEMALE </span>DANCERS</h2>
                            <line className="pimpPurple"></line>
                            <p>
                                Synchronizing their footsteps together, while gently and elegantly performing smooth hands movement, the female dancers joins the male dancers. Typically, the girls are on the left/behind of the boys dancers.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <div className="videoWrapper">
                <div className="videoCircleWrapper">
                    <div className="videoCircleTop purpleRoundedColor"></div>
                </div>
                    <div className="videoFrame">
                        <div className="videoInformation">
                            <h2 className="">KELANG VIDEO</h2>
                            <line className="pimpPurple"></line>
                            <p>
                                The video shows how the Jhyampta is played together with the Tambourine as a percussion instruments alongside the chyabrung beat.
                            </p>
                        </div>
                        <div className="video">video</div>
                    </div>
                <div className="videoCircleWrapper">
                    <div className="videoCircleBottom purpleRoundedColor"></div>
                </div>
            </div>

            <section className="splitSection lightTealGreen">
                <h1>MUSIC AND DANCE STEPS</h1>
                <div className="informationWrapper">
                    <h3>
                        In a Ke Lang dance performance there is no other music. The loud and sharp chyabrung beat is the only music played  during the dance. 
                    </h3>
                </div>

                <div className="flex">
                    <h3>The <span>only music</span> is the <span>rhythmic beating</span> of the Chyabrung.</h3>
                    <image className="darkTealGreen" style={{backgroundImage: `url(${ChyabrungRythem})`}}></image>
                </div>

                <div className="flex">
                    <h3>Dancers execute <span>synchronized</span> and <span>complicated</span> foot work.</h3>
                    <image className="darkTealGreen" style={{backgroundImage: `url(${complexFoot})`}}></image>
                </div>

                <div className="flex">
                    <h3>...depicting graceful <span>movements</span> of <span>wild animals.</span></h3>
                    <image className="darkTealGreen" style={{backgroundImage: `url(${wild})`}}></image>
                </div>

                <div className="flex">
                    <h3>And countless <span>varieties</span> of flexible and energetic <span>foot movements.</span></h3>
                    <image className="darkTealGreen" style={{backgroundImage: `url(${flexFoot})`}}></image>
                </div>

                <div className="informationWrapper">
                    <h3>
                        During the chyabrung dance, the dancers performs several variation of foot steps and animal steps. It has been said that there are more than 200+ unique steps.                    
                    </h3>
                </div>
              
                <button onClick={() => navigate("/ChyabrungSteps")}>Learn More</button>
            </section>



            <section className="sectionSplitY lightSteelBlue">
                <h1>ABOUT THE CHYABRUNG</h1>
                <div className="informationWrapper">
                    <h3>
                        The Chyabrung also called "Ke or Kay" in Limbu language is a traditional hollow log drum of the Limbu community. It is the primary instrument played during the dance and is carried by the male dancers. The size and sound varies from region to regions.
                    </h3>
                </div>
                
                <div ref={aboutRef} className={`${'largeImage'} ${aboutSectionIsVisible ? "moveUp" : "largeImage"}`} style={{backgroundImage: `url(${chyabrungLarge})`}}></div>

                <div className="informationWrapper">
                    <h3>
                        The chyabrung has two openings on either ends. The right side is called “Huksagay/chyang” and it produces a thrilling sharp, treble tone. The left side is called “Singsagay/dhung” and it produces a flat, roaring bass sound.
                    </h3>
                </div>

                <div className="aboutChyabrungInfoWrapper">
                    <div className="flexColumnn">
                        <image className="imageFloatLeft darkSteelBlue" style={{backgroundImage: `url(${strung})`}}></image>
                        <div className="informationWrapper">
                            <h2>HOW IT'S <span>HELD</span></h2>
                            <line className="mediumSteelBlue"></line>
                            <p>                       
                                It is strung around the neck and over the left shoulder or just over the left shoulder with a cord and a strap at the stomach height.
                            </p>
                        </div>
                    </div>
               
                    <div className="flexColumnn">
                        <image className="imageFloatRight darkSteelBlue" style={{backgroundImage: `url(${playedHand})`}}></image>
                        <div className="informationWrapper">
                            <h2>HOW IT'S <span>PLAYED</span></h2>
                            <line className="mediumSteelBlue"></line>
                            <p>                       
                                The Chyabrung is played using both hands, primarily the right palm of the hand to hit the sharp skin "Chyang" and left hand to hit the base skin "Dung". 
                            </p>
                        </div>
                    </div>
                </div>

                <button onClick={() => navigate("/HowItsPlayed")}>Show More</button>
            </section>

            <div className="sectionContainer">
                <sectioncurvedtop className="curvedTop">
                    <div className="whitebox">
                        <image style={{backgroundImage: `url(${boysClothes})`}}></image>
                        <div className="informationWrapper">
                            <h2><span>MALE </span> DANCERS</h2>
                            <line className="purpleLine"></line>
                            <p>                       
                                The Chyabrung drum is carried and played by the male dancers. Creating rhythmic beat, the dancers synchronize their foot movements with the chyabrung beat and dance in a circle formation.
                            </p>
                        </div>
                    </div>
                </sectioncurvedtop>

                <button className="dressButton" onClick={() => navigate("/Dresses")}>Show More</button>

                <sectioncurvedbottom className="curvedBottom">
                    <div className="whitebox">
                        <image style={{backgroundImage: `url(${girlsClothes})`}}></image>
                        <div className="informationWrapper">
                            <h2><span>MALE </span> DANCERS</h2>
                            <line className="purpleLine"></line>
                            <p>                       
                                The Chyabrung drum is carried and played by the male dancers. Creating rhythmic beat, the dancers synchronize their foot movements with the chyabrung beat and dance in a circle formation.
                            </p>
                        </div>
                    </div>
                </sectioncurvedbottom>
            </div>


            <section className="chyabrungMoreInfo">
                <div className="chyabrungInfoContainer lightGreen">
                    <image className="mediumGreen" style={{backgroundImage: `url(${Jhympta})`}}></image>
                    <div className="flexColumnn">
                        <div className="informationWrapper">
                            <h2><span>OTHER</span> INSTRUMENTS</h2>
                            <line className="darkGreen"></line>
                            <p> 
                                Chyabrung is not only the instrument played during a kelange performace. The females dancers also carries different percussion instruments and plays together with the chyabrung.
                            </p>
                        </div>
                        <button className="madeButton" onClick={() => navigate("/Instruments")}>Show More</button>
                    </div>
                </div>
                
                <div className="chyabrungInfoContainer lightPurple">
                    <div className="flexColumnn">
                        <div className="informationWrapper">  
                            <h2>HOW IT'S <span>MADE</span></h2>
                            <line className="mediumPurple"></line>
                            <p>
                                Chyabrung is made of many diffferent materials which are found in the nature. Main materials are wood and different types of leathers.
                            </p>
                        </div>
                        <button className="madeButton" onClick={() => navigate("/HowItsMade")}>Show More</button>
                    </div>
                    <image className="darkPurple" style={{backgroundImage: `url(${chyabrungMade})`}}></image>
                </div>
            </section>


            <section className="chyabrungMoreInfo">
                <div className="chyabrungInfoContainer lightRed">
                    <image className="darkRed" style={{backgroundImage: `url(${wedding})`}}></image>
                    <div className="flexColumnn">
                        <div className="informationWrapper">
                            <h2><span>WHEN</span> IT'S PERFORMED</h2>
                            <line className="darkRed"></line>
                            <p> 
                                Chyabrung is performed during many occasions and festivals like chasok tangnam, sesikpa tangnam, wedding, events, gathering and more...
                            </p>
                        </div>
                        <button className="madeButton" onClick={() => navigate("/Instruments")}>Show More</button>
                    </div>
                </div>
                
                <div className="chyabrungInfoContainer lightYellow">
                    <div className="flexColumnn">
                        <div className="informationWrapper">  
                            <h2>WHY IT'S <span>IMPORTANT</span></h2>
                            <line className="darkYellow"></line>
                            <p>
                                Chyabrung is not just a dance performance for entertainment... it is deeply connect with Limbu people history and origin since the beginning of time.                            
                            </p>
                        </div>
                        <button className="madeButton" onClick={() => navigate("/HowItsMade")}>Show More</button>
                    </div>
                    <image className="darkYellow" style={{backgroundImage: `url(${blessing})`}}></image>
                </div>
            </section>

{/*             
            <section className="section2">
                <div className="imageFrame">
                    <image>Image</image>
                </div>
                <p>Paragapah</p>
            </section>

            <section className="section2">
                <div className="imageFrameOval">
                    <image>Image</image>
                </div>
                <p>Paragapah</p>
            </section> */}
            
        </div>
    );
};