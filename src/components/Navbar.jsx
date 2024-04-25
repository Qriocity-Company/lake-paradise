
import React, { useState } from "react";

import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";


export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" fixed top-0 bg-white w-[100vw] flex justify-between items-center px-4 md:px-[48px] py-4 md:py-8   md:text-[18px] z-20">
      <a href="/" className="relative font-barlow">
        <img src={logo} alt="logo" className="w-[100%]" width={100} />
        <div className="absolute flex items-center gap-1 w-[150px] top-[45%] -translate-y-1/2 left-[40%] ">
          <span>The Lake </span><span className="font-bold">Paradise</span>
        </div>
      </a>
      <div className="hidden md:flex gap-16 text-black font-Sg justify-between items-center font-arhivo">
        
        <a href="#about">About Us</a>
        <a href="#amneties">Amneties</a>
        <a href="#book" className="">Contact</a>
        <a href="#book" className="bg-[#2637D3] rounded-xl px-6 py-2 text-white hover:bg-[#212fb2] cursor-pointer">Book Now</a>
      </div>
      <div className="md:hidden flex items-center justify-between">
        {showMenu ? (
          <X
            className="text-black text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <Menu
            className="text-black text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      {showMenu && (
        <div className=" font-Poppins md:hidden fixed top-0 left-0 w-[85vw] h-[100%]  backdrop-blur-[0.8rem] flex flex-col gap-10 py-10 items-end pr-12  bg-gradient-to-l from-[#fe9d74] to-[#ff6b2c] text-white z-[50] font-semibold text-[24px] ">
          <X className=" text-2xl cursor-pointer " onClick={toggleMenu} />
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About Us</a>
          <a href="#amneties" onClick={toggleMenu}>Amneties</a>
          <a href="#book" onClick={toggleMenu}>Contact</a>
          <a href="#book" onClick={toggleMenu}>Book Now</a>
        </div>
      )}

    </div>
  );
};
