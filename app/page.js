import Image from "next/image";

// Components
import Navbar from "@/components/layout/Navbar";

// Images
import arrowIcon from "../public/images/landing_page/arrow-icon-gradient.png";

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
          <div className="grid grid-cols-12 gap-4 py-48">
            {/* Start Left Part */}
            <div className="col-span-5 border">
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
            </div>
            {/* End Left Part */}

            {/* Start Right Part */}
            <div className="col-span-7 border"></div>
            {/* End Right Part */}
          </div>
        </section>
        {/* End Herosection */}
      </main>
      {/* End Main Content */}
    </>
  );
}
