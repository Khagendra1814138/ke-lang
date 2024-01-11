import React from "react";

import "./makingKeGallery.css";

import cRow1a from "../../Images/construction/cRow1a.jpg";
import cRow1b from "../../Images/construction/cRow1b.jpg";
import cRow1c from "../../Images/construction/cRow1c.jpg";
import cRow2a from "../../Images/construction/cRow2a.jpg";
import cRow2b from "../../Images/construction/cRow2b.jpg";
import cRow2c from "../../Images/construction/cRow2c.jpg";
import cRow3a from "../../Images/construction/cRow3a.jpg";
import cRow3b from "../../Images/construction/cRow3b.jpg";
import cRow3c from "../../Images/construction/cRow3c.jpg";

export const MakingKeGallery = () => {
    return (
        <div className="makingKeGallaryFrame purpleRoundedColor2">
            <div className="KeGallaryRow">
                <image className="rowLargeImage" style={{backgroundImage: `url(${cRow1a})`}}></image>
                <image style={{backgroundImage: `url(${cRow1b})`}}></image>
                <image style={{backgroundImage: `url(${cRow1c})`}}></image>
            </div>


            <div className="KeGallaryRow">
                <image style={{backgroundImage: `url(${cRow2a})`}}></image>
                <image className="rowLargeImage" style={{backgroundImage: `url(${cRow2b})`}}></image>
                <image style={{backgroundImage: `url(${cRow2c})`}}></image>
            </div>


            <div className="KeGallaryRow">
                <image style={{backgroundImage: `url(${cRow3a})`}}></image>
                <image style={{backgroundImage: `url(${cRow3b})`}}></image>
                <image className="rowLargeImage" style={{backgroundImage: `url(${cRow3c})`}}></image>
            </div>
        </div>
    );
}