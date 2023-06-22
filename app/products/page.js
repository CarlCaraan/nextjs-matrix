"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

// react-slick Libary
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// Images
// X
import project0 from "../../public/images/products/project0.jpg";
import project1 from "../../public/images/products/project1.jpg";
import project2 from "../../public/images/products/project2.png";
import project3 from "../../public/images/products/project3.png";
import project4 from "../../public/images/products/project4.png";
import project5 from "../../public/images/products/project5.png";
import project6 from "../../public/images/products/project6.png";
import project7 from "../../public/images/products/project7.png";
// Y
import project8 from "../../public/images/products/project8.png";
import project9 from "../../public/images/products/project9.png";
import project10 from "../../public/images/products/project10.png";
import project11 from "../../public/images/products/project11.png";
import project12 from "../../public/images/products/project12.png";
import project13 from "../../public/images/products/project13.png";
import project14 from "../../public/images/products/project14.png";
import project15 from "../../public/images/products/project15.png";

const projectImagesX = [
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
  {
    id: 7,
    src: project7,
  },
];
const projectImagesY = [
  {
    id: 0,
    src: project8,
  },
  {
    id: 1,
    src: project9,
  },
  {
    id: 2,
    src: project10,
  },
  {
    id: 3,
    src: project11,
  },
  {
    id: 4,
    src: project12,
  },
  {
    id: 5,
    src: project13,
  },
  {
    id: 6,
    src: project14,
  },
  {
    id: 7,
    src: project15,
  },
];

export default function Products() {
  // react-slick config
  const sliderRef = useRef(null);
  useEffect(() => {
    const slider = sliderRef.current.innerSlider;
    slider.autoPlay();

    return () => {
      slider.pause();
    };
  }, []);
  const settings = {
    ref: sliderRef,
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 6,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
  };

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
          {/* X */}
          <Slider {...settings} speed={5000} className="mt-12">
            {projectImagesX &&
              projectImagesX.map((projectImage) => {
                return (
                  <Image
                    className="px-2"
                    key={projectImage.id}
                    src={projectImage.src}
                    alt={projectImage.src}
                    loading="lazy"
                  />
                );
              })}
          </Slider>
          {/* Y */}
          <Slider {...settings} speed={6000} className="mt-4 mb-24">
            {projectImagesY &&
              projectImagesY.map((projectImage) => {
                return (
                  <Image
                    className="px-2"
                    key={projectImage.id}
                    src={projectImage.src}
                    alt={projectImage.src}
                    loading="lazy"
                  />
                );
              })}
          </Slider>
          {/* End Carousel */}
        </section>
        {/* ========= End Carousel Section ========= */}

        {/* ========= Start Map Section ========= */}
        <section className="mt-32 mb-24">
          {/* Container */}
          <div className="section-container ">
            <h2 className="text-4xl text-center">Where to find us?</h2>
            <p className="text-soft mt-4 text-center md:max-w-lg mx-auto">
              Arrange an appointment for a consultation meeting by visiting one
              of our nearby offices or reaching us through the email address
              provided.
            </p>
          </div>

          {/* Map */}
          <iframe
            className="mt-12 w-full h-[30rem]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241.67922529230734!2d121.39708924445328!3d14.26094247701575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e3aad5147297%3A0xb2cb5699ab7d9b4d!2s796W%2B9RW%2C%20Sampaguita%20St%2C%20Santa%20Cruz%2C%20Laguna!5e0!3m2!1sen!2sph!4v1687399910745!5m2!1sen!2sph"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        {/* ========= End Map Section ========= */}
      </main>
      {/* ========= End Main Content ========= */}

      {/* ========= Start Footer ========= */}
      <Footer />
      {/* ========= End Footer ========= */}
    </>
  );
}
