import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import "../../Styles/HomePage.css"

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

export const HomePage = () => {
    const navigate = useNavigate();

    const { ref: aboutRef, inView: aboutSectionIsVisible} = useInView({
        /* Optional options */
        threshold: 0.5,
        rootMargin: "50px",
    });
    
    return (
        <div className="homePage">
            
            <ParallaxMouse/>

            <section className="sectionSplitY">
                <h1>Ke Lang</h1>
                <h2>Ke Lang, which translates to, which translates to "<span>chyabrung dance</span>", is the <span>traditional</span> dance of the <span>Limbu community </span>in Nepal, Sikkim, Darjeeling hills and North-East India.</h2>
                <div ref={aboutRef} className={`${'largeImage'} ${aboutSectionIsVisible ? "moveUp" : "largeImage"}`} style={{backgroundImage: `url(${Background2})`}}></div>
                <h2>The Chyabrung also called "Ke or Kay" in Limbu language is a traditional hollow log drum of the Limbu community.</h2>
                
                <div className="genderInfo">
                    <div className="flexColumn">
                        <image style={{backgroundImage: `url(${Boys})`}}></image>
                        <p>
                            <h2><span>MALE </span> DANCERS</h2>
                            The Chyabrung drum is carried and played by the male dancers. Creating rhythmic beat, the dancers synchronize their foot movements with the chyabrung beat and dance in a circle formation.
                        </p>
                    </div>

                    <div className="flexColumn">
                        <image style={{backgroundImage: `url(${Girls})`}}></image>
                        <p>
                            <h2><span>FEMALE </span>DANCERS</h2>
                            Synchronizing their footsteps together, while gently and elegantly performing smooth hands movement, the female dancers joins the male dancers. Typically, the girls are on the left/behind of the boys dancers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="splitSection">
                <div className="flex">
                    <h3>The <span>only music</span> is the <span>rhythmic beating</span> of the Chyabrung.</h3>
                    <image style={{backgroundImage: `url(${ChyabrungRythem})`}}></image>
                </div>

                <div className="flex">
                    <h3>Dancers execute <span>synchronized</span> and <span>complicated</span> foot work.</h3>
                    <image style={{backgroundImage: `url(${complexFoot})`}}></image>
                </div>

                <div className="flex">
                    <h3>...depicting graceful <span>movements</span> of <span>wild animals.</span></h3>
                    <image style={{backgroundImage: `url(${wild})`}}></image>
                </div>

                <div className="flex">
                    <h3>And countless <span>varieties</span> of flexible and energetic <span>foot movements.</span></h3>
                    <image style={{backgroundImage: `url(${flexFoot})`}}></image>
                </div>
              
                <button onClick={() => navigate("/ChyabrungSteps")}>Show More</button>
    
            </section>

            <section className="sectionSplitY">
                <h2>The <span>Chyabrung</span> also called "Kay or Ke" in Limbu language is a <span>traditional drum</span> of the Limbu community. It is mainly played by the male dancers.</h2>

                <div className="flexRow">
                    <image style={{backgroundImage: `url(${strung})`}}></image>
                    <p>
                        <h2>HOW IT'S <span>HELD</span></h2>
                        The Chybarung drum is strung around the neck of the male dancers with a cord at stomach heighted.
                    </p>
                </div>

                <div className="flexRow">
                    <p>
                        <h2>HOW IT'S <span>PLAYED</span></h2>
                        The Chyabrung is played using both hands, primarily the right palm of the hand to hit the sharp skin "Chyang" and left hand to hit the base skin "Dung". 
                    </p>
                    <image style={{backgroundImage: `url(${playedHand})`}}></image>
                </div>                
                <button onClick={() => navigate("/HowItsPlayed")}>Show More</button>
            </section>



            <section className="secOverflowHidden">
                <image className="purpleBg" style={{backgroundImage: `url(${Jhympta})`}}>
                </image>
                <p className="purpleBgParahraph"> 
                    <h2><span>OTHER</span> INSTRUMENTS</h2>
                    Chyabrung is not only the instrument played.
                </p>
                <button className="madeButton" onClick={() => navigate("/Instruments")}>Show More</button>
            </section>
            
            <section className="secOverflowHidden">
                <image className="purpleBg" style={{backgroundImage: `url(${chyabrungMade})`}}></image>
                <p className="purpleBgParahraph">
                    <h2>HOW IT'S <span>MADE</span></h2>
                    Chyabrung is made of wood and different types of leather
                </p>
                <button className="madeButton" onClick={() => navigate("/HowItsMade")}>Show More</button>
            </section>


            <div className="sectionContainer">
                <sectioncurvedtop className="curvedTop">
               
                    <div className="whitebox">
                        <image style={{backgroundImage: `url(${boysClothes})`}}></image>
                        <p>Boys Clothes</p>
                    </div>
                
                </sectioncurvedtop>

                <button className="dressButton" onClick={() => navigate("/Dresses")}>Show More</button>

                <sectioncurvedbottom className="curvedBottom">

                    <div className="whitebox">
                        <image style={{backgroundImage: `url(${girlsClothes})`}}></image>
                        <p>Girls Clothes</p>
                    </div>
                    
                </sectioncurvedbottom>
            </div>


            <section className="secOverflowHidden">
                <image className="redBg" style={{backgroundImage: `url(${wedding})`}}></image>
                <p className="redBgParahraph"> 
                    <h2><span>WHEN</span> IT'S PERFORMED</h2>
                    Chyabrung is performed during Limbu festivals, wedding, events, gathering and more...
                </p>
                <button className="madeButton" onClick={() => navigate("/WhenPerformed")}>Show More</button>
            </section>

            <section className="secOverflowHidden">
                <image className="redBg" style={{backgroundImage: `url(${blessing})`}}></image>
                <p className="redBgParahraph"> 
                    <h2>WHY IT'S <span>IMPORTANT</span></h2>
                    Chyabrung is not just a dance performance for entertainment... its blessing.
                </p>
                <button className="madeButton" onClick={() => navigate("/WhyImportant")}>Show More</button>
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