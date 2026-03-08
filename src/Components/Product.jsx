import React from 'react';
import './Product.css';

const products = [
    {
        id: 1,
        name: "Air Jordan 4 Retro 'Flight Club'",
        brandLogo: "//www.kickgame.com/cdn/shop/files/AIR-JORDAN-LOGO_a663ccca-5668-44a3-8fb3-4fde1515eae7.png?v=1762363723",
        image: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/IM4002-100.png?width=350",
        hoverImage: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/IM4002-100_2.png?width=350",
        price: 169.99,
        sizes: 10,
        url: "/products/air-jordan-4-retro-flight-club"
    },
    {
        id: 2,
        name: "Air Jordan 4 Retro 'Military Black'",
        brandLogo: "//www.kickgame.com/cdn/shop/files/AIR-JORDAN-LOGO_a663ccca-5668-44a3-8fb3-4fde1515eae7.png?v=1762363723",
        image: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/Air_Jordan_4_Retro_Military_Black.png?width=350",
        hoverImage: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/Air_Jordan_4_Retro_Military_Black_1.png?width=350",
        price: 449.99,
        sizes: 22,
        url: "/products/air-jordan-4-retro-military-black"
    },
    {
        id: 3,
        name: "Air Jordan 4 Retro SE 'Black Canvas'",
        brandLogo: "//www.kickgame.com/cdn/shop/files/AIR-JORDAN-LOGO_a663ccca-5668-44a3-8fb3-4fde1515eae7.png?v=1762363723",
        image: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/air-jordan-4-retro-se-black-canvas-DH7138-006_1.png?width=350",
        hoverImage: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/air-jordan-4-retro-se-black-canvas-DH7138-006_2.jpg?width=350",
        price: 399.99,
        sizes: 22,
        url: "/products/air-jordan-4-retro-se-black-canvas"
    },
    {
        id: 4,
        name: "Air Jordan 4 Retro 'Red Cement'",
        brandLogo: "//www.kickgame.com/cdn/shop/files/AIR-JORDAN-LOGO_a663ccca-5668-44a3-8fb3-4fde1515eae7.png?v=1762363723",
        image: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/air-jordan-4-retro-red-cement-dh6927-161.png?width=350",
        hoverImage: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/air-jordan-4-retro-red-cement-dh6927-161_2.png?width=350",
        price: 249.99,
        originalPrice: 299.99,
        sizes: 22,
        url: "/products/air-jordan-4-retro-red-cement"
    },
    {
        id: 5,
        name: "Air Jordan 4 Retro 'White Cement' 2025",
        brandLogo: "//www.kickgame.com/cdn/shop/files/AIR-JORDAN-LOGO_a663ccca-5668-44a3-8fb3-4fde1515eae7.png?v=1762363723",
        image: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/FV5029-100_21d881c2-5379-4fc3-98ce-2f960822802f.png?width=350",
        hoverImage: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/FV5029-100_2_12526a54-d95c-44df-93a6-ca881e8e9ddc.jpg?width=350",
        price: 279.99,
        sizes: 22,
        url: "/products/air-jordan-4-retro-white-cement-2025"
    },
    {
        id: 6,
        name: "Air Jordan 4 Retro 'Midnight Navy'",
        brandLogo: "//www.kickgame.com/cdn/shop/files/AIR-JORDAN-LOGO_a663ccca-5668-44a3-8fb3-4fde1515eae7.png?v=1762363723",
        image: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/air-jordan-4-retro-white-midnight-navy-DH6927-140_1.png?width=350",
        hoverImage: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/air-jordan-4-retro-white-midnight-navy-DH6927-140_2.jpg?width=350",
        price: 329.99,
        originalPrice: 399.99,
        sizes: 22,
        url: "/products/air-jordan-4-retro-midnight-navy"
    },
    {
        id: 7,
        name: "Air Jordan 1 Mid 'Smoke Grey Anthracite'",
        brandLogo: "//www.kickgame.com/cdn/shop/files/AIR-JORDAN-LOGO_a663ccca-5668-44a3-8fb3-4fde1515eae7.png?v=1762363723",
        image: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/air-jordan-1-mid-light-smoke-grey-554724-078_1.png?width=350",
        hoverImage: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/Air_Jordan_1_Mid_Smoke_Grey_Anthracite1.jpg?width=350",
        price: 149.99,
        originalPrice: 199.99,
        sizes: 22,
        url: "/products/air-jordan-1-mid-smoke-grey-anthracite"
    },
    {
        id: 8,
        name: "Air Jordan 4 Retro 'Fear' 2024",
        brandLogo: "//www.kickgame.com/cdn/shop/files/AIR-JORDAN-LOGO_a663ccca-5668-44a3-8fb3-4fde1515eae7.png?v=1762363723",
        image: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/FQ8138-002_11fad23a-020d-421b-9947-2404e5fbdfd6.png?width=350",
        hoverImage: "https://cdn.shopify.com/s/files/1/0255/9429/8467/files/FQ8138-002_2_e0e228b7-4da2-46a1-90e7-7f18c3211145.jpg?width=350",
        price: 249.99,
        originalPrice: 299.99,
        sizes: 22,
        url: "/products/air-jordan-4-retro-fear-2024"
    }
];

const ProductCard = ({ product }) => {
    return (
        <a href={product.url} className="product-card">
            <div className="product-image-wrapper">
                {product.originalPrice && <span className="sale-badge">SALE</span>}
                <img src={product.image} alt={product.name} className="product-image main-img" />
                <img src={product.hoverImage} alt={product.name} className="product-image hover-img" />
            </div>
            <div className="product-info">
                <div className="brand-row">
                    {/* Using text fallback if image fails, but mainly logo */}
                    {product.brandLogo && <img src={product.brandLogo} alt="Brand" className="brand-icon" />}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-sizes">Available in {product.sizes} sizes</p>
                <div className="product-price-row">
                    <span className="price-label">From</span>
                    <span className={`price-value ${product.originalPrice ? 'sale' : ''}`}>
                        £{product.price}
                    </span>
                    {product.originalPrice && (
                        <span className="original-price">£{product.originalPrice}</span>
                    )}
                </div>
            </div>
        </a>
    );
};

const Product = () => {
    return (
        <section className="product-section">
            <div className="product-header">
                <h2 className="product-title">JUST DROPPED</h2>
                <a href="/collections/new-arrivals" className="shop-collection-btn">
                    <span>Shop the collection</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="currentColor">
                        <path d="M17.1666 10.7773L17.4613 10.4827L17.7559 10.7773L17.4613 11.072L17.1666 10.7773ZM4.66663 11.194C4.43651 11.194 4.24996 11.0075 4.24996 10.7773C4.24996 10.5472 4.43651 10.3607 4.66663 10.3607V11.194ZM12.4613 5.48272L17.4613 10.4827L16.872 11.072L11.872 6.07197L12.4613 5.48272ZM17.4613 11.072L12.4613 16.072L11.872 15.4827L16.872 10.4827L17.4613 11.072ZM17.1666 11.194H4.66663V10.3607H17.1666V11.194Z" fill="currentColor"></path>
                    </svg>
                </a>
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Product;