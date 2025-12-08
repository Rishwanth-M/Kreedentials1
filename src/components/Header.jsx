import React from 'react';
import './Header.css';
import { Link, useNavigate } from "react-router-dom";

const navItems = ['New & Featured', 'Boys', 'Girls', 'Unisex', 'Sale'];

function useDarkMode() {
  const [enabled, setEnabled] = React.useState(() => {
    if (typeof window === "undefined") return false;

    // Check saved theme first
    const saved = localStorage.getItem("theme");

    if (saved === "dark") return true;
    if (saved === "light") return false;

    // DEFAULT THEME → LIGHT
    return false;
  });

  React.useEffect(() => {
    const root = document.documentElement;

    if (enabled) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", enabled ? "dark" : "light");
  }, [enabled]);

  return [enabled, setEnabled];
}


const Header = () => {
  const navigate = useNavigate();               // <-- moved inside component
  const [dark, setDark] = useDarkMode();
  const [hide, setHide] = React.useState(false);
  const [shrink, setShrink] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  // Hide / Shrink logic
  React.useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      if (current < 90) {
        setHide(false);
        setShrink(false);
        return;
      }
      if (current > lastScroll) setHide(true);
      else {
        setHide(false);
        setShrink(true);
      }
      lastScroll = current;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto close menu if screen goes back desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={`header-main ${hide ? 'header-hide' : ''} ${shrink ? 'header-shrink' : ''}`}>

        {/* TOP BAR DESKTOP ONLY */}
        <div className="top-utility hidden lg:flex justify-between items-center py-2 pl-10 pr-4 text-[11px]">
          <img
            src="https://e7.pngegg.com/pngimages/101/516/png-clipart-tennis-player-beach-tennis-sport-ball-tennis-sport-sports-equipment-thumbnail.png"
            className="w-6 h-6 filter dark:invert"
            alt="sport-icon"
          />

          <div className="flex gap-4 font-bold text-neutral-900 dark:text-neutral-200">
            <button className="plaintext-btn" onClick={() => navigate("/Shop")}>Store</button>
            <button className="plaintext-btn" onClick={() => navigate("/help")}>Help</button>
            <button className="plaintext-btn" onClick={() => navigate("/join")}>Join Us</button>
            <button className="plaintext-btn" onClick={() => navigate("/signin")}>Sign In</button>

            <button
              className="plaintext-btn text-lg"
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
            >
              {dark ? '🌙' : '☀️'}
            </button>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="main-nav w-full grid grid-cols-3 items-center py-2 pl-4 pr-4">

          {/* LOGO */}
          <div className="flex justify-start">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dafoanpxr/image/upload/v1764132627/WhatsApp_Image_2025-10-13_at_18.57.57_03825a28-removebg-preview_jdgwv2.png"
                className="logo-img w-20 filter dark:invert cursor-pointer"
                alt="logo"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav hidden lg:flex">
            {navItems.map(item => (
              <button key={item} className="nav-item" onClick={() => navigate(`/category/${encodeURIComponent(item)}`)}>
                {item}
              </button>
            ))}
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex justify-end items-center icon-row text-neutral-700 dark:text-neutral-200">

            {/* MOBILE SEARCH */}
            <button className="icon-outline-btn lg:hidden" onClick={() => setSearchOpen(true)} aria-label="Open search">
              <span className="material-symbols-outlined">search</span>
            </button>

            {/* USER */}
            <button className="icon-outline-btn lg:hidden" aria-label="User">
              <span className="material-symbols-outlined">person</span>
            </button>

            {/* DESKTOP SEARCH */}
            <div className="search-field hidden lg:flex items-center gap-2">
              <span className="material-symbols-outlined">search</span>
              <input type="text" className="search-input" placeholder="Search" />
            </div>

            {/* CART ALWAYS */}
            <button className="icon-outline-btn" aria-label="Cart" onClick={() => navigate("/cart")}>
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>

            {/* WISHLIST (desktop only) */}
            <button className="icon-outline-btn hidden lg:inline-flex" aria-label="Wishlist" onClick={() => navigate("/wishlist")}>
              <span className="material-symbols-outlined">favorite</span>
            </button>

            {/* MENU MOBILE */}
            <button className="icon-outline-btn lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <span className="material-symbols-outlined">close</span>
        </button>

        <ul className="menu-links">
          {navItems.map(item => (
            <li key={item} onClick={() => { setMenuOpen(false); navigate(`/category/${encodeURIComponent(item)}`); }}>
              {item} <span className="material-symbols-outlined chevron">chevron_right</span>
            </li>
          ))}
          <li onClick={() => { setMenuOpen(false); navigate("/download"); }}>Download App</li>
        </ul>

        <div className="menu-jordan">
          <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/Jordan_Jumpman_logo.svg" className="jordan-icon" alt="Jordan"/>
          <p>Jordan</p>
        </div>

        <div className="menu-member">
          Become a Member for the best products, inspiration and stories in sport. <span className="underline">Learn more</span>
        </div>

        <div className="menu-buttons">
          <button className="join-btn" onClick={() => { setMenuOpen(false); navigate("/join"); }}>Join Us</button>
          <button className="signin-btn" onClick={() => { setMenuOpen(false); navigate("/signin"); }}>Sign In</button>
        </div>

        <ul className="menu-tools">
          <li onClick={() => { setMenuOpen(false); navigate("/help"); }}><span className="material-symbols-outlined">help</span> Help</li>
          <li onClick={() => { setMenuOpen(false); navigate("/cart"); }}><span className="material-symbols-outlined">shopping_bag</span> Bag</li>
          <li onClick={() => { setMenuOpen(false); navigate("/orders"); }}><span className="material-symbols-outlined">receipt_long</span> Orders</li>
          <li onClick={() => { setMenuOpen(false); navigate("/stores"); }}><span className="material-symbols-outlined">store</span> Find a Store</li>
          {/* 🌙 Dark toggle inside menu */}
          <li onClick={() => setDark(!dark)}>
            <span className="material-symbols-outlined">dark_mode</span>
            {dark ? "Light Mode" : "Dark Mode"}
          </li>
        </ul>
      </nav>

      {/* SEARCH OVERLAY */}
      <div className={`search-overlay ${searchOpen ? 'open' : ''}`}>
        <button className="close-search" onClick={() => setSearchOpen(false)}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="search-container">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search" autoFocus />
        </div>
      </div>

      {/* GLOBAL OVERLAY */}
      <div
        className={`overlay ${(menuOpen || searchOpen) ? 'active' : ''}`}
        onClick={() => {
          setMenuOpen(false);
          setSearchOpen(false);
        }}
      />
    </>
  );
};

export default Header;
