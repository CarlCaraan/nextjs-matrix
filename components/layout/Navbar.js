import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      {/* Start Navigation */}
      <nav className="bg-white container mx-auto">
        <div className="flex justify-between bg-red-400">
          {/* Logo */}
          <div>
            <Link href="/">Logo</Link>
          </div>

          {/* Nav Links */}
          <div>Links</div>

          {/* Contact Us Button */}
          <div>Contact Us</div>
        </div>
      </nav>
      {/* End Navigation */}
    </>
  );
}

export default Navbar;
