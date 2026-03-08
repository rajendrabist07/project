import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const images = [
    {
        src: "//www.kickgame.com/cdn/shop/files/1600_x_500-1.png?v=1768836494&amp;width=1920",
        alt: "Air Jordan 4 - Flight Club"
    },
    {
        src: "//www.kickgame.com/cdn/shop/files/1600_x_500_1.jpg?v=1764682124&amp;width=1920",
        alt: "Fear of God Essentials"
    }
];

const AUTOPLAY_MS = 1500; // 1.5s

const Hero = () => {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    // autoplay
    useEffect(() => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, AUTOPLAY_MS);
        return () => clearInterval(timerRef.current);
    }, []);

    // restart autoplay after manual navigation
    const handleNext = () => {
        next();
        clearInterval(timerRef.current);
        timerRef.current = setInterval(next, AUTOPLAY_MS);
    };
    const handlePrev = () => {
        prev();
        clearInterval(timerRef.current);
        timerRef.current = setInterval(next, AUTOPLAY_MS);
    };

    return (
        <section className="hero">
            <div className="hero-inner">
                {images.map((img, i) => (
                    <img
                        key={i}
                        className={`hero-image ${i === index ? "visible" : ""}`}
                        src={img.src}
                        alt={img.alt}
                        loading={i === index ? "eager" : "lazy"}
                        draggable={false}
                    />
                ))}

                <div className="hero-content">
                    <h2 className="hero-title">
                        {index === 0 ? "Air Jordan 4 Retro 'Flight Club'" : "Fear of God Essentials"}
                    </h2>
                    <div className="hero-buttons">
                        <a className="btn primary" href={index === 0 ? "/collections/air-jordan-4" : "/collections/fear-of-god-essentials"}>
                            {index === 0 ? "Shop Air Jordan 4" : "Shop Essentials"}
                        </a>
                        <a className="btn secondary" href={index === 0 ? "/collections/sneakers" : "/collections/clothing"}>
                            {index === 0 ? "Shop All Sneakers" : "Shop All Clothing"}
                        </a>
                    </div>
                </div>

                <div className="hero-controls">
                    <button aria-label="Previous slide" onClick={handlePrev} className="control btn-nav">‹</button>
                    <div className="dots">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => { setIndex(i); clearInterval(timerRef.current); timerRef.current = setInterval(next, AUTOPLAY_MS); }}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button aria-label="Next slide" onClick={handleNext} className="control btn-nav">›</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;