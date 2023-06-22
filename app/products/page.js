"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

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
// SVG
import locationSVG from "../../public/images/landing_page/contact-section/location-svg-icon.svg";
import telephoneSVG from "../../public/images/landing_page/contact-section/telephone-svg-icon.svg";

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
        <section className="mt-32">
          {/* Container */}
          <div className="section-container ">
            <h2 className="text-4xl text-center">Where to find us?</h2>
            <p className="text-soft mt-4 text-center md:max-w-lg mx-auto">
              Arrange an appointment for a consultation meeting by visiting one
              of our nearby offices or reaching us through the email address
              provided.
            </p>
          </div>

          {/* Start Map */}
          <iframe
            className="mt-12 w-full h-[30rem]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241.67922529230734!2d121.39708924445328!3d14.26094247701575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e3aad5147297%3A0xb2cb5699ab7d9b4d!2s796W%2B9RW%2C%20Sampaguita%20St%2C%20Santa%20Cruz%2C%20Laguna!5e0!3m2!1sen!2sph!4v1687399910745!5m2!1sen!2sph"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* End Map */}

          <div className="bg-[#19B89B] h-[30rem] relative">
            {/* Start Absolute Card */}
            <div className="absolute -top-24 bg-white border-secondary border-4 py-4 px-6 rounded w-1/3 left-1/3 flex">
              {/* Left Part */}
              <div className="basis-1/2 py-8 border-r-2 flex flex-col space-y-4">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="basis-1/8">
                    <Image
                      className="w-[32.5px] mt-1"
                      src={locationSVG}
                      alt="location-svg"
                    />
                  </div>
                  <div className="basis-7/8 text-soft">
                    National Highway, Sitio Ilaya, Brgy. Sto Domingo, Bay Laguna
                  </div>
                </div>
                {/* Contact Number */}
                <div className="flex gap-4">
                  <div className="basis-1/8">
                    <Image
                      className="w-4 mt-1"
                      src={telephoneSVG}
                      alt="telephone-svg"
                    />
                  </div>
                  <div className="basis-7/8 text-soft underline">
                    +63930-547-5411
                  </div>
                </div>
              </div>
              {/* Right Part */}
              <div className="basis-1/2 py-8 flex flex-col space-y-4 pl-4">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="basis-1/8">
                    <Image
                      className="w-7 mt-1"
                      src={locationSVG}
                      alt="location-svg"
                    />
                  </div>
                  <div className="basis-7/8 text-soft">
                    Brgy. Bubukal, Sitio Sampaguita, Sta. Cruz Laguna
                  </div>
                </div>
                {/* Contact Number */}
                <div className="flex gap-4">
                  <div className="basis-1/8">
                    <Image
                      className="w-4 mt-1"
                      src={telephoneSVG}
                      alt="telephone-svg"
                    />
                  </div>
                  <div className="basis-7/8 text-soft underline">
                    +63955-916-8806
                  </div>
                </div>
              </div>
            </div>
            {/* End Absolute Card */}

            <h1 className="text-5xl text-white text-center pt-44">Join Us</h1>
            <p className="font-serif mt-4 text-center text-white text-xl">
              “Let&#39;s get started and make your mark on the digital world!”
            </p>
            <div className="text-center mt-12">
              <Link href="/solutions">
                <button className="bg-white px-6 py-2 rounded-sm shadow font-sansMedium">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
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
