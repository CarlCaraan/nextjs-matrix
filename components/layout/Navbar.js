import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      {/* Start Navigation */}
      <nav className="bg-white">
        <Link href="/">Logo</Link>
      </nav>
      {/* End Navigation */}
    </>
  );
}

export default Navbar;
