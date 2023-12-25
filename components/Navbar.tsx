"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Hamburger from "hamburger-react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="sticky top-0
                flex 
                flex-col 
                bg-sky-200
                bg-transparent-200
                z-10
                bg-opacity-90
                lg:flex-row lg:justify-between lg:items-center"
    >
      <div
        className="flex 
                  justify-between 
                  items-center 
                  lg:w-1/4"
      >
        <Image src={logo} alt="Logo" />
        <div className="lg:hidden mr-5">
          <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} />
        </div>
      </div>
      <div
        className={`lg:w-3/4 lg:flex lg:justify-end lg:items-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="flex 
                    flex-col 
                    lg:flex-row 
                    gap-4 
                    ml-auto 
                    p-5 
                    font-bold 
                    text-black 
                    text-xl 
                    rounded-lg"
        >
          <a className="hover-link">About</a>
          <a className="hover-link">Residential</a>
          <a className="hover-link">Commercial</a>
          <a className="hover-link">Gallery</a>
        </div>
        <Button className={twMerge(`text-xl mr-5`)}>Contact</Button>
      </div>
    </div>
  );
};

export default Navbar;
