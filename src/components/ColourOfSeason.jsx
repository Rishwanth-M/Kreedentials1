import React, { useRef } from 'react'
import "./ColourOfSeason.css"

const shoes = [
  {
    name: 'Kreedentials Shox TL',
    category: "Women\'s Shoes",
    price: '₹ 15 995.00',
    img: 'https://static.Kreedentials.com/a/images/t_PDP_864_v1/5c8af48e-79e1-4b04-ab76-b1f10c29cbc0/shox-tl-womens-shoes-Gt2bzG.png'
  },
  {
    name: 'Kreedentials Air Max Dn 8',
    category: "Women\'s Shoes",
    price: '₹ 17 495.00',
    img: 'https://static.Kreedentials.com/a/images/t_PDP_864_v1/5dcf20dc-6d36-4fa6-a209-0aefdd0b2de5/air-max-97-womens-shoes-Ls6tWz.png'
  },
  {
    name: 'Kreedentials Zoom Vomero',
    category: "Women\'s Shoes",
    price: '₹ 14 995.00',
    img: 'https://static.Kreedentials.com/a/images/t_PDP_864_v1/9ddfbf07-3cbc-4618-af7f-992d1ac26664/vomero-17-womens-road-running-shoes-nZp2CX.png'
  },
  {
    name: 'Kreedentials Air Force 1',
    category: "Women\'s Shoes",
    price: '₹ 12 995.00',
    img: 'https://static.Kreedentials.com/a/images/t_PDP_864_v1/8bbd1823-290d-4a91-acbc-88364e1242d5/air-force-1-womens-shoes-3G4GZP.png'
  },
  {
    name: 'Kreedentials P-6000',
    category: "Women\'s Shoes",
    price: '₹ 10 995.00',
    img: 'https://static.Kreedentials.com/a/images/t_PDP_864_v1/2cb3db67-d6d2-43d9-94aa-85f5fb2cd508/p-6000-womens-shoes-9PNwBg.png'
  }
]

const ColourOfSeason = () => {
  const scrollRef = useRef()
  let isDragging = false
  let startX
  let scrollLeft

  const startDrag = (e) => {
    isDragging = true
    startX = e.pageX - scrollRef.current.offsetLeft
    scrollLeft = scrollRef.current.scrollLeft
  }

  const stopDrag = () => (isDragging = false)

  const handleDrag = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    scrollRef.current.scrollLeft = scrollLeft - (x - startX)
  }

  const scrollLeftClick = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRightClick = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
  }

  return (
    <section className="season-section">

      <div className="season-header">
        <h2 className="season-title">Colour of the Season: Metallic Shine</h2>

        <div className="season-controls">
          <button className="season-btn" onClick={scrollLeftClick}>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="season-btn" onClick={scrollRightClick}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="season-scroll"
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        onMouseMove={handleDrag}
        onMouseLeave={stopDrag}
      >
        {shoes.map((shoe) => (
          <div key={shoe.name} className="season-card">
            <img src={shoe.img} alt={shoe.name} />
            <p className="shoe-name">{shoe.name}</p>
            <p className="shoe-cat">{shoe.category}</p>
            <p className="shoe-price">{shoe.price}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default ColourOfSeason
