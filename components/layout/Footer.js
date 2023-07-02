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
    <footer
      className="bg-[#262626] text-white py-16 
      sm:py-24"
      id="footer"
    >
      <div className="section-container">
        {/* Start Flex Container */}
        <div
          className="flex flex-col justify-between text-center
          sm:flex-row sm:text-left"
        >
          <div
            className="mx-auto 
            sm:mx-0"
          >
            <Image className="w-12" src={footerBrand} alt="footer-brand" />
          </div>
          <div>
            <div
              className="uppercase font-sansLight mt-12
              sm:mt-0"
            >
              Follow us:
            </div>
            <Link
              className="mt-4 mx-auto inline-block group
              sm:float-right sm:mx-0 sm:block"
              href="https://www.facebook.com/profile.php?id=100093822897571"
              target="_blank"
            >
              <Image
                className="block group-hover:hidden"
                src={facebookSVG}
                alt="facebook-icon"
              />
              <Image
                className="hidden group-hover:block"
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
        <div
          className="flex flex-col justify-between mt-4
          lg:flex-row"
        >
          <div
            className="text-center
            2xl:w-1/3 lg:text-left lg:w-1/2"
          >
            Matrix focus on responsive design, user experience, and the latest
            technologies, we strive to deliver exceptional results that help our
            clients succeed in the digital world.
          </div>
          {/* Footer Links */}
          <div
            className="text-panel 
            xl:w-1/3 lg:w-1/2"
          >
            <div
              className="flex flex-col space-y-4 text-center justify-center mt-12
              lg:justify-end md:mt-4 lg:mt-0 sm:space-x-4 sm:flex-row sm:space-y-0"
            >
              <div>
                <Link className="underline hover:no-underline" href="/">
                  About
                </Link>
              </div>
              <div>
                <Link className="underline hover:no-underline" href="/">
                  Support
                </Link>
              </div>
              <div>
                <Link className="underline hover:no-underline" href="/">
                  Contact
                </Link>
              </div>
              <div>
                <Link className="underline hover:no-underline" href="/">
                  Terms of use
                </Link>
              </div>
              <div>
                <Link className="underline hover:no-underline" href="/">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Flex Container */}

        <p
          className="text-panel text-sm mt-12 font-sansMedium text-center
          lg:text-left lg:float-right md:mt-10 lg:mt-4"
        >
          Copyright ©{new Date().getFullYear()}{" "}
          <span className="gradientText">Matrix Software Solution</span> All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
