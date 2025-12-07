import React, { useRef } from "react";
import "./ShopGiftsBySport.css";

const sports = [
  { title: 'Running', img: 'https://images.pexels.com/photos/1401796/pexels-photo-1401796.jpeg?w=1600' },
  { title: 'Training', img: 'https://images.pexels.com/photos/6453399/pexels-photo-6453399.jpeg?w=1600' },
  { title: 'Football', img: 'https://images.pexels.com/photos/3991875/pexels-photo-3991875.jpeg?w=1600' },
  { title: 'Basketball', img: 'https://images.pexels.com/photos/3757374/pexels-photo-3757374.jpeg?w=1600' },
  { title: 'Yoga', img: 'https://images.pexels.com/photos/3823035/pexels-photo-3823035.jpeg?w=1600' },
  { title: 'Gym', img: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?w=1600' }
];

const ShopGiftsBySport = () => {
  const scrollRef = useRef();
  let isDragging = false;
  let startX;
  let scrollLeft;

  const startDrag = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const stopDrag = () => { isDragging = false; };

  const handleDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  const scrollLeftClick = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRightClick = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="sport-section">
  <div className="sport-container">

    <div className="sport-header">
      <h2 className="sport-title">Shop Gifts by Sport</h2>

      <div className="sport-controls">
        <button className="sport-btn" onClick={scrollLeftClick}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="sport-btn" onClick={scrollRightClick}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>

    <div
      ref={scrollRef}
      className="sport-scroll"
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseMove={handleDrag}
      onMouseLeave={stopDrag}
    >
      {sports.map((sport) => (
        <div key={sport.title} className="sport-card">
          <img src={sport.img} alt={sport.title} />
          <p>{sport.title}</p>
        </div>
      ))}
    </div>

  </div>
</section>

  );
};

export default ShopGiftsBySport;
