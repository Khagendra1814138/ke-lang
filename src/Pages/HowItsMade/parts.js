import React from "react";

import "./chyabrungMade3x2Grid.css";

import frame from "../../Images/construction/parts/frame.jpg";
import huksagey from "../../Images/construction/parts/huksagey.jpg";
import singsagay from "../../Images/construction/parts/singsagay.jpg";
import chabi from "../../Images/construction/parts/chabi.jpg";
import leatherRope from "../../Images/construction/parts/leatherRope.jpg";


export const Parts = () => {
    return (
        <div className="grid3x2">
            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${frame})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>KHAMARI</span> WOOD</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        “Kamari” or “hongsing” (Gmelina arborea) is a plant species that is traditionally used to make the chyabrung main hollow frame. This specific wood is used because the wood is more resistant to wood termites and produces good quality resound.                  
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${huksagey})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>COW</span>/<span>OX</span>/<span>YAK</span> HIDE</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        Cow, OX or even Yak hide is used to make the “singsagay” side of the chyabrung. The thick leather is used as it strong and can produce flat bass sound “Dung”. Also, its used to make the leather rope to strech the chyabrung.                   
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${singsagay})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>GOAT</span>/<span>DEER</span> HIDE</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        Fully grown adult goat skin is used to make the “huksagay” side of the chyabrung. The thin leather is used because it produces sharp treble “chyang” sound. Rarely, deer skin are also used like the goat skin.                   
                    </p>
                </div>
            </div>




            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${chabi})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>PANGRA</span> BEANS</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        Pangra beans (Entada phaseoloides or St. Thomas’ bean) is used to make the tip of the chabi (key). The hard and rounded shell of the beans provides perfect surface for the “huksagay” skin to touch and vibrate when struck.                    
                    </p>
                </div>
            </div>

            <div className="cardWrapper">
                <div className="imageFrame mediumPurple">
                    <image className="rounedBImage" style={{backgroundImage: `url(${leatherRope})`}}></image> 
                </div>
                
                <div className="informationWrapper">
                    <h2><span>NYLON</span> ROPE</h2>
                    <line className="mediumPurple"></line>
                    <p>
                        Similar to the leather rope made of cow or ox hide, nylon ropes are also used to stretch the “huksagay” and “singsagay” leather. Although, not traditional, recently this method has be adapted as nylon rope are easier to work with.                     
                    </p>
                </div>
            </div>
        </div>
    );
}