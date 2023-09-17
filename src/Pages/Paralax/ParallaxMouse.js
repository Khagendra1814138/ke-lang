import React from "react";

import "./ParallaxMouse.css";

import Background from "../../Images/kelangBackground.jpg";
import Background2 from "../../Images/kelangBackground2.jpg";
import Mountain2 from "../../Images/mt2.png";
import Clung from "../../Images/cholung.png";
import Illam from "../../Images/Illam.png";
import Stat from "../../Images/statue.png";

function ParallaxMouse() {

  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".parallax-wrap *").forEach((shift) => {

      const rotateSpeed = shift.dataset.rotation;

      const position = shift.getAttribute("value");
      const xValue = (window.innerWidth - event.pageX * position) / 200;
      const yValue = (window.innerHeight - event.pageY * position) / 200;

      const rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      //This is for the Z feature
      const isInLeft = parseFloat(getComputedStyle(shift).left) < window.innerWidth / 2 ? 1 : -1;
      const zValue = event.pageX - parseFloat(getComputedStyle(shift).left) * isInLeft * 0.1;

      shift.style.transform = 
      `
        translateX(${xValue}px) 
        rotateY(${rotateDegree * rotateSpeed}deg) 
        translateY(${yValue}px) 
        perspective(17000px) translateZ(${zValue}px)
      `;
    });
  }

  return (
    <div className="ParallaxMouse">
        
      <section>
        <div class="parallax-wrap">
          <div className="vignette"></div>
          <div className="back" value="2" data-rotation="0" style={{backgroundImage: `url(${Background})`}}></div>
          <h2 value="0">Parallax effect</h2>
          <div className="mtn" value="-2" data-rotation="0.2" style={{backgroundImage: `url(${Mountain2})`}}></div>
          <div className="mtn3" value="-6" data-rotation="0.2" style={{backgroundImage: `url(${Illam})`}}></div>
          <div className="mtn2" value="-2" data-rotation="0.2" style={{backgroundImage: `url(${Clung})`}}></div>
          <div className="stat" value="-10" data-rotation="0.2" style={{backgroundImage: `url(${Stat})`}}></div>
        </div>

      </section>

      <section>

      </section>

      <section className="fixed" style={{backgroundImage: `url(${Background2})`}}>
        <h1>Hello</h1>
      </section>

      <section>

      </section>

    </div>
  );
}
    
export default ParallaxMouse;