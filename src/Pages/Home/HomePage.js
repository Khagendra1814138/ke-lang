import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/HomePage.css"

import ParallaxMouse from "../Paralax/ParallaxMouse";

//Images Imports
import Background2 from "../../Images/kelangBackground2.jpg";
import complexFoot from "../../Images/homeImages/foot.png";
import ChyabrungRythem from "../../Images/homeImages/onlyMusic.png";
import flexFoot from "../../Images/homeImages/flexFoot.png";
import wild from "../../Images/homeImages/wild.png";
import strung from "../../Images/homeImages/strung.png";
import playedHand from "../../Images/homeImages/playedHand.png";
import Jumpta from "../../Images/homeImages/jumpta.png";
import chyabrungMade from "../../Images/homeImages/chyabrungMade.png";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="homePage">
            
            <ParallaxMouse/>

            <section className="sectionSplitY">
                <h1>Ke Lang</h1>
                <h2>"Ke or Kay Lang", which translates to <span>chyabrung dance</span>, is the <span>traditional</span> dance of the <span>Limbu community </span>in Nepal, Sikkim, Darjeeling hills and North-East India.</h2>
                <div className="largeImage" style={{backgroundImage: `url(${Background2})`}}></div>
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
                    <h3>And countless <span>varities</span> of flexible <span>foot movements.</span></h3>
                    <image style={{backgroundImage: `url(${flexFoot})`}}></image>
                </div>
              
                <button onClick={() => navigate("/ChyabrungSteps")}>Show More</button>
    
            </section>

            <section className="sectionSplitY">
                <h2>The <span>Chyabrung</span> also called "Kay or Ke" in Limbu language is a <span>traditional drum</span> of the Limbu community. It is mainly played by the male dancers.</h2>

                <div className="flexRow">
                    <image style={{backgroundImage: `url(${strung})`}}></image>
                    <p>The drum is strung around the neck with a cord at stomach heighted</p>
                </div>

                <div className="flexRow">
                    <p>and is played using both hands, primarily the right palm of the hand.</p>
                    <image style={{backgroundImage: `url(${playedHand})`}}></image>
                </div>                
                <button onClick={() => navigate("/HowItsPlayed")}>Show More</button>
            </section>



            <section className="secOverflowHidden">
                <image className="overfl" style={{backgroundImage: `url(${Jumpta})`}}>
                </image>
                <p>Chyabrung is not only the instruements played.</p>
                <button className="madeButton" onClick={() => navigate("/Instruments")}>Show More</button>
            </section>
            
            <section className="secOverflowHidden">
                <image className="overfl" style={{backgroundImage: `url(${chyabrungMade})`}}></image>
                <p>Chyabrung is made of wood and different types of leather</p>
                <button className="madeButton" onClick={() => navigate("/HowItsMade")}>Show More</button>
            </section>


            <div className="sectionContainer">
                <sectioncurvedtop className="curvedTop">
               
                    <div className="whitebox">
                        <image>Image</image>
                        <p>Boys Clothes</p>
                    </div>
                
                </sectioncurvedtop>

                <button className="dressButton" onClick={() => navigate("/Dresses")}>Show More</button>

                <sectioncurvedbottom className="curvedBottom">

                    <div className="whitebox">
                        <image>Image</image>
                        <p>Girls Clothes</p>
                    </div>
                    
                </sectioncurvedbottom>
            </div>


            <section className="secOverflowHidden">
                <image className="overfl">Image</image>
                <p>Chyabrung is performed during events and gathering</p>
                <button className="madeButton" onClick={() => navigate("/WhenPerformed")}>Show More</button>
            </section>

            <section className="secOverflowHidden">
                <image className="overfl">Image</image>
                <p>Chyabrung is not just dance... its blessing</p>
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