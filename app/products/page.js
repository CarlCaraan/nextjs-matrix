"use client";
import Image from "next/image";

// Components
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// Images
import project0 from "../../public/images/products/project0.jpg";
import project1 from "../../public/images/products/project1.jpg";
import project2 from "../../public/images/products/project2.png";
import project3 from "../../public/images/products/project3.png";
import project4 from "../../public/images/products/project4.png";
import project5 from "../../public/images/products/project5.png";
import project6 from "../../public/images/products/project6.png";

const projectImages = [
  {
    id: 0,
    src: project0,
  },
  {
    id: 1,
    src: project1,
  },
  {
    id: 2,
    src: project2,
  },
  {
    id: 3,
    src: project3,
  },
  {
    id: 4,
    src: project4,
  },
  {
    id: 5,
    src: project5,
  },
  {
    id: 6,
    src: project6,
  },
];

export default function Products() {
  return (
    <>
      {/* ========= Start Navigation ========= */}
      <Navbar />
      {/* ========= End Navigation ========= */}

      {/* ========= Start Main Content ========= */}
      <main>
        {/* ========= Start Carousel Section ========= */}
        <section className="section-container" id="carousel">
          <h1 className="text-5xl mt-24">Discover our works</h1>
          <p className="text-xl mt-12 w-1/2 text-soft">
            See how our expertise in web development has helped businesses like
            yours achieve online success through innovative and customized
            solutions
          </p>

          {/* Start Carousel */}
          <div className="my-12">
            {projectImages &&
              projectImages.map((projectImage) => {
                return (
                  <Image
                    key={projectImage.id}
                    src={projectImage.src}
                    alt={projectImage.src}
                  />
                );
              })}
          </div>
          {/* End Carousel */}
        </section>
        {/* ========= End Carousel Section ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </>
  );
}
