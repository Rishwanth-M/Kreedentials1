import React, { useState, useMemo } from "react";
import "./Shop.css";

const categories = [
  "Shoes",
  "Tops & T-Shirts",
  "Hoodies & Sweatshirts",
  "Jackets",
  "Trousers & Tights",
  "Shorts",
  "Accessories & Equipment",
];

const accordionFilters = ["Gender", "Kids", "Shop By Price"];

const products = [
  {
    id: 1,
    label: "Bestseller",
    name: "Kreedentials Pegasus Premium",
    type: "Men’s Road Running Shoes",
    price: "₹ 15 995.00",
    priceValue: 15995,
    date: "2025-10-01",
    img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/f21b2773-2bcc-4d41-a003-967e4b1800f9/pegasus-premium.png",
  },
  {
    id: 2,
    label: "Bestseller",
    name: "Kreedentials Vomero Plus",
    type: "Men’s Road Running Shoes",
    price: "₹ 17 495.00",
    priceValue: 17495,
    date: "2025-09-20",
    img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/4bfabeca-8a66-4a39-b21a-97744e6e9c80/vomero-plus.png",
  },
  {
    id: 3,
    label: "Bestseller",
    name: "Kreedentials Air Force 1 '07 LV8",
    type: "Men’s Shoes",
    price: "₹ 12 995.00",
    priceValue: 12995,
    date: "2025-09-05",
    img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/5b8bc035-4267-41f0-bcb7-4f143b468e81/air-force-1.png",
  },
  {
    id: 4,
    label: "Promo Exclusion",
    name: "Tatum 4 PF",
    type: "Basketball Shoes",
    price: "₹ 11 495.00",
    priceValue: 11495,
    date: "2025-10-10",
    img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/5a24643f-dfcf-43fb-9b73-54f719437b62/jayson-tatum-4-pf.png",
  },
  {
    id: 5,
    label: "New",
    name: "Kreedentials Zoom Freak",
    type: "Basketball Shoes",
    price: "₹ 13 495.00",
    priceValue: 13495,
    date: "2025-10-15",
    img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/2fbb8ceb-cf30-4e87-b916-f71a8c359c59/zoom-freak.png",
  },
  {
    id: 6,
    label: "Limited",
    name: "Kreedentials Cosmic Unity",
    type: "Basketball Shoes",
    price: "₹ 16 995.00",
    priceValue: 16995,
    date: "2025-08-29",
    img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/7ac0c532-05e2-4d9f-8a99-9f3b4a1cb43c/cosmic-unity.png",
  },
  {
    id: 7,
    label: "Bestseller",
    name: "Kreedentials InfinityRN 4",
    type: "Men’s Road Running Shoes",
    price: "₹ 14 495.00",
    priceValue: 14495,
    date: "2025-07-18",
    img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/b909e65d-6d56-45e4-8c7e-1906aa03b0f2/infinityrn-4.png",
  },
  {
    id: 8,
    label: "New",
    name: "Kreedentials Structure 25",
    type: "Men’s Road Running Shoes",
    price: "₹ 13 995.00",
    priceValue: 13995,
    date: "2025-10-22",
    img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/9193ab35-983a-4ae6-85df-2e063bb33c8e/structure-25.png",
  },
  {
    id: 9,
    label: "Member Access",
    name: "Kreedentials Invincible 3",
    type: "Men’s Road Running Shoes",
    price: "₹ 18 495.00",
    priceValue: 18495,
    date: "2025-09-28",
    img: "https://static.Kreedentials.com/a/images/t_PDP_864_v1/2f9d7e1c-3d94-47ab-b1ac-676f5c415e3e/invincible-3.png",
  },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-high", label: "Price: High–Low" },
  { value: "price-low", label: "Price: Low–High" },
];

export default function Shop() {
  const [showFiltersDesktop, setShowFiltersDesktop] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const sortedProducts = useMemo(() => {
    const arr = [...products];
    if (sortBy === "price-low") {
      arr.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy === "price-high") {
      arr.sort((a, b) => b.priceValue - a.priceValue);
    } else if (sortBy === "newest") {
      arr.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    // "featured" keeps original order
    return arr;
  }, [sortBy]);

  const resultsCount = sortedProducts.length;

  return (
    <>
      {/* SHOP CONTENT */}
      <main className="shop-page">
        {/* Title & category chips (under header) */}
        <div className="shop-heading">
          <div>
            <h1>Jayson Tatum Shoes</h1>
            <div className="shop-chips">
              <button className="chip active">Jordan</button>
              <button className="chip">Basketball</button>
            </div>
          </div>

          {/* Desktop actions (right side) */}
          <div className="shop-actions desktop-only">
            <button
              className="filter-toggle"
              onClick={() => setShowFiltersDesktop((v) => !v)}
            >
              {showFiltersDesktop ? "Hide Filters" : "Show Filters"}
            </button>

            <div className="sort-desktop">
              <span>Sort By</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Divider under heading */}
        <div className="shop-divider" />

        {/* Results + Filter row (mobile style) */}
        <div className="results-row">
          <span className="results-text">{resultsCount} Results</span>
          <button
            className="filter-pill mobile-only"
            onClick={() => setMobileFilterOpen(true)}
          >
            Filter
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>

        <div
          className={`shop-wrapper ${
            showFiltersDesktop ? "" : "no-filters"
          }`}
        >
          {/* LEFT FILTERS (desktop only) */}
          <aside
            className={`filters ${showFiltersDesktop ? "" : "filters-hidden"}`}
          >
            <ul className="category-list">
              {categories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="filter-divider" />

            {accordionFilters.map((title) => (
              <div className="accordion" key={title}>
                <div className="accordion-title">
                  {title}
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            ))}
          </aside>

          {/* PRODUCT GRID */}
          <section className="product-grid">
            {sortedProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.img} alt={p.name} />
                <p className="badge">{p.label}</p>
                <h4 className="product-name">{p.name}</h4>
                <p className="product-type">{p.type}</p>
                <p className="product-price">{p.price}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* MOBILE FILTER DRAWER */}
      <div className={`filter-drawer ${mobileFilterOpen ? "open" : ""}`}>
        <div className="filter-drawer-header">
          <h2>Filter</h2>
          <button
            className="filter-drawer-close"
            onClick={() => setMobileFilterOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="filter-drawer-content">
          {/* Sort By block */}
          <div className="filter-block">
            <h3>Sort By</h3>
            {sortOptions.map((opt) => (
              <label key={opt.value} className="radio-row">
                <input
                  type="radio"
                  name="sortMobile"
                  value={opt.value}
                  checked={sortBy === opt.value}
                  onChange={(e) => setSortBy(e.target.value)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>

          <hr />

          {/* Gender */}
          <div className="filter-block">
            <h3>Gender</h3>
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>Men</span>
            </label>
          </div>

          <hr />

          {/* Kids */}
          <div className="filter-block">
            <h3>Kids</h3>
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>Boys</span>
            </label>
            <label className="checkbox-row">
              <input type="checkbox" />
              <span>Girls</span>
            </label>
          </div>
        </div>
      </div>

      {/* Dim background for drawer */}
      <div
        className={`filter-backdrop ${
          mobileFilterOpen ? "active" : ""
        }`}
        onClick={() => setMobileFilterOpen(false)}
      />
    </>
  );
}
