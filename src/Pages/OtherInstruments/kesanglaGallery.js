import React from "react";

import "./kesanglaGallery.css";

import kCol1a from "../../Images/otherInstruments/keSangla/kCol1a.jpg";
import kCol1b from "../../Images/otherInstruments/keSangla/kCol1b.jpg";
import kCol1c from "../../Images/otherInstruments/keSangla/kCol1c.jpg";
import kCol2a from "../../Images/otherInstruments/keSangla/kCol2a.jpg";
import kCol2b from "../../Images/otherInstruments/keSangla/kCol2b.jpg";
import kCol2c from "../../Images/otherInstruments/keSangla/kCol2c.jpg";
import kCol3a from "../../Images/otherInstruments/keSangla/kCol3a.jpg";
import kCol3b from "../../Images/otherInstruments/keSangla/kCol3b.jpg";
import kCol3c from "../../Images/otherInstruments/keSangla/kCol3c.jpg";

export const KesanglaGallery = () =>{
    return (
        <div className="kesanglaGalleryFrame greenRoundColor">
            <div className="kesanglaGallaryColumn">
                <image className="mediumImage" style={{backgroundImage: `url(${kCol1a})`}}></image>
                <image style={{backgroundImage: `url(${kCol1b})`}}></image>
                <image style={{backgroundImage: `url(${kCol1c})`}}></image>
            </div>
    

            <div className="kesanglaGallaryColumn">
                <image style={{backgroundImage: `url(${kCol2a})`}}></image>
                <image className="middleLargeImage" style={{backgroundImage: `url(${kCol2b})`}}></image>
                <image style={{backgroundImage: `url(${kCol2c})`}}></image>
            </div>


            <div className="kesanglaGallaryColumn">
                <image style={{backgroundImage: `url(${kCol3a})`}}></image>
                <image style={{backgroundImage: `url(${kCol3b})`}}></image>
                <image className="mediumImage" style={{backgroundImage: `url(${kCol3c})`}}></image>
            </div>
        </div>
    );
}