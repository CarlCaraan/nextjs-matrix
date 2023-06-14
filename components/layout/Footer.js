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
            <Link className="group" href="/">
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
            </Link>
          </div>
        </div>
        {/* End Flex Container */}

        {/* Socket HR */}
        <hr className="mt-4" />

        {/* Start Flex Container */}
        <div className="flex justify-between mt-4">
          <div className="basis-1/3">
            Matrix focus on responsive design, user experience, and the latest
            technologies, we strive to deliver exceptional results that help our
            clients succeed in the digital world.
          </div>
          {/* Footer Links */}
          <div className="base-1/3 text-panel">
            <div className="flex space-x-4">
              <Link className="underline hover:no-underline" href="/">
                About
              </Link>
              <Link className="underline hover:no-underline" href="/">
                Support
              </Link>
              <Link className="underline hover:no-underline" href="/">
                Contact
              </Link>
              <Link className="underline hover:no-underline" href="/">
                Terms of use
              </Link>
              <Link className="underline hover:no-underline" href="/">
                Privacy
              </Link>
            </div>
          </div>
        </div>
        {/* End Flex Container */}

        <p className="text-panel text-sm mt-4 float-right font-sansMedium">
          Copyright ©{new Date().getFullYear()}{" "}
          <span className="gradientText">Matrix Software Solution</span> All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
