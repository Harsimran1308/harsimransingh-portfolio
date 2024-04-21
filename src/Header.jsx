import React, { useState } from 'react';
import './Header.css';
import { slide as Menu } from 'react-burger-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };
  return (
    <div className="flex items-center justify-between py-8 px-8">
      <div className="main-name">Harsimran Singh</div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <Menu right outerContainerId={ "main-container" } isOpen={isMenuOpen} onStateChange={handleStateChange}>
            <a href="/#home" className="nav-text" onClick = {handleCloseMenu}>Home</a>
            <a href="/#about"className="nav-text" onClick = {handleCloseMenu}>About</a>
            <a href="/#resume"className="nav-text" onClick = {handleCloseMenu}>Resume</a>
            <a href="/#work"className="nav-text" onClick = {handleCloseMenu}>Work</a>
          </Menu>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
          <li>
            <a href="/#work">Work</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
