import React from "react";

import "./Clothes.css";

import { BoysClothingGallary } from "./dressGallery";
import { GirlsClothingGallary } from "./dressGallery";
import { Jeweleries } from "./jewelries";
//Images Imports
import DkahaMade from "../../Images/clothing/dkahaMade.png";

export const ClothesAndAccessoriesPage = () => {
    return (
        <div className="clothesAndAccessoriesPage">
            <hero className="heroWrapper">
                <div className="heroInformationFrame">
                    <h1>CLOTHES AND ACCESSORIES</h1>
                </div>

                <div className="heroeCurvedWrapper">
                    <div className="heroeCurvedBottom"></div>
                </div>
            </hero>




            <section className="sectionDhakaWrapper lightBrown">
                <h1>LIMBU <span>DKAHA</span> FABRIC</h1>
                <div className="informationWrapper">
                    <h3>
                        The Dhaka (originally called Thaka) is a traditional hand woven fabric of the Limbu people. The fabric is made of cotton with numerous colors and infinite amount of patterns featuring geometric shapes. Loom made of bamboo and wood is used to make the fabric. The art of weaving dhaka is taught and passed to female descendents by one generation to another.                    
                    </h3>
                </div>

                <div className="flexRowWrapper">
                    <div className="dhakaMadeImage darkBrown">
                        <image style={{backgroundImage: `url(${DkahaMade})`}}></image>
                    </div>
                 
                    <div className="informationWrapper">
                        <h2><span>HOW</span> ITS MADE</h2>
                        <line className="darkBrown"></line>
                        <p>
                            The designs are all very different and the weaver usually does it by eye, creating the patterns from small bobbins of yarn pulled through the loom warp, using many different colours, which is very labour intensive. The handwoven patterns all have an individual touch, reflecting the creativity and skill of the weaver.                        
                        </p>
                    </div>
                </div>

                <h1>TYPICAL LIMBU DHAKA <span>PATTERNS</span></h1>
                <div className="flexRowWrapperCenter">
                    <image className="longerImage"></image>
                    <image></image>
                    <image></image>

                    <image></image>
                    <image className="longerImage"></image>
                    <image></image>

                    <image></image>
                    <image></image>
                    <image className="longerImage"></image>
                </div>
            </section>



            <div className="sectionVideoWrapper">
                <div className="videoCircleWrapper">
                    <div className="videoCircleTop brownRoundColor"></div>
                </div>
                    <div className="videoFrame lightBrownVideoFrame">
                        <div className="videoInformation">
                            <h2 className="">DHAKA WEAVING VIDEO</h2>
                            <line className="darkBrown"></line>
                            <p>
                                The video shows how a typical Limbu Dhaka farbic are woven by skilled weaver.
                            </p>
                        </div>
                        <div className="video"></div>
                    </div>
                <div className="videoCircleWrapper">
                    <div className="videoCircleBottom brownRoundColor"></div>
                </div>
            </div>



            <section className="sectionBoysClothingWrapper lightBrown">
                <h1>BOYS <span>DRESS</span></h1>

                <div className="informationWrapper">
                    <h3>
                        The boys are dressed in a colorful Dhaka pattern or plain clothes. The main clothes usually worn by the boys are dhaka topi (hat), daura (upper garment), surual (trouser), and a waistcoat with blazer coat.                    
                    </h3>
                </div>

                <div className="clothingFrame">
                    <div className="row1">
                        <image className="dhakatopi darkBrown"></image>
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
                                <h2><span>Daura surual</span></h2>
                                <line className="darkBrown"></line>
                                <p>
                                    Daura is a long, loose shirt with V-neck and full sleeves that comes down slightly over the knee. It wraps around the body and is fastened with four laces. the Suruwal is the trouser. Daura surual is either worn in plain colour or with little Dhaka touch.                                
                                </p>
                            </div>
                            <image className="darkBrown"></image>
                        </div>

                        <image className="longCenterImage darkBrown"></image>

                        <div className="flexColumnWrapper"> 
                            <image className="darkBrown"></image>
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
                        <image className="dhakatopi darkBrown"></image>

                        <div className="informationWrapper">
                            <h2><span>Juwari Coat</span></h2>
                            <line className="darkBrown"></line>
                            <p>
                                Juwari Coat is a hip-length tailored coat with mandarin collar. It is worn over the daura surual. The Juwari coat is either plain colour or is made of dhaka fabric.                            
                            </p>
                        </div>
                        <image className="dhakatopi darkBrown"></image>
                    </div>
                </div>
            </section>

            
            <div className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop brownRoundColor"></div>
                </div>  
                <BoysClothingGallary/>
                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom brownRoundColor"></div>
                </div>
            </div>


            <section className="sectionBoysClothingWrapper lightBrown">
                <h1>GIRLS <span>DRESS</span></h1>
                <div className="informationWrapper">
                    <h3>
                        Typically, most of the kelang teams wears gunyo, chaubandi cholo with patuka made of dhaka patterns.The girls also wear Mekli, which is a limbu traditional dress. Sometimes, sarees with blous or cholo with dhaka touch is also word although this is not a traditional Limbu dress.                     
                    </h3>
                </div>

                <div className="clothingFrame">
                    <div className="row1">
                        <image className="dhakatopi darkBrown"></image>
                        <div className="informationWrapper">
                            <h2><span>Gunyu & Cholo</span></h2>
                            <line className="darkBrown"></line>
                            <p>
                                Gunyu & Chaybandi Cholo is a traditional Nepali attire which has a blouse like top and Skirt. Gunyu is a draped rectangular fabric that wraps around the lower body like a skirt and is secured with a patuka. Chaubandi Cholo is a full sleeved blouse that has unique way of wrapping around the upper body and is tied at four different points.                            
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
                            <image className="darkBrown"></image>
                        </div>

                        <image className="longCenterImage darkBrown"></image>

                        <div className="flexColumnWrapper"> 
                            <image className="darkBrown"></image>
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
                        <image className="dhakatopi darkBrown"></image>

                        <div className="informationWrapper">
                            <h2><span>Lachha Dori</span></h2>
                            <line className="darkBrown"></line>
                            <p>
                                Lachha Dori is a hair braid extension. It is a tassel made from threads that you can divide and braid. At the end of the tassel are various designs of aligned beads, small circular mirrors patched with different colored threads and patterns. Limbu design lachha has Silam Sakma.                            
                            </p>
                        </div>
                        <image className="dhakatopi darkBrown"></image>
                    </div>
                </div>
            </section>

            <div className="roundedSectionWrapper">
                <div className="roundedShapeWrapper">
                    <div className="circleShapeTop brownRoundColor"></div>
                </div>  
                <GirlsClothingGallary/>
                <div className="roundedShapeWrapper"> 
                    <div className="circleShapeBottom brownRoundColor"></div>
                </div>
            </div>

            
            <section className="sectionJewelriesWrapper lightBrown">
                <h1>GIRLS <span>JEWELRIES</span></h1>

                <div className="informationWrapper">
                    <h3>
                        Typically, most of the kelang teams wears gunyo, chaubandi cholo with patuka made of dhaka patterns.The girls also wear Mekli, which is a limbu traditional dress. Sometimes, sarees with blous or cholo with dhaka touch is also word although this is not a traditional Limbu dress.                     
                    </h3>
                </div>
                <Jeweleries/>
            </section>

           
        </div>
    );
}