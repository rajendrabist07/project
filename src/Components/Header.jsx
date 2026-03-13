import React, { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'New Arrivals', url: '/new-arrivals' },
  { label: 'Best Sellers', url: '/best-sellers' },
  { label: 'Sneakers', url: '/sneakers', hasDropdown: true },
  { label: 'Apparel', url: '/apparel', hasDropdown: true },
  { label: 'Brands', url: '/brands', hasDropdown: true },
  { label: 'Kids', url: '/kids', hasDropdown: true },
  { label: 'Accessories', url: '/accessories' },
  { label: 'Sale', url: '/sale', color: '#d32f2f' }
];

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <>
      <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          
          {/* Mobile Menu Button - Left */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Desktop Search Bar - Left */}
          <div className="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-search" width="20" height="20" viewBox="0 0 16 16" fill="none">
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

          {/* Logo - Center */}
          <div className="header-logo">
            <a href="/">
              <img src="https://www.kickgame.com/cdn/shop/files/logo_svg_d62f5d57-f5c7-476a-9168-17df0d5db568.svg?v=1756395236&width=380" alt="Kick Game Logo" />
            </a>
          </div>

          {/* Icons - Right */}
          <div className="header-icons">
            <div className="icon-link desktop-only currency-selector">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>

            <a href="/account" className="icon-link desktop-only">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.0705 7.62893L10.7675 2.60938L19.0496 7.86693M2.0705 7.62893V17.5881L10.7675 22.6094M2.0705 7.62893L10.7676 12.6485M19.0496 7.86693L10.7676 12.6485M19.0496 7.86693V13.9542M10.7676 12.6485L10.7675 22.6094M10.7675 22.6094L15.2717 20.0089M19.3549 19.2619L21.9298 21.4889M20.3808 16.7472C20.3808 18.7327 18.7712 20.3423 16.7857 20.3423C14.8001 20.3423 13.1905 18.7327 13.1905 16.7472C13.1905 14.7616 14.8001 13.152 16.7857 13.152C18.7712 13.152 20.3808 14.7616 20.3808 16.7472Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>

            <a href="/cart" className="icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <ul className="nav-list">
            {NAV_LINKS.map((link, idx) => (
              <li key={idx} className="nav-item">
                <a href={link.url} className="nav-link" style={link.color ? { color: link.color } : {}}>
                  {link.label}
                  {link.hasDropdown && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dropdown-arrow">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <button className="close-btn" onClick={toggleMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="mobile-search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-search" width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 14L11.1 11.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search store..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        <ul className="mobile-nav-list">
          {NAV_LINKS.map((link, idx) => (
            <li key={idx} className="mobile-nav-item">
              <a href={link.url} className="mobile-nav-link" style={link.color ? { color: link.color } : {}}>
                {link.label}
                {link.hasDropdown && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-footer">
          <a href="/account" className="mobile-footer-link">Account</a>
          <a href="/currency" className="mobile-footer-link">Currency: INR</a>
        </div>
      </div>
    </>
  );
};

export default Header;