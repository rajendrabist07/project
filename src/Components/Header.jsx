import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="header-wrapper">
      <div className="header-container">
        {/* Top Bar */}
        <div className="header-top">
          {/* Search Bar */}
          <div className="search-bar">
            {/* Search Icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-search" width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 14L11.1 11.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Logo */}
          <div className="header-logo">
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
              <img src="https://www.kickgame.com/cdn/shop/files/logo_svg_d62f5d57-f5c7-476a-9168-17df0d5db568.svg?v=1756395236&width=380" alt="" />
            </h1>
            {/* Alternatively, use an image if available: <img src="/logo.png" alt="Kick Game" className="logo-img" /> */}
          </div>

          {/* Icons: Currency, User, Cart */}
          <div className="header-icons">
            <div className="currency-selector">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            <a href="/account" className="icon-link">
              {/* User Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.0705 7.62893L10.7675 2.60938L19.0496 7.86693M2.0705 7.62893V17.5881L10.7675 22.6094M2.0705 7.62893L10.7676 12.6485M19.0496 7.86693L10.7676 12.6485M19.0496 7.86693V13.9542M10.7676 12.6485L10.7675 22.6094M10.7675 22.6094L15.2717 20.0089M19.3549 19.2619L21.9298 21.4889M20.3808 16.7472C20.3808 18.7327 18.7712 20.3423 16.7857 20.3423C14.8001 20.3423 13.1905 18.7327 13.1905 16.7472C13.1905 14.7616 14.8001 13.152 16.7857 13.152C18.7712 13.152 20.3808 14.7616 20.3808 16.7472Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>

            <a href="/cart" className="icon-link">
              {/* Cart Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/new-arrivals" className="nav-link">New Arrivals</a>
            </li>
            <li className="nav-item">
              <a href="/best-sellers" className="nav-link">Best Sellers</a>
            </li>
            <li className="nav-item">
              <a href="/sneakers" className="nav-link">
                Sneakers
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="/apparel" className="nav-link">
                Apparel
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="/brands" className="nav-link">
                Brands
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="/kids" className="nav-link">
                Kids
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a href="/accessories" className="nav-link">Accessories</a>
            </li>
            <li className="nav-item">
              <a href="/sale" className="nav-link" style={{ color: '#d32f2f' }}>Sale</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;