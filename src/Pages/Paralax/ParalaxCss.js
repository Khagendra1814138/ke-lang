import React from "react";

import "./ParalaxCss.css";

function ParalaxCss() {
    return (
        <div className="ParalaxCss">
            <section className="paralaxWrapper"> Css paralax
                <div className="paralaxGroup introScreen" id="intro">Start</div>


                <div className="paralaxGroup" id="group1">
                    <div className="paralaxLayer baseLayer">Base Layer</div>
                    <div className="paralaxLayer midLayer">Mid Layer</div>
                </div>

                <div className="paralaxGroup" id="group2">
                    <div className="paralaxLayer midLayer">Mid Layer</div>
                    <div className="paralaxLayer topLayer">Top Layer</div>
                </div>
            

                <div className="paralaxGroup outroScreen" id="outro">Finish</div>
            </section>
        </div>
      );
    }
    
export default ParalaxCss;