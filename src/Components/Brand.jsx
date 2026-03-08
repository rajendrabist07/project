import React from 'react';
import './Brand.css';

const brands = [
    {
        id: 1,
        name: 'TIMBERLAND',
        image: '//www.kickgame.com/cdn/shop/files/TIMBERLAND-TILE.png?v=1770809299&width=600',
        url: '/collections/timberland'
    },
    {
        id: 2,
        name: 'REPRIMO',
        image: '//www.kickgame.com/cdn/shop/files/REPRIMO-HOMEPAGE.png?v=1762428532&width=600',
        url: '/collections/reprimo'
    },
    {
        id: 3,
        name: 'CLEENS',
        image: '//www.kickgame.com/cdn/shop/files/CLEENS-HOMEPAGE.png?v=1762428532&width=600',
        url: '/collections/cleens'
    }
];

const Brand = () => {
    return (
        <section className="brand-section">
            <h2 className="section-title">SPOTLIGHT</h2>
            <div className="brand-grid-spotlight">
                {brands.map((brand) => (
                    <div key={brand.id} className="brand-card-spotlight">
                        <a href={brand.url} className="brand-link-spotlight">
                            <div className="brand-image-wrapper">
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="brand-image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="brand-details">
                                <h3 className="brand-name">{brand.name}</h3>
                                <button className="shop-collection-btn">
                                    SHOP THE COLLECTION
                                </button>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Brand;

