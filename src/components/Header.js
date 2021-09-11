import React from "react";
import { Link } from "react-router-dom";

import "../styles/header/homePage.scss";

import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import project5 from "../images/project5.jpg";
import project6 from "../images/project6.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay]);

const Header = () => {
  return (
    <header>
      <div className='logo-wrapper flex content-center items-center'>
        <Link to='/' className='logo text-2xl font-medium w-full text-center '>
          ARCH.
        </Link>
      </div>
      <div className='header-content-wrapper h-screen'>
        <div className='menu-aria self-center'>
          <div className='menu-icon-wrapper w-full h-20 grid place-items-center '>
            <div className='w-full h-full '>
              <button
                aria-label='display menu'
                className='w-full h-full pl-5 focus:outline-none focus:ring focus:border-gray-300 '
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>
          </div>
        </div>
        <div className='slider-aria relative'>
          <Swiper
            autoplay={{
              delay: 2000,
            }}
            effect={"fade"}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={project1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={project2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={project3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={project4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={project5} />
            </SwiperSlide>
          </Swiper>
          <div className='home-page-heading absolute top-40 left-80 z-10'>
            <div className='heading-content relative'>
              <h1 className='uppercase fl-heading'>Archent west group</h1>
              <p className='uppercase text-base font-semibold'>
                book your appointement
              </p>
              <Link className='uppercase text-sm my-6 block'>read more</Link>
            </div>
          </div>
        </div>
        <div className='search-aria '>
          <div className='search-icon-wrapper self-center justify-self-center'>
            <div>
              <button
                aria-label='search button'
                className='focus:outline-none focus:ring focus:border-gray-300'
              >
                <i class='fas fa-search'></i>
              </button>
            </div>
          </div>
          <div className='social-icons-wrapper self-center justify-self-center '>
            <div>
              <Link
                to=''
                aria-label='skype link'
                className='focus:outline-none focus:ring focus:border-gray-300'
              >
                <i class='fab fa-skype'></i>
              </Link>
            </div>

            <div>
              <Link
                to=''
                aria-label='facebook link'
                className='focus:outline-none focus:ring focus:border-gray-300'
              >
                <i class='fab fa-facebook-square'></i>
              </Link>
            </div>

            <div>
              <Link
                to=''
                aria-label='instagram link'
                className='focus:outline-none focus:ring focus:border-gray-300'
              >
                <i class='fab fa-instagram'></i>
              </Link>
            </div>

            <div>
              <Link to='' aria-label='twitter link'>
                <i class='fab fa-twitter'></i>
              </Link>
            </div>

            <div>
              <Link to='' aria-label='youtube link'>
                <i class='fab fa-youtube'></i>
              </Link>
            </div>
          </div>
          <div className='top-page-icon-wrapper self-center justify-self-center '>
            <div>
              <button aria-label='top page'>
                <i class='fas fa-chevron-up'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
