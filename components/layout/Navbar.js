"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Images
import brand from "../../public/images/landing_page/brand.png";

function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Start Navigation */}
      <nav className="bg-white border border-b-1">
        <div className="section-container flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image className="w-32" src={brand} alt="brand" />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex h-16">
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
              About Matrix
              <span className={pathname === "/about" ? "nl-active" : ""}></span>
            </Link>
          </div>

          {/* Contact Us Button */}
          <button className="gradientButton gradientText">Contact Us</button>
        </div>
      </nav>
      {/* End Navigation */}
    </>
  );
}

export default Navbar;
