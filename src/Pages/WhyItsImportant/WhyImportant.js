import React from "react";

import "./WhyImportant.css";

import { Chap1HorizontalScrollCarousel } from "./chapter1"
import { Chapter2 } from "./chapter2";
import { Chap3HorizontalScrollCarousel } from "./chapter3";

//Images Imports
import paintingKe from "../../Images/myth/paintingKe.jpg";
import hill from "../../Images/myth/hill.jpg";
import kelangPaint from "../../Images/myth/kelangPaint.jpg";


export const WhyImportantPage = ()=> {
  
    // const stickySection = [...document.querySelectorAll(".sticky")]

    // window.addEventListener('scroll', (e) => {
    //     for(let i=0; i < stickySection.length; i++){
    //         transfrom(stickySection[i])
    //     }
    // })

    // function transfrom(section){
    //     const offsetTop = section.parentElement.offsetTop;
    //     const scrollSection = section.querySelector('.scrollSection');
    //     let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        
    //     percentage = percentage < 0 ? 0 : percentage > 700 ? 700 : percentage;
    //     scrollSection.style.transfrom = `translate3d(${-(percentage)}vw, 0, 0)`;
    // }
    
    return (
        <div className="whyImportantPage">
            <hero className="heroWrapper">
                <div className="heroInformationFrame">
                    <h1>WHY THE KELANG IS IMPORTANT</h1>
                </div>
                <div className="heroeCurvedWrapper">
                    <div className="heroeCurvedBottom"></div>
                </div>
            </hero>

            <section className="sectionWhyImportantChap1">
                <h1>CHAPTER 1 - <span>ORIGIN</span> MYTH OF KELANG</h1>
                <div className="informationWrapper">
                    <h3>
                        The origin myth of the kelang dates back to the ancient times, during the start of human civilization, when the almighty Tagera Ningwaphumang created earth and humans. The story of kelang starts with two siblings, a brother “Kesingen” and a sister “Khappura”.                    
                    </h3>
                </div>
                <div className="largeImage" style={{backgroundImage: `url(${paintingKe})`}}></div>

                {/* <div className="imagesWith">
                    <div className="ba animationFloatRight" style={{backgroundImage: `url(${hill})`}}></div>
                </div> */}
            </section>

            {/* <div className="stickyParent">
                <div className="sticky">
                    <div className="scrollSection">
                        <div className="imagesss"> Image 1</div>
                        <div className="imagesss"> Image 2</div>
                        <div className="imagesss"> Image 3</div>
                        <div className="imagesss"> Image 4</div>
                        <div className="imagesss"> Image 5</div>
                        <div className="imagesss"> Image 6</div>
                        <div className="imagesss"> Image 7</div>
                        <div className="imagesss"> Image 8</div>
                    </div>
                </div>
            </div> */}

            <Chap1HorizontalScrollCarousel />

            <section className="sectionWhyImportantChap2">
                <h1>CHAPTER 2 - <span>KE DRUM</span> CREATION</h1>
                <div className="informationWrapper">
                    <h3>
                        The Myth continues from the death of the elder brother Kesamay. The kelang myth states that the ke/chyabrung drum is made from the Kesamay skin stretched and tightened around a hollow wooden log as a token of love and remembrance.                
                    </h3>
                </div>
                <div className="largeImage" style={{backgroundImage: `url(${hill})`}}></div>

                <Chapter2/>
            </section>
            
            <section className="sectionWhyImportantChap3">
                <h1>CHAPTER 3 - ORIGIN OF <span>KE-LANG</span></h1>
                <div className="informationWrapper">
                    <h3>
                        Initially, the Ke drummers did not know how to dance. They just carried the drum in their neck suspended down to the abdomen with the help of rope and roam in the jungle only playing the drum without dance any steps.                    
                    </h3>
                </div>
                <div className="largeImage" style={{backgroundImage: `url(${kelangPaint})`}}></div>
            </section>

            <Chap3HorizontalScrollCarousel/>

        </div>
    );
}