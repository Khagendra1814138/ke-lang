import React, { useEffect } from 'react';

function StickySections() {
    useEffect(() => {
        const handleScroll = () => {
            const stickySections = document.querySelectorAll(".sticky");

            stickySections.forEach(section => {
                transform(section);
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const transform = (section) => {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.scrollSection');
        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

        percentage = percentage < 0 ? 0 : percentage > 700 ? 700 : percentage;
        scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    return (
        <div>
            {/* Your JSX content with sticky sections */}
        </div>
    );
}

export default StickySections;