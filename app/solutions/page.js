import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Meta from "@/components/layout/Meta";

// Images
import solutionsBG from "../../public/images/solutions/solutions-bg.jpg";
import contextBG from "../../public/images/solutions/context-bg.jpg";

// SVG
import calendarIcon from "../../public/images/solutions/calendar-icon.svg";
import startupIcon from "../../public/images/solutions/startup-icon.svg";
import standardIcon from "../../public/images/solutions/standard-icon.svg";
import enterpriseIcon from "../../public/images/solutions/enterprise-icon.svg";

export default function Solutions() {
  return (
    <>
      {/* ========= Start Meta Generator ========= */}
      <Meta title={"Matrix Philippines - Solutions"} />
      {/* ========= End Meta Generator ========= */}

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
              className="bg-card w-full drop-shadow rounded-sm flex flex-col items-center px-8 py-6 gradientBorder border-4
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

        {/* ========= Start Bottom Content Section ========= */}
        <section className="section-container pb-24" id="bottom-content">
          {/* Start Flex Container */}
          <div
            className="flex flex-col-reverse 
            lg:space-x-12 lg:flex-row"
          >
            {/* Start Left Part */}
            <div className="lg:w-7/12">
              <h4
                className="text-lg font-sansMedium
                sm:text-2xl sm:font-sans"
              >
                Factors to take into account that impact the pricing of web
                design:
              </h4>
              <div
                className="flex flex-col space-y-4 mt-4
                sm:mt-12"
              >
                {/* Item 1 */}
                <div className="flex flex-row space-x-2">
                  <div>1.</div>
                  <div>
                    <span className="font-sansMedium">
                      Complexity of the project:
                    </span>{" "}
                    The complexity of the website is a major factor in
                    determining the cost. A simple brochure-style website with a
                    few pages will generally be less expensive than a complex
                    e-commerce website with multiple product pages, payment
                    gateways, and custom functionality.
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-row space-x-2">
                  <div>2.</div>
                  <div>
                    <span className="font-sansMedium">
                      Design and customization:
                    </span>{" "}
                    The level of design and customization required for the
                    website can impact the price. If you need a unique and
                    visually appealing design that requires extensive
                    customization, it will likely cost more compared to using
                    pre-designed templates.
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-row space-x-2">
                  <div>3.</div>
                  <div>
                    <span className="font-sansMedium">
                      Functionality and features:
                    </span>{" "}
                    The specific functionalities and features you need on your
                    website will affect the cost. For example, integrating a
                    content management system (CMS), implementing a blog, adding
                    a contact form, or creating a user registration system can
                    increase the overall cost.
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-row space-x-2">
                  <div>4.</div>
                  <div>
                    <span className="font-sansMedium">Responsive design:</span>{" "}
                    Responsive design ensures that your website is optimized for
                    different devices, such as desktops, tablets, and mobile
                    phones. Creating a responsive design may require additional
                    effort and resources, which can increase the price.
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex flex-row space-x-2">
                  <div>5.</div>
                  <div>
                    <span className="font-sansMedium"> Content creation:</span>{" "}
                    If you need assistance with creating content for your
                    website, such as copywriting, graphic design, or multimedia
                    elements, it may add to the overall cost.
                  </div>
                </div>

                {/* Item 6 */}
                <div className="flex flex-row space-x-2">
                  <div>6.</div>
                  <div>
                    <span className="font-sansMedium">
                      E-commerce functionality:
                    </span>{" "}
                    If you plan to sell products or services directly through
                    your website, implementing e-commerce functionality,
                    including product listings, shopping carts, and payment
                    gateways, can significantly impact the cost.
                  </div>
                </div>

                {/* Item 7 */}
                <div className="flex flex-row space-x-2">
                  <div>7.</div>
                  <div>
                    <span className="font-sansMedium">SEO considerations:</span>{" "}
                    Incorporating search engine optimization (SEO) best
                    practices into your website design can enhance its
                    visibility in search engine rankings. If you require SEO
                    services along with web design, it may affect the price.
                  </div>
                </div>

                {/* Item 8 */}
                <div className="flex flex-row space-x-2">
                  <div>8.</div>
                  <div>
                    <span className="font-sansMedium">
                      Timeline and urgency:
                    </span>{" "}
                    If you have a tight deadline or require expedited delivery,
                    it may incur additional costs, as it may require allocating
                    more resources or working overtime to meet your
                    requirements.
                  </div>
                </div>

                {/* Item 9 */}
                <div className="flex flex-row space-x-2">
                  <div>9.</div>
                  <div>
                    <span className="font-sansMedium">
                      Experience and expertise of the web designer:
                    </span>{" "}
                    The skill level and reputation of the web designer or web
                    design agency can affect pricing. Experienced and reputable
                    designers often charge higher rates due to their expertise
                    and track record.
                  </div>
                </div>

                {/* Item 10 */}
                <div className="flex flex-row space-x-2">
                  <div>10.</div>
                  <div>
                    <span className="font-sansMedium">
                      Additional services and ongoing maintenance:
                    </span>{" "}
                    Additional services like website maintenance, updates,
                    hosting, domain registration, and technical support may be
                    offered at an additional cost.
                  </div>
                </div>
              </div>
            </div>
            {/* End Left Part */}

            {/* Start Right Part */}
            <div className="lg:w-5/12">
              <Image
                className="w-full drop-shadow rounded-lg mb-12
                lg:mt-12 lg:mb-0"
                src={contextBG}
                alt="context-bg"
              />
            </div>
            {/* End Right Part */}
          </div>
          {/* End Flex Container */}
        </section>
        {/* ========= End Bottom Content Section ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </>
  );
}
