import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Images
import solutionsBG from "../../public/images/solutions/solutions-bg.jpg";

// SVG
import calendarIcon from "../../public/images/solutions/calendar-icon.svg";
import startupIcon from "../../public/images/solutions/startup-icon.svg";
import standardIcon from "../../public/images/solutions/standard-icon.svg";
import enterpriseIcon from "../../public/images/solutions/enterprise-icon.svg";

export default function Solutions() {
  return (
    <>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Hero Section ========= */}
        <section
          className="overflow-hidden flex items-center relative h-[50vh]
          2xl:h-[35vw] sm:h-[50vw]"
          id="herosection"
        >
          <Image
            className="absolute bg-no-repeat bg-center top-0 w-full h-full object-cover"
            src={solutionsBG}
            alt="solutions-bg"
          />
          {/* BG Overlay */}
          <div className="absolute inset-0 bg-teal-700 opacity-30"></div>

          {/* Caption Text */}
          <div
            className="absolute section-container inset-0 flex flex-col justify-center text-white gap-4 
            sm:gap-6 lg:gap-8 xl:gap-12"
          >
            <h1
              className="w-2/3 font-sansBold text-lg
              sm:text-2xl md:text-3xl xl:text-5xl sm:w-5/6 lg:w-2/3"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              Crafting your Digital Identity with stunning Websites and Logos
            </h1>
            <p
              className="text-sm w-full
              xl:text-xl lg:text-lg md:w-4/5"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              At our digital solutions, we create stunning websites and
              professional logos that accurately represent your brand. Our team
              of talented designers and developers work closely with you to
              bring your vision to life and create a powerful online presence
              for your business. Contact us today to learn how we can help
              elevate your brand.
            </p>
            {/* Button */}
            <div>
              <Link href="/">
                <button className="border-2 px-4 py-2 border-secondary bg-secondary hover:gradientBorder hover:drop-shadow duration-200 flex space-x-4 items-center">
                  <span>Book a meeting</span>
                  <Image
                    className="w-4"
                    src={calendarIcon}
                    alt="calendar-icon"
                  />
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* ========= End Hero Section ========= */}

        {/* ========= Start Three Cards Section ========= */}
        <section className="section-container py-24" id="three-cards-section">
          {/* Start Flex Container */}
          <div
            className="flex flex-col space-y-4 space-x-0
            lg:flex-row lg:space-y-0 lg:space-x-4"
          >
            <div
              className="bg-card w-full drop-shadow rounded-sm flex flex-col items-center px-8 py-6
              2xl:px-24 2xl:py-12"
            >
              <Image
                className="w-24 mt-5"
                src={startupIcon}
                alt={startupIcon}
              />
              <h4 className="font-sansBold text-2xl mt-[22.5px]">CMS</h4>
              <h5 className="text-xl text-[#ACACAC]">Starter</h5>
              <p className="text-justify text-soft mt-2">
                If you own a small or startup business, it would be beneficial
                for you to invest in a professional web design for your company,
                as it has the potential to generate profitable outcomes.
              </p>
            </div>
            <div
              className="bg-card w-full drop-shadow rounded-sm flex flex-col items-center px-8 py-6
              2xl:px-24 2xl:py-12"
            >
              <Image className="w-32" src={standardIcon} alt={standardIcon} />
              <h4 className="font-sansBold text-2xl mt-2">Small-Scale</h4>
              <h5 className="text-xl text-[#ACACAC]">Standard</h5>{" "}
              <p className="text-justify text-soft mt-2">
                This option is ideal for individuals and businesses aiming to
                enter the online market and commence their sales activities on
                the internet.
              </p>
            </div>
            <div
              className="bg-card w-full drop-shadow rounded-sm flex flex-col items-center px-8 py-6
              2xl:px-24 2xl:py-12"
            >
              <Image
                className="w-24 mt-4"
                src={enterpriseIcon}
                alt={enterpriseIcon}
              />
              <h4 className="font-sansBold text-2xl mt-[24.5px]">
                Enterprise Website
              </h4>
              <h5 className="text-xl text-[#ACACAC]">Plus</h5>
              <p className="text-justify text-soft mt-2">
                This type of website offers tailored features with custom
                functions designed to fit your specific needs. Investing a
                significant amount in a website like this may seem like a
                substantial financial commitment, but you can be confident that
                you will receive the full value of what you paid for.
              </p>
            </div>
          </div>
          {/* End Flex Container */}
        </section>
        {/* ========= End Three Cards Section ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </>
  );
}
