import React from "react";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import "./horizontalScroll.css";

export const Chap1HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["4.7%", "-85.7%"]);
  
    return (
      <div ref={targetRef} className="framerFrame">
        <div className="framerStickyFrame">
          <motion.div style={{ x }} className="framerScrollSections">
                <div className="column1">

                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>TWO SIBLINGS <span>JEALOUSY</span></h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                There once lived a man called Kesingen along with his sister, Khappura Nellongdimma Teegenjongna, deep in a jungle. One day, Kesingen abandons his sister, leaving his alone by herself. This is because his sister was unbearably jealous of him and always treated her bother harshly.                                
                            </p>
                        </div>
                    </div>

                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2><span>DRINKING</span> THE WATER</h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                As she was exhausted and thirsty due to her prolonged walk, she rested on a mighty flat rock in the jungle. While resting on the rock, she discovered two small pools on the rock. She was delighted on seeing those two ponds and drank the water from both the pools thinking them to be the rain water accumulated on the rock. After quenching her thrust she resumed her journey.                                
                            </p>
                        </div>
                    </div>

                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2><span>MESSAGE</span> FROM THE GOD</h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                When Teegenjongna was in deep slumber, she heard an voice in her dream. The voice said, “Now you have conceived because you drank the water from the mighty rock. The water on the rock ponds was the tiger’s urine and your brother’s urine.  You will give birth to a tiger cub and a human baby.” On hearing this voice Teegenjongna was in a grip of terror and awoke in fear.                                
                            </p>
                        </div>
                    </div>

                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>TWO SIBLINGS <span>GROWING</span></h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                Kesamay always hunted the poisonous creatures like the snakes, crabs, frogs, toads, scorpions, lizards etc. while Namsamay hunted deers, bears, rabbits, stags, birds found in jungle. One day, Namsamay advised his brother not to hunt poisonous creatures. Kesamay got annoyed and threatened Namsamay saying that he would eat kill and eat Namsamay too.                                
                            </p>
                        </div>
                    </div>

                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>PREPARING THE <span>WEAPONS</span></h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                One day, Kesamay became very angry and said that he would even kill and eat his mother too. Hearing this Namsamay created bow and arrow with poison then went down the valley and climbed a “Symbol” (Bombax malabaricum) tree and waited for his brother with the weapon to guard himself. Kesamay found Namsamay whereabouts and ran straight down to the valley to kill his brother.                                
                            </p>
                        </div>
                    </div>
                </div>


                <div className="column2">
                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2><span>SERCHING</span> HER BROTHER</h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                Being left alone, all by her-self at the house started feeling lonely and frustrated. She cried a lot and thought about the ill-treatments she did to her brother and felt sorry for the same. One day she set out into the dense jungle in search of her brother. It was like searching a needle in a haystack, he could not be found. This made her gloomier than before and full of remorse.                                
                            </p>
                        </div>
                    </div>

                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2><span>END</span> OF THE SEARCH</h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                After many days of journey, Khappura Nellongdimma Teegenjongna could not get trace of Kesingen and in despair decided to settle down at a place called Munakham in Tibet, in the middle of majestic jungle. She constructed a small hut and started to live there all alone engaging herself in weaving.                                
                            </p>
                        </div>
                    </div>

                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2><span>BIRTH</span> OF TWO SONS</h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                She gave birth to twins, one tiger cub named as “Kesamay” and another human baby as “Namsamay” foretold by the voice of her dream. She gave her utmost love, care and compassion to both of her off springs. When Kesamay and Namsamay became young, they started hunting wild animals and birds and soon it became their amusement and means of their livelihood.                                
                            </p>
                        </div>
                    </div>

                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>TWO SIBLINGS <span>RIVERY</span></h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                The relationship between two brothers became bitter day by day. Kesamay became more and more furious on his brother and started hunting for him and Namsamay in order to save his life kept hiding from his sight. To save Namsamay from his furious brother, the mother would always lie to Kesamay when he asked about Namsamay whereabouts and sent him to the opposite direction.                                
                            </p>
                        </div>
                    </div>

                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2><span>DEATH</span> OF ONE SIBLING</h2>
                            <line className="darkYellow"></line>
                            <p>                       
                                Kesamay started climbing the tree and Namsamay made several attempts to shoot his brother but failed to hit him. Kesamay was reaching nearer and he only had one arrow left. With no other option Namsamay said “I surrender brother, I will jump into your mouth brother”. Hearing this Kesamay happily opened his mouth. Namsamay aimed his last arrow and shot it into the Kesamay mouth and killed him.                               
                            </p>
                        </div>
                    </div>
                </div>
          </motion.div>
        </div>
      </div>
    );
};