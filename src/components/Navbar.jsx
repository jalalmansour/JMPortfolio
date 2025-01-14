import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center justify-between py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      {/* Navigation Buttons */}
      <ul className="list-none flex flex-row gap-6">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title
                ? "text-white"
                : "text-secondary hover:text-white hover:scale-110 transform transition-all duration-300"
            } text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        {/* New Buttons */}
        <li
          className={`text-secondary hover:text-white hover:scale-110 transform transition-all duration-300 text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive("Education")}
        >
          <a href="#education">Education</a>
        </li>
        <li
          className={`text-secondary hover:text-white hover:scale-110 transform transition-all duration-300 text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive("Gallery")}
        >
          <a href="#gallery">Gallery</a>
        </li>
      </ul>

      {/* Centered Logo with Popup */}
      <div className="relative group">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 object-contain cursor-pointer"
        />
        {/* Stylish Popup Label */}
        <div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-sm font-bold py-1 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Jalal Mansour | DuinoBot
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex justify-end items-center w-full">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            {/* New Buttons for Mobile */}
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
              onClick={() => {
                setToggle(!toggle);
                setActive("Education");
              }}
            >
              <a href="#education">Education</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
              onClick={() => {
                setToggle(!toggle);
                setActive("Gallery");
              }}
            >
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
