import {React, useRef} from "react";
import { useNavigate } from "react-router-dom";

import { ArrowDown } from 'react-feather';

import "./Steps.css";
import "../../Styles/roundedSection.css"

//Images Imports
import basicSteps from "../../Images/stepsImages/basicSteps.png";
import animalSteps from "../../Images/stepsImages/animalSteps.png";
import Lamlok from "../../Images/stepsImages/lamlok.jpg";
import Circle from "../../Images/stepsImages/circle.jpg";
import Kassaropa from "../../Images/stepsImages/kassaropa.jpg";
import BasicAnimals from "../../Images/stepsImages/basic&animals.jpg";
import FastEnergetic from "../../Images/stepsImages/fast&Energetic.jpg";
import gesturesBlessing from "../../Images/stepsImages/gesturesBlessing.jpg";

import Lizard from "../../Images/stepsImages/lizard.png";
import Pegion from "../../Images/stepsImages/pegions.png";
import Stag from "../../Images/stepsImages/stag.png";

export const ChyabrungStepsPage = () => {
    const navigate = useNavigate();

    const regionalStepsSection = useRef(null);
    const animalStepsSection = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
    };

    return (
        <div className="chyabrungStepsPage">
            <hero className="heroWrapper">
                <div className="heroInformationFrame">
                    <h1>CHYABRUNG DANCE STEPS</h1>
                </div>
                <div className="heroeCurvedWrapper">
                    <div className="heroeCurvedBottom"></div>
                </div>
            </hero>

            <section className="sectionStepsTypes lightTealGreen">
                <h1>CHYABRUNG STEPS <span>TYPES</span></h1>
                <div className="informationWrapper">
                    <h3>
                        According to the Kelang elders, there are more than 200+ unique chyabrung steps. The chyabrung steps are categorized into two different sections. The basic human steps, which are combination of flexible foot movements and the animal steps.
                    </h3>
                </div>

                <div className="flexRowWrapper">
                    <div className="flexColumnWrapper">
                        <image style={{backgroundImage: `url(${basicSteps})`}}></image>
                        <div className="informationWrapper">
                            <h2>BASIC <span>STEP'S</span></h2>
                            <line className="mediumTealGreen"></line>
                            <p>                       
                                There are basic steps that was created by the first Ke dancers at the beginning. These steps are called “kassarokpa” and are the fundamental steps that allows the dancers to move and turn in any direction. Its like the alphabet of chyabrung dance.
                            </p>
                        </div>
                        <button onClick={() => scrollToSection(regionalStepsSection)}>Get Started<ArrowDown size={40}/></button>
                    </div>

                    <div className="flexColumnWrapper">
                        <image style={{backgroundImage: `url(${animalSteps})`}}></image>
                        <div className="informationWrapper">
                            <h2>ANIMALS <span>STEP'S</span></h2>
                            <line className="mediumTealGreen"></line>
                            <p>                       
                                There are basic steps that was created by the first Ke dancers at the beginning. These steps are called “kassarokpa” and are the fundamental steps that allows the dancers to move and turn in any direction. Its like the alphabet of chyabrung dance.
                            </p>
                        </div>
                        <button onClick={() => scrollToSection(animalStepsSection)}>Get Started<ArrowDown size={40}/></button>
                    </div>
                </div>
            </section>
            


            <section className="danceStructure lightTealGreen">
                <h1>CHYABRUNG DANCE <span>STRUCTURE</span></h1>
                <div className="informationWrapper">
                    <h3>
                        Chyabrung dance is a very well structured dance. There are several different phases and these phases are organized in an order from start to finish. Typically, these dance phases/order are followed by every regions as a rule/guide.                     
                    </h3>
                </div>

                <div className="danceStructure3x2Grid">
                    <div className="cardWrapper">
                        <div className="rounedTopImageWrapper darkTealGreen">
                           <image style={{backgroundImage: `url(${Lamlok})`}}></image> 
                        </div>
                        
                        <div className="informationWrapper">
                            <h2><span>1. </span>Lamlok</h2>
                            <line className="mediumTealGreen"></line>
                            <p>
                                It start with the basic walking step. These steps are typically 3 - 4 steps. The dancers slowly approaches the dancing area in a straight line formation using these step.                    
                            </p>
                        </div>
                    </div>

                    <div className="cardWrapper">
                        <div className="rounedTopImageWrapper darkTealGreen">
                           <image style={{backgroundImage: `url(${Circle})`}}></image> 
                        </div>
                        
                        <div className="informationWrapper">
                            <h2><span>2. </span>Circle Formation</h2>
                            <line className="mediumTealGreen"></line>
                            <p>
                                Once the dancers have entered the dancing area, a circle formation is created using the basic 3 steps. Whole chyabrung dance is performed on a circular formation.                            
                            </p>
                        </div>
                    </div>

                    <div className="cardWrapper">
                        <div className="rounedTopImageWrapper darkTealGreen">
                           <image style={{backgroundImage: `url(${Kassaropa})`}}></image> 
                        </div>
                        
                        <div className="informationWrapper">
                            <h2><span>3. </span>Kassaropa</h2>
                            <line className="mediumTealGreen"></line>
                            <p>
                                After forming a circle, the dancers start with the basic kassaropa step. Typically this step is repeated in 4-5 times or more.
                            </p>
                        </div>
                    </div>
               

               
                    <div className="cardWrapper">
                        <div className="rounedTopImageWrapper darkTealGreen">
                           <image style={{backgroundImage: `url(${BasicAnimals})`}}></image> 
                        </div>
                        
                        <div className="informationWrapper">
                            <h2><span>4. </span>Basic & Animals</h2>
                            <line className="mediumTealGreen"></line>
                            <p>
                                The dancers perform the basic steps and the animals steps. There is no order to do one before the other. Typically, most kelang groups combines these steps together.
                            </p>
                        </div>
                    </div>

                    <div className="cardWrapper">
                        <div className="rounedTopImageWrapper darkTealGreen">
                           <image style={{backgroundImage: `url(${FastEnergetic})`}}></image> 
                        </div>
                        
                        <div className="informationWrapper">
                            <h2><span>5. </span>Energetic steps</h2>
                            <line className="mediumTealGreen"></line>
                            <p>
                                Once all the basic and animals steps are performed, the dancers performs an energetic fast step. This fast step are normally kassarokpa or basic steps but performed much faster with high energy.
                            </p>
                        </div>
                    </div>

                    <div className="cardWrapper">
                        <div className="rounedTopImageWrapper darkTealGreen">
                           <image style={{backgroundImage: `url(${gesturesBlessing})`}}></image> 
                        </div>
                        
                        <div className="informationWrapper">
                            <h2><span>6. </span>Blessing/Gesure</h2>
                            <line className="mediumTealGreen"></line>
                            <p>
                                During the final phase of the dance, the dancers performs a repetitive basic steps, but, the dancers also uses their hand gestures to bless the audience, show their fatigue and request for foods and drinks.                            
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <div ref={regionalStepsSection} className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop tealRoundedCoor"></div>
                </div>  

                <div className="regionalMapWrapper tealRoundedCoor">
                    <h1>REGIONAL BASIC STEP'S</h1>
                    <div className="informationWrapper">
                        <h3>
                            There are many different basic steps and each region have their own unique sets of steps. These sets contains between 5 to 10 or more mixture of basic and animals steps. There are some common shared steps that are danced by every regions like manglang (God Dance).
                        </h3>
                    </div>

                    <map>
                        <div className="col1 flexColumnWrapper">
                            <button onClick={() => navigate('/')}></button>
                            <button onClick={() => navigate('/')}></button>
                            <button></button>
                        </div>

                        <div className="col2 flexColumnWrapper">
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>

                        <div className="col3 flexColumnWrapper">
                            <button></button>
                        </div>
                    </map>
                </div>

                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom tealRoundedCoor"></div>
                </div>
            </div>

            <section className="animalStepsWrapper lightTealGreen">
                <h1 ref={animalStepsSection}>REGIONAL <span>ANIMALS</span> STEP'S</h1>

                <div className="informationWrapper">
                    <h3>
                        There are many countless varieties of steps inspired by wild or domesticated animals. These animals are typically native to the limbu regions. The animals steps can be categorized into five different sections. They are mammals, birds, insects, reptiles and marine animals.                        
                    </h3>
                </div>
                <div className="flexRowWrapper">
                    <image className="darkTealGreen" style={{backgroundImage: `url(${Lizard})`}}></image>
                    <image className="darkTealGreen" style={{backgroundImage: `url(${Pegion})`}}></image>
                </div>
                <div className="flexRowWrapper">
                    <image className="darkTealGreen" style={{backgroundImage: `url(${Stag})`}}></image>
                    <div className="flexColumnWrapper">
                        <div className="informationWrapper">
                            <h2><span>ANIMALS</span> STEP'S</h2>
                            <line className="mediumTealGreen"></line>
                            <p>
                                During the final phase of the dance, the dancers performs a repetitive basic steps, but, the dancers also uses their hand gestures to bless the audience, show their fatigue and request for foods and drinks.                            
                            </p>
                        </div>
                        <button> Show More</button>
                    </div>
                </div>
            </section>
{/* https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/ */}
            <nav class="navbar">
                <div class="logo">LOGO</div>

    
                <ul class="nav-links">

        
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>

            
                <div class="menu">

                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>

                    <li class="services">
                    <a href="/">Services</a>

                
                    <ul class="dropdown">
                        <li><a href="/">Dropdown 1 </a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 3</a></li>
                        <li><a href="/">Dropdown 4</a></li>
                    </ul>

                    </li>

                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact</a></li>
                </div>
                </ul>
            </nav>
        </div>
    );
};