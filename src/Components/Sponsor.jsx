import React from 'react';
import './Sponsor.css';

// 1. You can easily add, remove, or swap thumbails right here:
const SPONSOR_DATA = [
    {
        id: 1,
        title: "ISHOWSPEED",
        link: "/pages/ishowspeed",
        image: "//www.kickgame.com/cdn/shop/files/SFS-CAROUSEL_02_1_1.png?v=1738514069",
        badge: "Hey, want 10% off?"
    },
    {
        id: 2,
        title: "ARRDEE",
        link: "/pages/arrdee",
        image: "//www.kickgame.com/cdn/shop/files/arrdee.png?v=1761161324"
    },
    {
        id: 3,
        title: "CHUNKZ",
        link: "/pages/chunkz",
        image: "//www.kickgame.com/cdn/shop/files/chunkz-no-logo_1.jpg?v=1634557758"
    },
    {
        id: 4,
        title: "LATTO",
        link: "/pages/latto",
        image: "//www.kickgame.com/cdn/shop/files/latto.png?v=1761161325"
    },
    {
        id: 5,
        title: "LEON BAILEY",
        link: "/pages/leon-bailey",
        image: "//www.kickgame.com/cdn/shop/files/leon-bailey-sneaker-shopping-no-logo_1.jpg?v=1637585054"
    },
    {
        id: 6,
        title: "DAVIDO",
        link: "/pages/davido",
        image: "//www.kickgame.com/cdn/shop/files/davido-no-logo_1.jpg?v=1634558372"
    },
    {
        id: 7,
        title: "RUSS",
        link: "/pages/russ",
        image: "//www.kickgame.com/cdn/shop/files/russ-no-logo_1.jpg?v=1634558355"
    }
];

// Helper Component for the Thumbnails - extremely reusable
const SponsorThumbnail = ({ data }) => {
    return (
        <a href={data.link} className="sponsor-card">
            {data.badge && (
                <div className="sponsor-badge">
                    {data.badge}
                </div>
            )}
            <img 
                src={data.image} 
                alt={`${data.title} Shopping at Kick Game`} 
                loading="lazy" 
            />
            <h3 className="sponsor-card-title">{data.title}</h3>
        </a>
    );
};


const Sponsor = () => {
    const mainHero = {
        title: "CENTRAL CEE",
        description: "Central Cee Goes Shopping for Sneakers at Kick Game",
        videoLink: "/pages/central-cee",
        image: "//www.kickgame.com/cdn/shop/files/central_cee_dt.png?v=1738513715",
    };

    return (
        <section className="sponsor-section" id="sponsor">
            
            {/* Header / Text Information */}
            <div className="sponsor-header">
                <div className="sponsor-title-container">
                    <h2>{mainHero.title}</h2>
                    <p>{mainHero.description}</p>
                </div>
                
                <a href={mainHero.videoLink} className="sponsor-view-btn">
                    View more
                </a>
            </div>

            {/* Main Hero Banner / Video Trigger */}
            <div className="sponsor-hero">
                <img 
                    src={mainHero.image} 
                    alt={mainHero.title} 
                    loading="lazy" 
                />
                
                {/* Play Button Overlay */}
                <div className="sponsor-play-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14" width="24" height="24">
                        <path fillRule="evenodd" d="M1.482.815A1 1 0 0 0 0 1.69v10.517a1 1 0 0 0 1.525.851L10.54 7.5a1 1 0 0 0-.043-1.728z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>

            {/* Thumbnail Carousel Section */}
            <div className="sponsor-thumbnails">
                {SPONSOR_DATA.map((sponsor) => (
                    <SponsorThumbnail key={sponsor.id} data={sponsor} />
                ))}
            </div>

        </section>
    );
};

export default Sponsor;