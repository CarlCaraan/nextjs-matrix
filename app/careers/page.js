import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Images
import careersBG from "../../public/images/careers/careers-bg.png";
// SVG
import mailIcon from "../../public/images/careers/mail-icon.svg";

export default function Careers() {
  return (
    <>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Hero Section ========= */}
        <section
          className="overflow-hidden flex items-start relative h-[50vh]
          2xl:h-[35vw] sm:h-[50vw]"
          id="herosection"
        >
          <Image
            className="absolute bg-no-repeat bg-center top-0 w-full h-full object-cover"
            src={careersBG}
            alt="careers-bg"
          />
          {/* BG Overlay */}
          <div className="absolute inset-0 bg-teal-900 opacity-70"></div>

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
              Explore an exciting realm of opportunities in your professional
              journey
            </h1>
            {/* Button */}
            <div>
              <Link href="/">
                <button className="border-2 px-4 py-2 border-secondary bg-secondary hover:gradientBorder hover:drop-shadow duration-200 flex space-x-4 items-center">
                  <span>Submit your resume</span>
                  <Image className="w-4" src={mailIcon} alt="mail-icon" />
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* ========= End Hero Section ========= */}

        {/* ========= Start SubHeroContent Section ========= */}
        <section className="bg-card" id="subherocontent-section">
          <div
            className="section-container py-12 
            sm:py-24"
          >
            <p
              className="font-sansLight 
            md:w-4/5"
            >
              We strive to attract individuals who possess a strong background
              in web development, with expertise in various programming
              languages, frameworks, and design principles. Whether you are a
              senior high, college student, or fresh graduate, we prioritize the
              meticulous selection of employees based solely on their skills and
              qualifications. As long as you possess the necessary skills and
              qualities, we ensure that our employees continue to grow, and our
              web development business thrives while consistently surpassing
              client expectations.
            </p>
          </div>
        </section>
        {/* ========= End SubHeroContent Section ========= */}

        {/* ========= Start Three Cards Section ========= */}
        <section
          className="section-container bg-white py-12
          sm:py-24"
          id="threecards-section"
        ></section>
        {/* ========= End Three Cards Section ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </>
  );
}
