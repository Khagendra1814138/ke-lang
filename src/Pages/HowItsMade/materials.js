import React from "react";

import "./chyabrungMade3x2Grid.css";

import khamari from "../../Images/construction/materials/khamari.jpg";
import cowHide from "../../Images/construction/materials/cowHide.jpg";
import goatHide from "../../Images/construction/materials/goatHide.jpg";
import pangraBeans from "../../Images/construction/materials/pangraBeans.jpg";
import nyloneRope from "../../Images/construction/materials/nyloneRope.jpg";
import bambooStick from "../../Images/construction/materials/bambooStick.jpg";

export const Materials = () =>{
    return (
        <div className="grid3x2">
            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedTLBRImage" style={{backgroundImage: `url(${khamari})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Khamari</span> Wood</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        “Kamari” or “hongsing” (Gmelina arborea) is a plant species that is traditionally used to make the chyabrung main hollow frame. This specific wood is used because the wood is more resistant to wood termites and produces good quality resound.                  
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedTLBRImage" style={{backgroundImage: `url(${cowHide})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Cow</span>/<span>Ox</span>/<span>Yak</span> Hide</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        Cow, OX or even Yak hide is used to make the “singsagay” side of the chyabrung. The thick leather is used as it strong and can produce flat bass sound “Dung”. Also, its used to make the leather rope to strech the chyabrung.                   
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedTLBRImage" style={{backgroundImage: `url(${goatHide})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Goat</span>/<span>Deer</span> Hide</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        Fully grown adult goat skin is used to make the “huksagay” side of the chyabrung. The thin leather is used because it produces sharp treble “chyang” sound. Rarely, deer skin are also used like the goat skin.                   
                    </p>
                </div>
            </div>




            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBLTRImage" style={{backgroundImage: `url(${pangraBeans})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Pangra</span> Beans</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        Pangra beans (Entada phaseoloides or St. Thomas’ bean) is used to make the tip of the chabi (key). The hard and rounded shell of the beans provides perfect surface for the “huksagay” skin to touch and vibrate when struck.                    
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBLTRImage" style={{backgroundImage: `url(${nyloneRope})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Nylon</span> Rope</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        Similar to the leather rope made of cow or ox hide, nylon ropes are also used to stretch the “huksagay” and “singsagay” leather. Although, not traditional, recently this method has be adapted as nylon rope are easier to work with.                     
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBLTRImage" style={{backgroundImage: `url(${bambooStick})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Bamboo</span> Stick & Ring</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        Baboo stick is used to hold the pangra beans and make the key of the chyabrung. Also, 4 bamboo rings are used to wrap, tight and hold the skins when making the rounded shape “huksagay” and “singsagay” base.                    
                    </p>
                </div>
            </div>
        </div>
    );
}