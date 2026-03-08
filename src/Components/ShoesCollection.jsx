
import './ShoesCollection.css';

const shoesData = [
    {
        id: 1,
        name: 'Air Jordan',
        image: '//www.kickgame.com/cdn/shop/files/AJ4-TILE.png?v=1769700624&width=500',
        url: '/collections/air-jordan'
    },
    {
        id: 2,
        name: 'Saucony',
        image: '//www.kickgame.com/cdn/shop/files/SAUCONY_TILE_53312fe8-00d2-4184-a609-a84952771d21.png?v=1770917313&width=500',
        url: '/collections/saucony'
    },
    {
        id: 3,
        name: 'Asics',
        image: '//www.kickgame.com/cdn/shop/files/ASICS-BANNER_7e5d35c3-d0a9-4c8e-b97d-5ec474ef8767.png?v=1764250132&width=500',
        url: '/collections/asics'
    },
    {
        id: 4,
        name: 'Samuel Bailey',
        image: '//www.kickgame.com/cdn/shop/files/SB-TILE_436d9c4f-9b72-4bd7-9d65-048972adf286.png?v=1767180528&width=500',
        url: '/collections/samuel-bailey'
    }
];

const ShoesCollectionCard = ({ brand }) => {
    return (
        <div className="brand-card">
            <a href={brand.url} className="brand-link">
                <div className="brand-image-container">
                    <img
                        src={brand.image}
                        alt={brand.name}
                        className="brand-image"
                        loading="lazy"
                    />
                </div>
                <div className="brand-overlay"></div>
                <div className="brand-content">
                    <button className="shop-now-btn">
                        <span>Shop Now</span>
                        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                            <path d="M17.1666 10.7773L17.4613 10.4827L17.7559 10.7773L17.4613 11.072L17.1666 10.7773ZM4.66663 11.194C4.43651 11.194 4.24996 11.0075 4.24996 10.7773C4.24996 10.5472 4.43651 10.3607 4.66663 10.3607V11.194ZM12.4613 5.48272L17.4613 10.4827L16.872 11.072L11.872 6.07197L12.4613 5.48272ZM17.4613 11.072L12.4613 16.072L11.872 15.4827L16.872 10.4827L17.4613 11.072ZM17.1666 11.194H4.66663V10.3607H17.1666V11.194Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </a>
        </div>
    );
};

const ShoesCollection = () => {
    return (
        <section className="brand-section">
            <h2>Greatest Brands</h2>
            <div className="brand-grid">
                {shoesData.map((brand) => (
                    <ShoesCollectionCard key={brand.id} brand={brand} />
                ))}
            </div>
        </section>
    );
};

export default ShoesCollection;
