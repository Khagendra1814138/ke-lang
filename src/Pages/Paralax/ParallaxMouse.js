import React from "react";

import "./ParallaxMouse.css";

//Images Imports
import Background from "../../Images/kelangBackground.jpg";
// import Background2 from "../../Images/kelangBackground2.jpg";
import Mountain2 from "../../Images/mt2.png";
import Pathibhara from "../../Images/Pathibhara.png";
import Guphapokhari from "../../Images/Guphapokhari.png";
import Clung from "../../Images/cholung2.png";
import Illam from "../../Images/Illam.png";
import Stat from "../../Images/statue.png";

function ParallaxMouse() {

  // const parallax_el = document.querySelectorAll(".parallax-wrap *");

  // let xValue = 0, yValue = 0;
  // let rotateDegree = 0;

  // function update(curserPosition) {
  //   parallax_el.forEach(el => {

  //     let speedx = el.getAttribute("speedx");
  //     let speedy = el.getAttribute("speedy");
  //     let speedz = el.getAttribute("speedz");
  //     let rotateSpeed = el.getAttribute("rotation");

  //     let isInLeft = 
  //     parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

  //     let zValue = 
  //     (curserPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
      

  //     el.style.transform = `
  //     translateX(${-xValue * speedx}px) 
  //     rotateY(${rotateDegree * rotateSpeed * 2}deg) 
  //     translateY(${yValue * speedy}px)
  //     perspective(2300px) translateZ(${zValue * speedz}px
  //     `;
  //   })
  // }

  // update(0);

  // window.addEventListener("mousemove", (e) =>{
  //   xValue = e.clientX - window.innerWidth / 2;
  //   yValue = e.clientY - window.innerHeight / 2;

  //   rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  //   update(e.clientX);
  // });


  // <section>
  //   <div class="parallax-wrap">
  //     <div className="vignette"></div>
  //     <div className="backgroundLayer0" speedx="0.3" speedy="0.38" speedz="0" rotation="0" style={{backgroundImage: `url(${Background})`}}></div>
      
  //     <h2 value="0">Ke Lang के लङ्ग</h2>
      
  //     <div className="PhaktanglungLayer1" speedx="0.27" speedy="0.32" speedz="0.15" rotation="0.2" style={{backgroundImage: `url(${Mountain2})`}}></div>
  //     <div className="IllamLayer2" speedx="0.157" speedy="0.29" speedz="0.05" rotation="0.2" style={{backgroundImage: `url(${Illam})`}}></div>
  //     <div className="CholungLayer3" speedx="0.1" speedy="0.25" speedz="0.13" rotation="0.2" style={{backgroundImage: `url(${Clung})`}}></div>
  //     <div className="ChyabrungLayer4" speedx="0.3" speedy="0.11" speedz="0.32" rotation="0.2" style={{backgroundImage: `url(${Stat})`}}></div>
  //   </div>
  // </section>



  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".parallax-wrap *").forEach((element) => {

      const rotateSpeed = element.getAttribute("rotation");
      const position = element.getAttribute("value");

      const xValue = (window.innerWidth - event.pageX * position) / 200;
      const yValue = (window.innerHeight - event.pageY * position) / 200;

      const rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      //This is for the Z feature
      const isInLeft = parseFloat(getComputedStyle(element).left) < window.innerWidth / 2 ? 1 : -1;
      const zValue = event.pageX - parseFloat(getComputedStyle(element).left) * isInLeft * 1;

      element.style.transform = `
        translateX(${xValue}px) 
        rotateY(${rotateDegree * rotateSpeed}deg) 
        translateY(${yValue}px) 
        perspective(17000px) translateZ(${zValue}px)
      `;
    });
  }

  return (
    <div className="ParallaxMouse">
      <div class="parallax-wrap">
        <div className="vignette"></div>
        <div className="backgroundLayer0" value="2" rotation="0" style={{backgroundImage: `url(${Background})`}}></div>

        <div className="PhaktanglungLayer1" value="3" rotation="0.2" style={{backgroundImage: `url(${Mountain2})`}}></div>
        <div className="Pathibhara" value="4" rotation="0.2" style={{backgroundImage: `url(${Pathibhara})`}}></div>
        <div className="Guphapokhari" value="-3" rotation="0.2" style={{backgroundImage: `url(${Guphapokhari})`}}></div>
        <div className="IllamLayer2" value="-6" rotation="0.5" style={{backgroundImage: `url(${Illam})`}}></div>
        <div className="CholungLayer3" value="-2" rotation="0.3" style={{backgroundImage: `url(${Clung})`}}></div>
        <div className="ChyabrungLayer4" value="-10" rotation="0.2" style={{backgroundImage: `url(${Stat})`}}></div>
      </div>

      {/* <h1>Ke Lang</h1> */}
      
      {/* <section>

      </section>

      <section className="fixed" style={{backgroundImage: `url(${Background2})`}}>
        <h1>Hello</h1>
      </section>

      <section>

      </section> */}
    </div>
  );
}
    
export default ParallaxMouse;