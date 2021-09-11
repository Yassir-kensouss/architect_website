import React from "react";
import { Link } from "react-router-dom";
import "../styles/header/menu.scss";

const Menu = () => {
  return (
    <div className='menu-wrapper absolute w-full h-screen top-0 left-0 z-20'>
      <div className='menu-container relative h-full'>
        <div className='menu-items w-full flex items-center h-full'>
          <nav className='nav-wrapper'>
            <ul className='nav-items'>
              <li className='nav-item'>
                <Link>Home</Link>
              </li>
              <li className='nav-item'>
                <Link>Services</Link>
              </li>
              <li className='nav-item'>
                <Link>Project</Link>
              </li>
              <li className='nav-item'>
                <Link>About us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='absolute top-10 right-10'>
          <button aria-label='close menu'>
            <i class='fas fa-arrow-left'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
