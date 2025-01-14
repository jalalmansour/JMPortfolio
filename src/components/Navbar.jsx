import React, { useState } from "react";
import { logo } from "../assets"; // Replace with your logo import

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-opacity-30 backdrop-blur-md flex justify-between items-center p-4"
      style={{
        background: "rgba(255, 255, 255, 0.1)", // Glassmorphism effect
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      {/* Left Side: Logo and Label */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        <div
          className="px-4 py-2 rounded-md"
          style={{
            background:
              "linear-gradient(135deg, rgba(128,0,128,0.8), rgba(75,0,130,0.8))", // Neon purple gradient
            boxShadow: "0 4px 15px rgba(128, 0, 128, 0.75)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p className="text-white font-bold text-sm">Jalal Mansour | DuinoBot</p>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <ul className="list-none flex gap-6">
        {["Home", "About", "Work", "Blog", "Gallery", "Education"].map(
          (item, index) => (
            <li
              key={index}
              className={`cursor-pointer text-white hover:text-purple-400 text-sm ${
                active === item ? "text-purple-400 font-semibold" : ""
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          )
        )}
      </ul>

      {/* Right Side: Time */}
      <div className="text-white text-sm font-medium">
        {new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>
    </nav>
  );
};

export default Navbar;
