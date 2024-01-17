import {React, useEffect, useState} from "react";


import './Scrollindicator.css';

export const ScrollIndicator = () => {
    const [showScroll, setShowScroll] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', checkScrollTop)
        return function cleanup() {
            window.removeEventListener('scroll', checkScrollTop)
        }
    })

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 10){
            setShowScroll(true)
        } else if (showScroll && window.scrollY <= 10){
            setShowScroll(false)
        }
    };



    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled)
    }

    useEffect (() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="progress-Frame" style={{display: showScroll ? 'flex' : 'none'}}>
            <div className="progress-Bar" style={{width: `${scrollTop}%`}}>
                {Math.round(scrollTop)}%
            </div>
        </div>
    );
};
