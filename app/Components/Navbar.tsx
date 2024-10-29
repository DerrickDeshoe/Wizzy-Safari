"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";  // Import the close icon from react-icons
import Logo from "../../public/Images/HomePage/NavImage.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Tour package", href: "/TourPackage" },
    { label: "Gallery", href: "/Gallery" },
    { label: "Contact us", href: "/Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white h-14 flex justify-end items-center lg:items-center lg:justify-between text-black px-10 z-30">
      <div className="hidden lg:flex space-x-3">
        <div className="">
          <Link href="./">
            <Image src={Logo} alt="image" className="w-[40%] lg:w-[50%]" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center space-x-3 font-mulishSemiBold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-200 hover:text-zinc-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="/Contact"
        className="hidden lg:flex bg-brown text-white font-mulishSemiBold absolute top-3 right-5 z-90 rounded-lg border border-green"
      >
        <button className="p-2 px-2 lg:px-5 font-semibold text-xs">Sign Up</button>
      </Link>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-zinc-500 focus:outline-none"
        >
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 bottom-0 right-0 w-2/3 max-w-xs bg-green h-full transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40 flex flex-col items-center justify-center font-mulishSemiBold text-white`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white text-2xl focus:outline-none"
        >
          <FiX />
        </button>

        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-200 hover:text-zinc-500 transition-colors"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/Contact"
            onClick={toggleMenu}
            className="bg-brown font-mulishSemiBold w-full text-center py-2 rounded"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
