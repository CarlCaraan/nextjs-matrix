import Image from "next/image";

// Components
import Navbar from "@/components/layout/Navbar";

// Images
import arrowIcon from "../public/images/landing_page/arrow-icon-gradient.png";
import heroBG from "../public/images/landing_page/herosection-bg.png";
import subheroBG1 from "../public/images/products/project13.png";
import subheroBG2 from "../public/images/products/project11.png";
import subheroBG3 from "../public/images/products/project7.png";
import subheroBG4 from "../public/images/products/project4.png";

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
          <div className="grid grid-cols-12 gap-4 py-28">
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
                Matrix is a dynamic, innovative, and forward-thinking start-up
                company based in <span className="font-sansMedium">Laguna</span>{" "}
                that takes great pride in providing top-notch, cutting-edge, and
                highly cost-effective web design services to cater to all your
                online needs.
              </p>

              {/* Start Flex Container */}
              <div className="flex gap-[2px] mt-24">
                <div className="bg-card px-6 pt-4 pb-14 basis-1/3 hover:bg-panel duration-200">
                  <div className="text-xs text-soft">Expert & Professional</div>
                  <div className="text-sm text-dark font-sansMedium">
                    Experienced Team
                  </div>
                </div>
                <div className="bg-card px-6 pt-4 pb-14 basis-1/3 hover:bg-panel duration-200">
                  <div className="text-xs text-soft">Trusted Services</div>
                  <div className="text-sm text-dark font-sansMedium">
                    Quality and Efficiency
                  </div>
                </div>
                <div className="bg-card px-6 pt-4 pb-14 basis-1/3 hover:bg-panel duration-200">
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
              <div className="gradientBorder border-4 w-3/5 h-full right-0 -bottom-16 absolute -z-10"></div>
            </div>
            {/* End Right Part */}
          </div>
        </section>
        {/* End Herosection */}

        {/* Start SubHerosection */}
        <section className="section-container my-28" id="sub-herosection">
          {/* Start Flex Container */}
          <div className="flex">
            {/* Start Left Part */}
            <div className="basis-1/2">
              <h6 className="uppercase text-soft font-sansMedium">
                Web agency based on laguna, Philippines
              </h6>

              <h4 className="text-gradientPrimary uppercase font-sansBold gradient text-2xl mt-4">
                Creative business design ideas
              </h4>

              <p className="text-soft mt-4">
                At our web development business, we specialize in crafting
                captivating and visually stunning online experiences that
                revolve around creative business design ideas. We understand
                that a well-designed website goes beyond just aesthetics; it is
                a powerful tool to communicate your{" "}
                <span className="font-sansMedium">
                  brand&#39;s unique identity{" "}
                </span>
                and engage your target audience.
                <br /> <br />
                From sleek and minimalist designs to bold and vibrant layouts,
                we believe in the power of creativity to make a lasting
                impression. Our team leverages the latest design trends,
                technologies, and{" "}
                <span className="font-sansMedium">
                  user experience principles
                </span>{" "}
                to ensure that every website we create not only looks visually
                appealing but also provides a seamless and intuitive browsing
                experience.
              </p>

              {/* Button */}
              <button className="gradientButton text-gradientPrimary mt-24">
                About Us
              </button>
            </div>
            {/* End Left Part */}

            {/* Start Right Part */}
            <div className="basis-1/2 ">
              <div className="ml-auto w-4/6 h-full">
                {/* Start Image Wrapper */}
                <div className="relative h-full">
                  <Image
                    className="absolute top-12 left-0 w-1/2 z-30 border-2
                    hover:scale-105 hover:z-50 transition ease-out duration-300 hover:shadow-lg"
                    src={subheroBG1}
                    alt="subhero-image1"
                  />
                  <Image
                    className="absolute top-16 right-4 w-1/2 z-40 border-2
                    hover:scale-105 hover:z-50 transition ease-out duration-300 hover:shadow-lg"
                    src={subheroBG2}
                    alt="subhero-image2"
                  />
                  <Image
                    className="absolute top-44 left-4 w-1/2 z-10 border-2
                    hover:scale-105 hover:z-50 transition ease-out duration-300 hover:shadow-lg"
                    src={subheroBG3}
                    alt="subhero-image3"
                  />
                  <Image
                    className="absolute top-48 right-0 w-1/2 z-20 border-2
                    hover:scale-105 hover:z-50 transition ease-out duration-300 hover:shadow-lg"
                    src={subheroBG4}
                    alt="subhero-image4"
                  />
                </div>
                {/* End Image Wrapper */}
              </div>
            </div>
            {/* End Right Part */}
          </div>
          {/* End Flex Container */}
        </section>
        {/* End SubHerosection */}
      </main>
      {/* End Main Content */}
    </>
  );
}
