import React, { useState, useEffect } from "react";

import "./Paralax.css";

function Paralax() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderContent = () => (
        <>
          <div className="Parallax__content__heading"> Wassa
          </div>
          <div className="Parallax__content__cta"> Wassa
          </div>
        </>
    );

    return (
        <section className="Parallax">
          <div
            className="ParallaxBackground"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          />
          <div
            className="ParallaxBackground-triangles"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          />
          <div className="ParallaxContent">{renderContent()}</div>
        </section>
      );
    }
    
export default Paralax;