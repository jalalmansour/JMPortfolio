import React, { useState } from "react";
import { logo } from "../assets"; // Replace with your logo import

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center p-4">
      {/* Background Under Buttons */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-opacity-30 backdrop-blur-md rounded-full px-6 py-2 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.1)", // Glassmorphism effect
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      ></div>

      {/* Floating Navbar Buttons */}
      <div className="relative flex justify-between items-center gap-8 w-full max-w-screen-lg px-4">
        {/* Logo with Hover Label */}
        <div
          className="absolute left-4 top-4 z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 cursor-pointer object-contain"
          />
          {isHovered && (
            <div
              className="absolute top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-md text-white text-xs"
              style={{
                background:
                  "linear-gradient(135deg, rgba(128,0,128,0.8), rgba(75,0,130,0.8))",
                boxShadow: "0 4px 15px rgba(128, 0, 128, 0.75)",
              }}
            >
              Jalal Mansour | DuinoBot
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="list-none flex gap-6">
          {[
            { name: "Home", onClick: () => console.log("Go to Home") },
            { name: "About", onClick: () => console.log("Go to About") },
            { name: "Work", onClick: () => console.log("Go to Work") },
            { name: "Blog", onClick: () => console.log("Go to Blog") },
            { name: "Gallery", onClick: () => console.log("Go to Gallery") },
            { name: "Education", onClick: () => console.log("Go to Education") },
          ].map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer text-white hover:text-purple-400 text-sm ${
                active === item.name ? "text-purple-400 font-semibold" : ""
              }`}
              onClick={() => {
                setActive(item.name);
                item.onClick();
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
