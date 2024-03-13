import React from "react";

import './clothesAccessories.css';

import gunyuCholo from '../../Images/clothing/gunyuCholo.jpg';
import mekli from '../../Images/clothing/mekli.jpg';
import sareeBlous from '../../Images/clothing/sareeBlous.jpg';
import femaleDress from '../../Images/clothing/femaleDress.png';
import patuka from '../../Images/clothing/patuka.jpg';
import lacchaDori from '../../Images/clothing/lacchaDori.jpg';

export const GirlsClothes = () => {
    return (
        <div className="clothingFrame">
            <div className="row1">
                <div className="imageFrame darkBrown">
                    <image className="roundTopImage" style={{backgroundImage: `url(${gunyuCholo})`}}></image>
                </div>
                <div className="informationWrapper">
                    <h2><span>Gunyu & Cholo</span></h2>
                    <line className="darkBrown"></line>
                    <p>
                        Gunyu & Chaybandi Cholo is a traditional Nepali attire which has a blouse like top with full sleeves and Skirt. Gunyu is a draped rectangular fabric that wraps around the lower body like a skirt and is secured with a patuka. Chaubandi Cholo is a full sleeved blouse that has unique way of wrapping around the upper body and is tied at four different points.                            
                    </p>
                </div>
            </div>

            <div className="row2">
                <div className="flexColumnWrapper">
                    <div className="informationWrapper">
                        <h2><span>Mekli</span></h2>
                        <line className="darkBrown"></line>
                        <p>
                            Mekhli is the traditional dress for the Limbu women. It is a long dress worn with a horizontal strip of cloth and a collars crossing over or in a V-neck style with a cloth belt slight above the stomach.                               
                        </p>
                    </div>
                    <div className="imageFrame darkBrown">
                        <image className="roundLeftImage" style={{backgroundImage: `url(${mekli})`}}></image>
                    </div>
                </div>

                <image className="longCenterImage darkBrown" style={{backgroundImage: `url(${femaleDress})`}}></image>

                <div id="flexWrap" className="flexColumnWrapper"> 
                    <div className="imageFrame darkBrown">
                        <image className="roundRightImage" style={{backgroundImage: `url(${sareeBlous})`}}></image>
                    </div>
                    <div className="informationWrapper">
                        <h2><span>Saree & Blous</span></h2>
                        <line className="darkBrown"></line>
                        <p>
                            The sari is a long piece of cloth arranged around the body as a robe. One end attached to the waist and wrapped around the lower body like a skirt, while the other end rests over the shoulder as a shawl. Dhaka Saree is usually worn with a Dkaha blouse.                                
                        </p>
                    </div>
                </div>
            </div>

            <div className="row3">
                <div className="informationWrapper">
                    <h2><span>Patuka</span></h2>
                    <line className="darkBrown"></line>
                    <p>
                        Patuka is a long piece of cloth that is worn by both women and men around their waist as a belt. Patuka is used to wrap and hold the Gunyu skirt or any lower body garments. The common patuka colour are yellow, white or orange color.                            
                    </p>
                </div>
                <div className="imageFrame darkBrown">
                    <image className="roundBottomImage" style={{backgroundImage: `url(${patuka})`}}></image>
                </div>

                <div className="informationWrapper">
                    <h2><span>Lachha Dori</span></h2>
                    <line className="darkBrown"></line>
                    <p>
                        Lachha Dori is a hair braid extension. It is a tassel made from threads that you can divide and braid. At the end of the tassel are various designs of aligned beads, small circular mirrors patched with different colored threads and patterns. Limbu design lachha has Silam Sakma.                            
                    </p>
                </div>
                <div className="imageFrame darkBrown">
                    <image className="roundBottomImage" style={{backgroundImage: `url(${lacchaDori})`}}></image>
                </div>
            </div>
        </div>
    );
}