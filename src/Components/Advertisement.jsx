
import React from "react"
import "./Advertisement.css"

const items = [
  "Guaranteed Authenticity",
  "Next Day Shipping On Select Sizes",
  "Orders £300+ Ship Free",
  "Shop Now. Pay it in 4 | Clearpay",
]

const Advertisement = () => {
  const doubled = [...items, ...items]
  return (
    <div className="marquee">
      <div className="marquee__inner">
        {doubled.map((text, i) => (
          <span className="marquee__item" key={i}>
            <a className="marquee__link" href="/collections/all" target="_blank" rel="noopener noreferrer">
              {text}
            </a>
            <span className="marquee__sep">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Advertisement
