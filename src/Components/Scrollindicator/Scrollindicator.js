import {React, useEffect, useState} from "react";

import './Scrollindicator.css';

export const ScrollIndicator = () => {

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
        <div className="progress-Frame">
            <div className="progress-Bar" style={{width: `${scrollTop}%`}}>
                {Math.round(scrollTop)}%
            </div>
        </div>
    );
};
