import React from 'react'
import "./Featured.css"
import { useNavigate } from "react-router-dom"  // 🔥 Added import

const tiles = [
  {
    eyebrow: 'Kreedentials Pegasus Premium',
    title: 'For the Ultimate Energised Ride',
    img: 'https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg?w=1900',
  },
  {
    eyebrow: "Women's Training Gear",
    title: 'Power Up Your Workouts',
    img: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?w=1900',
  },
]

const Featured = () => {
  const navigate = useNavigate(); // 🔥 Enable navigation

  return (
    <section className="featured-section">

      <h2 className="featured-heading">Featured</h2>

      <div className="featured-grid">
        {tiles.map((tile) => (
          <div key={tile.title} className="featured-tile">
            <img src={tile.img} alt={tile.title} className="featured-img" />

            <div className="featured-content">
              <p className="featured-eyebrow">{tile.eyebrow}</p>
              <h3 className="featured-title">{tile.title}</h3>

              <button
                className="featured-btn"
                onClick={() => navigate("/shop")} // 🔥 Working navigation
              >
                Shop
              </button>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Featured
