import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Images
import brand from "../../public/images/landing_page/brand.png";

function Navbar() {
  // const router = useRouter();
  // const { pathname } = router;

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
          <div className="flex h-16">
            <Link className="navlinks" href="/products">
              Products
            </Link>
            <Link className="navlinks" href="/">
              Solutions
            </Link>
            <Link className="navlinks" href="/">
              Careers
            </Link>
            <Link className="navlinks" href="/">
              Support
            </Link>
            <Link className="navlinks" href="/">
              About Matrix
            </Link>
          </div>

          {/* Contact Us Button */}
          <button className="gradientButton text-gradientPrimary">
            Contact Us
          </button>
        </div>
      </nav>
      {/* End Navigation */}
    </>
  );
}

export default Navbar;
