import React from "react";

import './clothesAccessories.css';

import mensClothing from '../../Images/clothing/mensClothing.png';
import dhakaTopi from '../../Images/clothing/dhakaTopi.jpg';
import dauraSurual from '../../Images/clothing/dauraSurual.jpg';
import blazerCoat from '../../Images/clothing/blazerCoat.jpg';
import juwariCoat from '../../Images/clothing/juwariCoat.jpg';
import waistCoat from '../../Images/clothing/waistCoat.jpg';

export const BoysClothes = () => {
    return (
        <div className="clothingFrame">
            <div className="row1">
                <div className="imageFrame darkBrown">
                    <image className="roundTopImage" style={{backgroundImage: `url(${dhakaTopi})`}}></image>
                </div>
                <div className="informationWrapper">
                    <h2><span>Dkaha Topi</span></h2>
                    <line className="darkBrown"></line>
                    <p>
                        Dkaha topi is a hat worn with the daura surual. The hat is made of dhaka hence the name dhaka topi. It fits tightly around the top of the forehead, with the upper portion forming a truncated cone shape, represent the mountain after the melting of the ice. Limbu dhaka topi are more colorful compared to traditional Nepali dhaka topi.                            
                    </p>
                </div>
            </div>

            <div className="row2">
                <div className="flexColumnWrapper">
                    <div className="informationWrapper">
                        <h2><span>Daura Surual</span></h2>
                        <line className="darkBrown"></line>
                        <p>
                            Daura is a long, loose shirt with V-neck and full sleeves that comes down slightly over the knee. It wraps around the body and is fastened with four laces. the Suruwal is the trouser. Daura surual is either worn in plain colour or with little Dhaka touch.                                
                        </p>
                    </div>
                    <div className="imageFrame darkBrown">
                        <image className="roundLeftImage" style={{backgroundImage: `url(${dauraSurual})`}}></image>
                    </div>
                </div>

                <image className="longCenterImage darkBrown" style={{backgroundImage: `url(${mensClothing})`}}></image>

                <div id="flexWrap" className="flexColumnWrapper"> 
                    <div className="imageFrame darkBrown">
                        <image className="roundRightImage" style={{backgroundImage: `url(${blazerCoat})`}}></image>
                    </div>
                    <div className="informationWrapper">
                        <h2><span>Blazer Coat</span></h2>
                        <line className="darkBrown"></line>
                        <p>
                            Blazer coat is worn over the daura surual and the waist coat. Dhaka coat are more popular comparing to plain colour coat in the Limbu community.                                
                        </p>
                    </div>
                </div>
            </div>

            <div className="row3">
                <div className="informationWrapper">
                    <h2><span>Wasit Coat</span></h2>
                    <line className="darkBrown"></line>
                    <p>
                        A Waistcoat is worn over  the daura sural as part of the upper body garment. The waistcoat is either plain colour like black or is made of dhaka fabric.                            
                    </p>
                </div>
                <div className="imageFrame darkBrown">
                    <image className="roundBottomImage" style={{backgroundImage: `url(${waistCoat})`}}></image>
                </div>

                <div className="informationWrapper">
                    <h2><span>Juwari Coat</span></h2>
                    <line className="darkBrown"></line>
                    <p>
                        Juwari Coat is a hip-length tailored coat with mandarin collar. It is worn over the daura surual. The Juwari coat is either plain colour or is made of dhaka fabric.                            
                    </p>
                </div>
                <div className="imageFrame darkBrown">
                    <image className="roundBottomImage" style={{backgroundImage: `url(${juwariCoat})`}}></image>
                </div>
            </div>
        </div>
    );
}