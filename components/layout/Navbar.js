import React from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import brand from "../../public/images/landing_page/brand.png";

function Navbar() {
  return (
    <>
      {/* Start Navigation */}
      <nav className="bg-white border border-b-1">
        <div className="flex justify-between container mx-auto items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image className="w-32" src={brand} alt="brand" />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="flex space-x-12">
            <Link href="/">Products</Link>
            <Link href="/">Solutions</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Support</Link>
            <Link href="/">About Matrix</Link>
          </div>

          {/* Contact Us Button */}
          <div>Contact Us</div>
        </div>
      </nav>
      {/* End Navigation */}
    </>
  );
}

export default Navbar;
