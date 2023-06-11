import Image from "next/image";

// Components
import Navbar from "@/components/layout/Navbar";

// Images
import arrowIcon from "../public/images/landing_page/arrow-icon-gradient.png";
import heroBG from "../public/images/landing_page/herosection-bg.png";

export default function Home() {
  return (
    <>
      {/* Start Navigation */}
      <Navbar />
      {/* End Navigation */}

      {/* Start Main Content */}
      <main>
        {/* Start Herosection */}
        <section className="section-container" id="herosection">
          <div className="grid grid-cols-12 gap-4 py-36">
            {/* Start Left Part */}
            <div className="col-span-5">
              <h1 className="text-[2.4vw]">
                We design, develop and build software solution for you
              </h1>

              <h4 className="text-2xl text-soft mt-12">
                Build your business with confidence, transform your online
                vision into reality
              </h4>

              {/* Button */}
              <button className="flex space-x-2 items-center mt-12 border border-dark px-4 py-2 font-sansMedium group hover:shadow-md">
                <div>How IT Works</div>
                <Image
                  className="w-2 group-hover:ml-4 duration-200"
                  src={arrowIcon}
                  alt="arrow-icon"
                />
              </button>

              <p className="text-soft mt-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
                beatae magni! Odio est, quas aliquid deserunt vitae officiis
                omnis sint pariatur atque accusantium?
              </p>

              {/* Start Flex Container */}
              <div className="flex gap-[2px] mt-24">
                <div className="bg-card px-6 pt-4 pb-14 w-1/3 hover:bg-panel duration-200">
                  <div className="text-xs text-soft">Expert & Professional</div>
                  <div className="text-sm text-dark font-sansMedium">
                    Experienced Team
                  </div>
                </div>
                <div className="bg-card px-6 pt-4 pb-14 w-1/3 hover:bg-panel duration-200">
                  <div className="text-xs text-soft">Trusted Services</div>
                  <div className="text-sm text-dark font-sansMedium">
                    Quality and Efficiency
                  </div>
                </div>
                <div className="bg-card px-6 pt-4 pb-14 w-1/3 hover:bg-panel duration-200">
                  <div className="text-xs text-soft">Creative Minds</div>
                  <div className="text-sm text-dark font-sansMedium">
                    Elegant & User-Friendly
                  </div>
                </div>
              </div>
              {/* End Flex Container */}
            </div>
            {/* End Left Part */}

            {/* Start Right Part */}
            <div className="col-span-7 relative">
              <Image
                className="w-5/6 absolute bottom-0"
                src={heroBG}
                alt="hero-bg"
              />
              <div className="gradient border-4 w-3/5 h-full right-0 -bottom-16 absolute -z-10"></div>
            </div>
            {/* End Right Part */}
          </div>
        </section>
        {/* End Herosection */}
      </main>
      {/* End Main Content */}
    </>
  );
}
