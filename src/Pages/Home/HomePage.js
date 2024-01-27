import React from "react";
import { useNavigate } from "react-router-dom";

import { ArrowRight } from 'react-feather';

import "../../Styles/HomePage.css";
import "../../Styles/wrappers&colors.css";
import "../../Styles/videoSection.css";
import "../../Styles/animation.css";

import YoutubeEmbed from "../../Components/YoutubeEmbed/YoutubeEmbed.js";
import ParallaxMouse from "../Paralax/ParallaxMouse";

//Images Imports
import Background2 from "../../Images/kelangBackground2.jpg";
import Girls from "../../Images/homeImages/girlsDetail.png";
import Boys from "../../Images/homeImages/boysDetail.png";
import complexFoot from "../../Images/homeImages/foot.png";
import ChyabrungRythem from "../../Images/homeImages/rythmBeats.png";
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

    return (
        <div className="homePage">
            
            {/* <div className="heroSection">
                <h1>KE LANG</h1>
                <p>Learn about the unique cultural dance of the Limbu community from Eastern Nepal, inspired by Wild animals and birds.</p>
                <button>Learn More</button>
            </div> */}
            <ParallaxMouse/>

    
            <section className="sectionKeangIntroWrapper">
                <h1><span>'KE'</span> OR <span> 'KAY' </span>LANG</h1>
                
                <div className="informationWrapper">
                    <div className="scrollReveal">
                        <h3> 
                            <span>                            
                                Ke or Kay Lang, which translates to "chyabrung dance", is the traditional dance of the Limbu community in Nepal, Sikkim, Darjeeling hills and North-East India.
                            </span>
                        </h3>
                    </div>
                </div>
        
                <div className="largeImage" style={{backgroundImage: `url(${Background2})`}}></div>
          
                <div className="informationWrapper">
                    <div className="scrollReveal">
                        <h3> 
                            <span>                            
                            The dance is mainly performed in a circular formation. Typically there are between 8 to 12+ dancers in a kelang group. Each male dancers have a female dance partner and are positioned on the left side of their male partner.
                            </span>
                        </h3>
                    </div>
                </div>

                <div className="genderInfoWrapper">
                    <div className="flexColumn">
                        <image className="animationScaleInside" style={{backgroundImage: `url(${Boys})`}} alt="boys"></image>
                        <div className="informationWrapper">
                            <h2><span>MALE </span> DANCERS</h2>
                            <line className="pimpPurple"></line>
                            <p>                       
                                The Chyabrung drum is carried and played by the male dancers. Creating rhythmic beat, the dancers synchronize their foot movements with the chyabrung beat and dance in a circle formation.
                            </p>
                        </div>
                    </div>

                    <div className="flexColumn">
                        <image className="animationScaleInside" style={{backgroundImage: `url(${Girls})`}}></image>
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



            <div className="sectionVideoWrapper">
                <div className="videoCircleWrapper">
                    <div className="videoCircleTop purpleRoundedColor"></div>
                </div>
                    <div className="videoFrame lightPurpleVideoFrame">
                        <div className="videoInformation">
                            <h2 className="">KELANG VIDEO</h2>
                            <line className="pimpPurple"></line>
                            <p>
                                The video shows how a typical kelang or chyabrung dance is performed. This is a typical Taplejung region steps.
                            </p>
                        </div>
                        <div className="video">
                            <YoutubeEmbed embedId="94AC_rdWhEE"/>
                        </div>
                    </div>
                <div className="videoCircleWrapper">
                    <div className="videoCircleBottom purpleRoundedColor"></div>
                </div>
            </div>



            <section className="sectionMusicStepsWrapper lightTealGreen">
                <h1><span>MUSIC</span> AND <span>DANCE</span> STEPS</h1>
                <div className="informationWrapperCurvedBR">
                    <div className="scrollReveal">
                        <h3> 
                            <span>                            
                            In a Ke Lang dance performance there is no other music. The loud and sharp rhythmic beat of the chyabrung is the only music played during the dance. "chyang dhung chyang..."
                            </span>
                        </h3>
                    </div>
                    <div className="curvedBR"></div>
                </div>

                <div className="flexColumnn">
                    <div className="flex">
                        <h2>The <span>only music</span> is the <span>rhythmic beating</span> of the Chyabrung.</h2>
                        <image className="darkTealGreen animationFloatRight" style={{backgroundImage: `url(${ChyabrungRythem})`}}></image>
                    </div>

                    <div className="flex">
                        <h2>Depicting graceful <span>movements</span> of <span>wild animals</span> and birds.</h2>
                        <image className="darkTealGreen animationFloatRight" style={{backgroundImage: `url(${wild})`}}></image>
                    </div>
                </div>
                
                <div className="flexColumnn">
                    <div className="flex">
                        <h2>Dancers execute <span>synchronized</span> and <span>complicated</span> foot work.</h2>
                        <image className="darkTealGreen animationFloatUP" style={{backgroundImage: `url(${complexFoot})`}}></image>
                    </div>
            
                    <div className="flex">
                        <h2>Countless <span>varieties</span> of flexible and energetic <span>foot movements.</span></h2>
                        <image className="darkTealGreen animationFloatUP" style={{backgroundImage: `url(${flexFoot})`}}></image>
                    </div>
                </div>

                <div className="informationWrapperCurvedTL">
                    <h3>
                        During the chyabrung dance, the dancers performs several variation of foot steps and animal steps. It has been said that there are more than 200+ unique steps.                    
                    </h3>
                    <div className="curvedTL"></div>
                </div>
              
                <button onClick={() => navigate("/Steps")}>Learn More<ArrowRight size={40}/></button>
            </section>



            <section className="sectionAboutChyabrungWrapper lightSteelBlue">
                <h1><span>ABOUT</span> THE CHYABRUNG</h1>
                <div className="informationWrapper">
                    <h3>
                        The Chyabrung also called "Ke or Kay" in Limbu language is a traditional hollow log drum of the Limbu community. It is the primary instrument played during the dance and is carried by the male dancers. The size and sound varies from region to regions.
                    </h3>
                </div>
                
                <div className="largeImage" style={{backgroundImage: `url(${chyabrungLarge})`}}></div>

                <div className="informationWrapper">
                    <h3>
                        The chyabrung has two openings on either ends. The right side is called “Huksagay/chyang” and it produces a thrilling sharp, treble tone. The left side is called “Singsagay/dhung” and it produces a flat, roaring bass sound.
                    </h3>
                </div>

                <div className="aboutChyabrungInfoWrapper">
                    <div className="flexColumnn">
                        <image className="imageFloatLeft darkSteelBlue animationScaleIn" style={{backgroundImage: `url(${strung})`}}></image>
                        <div className="informationWrapper">
                            <h2>HOW IT'S <span>HELD</span></h2>
                            <line className="mediumSteelBlue"></line>
                            <p>                       
                                It is strung around the neck and over the left shoulder or just over the left shoulder with a cord and a strap at the stomach height.
                            </p>
                        </div>
                    </div>
               
                    <div className="flexColumnn">
                        <image className="imageFloatRight darkSteelBlue animationScaleIn" style={{backgroundImage: `url(${playedHand})`}}></image>
                        <div className="informationWrapper">
                            <h2>HOW IT'S <span>PLAYED</span></h2>
                            <line className="mediumSteelBlue"></line>
                            <p>                       
                                The Chyabrung is played using both hands, primarily the right palm of the hand to hit the sharp skin "Chyang" and left hand to hit the base skin "Dung". 
                            </p>
                        </div>
                    </div>
                </div>

                <button onClick={() => navigate("/AboutPage")}>Learn More<ArrowRight size={40}/></button>
            </section>



            <div className="sectionClothingWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop brownRoundColor"></div>
                </div>

                <div className="clothingInformationWrapper brownRoundColor">
                    <h1><span>CLOTHES</span> AND <span>ACCESSORIES</span></h1>

                    <div className="informationWrapper">
                        <h3>
                            During the Kelang performance, the male dancers and the female dancers wears beautiful traditional Limbu dresses or other formal clothes with Limbu dhaka pattern touch.  Traditional accessories such as dhaka scarf, bags and jewelries are also worn.
                        </h3>
                    </div>
                    <div className="gapWrapper">
                        <div className="brownBackgroundFrame darkBrown">
                            <image className="mediumBrown" style={{backgroundImage: `url(${boysClothes})`}}></image>
                            <div className="informationWrapper">
                                <h2><span>MALE </span> DANCERS</h2>
                                <line className="darkBrown"></line>
                                <p>                       
                                    The Chyabrung drum is carried and played by the male dancers. Creating rhythmic beat, the dancers synchronize their foot movements with the chyabrung beat and dance in a circle formation.
                                </p>
                            </div>
                        </div>

                        <button className="dressButton" onClick={() => navigate("/Clothes")}>Show More<ArrowRight size={40}/></button>

                        <div className="brownBackgroundFrame darkBrown">
                            <image className="mediumBrown" style={{backgroundImage: `url(${girlsClothes})`}}></image>
                            <div className="informationWrapper">
                                <h2><span>FEMALE </span> DANCERS</h2>
                                <line className="darkBrown"></line>
                                <p>                       
                                    The Chyabrung drum is carried and played by the male dancers. Creating rhythmic beat, the dancers synchronize their foot movements with the chyabrung beat and dance in a circle formation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="roundedShapeWrapper">
                    <div className="circleShapeBottom brownRoundColor"></div>
                </div> 
            </div>



         
                <div className="chyabrungInfoContainer lightGreen">
                    <image className="mediumGreen animationFloatUP" style={{backgroundImage: `url(${Jhympta})`}}></image>
                    <div className="flexColumnn">
                        <div className="informationWrapper">
                            <h2>OTHER INSTRUMENTS</h2>
                            <line className="darkGreen"></line>
                            <p> 
                                Chyabrung is not only the instrument played during a kelange performace. The females dancers also carries different percussion instruments and plays together with the chyabrung.
                            </p>
                        </div>
                        <button className="madeButton" onClick={() => navigate("/Instruments")}>Show More<ArrowRight size={40}/></button>
                    </div>
                </div>
                
                <div className="chyabrungInfoContainer lightPurple">
                    <div className="flexColumnn">
                        <div className="informationWrapper">  
                            <h2>HOW IT'S MADE</h2>
                            <line className="mediumPurple"></line>
                            <p>
                                Chyabrung is made of many diffferent materials which are found in the nature. Main materials are wood and different types of leathers.
                            </p>
                        </div>
                        <button className="madeButton" onClick={() => navigate("/HowItsMade")}>Show More<ArrowRight size={40}/></button>
                    </div>
                    <image className="darkPurple animationFloatUP" style={{backgroundImage: `url(${chyabrungMade})`}}></image>
                </div>
            


       
                <div className="chyabrungInfoContainer lightRed">
                    <image className="darkRed animationFloatUP" style={{backgroundImage: `url(${wedding})`}}></image>
                    <div className="flexColumnn">
                        <div className="informationWrapper">
                            <h2>WHEN IT'S PERFORMED</h2>
                            <line className="darkRed"></line>
                            <p> 
                                Chyabrung is performed during many occasions and festivals like chasok tangnam, sesikpa tangnam, wedding, events, gathering and more...
                            </p>
                        </div>
                        <button className="madeButton" onClick={() => navigate("/WhenPerformed")}>Show More<ArrowRight size={40}/></button>
                    </div>
                </div>
                
                <div className="chyabrungInfoContainer lightYellow">
                    <h1> THE <span>IMPORTANCE</span> OF KELANG </h1>
                    <div className="flexRowWrapper">
                        <div className="flexColumnn">
                            <div className="informationWrapper yellow">  
                                <h2>THE <span>MYTH</span> OF KELANG</h2>
                                <line className="darkYellow"></line>
                                <p>
                                    Chyabrung is not just a dance performance for entertainment... it is deeply connect with Limbu people origion, history and “mundhum” (myth) since the beginning of time.
                                    Kelang is performed to give blessing and prosperity during Limbu marriage and festivals.                        
                                </p>
                            </div>
                            <button className="madeButton" onClick={() => navigate("/WhyImportant")}>Kelang Myth<ArrowRight size={40}/></button>
                        </div>
                        <image className="imageRoundedTRBL darkYellow animationFloatUP" style={{backgroundImage: `url(${blessing})`}}></image>
                    </div>

                    <div className="flexRowWrapper">
                        <image className="imageRoundedTLBR darkYellow animationFloatUP" style={{backgroundImage: `url(${blessing})`}}></image>
                        <div className="informationWrapper yellow">  
                            <h2>OUR <span>CULTURE</span> DANCE</h2>
                            <line className="darkYellow"></line>
                            <p>
                                At the end, the kelang of Limbus is not an ordinary hollow-log drum that everyone carries and dance as one desires but it is as old as Limbus themselves and its mythology is as dimensional as the history of human civilization. The association of Kelang with the Limbu tribe is a universally recognized and authenticated.                            
                            </p>
                        </div>
                    </div>

                    <div className="flexRowWrapper">
                        <div className="informationWrapper yellow">  
                            <h2><span>GOOD</span> ALWAYS TRIUMPHS <span>EVIL</span></h2>
                            <line className="darkYellow"></line>
                            <p>
                                Whenever the sound of the Chyabrung drum resounds in the air, the tragic story of two brothers “Kesamay” and “Namsamay” are remembered and honoured. As the kelang dance is performed, it reminds us and teach us all that good always triumphs over evil at the end.                           
                            </p>
                        </div>
                        <image className="imageRoundedTRBL darkYellow animationFloatUP" style={{backgroundImage: `url(${blessing})`}}></image>
                    </div>

                    <div className="flexRowWrapper">
                        <image className="imageRoundedTLBR darkYellow animationFloatUP" style={{backgroundImage: `url(${blessing})`}}></image>
                        <div className="informationWrapper yellow">  
                            <h2>FOR THE <span>NEXT</span> GENERATION</h2>
                            <line className="darkYellow"></line>
                            <p>
                                After all, kelang/chyabrung is a dance for everyone to enjoy and have fun. When the chyabrung dance is performed, it teaches and shows all age group people from young, teens to old about our cultural dance and helps the dance to be passed down to the next young generation. From theba, to son to grandson and so on.                            
                            </p>
                        </div>
                    </div>
                </div>
        

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