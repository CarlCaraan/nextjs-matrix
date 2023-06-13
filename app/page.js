import Image from "next/image";

// Components
import Navbar from "@/components/layout/Navbar";
import ContactForm from "@/components/ContactForm";

// Images
import arrowIcon from "../public/images/landing_page/arrow-icon-gradient.png";
import heroBG from "../public/images/landing_page/herosection-bg.png";
import subheroBG1 from "../public/images/products/project13.png";
import subheroBG2 from "../public/images/products/project11.png";
import subheroBG3 from "../public/images/products/project7.png";
import subheroBG4 from "../public/images/products/project4.png";
import contactBG from "../public/images/landing_page/contact-bg.jpg";

// SVG
import webDesignSVG from "../public/images/landing_page/webdesign-svg-icon.svg";
import websiteSVG from "../public/images/landing_page/website-svg-icon.svg";
import logoDesignSVG from "../public/images/landing_page/logodesign-svg-icon.svg";

import locationSVG from "../public/images/landing_page/contact-section/location-svg-icon.svg";
import telephoneSVG from "../public/images/landing_page/contact-section/telephone-svg-icon.svg";
import envelopeSVG from "../public/images/landing_page/contact-section/envelope-svg-icon.svg";
import clockSVG from "../public/images/landing_page/contact-section/clock-svg-icon.svg";

