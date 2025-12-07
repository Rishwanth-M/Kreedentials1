import React, { useRef } from "react";
import "./ShopByIcons.css";

const icons = [
  { name: "Dunk", img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/043ecbfb-1f03-4d71-8f8c-8f9a6f2e9c9d/dunk-low-womens-shoes.png" },
  { name: "Killshot", img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/cb49ce3f-e86d-40b6-8353-f8dec2868c1b/killshot-2-leather-shoes.png" },
  { name: "Cortez", img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/ed65052b-cbd7-47ed-99e8-3427739484b9/cortez-basic-shoes.png" },
  { name: "Air Jordan 1", img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/61b07f14-ae35-46fc-85f6-af4778b7ef76/air-jordan-1-high-womens-shoes.png" },
  { name: "Air Force 1", img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/3b237be5-ed0c-4ee8-a48b-da7564a9dea3/air-force-1-womens-shoes.png" },
];

const ShopByIcons = () => {
  const scrollRef = useRef();
  let isDragging = false;
  let startX, scrollLeft;

  const startDrag = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const stopDrag = () => (isDragging = false);

  const handleDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  const scrollLeftClick = () =>
    scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });

  const scrollRightClick = () =>
    scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });

  return (
    <section className="icons-section">

      <div className="icons-header">
        <h2 className="icons-title">Shop by Icons</h2>

        <div className="icons-controls">
          <button className="icons-btn" onClick={scrollLeftClick}>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="icons-btn" onClick={scrollRightClick}>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="icons-scroll"
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        onMouseMove={handleDrag}
        onMouseLeave={stopDrag}
      >
        {icons.map((icon) => (
          <div key={icon.name} className="icons-card">
            <div className="icons-img-wrap">
              <img src={icon.img} alt={icon.name} />
            </div>
            <p className="icons-text">{icon.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ShopByIcons;
