import React from "react";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { CornerUpRight, CornerDownRight, CornerRightDown } from "react-feather";

import "./horizontalScroll.css";

export const Chap3HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["4%", "-76%"]);
  
    return (
      <div ref={targetRef} className="framerFrame">
        <div className="framerStickyFrame">
          <motion.div style={{ x }} className="framerScrollSectionsChapter3">
                <div className="storyFrameColumn">
                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>
                                While wandering through the jungle playing the ke drum from region to region...
                            </h2>          
                        </div>
                    </div>
                    <div className="largeRightArrow pimpPurpleColor"> <CornerDownRight size={150}/></div>
                </div>

                <div className="storyFrameColumn">
                    <div className="largeRightArrow pimpPurpleColor"> <CornerUpRight size={150}/></div>
                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>
                                The drummers noticed wonderful actions, behavior and activities of wild animals, birds and insects. 
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="storyFrameColumn">
                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>
                                They started imitating, dancing and mimicking like the wild animals in the nature.
                            </h2>
                        </div>
                    </div>
                    <div className="largeRightArrow pimpPurpleColor"> <CornerDownRight size={150}/></div>
                </div>

                <div className="storyFrameColumn">
                    <div className="largeRightArrow pimpPurpleColor"> <CornerUpRight size={150}/></div>
                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>
                                Eventually creating different types of animals lang (dances) with the pounding sound of Ke drum.                            
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="storyFrameColumn">
                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>
                                From the natural human body and foot movements, they created the basic kassarokpa steps.                             
                            </h2>
                        </div>
                    </div>
                    <div className="largeRightArrow pimpPurpleColor"> <CornerDownRight size={150}/></div>
                </div>

                <div className="storyFrameColumn">
                    <div className="largeRightArrow pimpPurpleColor"> <CornerRightDown size={150}/></div>
                    <div className="storyCardWrapper">
                        <image className="darkYellow"></image>
                        <div className="informationWrapper">
                            <h2>
                                The most popular “kelangsamdiwaba” (most expert drummers) were Phungdohang and Laruhang.                            
                            </h2>
                        </div>
                    </div>
                </div>
          </motion.div>
        </div>
      </div>
    );
};