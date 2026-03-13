import React, { useState } from 'react';
import './Footer.css';
import { SOCIAL_LINKS, FOOTER_MENUS, PAYMENT_METHODS, COUNTRIES } from './FooterData';

const Footer = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0] || { code: 'IN', flag: '//cdn.shopify.com/static/images/flags/in.svg?width=32', currency: 'INR', symbol: '₹' });

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <footer className="footer-wrap">
            <div className="footer-top">
                <div className="footer-container footer-grid">
                    {/* Newsletter and Socials */}
                    <div className="footer-newsletter">
                        <h3 className="footer-heading-newsletter">
                            GET 10% OFF YOUR FIRST ORDER WHEN SIGNING UP TO OUR NEWSLETTER
                        </h3>
                        <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="footer-input-wrapper">
                                <label htmlFor="newsletter-email" className="sr-only">Email</label>
                                <input 
                                    id="newsletter-email" 
                                    type="email" 
                                    placeholder="Email" 
                                    required 
                                    className="footer-input"
                                />
                                <button type="submit" aria-label="Subscribe" className="footer-submit">
                                    <span className="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M0.856864 12.9375L23.1426 12.9375" stroke="currentColor" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M17.1426 18.9375L23.1426 12.9375L17.1426 6.9375" stroke="currentColor" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                        <div className="footer-socials">
                            {SOCIAL_LINKS.map((link, idx) => (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                                    <span className="svg-wrapper social-icon">{link.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Menus */}
                    <div className="footer-menus-desktop">
                        {FOOTER_MENUS.map((menu, idx) => (
                            <div className="footer-menu-block" key={idx}>
                                <h4 className="footer-heading">{menu.title}</h4>
                                <ul className="footer-list">
                                    {menu.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <a href={link.url} className="footer-link">{link.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Accordion Menus */}
                    <div className="footer-menus-mobile">
                        {FOOTER_MENUS.map((menu, idx) => (
                            <div className="accordion-item" key={idx}>
                                <div 
                                    className={`accordion-header ${openAccordion === idx ? 'open' : ''}`} 
                                    onClick={() => toggleAccordion(idx)}
                                >
                                    <span>{menu.title}</span>
                                    <span className="accordion-icon">
                                        {openAccordion === idx ? (
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.0703 10.8203L5.07031 10.8203" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round"></path>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 6L12 18M18 12L6 12" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round"></path>
                                            </svg>
                                        )}
                                    </span>
                                </div>
                                <div className={`accordion-content ${openAccordion === idx ? 'show' : ''}`}>
                                    <ul className="footer-list">
                                        {menu.links.map((link, linkIdx) => (
                                            <li key={linkIdx}>
                                                <a href={link.url} className="footer-link">{link.text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container footer-bottom-flex">
                    <div className="footer-copyright">
                        <small>Kick Game Limited | Company No. 08761997 VAT No. GB179081090</small>
                    </div>

                    <div className="footer-bottom-tools">
                        {/* Payment Methods */}
                        <div className="footer-payments">
                            <ul className="payment-list">
                                {PAYMENT_METHODS.map((method, idx) => (
                                    <li className="payment-item" key={idx}>
                                        {method}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Country Selector */}
                        <div className="footer-localization">
                            <div className={`disclosure ${isDropdownOpen ? 'open' : ''}`}>
                                <button 
                                    type="button" 
                                    className="localization-selector" 
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    aria-expanded={isDropdownOpen}
                                >
                                    <span className="flag-icon" style={{ backgroundImage: `url(${selectedCountry.flag})` }}></span>
                                    <span className="currency-text">{selectedCountry.currency} ({selectedCountry.symbol})</span>
                                    <span className="svg-wrapper chevron-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M16.3333 7.08464L10.5 12.918L4.66668 7.08464" stroke="currentColor" strokeWidth="0.833333"></path>
                                        </svg>
                                    </span>
                                </button>
                                
                                <div className={`disclosure-list-wrapper ${isDropdownOpen ? 'show' : ''}`}>
                                    <ul className="country-list">
                                        {COUNTRIES.map((country, idx) => {
                                            const isActive = selectedCountry.code === country.code;
                                            return (
                                                <li key={idx} className="disclosure-item">
                                                    <a 
                                                        href="#" 
                                                        className={`country-link ${isActive ? 'active' : ''}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedCountry(country);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                    >
                                                        <span className={`check-icon ${isActive ? 'visible' : 'hidden'}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9">
                                                                <path fill="currentColor" fillRule="evenodd" d="M11.35.643a.5.5 0 0 1 .006.707l-6.77 6.886a.5.5 0 0 1-.719-.006L.638 4.845a.5.5 0 1 1 .724-.69l2.872 3.011 6.41-6.517a.5.5 0 0 1 .707-.006z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                        <span className="flag-icon" style={{ backgroundImage: `url(${country.flag})` }}></span>
                                                        <span className="country-text">{country.currency}({country.symbol})</span>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;