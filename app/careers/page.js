import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Meta from "@/components/layout/Meta";

// Images
import careersBG from "../../public/images/careers/careers-bg.png";
import students from "../../public/images/careers/students.jpg";
import entryLevel from "../../public/images/careers/entry-level-professionals.jpg";
import professionals from "../../public/images/careers/experienced-professionals.jpg";
import php from "../../public/images/careers/php.png";

// SVG
import mailIcon from "../../public/images/careers/mail-icon.svg";

export default function Careers() {
  return (
    <>
      {/* ========= Start Meta Generator ========= */}
      <Meta title={"Matrix Philippines - Careers"} />
      {/* ========= End Meta Generator ========= */}

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
        >
          <h3
            className="text-xl 
            md:text-3xl"
          >
            Discover the job opportunities at Matrix Software Solutions
          </h3>

          {/* Start Flex Card Container */}
          <div
            className="flex flex-col space-x-0 space-y-4 mt-6 
            lg:flex-row lg:space-y-0 lg:space-x-4"
          >
            {/* Item 1 */}
            <div
              className="w-full relative drop-shadow h-[100vw]
              sm:h-[38rem] md:h-[42rem] lg:h-[30rem] xl:h-[34rem]"
            >
              {/* Card Content */}
              <div className="absolute w-full h-full bg-white z-10">
                {/* Image */}
                <Image src={students} alt={students} />
                {/* Text */}
                <div
                  className="px-4 py-3
                  sm:py-6 md:px-6 2xl:px-12"
                >
                  <h4
                    className="text-xl font-sansMedium
                    sm:text-2xl"
                  >
                    OJT/Interns Students
                  </h4>
                  <p
                    className="text-soft mt-2 text-sm
                    sm:mt-6 sm:text-base"
                  >
                    Gain valuable experience and enhance your skills through a
                    diverse range of internships or full-time positions designed
                    for both undergraduate and graduate students.
                  </p>
                </div>
              </div>
              {/* Back Color */}
              <div className="absolute bg-primary h-full w-full ml-1 mt-1"></div>
            </div>

            {/* Item 2 */}
            <div
              className="w-full relative drop-shadow h-[100vw]
              sm:h-[38rem] md:h-[42rem] lg:h-[30rem] xl:h-[34rem]"
            >
              {/* Card Content */}
              <div className="absolute w-full h-full bg-white z-10">
                {/* Image */}
                <Image src={entryLevel} alt={entryLevel} />
                {/* Text */}
                <div
                  className="px-4 py-3
                  sm:py-6 md:px-6 2xl:px-12"
                >
                  <h4
                    className="text-xl font-sansMedium
                    sm:text-2xl"
                  >
                    Entry-Level Professionals
                  </h4>
                  <p
                    className="text-soft mt-2 text-sm
                    sm:mt-6 sm:text-base"
                  >
                    Share your skills in business and technology, and let your
                    ambition guide you as you strive for success.
                  </p>
                </div>
              </div>
              {/* Back Color */}
              <div className="absolute bg-primary h-full w-full ml-1 mt-1"></div>
            </div>

            {/* Item 3 */}
            <div
              className="w-full relative drop-shadow h-[100vw]
              sm:h-[38rem] md:h-[42rem] lg:h-[30rem] xl:h-[34rem]"
            >
              {/* Card Content */}
              <div className="absolute w-full h-full bg-white z-10">
                {/* Image */}
                <Image src={professionals} alt={professionals} />
                {/* Text */}
                <div
                  className="px-4 py-3
                  sm:py-6 md:px-6 2xl:px-12"
                >
                  <h4
                    className="text-xl font-sansMedium
                    sm:text-2xl"
                  >
                    Experienced Professional
                  </h4>
                  <p
                    className="text-soft mt-2 text-sm
                    sm:mt-6 sm:text-base"
                  >
                    Expand your skills and knowledge by working closely with
                    major clients, using your expertise to find innovative
                    solutions to their most pressing challenges.
                  </p>
                </div>
              </div>
              {/* Back Color */}
              <div className="absolute bg-primary h-full w-full ml-1 mt-1"></div>
            </div>
          </div>
          {/* End Flex Card Container */}
        </section>
        {/* ========= End Three Cards Section ========= */}

        {/* ========= Start Sub Card Section ========= */}
        <section
          className="section-container mb-12
          sm:mb-24"
          id="sub-card"
        >
          {/* Start Flex Container */}
          <div
            className="bg-card py-6 flex flex-col 
            lg:flex-row"
          >
            {/* Image */}
            <div
              className="flex items-center px-[4.8vw] py-4 basis-4/12 justify-center
              lg:border-r-4 lg:gradientBorderVertical"
            >
              <Image src={php} alt={php} />
            </div>
            {/* Text */}
            <div
              className="basis-8/12 px-4 py-6 text-center 
              lg:text-center sm:px-24 sm:py-12"
            >
              <h5
                className="text-lg uppercase font-sansMedium 
                sm:text-xl"
              >
                Unlock the Web&#39;s Potential: Join Our Team of Innovative Web
                Developers!
              </h5>
              <p
                className="text-base text-soft mt-4 
                sm:text-xl"
              >
                We are seeking a skilled web developer proficient in HTML, CSS,
                and basic JavaScript, with some experience in PHP.
              </p>
            </div>
          </div>
          {/* End Flex Container */}
        </section>
        {/* ========= End Sub Card Section ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </>
  );
}
