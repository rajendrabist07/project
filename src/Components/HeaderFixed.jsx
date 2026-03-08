import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <div className="currency">
            <select aria-label="Currency">
              <option>INR (₹)</option>
              <option>USD ($)</option>
              <option>EUR (€)</option>
            </select>
          </div>
          <div className="search">
            <input type="search" placeholder="Search products" aria-label="Search" />
          </div>
        </div>

        <div className="header-center">
          <a href="/" className="logo"><img src="https://www.kickgame.com/cdn/shop/files/logo_svg_d62f5d57-f5c7-476a-9168-17df0d5db568.svg?v=1756395236&width=380" alt="" /></a>
          <nav className="main-nav">
            <a href="/collections/new-arrivals">NEW ARRIVALS</a>
            <a href="/collections/bestsellers">BEST SELLERS</a>
            <a href="/collections/accessories">ACCESSORIES</a>
            <a href="/collections/clearance-sale">CLEARANCE</a>
          </nav>
        </div>

        <div className="header-right">
          <div className="icons">
            <button className="icon-btn" aria-label="Account">👤</button>
            <button className="icon-btn" aria-label="Cart">🛒</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
