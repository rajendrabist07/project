import React from 'react';
import './Service.css';

const services = [
    {
        id: 1,
        title: 'Authentic & Rare',
        description: 'Genuine, exclusive sneakers',
        icon: '//www.kickgame.com/cdn/shop/files/Icon-Wrapper.svg?v=1756815131&width=100',
        alt: 'Authentic & Rare'
    },
    {
        id: 2,
        title: 'Luxury Focus',
        description: 'Premium fashion-meets-culture',
        icon: '//www.kickgame.com/cdn/shop/files/luxury_focus.svg?v=1756815279&width=100',
        alt: 'Luxury Focus'
    },
    {
        id: 3,
        title: 'Omnichannel',
        description: 'Online + retail presence',
        icon: '//www.kickgame.com/cdn/shop/files/Icon-Wrapper_b2c01a21-deff-4b39-a7cc-7c8412e1c3b1.svg?v=1756815322&width=100',
        alt: 'Omnichannel'
    },
    {
        id: 4,
        title: 'Community-First',
        description: 'Content & cultural events',
        icon: '//www.kickgame.com/cdn/shop/files/Users-three.svg?v=1756815343&width=100',
        alt: 'Community-First'
    }
];

const ServiceCard = ({ service }) => {
    return (
        <div className="service-item">
            <div className="corner-border-box">
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>
                <div className="icon-container">
                    <img 
                        src={service.icon} 
                        alt={service.alt} 
                        className="service-icon"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="service-content">
                <h6 className="service-title">{service.title}</h6>
                <p className="service-description">{service.description}</p>
            </div>
        </div>
    );
};

const Service = () => {
    return (
        <section className="service-section">
            <div className="service-container">
                <div className="service-grid">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;