export default function Home() {
  return (
    <>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Herosection ========= */}
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
                low cost-effective web design services to cater to all your
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
        {/* ========= End Herosection ========= */}

        {/* ========= Start SubHerosection ========= */}
        <section className="section-container my-28" id="sub-herosection">
          {/* Start Flex Container */}
          <div className="flex">
            {/* Start Left Part */}
            <div className="basis-1/2">
              <h6 className="uppercase text-soft font-sansMedium">
                Web agency based on laguna, Philippines
              </h6>

              <h4 className="gradientText uppercase font-sansBold gradient text-2xl mt-4">
                Creative business design ideas
              </h4>

              <p className="text-soft mt-4 indent-8">
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
              <button className="gradientButton gradientText mt-8">
                Read more
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
        {/* ========= End SubHerosection ========= */}

        {/* ========= Start Carousel Section ========= */}
        <div className="bg-card rounded-b-[25%] shadow-sm">
          <section className="section-container py-24" id="carousel-section">
            <p className="text-[18px] text-soft uppercase font-sansMedium text-center">
              Custom Web Development Services Tailored to Your Business Needs
            </p>

            <h3 className="text-3xl gradientText uppercase text-center mt-2 font-sansMedium">
              Transforming Ideas into Stunning Web Solutions
            </h3>

            {/* Start Flex Container */}
            <div className="flex gap-4 mt-16">
              <div className="basis-1/3">
                <Image
                  className="mx-auto"
                  src={webDesignSVG}
                  alt="webdesign-svg"
                />
                <h4 className="mt-12 text-dark text-2xl font-sansBold text-center">
                  Web Design
                </h4>
                <p className="text-soft font-sansLight text-center mt-4">
                  We specialize in designing sleek and modern websites that
                  capture attention and deliver seamless user experiences. Our
                  expert team combines creativity and technical expertise to
                  craft visually stunning and functional web solutions tailored
                  to your business needs.
                </p>
              </div>
              <div className="basis-1/3">
                <Image className="mx-auto" src={websiteSVG} alt="website-svg" />
                <h4 className="mt-12 text-dark text-2xl font-sansBold text-center">
                  Website
                </h4>
                <p className="text-soft font-sansLight text-center mt-4">
                  Our team builds responsive and dynamic websites that captivate
                  users, drive engagement, and empower your online brand.
                </p>
              </div>
              <div className="basis-1/3">
                <Image
                  className="mx-auto"
                  src={logoDesignSVG}
                  alt="logodesign-svg"
                />
                <h4 className="mt-12 text-dark text-2xl font-sansBold text-center">
                  Logo Design
                </h4>
                <p className="text-soft font-sansLight text-center mt-4">
                  Make a lasting impression with a captivating and distinctive
                  logo that represents your brand&#39;s identity. Our skilled
                  designers craft unique and memorable logos that leave a
                  lasting impact and help your business stand out in the digital
                  landscape.
                </p>
              </div>
            </div>
            {/* End Flex Container */}
          </section>
        </div>
        {/* ========= End Carousel Section ========= */}

        {/* ========= Start Contact Section ========= */}
        <section className="section-container py-24" id="contact-section">
          {/* Start Flex Container */}
          <div className="flex gap-4">
            {/* Start Left Part */}
            <div className="border basis-1/2 relative">
              <Image className="w-full" src={contactBG} alt="contact-bg" />
              <div className="absolute top-10 left-0 w-5/6 h-5/6 bg-white px-12">
                <h3 className="text-3xl text-panel font-sansBold mt-4 text-center">
                  Get in touch
                </h3>
                <div className="text-panel text-center leading-none">
                  Drop us a message
                </div>

                {/* Start Contact Form Component */}
                <ContactForm />
                {/* End Contact Form Component */}
              </div>
            </div>
            {/* End Left Part */}

            {/* Start Right Part */}
            <div className="basis-1/2">
              <h1 className="text-5xl mt-12">
                Talk to <span className="gradientText">our expert</span> in
                product analytics
              </h1>

              <p className="mt-4 text-soft">
                Have a question about pricing, plans or Growthly? Fill out the
                form and our product analytics expert will be in touch directly.
              </p>

              <p className="mt-4 font-sansBold">Laguna, Philippines</p>

              {/* Start Grid Container */}
              <div className="mt-4 grid grid-cols-2 gap-[2px]">
                {/* Card 1 */}
                <div className="flex flex-col space-y-2 bg-card p-4">
                  <div className="flex gap-4">
                    <div className="basis-1/8">
                      <Image
                        className="w-6 mt-1"
                        src={locationSVG}
                        alt="location-svg"
                      />
                    </div>
                    <div className="basis-7/8 text-soft">
                      National Highway, Sitio Ilaya, Brgy. Sto Domingo, Bay
                      Laguna
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="basis-1/8">
                      <Image
                        className="w-4 mt-1"
                        src={telephoneSVG}
                        alt="telephone-svg"
                      />
                    </div>
                    <div className="basis-7/8 text-soft underline">
                      +639123456789
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col space-y-2 bg-card p-4">
                  <div className="flex gap-4">
                    <div className="basis-1/8">
                      <Image
                        className="w-5 mt-1"
                        src={locationSVG}
                        alt="location-svg"
                      />
                    </div>
                    <div className="basis-7/8 text-soft">
                      Brgy. Bubukal, Sitio Sampaguita, Sta. Cruz Laguna
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="basis-1/8">
                      <Image
                        className="w-4 mt-1"
                        src={telephoneSVG}
                        alt="telephone-svg"
                      />
                    </div>
                    <div className="basis-7/8 text-soft underline">
                      +639559168806
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-card p-4">
                  <div className="flex gap-4">
                    <div className="basis-1/8">
                      <Image
                        className="w-4 mt-1"
                        src={envelopeSVG}
                        alt="envelope-svg"
                      />
                    </div>
                    <div className="basis-7/8 text-soft">
                      Email <br /> matrixsoftwaresolution@gmail.com
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-card p-4">
                  <div className="flex gap-4">
                    <div className="basis-1/8">
                      <Image
                        className="w-4 mt-1"
                        src={clockSVG}
                        alt="clock-svg"
                      />
                    </div>
                    <div className="basis-7/8 text-soft">
                      Schedule <br /> 24 Hours / 7 Days Open
                    </div>
                  </div>
                </div>
              </div>
              {/* End Grid Container */}

              <p className="text-sm mt-4 text-soft">
                Don&#39;t worry! We could arrange a costless meeting to discuss
                how we could collaborate to offer you a solution.
              </p>
            </div>
            {/* End Right Part */}
          </div>
          {/* End Flex Container */}
        </section>
        {/* ========= End Contact Section ========= */}
      </main>
      {/* End Main Content */}
    </>
  );
}
