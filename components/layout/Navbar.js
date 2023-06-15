"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Images
import brand from "../../public/images/navigation/brand.png";

// SVG
import facebookSVG from "../../public/images/footer/facebook-icon.svg";
import facebookGradientSVG from "../../public/images/footer/facebook-icon-gradient.svg";

function Navbar() {
  const pathname = usePathname();

  // Hamburger Function
  const [isActive, setActive] = useState("false");
  const hamburgerClickHandler = () => {
    setActive(!isActive);
  };
  const navClickHandler = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav className="bg-white border border-b-1">
        <div className="section-container flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image className="w-32" src={brand} alt="brand" />
          </Link>

          {/* Nav Links */}
          <div className="hidden h-16 md:flex">
            <Link className="navlinks relative" href="/products">
              Products
              <span
                className={pathname === "/products" ? "nl-active" : ""}
              ></span>
            </Link>
            <Link className="navlinks relative" href="/solutions">
              Solutions
              <span
                className={pathname === "/solutions" ? "nl-active" : ""}
              ></span>
            </Link>
            <Link className="navlinks relative" href="/careers">
              Careers
              <span
                className={pathname === "/careers" ? "nl-active" : ""}
              ></span>
            </Link>
            <Link className="navlinks relative" href="/support">
              Support
              <span
                className={pathname === "/support" ? "nl-active" : ""}
              ></span>
            </Link>
            <Link className="navlinks relative" href="/about">
              About <span className="hidden lg:block">&nbsp;Matrix</span>
              <span className={pathname === "/about" ? "nl-active" : ""}></span>
            </Link>
          </div>

          {/* Contact Us Button */}
          <button className="gradientButton gradientText hidden md:block">
            <Link href="#contact-section">Contact Us</Link>
          </button>

          {/* Start Hamburger Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={
                isActive
                  ? "hamburger z-50 block md:hidden focus:outline-none"
                  : "open hamburger z-50 block md:hidden focus:outline-none"
              }
              onClick={hamburgerClickHandler}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          {/* End Hamburger Button */}
        </div>
      </nav>

      {/* ========= Start Mobile Navigation ========= */}
      <div
        className={
          isActive
            ? "hidden absolute top-0 left-0 right-0 bottom-0 bg-white z-40"
            : "md:hidden absolute top-0 left-0 right-0 bottom-0 bg-white z-40"
        }
      >
        {/* Logo */}
        <Link className="inline-block" href="/" onClick={navClickHandler}>
          <Image className="w-32 ml-4" src={brand} alt="brand" />
        </Link>
        {/* Start Flex Container */}
        <div className="flex flex-col font-sansMedium">
          <Link className="pl-4 py-2 border-y" href="/">
            Products
          </Link>
          <Link className="pl-4 py-2 border-b" href="/">
            Solutions
          </Link>
          <Link className="pl-4 py-2 border-b" href="/">
            Careers
          </Link>
          <Link className="pl-4 py-2 border-b" href="/">
            Support
          </Link>
          <Link className="pl-4 py-2 border-b" href="/">
            Contact Us
          </Link>
          <Link className="pl-4 py-2 border-b" href="/">
            About Matrix
          </Link>
        </div>
        {/* End Flex Container */}

        {/* Social Icon */}
        <div className="text-center mt-12">
          <div className="uppercase font-sansLight">Follow us:</div>
          <Link href="/">
            <Image
              className="mt-4 mx-auto"
              src={facebookGradientSVG}
              alt="facebook-icon-gradient"
            />
          </Link>
        </div>
      </div>
      {/* ========= End Mobile Navigation ========= */}
    </>
  );
}

export default Navbar;
