import React from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import footerBrand from "../../public/images/footer/footer-brand.png";

// SVG
import facebookSVG from "../../public/images/footer/facebook-icon.svg";
import facebookGradientSVG from "../../public/images/footer/facebook-icon-gradient.svg";

function Footer() {
  return (
    <footer className="bg-[#262626] text-white py-24" id="footer">
      <div className="section-container">
        {/* Start Flex Container */}
        <div className="flex justify-between">
          <div>
            <Image className="w-12" src={footerBrand} alt="footer-brand" />
          </div>
          <div>
            <div className="uppercase font-sansLight">Follow us:</div>
            <div>
              <Link href="/">
                <div className="group">
                  <Image
                    className="float-right mt-4 block group-hover:hidden"
                    src={facebookSVG}
                    alt="facebook-icon"
                  />
                  <Image
                    className="float-right mt-4 hidden group-hover:block"
                    src={facebookGradientSVG}
                    alt="facebook-icon-gradient"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* End Flex Container */}
      </div>
    </footer>
  );
}

export default Footer;
