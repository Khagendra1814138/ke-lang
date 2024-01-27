import React from "react";

import "./chyabrungMade3x2Grid.css";

import frame from "../../Images/construction/parts/frame.jpg";
import huksagey from "../../Images/construction/parts/huksagey.jpg";
import singsagay from "../../Images/construction/parts/singsagay.jpg";
import chabi from "../../Images/construction/parts/chabi.jpg";
import leatherRope from "../../Images/construction/parts/leatherRope.jpg";
import matengraChabi from "../../Images/construction/parts/matengraChabi.jpg";

export const Parts = () => {
    return (
        <div className="grid3x2">
            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${frame})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Ke</span> Frame</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        The inside of the khamari log is drilled and chiseled and all the excess wood are removed to make the frame. The log will have hollow open through hole in the middle. This is a very tough and long process.                    
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${huksagey})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Huksagay</span> Skin</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        The goat or deer hide is shaved and cut in a circular shape. Then the bamboo rings are used to wrap and tight the skin into a circular lid like shape for the chyabrung hollow frame. Then around 12 holes are created around the ring in an even space in between.                    
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${singsagay})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Singsagay</span> Skin</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        The cow hide is cut in a circular shape and the bamboo ring is used to wrap and tight the skin into a circular lid like shape. Then the warped hard skin is sewed together with the bamboo ring using the cow leather rope to prevent the tough skin from slipping.                    
                    </p>
                </div>
            </div>




            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${chabi})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>"Pangra"</span> Key</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        To make the pangra “chabi”, a small hole is drilled on the side of the pangra bean. Then the bamboo stick is inserted inside the hole of the pangra bean and held together with glue and screws, making the chabi look like a lollipop.                     
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${matengraChabi})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>"Matengra"</span> Key</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        The “matengra” (Marble) key is typically found in Taplejung and Sankhuwasabha region ke drum. A circular curved frame is etched into the huksagay/”chyang” side of the ke frame to allow the marble to rest and always touch the huksagey skin when sightly tilted down due to gravity.                     </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${leatherRope})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>Leather/Nyone</span> Rope</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        To make the tough leather rope, the cow, ox or yak skin is cut between 1-1.5cm width in a very long length. Alternatively, sometimes nylon ropes are used instead of leather ropes.                    
                    </p>
                </div>
            </div>
        </div>
    );
}