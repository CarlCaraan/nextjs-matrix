import Image from "next/image";
import Link from "next/link";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Images
import solutionsBG from "../../public/images/solutions/solutions-bg.jpg";

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
          className="bg-slate-500 2xl:h-[30vw] overflow-hidden flex items-center relative"
          id="herosection"
        >
          <Image
            className="absolute bg-no-repeat bg-center"
            src={solutionsBG}
            alt="solutions-bg"
          />
          {/* BG Overlay */}
          <div className="absolute inset-0 bg-teal-700 opacity-30"></div>

          {/* Caption Text */}
          <div className="absolute section-container inset-0 flex flex-col justify-center text-white gap-12">
            <h1
              className="text-5xl w-2/3 font-sansBold"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              Crafting your Digital Identity with stunning Websites and Logos
            </h1>
            <p
              className="text-xl w-4/5"
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
                <button className="border-2 px-4 py-2 border-secondary bg-secondary hover:gradientBorder hover:drop-shadow duration-200">
                  Book a meeting
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* ========= End Hero Section ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </>
  );
}
